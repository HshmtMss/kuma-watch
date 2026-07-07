import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ShieldCheck,
  SprayCan,
  Bell,
  Fence,
  Container,
  House,
  type LucideIcon,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import CategoryGlyph from "@/components/CategoryGlyph";
import LatestGovAnnouncements from "@/components/LatestGovAnnouncements";
import { ARTICLES, CATEGORIES } from "@/lib/articles-meta";
import productsData from "@/data/products.json";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "クマ対策の総合ガイド｜獣医師監修",
  description:
    "獣医師監修・獣医工学ラボ運営。クマ対策に必要な情報・装備を一箇所に整理。遭遇時の対処、音・スプレー・電気柵などの装備、住まいの備えまで、目的別に分かりやすくご案内します。",
  alternates: { canonical: `${SITE_URL}/measures` },
  openGraph: {
    title: "クマ対策の総合ガイド｜KumaWatch",
    description:
      "記事・装備をまとめた、クマ対策の総合ガイド。遭遇時の対処から装備・住まいの備えまで、目的別に整理しています。",
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
                <BookOpen
                  size={26}
                  strokeWidth={1.7}
                  className="text-amber-600"
                  aria-hidden
                />
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
                    className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-2.5 py-1 text-sm font-medium text-stone-700"
                  >
                    <CategoryGlyph
                      slug={c.slug}
                      size={15}
                      className="text-stone-500"
                    />
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
                <ShieldCheck
                  size={26}
                  strokeWidth={1.7}
                  className="text-amber-600"
                  aria-hidden
                />
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
                {(
                  [
                    { Icon: SprayCan, l: "スプレー" },
                    { Icon: Bell, l: "鈴・ホーン" },
                    { Icon: Fence, l: "電気柵" },
                    { Icon: Container, l: "ベアキャニスター" },
                    { Icon: House, l: "住宅装備" },
                  ] satisfies { Icon: LucideIcon; l: string }[]
                ).map(({ Icon, l }) => (
                  <li
                    key={l}
                    className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-2.5 py-1 text-sm font-medium text-stone-700"
                  >
                    <Icon size={15} className="text-stone-500" aria-hidden />
                    <span>{l}</span>
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

      {/* 国の最新発表サイドカード — 対策ハブから政策動向への導線を作る */}
      <LatestGovAnnouncements />

    </PageShell>
  );
}
