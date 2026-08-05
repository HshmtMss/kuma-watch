import Link from "next/link";
import { isSupporterReleased } from "@/lib/supporter-flag";

/**
 * TV の「提供」クレジット風の一行。
 * 「この地図はサポーターの皆さまのご支援でお届けしています」
 *
 * お礼であると同時に「自分も支えられる」と気づかせる勧誘導線を兼ねる
 * (社会的証明)。命に関わる LINE 通知の本文には入れず、サイトのフッター等の
 * 控えめな位置に置く。フラグ OFF の間は何も描画しない。
 */
export default function ProviderCredit() {
  if (!isSupporterReleased()) return null;
  return (
    <p className="mt-3 text-xs leading-relaxed text-stone-500">
      この地図はサポーターの皆さまのご支援でお届けしています。{" "}
      <Link
        href="/support"
        className="font-medium text-emerald-700 hover:text-emerald-800 hover:underline"
      >
        サポーターになる
      </Link>
    </p>
  );
}
