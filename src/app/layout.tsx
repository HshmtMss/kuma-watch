import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WebVitalsReporter from "@/components/WebVitalsReporter";

const SITE_URL = "https://kuma-watch.jp";
const SITE_NAME = "KumaWatch";
const SITE_TITLE =
  "KumaWatch（クマウォッチ）｜全国クマ警戒レベルマップ｜登山・キャンプの安全確認";
const SITE_DESCRIPTION =
  "KumaWatch（クマウォッチ）は全国のクマ出没情報をリアルタイムで可視化し、5kmメッシュ単位で警戒レベルを予報する無料の Web アプリです。ツキノワグマ・ヒグマの出没情報、気象・時間帯を踏まえた予報、現在地の警戒レベル確認を提供します。登山・キャンプ・ハイキング・山菜採り・きのこ狩り・渓流釣りの前の安全確認にご活用ください。";
const GA_ID = "G-GCT59LNNZ2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#5D4037",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s｜${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "リサーチコーディネート株式会社", url: "https://www.research-coordinate.co.jp" }],
  generator: "Next.js",
  keywords: [
    "KumaWatch",
    "クマウォッチ",
    "クマ出没予報",
    "クマ出没マップ",
    "熊出没情報",
    "ツキノワグマ",
    "ヒグマ",
    "クマ警戒レベル",
    "クマ危険度",
    "クマ出没リアルタイム",
    "登山 安全確認",
    "キャンプ クマ対策",
    "ハイキング 安全",
    "山菜採り クマ",
    "きのこ狩り クマ",
    "渓流釣り クマ",
    "全国 クマ マップ",
    "5kmメッシュ",
    "環境省 クマ データ",
    "獣医師監修 クマ",
    "獣医工学ラボ",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL + "/",
    languages: {
      ja: SITE_URL + "/",
      "x-default": SITE_URL + "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
    url: SITE_URL + "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/icons/Icon-512.png",
        width: 512,
        height: 512,
        alt: "KumaWatch（クマウォッチ）",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KumaWatch（クマウォッチ）｜全国クマ出没予報",
    description:
      "全国のクマ出没情報をリアルタイム可視化。5kmメッシュの警戒レベル予報で登山・キャンプの安全確認に。",
    images: ["/icons/Icon-512.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/icons/Icon-192.png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: SITE_NAME,
  },
  manifest: "/manifest.json",
  category: "safety",
  other: {
    "mobile-web-app-capable": "yes",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE_NAME,
  alternateName: [
    "クマウォッチ",
    "クマ出没マップ",
    "全国クマ出没予報",
    "Bear Alert Map",
  ],
  description: SITE_DESCRIPTION,
  applicationCategory: "SafetyApplication",
  operatingSystem: "Web Browser",
  url: SITE_URL + "/",
  offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
  author: {
    "@type": "Organization",
    name: "リサーチコーディネート株式会社",
    url: "https://www.research-coordinate.co.jp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "西新宿1-20-3 西新宿高木ビル8F",
      addressLocality: "新宿区",
      addressRegion: "東京都",
      postalCode: "160-0023",
      addressCountry: "JP",
    },
    email: "contact@research-coordinate.co.jp",
  },
  inLanguage: "ja",
  isAccessibleForFree: true,
  featureList: [
    "全国クマ出没予報",
    "5kmメッシュ警戒レベルマップ",
    "現在地リスク評価",
    "時間帯別予報",
    "気象連携",
    "自治体データ連携",
    "登録不要・無料",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "KumaWatch（クマウォッチ）とはどんなサービスですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KumaWatch は、全国のクマ出没情報を 5km メッシュ単位で集約し、過去実績・季節・気象・時間帯を組み合わせて現在地のクマ出没警戒レベルを予報する Web アプリです。登山・キャンプ・ハイキング・山菜採りなどアウトドア活動前の安全確認に利用できます。登録不要・無料です。",
      },
    },
    {
      "@type": "Question",
      name: "どの地域のクマ情報が確認できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "北海道から九州まで全国のツキノワグマ・ヒグマ（エゾヒグマ）の出没情報を確認できます。日本アルプス、富士山周辺、奥多摩・丹沢、東北、北海道など主要エリアを網羅し、各自治体のオープンデータと連携してカバレッジを拡大していきます。",
      },
    },
    {
      "@type": "Question",
      name: "データの出典と信頼性はどうなっていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KumaWatch は Sharp9110 提供のオープンデータ（CC BY 4.0）、環境省の公開情報、および連携自治体のデータを統合して表示しています。各ピン・各メッシュの出典は個別に確認できます。データはあくまで参考情報であり、現地の最新情報も必ずご確認ください。",
      },
    },
    {
      "@type": "Question",
      name: "自治体ですが、詳細データを提供したいのですが？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、自治体からのデータ連携を歓迎しています。「自治体の方へ」ページのフォームまたは contact@research-coordinate.co.jp までご連絡ください。CSV/JSON などのオープンデータ形式であれば取り込み可能です。",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL + "/" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "KumaWatch でクマ出没警戒レベルを確認する方法",
  description: "登山・キャンプ前にクマの出没警戒レベルを確認する手順",
  step: [
    { "@type": "HowToStep", name: "アクセス", text: "KumaWatch（kuma-watch.jp）にアクセスします。登録不要・無料です。" },
    { "@type": "HowToStep", name: "場所を指定", text: "検索バーに目的地を入力するか、GPS で現在地を取得します。" },
    { "@type": "HowToStep", name: "警戒レベルを確認", text: "地図上のメッシュ色分けで 5 段階の警戒レベルを確認します。" },
    { "@type": "HowToStep", name: "詳細と予報", text: "メッシュをタップしてスコアの根拠、時間帯別予報、気象条件を確認します。" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://tile.openstreetmap.org" />
        <link rel="dns-prefetch" href="https://tile.openstreetmap.org" />
        <link rel="preconnect" href="https://nominatim.openstreetmap.org" />
        <link rel="dns-prefetch" href="https://nominatim.openstreetmap.org" />
        <link rel="preconnect" href="https://api.open-meteo.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <WebVitalsReporter />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
