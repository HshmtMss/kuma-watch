import { notFound } from "next/navigation";
import { isLineSubmitReleased } from "@/lib/line-flag";
import LineSubmitClient from "@/components/LineSubmitClient";

export const dynamic = "force-dynamic";

/**
 * LINE 内 (LIFF) で開くクマ目撃投稿ページ。
 *
 * 公式アカウントのリッチメニュー等から https://liff.line.me/{LIFF_ID}/... で
 * 開かれる想定。「クマウォッチの名前も URL も忘れたが、LINE の友だちに公式
 * アカウントが残っている」人が、そこから直接投稿できるようにするための入口。
 *
 * 実際の LIFF 初期化・idToken 取得はクライアント (LineSubmitClient) で行い、
 * 投稿本体は Web と共通の SubmitWizard + /api/submit を再利用する。
 */
export default function LineSubmitPage() {
  if (!isLineSubmitReleased()) notFound();
  return <LineSubmitClient />;
}
