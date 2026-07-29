import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Mountain,
  Tent,
  Footprints,
  Wheat,
  Car,
  SprayCan,
  Bell,
  Zap,
  PhoneCall,
  ShoppingBag,
} from "lucide-react";
import HoneyButton from "../HoneyButton";
import { isLearnHubReleased } from "@/lib/learn-flag";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "身を守る｜今すぐの安全対策と、とっさの対処｜学ぶ｜KumaWatch",
  description:
    "獣医師監修。もしもの前に知っておく、クマから身を守る備え。遭遇時の距離別の対処、シーン別(登山・キャンプ・通学・農作業・車)の注意、スプレー・鈴・電気柵・通報のしかた。",
  alternates: { canonical: `${SITE_URL}/learn/safety` },
  robots: isLearnHubReleased() ? undefined : { index: false, follow: false },
};

type Row = { icon: React.ReactNode; t: string; d: string; href: string; g?: boolean };

const SCENES: Row[] = [
  { icon: <Mountain size={22} />, t: "登山・ハイキング", d: "音を出す・単独を避ける・時間帯", href: "/articles/trail-running" },
  { icon: <Tent size={22} />, t: "キャンプ・川遊び", d: "食料の管理・においを残さない", href: "/articles/camping" },
  { icon: <Footprints size={22} />, t: "通学・通勤・散歩", d: "出没情報の確認・集団で・明るい道", href: "/articles/school-route" },
  { icon: <Wheat size={22} />, t: "農作業・畑・果樹", d: "誘引物を断つ・電気柵・見回り", href: "/articles/bear-agriculture" },
  { icon: <Car size={22} />, t: "ドライブ・車道", d: "飛び出し・夜間・見かけたら", href: "/articles/vehicle-collision" },
];

const TOOLS: Row[] = [
  { icon: <SprayCan size={22} />, t: "クマ撃退スプレー", d: "選び方・携行・使い方", href: "/articles/bear-spray", g: true },
  { icon: <Bell size={22} />, t: "鈴・ラジオで音を出す", d: "「人がいる」と知らせて遭遇を防ぐ", href: "/articles/bear-bell", g: true },
  { icon: <Zap size={22} />, t: "電気柵で囲う", d: "畑・家まわりを守る設置のコツ", href: "/articles/electric-fence", g: true },
  { icon: <PhoneCall size={22} />, t: "見かけたら通報する", d: "自治体・110番への連絡と共有", href: "/measures", g: true },
  { icon: <ShoppingBag size={22} />, t: "対策グッズ・製品を見る", d: "スプレー・鈴・電気柵・忌避剤ほか", href: "/products", g: true },
];

function RowItem({ row }: { row: Row }) {
  return (
    <Link className={`row-item${row.g ? " g" : ""}`} href={row.href}>
      <span className="ric" aria-hidden>{row.icon}</span>
      <span style={{ flex: 1 }}>
        <span className="t">{row.t}</span>
        <span className="d" style={{ display: "block" }}>{row.d}</span>
      </span>
      <span className="chev" aria-hidden>
        <ChevronRight size={20} strokeWidth={2} />
      </span>
    </Link>
  );
}

export default function SafetyPage() {
  return (
    <>
      <div className="subbar">
        <div className="wrap">
          <Link className="back" href="/learn">
            <ChevronLeft size={19} strokeWidth={2} /> 学ぶ
          </Link>
          <span className="crumb">› 身を守る</span>
        </div>
      </div>

      <header className="phead">
        <div className="wrap">
          <span className="badge" aria-hidden>
            <Shield size={29} />
          </span>
          <h1>身を守る</h1>
          <p className="lead">もしもの前に、知っておく。今すぐできる備えと、とっさの対処。</p>
        </div>
      </header>

      <div className="wrap">
        <HoneyButton label="まず覚える・合言葉" />

        {/* もしも遭遇したら */}
        <section className="sec">
          <div className="sec-h">
            <span className="kicker" style={{ color: "var(--high)" }}>とっさの時</span>
            <h2>もしも、出会ってしまったら</h2>
          </div>
          <div className="mishmo">
            <div className="mh">
              <AlertTriangle size={20} /> あわてず、背を向けない
            </div>
            <div className="mstep">
              <span className="num">1</span>
              <span>
                <span className="when" style={{ display: "block" }}>遠い（気づかれていない）</span>
                <span className="do">その場で立ち止まり、静かに来た道を戻る</span>
              </span>
            </div>
            <div className="mstep">
              <span className="num">2</span>
              <span>
                <span className="when" style={{ display: "block" }}>近い（見合っている）</span>
                <span className="do">クマを見ながら、ゆっくり後退。走らない・騒がない</span>
              </span>
            </div>
            <div className="mstep">
              <span className="num">3</span>
              <span>
                <span className="when" style={{ display: "block" }}>突進された</span>
                <span className="do">スプレーを噴射。伏せて両手で頭と首を守る</span>
              </span>
            </div>
            <Link className="mlink" href="/articles/encounter">
              距離・夜間・子グマ…くわしい対処を見る <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>
        </section>

        {/* シーンから備える */}
        <section className="sec">
          <div className="sec-h">
            <span className="kicker">でかける前に</span>
            <h2>シーンから備える</h2>
          </div>
          <div className="rows">
            {SCENES.map((r) => (
              <RowItem key={r.t} row={r} />
            ))}
          </div>
        </section>

        {/* そなえる・伝える */}
        <section className="sec">
          <div className="sec-h">
            <span className="kicker">道具と連絡</span>
            <h2>そなえる・伝える</h2>
          </div>
          <div className="rows">
            {TOOLS.map((r) => (
              <RowItem key={r.t} row={r} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
