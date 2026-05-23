import { redirect } from "next/navigation";

// /admin に来たら投稿モデレーション画面へ転送する。
// (ブラウザの自動補完で末尾が落ちて /admin になりがちなため)
export default function AdminIndex() {
  redirect("/admin/submissions");
}
