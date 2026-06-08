import KumaClient from "@/components/KumaClient";

export default function HomePage() {
  return (
    <>
      {/* ページの主見出し (H1)。トップは全画面マップ UI で見出しを置く余白が
          ないため、視覚的には隠しつつクローラには読ませる sr-only で配置する。
          「クマ出没マップ」「警戒レベル」など主要クエリ語を必ず含める。 */}
      <h1 className="sr-only">
        全国クマ出没マップ｜リアルタイムの熊（クマ）出没情報と警戒レベル予報（獣医師監修）
      </h1>
      <KumaClient />
    </>
  );
}
