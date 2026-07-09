import {
  lineRegisterUrl,
  lineTargetLabel,
  type LineTarget,
} from "@/lib/line-links";

/**
 * 市町村ページ / 観光地ページに置く「LINEで通知を受け取る」導線。
 *
 * Web Push (PushSubscribeButton) と対になる入口。押すと LIFF の登録ページが
 * LINE アプリ内で開き、そこで idToken 検証つきの購読が完了する。ここでは
 * 状態を持たない (購読中かどうかは LINE 側でしか分からない) ので、
 * ただのリンクとして描画する — クライアント JS は不要。
 *
 * PushSubscribeButton と同じカード形状に揃え、色だけ LINE ブランドの緑に
 * することで「同じ役割・別の届き方」であることを見た目で示す。
 *
 * NEXT_PUBLIC_LIFF_ID 未設定なら何も描画しない (フェイルセーフ)。
 * 表示可否そのものは呼び出し側が isLineEntryReleased() で判断する。
 */

const LINE_GREEN = "#06C755";

export default function LineNotifyButton({
  target,
  hideHeading = false,
}: {
  target: LineTarget;
  hideHeading?: boolean;
}) {
  const href = lineRegisterUrl(target);
  if (!href) return null;

  const label = lineTargetLabel(target);
  const heading =
    target.kind === "muni"
      ? `${label} の新規出没を LINE で受け取る`
      : `${label} 周辺の新規出没を LINE で受け取る`;

  return (
    <div className="not-prose mb-6 rounded-xl border border-stone-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: LINE_GREEN }}
          aria-hidden="true"
        >
          {/* 吹き出し (LINE のトークが届くことの含意)。Lucide ではなく
              PushSubscribeButton のベルと同じくインライン SVG で揃える。 */}
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </span>

        <div className="min-w-0 flex-1">
          {!hideHeading && (
            <p className="text-sm font-semibold text-stone-900">{heading}</p>
          )}
          <p
            className={`text-xs leading-relaxed text-stone-600 ${hideHeading ? "" : "mt-0.5"}`}
          >
            LINE のトークに直接お知らせします。アプリの通知設定のままなので、
            ブラウザ通知が届かない iPhone でも受け取れます。無料です。
          </p>
          <p className="mt-2 text-xs leading-relaxed text-stone-500">
            初回は公式アカウントの友だち追加が必要です。通知が不要になったら
            LINE のトーク画面からいつでも解除できます。
          </p>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 self-center rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: LINE_GREEN }}
        >
          LINEで通知
        </a>
      </div>
    </div>
  );
}
