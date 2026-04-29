#!/usr/bin/env node
// PWA アイコン生成: bear-face.png を中央寄せして余白を入れた icon を出力する。
// iOS ホーム追加で耳が rounded corner に切れていた問題への対応。
// 実行: node scripts/build-pwa-icons.mjs

import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
// 元アイコン (黄色いクマ顔・白背景・ぎりぎり余白なし) を中央寄せ用ソースに使う。
const SRC = path.join(ROOT, "public/icons/source-bear-yellow-512.png");
const OUT_DIR = path.join(ROOT, "public/icons");

const BG = { r: 255, g: 255, b: 255, alpha: 1 }; // 白背景

/**
 * 1) ソース画像の「中身 (= クマの非白ピクセル) 」を bbox で切り出す
 * 2) その中身を innerRatio 分の正方形に contain でフィット
 * 3) size x size の白背景に中央配置して書き出す
 */
async function buildIcon({ size, innerRatio, outPath }) {
  const inner = Math.round(size * innerRatio);
  // まず白背景を透過に置き換えて trim — クマ本体の bbox を正確に取り出す。
  // (sharp.trim はアルファ/輝度 ベースなので、白を透過化してから trim する)
  const trimmed = await sharp(SRC)
    .ensureAlpha()
    .recomb([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ])
    // 白に近いピクセルを透過化
    .removeAlpha()
    .toColourspace("srgb")
    .png()
    .toBuffer()
    .then((buf) =>
      sharp(buf)
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true })
        .then(({ data, info }) => {
          // 白ピクセルを透過化
          for (let i = 0; i < data.length; i += 4) {
            if (data[i] > 245 && data[i + 1] > 245 && data[i + 2] > 245) {
              data[i + 3] = 0;
            }
          }
          return sharp(data, {
            raw: {
              width: info.width,
              height: info.height,
              channels: 4,
            },
          })
            .trim() // 透過の周りを削る
            .png()
            .toBuffer();
        }),
    );
  const bear = await sharp(trimmed)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toBuffer();
  const pad = Math.round((size - inner) / 2);
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BG,
    },
  })
    .composite([{ input: bear, top: pad, left: pad }])
    .png()
    .toFile(outPath);
  console.log(`✓ ${path.relative(ROOT, outPath)} (inner ${inner}/${size})`);
}

async function main() {
  // any-purpose (iOS ホーム / 標準 PWA): 余白 12% (innerRatio 0.76)
  // → 耳が rounded corner に当たらない程度の安全な余白
  await buildIcon({
    size: 192,
    innerRatio: 0.76,
    outPath: path.join(OUT_DIR, "Icon-192.png"),
  });
  await buildIcon({
    size: 512,
    innerRatio: 0.76,
    outPath: path.join(OUT_DIR, "Icon-512.png"),
  });

  // maskable (Android adaptive launcher 等): safe zone は中心の半径 40% 円。
  // 余白を厚めに 22% (innerRatio 0.56) 取ると耳まで safe zone に収まる。
  await buildIcon({
    size: 192,
    innerRatio: 0.56,
    outPath: path.join(OUT_DIR, "Icon-maskable-192.png"),
  });
  await buildIcon({
    size: 512,
    innerRatio: 0.56,
    outPath: path.join(OUT_DIR, "Icon-maskable-512.png"),
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
