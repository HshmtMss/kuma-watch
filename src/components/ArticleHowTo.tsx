import type { ReactNode } from "react";

export type HowToStep = {
  /** 手順名 (例: "アース棒を打ち込む") */
  name: string;
  /** 説明 (プレーンテキスト。構造化データにそのまま入る) */
  text: string;
  /** リッチに表示する場合の JSX。省略時は text を表示 */
  display?: ReactNode;
};

type Props = {
  /** HowTo の名前 (例: "クマよけスプレーの正しい使い方") */
  name: string;
  /** 全体の説明 */
  description?: string;
  steps: HowToStep[];
  /** 所要時間 ISO 8601 (例: "PT5M") */
  totalTime?: string;
  /** 必要な道具 */
  tool?: string[];
  /** 必要な材料 */
  supply?: string[];
};

export default function ArticleHowTo({
  name,
  description,
  steps,
  totalTime,
  tool,
  supply,
}: Props) {
  if (steps.length === 0) return null;

  // Schema.org HowTo (Google のリッチリザルト対応)
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
  if (description) schema.description = description;
  if (totalTime) schema.totalTime = totalTime;
  if (tool && tool.length > 0) {
    schema.tool = tool.map((t) => ({ "@type": "HowToTool", name: t }));
  }
  if (supply && supply.length > 0) {
    schema.supply = supply.map((s) => ({ "@type": "HowToSupply", name: s }));
  }

  return (
    <section className="not-prose my-8 rounded-2xl border border-stone-200 bg-white p-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mb-3 flex items-baseline justify-between gap-2">
        <h3 className="text-base font-bold text-stone-900">手順: {name}</h3>
        {totalTime && (
          <span className="text-xs text-stone-500">
            {/* PTxxM / PTxxH を人間向けにざっくり表記 */}
            {totalTime.replace(/^PT/, "").replace("M", "分").replace("H", "時間")}
          </span>
        )}
      </div>
      {description && (
        <p className="mb-4 text-sm leading-relaxed text-stone-700">
          {description}
        </p>
      )}
      {(tool?.length || supply?.length) && (
        <div className="mb-4 grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
          {tool && tool.length > 0 && (
            <div>
              <div className="mb-1 font-semibold text-stone-700">必要な道具</div>
              <ul className="list-disc pl-4 text-stone-600">
                {tool.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          )}
          {supply && supply.length > 0 && (
            <div>
              <div className="mb-1 font-semibold text-stone-700">必要な材料</div>
              <ul className="list-disc pl-4 text-stone-600">
                {supply.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      <ol className="space-y-3 text-sm leading-relaxed">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3">
            <span
              aria-hidden
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white"
            >
              {i + 1}
            </span>
            <div className="flex-1">
              <div className="font-semibold text-stone-900">{s.name}</div>
              <div className="mt-0.5 text-stone-700">{s.display ?? s.text}</div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
