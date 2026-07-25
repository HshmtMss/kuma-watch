import type { Metadata } from "next";
import Link from "next/link";
import { Shield, BookOpen, Radio, BarChart3, ChevronRight } from "lucide-react";
import HoneyButton from "./HoneyButton";
import { isLearnHubReleased } from "@/lib/learn-flag";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "学ぶ・備える｜クマと安全に暮らすために｜KumaWatch",
  description:
    "獣医師監修。今すぐの安全対策から、クマの生態、最新の出没・研究・政策まで。合言葉「はちみつ、のこさない」で、こわがりすぎず落ち着いて備えるための学びの場。",
  alternates: { canonical: `${SITE_URL}/learn` },
  // 公開フラグ OFF の間は検索に出さない（段階公開）。
  robots: isLearnHubReleased() ? undefined : { index: false, follow: false },
};

export default function LearnHub() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <span className="eyebrow">獣医師監修</span>
          <h1>
            知って、<span className="hl">そなえる。</span>
          </h1>
        </div>
      </header>

      <div className="wrap">
        {/* 合言葉（タップで既存 HachimitsuGuide ポップアップ） */}
        <HoneyButton />

        {/* 3つのドア */}
        <nav className="doors" aria-label="学ぶメニュー">
          <Link className="door d1" href="/learn/safety">
            <span className="dic" aria-hidden>
              <Shield size={26} />
            </span>
            <h2>身を守る</h2>
            <span className="chev" aria-hidden>
              <ChevronRight size={22} strokeWidth={2} />
            </span>
          </Link>
          <Link className="door d2" href="/learn/know">
            <span className="dic" aria-hidden>
              <BookOpen size={26} />
            </span>
            <h2>クマを知る</h2>
            <span className="chev" aria-hidden>
              <ChevronRight size={22} strokeWidth={2} />
            </span>
          </Link>
          <Link className="door d3" href="/learn/latest">
            <span className="dic" aria-hidden>
              <Radio size={26} />
            </span>
            <h2>最新を追う</h2>
            <span className="chev" aria-hidden>
              <ChevronRight size={22} strokeWidth={2} />
            </span>
          </Link>
        </nav>

        {/* 関係者の方へ */}
        <Link className="stake-link" href="/data">
          <span className="si" aria-hidden>
            <BarChart3 size={22} />
          </span>
          <span>
            <span className="t">自治体・事業者・研究者の方へ</span>
            <span className="d">データ・研究・政策動向</span>
          </span>
          <span className="chev" aria-hidden>
            <ChevronRight size={19} strokeWidth={2} />
          </span>
        </Link>
      </div>
    </>
  );
}
