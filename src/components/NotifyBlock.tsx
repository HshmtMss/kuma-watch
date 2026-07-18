import type { ReactNode } from "react";
import NotifyCard, { type NotifyTarget } from "@/components/NotifyCard";
import PushSubscribeButton from "@/components/PushSubscribeButton";
import { isLineEntryReleased } from "@/lib/line-flag";
import type { NotifySurface } from "@/lib/analytics";

export type NotifyBlockProps = {
  /** 購読対象（muni / spot）。NotifyCard・PushSubscribeButton 共通の型。 */
  target: NotifyTarget;
  /** GA 計測用の面（place_hero / place_footer / spot_visitor / spot_footer 等）。 */
  surface: NotifySurface;
  /** Push 通知が公開済みか。muni は isPushReleased()、spot は isSpotPushReleased() を渡す。 */
  pushReleased: boolean;
  /** 親セクションに見出しがある場合、内側の見出しを省く。 */
  hideHeading?: boolean;
  /** 実際に描画されるときだけ適用するラッパーの className（例: "mt-3"）。 */
  wrapperClassName?: string;
};

/**
 * 通知の申し込み枠。/spot と /place/[pref]/[muni] のヒーロー／フッターで共通利用する。
 *
 * 出し分けルール（両ページ共通）:
 *   1. LINE 導線が公開済み → NotifyCard（LINE 主役 + Web 控えの併存 UI）
 *   2. そうでなく Push 公開済み → PushSubscribeButton
 *   3. どちらも未公開 → 何も出さない（null）
 *
 * 以前は同じ三項分岐を 4 箇所にインライン実装しており、条件が読みにくく、
 * どこかを直すと他とズレる温床だった。ここに集約する。LINE フラグはページ非依存
 * なので内部で読む。Push は muni/spot でフラグ関数が異なるため呼び出し側が真偽を渡す。
 * 純粋な合成なので Server Component のまま（NotifyCard/PushSubscribeButton は Client）。
 */
export default function NotifyBlock({
  target,
  surface,
  pushReleased,
  hideHeading,
  wrapperClassName,
}: NotifyBlockProps) {
  let control: ReactNode = null;
  if (isLineEntryReleased()) {
    control = (
      <NotifyCard target={target} surface={surface} hideHeading={hideHeading} />
    );
  } else if (pushReleased) {
    control = (
      <PushSubscribeButton
        target={target}
        surface={surface}
        hideHeading={hideHeading}
      />
    );
  }

  if (!control) return null;
  return wrapperClassName ? (
    <div className={wrapperClassName}>{control}</div>
  ) : (
    control
  );
}
