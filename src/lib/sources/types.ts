export type SightingSourceKind =
  | "sharp9110"
  | "arcgis"
  | "csv"
  | "llm-html"
  | "news"; // Google News RSS から Gemini で抽出したニュース報道

export type UnifiedSighting = {
  id: string;
  source: string;
  sourceKind: SightingSourceKind;
  lat: number;
  lon: number;
  date: string;
  prefectureName: string;
  cityName: string;
  sectionName: string;
  comment: string;
  headCount: number;
  // 公式情報源 (自治体・警察・公的機関) なら true。
  // ニュース報道・SNS など二次情報源は false。UI で「公式」「報道」の
  // バッジを出すための信頼性シグナル。未指定 (undefined) は「公式扱い」。
  isOfficial?: boolean;
  // 元記事 / 元情報のリンク (news 等で記事 URL を保持)
  sourceUrl?: string;
};

export function inJapanBounds(lat: number, lon: number): boolean {
  return lat >= 20 && lat <= 50 && lon >= 120 && lon <= 150;
}
