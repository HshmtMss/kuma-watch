import type { ReactNode } from "react";
import {
  Footprints,
  Landmark,
  Wheat,
  Trees,
  Leaf,
  PawPrint,
  Camera,
  Heart,
  ArrowRight,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import {
  OEN_CATEGORIES,
  resolveDonationTarget,
} from "@/data/donation-targets";

/** カテゴリ key → アイコン（データ側は JSX を持たせない）。 */
const CAT_ICON: Record<string, ReactNode> = {
  kuma: <Footprints size={18} />,
  shizen: <Leaf size={18} />,
  yasei: <PawPrint size={18} />,
  satoyama: <Trees size={18} />,
  kanko: <Camera size={18} />,
  sangyo: <Wheat size={18} />,
};

const SITUATION = [
  { icon: <Footprints size={18} />, t: "人と暮らし", d: "外出や通学をためらう不安。" },
  {
    icon: <Landmark size={18} />,
    t: "自治体の負担",
    d: "捕獲・見回り・電気柵に、限られた人手と予算。",
  },
  {
    icon: <Wheat size={18} />,
    t: "農業と経済",
    d: "シカ・イノシシ・サルの被害。観光減・風評も。",
  },
  { icon: <Trees size={18} />, t: "里山と自然", d: "里山の荒廃と、生物多様性の揺らぎ。" },
];

/**
 * /oen 本体。クエリ版（/oen?pref=&city=）とパス版（/oen/[pref]/[muni]）の
 * 両方から使う共通ボディ。pref/city があれば、その地域固有の説明
 * （クマ対策枠の有無／なければ使い道を選べる）を先頭に出す。
 */
export default function OenView({
  pref,
  city,
}: {
  pref?: string;
  city?: string;
}) {
  const target = pref && city ? resolveDonationTarget(pref, city) : null;

  return (
    <PageShell
      title="ふるさと納税で、クマと向き合う地域を応援できます。"
      lead="寄付するときに、使い道として「鳥獣被害対策」などを選べます。選べば、その町のクマ対策に役立てられます。"
    >
      {/* この地域を応援（pref/city 指定時のみ） */}
      {target && city && (
        <section className="not-prose mt-6">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
            <Heart size={14} />
            この地域を応援
          </div>
          <div className="mt-2 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
            <h2 className="text-lg font-bold text-stone-900">{target.label}</h2>
            <ol className="mt-3 flex flex-col gap-2">
              {target.steps.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-snug text-stone-800">
                  <span className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-700 text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
            <a
              href={`/oen/go?pref=${encodeURIComponent(pref!)}&city=${encodeURIComponent(city)}`}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-800"
            >
              {target.tier === 3 ? `${city}を応援する` : "寄付して応援する"}
              <ArrowRight size={15} />
            </a>
          </div>
        </section>
      )}

      {/* いま地域で起きていること */}
      <section className="not-prose mt-8">
        <h2 className="mb-3 text-lg font-bold text-stone-900">
          いま、地域で起きていること
        </h2>
        <div className="flex flex-col gap-2">
          {SITUATION.map((s) => (
            <div
              key={s.t}
              className="flex items-start gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3"
            >
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                {s.icon}
              </span>
              <span>
                <span className="block text-sm font-bold text-stone-900">{s.t}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-stone-600">
                  {s.d}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 応援は「共生」のために */}
      <section className="not-prose mt-8">
        <h2 className="mb-3 text-lg font-bold text-stone-900">
          応援は「共生」のために
        </h2>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-sm leading-relaxed text-stone-800">
          寄付は駆除のためではなく、
          <b className="font-bold text-emerald-800">
            藪の刈り払い・放置果樹の伐採・電気柵・担い手の育成
          </b>
          など、
          <b className="font-bold text-emerald-800">
            人と野生動物が共に生きる地域づくり
          </b>
          に使われます。
        </div>
      </section>

      {/* 応援のしかた（テーマから選ぶ） */}
      <section className="not-prose mt-8">
        <h2 className="mb-1 text-lg font-bold text-stone-900">
          {target ? "または、テーマから選ぶ" : "応援のしかた（テーマから選ぶ）"}
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-stone-600">
          クマの問題は、対策だけでなく、自然・里山・観光・農林業ともつながっています。
          関心のあるテーマから、ふるさと納税で応援できます（
          <b className="font-bold">税の控除</b>も受けられます）。
        </p>

        <div className="flex flex-col gap-2">
          {OEN_CATEGORIES.map((c) => (
            <a
              key={c.key}
              href={`/oen/go?cat=${c.key}`}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/50 px-4 py-3 transition-colors hover:bg-emerald-50"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
                {CAT_ICON[c.key]}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold text-stone-900">
                  {c.label}
                </span>
                <span className="mt-0.5 block text-xs leading-relaxed text-stone-600">
                  {c.note}
                </span>
              </span>
              <ArrowRight
                size={16}
                className="shrink-0 text-emerald-600"
                aria-hidden
              />
            </a>
          ))}
        </div>

        <p className="mt-3 border-t border-stone-100 pt-3 text-xs leading-relaxed text-stone-500">
          ※ リンクはふるさと納税サイト（楽天ふるさと納税）へ移動します。手続きと寄付は
          各サイトで完結します。くまウォッチ
          は紹介手数料を受け取る場合があり、運営費に充てています（PR）。
        </p>
        <p className="mt-2 text-xs text-stone-400">
          できる範囲で、関心のあるテーマから。それで十分です。
        </p>
      </section>
    </PageShell>
  );
}
