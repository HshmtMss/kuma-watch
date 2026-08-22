import Link from "next/link";
import { Building2 } from "lucide-react";

/**
 * 市町村ページに置く「自治体ご担当者の方へ」の導線。
 *
 * 想定読者は住民ではなく自治体の担当者。「◯◯市 クマ」で検索して着地した担当者が
 * 最初に気にするのは「うちの情報は合っているか」なので、売り込みではなく
 * **掲載内容の訂正の受付**を入口にして /for-gov (法人向けページ) へ渡す。
 *
 * 住民には不要な情報なので、目立たせない (色を敷かず枠線のみ・文字は小さめ)。
 * 公式情報セクションの直後に置くことで、担当者の視線の流れに乗せる。
 *
 * 遷移先に ?from=<県><市町村> を付ける。/for-gov 側の ContactForm がこれを読んで
 * 「自治体名・ご担当部署」欄の初期値にするので、担当者の入力が 1 つ減り、
 * こちらは問い合わせがどの市町村から来たかを把握できる。
 */
export default function GovContactCta({
  pref,
  muni,
}: {
  pref: string;
  muni: string;
}) {
  const from = `${pref}${muni}`;
  return (
    <aside className="not-prose my-6 rounded-xl border border-stone-200 bg-white p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <Building2
          size={18}
          aria-hidden
          className="mt-0.5 shrink-0 text-stone-400"
        />
        <div className="min-w-0">
          <h2 className="m-0 text-sm font-bold text-stone-800">
            {muni}のご担当者の方へ
          </h2>
          <p className="mt-1.5 mb-0 text-[13px] leading-relaxed text-stone-600">
            このページは公表されている情報をもとに自動で作成しています。掲載内容の訂正、
            公式ページの追加、住民・観光客への情報配信について承ります。
          </p>
          <Link
            href={`/for-gov?from=${encodeURIComponent(from)}`}
            className="mt-3 inline-flex items-center gap-1 rounded-full border border-stone-300 px-4 py-1.5 text-[13px] font-semibold text-stone-700 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-800"
          >
            ご相談・訂正のご依頼 →
          </Link>
        </div>
      </div>
    </aside>
  );
}
