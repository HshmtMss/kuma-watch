"use client";

import { useState } from "react";

type AskContext = {
  lat?: number;
  lon?: number;
  place?: string;
  prefecture?: string;
  prefCode?: string;
  muniName?: string;
  score?: number;
  level?: string;
  hour?: number;
  month?: number;
  weather?: { tempC?: number; precipMm?: number; label?: string };
  bearSpecies?: string;
  habitatInside?: boolean;
};

type Props = {
  context?: AskContext;
  suggestions?: string[];
};

type QaItem = {
  question: string;
  answer: string;
  mode?: "llm" | "demo";
  note?: string;
};

const DEFAULT_SUGGESTIONS = [
  "この時間に出かけても大丈夫？",
  "今月の注意点は？",
  "クマに会ったらどうすればいい？",
];

export default function AskBox({
  context,
  suggestions = DEFAULT_SUGGESTIONS,
}: Props) {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [log, setLog] = useState<QaItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const ask = async (question: string) => {
    if (!question.trim() || loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, context }),
      });
      const data = (await res.json()) as QaItem & { error?: string };
      if (!res.ok) {
        setError(data.error ?? "質問の送信に失敗しました");
        return;
      }
      setLog((prev) => [
        ...prev,
        {
          question,
          answer: data.answer,
          mode: data.mode,
          note: data.note,
        },
      ]);
      setQ("");
    } catch {
      setError("ネットワークエラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      {log.map((item, i) => (
        <div key={i} className="space-y-2">
          <div className="rounded-xl rounded-tr-sm bg-amber-100 px-3.5 py-2.5 text-base leading-relaxed text-amber-900">
            {item.question}
          </div>
          <div className="rounded-xl rounded-tl-sm bg-white px-3.5 py-2.5 text-base text-gray-800 ring-1 ring-gray-200">
            <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-gray-500">
              🐻 ガイド
              {item.mode === "demo" && (
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] text-amber-800">
                  demo
                </span>
              )}
            </div>
            <div className="leading-relaxed">{item.answer}</div>
            {item.note && (
              <div className="mt-1.5 text-xs text-gray-400">{item.note}</div>
            )}
          </div>
        </div>
      ))}

      {log.length === 0 && !loading && (
        <div className="flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => ask(s)}
              className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm text-amber-900 hover:bg-amber-100"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {loading && (
        <div className="rounded-xl bg-gray-50 px-3.5 py-2.5 text-base text-gray-600">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500" />
            考えています...
          </span>
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(q);
        }}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value.slice(0, 200))}
          placeholder="自由に質問する..."
          disabled={loading}
          className="h-12 flex-1 rounded-full border border-gray-300 bg-white px-4 text-base text-gray-900 placeholder:text-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={loading || !q.trim()}
          className="h-12 rounded-full bg-amber-600 px-5 text-base font-semibold text-white hover:bg-amber-700 disabled:opacity-60"
        >
          聞く
        </button>
      </form>

      {error && <p className="text-sm text-red-600">⚠️ {error}</p>}
    </div>
  );
}
