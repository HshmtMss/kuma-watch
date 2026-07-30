import { Heart, ArrowRight } from "lucide-react";
import { resolveDonationTarget } from "@/data/donation-targets";
import { isOenReleased } from "@/lib/oen-flag";

/**
 * 「この地域を応援」カード。市町村ページ・観光地ページに置き、その地域の
 * テーマに沿ったふるさと納税（楽天）へ /oen/go 経由で送客する。
 *
 * サーバーコンポーネント。公開フラグ isOenReleased() が OFF の間は null（非表示）。
 * 着地とラベルは対応表(resolveDonationTarget)がテーマ一致で返す（景表法配慮）。
 * リンクは自社の /oen/go を見せて楽天へ転送（信頼感・計測・差し替え自由）。
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

  const target = resolveDonationTarget(pref);
  const params = new URLSearchParams();
  if (pref) params.set("pref", pref);
  if (city) params.set("city", city);
  const q = params.toString();
  const href = q ? `/oen/go?${q}` : "/oen/go";

  return (
    <section
      className={`not-prose rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 ${className}`}
    >
      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
        <Heart size={14} />
        この地域を応援
      </div>
      <h3 className="mt-2 text-base font-bold text-stone-900">{target.label}</h3>
      <p className="mt-1 text-xs leading-relaxed text-stone-600">
        ふるさと納税で。鳥獣被害対策・自然環境など、寄付時に使い道を選べます。税の控除も。
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
