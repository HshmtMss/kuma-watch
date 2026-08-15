/**
 * slug → 英語表示名。英語プッシュ配信で通知文に使う。
 * 生成分は enName、手キュレーション分は altNames のローマ字。無ければ null。
 */
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { getEnGeneratedSpot } from "@/data/inbound-en-generated";

export function enSpotName(slug: string): string | null {
  const gen = getEnGeneratedSpot(slug);
  if (gen) return gen.enName;
  const l = JAPAN_LANDMARKS.find((x) => x.slug === slug);
  if (!l) return null;
  const r = l.altNames?.find((a) => /^[A-Za-z]/.test(a));
  return r ?? null;
}
