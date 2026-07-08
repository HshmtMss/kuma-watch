/**
 * JPEG のEXIFからGPS撮影位置(緯度経度)だけを読む軽量パーサ（依存なし・クライアント用）。
 * 投稿写真は圧縮(canvas再エンコード)でEXIFが剥がれるため、圧縮する「前」の元ファイルから
 * ここで読み取り、投稿に添付する。EXIFが無い/GPS無し/JPEG以外は null を返す（正常系）。
 */

export type PhotoGps = { lat: number; lon: number };

type Get = {
  view: DataView;
  little: boolean;
  tiff: number; // TIFFヘッダ先頭のオフセット
};

export async function readExifGps(file: File): Promise<PhotoGps | null> {
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

function parseTiff(view: DataView, tiff: number): PhotoGps | null {
  const order = view.getUint16(tiff);
  const little = order === 0x4949; // "II"=little, "MM"=big
  if (!little && order !== 0x4d4d) return null;
  const g: Get = { view, little, tiff };
  const g32 = (o: number) => view.getUint32(o, little);

  const ifd0 = tiff + g32(tiff + 4);
  const gpsPtr = entryValue32(g, ifd0, 0x8825); // GPS IFD へのポインタ
  if (gpsPtr == null) return null;
  const gpsIfd = tiff + gpsPtr;

  const lat = readCoord(g, gpsIfd, 0x0002);
  const lon = readCoord(g, gpsIfd, 0x0004);
  if (lat == null || lon == null) return null;
  const latRef = readRefChar(g, gpsIfd, 0x0001);
  const lonRef = readRefChar(g, gpsIfd, 0x0003);
  const sLat = latRef === "S" ? -lat : lat;
  const sLon = lonRef === "W" ? -lon : lon;
  if (!Number.isFinite(sLat) || !Number.isFinite(sLon)) return null;
  if (sLat === 0 && sLon === 0) return null; // 未設定を除外
  return { lat: sLat, lon: sLon };
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

/** GPS参照(N/S/E/W)の1文字を返す。ASCIIは4バイト値フィールドに収まる。 */
function readRefChar(g: Get, ifd: number, tag: number): string | null {
  const e = findEntry(g, ifd, tag);
  if (e == null) return null;
  const c = g.view.getUint8(e + 8);
  return c ? String.fromCharCode(c) : null;
}
