import type { Metadata } from "next";
import {
  Footprints,
  Landmark,
  Wheat,
  Trees,
  Heart,
  ArrowRight,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import { isOenReleased } from "@/lib/oen-flag";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "地域を応援する｜クマ・獣害に向き合う地域へ、ふるさと納税で｜KumaWatch",
  description:
    "クマの出没は、地域が抱える課題の入り口です。獣害・里山・生物多様性に向き合う地域を、ふるさと納税で応援できます。KumaWatch は「知る・備える・支える」をつなぎます。",
  alternates: { canonical: `${SITE_URL}/oen` },
  // 段階公開の間は検索に出さない。
  robots: isOenReleased() ? undefined : { index: false, follow: false },
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

export default function OenPage() {
  return (
    <PageShell
      title="クマの出没は、地域の課題の入り口です。"
      lead="出没の裏では、自治体が対応に追われ、農業や観光、里山の自然も揺らいでいます。KumaWatch は「知る・備える」に、地域を応援する選択肢を添えます。"
    >
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

      {/* 応援のしかた */}
      <section className="not-prose mt-8">
        <h2 className="mb-3 text-lg font-bold text-stone-900">
          応援のしかた（ふるさと納税）
        </h2>
        <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-stone-700">
          <li>・関心のある地域を選んで応援できます</li>
          <li>
            ・<b className="font-bold">税の控除</b>が受けられます（負担を抑えて応援）
          </li>
          <li>・手続きと寄付は各ふるさと納税サイトで完結します</li>
        </ul>
        <p className="mt-3 border-t border-stone-100 pt-3 text-xs leading-relaxed text-stone-500">
          ※ リンクはふるさと納税サイト（楽天ふるさと納税）へ移動します。KumaWatch
          は紹介手数料を受け取る場合があり、運営費に充てています（PR）。
        </p>

        <a
          href="/oen/go"
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3.5 text-sm font-bold text-white hover:bg-emerald-800"
        >
          <Heart size={17} />
          関心のある地域を応援する
          <ArrowRight size={16} />
        </a>
        <p className="mt-2 text-center text-xs text-stone-400">
          できる範囲で、関心のある地域から。それで十分です。
        </p>
      </section>
    </PageShell>
  );
}
