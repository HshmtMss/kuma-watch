import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { resolveDonationTarget } from "@/data/donation-targets";
import { isOenReleased } from "@/lib/oen-flag";

/**
 * 「この地域を応援」カード。市町村ページ・観光地ページに置き、その出没市町村の
 * ふるさと納税（楽天）へ /oen/go 経由で送客する（コンセプト=その市町村を応援）。
 * テーマ（鳥獣対策・自然環境）は寄付時の「使い道」選択で担保する旨を明記する。
 *
 * サーバーコンポーネント。公開フラグ isOenReleased() が OFF の間は null（非表示）。
 */
export default function OenCard({
  pref,
  city,
  className = "",
}: {
  pref?: string;
  city?: string;
  className?: string;
}) {
  if (!isOenReleased()) return null;

  const target = resolveDonationTarget(pref, city);
  const params = new URLSearchParams();
  if (pref) params.set("pref", pref);
  if (city) params.set("city", city);
  const q = params.toString();
  const href = q ? `/oen/go?${q}` : "/oen/go";

  return (
    <section
      className={`not-prose rounded-2xl border border-stone-200 bg-white p-4 ${className}`}
    >
      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
        <Heart size={14} />
        この地域を応援
      </div>
      <h3 className="mt-2 text-base font-bold text-stone-900">{target.label}</h3>
      <ol className="mt-2 flex flex-col gap-1.5">
        {target.steps.map((s, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-snug text-stone-700">
            <span className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-700 text-[11px] font-bold text-white">
              {i + 1}
            </span>
            {s}
          </li>
        ))}
      </ol>

      <a
        href={href}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-800"
      >
        {target.tier !== 3 ? "寄付して応援する" : city ? `${city}を応援する` : "応援する"}
        <ArrowRight size={15} />
      </a>

      <p className="mt-2 text-[11px] leading-snug text-stone-400">
        ※ ふるさと納税サイトへ移動します。くまウォッチは紹介手数料を受け取る場合があります（PR）。{" "}
        <Link href="/oen" className="underline hover:text-stone-600">
          この取り組みについて
        </Link>
      </p>
    </section>
  );
}
