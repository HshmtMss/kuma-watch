import type { Metadata } from "next";
import Link from "next/link";
import {
  Radio,
  BarChart3,
  Landmark,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";
import { getRecentRecordsNationwide } from "@/lib/place-index";
import { placeHrefForSighting } from "@/lib/muni-name";
import { RESEARCH_ENTRIES } from "@/lib/research-entries";
import announcementsData from "@/../public/data/gov-announcements.json";
import { isLearnHubReleased } from "@/lib/learn-flag";

const SITE_URL = "https://kuma-watch.jp";

// /news・/research と同じ鮮度で十分なので ISR。
export const revalidate = 1800;

export const metadata: Metadata = {
  title: "最新を追う｜出没速報・研究・政策の動き｜学ぶ｜KumaWatch",
  description:
    "全国のクマ出没速報、獣医工学ラボの研究レポート、環境省・農水省・林野庁の政策動向を、ひと目でまとめて。獣医師監修・出典明記。",
  alternates: { canonical: `${SITE_URL}/learn/latest` },
  robots: isLearnHubReleased() ? undefined : { index: false, follow: false },
};

const MINISTRY: Record<string, string> = { env: "環境省", maff: "農水省", rinya: "林野庁" };
const RES_CAT: Record<string, string> = {
  "daily-report": "日次",
  "weekly-report": "週次",
  "monthly-report": "月次",
};

function md(iso: string): string {
  const m = /^\d{4}-(\d{2})-(\d{2})/.exec(iso || "");
  return m ? `${Number(m[1])}/${Number(m[2])}` : iso;
}

type Gov = { id: string; ministry: string; date: string; title: string; url: string; category?: string };

export default async function LatestPage() {
  const recent = await getRecentRecordsNationwide(4);
  const research = [...(RESEARCH_ENTRIES as Array<{ slug: string; title: string; publishedAt: string; category: string }>)]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 4);
  const gov = [...((announcementsData.items ?? []) as Gov[])]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 4);

  return (
    <>
      <div className="subbar">
        <div className="wrap">
          <Link className="back" href="/learn">
            <ChevronLeft size={19} strokeWidth={2} /> 学ぶ
          </Link>
          <span className="crumb">› 最新を追う</span>
        </div>
      </div>

      <header className="phead">
        <div className="wrap">
          <span className="badge" aria-hidden>
            <Radio size={29} />
          </span>
          <h1>最新を追う</h1>
          <p className="lead">今、起きていること。出没速報・研究レポート・政府の動きを、ひと目で。</p>
        </div>
      </header>

      <div className="wrap">
        <div className="feeds">
          {/* 出没速報 */}
          <section className="feed news">
            <div className="fh">
              <span className="fic" aria-hidden><Radio size={18} /></span>
              <div>
                <div className="ft">出没ニュース速報</div>
                <div className="fs">自動収集・随時更新</div>
              </div>
            </div>
            <ul>
              {recent.map((r, i) => (
                <li key={`${r.prefName}-${r.cityName}-${r.date}-${i}`}>
                  <Link href={placeHrefForSighting(r.prefName, r.cityName)}>
                    <span className="meta">
                      {i === 0 && <span className="pin new">新着</span>}
                      {md(r.date)}・{r.prefName}
                    </span>
                    <span className="l">
                      {r.prefName}
                      {r.cityName} でクマの出没情報
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link className="all" href="/news">
              速報をすべて見る <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </section>

          {/* 研究レポート */}
          <section className="feed res">
            <div className="fh">
              <span className="fic" aria-hidden><BarChart3 size={18} /></span>
              <div>
                <div className="ft">研究レポート</div>
                <div className="fs">時空間分析・日次/週次/月次</div>
              </div>
            </div>
            <ul>
              {research.map((r) => (
                <li key={r.slug}>
                  <Link href={{ pathname: `/research/${r.slug}` }}>
                    <span className="meta">
                      {md(r.publishedAt)}・{RES_CAT[r.category] ?? "特集"}
                    </span>
                    <span className="l">{r.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link className="all" href="/research">
              研究レポートへ <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </section>

          {/* 政府・自治体の動き */}
          <section className="feed gov">
            <div className="fh">
              <span className="fic" aria-hidden><Landmark size={18} /></span>
              <div>
                <div className="ft">政府・自治体の動き</div>
                <div className="fs">環境省・農水省・林野庁</div>
              </div>
            </div>
            <ul>
              {gov.map((g) => (
                <li key={g.id}>
                  <a href={g.url} target="_blank" rel="noopener noreferrer">
                    <span className="meta">
                      <span className="pin">{MINISTRY[g.ministry] ?? "政府"}</span>
                      {md(g.date)}
                    </span>
                    <span className="l">{g.title}</span>
                  </a>
                </li>
              ))}
            </ul>
            <Link className="all" href="/policy">
              政策動向へ <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
