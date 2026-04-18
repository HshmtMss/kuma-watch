export type DataSourceId =
  | "sharp9110"
  | "tokyo"
  | "hokkaido"
  | "akita"
  | "iwate"
  | "yamagata"
  | "niigata"
  | "nagano"
  | "gifu"
  | "toyama"
  | "ishikawa"
  | "fukui"
  | "env_ministry"
  | "csv_archive"
  | "other";

export type DataSourceLicense = "CC-BY-4.0" | "CC0" | "PublicDomain" | "Custom";

export type DataSource = {
  id: DataSourceId;
  name: string;
  url: string;
  license: DataSourceLicense;
  licenseUrl?: string;
  attribution: string;
};

export type Sighting = {
  id: string;
  source: DataSourceId;
  lat: number;
  lon: number;
  date: string;
  prefecture: string;
  city: string;
  section?: string;
  headCount: number;
  comment?: string;
  sourceUrl?: string;
};

export type MeshData = {
  meshCode: string;
  second: number;
  sixth: number;
  latest: number;
  latestSingle: number;
};

export type MeshScored = MeshData & {
  score: number;
  level: RiskLevel;
  centerLat: number;
  centerLon: number;
};

export type RiskLevel = "safe" | "low" | "moderate" | "elevated" | "high" | "unknown";

export type WeatherSnapshot = {
  tempC: number;
  precipMm: number;
  weatherCode: number;
  fetchedAt: string;
  lat: number;
  lon: number;
};

export type ScoreFactors = {
  history: number;
  seasonal: number;
  weather: number;
  lunar: number;
  terrain: number;
  timeOfDayBonus: number;
};

export type ScoreBreakdown = {
  score: number;
  level: RiskLevel;
  factors: ScoreFactors;
  explanation: string[];
};
