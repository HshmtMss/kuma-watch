import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  Backpack,
  Leaf,
  Trees,
  Tent,
  Map as MapIcon,
  BarChart3,
  Microscope,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { CATEGORIES, ARTICLES } from "@/lib/articles-meta";
import HoneyButton from "../HoneyButton";
import { isLearnHubReleased } from "@/lib/learn-flag";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "クマを知る｜生態・季節・地域の解説記事｜学ぶ｜KumaWatch",
  description:
    "獣医師監修。クマの生態・季節ごとの行動・地域別の事情・出没が増えた背景・世界の研究まで。知れば、むやみに恐れず落ち着いて備えられます。",
  alternates: { canonical: `${SITE_URL}/learn/know` },
  robots: isLearnHubReleased() ? undefined : { index: false, follow: false },
};

const ICON: Record<string, LucideIcon> = {
  encounter: AlertTriangle,
  gear: Backpack,
  season: Leaf,
  ecology: Trees,
  scene: Tent,
  region: MapIcon,
  background: BarChart3,
  science: Microscope,
};

// 行の説明は長い lead ではなく短い一言に（文字を減らす）。
const HINT: Record<string, string> = {
  encounter: "距離別の対処・応急処置",
  gear: "スプレー・鈴・撃退道具",
  season: "春夏秋冬の行動と注意",
  ecology: "食性・感覚・痕跡・種別",
  scene: "山菜・釣り・通学路ほか",
  region: "北海道・東北ほか地域事情",
  background: "増加の背景・法律・統計",
  science: "世界の研究をやさしく",
};

export default function KnowPage() {
  const counts: Record<string, number> = {};
  for (const a of ARTICLES as Array<{ category: string }>) {
    counts[a.category] = (counts[a.category] ?? 0) + 1;
  }
  const cats = [...(CATEGORIES as Array<{ id: string; slug: string; name: string; order: number }>)].sort(
    (a, b) => a.order - b.order,
  );

  return (
    <>
      <div className="subbar">
        <div className="wrap">
          <Link className="back" href="/learn">
            <ChevronLeft size={19} strokeWidth={2} /> 学ぶ
          </Link>
          <span className="crumb">› クマを知る</span>
        </div>
      </div>

      <header className="phead">
        <div className="wrap">
          <span className="badge" aria-hidden>
            <Trees size={29} />
          </span>
          <h1>クマを知る</h1>
          <p className="lead">知れば、こわくない。生態・季節・地域のしくみを、獣医師監修の解説記事で。</p>
        </div>
      </header>

      <div className="wrap">
        <HoneyButton label="まず覚える・合言葉" />

        <section className="sec">
          <div className="sec-h">
            <span className="kicker">テーマから読む</span>
            <h2>知りたいことから</h2>
          </div>
          <div className="rows">
            {cats.map((c) => {
              const Icon = ICON[c.id] ?? Trees;
              return (
                <Link key={c.id} className="row-item" href={{ pathname: `/articles/category/${c.slug}` }}>
                  <span className="ric" aria-hidden>
                    <Icon size={22} />
                  </span>
                  <span style={{ flex: 1 }}>
                    <span className="t">{c.name}</span>
                    <span className="d" style={{ display: "block" }}>
                      {HINT[c.id] ?? ""} ・ {counts[c.id] ?? 0}本
                    </span>
                  </span>
                  <span className="chev" aria-hidden>
                    <ChevronRight size={20} strokeWidth={2} />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <Link className="stake-link" href="/articles" style={{ marginTop: 26 }}>
          <span className="si" aria-hidden>
            <BookOpen size={22} />
          </span>
          <span>
            <span className="t">記事をすべて見る</span>
            <span className="d">
              全 {(ARTICLES as unknown[]).length} 本・タグ・新着から探す
            </span>
          </span>
          <span className="chev" aria-hidden>
            <ChevronRight size={19} strokeWidth={2} />
          </span>
        </Link>
      </div>
    </>
  );
}
