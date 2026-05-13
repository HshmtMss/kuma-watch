// 一回限り: fetch-landmark-images で取れなかった/誤マッチした観光地に
// 手動で imageUrl を埋める。再実行しても冪等。

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const FILE = join(ROOT, "src", "data", "japan-landmarks.ts");

// slug -> { imageUrl, imageCredit }
const PATCHES = {
  // 高尾山: 元データは Tokyo 都の SVG 位置図だった → 山頂方面の写真へ
  高尾山: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Mt.takao.jpg/1280px-Mt.takao.jpg",
    imageCredit: "高尾山",
  },
  // 蔵王: 元データは「蔵王権現 (吉野山)」の画像だった → 蔵王連峰の写真へ
  蔵王: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mount_Za%C5%8D_and_Sakura_01.jpg/3840px-Mount_Za%C5%8D_and_Sakura_01.jpg",
    imageCredit: "蔵王連峰",
  },
  // 知床: SRTM 地形図のみだった → 知床国立公園の景観写真へ
  知床: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/140829_Track_Near_Furepe_Falls_Shiretoko_Hokkaido_Japan00s3.jpg/1280px-140829_Track_Near_Furepe_Falls_Shiretoko_Hokkaido_Japan00s3.jpg",
    imageCredit: "知床国立公園",
  },
  // 以下、画像が無かったエントリに代替記事 (○○東照宮 / ○○山 / ○○村 等) の写真を当てる
  日光: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Nikko_Toshogu_Yomeimon_Gate_2024.jpg/3840px-Nikko_Toshogu_Yomeimon_Gate_2024.jpg",
    imageCredit: "日光東照宮",
  },
  阿蘇: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/20140516%E9%98%BF%E8%98%87%E5%B1%B1%E5%BA%83%E5%9F%9F.jpg/3840px-20140516%E9%98%BF%E8%98%87%E5%B1%B1%E5%BA%83%E5%9F%9F.jpg",
    imageCredit: "阿蘇山",
  },
  丹沢: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Tanzawa_Mountains_from_Mt.Bukka_01.jpg/3840px-Tanzawa_Mountains_from_Mt.Bukka_01.jpg",
    imageCredit: "丹沢山",
  },
  清里: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/150719_KEEP_Hokuto_Yamanashi_pref_Japan16n.jpg/3840px-150719_KEEP_Hokuto_Yamanashi_pref_Japan16n.jpg",
    imageCredit: "清里高原",
  },
  白馬: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nagano_Matsukawa.jpg/3840px-Nagano_Matsukawa.jpg",
    imageCredit: "白馬村",
  },
  万座: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Manza_Onsen_Tsumagoi_Gunma01bs4272.jpg/3840px-Manza_Onsen_Tsumagoi_Gunma01bs4272.jpg",
    imageCredit: "万座温泉",
  },
  富良野: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Furano_Snow_Resort_view2.JPG",
    imageCredit: "富良野市",
  },
  美瑛: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/%E5%9B%9B%E5%AD%A3%E5%BD%A9%E3%81%AE%E4%B8%98-01.JPG",
    imageCredit: "美瑛町",
  },
};

function escapeForRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function patchEntry(content, slug, image) {
  const slugEsc = escapeForRegex(slug);
  // ブロック検出: { slug: "<slug>", ... },
  const blockRe = new RegExp(
    `(\\{\\s*\\n\\s*slug:\\s*"${slugEsc}"[\\s\\S]*?\\n\\s*\\},)`,
    "m",
  );
  const m = content.match(blockRe);
  if (!m) return { content, status: "block-not-found" };
  let block = m[1];

  // 既存の imageUrl / imageCredit を削除してから新しい値を挿入する。
  block = block.replace(/\n\s*imageUrl:\s*"[^"]*",/, "");
  block = block.replace(/\n\s*imageCredit:\s*"[^"]*",/, "");
  // 末尾の "}," の直前に追加
  const indent = "    ";
  const replaced = block.replace(
    /(\n\s*\},)$/,
    `\n${indent}imageUrl: ${JSON.stringify(image.imageUrl)},\n${indent}imageCredit: ${JSON.stringify(image.imageCredit)},$1`,
  );
  return { content: content.replace(block, replaced), status: "patched" };
}

function main() {
  let content = readFileSync(FILE, "utf8");
  let patched = 0;
  let notFound = 0;
  for (const [slug, image] of Object.entries(PATCHES)) {
    const result = patchEntry(content, slug, image);
    content = result.content;
    if (result.status === "patched") {
      console.log(`PATCHED ${slug}`);
      patched++;
    } else {
      console.log(`MISS    ${slug}`);
      notFound++;
    }
  }
  if (patched > 0) writeFileSync(FILE, content);
  console.log(`done. patched=${patched} miss=${notFound}`);
}

main();
