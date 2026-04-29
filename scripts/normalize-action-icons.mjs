import sharp from "sharp";

// share / post の両アイコンを「下揃え + グレー」に揃える。
// - 白系画素を透過化、それ以外は (GREY,GREY,GREY) に置換 → 真っ黒ではなく柔らかいグレー
// - trim 後にアスペクト比を保ったまま INNER 内に収め、192x192 キャンバスの底面アンカーで合成
//   → JSX 側で h-12 などを当てれば、両アイコンの「四角い部分」の下端が自然に揃う

const OUT_SIZE = 192;
const INNER = 168; // 192 内の最大表示領域
const BOTTOM_PAD = 6; // 底面からの余白
const GREY = 96; // 0=黒, 255=白。stone-700 ≒ #44403c (~75) より少し薄い

async function normalize(input, output) {
  const raw = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { data, info } = raw;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] > 240 && data[i + 1] > 240 && data[i + 2] > 240) {
      data[i + 3] = 0;
    } else if (data[i + 3] > 0) {
      data[i] = GREY;
      data[i + 1] = GREY;
      data[i + 2] = GREY;
    }
  }
  const fitted = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim()
    .resize(INNER, INNER, { fit: "inside" })
    .png()
    .toBuffer();
  const meta = await sharp(fitted).metadata();
  const w = meta.width ?? INNER;
  const h = meta.height ?? INNER;
  const top = OUT_SIZE - h - BOTTOM_PAD;
  const left = Math.round((OUT_SIZE - w) / 2);

  await sharp({
    create: {
      width: OUT_SIZE,
      height: OUT_SIZE,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  })
    .composite([{ input: fitted, top, left }])
    .png()
    .toFile(output);
  console.log("✓", output, `${w}x${h} @ top=${top}`);
}

await normalize("/tmp/share-src.png", "/Users/hashimoto/kuma-watch/public/icons/icon-share.png");
await normalize("/tmp/post-src.png", "/Users/hashimoto/kuma-watch/public/icons/icon-post.png");
