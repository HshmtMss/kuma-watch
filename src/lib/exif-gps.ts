/**
 * JPEG のEXIFから撮影情報を読む軽量パーサ（依存なし・クライアント用）。
 * 投稿写真は圧縮(canvas再エンコード)でEXIFが剥がれるため、圧縮する「前」の元ファイルから
 * ここで読み取り、投稿に添付する。EXIFが無い/JPEG以外は null を返す（正常系）。
 *
 * 公開する写真からEXIFが剥がれるのは意図した動作。撮影者の自宅などが写真から
 * たどれないようにするため、ここで読んだ値は投稿の内部フィールドとしてだけ持つ。
 *
 * 信ぴょう性の判断に効くのは次の 2 つ:
 *   - takenAt (DateTimeOriginal) と申告日時のズレ → 古い写真の使い回しが見える
 *   - gpsAt   (GPSDateStamp/TimeStamp) は衛星由来で端末の時計とは別系統。
 *     takenAt と食い違えば、日時をいじった写真の手がかりになる
 */

export type PhotoGps = { lat: number; lon: number };

export type PhotoExif = {
  /** GPS 撮影位置 */
  gps: PhotoGps | null;
  /** 撮影日時 (端末の時計) ISO 8601。ローカル時刻として解釈する */
  takenAt?: string;
  /** GPS 由来の撮影日時 (UTC) ISO 8601 */
  gpsAt?: string;
  /** 撮影方向 (真北/磁北からの度)。iPhone は記録するが Android は機種による */
  direction?: number;
  /** 方向の基準 "T"=真北 / "M"=磁北 */
  directionRef?: string;
  /** 機種名 (例: "Apple iPhone 15") */
  device?: string;
  /** 加工ソフト名。編集済み写真の手がかり */
  software?: string;
};

type Get = {
  view: DataView;
  little: boolean;
  tiff: number; // TIFFヘッダ先頭のオフセット
};

export async function readExifGps(file: File): Promise<PhotoGps | null> {
  return (await readExif(file))?.gps ?? null;
}

/** EXIF をまとめて読む。JPEG 以外・EXIF 無しは null */
export async function readExif(file: File): Promise<PhotoExif | null> {
  try {
    if (!/^image\/jpe?g$/i.test(file.type)) return null; // JPEGのみEXIF対応
    const buf = await file.arrayBuffer();
    const view = new DataView(buf);
    if (view.byteLength < 4 || view.getUint16(0) !== 0xffd8) return null; // SOI

    let offset = 2;
    const len = view.byteLength;
    while (offset + 4 <= len) {
      const marker = view.getUint16(offset);
      if ((marker & 0xff00) !== 0xff00) break; // マーカーでない
      if (marker === 0xffda || marker === 0xffd9) break; // SOS/EOI 以降にEXIFは無い
      const size = view.getUint16(offset + 2);
      if (size < 2) break;
      if (marker === 0xffe1) {
        // APP1: "Exif\0\0" で始まればEXIF本体
        const app1 = offset + 4;
        if (
          app1 + 6 <= len &&
          view.getUint32(app1) === 0x45786966 && // "Exif"
          view.getUint16(app1 + 4) === 0x0000
        ) {
          return parseTiff(view, app1 + 6);
        }
      }
      offset += 2 + size;
    }
    return null;
  } catch {
    return null;
  }
}

function parseTiff(view: DataView, tiff: number): PhotoExif | null {
  const order = view.getUint16(tiff);
  const little = order === 0x4949; // "II"=little, "MM"=big
  if (!little && order !== 0x4d4d) return null;
  const g: Get = { view, little, tiff };
  const g32 = (o: number) => view.getUint32(o, little);

  const ifd0 = tiff + g32(tiff + 4);

  const out: PhotoExif = { gps: null };

  // IFD0: 機種・加工ソフト
  out.device =
    [readAscii(g, ifd0, 0x010f), readAscii(g, ifd0, 0x0110)]
      .filter(Boolean)
      .join(" ") || undefined;
  out.software = readAscii(g, ifd0, 0x0131) ?? undefined;

  // Exif IFD: 撮影日時
  const exifPtr = entryValue32(g, ifd0, 0x8769);
  if (exifPtr != null) {
    const exifIfd = tiff + exifPtr;
    // "2026:09:04 07:21:33" 形式。ローカル時刻なのでゾーンは付けない
    const raw = readAscii(g, exifIfd, 0x9003) ?? readAscii(g, exifIfd, 0x9004);
    out.takenAt = parseExifDateTime(raw);
  }

  // GPS IFD: 位置・方向・衛星日時
  const gpsPtr = entryValue32(g, ifd0, 0x8825);
  if (gpsPtr != null) {
    const gpsIfd = tiff + gpsPtr;
    const lat = readCoord(g, gpsIfd, 0x0002);
    const lon = readCoord(g, gpsIfd, 0x0004);
    if (lat != null && lon != null) {
      const latRef = readRefChar(g, gpsIfd, 0x0001);
      const lonRef = readRefChar(g, gpsIfd, 0x0003);
      const sLat = latRef === "S" ? -lat : lat;
      const sLon = lonRef === "W" ? -lon : lon;
      // 0,0 は未設定なので採らない
      if (Number.isFinite(sLat) && Number.isFinite(sLon) && (sLat !== 0 || sLon !== 0))
        out.gps = { lat: sLat, lon: sLon };
    }
    const dir = readRational(g, gpsIfd, 0x0011);
    if (dir != null && Number.isFinite(dir) && dir >= 0 && dir <= 360) {
      out.direction = Math.round(dir);
      out.directionRef = readRefChar(g, gpsIfd, 0x0010) ?? undefined;
    }
    out.gpsAt = readGpsDateTime(g, gpsIfd);
  }

  // 何も取れなければ null (呼び出し側の「EXIF 無し」扱いを変えない)
  if (!out.gps && !out.takenAt && !out.device) return null;
  return out;
}

