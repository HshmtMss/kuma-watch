import { Agent, fetch as undiciFetch } from "undici";
import type { DataSourceEntry } from "@/data/data-sources";
import { containingCode, resolveMuni } from "@/lib/muni-boundary";
import { inJapanBounds } from "./types";
import type { UnifiedSighting } from "./types";

/**
 * 岐阜県「県域統合型GISぎふ / クママップ」からの取り込み。
 *
 * 経緯: 岐阜県は CKAN の年度別 Shapefile で公開していたが、データセットが
 * 「クママップ（過去）」に変わり最新は令和7年度・2025年10月まで。現行データは
 * GIS 側へ移り、当方の取り込みは 2025-10-20 を最後に 306 日止まっていた
 * (3,209 件を持っていたため件数の多さに埋もれて気づけなかった)。
 *
 * 岐阜県は白川郷・飛騨・奥美濃を抱える主要なクマ県で、観光地ページの価値も高い。
 *
 * 取得の要点:
 *  1. サーバの TLS が古く、現代の OpenSSL 既定では
 *     「dh key too small」でハンドシェイクに失敗する。undici の Agent に
 *     セキュリティレベルを下げた cipher 指定を渡して接続する。
 *  2. データ到達前に利用許諾の同意が必要。POST /Agreement/Agree で通し、
 *     セッション Cookie を以降のリクエストに引き継ぐ。
 *  3. 属性は Attribute/GetLayerAttr から取れる。パラメータ名は短縮形で、
 *     クライアント JS の組み立て (li;gmt;mn;dtp;fsid;mcl;ltp) に合わせる。
 *     lc (検索条件) は空で全件。psz を大きくすれば 1 リクエストで全件返る。
 *
 * データの質: 緯度経度が直接入っており、字レベルの地名・時間帯・出没場所の
 * 種別・頭数まで揃う。ジオコーディング不要で、当方が扱う中で最も精度が高い。
 */

const PREF = "岐阜県";
const ORIGIN = "https://gis-gifu.jp";
const MAP_ID = "10538";

// フィールドの並び (GetLayerField で確認)
//  0:出没月 1:出没日 2:出没時間 3:通報時間 4:通報者 5:市町村名 6:旧市町村名
//  7:出没場所 8:頭数 9:目撃者状況 10:メッシュ番号 11:入力所属
const F_MONTH = "fieldvalue0";
const F_DAY = "fieldvalue1";
const F_TIME = "fieldvalue2";
const F_CITY = "fieldvalue5";
const F_SECTION = "fieldvalue6";
const F_PLACE = "fieldvalue7";
const F_HEAD = "fieldvalue8";

type AttrRecord = Record<string, string>;

/**
 * 古い TLS を受け入れる接続。証明書の検証は通常どおり行い、鍵交換
 * パラメータの最低強度だけ緩める (この 1 ホストへの読み取り専用)。
 *
 * 環境で通る設定が違う。ローカル (Node 25) は SECLEVEL=1 で足りたが、
 * CI (Node 20) では同じ指定で fetch failed になった。undici / OpenSSL の
 * 版差に依存するので、緩い順ではなく「必要最小限の緩さ」から順に試す。
 */
const TLS_ATTEMPTS: { label: string; connect: Record<string, unknown> }[] = [
  { label: "SECLEVEL=1", connect: { ciphers: "DEFAULT@SECLEVEL=1" } },
  { label: "SECLEVEL=0", connect: { ciphers: "ALL@SECLEVEL=0" } },
  {
    label: "SECLEVEL=0 + TLSv1",
    connect: { ciphers: "ALL@SECLEVEL=0", minVersion: "TLSv1" },
  },
];

/** 実際に接続できた Agent を返す。全部だめなら最後の失敗を投げる。 */
async function connectLegacy(): Promise<{ agent: Agent; cookie: string }> {
  let lastErr: unknown = null;
  for (const t of TLS_ATTEMPTS) {
    const agent = new Agent({ connect: t.connect });
    try {
      const r = await agreeAndFetch(
        "/gifu/Agreement/Agree",
        `MapId=${MAP_ID}`,
        "",
        agent,
      );
      console.log(`[gifu-gis] TLS ${t.label} で接続`);
      return { agent, cookie: r.cookie };
    } catch (e) {
      lastErr = e;
      const err = e as Error & { cause?: Error };
      console.log(
        `[gifu-gis] TLS ${t.label} 失敗: ${(err.cause?.message ?? err.message).slice(0, 100)}`,
      );
    }
  }
  throw lastErr;
}

/** レイヤ名から年度を取る。「R8クマ目撃」→ 2026、「H28クマ出没」→ 2016。 */
export function layerFiscalYear(layerName: string): number | null {
  const r = /^R(\d{1,2})/.exec(layerName);
  if (r) return 2018 + Number(r[1]);
  const h = /^H(\d{1,2})/.exec(layerName);
  if (h) return 1988 + Number(h[1]);
  return null;
}

/**
 * 年度と「M月」「D日」から西暦の日付を組み立てる。
 * 年度は 4 月始まりなので、1〜3 月は翌暦年になる。
 */
