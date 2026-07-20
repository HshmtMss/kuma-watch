/**
 * 予測の記録と答え合わせ。
 *
 * 予測を出す以上、当たったかどうかが残らないと改善できない。しかも
 * 「外れた予測」は放っておくと表示から消えて無かったことになりやすい。
 * 7月時点の予測を年内に固定し、11月以降に実績と突き合わせる。
 *
 * 予測の中身:
 *   ブナの開花指数(7月上旬公表)から、その年が「秋型」になるかを判定する。
 *   実績は 秋(9-11月)/初夏(6-7月) の出没比で、11月末に確定する。
 *
 * 判定の根拠(2019-2025):
 *   開花指数 <1.0 の年 (2019/2023/2025) はすべて秋型 (比 2.28〜3.32)
 *   開花指数 >1.9 の年 (2020/2021/2022/2024) は比 0.34〜1.46
 *   順位相関 -0.821 (n=7)
 * 唯一の外れは2020年で、指数2.04(並作)ながら比1.46とやや秋寄りだった。
 *
 * 記録はリポジトリ内の JSON に持つ。予測は年1回しか増えないので
 * データベースを用意するほどのものではなく、履歴が git に残る方が良い。
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export type ForecastRecord = {
  year: number;
  /** 予測を確定した日 */
  forecastedAt: string;
  /** 5県平均の開花指数 */
  flowerIndex: number;
  poorPrefs: number;
  totalPrefs: number;
  /** 秋型になると予測したか */
  predictedAutumn: boolean;
  /** 実績の 秋/初夏 比。年内は未確定 */
  actualRatio?: number;
  /** 実績が秋型だったか */
  actualAutumn?: boolean;
  /** 当たったか */
  correct?: boolean;
  /** 実績を記録した日 */
  verifiedAt?: string;
};

const FILE = join(process.cwd(), "data", "forecast-log.json");

export function loadForecastLog(): ForecastRecord[] {
  try {
    if (!existsSync(FILE)) return [];
    const j = JSON.parse(readFileSync(FILE, "utf8")) as {
      records?: ForecastRecord[];
    };
    return Array.isArray(j.records) ? j.records : [];
  } catch {
    return [];
  }
}

export function saveForecastLog(records: ForecastRecord[]): void {
  const sorted = [...records].sort((a, b) => a.year - b.year);
  writeFileSync(
    FILE,
    JSON.stringify(
      {
        note:
          "ブナ開花指数(7月公表)による秋型予測と、その答え合わせ。" +
          "予測は年1回。実績は11月末に確定する 秋(9-11月)/初夏(6-7月) 出没比。",
        updatedAt: new Date().toISOString().slice(0, 10),
        records: sorted,
      },
      null,
      2,
    ),
  );
}

/** 当たった割合。実績が入っているものだけで計算する */
export function forecastAccuracy(records: ForecastRecord[]): {
  verified: number;
  correct: number;
  rate: number | null;
} {
  const v = records.filter((r) => typeof r.correct === "boolean");
  const c = v.filter((r) => r.correct).length;
  return { verified: v.length, correct: c, rate: v.length ? c / v.length : null };
}
