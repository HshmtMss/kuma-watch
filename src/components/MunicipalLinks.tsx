"use client";

import type { MunicipalEntry } from "@/data/municipalities";

type Props = {
  entry?: MunicipalEntry;
};

const KIND_LABEL: Record<string, string> = {
  official_info: "公式情報",
  official_map: "公式マップ",
  official_app: "公式アプリ",
  open_data: "オープンデータ",
  social: "SNS",
  contact: "問い合わせ",
};

export default function MunicipalLinks({ entry }: Props) {
  if (!entry) {
    return (
      <p className="text-xs text-gray-500">
        この地域の自治体マスタ情報はまだ未登録です。
      </p>
    );
  }

  const speciesLabel = entry.bearSpecies
    .map((s) => (s === "higuma" ? "ヒグマ" : "ツキノワグマ"))
    .join("・");

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="text-xs font-semibold text-gray-700">
          🔗 {entry.prefNameJa} の公式リソース
        </div>
        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-blue-700 ring-1 ring-blue-200">
          {speciesLabel}
        </span>
      </div>
      <div className="space-y-1.5">
        {entry.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-start gap-2 rounded-md bg-white px-3 py-2 text-sm text-blue-800 ring-1 ring-blue-100 hover:ring-blue-300"
          >
            <span aria-hidden>🔗</span>
            <span className="min-w-0 flex-1">
              <span className="block font-medium">{link.label}</span>
              <span className="block truncate text-[10px] text-blue-500">
                {KIND_LABEL[link.kind] ?? link.kind}
                {link.note ? ` ・ ${link.note}` : ""}
              </span>
            </span>
          </a>
        ))}
      </div>
      <p className="mt-2 text-[10px] text-gray-500">
        最終確認: {entry.verifiedAt}
      </p>
    </div>
  );
}
