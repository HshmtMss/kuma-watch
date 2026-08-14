/**
 * 英語化するインバウンド主要スポットの slug（/en と /en/spot で共有）。
 *
 * 手キュレーションの有名スポット（CURATED_LANDMARKS＝PREBUILD_SPOT_SLUGS）を
 * 丸ごと英語対象にする。以前は 35 件の厳選だったが、いずれも全国的に検索需要の
 * ある有名地名であり、各ページは「周辺の実データ(出没)＋季節＋安全」で内容が
 * 一意に立つため、curated 全 105 件へ拡張してインバウンドの被覆を広げる。
 * （OSM 自動生成の無名スポット数千件は英語では薄コンテンツになるため対象外。）
 */
import { PREBUILD_SPOT_SLUGS } from "@/data/japan-landmarks";

export const INBOUND_EN_SLUGS: string[] = PREBUILD_SPOT_SLUGS;
