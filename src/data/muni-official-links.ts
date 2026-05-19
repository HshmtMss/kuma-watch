// 全国市町村の公式 HP リンク。muni ページ (/place/[pref]/[muni]) で
// 「この自治体の公式情報」セクションに表示する。
//
// データソース: Claude エージェントによる WebSearch + WebFetch verify
// (CC0 相当、ただし掲載は各自治体公式サイトへのリンクなので著作権上の問題なし)
//
// 構造:
// - prefName / cityName は src/data/japan-municipalities.ts と一致させる
// - homeUrl: 自治体公式サイト root (見つからない場合は省略 = まだ未収録)
// - bearUrl: クマ・野生動物関連の情報ページ (存在する場合のみ)
// - verifiedAt: bearUrl を WebFetch 検証した日付 (ISO yyyy-mm-dd)
// - notes: 補足 (例: 「南西諸島・クマ生息域外」)

export type MuniOfficialLink = {
  prefName: string;
  cityName: string;
  homeUrl?: string;
  bearUrl?: string;
  verifiedAt?: string;
  notes?: string;
};

export const MUNI_OFFICIAL_LINKS: MuniOfficialLink[] = [
  // 富山県 (15 件) — 2026-05-19 エージェント収集
  { prefName: "富山県", cityName: "富山市", homeUrl: "https://www.city.toyama.lg.jp/", bearUrl: "https://www.city.toyama.lg.jp/business/nourin/1010630/1010631/index.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "高岡市", homeUrl: "https://www.city.takaoka.toyama.jp/", bearUrl: "https://www.city.takaoka.toyama.jp/soshiki/nogyosuisanka/3/5/1_1/2625.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "魚津市", homeUrl: "https://www.city.uozu.toyama.jp/", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "氷見市", homeUrl: "https://www.city.himi.toyama.jp/", bearUrl: "https://www.city.himi.toyama.jp/gyosei/soshiki/norinchikusan/1/6036.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "滑川市", homeUrl: "https://www.city.namerikawa.toyama.jp/", bearUrl: "https://www.city.namerikawa.toyama.jp/soshiki/15/9224.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "黒部市", homeUrl: "https://www.city.kurobe.toyama.jp/", bearUrl: "https://www.city.kurobe.toyama.jp/category/menu.aspx?ctgcd=189", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "砺波市", homeUrl: "https://www.city.tonami.lg.jp/", bearUrl: "https://www.city.tonami.lg.jp/info/70681p/", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "小矢部市", homeUrl: "https://www.city.oyabe.toyama.jp/", bearUrl: "https://www.city.oyabe.toyama.jp/sangyobusiness/1002761/1002763.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "南砺市", homeUrl: "https://www.city.nanto.toyama.jp/", bearUrl: "https://www.city.nanto.toyama.jp/soshiki/shinrin_nochiseibi/1/1/5259.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "射水市", homeUrl: "https://www.city.imizu.toyama.jp/", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "中新川郡舟橋村", homeUrl: "https://www.vill.funahashi.toyama.jp/", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "中新川郡上市町", homeUrl: "https://www.town.kamiichi.toyama.jp/", bearUrl: "https://www.town.kamiichi.toyama.jp/page/16107.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "中新川郡立山町", homeUrl: "https://www.town.tateyama.toyama.jp/", bearUrl: "https://www.town.tateyama.toyama.jp/emergency/index.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "下新川郡入善町", homeUrl: "https://www.town.nyuzen.toyama.jp/", bearUrl: "https://www.town.nyuzen.toyama.jp/gyosei/soshiki/ganbaru/1/1/5479.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "下新川郡朝日町", homeUrl: "https://www.town.asahi.toyama.jp/", verifiedAt: "2026-05-19" },

  // 秋田県 (25 件) — 2026-05-19 エージェント収集
  { prefName: "秋田県", cityName: "秋田市", homeUrl: "https://www.city.akita.lg.jp/", bearUrl: "https://www.city.akita.lg.jp/kurashi/pet/1006830.html", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "能代市", homeUrl: "https://www.city.noshiro.lg.jp/", bearUrl: "https://www.city.noshiro.lg.jp/kurashi/bosai-shobo/bosai-musen/26442", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "横手市", homeUrl: "https://www.city.yokote.lg.jp/", bearUrl: "https://www.city.yokote.lg.jp/kurashi/1001136/1001194/1003804.html", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "大館市", homeUrl: "https://www.city.odate.lg.jp/", bearUrl: "https://www.city.odate.lg.jp/city/soshiki/shinrin/p9559", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "男鹿市", homeUrl: "https://www.city.oga.akita.jp/", bearUrl: "https://www.city.oga.akita.jp/soshik/norinsuisanka/norinsuisan/1410.html", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "湯沢市", homeUrl: "https://www.city-yuzawa.jp/", bearUrl: "https://www.city-yuzawa.jp/soshiki/42/2329.html", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "鹿角市", homeUrl: "https://www.city.kazuno.lg.jp/", bearUrl: "https://www.city.kazuno.lg.jp/soshiki/nouchirinmu/nouririnmu/gyomu/1/3/2111.html", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "由利本荘市", homeUrl: "https://www.city.yurihonjo.lg.jp/", bearUrl: "https://www.city.yurihonjo.lg.jp/1000005/1001972/1009919/index.html", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "潟上市", homeUrl: "https://www.city.katagami.lg.jp/", bearUrl: "https://www.city.katagami.lg.jp/soshiki/sangyoushinkoubu/nourinsuisanshinkouka/nosonseibi/norinshinko/442.html", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "大仙市", homeUrl: "https://www.city.daisen.lg.jp/", bearUrl: "https://www.city.daisen.lg.jp/archive/contents-13554", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "北秋田市", homeUrl: "https://www.city.kitaakita.akita.jp/", bearUrl: "https://www.city.kitaakita.akita.jp/news/p20250801151555", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "にかほ市", homeUrl: "https://www.city.nikaho.akita.jp/", bearUrl: "https://www.city.nikaho.akita.jp/soshikikarasagasu/norinsuisanka/gyomuannai/1/1/4/4347.html", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "仙北市", homeUrl: "https://www.city.semboku.akita.jp/", bearUrl: "https://www.city.semboku.akita.jp/news_topics/whatsnew.php?id=4623", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "鹿角郡小坂町", homeUrl: "https://www.town.kosaka.akita.jp/", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "北秋田郡上小阿仁村", homeUrl: "https://www.vill.kamikoani.akita.jp/", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "山本郡藤里町", homeUrl: "https://www.town.fujisato.akita.jp/", bearUrl: "https://www.town.fujisato.akita.jp/nogyo/c479/c483/", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "山本郡三種町", homeUrl: "https://www.town.mitane.akita.jp/", bearUrl: "https://www.town.mitane.akita.jp/soshikikarasagasu/norinka/2/3292.html", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "山本郡八峰町", homeUrl: "https://www.town.happo.lg.jp/", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "南秋田郡五城目町", homeUrl: "https://www.town.gojome.akita.jp/", bearUrl: "https://www.town.gojome.akita.jp/bosai-anzen/bosai/bosaiinfo/2866", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "南秋田郡八郎潟町", homeUrl: "https://www.town.hachirogata.akita.jp/", bearUrl: "https://www.town.hachirogata.akita.jp/kurashi/1001457/1001463/1004408.html", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "南秋田郡井川町", homeUrl: "https://www.town.ikawa.akita.jp/", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "南秋田郡大潟村", homeUrl: "https://www.vill.ogata.akita.jp/", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "仙北郡美郷町", homeUrl: "https://www.town.misato.akita.jp/", bearUrl: "https://www.town.misato.akita.jp/nourinseibi/4307", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "雄勝郡羽後町", homeUrl: "https://www.town.ugo.lg.jp/", bearUrl: "https://www.town.ugo.lg.jp/life/detail.html?id=2625&category_id=258", verifiedAt: "2026-05-19" },
  { prefName: "秋田県", cityName: "雄勝郡東成瀬村", homeUrl: "https://vill.higashinaruse.lg.jp/", bearUrl: "https://vill.higashinaruse.lg.jp/villager/post-29380/", verifiedAt: "2026-05-19" },

  // 岩手県 (33 件) — 2026-05-19 エージェント収集
  { prefName: "岩手県", cityName: "盛岡市", homeUrl: "https://www.city.morioka.iwate.jp/", bearUrl: "https://www.city.morioka.iwate.jp/kurashi/pet/yaseidobutsu/1001651.html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "宮古市", homeUrl: "https://www.city.miyako.iwate.jp/", bearUrl: "https://www.city.miyako.iwate.jp/gyosei/soshiki/norin/2/1/1748.html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "大船渡市", homeUrl: "https://www.city.ofunato.iwate.jp/", bearUrl: "https://www.city.ofunato.iwate.jp/archive/contents-18966", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "花巻市", homeUrl: "https://www.city.hanamaki.iwate.jp/", bearUrl: "https://www.city.hanamaki.iwate.jp/kurashi/anshin_anzen/choju_sanrin/1023607/index.html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "北上市", homeUrl: "https://www.city.kitakami.iwate.jp/", bearUrl: "https://www.city.kitakami.iwate.jp/life/soshikikarasagasu/nogyoshinkoka/engeichikusangakari/4/4674.html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "久慈市", homeUrl: "https://www.city.kuji.lg.jp/", bearUrl: "https://www.city.kuji.lg.jp/soshiki/ringyosuisan/1/1/1/1683.html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "遠野市", homeUrl: "https://www.city.tono.iwate.jp/", bearUrl: "https://www.city.tono.iwate.jp/index.cfm/46,38143,288,615,html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "一関市", homeUrl: "https://www.city.ichinoseki.iwate.jp/", bearUrl: "https://www.city.ichinoseki.iwate.jp/index.cfm/29,158129,181,html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "陸前高田市", homeUrl: "https://www.city.rikuzentakata.iwate.jp/", bearUrl: "https://www.city.rikuzentakata.iwate.jp/soshiki/norinka/rinseikakari/1/1/9206.html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "釜石市", homeUrl: "https://www.city.kamaishi.iwate.jp/", bearUrl: "https://www.city.kamaishi.iwate.jp/docs/2020090700039", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "二戸市", homeUrl: "https://www.city.ninohe.lg.jp/", bearUrl: "https://www.city.ninohe.lg.jp/info/4364", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "八幡平市", homeUrl: "https://www.city.hachimantai.lg.jp/", bearUrl: "https://www.city.hachimantai.lg.jp/soshiki/nourin/1771.html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "奥州市", homeUrl: "https://www.city.oshu.iwate.jp/", bearUrl: "https://www.city.oshu.iwate.jp/soshiki/5/1051/9/1/4444.html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "滝沢市", homeUrl: "https://www.city.takizawa.iwate.jp/", bearUrl: "https://www.city.takizawa.iwate.jp/business/noringyo/contents-1545/contents-5410", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "岩手郡雫石町", homeUrl: "https://www.town.shizukuishi.iwate.jp/", bearUrl: "https://www.town.shizukuishi.iwate.jp/docs/2024040100030/", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "岩手郡葛巻町", homeUrl: "https://www.town.kuzumaki.lg.jp/", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "岩手郡岩手町", homeUrl: "https://town.iwate.iwate.jp/town/", bearUrl: "https://town.iwate.iwate.jp/town/life/tsukinowaguma/", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "紫波郡紫波町", homeUrl: "https://www.town.shiwa.iwate.jp/", bearUrl: "https://www.town.shiwa.iwate.jp/soshiki/2_1/2_8/", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "紫波郡矢巾町", homeUrl: "https://www.town.yahaba.iwate.jp/", bearUrl: "https://www.town.yahaba.iwate.jp/soshiki/sangyou/choujuu/", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "和賀郡西和賀町", homeUrl: "https://www.town.nishiwaga.lg.jp/", bearUrl: "https://www.town.nishiwaga.lg.jp/soshikikarasagasu/ringyoshinkoka/notice/2151.html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "胆沢郡金ケ崎町", homeUrl: "https://www.town.kanegasaki.iwate.jp/", bearUrl: "https://www.town.kanegasaki.iwate.jp/articles/2018082900017/", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "西磐井郡平泉町", homeUrl: "https://www.town.hiraizumi.iwate.jp/", bearUrl: "https://www.town.hiraizumi.iwate.jp/index.cfm/24,0,123,373,html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "気仙郡住田町", homeUrl: "https://www.town.sumita.iwate.jp/", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "上閉伊郡大槌町", homeUrl: "https://www.town.otsuchi.iwate.jp/", bearUrl: "https://www.town.otsuchi.iwate.jp/gyosei/docs/460199.html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "下閉伊郡山田町", homeUrl: "https://www.town.yamada.iwate.jp/", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "下閉伊郡岩泉町", homeUrl: "https://www.town.iwaizumi.lg.jp/", bearUrl: "https://www.town.iwaizumi.lg.jp/docs/2025120800017", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "下閉伊郡田野畑村", homeUrl: "https://www.vill.tanohata.iwate.jp/", bearUrl: "https://www.vill.tanohata.iwate.jp/docs/2015082000020/", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "下閉伊郡普代村", homeUrl: "https://www.vill.fudai.iwate.jp/", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "九戸郡軽米町", homeUrl: "https://www.town.karumai.iwate.jp/", bearUrl: "https://www.town.karumai.iwate.jp/article/kurashitetsuduki/eco/cat908/entry-basename.html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "九戸郡野田村", homeUrl: "https://www.vill.noda.iwate.jp/", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "九戸郡九戸村", homeUrl: "https://www.vill.kunohe.iwate.jp/", bearUrl: "https://www.vill.kunohe.iwate.jp/docs/2540.html", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "九戸郡洋野町", homeUrl: "https://www.town.hirono.iwate.jp/", bearUrl: "https://www.town.hirono.iwate.jp/navi/kuma_info/", verifiedAt: "2026-05-19" },
  { prefName: "岩手県", cityName: "二戸郡一戸町", homeUrl: "https://www.town.ichinohe.iwate.jp/", bearUrl: "https://www.town.ichinohe.iwate.jp/soshikikarasagasu/norinka/chikusanshinkokakari/762.html", verifiedAt: "2026-05-19" },

  // 山形県 (35 件) — 2026-05-19 エージェント収集
  { prefName: "山形県", cityName: "山形市", homeUrl: "https://www.city.yamagata-yamagata.lg.jp/", bearUrl: "https://www.city.yamagata-yamagata.lg.jp/kurashi/kankyohozen/1006552/1002384.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "米沢市", homeUrl: "https://www.city.yonezawa.yamagata.jp/", bearUrl: "https://www.city.yonezawa.yamagata.jp/soshiki/3/kankyo/4/4/9719.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "鶴岡市", homeUrl: "https://www.city.tsuruoka.lg.jp/", bearUrl: "https://www.city.tsuruoka.lg.jp/anzen/kuma/index.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "酒田市", homeUrl: "https://www.city.sakata.lg.jp/", bearUrl: "https://www.city.sakata.lg.jp/kurashi/doubutsu/yasei/kankyo03202.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "新庄市", homeUrl: "https://www.city.shinjo.yamagata.jp/", bearUrl: "https://www.city.shinjo.yamagata.jp/s008/20220711105301.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "寒河江市", homeUrl: "https://www.city.sagae.yamagata.jp/", bearUrl: "https://www.city.sagae.yamagata.jp/kurashi/sumai/kankyou/kuma_deta.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "上山市", homeUrl: "https://www.city.kaminoyama.yamagata.jp/", bearUrl: "https://www.city.kaminoyama.yamagata.jp/soshiki/11/bearmap-2025.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "村山市", homeUrl: "https://www.city.murayama.lg.jp/", bearUrl: "https://www.city.murayama.lg.jp/kurashi/anzen_anshin/shiminkumasyutubotu.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "長井市", homeUrl: "https://www.city.nagai.yamagata.jp/", bearUrl: "https://www.city.nagai.yamagata.jp/soshiki/nourin/101/208/15287.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "天童市", homeUrl: "https://www.city.tendo.yamagata.jp/", bearUrl: "https://www.city.tendo.yamagata.jp/busiindust/nourin/kuma_sinrin.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "東根市", homeUrl: "https://www.city.higashine.yamagata.jp/", bearUrl: "https://www.city.higashine.yamagata.jp/section_list/section011/kuma/", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "尾花沢市", homeUrl: "https://www.city.obanazawa.yamagata.jp/", bearUrl: "https://www.city.obanazawa.yamagata.jp/kurashi/kikikanri/anzen/3688", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "南陽市", homeUrl: "https://www.city.nanyo.yamagata.jp/", bearUrl: "https://www.city.nanyo.yamagata.jp/saigai/5126", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "東村山郡山辺町", homeUrl: "https://www.town.yamanobe.yamagata.jp/", bearUrl: "https://www.town.yamanobe.yamagata.jp/soshiki/9/kuma.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "東村山郡中山町", homeUrl: "https://www.town.nakayama.yamagata.jp/", bearUrl: "https://www.town.nakayama.yamagata.jp/soshiki/7/inosisi-kuma.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "西村山郡河北町", homeUrl: "https://www.town.kahoku.yamagata.jp/", bearUrl: "https://www.town.kahoku.yamagata.jp/soshiki/bousaikikikannri/bousai_kikikanrikaka/6882.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "西村山郡西川町", homeUrl: "https://www.town.nishikawa.yamagata.jp/", bearUrl: "https://www.town.nishikawa.yamagata.jp/soshiki/midori/3364.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "西村山郡朝日町", homeUrl: "https://www.town.asahi.yamagata.jp/", bearUrl: "https://www.town.asahi.yamagata.jp/portal/soshikinogoannai/norinshinkoka/noseigakari/1/10645.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "西村山郡大江町", homeUrl: "https://www.town.oe.yamagata.jp/", bearUrl: "https://www.town.oe.yamagata.jp/news/1724", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "北村山郡大石田町", homeUrl: "https://www.town.oishida.yamagata.jp/", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "最上郡金山町", homeUrl: "https://www.town.kaneyama.yamagata.jp/", bearUrl: "https://www.town.kaneyama.yamagata.jp/kurashi/anshin_anzen/kikenseibutsu/1898.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "最上郡最上町", homeUrl: "https://town.mogami.lg.jp/", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "最上郡舟形町", homeUrl: "https://www.town.funagata.yamagata.jp/", bearUrl: "https://www.town.funagata.yamagata.jp/s020/20240903134344.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "最上郡真室川町", homeUrl: "https://www.town.mamurogawa.yamagata.jp/", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "最上郡大蔵村", homeUrl: "https://www.vill.ohkura.yamagata.jp/", bearUrl: "https://www.vill.ohkura.yamagata.jp/soshikikarasagasu/sangyoshinkoka/gyomuannai/5/1/choujuu/1801.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "最上郡鮭川村", homeUrl: "https://www.vill.sakegawa.yamagata.jp/", bearUrl: "https://www.vill.sakegawa.yamagata.jp/seikatsu/yuugaityouzyuu/845", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "最上郡戸沢村", homeUrl: "https://www.vill.tozawa.yamagata.jp/", bearUrl: "https://www.vill.tozawa.yamagata.jp/news/5257/", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "東置賜郡高畠町", homeUrl: "https://www.town.takahata.yamagata.jp/", bearUrl: "https://www.town.takahata.yamagata.jp/soshikiichiran/norinshinkoka/zyuumin/2426.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "東置賜郡川西町", homeUrl: "https://www.town.kawanishi.yamagata.jp/", bearUrl: "https://www.town.kawanishi.yamagata.jp/sangyo/noringyo/2020-1012-1141-26.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "西置賜郡小国町", homeUrl: "https://www.town.oguni.yamagata.jp/", bearUrl: "https://www.town.oguni.yamagata.jp/soshiki/nourin/7840.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "西置賜郡白鷹町", homeUrl: "https://www.town.shirataka.lg.jp/", bearUrl: "https://www.town.shirataka.lg.jp/1315.htm", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "西置賜郡飯豊町", homeUrl: "https://www.town.iide.yamagata.jp/", bearUrl: "https://www.town.iide.yamagata.jp/006/kumashutubotukeihou.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "東田川郡三川町", homeUrl: "https://www.town.mikawa.yamagata.jp/", bearUrl: "https://www.town.mikawa.yamagata.jp/infomation/bear2025.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "東田川郡庄内町", homeUrl: "https://www.town.shonai.lg.jp/", bearUrl: "https://www.town.shonai.lg.jp/kurashi/gomi/dog/kuma.html", verifiedAt: "2026-05-19" },
  { prefName: "山形県", cityName: "飽海郡遊佐町", homeUrl: "https://www.town.yuza.yamagata.jp/", bearUrl: "https://www.town.yuza.yamagata.jp/archive/p20250502131605", verifiedAt: "2026-05-19" },

  // 宮城県 (39 件) — 2026-05-19 エージェント収集
  // 仙台市の 5 区は仙台市全体のクマページ tsukinowaguma.html を共通指定 (宮城野区のみ区独自ページあり)
  { prefName: "宮城県", cityName: "仙台市青葉区", homeUrl: "https://www.city.sendai.jp/", bearUrl: "https://www.city.sendai.jp/kankyochose/kurashi/shizen/petto/yase/higai/tsukinowaguma.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "仙台市宮城野区", homeUrl: "https://www.city.sendai.jp/", bearUrl: "https://www.city.sendai.jp/miyagino-kocho/miyaginoku/yaseityoju/bear.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "仙台市若林区", homeUrl: "https://www.city.sendai.jp/", bearUrl: "https://www.city.sendai.jp/kankyochose/kurashi/shizen/petto/yase/higai/tsukinowaguma.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "仙台市太白区", homeUrl: "https://www.city.sendai.jp/", bearUrl: "https://www.city.sendai.jp/kankyochose/kurashi/shizen/petto/yase/higai/tsukinowaguma.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "仙台市泉区", homeUrl: "https://www.city.sendai.jp/", bearUrl: "https://www.city.sendai.jp/kankyochose/kurashi/shizen/petto/yase/higai/tsukinowaguma.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "石巻市", homeUrl: "https://www.city.ishinomaki.lg.jp/", bearUrl: "https://www.city.ishinomaki.lg.jp/cont/10454500/1000/20141219100812.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "塩竈市", homeUrl: "https://www.city.shiogama.miyagi.jp/", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "気仙沼市", homeUrl: "https://www.kesennuma.miyagi.jp/", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "白石市", homeUrl: "https://www.city.shiroishi.miyagi.jp/", bearUrl: "https://www.city.shiroishi.miyagi.jp/soshiki/25/37585.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "名取市", homeUrl: "https://www.city.natori.miyagi.jp/", bearUrl: "https://www.city.natori.miyagi.jp/life/1/5/188/", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "角田市", homeUrl: "https://www.city.kakuda.lg.jp/", bearUrl: "https://www.city.kakuda.lg.jp/soshiki/3/26011.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "多賀城市", homeUrl: "https://www.city.tagajo.miyagi.jp/", bearUrl: "https://www.city.tagajo.miyagi.jp/nose/kuma2025/kuma2025.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "岩沼市", homeUrl: "https://www.city.iwanuma.miyagi.jp/", bearUrl: "https://www.city.iwanuma.miyagi.jp/business/nogyo-shinko/seisaku/tyoujuuhigaitaisaku/2023-0620-0859-35.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "登米市", homeUrl: "https://www.city.tome.miyagi.jp/", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "栗原市", homeUrl: "https://www.kuriharacity.jp/", bearUrl: "https://www.kuriharacity.jp/w019/010/010/020/PAGE000000000000014424.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "東松島市", homeUrl: "https://www.city.higashimatsushima.miyagi.jp/", bearUrl: "https://www.city.higashimatsushima.miyagi.jp/kurashi/kouen-dobutsu-nogyo/pet-yaseichoju/yaseichojutaisaku/tsukinowaguma.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "大崎市", homeUrl: "https://www.city.osaki.miyagi.jp/", bearUrl: "https://www.city.osaki.miyagi.jp/shisei/soshikikarasagasu/sangyokeizaibu/norinshinkoka_1/21202.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "富谷市", homeUrl: "https://www.tomiya-city.miyagi.jp/", bearUrl: "https://www.tomiya-city.miyagi.jp/kurashi/pet/wildlife/kumazyoho.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "刈田郡蔵王町", homeUrl: "https://www.town.zao.miyagi.jp/", bearUrl: "https://www.town.zao.miyagi.jp/section/nourinkankou/nogyou/nourin20240718.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "刈田郡七ヶ宿町", homeUrl: "https://town.shichikashuku.miyagi.jp/", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "柴田郡大河原町", homeUrl: "https://www.town.ogawara.miyagi.jp/", bearUrl: "https://www.town.ogawara.miyagi.jp/7156.htm", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "柴田郡村田町", homeUrl: "https://www.town.murata.miyagi.jp/", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "柴田郡柴田町", homeUrl: "https://www.town.shibata.miyagi.jp/", bearUrl: "https://www.town.shibata.miyagi.jp/index.cfm/73,68685,3,html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "柴田郡川崎町", homeUrl: "https://www.town.kawasaki.miyagi.jp/", bearUrl: "https://www.town.kawasaki.miyagi.jp/soshiki/nourin/9122.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "伊具郡丸森町", homeUrl: "https://www.town.marumori.miyagi.jp/", bearUrl: "https://www.town.marumori.miyagi.jp/work/detail.php?content=1634", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "亘理郡亘理町", homeUrl: "https://www.town.watari.miyagi.jp/", bearUrl: "https://www.town.watari.miyagi.jp/work/detail.php?content=2184", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "亘理郡山元町", homeUrl: "https://www.town.yamamoto.miyagi.jp/", bearUrl: "https://www.town.yamamoto.miyagi.jp/soshiki/33/31175.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "宮城郡松島町", homeUrl: "https://www.town.miyagi-matsushima.lg.jp/", bearUrl: "https://www.town.miyagi-matsushima.lg.jp/page/1059.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "宮城郡七ヶ浜町", homeUrl: "https://www.shichigahama.com/", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "宮城郡利府町", homeUrl: "https://www.town.rifu.miyagi.jp/", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "黒川郡大和町", homeUrl: "https://www.town.taiwa.miyagi.jp/", bearUrl: "https://www.town.taiwa.miyagi.jp/soshiki/norinshinko/nochirimmu/698.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "黒川郡大郷町", homeUrl: "https://www.town.miyagi-osato.lg.jp/", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "黒川郡大衡村", homeUrl: "https://www.village.ohira.miyagi.jp/", bearUrl: "https://www.village.ohira.miyagi.jp/soshiki/11/1062.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "加美郡色麻町", homeUrl: "https://www.town.shikama.miyagi.jp/", bearUrl: "https://www.town.shikama.miyagi.jp/soshiki/sangyo_shinko/21/2/3191.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "加美郡加美町", homeUrl: "https://www.town.kami.miyagi.jp/", bearUrl: "https://www.town.kami.miyagi.jp/soshikikarasagasu/norinka/kumamokugeki/index.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "遠田郡涌谷町", homeUrl: "https://www.town.wakuya.miyagi.jp/", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "遠田郡美里町", homeUrl: "https://www.town.misato.miyagi.jp/", bearUrl: "https://www.town.misato.miyagi.jp/09oshirase/2025-1213-1105-33.html", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "牡鹿郡女川町", homeUrl: "https://www.town.onagawa.miyagi.jp/", verifiedAt: "2026-05-19" },
  { prefName: "宮城県", cityName: "本吉郡南三陸町", homeUrl: "https://www.town.minamisanriku.miyagi.jp/", bearUrl: "https://www.town.minamisanriku.miyagi.jp/soshiki/1006/7/2/1/1458.html", verifiedAt: "2026-05-19" },

  // 青森県 (40 件) — 2026-05-19 エージェント収集
  { prefName: "青森県", cityName: "青森市", homeUrl: "https://www.city.aomori.aomori.jp/", bearUrl: "https://www.city.aomori.aomori.jp/kurashi_kankyo/kankyo/1002085/1010230.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "弘前市", homeUrl: "https://www.city.hirosaki.aomori.jp/", bearUrl: "https://www.city.hirosaki.aomori.jp/sangyo/nogyo/2024-0417-kuma-map-R6.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "八戸市", homeUrl: "https://www.city.hachinohe.aomori.jp/", bearUrl: "https://www.city.hachinohe.aomori.jp/soshikikarasagasu/norinchikusanka/yuugaityojyutaisaku/1655.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "黒石市", homeUrl: "https://www.city.kuroishi.aomori.jp/", bearUrl: "https://www.city.kuroishi.aomori.jp/sangyou/ringyou/kumanohigainiawanaitameni.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "五所川原市", homeUrl: "https://www.city.goshogawara.lg.jp/", bearUrl: "https://www.city.goshogawara.lg.jp/kurashi/kurashi/kuma-denger.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "十和田市", homeUrl: "https://www.city.towada.lg.jp/", bearUrl: "https://www.city.towada.lg.jp/sangyo/nourin/yuugaityoujuu/R6kumanigochuuikudasai.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "三沢市", homeUrl: "https://www.city.misawa.lg.jp/", bearUrl: "https://www.city.misawa.lg.jp/index.cfm/10,64732,40,763,html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "むつ市", homeUrl: "https://www.city.mutsu.lg.jp/", bearUrl: "https://www.city.mutsu.lg.jp/work/sangyou/nougyouringyou/kumanityui.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "つがる市", homeUrl: "https://www.city.tsugaru.aomori.jp/", bearUrl: "https://www.city.tsugaru.aomori.jp/soshiki/keizai/nourin/choju/7339.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "平川市", homeUrl: "https://www.city.hirakawa.lg.jp/", bearUrl: "https://www.city.hirakawa.lg.jp/kurashi/sumai/doubutsu/kumasyutsubotsu.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "東津軽郡平内町", homeUrl: "https://www.town.hiranai.aomori.jp/", bearUrl: "https://www.town.hiranai.aomori.jp/soshiki/nosei/1/3/1/1528.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "東津軽郡今別町", homeUrl: "https://www.town.imabetsu.lg.jp/", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "東津軽郡蓬田村", homeUrl: "https://www.vill.yomogita.lg.jp/", bearUrl: "https://www.vill.yomogita.lg.jp/oshirase/topics/2024-0701-1605-23.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "東津軽郡外ヶ浜町", homeUrl: "https://www.town.sotogahama.lg.jp/", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "西津軽郡鰺ヶ沢町", homeUrl: "https://www.town.ajigasawa.lg.jp/", bearUrl: "https://www.town.ajigasawa.lg.jp/sangyo_jigyo/norin_suisan/noringyo/nourin0120250421.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "西津軽郡深浦町", homeUrl: "https://www.town.fukaura.lg.jp/", bearUrl: "https://www.town.fukaura.lg.jp/doc/2024072300019/", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "中津軽郡西目屋村", homeUrl: "https://www.nishimeya.jp/", bearUrl: "https://www.nishimeya.jp/shigoto_sangyo/nogyo/1038.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "南津軽郡藤崎町", homeUrl: "https://www.town.fujisaki.lg.jp/", bearUrl: "http://www.town.fujisaki.lg.jp/index.cfm/7,21223,57,html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "南津軽郡大鰐町", homeUrl: "https://www.town.owani.lg.jp/", bearUrl: "http://www.town.owani.lg.jp/index.cfm/9,5663,41,html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "南津軽郡田舎館村", homeUrl: "https://www.vill.inakadate.lg.jp/", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "北津軽郡板柳町", homeUrl: "https://www.town.itayanagi.aomori.jp/", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "北津軽郡鶴田町", homeUrl: "https://www.town.tsuruta.lg.jp/", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "北津軽郡中泊町", homeUrl: "https://www.town.nakadomari.lg.jp/", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "上北郡野辺地町", homeUrl: "https://www.town.noheji.aomori.jp/", bearUrl: "https://www.town.noheji.aomori.jp/life/news/news-36", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "上北郡七戸町", homeUrl: "https://www.town.shichinohe.lg.jp/", bearUrl: "https://www.town.shichinohe.lg.jp/kurashi/syouhiseikatsu/post-525.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "上北郡六戸町", homeUrl: "https://www.town.rokunohe.aomori.jp/", bearUrl: "https://www.town.rokunohe.aomori.jp/docs/2022041100131/", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "上北郡横浜町", homeUrl: "https://www.town.yokohama.lg.jp/", bearUrl: "https://www.town.yokohama.lg.jp/index.cfm/7,13737,20,html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "上北郡東北町", homeUrl: "https://www.town.tohoku.lg.jp/", bearUrl: "https://www.town.tohoku.lg.jp/chousei/info/info_yakuba_05-68.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "上北郡六ヶ所村", homeUrl: "https://www.rokkasho.jp/", bearUrl: "https://www.rokkasho.jp/index.cfm/11,0,23,241,html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "上北郡おいらせ町", homeUrl: "https://www.town.oirase.aomori.jp/", bearUrl: "https://www.town.oirase.aomori.jp/soshiki/2321/kumanityuui.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "下北郡大間町", homeUrl: "https://www.town.ooma.lg.jp/", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "下北郡東通村", homeUrl: "https://www.vill.higashidoori.lg.jp/", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "下北郡風間浦村", homeUrl: "https://www.kazamaura.jp/", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "下北郡佐井村", homeUrl: "https://www.vill.sai.lg.jp/", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "三戸郡三戸町", homeUrl: "https://www.town.sannohe.aomori.jp/", bearUrl: "https://www.town.sannohe.aomori.jp/soshiki/nourin/yugaityoju/5218.html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "三戸郡五戸町", homeUrl: "https://www.town.gonohe.aomori.jp/", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "三戸郡田子町", homeUrl: "https://www.town.takko.lg.jp/", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "三戸郡南部町", homeUrl: "https://www.town.aomori-nanbu.lg.jp/", bearUrl: "https://www.town.aomori-nanbu.lg.jp/index.cfm/9,280,38,378,html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "三戸郡階上町", homeUrl: "https://www.town.hashikami.lg.jp/", bearUrl: "https://www.town.hashikami.lg.jp/index.cfm/7,17077,31,341,html", verifiedAt: "2026-05-19" },
  { prefName: "青森県", cityName: "三戸郡新郷村", homeUrl: "https://www.vill.shingo.aomori.jp/", bearUrl: "https://www.vill.shingo.aomori.jp/news/post-27991/", verifiedAt: "2026-05-19" },
];

// 高速ルックアップ用 index。`${pref}/${city}` をキーに 1 件返す。
const INDEX = new Map<string, MuniOfficialLink>();
for (const e of MUNI_OFFICIAL_LINKS) {
  INDEX.set(`${e.prefName}/${e.cityName}`, e);
}

export function getMuniOfficialLink(
  prefName: string,
  cityName: string,
): MuniOfficialLink | null {
  return INDEX.get(`${prefName}/${cityName}`) ?? null;
}
