"use client";

// 配信履歴テーブル（LINE / Web Push 共通）。管理画面で「何通送ったか」を常時確認する。
// 重要な表記: sent は「配信 API が受理した送信リクエスト数」であって到達・開封の保証
// ではない。LINE の multicast は 200 が返ればブロック済ユーザも 1 通に含む。
// recipients=0 / sent=0 は異常ではなく「その回の新規目撃に該当する購読者が居なかった」
// 正常ケース。

export type DispatchRow = {
  ts: number;
  source: string;
  muniGroups: number;
  recipients: number;
  sent: number;
  dispatched: number;
  // 対象者が居た(recipients>0)のに送信0だったときの、LINE API の失敗理由。
  error?: string;
};

const SOURCE_LABEL: Record<string, string> = {
  "news-flash": "ニュース速報",
  sharp9110: "警察通報",
  unknown: "—",
};

function fmtTs(ms: number): string {
  const d = new Date(ms + 9 * 3600 * 1000); // JST
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getUTCMonth() + 1}/${p(d.getUTCDate())} ${p(d.getUTCHours())}:${p(
    d.getUTCMinutes(),
  )}`;
}

export default function DispatchLogTable({
  log,
  channel,
}: {
  log: DispatchRow[];
  channel: string;
}) {
  // 対象者が居た(マッチ>0)のに1通も送れなかった行を「異常」とみなす。
  const isFailing = (r: DispatchRow) => r.recipients > 0 && r.sent === 0;
  const failing = log.filter(isFailing).length;
  const lastError = log.find((r) => isFailing(r) && r.error)?.error;
  return (
    <section>
      <h2 className="text-base font-bold text-stone-900">
        直近の配信履歴（{channel}）
      </h2>
      <p className="mb-2 mt-0.5 text-xs text-stone-500">
        1 行 = 1 配信。<b>送信</b>は配信 API が受理したリクエスト数（到達・開封の
        保証ではありません）。<b>マッチも送信も 0</b> の回は「該当する購読者が居
        なかった」正常なケースです。ただし
        <b className="text-red-600">マッチが 1 以上なのに送信が 0</b>
        の回は、対象者が居たのに送れていない異常で、その行に理由を表示します。
      </p>
      {failing > 0 && (
        <div className="mb-2 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-xs text-red-800">
          <b>直近{log.length}件のうち{failing}件で、対象者が居たのに送信できていません。</b>
          {lastError && <> 理由: <code className="font-mono">{lastError}</code></>}
          <br />
          LINE 側の設定（送信権限・上限・トークン）を確認してください。
        </div>
      )}
      {log.length === 0 ? (
        <div className="rounded-2xl border border-stone-200 bg-white px-4 py-6 text-center text-sm text-stone-400">
          まだ配信記録がありません。記録開始後の配信から表示されます。
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left text-xs text-stone-500">
                <th className="px-3 py-2 font-medium">日時</th>
                <th className="px-3 py-2 font-medium">由来</th>
                <th className="px-3 py-2 font-medium">マッチ</th>
                <th className="px-3 py-2 font-medium">送信</th>
                <th className="px-3 py-2 font-medium">対象件数</th>
              </tr>
            </thead>
            <tbody>
              {log.map((r, i) => {
                const failed = isFailing(r);
                return (
                  <tr
                    key={`${r.ts}-${i}`}
                    className={`border-b border-stone-100 last:border-0 ${failed ? "bg-red-50" : ""}`}
                  >
                    <td className="whitespace-nowrap px-3 py-1.5 text-stone-900">
                      {fmtTs(r.ts)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-1.5 text-stone-600">
                      {SOURCE_LABEL[r.source] ?? r.source}
                    </td>
                    <td className="px-3 py-1.5 tabular-nums text-stone-600">
                      {r.recipients.toLocaleString("ja-JP")}
                    </td>
                    <td
                      className={`px-3 py-1.5 tabular-nums font-semibold ${failed ? "text-red-600" : "text-stone-900"}`}
                    >
                      {r.sent.toLocaleString("ja-JP")}
                      {failed && (
                        <span className="ml-1 font-normal text-red-600">
                          {r.error ? `⚠ ${r.error}` : "⚠ 送信失敗"}
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-1.5 tabular-nums text-stone-500">
                      {r.dispatched.toLocaleString("ja-JP")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
