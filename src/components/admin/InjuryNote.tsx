/**
 * 人身被害の件数に必ず添える注記。
 *
 * 人身被害はコメント本文の語句判定なので、拾えるかどうかは「その情報源が
 * どれだけ詳しく書くか」で決まる。実測 (98,407件・県別の検出率):
 *   岩手県 8.69% / 群馬県 1.27% / 秋田県 0.73% / 北海道 0.15% / 山口県 0.10%
 * 岩手が突出しているのは人身被害専用のデータセットだからで、山口が低いのは
 * 山口が安全だからではない。87倍の差は実力差ではなく記録形式の差である。
 *
 * したがって:
 *   - 地域をまたいで人身被害の件数・率を比べてはいけない
 *   - 同じ地域の中でも、その地域の被害記録がどこから来ているかで意味が変わる
 * この2点を、人身被害の数字が出るセクションすべてに添える。
 */
export type InjurySource = { source: string; count: number; share: number };

export default function InjuryNote({
  sources,
  avgCommentLength,
}: {
  /** その地域の被害記録のソース内訳 (件数の多い順) */
  sources: InjurySource[];
  /** その地域のコメント平均文字数。短いほど拾えない */
  avgCommentLength: number;
}) {
  const total = sources.reduce((a, s) => a + s.count, 0);
  const top = sources[0];
  // 人身被害専用データセット。混ざっていると件数が跳ね上がる
  const specialized = sources.find((s) => s.source === "iwate");

  return (
    <p className="mt-2 rounded-lg bg-stone-50 px-3 py-2 text-[11px] leading-relaxed text-stone-600">
      <strong className="text-stone-700">人身被害の件数について：</strong>
      コメント本文の語句判定なので、拾えるかどうかは情報源がどれだけ詳しく書くかで
      決まります（県別の検出率は 岩手 8.69% 〜 山口 0.10%）。
      <strong className="text-stone-700">地域をまたいで比べないでください。</strong>
      {total > 0 && top && (
        <>
          {" "}
          この地域の被害記録 {total.toLocaleString("ja-JP")} 件のうち{" "}
          <code>{top.source}</code> が {Math.round(top.share * 100)}%
          {specialized && specialized.source !== top.source && (
            <>
              、<code>iwate</code>（人身被害専用データ）が{" "}
              {Math.round(specialized.share * 100)}%
            </>
          )}
          {specialized && specialized.source === top.source && (
            <>（<code>iwate</code> は人身被害専用のデータセット）</>
          )}
          。
        </>
      )}
      {avgCommentLength > 0 && (
        <>
          {" "}
          この地域のコメントは平均 {Math.round(avgCommentLength)} 字
          {avgCommentLength < 15 && "で、被害の記述自体がほとんど無いため件数は過小です"}
          。
        </>
      )}
    </p>
  );
}