/** "YYYY:MM:DD HH:MM:SS" → "YYYY-MM-DDTHH:MM:SS" (ゾーンなし = ローカル時刻) */
function parseExifDateTime(raw: string | null | undefined): string | undefined {
  if (!raw) return undefined;
  const m = /^(\d{4}):(\d{2}):(\d{2})[ T](\d{2}):(\d{2}):(\d{2})/.exec(raw.trim());
  if (!m) return undefined;
  const [, y, mo, d, h, mi, sec] = m;
  if (y === "0000") return undefined; // 未設定
  return `${y}-${mo}-${d}T${h}:${mi}:${sec}`;
}

/** GPSDateStamp("YYYY:MM:DD") + GPSTimeStamp(RATIONAL×3) を UTC の ISO で返す */
function readGpsDateTime(g: Get, gpsIfd: number): string | undefined {
  const date = readAscii(g, gpsIfd, 0x001d);
  if (!date) return undefined;
  const m = /^(\d{4}):(\d{2}):(\d{2})/.exec(date.trim());
  if (!m || m[1] === "0000") return undefined;
  const e = findEntry(g, gpsIfd, 0x0007);
  let hh = 0,
    mm = 0,
    ss = 0;
  if (e != null) {
    const off = g.tiff + g.view.getUint32(e + 8, g.little);
    if (off + 24 <= g.view.byteLength) {
      const r = (o: number) => {
        const num = g.view.getUint32(o, g.little);
        const den = g.view.getUint32(o + 4, g.little);
        return den === 0 ? 0 : num / den;
      };
      hh = Math.floor(r(off));
      mm = Math.floor(r(off + 8));
      ss = Math.floor(r(off + 16));
    }
  }
  const p = (n: number) => String(n).padStart(2, "0");
  return `${m[1]}-${m[2]}-${m[3]}T${p(hh)}:${p(mm)}:${p(ss)}Z`;
}

/** IFD 内で tag を探し、そのエントリ先頭オフセットを返す。 */
function findEntry(g: Get, ifd: number, tag: number): number | null {
  const n = g.view.getUint16(ifd, g.little);
  for (let i = 0; i < n; i++) {
    const e = ifd + 2 + i * 12;
    if (e + 12 > g.view.byteLength) return null;
    if (g.view.getUint16(e, g.little) === tag) return e;
  }
  return null;
}

/** LONG(型4) の値を1つ返す（IFDポインタ等）。 */
function entryValue32(g: Get, ifd: number, tag: number): number | null {
  const e = findEntry(g, ifd, tag);
  if (e == null) return null;
  return g.view.getUint32(e + 8, g.little);
}

/** GPS の度分秒(RATIONAL×3)を10進度に変換。 */
function readCoord(g: Get, ifd: number, tag: number): number | null {
  const e = findEntry(g, ifd, tag);
  if (e == null) return null;
  const off = g.tiff + g.view.getUint32(e + 8, g.little); // 24バイト先を指す
  const r = (o: number) => {
    const num = g.view.getUint32(o, g.little);
    const den = g.view.getUint32(o + 4, g.little);
    return den === 0 ? 0 : num / den;
  };
  if (off + 24 > g.view.byteLength) return null;
  return r(off) + r(off + 8) / 60 + r(off + 16) / 3600;
}

/** ASCII(型2) の文字列を返す。4バイトを超えるときは値フィールドがオフセット。 */
function readAscii(g: Get, ifd: number, tag: number): string | null {
  const e = findEntry(g, ifd, tag);
  if (e == null) return null;
  const count = g.view.getUint32(e + 4, g.little);
  if (count === 0 || count > 512) return null;
  const off = count <= 4 ? e + 8 : g.tiff + g.view.getUint32(e + 8, g.little);
  if (off + count > g.view.byteLength) return null;
  let out = "";
  for (let i = 0; i < count; i++) {
    const c = g.view.getUint8(off + i);
    if (c === 0) break; // NUL 終端
    out += String.fromCharCode(c);
  }
  const t = out.trim();
  return t.length > 0 ? t : null;
}

/** RATIONAL(型5) を 1 つ読む。値フィールドは常にオフセット (8バイトなので) */
function readRational(g: Get, ifd: number, tag: number): number | null {
  const e = findEntry(g, ifd, tag);
  if (e == null) return null;
  const off = g.tiff + g.view.getUint32(e + 8, g.little);
  if (off + 8 > g.view.byteLength) return null;
  const num = g.view.getUint32(off, g.little);
  const den = g.view.getUint32(off + 4, g.little);
  return den === 0 ? null : num / den;
}

/** GPS参照(N/S/E/W)の1文字を返す。ASCIIは4バイト値フィールドに収まる。 */
function readRefChar(g: Get, ifd: number, tag: number): string | null {
  const e = findEntry(g, ifd, tag);
  if (e == null) return null;
  const c = g.view.getUint8(e + 8);
  return c ? String.fromCharCode(c) : null;
}
