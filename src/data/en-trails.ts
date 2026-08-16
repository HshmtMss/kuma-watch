/**
 * インバウンド向け「有名トレイル(ルート)」の英語ページ用データ。
 * 点(スポット)ではなくルート沿いの出没状況を答えるため、ルート上の主要ポイント
 * (緯度経度)を定義する。ページ側で各ポイント周辺の出没を集計して見せる。
 * 座標は主要地点のおおよその位置(半径10km圏の集計に使うため数km精度で十分)。
 */
export type TrailWaypoint = { name: string; lat: number; lon: number };

export type EnTrail = {
  slug: string;
  name: string; // 英語表示名
  region: string; // 都道府県(英語)
  tagline: string; // 一覧・見出し用の短い説明
  intro: string; // 導入文(2-3文)
  waypoints: TrailWaypoint[];
  /** 関連する英語スポットページの slug(あれば相互リンク)。 */
  relatedSpots?: string[];
};

export const EN_TRAILS: EnTrail[] = [
  {
    slug: "kumano-kodo",
    name: "Kumano Kodo",
    region: "Wakayama · Nara · Mie",
    tagline: "UNESCO pilgrimage trails through the Kii Mountains",
    intro:
      "The Kumano Kodo is a network of ancient pilgrimage routes winding through the forested Kii Mountains of the Kii Peninsula, linking the three grand shrines of Kumano. The popular Nakahechi route is walked over several days, passing small villages, hot springs, and mountain passes — all deep in Asian black bear country.",
    waypoints: [
      { name: "Takijiri-oji (trailhead)", lat: 33.7906, lon: 135.4913 },
      { name: "Chikatsuyu-oji", lat: 33.8358, lon: 135.6014 },
      { name: "Kumano Hongu Taisha", lat: 33.8402, lon: 135.7736 },
      { name: "Yunomine Onsen", lat: 33.8262, lon: 135.7669 },
      { name: "Kumano Nachi Taisha & Nachi Falls", lat: 33.6689, lon: 135.8903 },
      { name: "Kumano Hayatama Taisha (Shingu)", lat: 33.7247, lon: 135.9836 },
    ],
  },
  {
    slug: "nakasendo-kiso",
    name: "Nakasendo (Kiso Valley)",
    region: "Gifu · Nagano",
    tagline: "Edo-era post road through preserved mountain towns",
    intro:
      "The Nakasendo was one of the Edo-period highways connecting Tokyo and Kyoto. Its most walked section runs through the Kiso Valley, linking beautifully preserved post towns like Magome and Tsumago on a forested path between the mountains — a scenic half-day to multi-day walk in black bear habitat.",
    waypoints: [
      { name: "Magome-juku", lat: 35.5225, lon: 137.5686 },
      { name: "Tsumago-juku", lat: 35.5776, lon: 137.5951 },
      { name: "Nojiri", lat: 35.6597, lon: 137.6597 },
      { name: "Kiso-Fukushima", lat: 35.8419, lon: 137.6906 },
      { name: "Narai-juku", lat: 35.9622, lon: 137.8130 },
    ],
  },
  {
    slug: "tateyama-kurobe",
    name: "Tateyama–Kurobe Alpine Route",
    region: "Toyama · Nagano",
    tagline: "High alpine crossing of the Northern Japan Alps",
    intro:
      "The Tateyama–Kurobe Alpine Route crosses the Northern Japan Alps by cable car, bus, and ropeway, from the Murodo plateau to the towering Kurobe Dam. The high alpine sections are above the treeline, but the forest belts on both approaches — and popular hikes around Murodo — are Asian black bear habitat.",
    waypoints: [
      { name: "Tateyama Station", lat: 36.5859, lon: 137.4349 },
      { name: "Bijodaira", lat: 36.5771, lon: 137.4753 },
      { name: "Midagahara", lat: 36.5663, lon: 137.5447 },
      { name: "Murodo", lat: 36.5776, lon: 137.5966 },
      { name: "Kurobe Dam", lat: 36.5663, lon: 137.6607 },
      { name: "Ogizawa", lat: 36.5716, lon: 137.7443 },
    ],
    relatedSpots: ["tateyama"],
  },
  {
    slug: "dewa-sanzan",
    name: "Dewa Sanzan",
    region: "Yamagata",
    tagline: "Three sacred mountains of the Shugendo tradition",
    intro:
      "Dewa Sanzan — Mount Haguro, Mount Gassan, and Mount Yudono — are three sacred peaks in Yamagata, long a center of Shugendo mountain worship. Pilgrims and hikers climb ancient cedar-lined stone stairways and alpine trails between the shrines, through classic Tohoku black bear country.",
    waypoints: [
      { name: "Mount Haguro (Ideha Shrine)", lat: 38.7069, lon: 139.9860 },
      { name: "Mount Gassan", lat: 38.5494, lon: 140.0281 },
      { name: "Mount Yudono (Yudonosan Shrine)", lat: 38.5333, lon: 139.9767 },
    ],
  },
];

export const EN_TRAIL_SLUGS: string[] = EN_TRAILS.map((t) => t.slug);

export function getEnTrail(slug: string): EnTrail | undefined {
  return EN_TRAILS.find((t) => t.slug === slug);
}

/** ルート全ポイントから地図の中心とズームを求める(全体が収まる程度)。 */
export function trailMapView(t: EnTrail): {
  centerLat: number;
  centerLon: number;
  zoom: number;
} {
  const lats = t.waypoints.map((w) => w.lat);
  const lons = t.waypoints.map((w) => w.lon);
  const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
  const centerLon = (Math.min(...lons) + Math.max(...lons)) / 2;
  // 緯度経度スパン(度)から素朴にズームを決める。広いほど引く。
  const span = Math.max(
    Math.max(...lats) - Math.min(...lats),
    Math.max(...lons) - Math.min(...lons),
  );
  let zoom = 10;
  if (span > 0.8) zoom = 8;
  else if (span > 0.4) zoom = 9;
  else if (span > 0.2) zoom = 10;
  else zoom = 11;
  return { centerLat, centerLon, zoom };
}
