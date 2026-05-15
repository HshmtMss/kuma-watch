import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { ARTICLES, CATEGORIES } from "@/lib/articles-meta";
import {
  RESEARCH_ENTRIES,
} from "@/lib/research-entries";
import productsData from "@/data/products.json";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "クマ対策の総合ガイド｜獣医師監修｜KumaWatch",
  description:
    "獣医師監修・獣医工学ラボ運営。クマ対策に必要な情報・装備・研究を一箇所に整理。一般の方向けの記事・装備、自治体さま向けのソリューション・研究レポートまで、目的別に分かりやすくご案内します。",
  alternates: { canonical: `${SITE_URL}/measures` },
  openGraph: {
    title: "クマ対策の総合ガイド｜KumaWatch",
    description:
      "記事・装備・研究をまとめた、クマ対策の総合ガイド。一般の方向けと自治体さま向けで整理しています。",
    url: `${SITE_URL}/measures`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

type Product = (typeof productsData.products)[number];

export default function MeasuresPage() {
  const articleCount = ARTICLES.length;
  const products = productsData.products as Product[];
  const personalProductCount = products.filter(
    (p) => p.audience === "個人" || p.audience === "個人,自治体",
  ).length;
  const govProductCount = products.filter(
    (p) => p.audience === "自治体" || p.audience === "個人,自治体",
  ).length;
  const researchCount = RESEARCH_ENTRIES.length;

  return (
    <PageShell
      title="クマ対策"
      lead="クマ被害から身を守るための情報・装備・研究を、目的別に整理しました。"
    >
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-sm text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">対策</span>
      </nav>

      {/* 一般向けセクション */}
      <section aria-labelledby="for-general" className="not-prose mt-6">
        <h2
          id="for-general"
          className="mb-2 text-xl font-bold text-stone-900 sm:text-2xl"
        >
          一般の方へ
        </h2>
        <p className="mb-5 text-base leading-relaxed text-stone-700">
          登山・キャンプ・山菜採り・自宅周辺。クマと出会わない・備える・身を守るための情報をまとめています。
        </p>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <li>
            <Link
              href="/articles"
              className="flex h-full flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:border-amber-400 hover:bg-amber-50/40"
            >
              <div className="flex items-center gap-3">
                <span aria-hidden className="text-3xl">📖</span>
                <span className="text-lg font-bold text-stone-900">
                  記事で学ぶ
                </span>
                <span className="ml-auto text-sm font-medium tabular-nums text-stone-500">
                  {articleCount} 件
                </span>
              </div>
              <p className="text-base leading-relaxed text-stone-700">
                獣医師監修の解説記事。遭遇時の対処・装備の選び方・季節別の注意点・地域別の出没事情まで。
              </p>
              <ul className="mt-1 flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <li
                    key={c.id}
                    className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-1 text-sm font-medium text-stone-700"
                  >
                    <span aria-hidden>{c.emoji}</span>
                    <span>{c.name}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-auto pt-2 text-base font-semibold text-amber-700">
                記事一覧を見る →
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="flex h-full flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:border-amber-400 hover:bg-amber-50/40"
            >
              <div className="flex items-center gap-3">
                <span aria-hidden className="text-3xl">🛡️</span>
                <span className="text-lg font-bold text-stone-900">
                  装備・製品で備える
                </span>
                <span className="ml-auto text-sm font-medium tabular-nums text-stone-500">
                  {personalProductCount} 件
                </span>
              </div>
              <p className="text-base leading-relaxed text-stone-700">
                クマ撃退スプレー、クマ鈴、ベアキャニスター、電気柵、センサーライト等。
              </p>
              <ul className="mt-1 flex flex-wrap gap-2">
                {[
                  { e: "🌶️", l: "スプレー" },
                  { e: "🔔", l: "鈴・ホーン" },
                  { e: "⚡", l: "電気柵" },
                  { e: "🥫", l: "ベアキャニスター" },
                  { e: "💡", l: "住宅装備" },
                ].map((t) => (
                  <li
                    key={t.l}
                    className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-1 text-sm font-medium text-stone-700"
                  >
                    <span aria-hidden>{t.e}</span>
                    <span>{t.l}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-auto pt-2 text-base font-semibold text-amber-700">
                個人向け製品一覧を見る →
              </span>
            </Link>
          </li>
        </ul>
      </section>

      {/* 自治体・専門家向けセクション */}
      <section aria-labelledby="for-professional" className="not-prose mt-12">
        <h2
          id="for-professional"
          className="mb-2 text-xl font-bold text-stone-900 sm:text-2xl"
        >
          自治体・専門家の方へ
        </h2>
        <p className="mb-5 text-base leading-relaxed text-stone-700">
          業務用ソリューション、データに基づく分析、自治体さまとの連携をご案内します。
        </p>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <li>
            <Link
              href="/products?for=gov"
              className="flex h-full flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:border-emerald-400 hover:bg-emerald-50/40"
            >
              <div className="flex items-center gap-3">
                <span aria-hidden className="text-3xl">🏛️</span>
                <span className="text-lg font-bold text-stone-900">
                  自治体向けソリューション
                </span>
                <span className="ml-auto text-sm font-medium tabular-nums text-stone-500">
                  {govProductCount} 件
                </span>
              </div>
              <p className="text-base leading-relaxed text-stone-700">
                AI 検知システム、撃退装置、箱罠、林業安全装備、コンサルティング等の業務向け。
              </p>
              <ul className="mt-1 flex flex-wrap gap-2">
                {[
                  { e: "🤖", l: "AI 検知" },
                  { e: "🐺", l: "撃退装置" },
                  { e: "📷", l: "トレイルカメラ" },
                  { e: "🪤", l: "捕獲・駆除" },
                ].map((t) => (
                  <li
                    key={t.l}
                    className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-1 text-sm font-medium text-stone-700"
                  >
                    <span aria-hidden>{t.e}</span>
                    <span>{t.l}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-auto pt-2 text-base font-semibold text-emerald-700">
                自治体向け製品一覧を見る →
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/research"
              className="flex h-full flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:border-emerald-400 hover:bg-emerald-50/40"
            >
              <div className="flex items-center gap-3">
                <span aria-hidden className="text-3xl">📊</span>
                <span className="text-lg font-bold text-stone-900">
                  研究・分析レポート
                </span>
                <span className="ml-auto text-sm font-medium tabular-nums text-stone-500">
                  {researchCount} 件
                </span>
              </div>
              <p className="text-base leading-relaxed text-stone-700">
                獣医工学ラボによる、全国クマ事案の時空間分析、月次・日次レポート、テーマ解説。
              </p>
              <ul className="mt-1 flex flex-wrap gap-2">
                {[
                  { e: "📅", l: "月次レポート" },
                  { e: "📍", l: "日次レポート" },
                  { e: "🔍", l: "テーマ解説" },
                  { e: "🗾", l: "地域別" },
                ].map((t) => (
                  <li
                    key={t.l}
                    className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-1 text-sm font-medium text-stone-700"
                  >
                    <span aria-hidden>{t.e}</span>
                    <span>{t.l}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-auto pt-2 text-base font-semibold text-emerald-700">
                研究レポートを見る →
              </span>
            </Link>
          </li>
        </ul>
      </section>

      {/* 自治体連携への CTA — 「対策」とは別軸（パートナーシップ）なのでフッター近くに */}
      <aside className="not-prose mt-12 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 text-base leading-relaxed text-emerald-900">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-lg font-bold">自治体さまへ</span>
          <span className="text-sm text-emerald-700">
            公式データ取り込みのご案内
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-emerald-900/90">
          貴自治体の出没情報を KumaWatch に取り込み、住民・観光客に届ける連携をご案内しています。追加運用負担なし・連携費用なし。
        </p>
        <Link
          href="/for-gov"
          className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          自治体の方へ →
        </Link>
      </aside>
    </PageShell>
  );
}
