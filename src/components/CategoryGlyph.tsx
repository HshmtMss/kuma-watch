import { createElement } from "react";
import {
  PawPrint,
  Backpack,
  Leaf,
  TreePine,
  TentTree,
  MapPin,
  ChartColumn,
  FlaskConical,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

/**
 * 「学ぶ（記事）」カテゴリの共通アイコン。フリー素材の Lucide（MIT）を使用し、
 * 絵文字を全廃してカテゴリのビジュアルを一元管理する。
 * クマ専用アイコンは Lucide に無いため、遭遇・対処は PawPrint（足跡）で代替。
 */
export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  all: LayoutGrid,
  encounter: PawPrint,
  gear: Backpack,
  season: Leaf,
  ecology: TreePine,
  scene: TentTree,
  region: MapPin,
  background: ChartColumn,
  science: FlaskConical,
};

export function categoryIcon(slug: string | undefined): LucideIcon {
  return (slug && CATEGORY_ICONS[slug]) || LayoutGrid;
}

type Props = {
  slug: string | undefined;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

/** カテゴリ slug に対応する単色アイコンを描画する。 */
export default function CategoryGlyph({
  slug,
  size = 24,
  strokeWidth = 1.7,
  className,
}: Props) {
  // createElement で描画する（動的アイコンを JSX の <Icon/> で描くと
  // react-hooks/static-components 誤検出になるため）。
  return createElement(categoryIcon(slug), {
    size,
    strokeWidth,
    className,
    "aria-hidden": true,
  });
}