export function toIsoDate(
  fiscalYear: number,
  monthText: string,
  dayText: string,
): string | null {
  const m = /(\d{1,2})/.exec(monthText ?? "");
  const d = /(\d{1,2})/.exec(dayText ?? "");
  if (!m || !d) return null;
  const month = Number(m[1]);
  const day = Number(d[1]);
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;
  const year = month <= 3 ? fiscalYear + 1 : fiscalYear;
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

async function agreeAndFetch(
  path: string,
  body: string,
  cookie: string,
  dispatcher: Agent,
): Promise<{ text: string; cookie: string }> {
  const res = await undiciFetch(`${ORIGIN}${path}`, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Requested-With": "XMLHttpRequest",
      Referer: `${ORIGIN}/gifu/Map?mid=${MAP_ID}`,
      "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)",
      ...(cookie ? { Cookie: cookie } : {}),
    },
    dispatcher,
  });
  const setCookie = res.headers.get("set-cookie");
  const next = setCookie
    ? setCookie
        .split(/,(?=[^;]+=)/)
        .map((c) => c.split(";")[0].trim())
        .join("; ")
    : cookie;
  return { text: await res.text(), cookie: next || cookie };
}

export async function fetchGifuGisSightings(
  source: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  const layers = source.gifuGisLayers ?? [];
  if (!layers.length) return [];
  const out: UnifiedSighting[] = [];

  try {
    // 利用許諾に同意してセッションを得る (ここで TLS も確立する)。
    const { agent: dispatcher, cookie: agreedCookie } = await connectLegacy();
    let cookie = agreedCookie;

    for (const layer of layers) {
      const fy = layerFiscalYear(layer.name);
      if (fy === null) continue;
      const params = new URLSearchParams({
        li: String(layer.layerId),
        gmt: "1",
        mn: layer.name,
        dtp: "RR",
        fsid: String(layer.fieldSetId),
        mcl: String(layer.fieldSetId),
        ltp: "0",
        allFiledFlg: "1",
        psz: "5000",
        pno: "1",
        jc: "1",
        lc: "",
      });
      const r = await agreeAndFetch(
        "/gifu/Attribute/GetLayerAttr",
        params.toString(),
        cookie,
        dispatcher,
      );
      cookie = r.cookie;
      let recs: AttrRecord[] = [];
      try {
        const j = JSON.parse(r.text) as {
          JsonResult?: { records?: AttrRecord[] };
        };
        recs = j.JsonResult?.records ?? [];
      } catch {
        console.log(`[gifu-gis ${layer.name}] JSON でない応答`);
        continue;
      }
      let pinned = 0;
      let dropped = 0;
      for (let i = 0; i < recs.length; i++) {
        const rec = recs[i];
        const date = toIsoDate(fy, rec[F_MONTH], rec[F_DAY]);
        const cityName = (rec[F_CITY] ?? "").trim();
        const lat = Number(rec.center_y);
        const lon = Number(rec.center_x);
        if (!date || !cityName) {
          dropped++;
          continue;
        }
        if (!Number.isFinite(lat) || !Number.isFinite(lon) || !inJapanBounds(lat, lon)) {
          dropped++;
          continue;
        }
        // 市町村マスタに無い名前は取り込まない (集計とリンクが壊れる)。
        const muni = resolveMuni(PREF, cityName);
        if (!muni) {
          dropped++;
          continue;
        }
        // 出典の座標が、出典自身が言う市町村の中に本当にあるかを確かめる。
        // 一括投入なので 1 件ずつ人が見て気づけない。確証が取れたものだけ
        // 地図に出し、外れたものは捨てずに市町村どまりへ落とす。
        const code = containingCode(lat, lon);
        const verified = Boolean(code && muni.cityCodes.includes(code));
        if (verified) pinned++;
        const section = (rec[F_SECTION] ?? "").trim();
        const place = (rec[F_PLACE] ?? "").trim();
        const time = (rec[F_TIME] ?? "").trim();
        const head = Number(rec[F_HEAD]);
        out.push({
          id: `${source.id}-${layer.name}-${date}-${i}`,
          source: source.id,
          // location-precision の GEOCODED_KINDS に入る種別。sectionName が
          // 空なら「市町村までしか分からない事案」として扱われる。
          sourceKind: "llm-html",
          lat,
          lon,
          date,
          prefectureName: PREF,
          cityName: cityName.slice(0, 40),
          sectionName: verified ? section.slice(0, 40) : "",
          comment: [section, place, time].filter(Boolean).join(" ").slice(0, 80),
          headCount: Number.isInteger(head) && head > 0 ? head : 1,
        });
      }
      console.log(
        `[gifu-gis ${layer.name}] ${recs.length} rows → ピン ${pinned} / 市町村どまり ${recs.length - pinned - dropped} / 除外 ${dropped}`,
      );
    }
  } catch (e) {
    // undici の "fetch failed" は原因が cause 側にある。そこを出さないと
    // CI で何が起きたか分からない (実際にこれで切り分けに手間取った)。
    const err = e as Error & { cause?: Error };
    console.log(
      `[gifu-gis] 取得失敗: ${(err.cause?.message ?? err.message).slice(0, 200)}`,
    );
    return out;
  }
  return out;
}
