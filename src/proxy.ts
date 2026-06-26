import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";
import { resolveCanonicalMuniName } from "@/lib/muni-name";

/**
 * /place/{pref}/{muni} の市町村ページに対する正規化リダイレクト。
 *
 * ニュース/研究ページが出没データの「生の地点名」(番地付き・字・公民館名・
 * バス停名 等) を市町村 URL として参照していた結果、マスターに無い URL が大量に
 * クロールされ、Search Console で「見つかりませんでした(404)」「代替ページ」が
 * 急増していた。
 *
 * ここで実在しない市町村 URL を *ルート描画より前に* 308 で正規 URL へ集約する:
 *   - マスター後方一致 → その市町村ページ (例: 小鹿野町 → 秩父郡小鹿野町)
 *   - 解決できなければ   → 都道府県ページ (/place/{pref})
 *
 * なぜ Server Component の permanentRedirect ではなく Proxy か:
 *   ページ本体での permanentRedirect は本番(Vercel)のストリーミング描画経路で
 *   クライアント側メタタグ挿入に切り替わり TypeError → 500 を誘発した。Proxy は
 *   素の HTTP 308 を返すだけなのでこの問題を回避でき、19MB の sightings も読まない。
 */

// マスター市区町村キー (`prefName/cityName`)。実在ページの O(1) 判定用。
const MASTER_KEYS = new Set(
  JAPAN_MUNICIPALITIES.map((m) => `${m.prefName}/${m.cityName}`),
);

// 政令市の親 (「○○市」)。マスターは区単位だが、親ページも静的生成されるため
// リダイレクト対象から除外する。
const SEIREI_PARENT_KEYS = new Set<string>();
for (const m of JAPAN_MUNICIPALITIES) {
  const mt = /^(.+市)(.+区)$/.exec(m.cityName);
  if (mt) SEIREI_PARENT_KEYS.add(`${m.prefName}/${mt[1]}`);
}

export function proxy(req: NextRequest): NextResponse {
  const { pathname } = req.nextUrl;
  // "/place/{pref}/{muni}" の 3 セグメントのみを対象にする。
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] !== "place" || parts.length !== 3) {
    return NextResponse.next();
  }

  let pref: string;
  let muni: string;
  try {
    pref = decodeURIComponent(parts[1]);
    muni = decodeURIComponent(parts[2]);
  } catch {
    return NextResponse.next();
  }

  // 実在する市町村ページ (マスター or 政令市親) はそのまま静的ページを配信。
  const key = `${pref}/${muni}`;
  if (MASTER_KEYS.has(key) || SEIREI_PARENT_KEYS.has(key)) {
    return NextResponse.next();
  }

  // 非正規 URL → 正規ページへ 308。canonical はマスター名なので再リダイレクト
  // ループは起きない (次回アクセスは MASTER_KEYS で next() される)。
  const canonical = resolveCanonicalMuniName(pref, muni);
  const dest = canonical
    ? `/place/${encodeURIComponent(pref)}/${encodeURIComponent(canonical)}`
    : `/place/${encodeURIComponent(pref)}`;
  return NextResponse.redirect(new URL(dest, req.url), 308);
}

export const config = {
  matcher: "/place/:pref/:muni",
};
