/**
 * UI トーン比較 (Before / After) — 「文字・色・余白の締め」だけを見比べるための
 * 非公開サンドボックス。本番ページ・地図・ヒートマップには一切影響しない。
 *
 * 左 = 現状 (PlaceCard の実際のクラスをそのまま再現: gray 系・ring・rounded 混在・
 *      amber べた塗り・任意フォントサイズ)。
 * 右 = 改善案 (stone に一本化・白地 + 細い罫線・角丸を rounded-xl に統一・amber は
 *      最小アクセント・フォントサイズを xs/sm/base に snap・余白を一段広く)。
 *
 * リスク色 (出没/生息域) は機能色なので両側とも同じ。今回の対象外。
 */

// 出没バッジの色 (機能色: 両側共通)。
const SIGHT = "bg-red-100 text-red-700";

const NEARBY = [
  { pref: "岩手県", city: "遠野市", section: "附馬牛町", date: "2026-06-26", km: "1.2", head: 1 },
  { pref: "岩手県", city: "遠野市", section: "綾織町", date: "2026-06-25", km: "3.4", head: 2 },
  { pref: "岩手県", city: "花巻市", section: "東和町", date: "2026-06-24", km: "8.1", head: 1 },
];

const ADVICE = [
  { emoji: "🔔", title: "クマ鈴やラジオで音を出す", body: "存在を早めに知らせて遭遇を避ける" },
  { emoji: "🗑️", title: "食べ物・ゴミは密閉して持ち帰る", body: "匂いでの誘引を防ぐ" },
];

/* ============================== BEFORE (現状) ============================== */
function Before() {
  return (
    <div className="w-full max-w-xl bg-white px-4 pb-6 pt-3">
      {/* header */}
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm">
          ←
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-base font-bold text-gray-900">遠野市 山間部</div>
          <div className="truncate text-xs text-gray-500">岩手県 / 遠野市</div>
        </div>
      </div>

      {/* 件数 */}
      <section className="mb-4 rounded-2xl bg-amber-50/70 p-4">
        <div className="text-[10px] font-medium uppercase tracking-wider text-amber-700">
          過去30日・半径 20km 以内の目撃
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-gray-900">12</span>
          <span className="text-sm text-gray-600">件</span>
          <span className="ml-auto text-[11px] text-gray-500">直近7日 3 件 / 全期間 215 件</span>
        </div>
      </section>

      {/* 直近の目撃 */}
      <section className="mb-4">
        <h2 className="mb-2 text-sm font-semibold text-gray-900">🕓 直近の目撃</h2>
        <ul className="space-y-1.5">
          {NEARBY.map((r, i) => (
            <li key={i} className="rounded-lg bg-white px-3 py-2.5 text-sm text-gray-700 ring-1 ring-gray-100">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] text-gray-900">
                    🐻 {r.pref} {r.city}
                    {r.head > 1 && (
                      <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] ${SIGHT}`}>{r.head}頭</span>
                    )}
                  </div>
                  <div className="truncate text-xs text-gray-500">{r.section}</div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-xs text-gray-700">{r.date}</div>
                  <div className="text-[10px] text-gray-400">{r.km} km</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 行動メモ */}
      <section>
        <h2 className="mb-2 text-sm font-semibold text-gray-900">📝 行動メモ</h2>
        <ul className="space-y-1.5">
          {ADVICE.map((a, i) => (
            <li key={i} className="flex items-start gap-2 rounded-lg bg-white px-3 py-2.5 ring-1 ring-gray-100">
              <span className="mt-0.5">{a.emoji}</span>
              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-900">{a.title}</div>
                <div className="text-xs text-gray-600">{a.body}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

/* ============================== AFTER (改善案) ============================== */
function After() {
  return (
    <div className="w-full max-w-xl bg-stone-50 px-5 pb-6 pt-4">
      {/* header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500">
          ←
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-base font-bold text-stone-900">遠野市 山間部</div>
          <div className="truncate text-xs text-stone-500">岩手県 / 遠野市</div>
        </div>
      </div>

      {/* 件数 — amber べた塗りをやめ白地 + 細罫線。数字の大きさで見せる */}
      <section className="mb-3 rounded-xl border border-stone-200 bg-white p-5">
        <div className="flex items-center gap-2 text-xs font-medium text-stone-500">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden />
          過去30日・半径20km以内の目撃
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-4xl font-bold tracking-tight text-stone-900">12</span>
          <span className="text-sm text-stone-500">件</span>
          <span className="ml-auto text-xs text-stone-400">直近7日 3件 ・ 全期間 215件</span>
        </div>
      </section>

      {/* 直近の目撃 */}
      <section className="mb-3 rounded-xl border border-stone-200 bg-white p-5">
        <h2 className="mb-3 text-sm font-semibold text-stone-900">直近の目撃</h2>
        <ul className="divide-y divide-stone-100">
          {NEARBY.map((r, i) => (
            <li key={i} className="flex items-start justify-between gap-3 py-3 first:pt-0 last:pb-0">
              <div className="min-w-0 flex-1">
                <div className="text-sm text-stone-900">
                  {r.pref} {r.city}
                  {r.head > 1 && (
                    <span className={`ml-2 rounded-full px-1.5 py-0.5 text-xs font-medium ${SIGHT}`}>{r.head}頭</span>
                  )}
                </div>
                <div className="truncate text-xs text-stone-500">{r.section}</div>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-xs text-stone-600">{r.date}</div>
                <div className="text-xs text-stone-400">{r.km} km</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 行動メモ */}
      <section className="rounded-xl border border-stone-200 bg-white p-5">
        <h2 className="mb-3 text-sm font-semibold text-stone-900">やること</h2>
        <ul className="space-y-3">
          {ADVICE.map((a, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 text-base">{a.emoji}</span>
              <div className="min-w-0">
                <div className="text-sm font-medium text-stone-900">{a.title}</div>
                <div className="text-xs text-stone-500">{a.body}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default function TokenPreview() {
  return (
    <div className="min-h-screen bg-stone-100 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-xl font-bold text-stone-900">UI トーン比較</h1>
        <p className="mt-1 text-sm text-stone-600">
          地点カードの「文字・色・余白」だけを締めた場合の見比べ。
          <strong className="font-semibold">地図・ヒートマップ・データ・判定ロジックは対象外</strong>です。
          出没バッジ等の機能色は両側で同じにしています。
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <div className="mb-2 inline-block rounded-full bg-stone-200 px-3 py-1 text-xs font-semibold text-stone-600">
              現状
            </div>
            <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
              <Before />
            </div>
          </div>
          <div>
            <div className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
              改善案 (トーンを締めた版)
            </div>
            <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
              <After />
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-stone-200 bg-white p-4 text-sm text-stone-600">
          <div className="font-semibold text-stone-900">改善案でやっていること</div>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>gray 系を stone に一本化(色温度のムラを消す)</li>
            <li>カードの角丸を <code>rounded-xl</code> に統一・<code>ring</code> を <code>border</code> に</li>
            <li>amber のべた塗りをやめ、最小アクセント(小さな点)に</li>
            <li>任意フォントサイズ(10/11/13px)を xs/sm に snap</li>
            <li>余白を一段広く・区切りは罫線より余白主体</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
