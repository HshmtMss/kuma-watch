#!/usr/bin/env tsx
/**
 * VAPID 鍵ペアを 1 回だけ生成して標準出力に書く one-shot スクリプト。
 *
 * usage:
 *   npx tsx scripts/generate-vapid-keys.ts
 *
 * 生成された値を以下の通り Vercel / GitHub Actions の環境変数に登録する:
 *   - NEXT_PUBLIC_VAPID_PUBLIC_KEY: クライアントが購読時に使う (公開鍵)
 *   - VAPID_PRIVATE_KEY:            サーバ側で署名に使う (秘密鍵、絶対公開しない)
 *   - VAPID_SUBJECT:                'mailto:hashimoto@research-coordinate.co.jp' など
 *
 * 鍵は一度発行したら変更しないこと。変更すると既存購読者の subscription が
 * 全て無効になり、ユーザは再度購読操作をやり直す必要がある。
 */
import webpush from "web-push";

const { publicKey, privateKey } = webpush.generateVAPIDKeys();

console.log("=== VAPID keys (保存してください) ===");
console.log("");
console.log(`NEXT_PUBLIC_VAPID_PUBLIC_KEY=${publicKey}`);
console.log(`VAPID_PRIVATE_KEY=${privateKey}`);
console.log(`VAPID_SUBJECT=mailto:hashimoto@research-coordinate.co.jp`);
console.log("");
console.log(
  "→ Vercel ダッシュボードの Settings > Environment Variables に登録 (Production + Preview + Development の 3 環境すべて)",
);
console.log(
  "→ GitHub Actions の Secrets には PUSH_DISPATCH_SECRET (適当な乱数) のみ登録",
);
