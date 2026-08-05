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
      <p className="mt-1.5 text-xs leading-relaxed text-stone-600">
        {target.note}
      </p>

      <a
        href={href}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-800"
      >
        応援する（ふるさと納税）
        <ArrowRight size={15} />
      </a>

      <p className="mt-2 text-[11px] leading-snug text-stone-400">
        ※ ふるさと納税サイトへ移動します。KumaWatch は紹介手数料を受け取る場合があります（PR）。{" "}
        <a href="/oen" className="underline hover:text-stone-600">
          この取り組みについて
        </a>
      </p>
    </section>
  );
}
