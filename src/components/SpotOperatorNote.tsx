import { ShieldCheck, ExternalLink } from "lucide-react";
import type { SpotOperatorNote as OperatorNote } from "@/data/spot-operator-notes";

export type SpotOperatorNoteProps = { note: OperatorNote };

/**
 * 施設運営者から提供を受けた「施設の取り組み」。
 *
 * 周辺の出没情報だけが並ぶページに、その場所が実際にどう対策しているかを
 * 並べて置く。来訪者にとっては出没件数と同じくらい判断材料になる情報で、
 * 施設にとっては自動生成ページに対して自分の言葉を持てる場所になる。
 *
 * 当方が集計したデータとは出所が違うので、見た目で明確に分ける:
 * - 「施設からの情報」ラベルと提供元名を必ず添える
 * - 施設側が付した注記は省略せずそのまま出す
 * これを混ぜると、当方が施設の安全性を保証しているように読めてしまう。
 */
export default function SpotOperatorNote({ note }: SpotOperatorNoteProps) {
  return (
    <section className="not-prose my-6 overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50/50">
      <header className="border-b border-emerald-200 bg-emerald-50 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <ShieldCheck size={17} className="shrink-0 text-emerald-700" aria-hidden />
          <h2 className="m-0 text-[15px] font-bold text-emerald-900">
            施設の取り組み
          </h2>
        </div>
        <p className="mt-1 text-[11px] text-emerald-800/80">
          {note.facilityName} からご提供いただいた情報です
        </p>
      </header>

      <div className="px-4 py-4">
        {note.intro && (
          <p className="text-[14px] leading-relaxed text-stone-700">
            {note.intro}
          </p>
        )}

        <ul className="mt-3 space-y-3">
          {note.items.map((item) => (
            <li key={item.label}>
              <p className="text-[14px] font-bold text-stone-900">
                {item.label}
              </p>
              <p className="mt-0.5 text-[14px] leading-relaxed text-stone-700">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>

        {note.outro && (
          <p className="mt-4 text-[14px] leading-relaxed text-stone-700">
            {note.outro}
          </p>
        )}

        {note.disclaimer && (
          <p className="mt-3 rounded-lg bg-white/70 px-3 py-2 text-[12px] leading-relaxed text-stone-600">
            ※{note.disclaimer}
          </p>
        )}

        {note.officialUrl && (
          <a
            href={note.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-emerald-300 bg-white px-3.5 py-2 text-[13px] font-bold text-emerald-800 hover:bg-emerald-50"
          >
            {note.facilityName} 公式サイト
            <ExternalLink size={14} aria-hidden />
          </a>
        )}
      </div>
    </section>
  );
}
