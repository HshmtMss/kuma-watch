import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { ARTICLES } from "@/lib/articles-meta";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "クマ対策・遭遇時の対処 記事一覧",
  description:
    "クマと遭遇したらどうするか、秋のクマ対策、クマよけスプレーの使い方、クマ鈴の効果、ツキノワグマとヒグマの違いなど、登山・キャンプ・山仕事の安全に役立つ記事を掲載しています。",
  alternates: { canonical: `${SITE_URL}/articles` },
};

const SEASON_LABEL: Record<string, string> = {
  spring: "春",
  summer: "夏",
  autumn: "秋",
  winter: "冬",
  all: "通年",
};

export default function ArticlesIndexPage() {
  const sorted = [...ARTICLES].sort((a, b) =>
    b.updatedAt.localeCompare(a.updatedAt),
  );

  return (
    <PageShell
      title="クマ対策の記事一覧"
      lead="登山・キャンプ・山菜採り・きのこ狩り・渓流釣りなど、クマと隣り合うアウトドア活動を安全に楽しむための記事をまとめています。"
    >
      <ul className="not-prose space-y-5">
        {sorted.map((a) => (
          <li
            key={a.slug}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white hover:border-amber-400 hover:bg-amber-50"
          >
            <Link href={`/articles/${a.slug}`} className="flex flex-col gap-0 sm:flex-row">
              {a.heroImage && (
                <div className="relative h-40 w-full shrink-0 sm:h-auto sm:w-48">
                  <Image
                    src={a.heroImage}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 192px, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex-1 p-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  {a.season && (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-amber-800">
                      {SEASON_LABEL[a.season]}
                    </span>
                  )}
                  <span>{a.publishedAt}</span>
                </div>
                <div className="mt-2 text-base font-semibold text-gray-900">
                  {a.title}
                </div>
                <div className="mt-1 text-sm text-gray-600">{a.lead}</div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {a.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
