#!/usr/bin/env node
/**
 * LINE 公式アカウントのリッチメニューを作成して「デフォルト表示」に設定する。
 *
 * 「クマを見たら報告」ボタンで投稿用 LIFF (/line/submit) を開くだけの最小構成。
 * 名前も URL も忘れた人が、LINE のトーク画面から常設ボタン 1 タップで投稿へ入れる
 * ようにするための入口。
 *
 * 使い方:
 *   LINE_CHANNEL_ACCESS_TOKEN=xxxx \
 *   LIFF_SUBMIT_ID=yyyy \
 *   RICHMENU_IMAGE=./richmenu.png \
 *   node scripts/line-richmenu-setup.mjs
 *
 * 画像仕様: 2500x843 (小) または 2500x1686 (大)、JPEG/PNG、1MB 以下。
 * ボタンのレイアウトを増やしたいときは下の `areas` を編集する
 * (座標は 2500x843 基準。大サイズにするなら bounds も作り直す)。
 *
 * 注意: これは本番の公式アカウントを変更する操作。既存のデフォルトリッチメニューが
 * あれば置き換わる。既存を確認するには GET /v2/bot/richmenu/list を参照。
 */

import { readFile } from "node:fs/promises";
import { extname } from "node:path";

const TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;
const LIFF_SUBMIT_ID = process.env.LIFF_SUBMIT_ID;
const IMAGE_PATH = process.env.RICHMENU_IMAGE;

function die(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

if (!TOKEN) die("LINE_CHANNEL_ACCESS_TOKEN が未設定です");
if (!LIFF_SUBMIT_ID) die("LIFF_SUBMIT_ID が未設定です（投稿用 LIFF アプリの ID）");
if (!IMAGE_PATH) die("RICHMENU_IMAGE が未設定です（2500x843 の PNG/JPEG パス）");

const LIFF_URL = `https://liff.line.me/${LIFF_SUBMIT_ID}`;

// 小サイズ (2500x843) 全面 1 ボタン。分割したいときは areas を増やす。
const richMenu = {
  size: { width: 2500, height: 843 },
  selected: true,
  name: "kuma-report-default",
  chatBarText: "メニュー",
  areas: [
    {
      bounds: { x: 0, y: 0, width: 2500, height: 843 },
      action: { type: "uri", label: "クマを見たら報告", uri: LIFF_URL },
    },
  ],
};

async function api(url, init) {
  const res = await fetch(url, init);
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`${init.method} ${url} → ${res.status}: ${text}`);
  }
  return text ? JSON.parse(text) : {};
}

async function main() {
  console.log("→ リッチメニューを作成中…");
  const { richMenuId } = await api("https://api.line.me/v2/bot/richmenu", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(richMenu),
  });
  console.log(`  richMenuId = ${richMenuId}`);

  console.log("→ 画像をアップロード中…");
  const img = await readFile(IMAGE_PATH);
  const ext = extname(IMAGE_PATH).toLowerCase();
  const contentType =
    ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "image/png";
  // 画像アップロードは api-data.line.me (通常の api.line.me ではない) に送る。
  const upRes = await fetch(
    `https://api-data.line.me/v2/bot/richmenu/${richMenuId}/content`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": contentType },
      body: img,
    },
  );
  if (!upRes.ok) {
    throw new Error(`画像アップロード失敗 ${upRes.status}: ${await upRes.text()}`);
  }

  console.log("→ デフォルトリッチメニューに設定中…");
  await api(`https://api.line.me/v2/bot/user/all/richmenu/${richMenuId}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}` },
  });

  console.log("✓ 完了。トーク画面下部に「クマを見たら報告」が表示されます。");
  console.log(`  開く先: ${LIFF_URL}`);
}

main().catch((e) => die(e.message));
