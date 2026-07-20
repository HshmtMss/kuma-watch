// かな(ひらがな/カタカナ)→ ヘボン式ローマ字変換と、ASCII slug 化。
// 生成スポットの URL を日本語→ローマ字にするために使う(オンデマンド ISR を可能にし、
// 日本語 slug の x-next-cache-tags 500 バグと事前生成件数上限を回避)。
// 完全な発音再現ではなく「一意で読める ASCII slug」が目的(多少の揺れは許容)。

// 拗音(ふたもじ)を先に処理する必要があるので長いキーから。
const YOON = {
  きゃ:"kya",きゅ:"kyu",きょ:"kyo",しゃ:"sha",しゅ:"shu",しょ:"sho",
  ちゃ:"cha",ちゅ:"chu",ちょ:"cho",にゃ:"nya",にゅ:"nyu",にょ:"nyo",
  ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",みゃ:"mya",みゅ:"myu",みょ:"myo",
  りゃ:"rya",りゅ:"ryu",りょ:"ryo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",
  じゃ:"ja",じゅ:"ju",じょ:"jo",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",
  びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",
  ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",うぃ:"wi",うぇ:"we",うぉ:"wo",
  ゔぁ:"va",ゔぃ:"vi",ゔ:"vu",ゔぇ:"ve",ゔぉ:"vo",てぃ:"ti",でぃ:"di",とぅ:"tu",どぅ:"du",
};
const MONO = {
  あ:"a",い:"i",う:"u",え:"e",お:"o",
  か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",
  さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",
  た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",
  な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",
  は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",
  ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",
  や:"ya",ゆ:"yu",よ:"yo",
  ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",
  わ:"wa",を:"o",ん:"n",
  が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",
  ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",
  だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",
  ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",
  ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",
  ぁ:"a",ぃ:"i",ぅ:"u",ぇ:"e",ぉ:"o",ー:"",
};
// カタカナ→ひらがな(0x60 差)で前処理し、ひらがな表だけ持つ。
function kataToHira(s) {
  return s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
}

/** かな文字列 → ヘボン式ローマ字(小文字)。かな以外はそのまま素通し。 */
export function kanaToRomaji(input) {
  const s = kataToHira(String(input || ""));
  let out = "";
  for (let i = 0; i < s.length; ) {
    const two = s.slice(i, i + 2);
    if (YOON[two]) { out += YOON[two]; i += 2; continue; }
    const c = s[i];
    // 促音 っ: 次の子音を重ねる
    if (c === "っ" || c === "ッ") {
      const nx = s.slice(i + 1, i + 3);
      const nr = YOON[nx] || MONO[s[i + 1]] || "";
      if (nr) out += nr[0];
      i += 1; continue;
    }
    if (MONO[c] !== undefined) { out += MONO[c]; i += 1; continue; }
    out += c; i += 1; // かな以外(漢字が残ってる等)はそのまま
  }
  return out;
}

/** 任意文字列 → URL 安全な小文字 ASCII slug。英語名/ローマ字どちらも受ける。 */
export function toAsciiSlug(str) {
  return String(str || "")
    .normalize("NFKD").replace(/[̀-ͯ]/g, "") // アクセント除去(é→e)
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ")     // 英語Wikipediaの (Kyoto) 等の曖昧回避括弧を除去
    .replace(/[''`]/g, "")           // アポストロフィ除去
    .replace(/[^a-z0-9]+/g, "-")     // 英数字以外はハイフン
    .replace(/^-+|-+$/g, "")          // 前後ハイフン除去
    .replace(/-{2,}/g, "-")           // 連続ハイフン圧縮
    .slice(0, 60);                    // 長すぎる slug を抑制
}

/** ASCII のみか(=そのまま URL に使えるか)。 */
export function isAscii(s) {
  return /^[\x00-\x7F]*$/.test(String(s || ""));
}
