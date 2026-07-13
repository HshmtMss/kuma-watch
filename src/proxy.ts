import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { resolveCanonicalMuniName } from "@/lib/muni-name";

/**
 * 実在しない URL を *ルート描画より前に* 308 で正規 URL へ集約するリダイレクト層。
 * /place/{pref}/{muni} と /spot/{slug} はどちらも dynamicParams=false のため、
 * マスターに無い URL は素の 404 になる。過去にインデックスされた URL が
 * データ更新で消えると「見つかりませんでした(404)」が積み上がるので、ここで
 * 関連ページへ 308 集約して 404 化を防ぐ。
 *
 * /place: ニュース/研究ページが出没データの「生の地点名」(番地付き・字・公民館名・
 *   バス停名 等) を市町村 URL として参照 → マスター後方一致で市町村ページ、
 *   解決不能なら都道府県ページ (/place/{pref}) へ。
 * /spot:  ランドマークのマスター(japan-landmarks.ts)は拡張中で slug が
 *   リネーム/削除されうる。消えた slug は観光地一覧 (/spot) へ 308。
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

// 実在するランドマーク slug。実在ページの O(1) 判定用。
const LANDMARK_SLUGS = new Set(JAPAN_LANDMARKS.map((l) => l.slug));

export function proxy(req: NextRequest): NextResponse {
  const { pathname } = req.nextUrl;
  const parts = pathname.split("/").filter(Boolean);

  // "/spot/{slug}" の 2 セグメント: 実在しない slug は観光地一覧へ 308。
  if (parts[0] === "spot" && parts.length === 2) {
    let slug: string;
    try {
      slug = decodeURIComponent(parts[1]);
    } catch {
      return NextResponse.next();
    }
    if (LANDMARK_SLUGS.has(slug)) return NextResponse.next();
    // /spot は 1 セグメントで matcher に一致しないためループしない。
    return NextResponse.redirect(new URL("/spot", req.url), 308);
  }

  // "/place/{pref}/{muni}" の 3 セグメントのみを対象にする。
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
  matcher: ["/place/:pref/:muni", "/spot/:slug"],
};
