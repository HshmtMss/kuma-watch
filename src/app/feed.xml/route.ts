/**
 * 公開 RSS 2.0 フィード (/feed.xml)。
 *
 * 当サイトは Google News 等の RSS を「取り込む」側だが、自らは発信していなかった。
 * 解説記事を RSS リーダー・アグリゲータ・IFTTT/Zapier・Discord/Slack webhook 等へ
 * 配信できるよう公開フィードを用意し、検索以外の流入経路とクロール鮮度シグナルを増やす。
 *
 * 内容: 解説記事 (ARTICLES) を publishedAt 降順で最新 40 件。
 * ニュース速報・出没データは更新頻度が高く RSS には不向きなため含めない
 * (それらは /news と地図、X 日次投稿、Web Push でカバー)。
 */
import { ARTICLES } from "@/lib/articles-meta";

const SITE_URL = "https://kuma-watch.jp";
const SITE_NAME = "KumaWatch（くまウォッチ）";
const FEED_DESCRIPTION =
  "獣医師監修・獣医工学ラボ運営。クマの生態・遭遇対処・装備・季節・地域のクマ対策解説記事。";
const MAX_ITEMS = 40;

// ISR: 1 時間ごとに再生成。新規記事の追加を程よい遅延で反映する。
export const revalidate = 3600;

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// "2026-05-14" / ISO 文字列を RFC 822 (RSS 必須形式) に変換。日付のみの場合は
// 正午 UTC とみなし、タイムゾーン揺れで前日扱いされるのを防ぐ。
function toRfc822(dateStr: string): string {
  const iso = /^\d{4}-\d{2}-\d{2}$/.test(dateStr)
    ? `${dateStr}T12:00:00Z`
    : dateStr;
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? new Date(0).toUTCString() : d.toUTCString();
}

export async function GET() {
  const items = [...ARTICLES]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, MAX_ITEMS);

  const lastBuildDate = items.length
    ? toRfc822(items[0].updatedAt || items[0].publishedAt)
    : new Date(0).toUTCString();

  const itemXml = items
    .map((a) => {
      const url = `${SITE_URL}/articles/${a.slug}`;
      const summary = a.lead || a.description || "";
      return [
        "    <item>",
        `      <title>${escapeXml(a.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${toRfc822(a.publishedAt)}</pubDate>`,
        `      <category>${escapeXml(a.category)}</category>`,
        `      <description>${escapeXml(summary)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)} — クマ対策解説</title>
    <link>${SITE_URL}/articles</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>ja</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${itemXml}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
