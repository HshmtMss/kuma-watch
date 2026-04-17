import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "データ出典",
  description:
    "KumaWatch が利用しているクマ出没情報・気象情報のデータソースとライセンスを明記します。",
  alternates: { canonical: "/sources" },
};

type SourceEntry = {
  name: string;
  provider: string;
  license: string;
  licenseUrl?: string;
  url: string;
  coverage: string;
  usage: string;
};

const SIGHTING_SOURCES: SourceEntry[] = [
  {
    name: "全国クマ出没情報（Sharp9110）",
    provider: "Sharp9110",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/deed.ja",
    url: "https://public.sharp9110.com/view/allposts/bear",
    coverage: "全国",
    usage: "個別出没点の地図表示、最近 30〜90 日のスコア補正",
  },
  {
    name: "5km メッシュ出没集計（環境省公開情報ベース）",
    provider: "環境省 生物多様性センター 他",
    license: "環境省利用規約",
    licenseUrl: "https://www.env.go.jp/",
    url: "https://www.env.go.jp/",
    coverage: "全国 5km メッシュ",
    usage: "ヒートマップ表示、履歴スコア（過去 2 年間の出没実績）",
  },
];

const WEATHER_SOURCES: SourceEntry[] = [
  {
    name: "Open-Meteo Weather API",
    provider: "Open-Meteo",
    license: "CC BY 4.0",
    licenseUrl: "https://open-meteo.com/en/features#terms",
    url: "https://open-meteo.com/",
    coverage: "全世界",
    usage: "現在地の気温・降水・天気コードの取得（スコア計算に使用）",
  },
];

const GEO_SOURCES: SourceEntry[] = [
  {
    name: "OpenStreetMap",
    provider: "OpenStreetMap contributors",
    license: "ODbL 1.0",
    licenseUrl: "https://www.openstreetmap.org/copyright",
    url: "https://www.openstreetmap.org/",
    coverage: "全世界",
    usage: "地図タイル表示",
  },
  {
    name: "Nominatim",
    provider: "OpenStreetMap Foundation",
    license: "ODbL 1.0",
    licenseUrl: "https://operations.osmfoundation.org/policies/nominatim/",
    url: "https://nominatim.openstreetmap.org/",
    coverage: "全世界",
    usage: "住所検索・逆ジオコーディング",
  },
];

function SourceTable({ entries }: { entries: SourceEntry[] }) {
  return (
    <div className="not-prose overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-left text-xs text-gray-500">
            <th className="py-2 pr-4">データ名</th>
            <th className="py-2 pr-4">提供元</th>
            <th className="py-2 pr-4">ライセンス</th>
            <th className="py-2">用途</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <tr key={e.name} className="border-b border-gray-100 align-top">
              <td className="py-3 pr-4">
                <a href={e.url} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 hover:underline">
                  {e.name}
                </a>
                <div className="text-xs text-gray-500">{e.coverage}</div>
              </td>
              <td className="py-3 pr-4 text-gray-700">{e.provider}</td>
              <td className="py-3 pr-4 text-gray-700">
                {e.licenseUrl ? (
                  <a href={e.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline">
                    {e.license}
                  </a>
                ) : (
                  e.license
                )}
              </td>
              <td className="py-3 text-gray-700">{e.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SourcesPage() {
  return (
    <PageShell
      title="データ出典"
      lead="KumaWatch はオープンデータと公開情報を組み合わせてサービスを提供しています。各データの出典・ライセンスを以下に明記します。"
    >
      <h2>クマ出没情報</h2>
      <SourceTable entries={SIGHTING_SOURCES} />

      <h2>気象情報</h2>
      <SourceTable entries={WEATHER_SOURCES} />

      <h2>地図・位置情報</h2>
      <SourceTable entries={GEO_SOURCES} />

      <h2>連携自治体（順次追加）</h2>
      <p>
        KumaWatch は自治体が公開しているクマ出没情報のオープンデータ連携を段階的に進めています。
        データ連携にご関心のある自治体の方は<a href="/for-gov">自治体の方へ</a>のページをご覧ください。
      </p>

      <h2>データの更新頻度</h2>
      <ul>
        <li>Sharp9110 出没情報：最大 1 時間ごとにキャッシュ更新</li>
        <li>5km メッシュ集計：バージョン更新時に刷新（現在: 2025 年 9 月時点）</li>
        <li>気象情報：現在時刻のデータをリアルタイム取得</li>
      </ul>

      <h2>利用上の注意</h2>
      <p>
        KumaWatch のデータは参考情報です。実際のクマの行動は個体差・環境要因で大きく変わります。
        各自治体の公式発表・現地の最新情報も必ずご確認ください。
      </p>
    </PageShell>
  );
}
