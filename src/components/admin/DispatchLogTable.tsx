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
  return (
    <section>
      <h2 className="text-base font-bold text-stone-900">
        直近の配信履歴（{channel}）
      </h2>
      <p className="mb-2 mt-0.5 text-xs text-stone-500">
        1 行 = 1 配信。<b>送信</b>は配信 API が受理したリクエスト数（到達・開封の
        保証ではありません）。マッチ・送信が 0 の回は「該当する購読者が居なかった」
        正常なケースです。
      </p>
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
              {log.map((r, i) => (
                <tr
                  key={`${r.ts}-${i}`}
                  className="border-b border-stone-100 last:border-0"
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
                  <td className="px-3 py-1.5 tabular-nums font-semibold text-stone-900">
                    {r.sent.toLocaleString("ja-JP")}
                  </td>
                  <td className="px-3 py-1.5 tabular-nums text-stone-500">
                    {r.dispatched.toLocaleString("ja-JP")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
