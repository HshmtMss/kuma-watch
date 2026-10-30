import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("urban-bear")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://kuma-watch.jp/articles/${meta.slug}` },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `https://kuma-watch.jp/articles/${meta.slug}`,
    type: "article",
    publishedTime: meta.publishedAt,
    modifiedTime: meta.updatedAt,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
};

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        <strong>結論</strong>:「クマは山にいるもの」という前提は 2025 年以降、明確に崩れました。
        県庁所在地クラスの市街地で住宅街・通勤路・商店街にクマが出る
        <strong>アーバン・ベア</strong>現象は、もはや一過性の話題ではなく構造的な変化です。
        住民・通勤者・自治体それぞれが取れる備えを整理します。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            <strong>「クマは山にいる」前提は2025年以降崩れた</strong>。市街地に出るアーバンベアは構造的変化。
          </>,
          <>
            県庁所在地クラスの<strong>住宅街・通勤路・商店街</strong>にも出る。
          </>,
          <>
            <strong>住民・通勤者・自治体</strong>それぞれの備えが必要。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "definition", title: "アーバン・ベアとは" },
          { id: "examples", title: "実例 — 秋田・盛岡・札幌" },
          { id: "why", title: "なぜ市街地に出るのか" },
          { id: "where-when", title: "市街地でクマが出る場所・時間帯" },
          { id: "resident", title: "住民の備え" },
          { id: "commuter", title: "通勤・通学者の備え" },
          { id: "gov", title: "自治体・町内会の対応" },
          { id: "encounter", title: "市街地で遭遇したら" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="definition">アーバン・ベアとは</h2>
      <p>
        アーバン・ベア（urban bear）とは、本来は里山〜山林に生息するクマが、市街地・住宅地・商店街など
        人間の生活圏に頻繁に出没する個体・現象を指します。北米では古くから議論されてきた概念で、
        日本でも市街地への出没が相次ぐなかで、近年広く使われるようになりました。
      </p>
      <p>
        従来「クマと出会うのは山の中」「自宅周辺は安全」が常識でしたが、
        近年は <strong>住宅地での目撃</strong>、<strong>通学路での襲撃</strong>、
        <strong>市街地スーパー駐車場での目撃</strong>といった事案が継続的に報告され、
        従来の「対策は登山者向け」という前提が成り立たなくなってきています。
      </p>

      <h2 id="examples">実例 — 秋田・盛岡・札幌</h2>
      <p>
        報道や自治体の公表情報から、代表的な市街地事案を紹介します。
      </p>
      <ul>
        <li>
          <strong>秋田市（県庁所在地）</strong> — 2024 年 11 月、土崎港地区のスーパーにクマが侵入して従業員が負傷し、店内に 2 日間居座った。
          2025 年秋も市街地での出没が相次ぎ、秋田県は自衛隊に支援を要請した。詳細は{" "}
          <Link href="/place/秋田県/秋田市">秋田市の出没マップ</Link>
        </li>
        <li>
          <strong>盛岡市</strong> — 2025 年 10 月、市役所裏の中津川河川敷や中心部の銀行敷地にクマが現れ、
          銀行敷地では麻酔で捕獲された。詳細は{" "}
          <Link href="/place/岩手県/盛岡市">盛岡市の出没マップ</Link>
        </li>
        <li>
          <strong>札幌市（北海道）</strong> — 2021 年 6 月、東区の住宅街にヒグマが現れ、ごみ出しや通勤中の住民ら 4 人が重軽傷を負った。
          南区などでも住宅地近くでの出没が続く。詳細は{" "}
          <Link href="/place/北海道/札幌市南区">札幌市南区の出没マップ</Link>
        </li>
        <li>
          <strong>仙台市青葉区</strong> — 西部の住宅地で目撃が続く。詳細は{" "}
          <Link href="/place/宮城県/仙台市青葉区">仙台市青葉区の出没マップ</Link>
        </li>
        <li>
          <strong>福島市</strong> — 市街地での目撃が報告されている
        </li>
      </ul>
      <p>
        これらはいずれも人口数十万人以上の都市で、市街地は従来「クマとは無縁」と考えられていた地域です。
      </p>

      <h2 id="why">なぜ市街地に出るのか</h2>
      <p>
        クマが市街地に進出する理由は単一ではなく、複数要因の重なりです。
      </p>
      <ol>
        <li>
          <strong>山の餌不足（ブナ・ミズナラ凶作）</strong>
          <br />
          冬眠前のハイパーフェイジア期に山で十分なカロリーを確保できないと、
          人里の餌資源（柿・栗・廃棄食品・ゴミ）を求めて下りてくる。
          <Link href="/articles/autumn">秋のクマ対策</Link> も参照
        </li>
        <li>
          <strong>里山と市街地の緩衝帯の消失</strong>
          <br />
          かつて存在した田畑・人の手が入った里山が放棄され、森林が市街地のすぐ近くまで迫る構造に。
          クマが「気づかないうちに」市街地に到達できる経路ができている
        </li>
        <li>
          <strong>放棄柿・耕作放棄地</strong>
          <br />
          過疎・高齢化で収穫されない柿や栗、放棄された果樹園が「市街地内の餌場」になり、
          一度味を覚えた個体が繰り返し出没（食物条件付け）
        </li>
        <li>
          <strong>河川敷・緑道がクマの通り道に</strong>
          <br />
          市街地を貫通する河川敷の緑地帯がクマの移動経路となり、
          山地から都市部に入り込める（札幌市東区の事例では、川沿いに住宅街まで移動したと推定されている）
        </li>
        <li>
          <strong>人慣れした個体の増加</strong>
          <br />
          人を恐れない個体（人馴れ）は、住宅地への出没を繰り返すことがある。
          詳細は <Link href="/articles/bear-learning">クマの学習と人慣れ</Link>
        </li>
      </ol>

      <h2 id="where-when">市街地でクマが出る場所・時間帯</h2>
      <p>
        市街地での目撃情報を整理すると、特定の場所と時間帯にリスクが集中します。
      </p>
      <h3>場所</h3>
      <ul>
        <li>河川敷・緑道（クマの通り道）</li>
        <li>住宅地の裏山・斜面林に隣接した区画</li>
        <li>市街地公園・神社の境内（餌になるドングリ等）</li>
        <li>収穫されない柿・栗・梅のある庭・空き家</li>
        <li>ゴミステーション・ゴミ集積所</li>
        <li>スーパー・コンビニのゴミ置き場</li>
        <li>家庭菜園・市民農園</li>
      </ul>
      <h3>時間帯</h3>
      <ul>
        <li>
          <strong>早朝</strong>と <strong>夕方〜夜間</strong>は特に注意。
          クマは明け方と夕方に活発で、夜に動く個体もいる。人通りが少なく、薄暗くて視界が悪い時間
        </li>
        <li>
          秋の大量出没の年は <strong>日中の市街地出没</strong> も相次ぐ
        </li>
        <li>
          夏期（7〜8 月）も早朝の市街地公園・河川敷で目撃あり
        </li>
      </ul>

      <h2 id="resident">住民の備え</h2>
      <p>
        市街地住民が今からできる備えをチェックリストで整理します。
      </p>
      <h3>家の周りの誘引物を断つ（最重要）</h3>
      <ul>
        <li>
          <strong>収穫しない柿・栗・梅は早めに撤去</strong> — 木の上に残った果実は強い誘引源
        </li>
        <li>
          <strong>生ゴミは収集日の朝に出す</strong> — 前夜から出すと夜間に荒らされる
        </li>
        <li>
          <strong>ゴミは密閉ストッカーで保管</strong> — 屋外に置く場合は鍵付き
        </li>
        <li>
          <strong>ペットフードを屋外に置かない</strong>
        </li>
        <li>
          <strong>家庭菜園の野菜は適切な時期に収穫</strong>
        </li>
      </ul>
      <h3>住宅周辺の物理対策</h3>
      <ul>
        <li>センサーライト・人感ブザーを玄関・庭に設置</li>
        <li>裏山・斜面に接する場合は電気柵を検討</li>
        <li>果樹園・家庭菜園は電気柵が有効</li>
      </ul>
      <h3>情報の備え</h3>
      <ul>
        <li>
          自治体の出没情報配信（防災メール・LINE）に登録
        </li>
        <li>
          <Link href="/">くまウォッチトップマップ</Link>
          で居住地周辺の出没状況を週次でチェック
        </li>
      </ul>
      <p>
        詳細な家庭の対策は <Link href="/articles/home-protection">自宅周辺のクマ対策</Link>
        を参照してください。
      </p>

      <h2 id="commuter">通勤・通学者の備え</h2>
      <p>
        市街地での通勤・通学時に取れる対策です。
      </p>
      <ul>
        <li>
          <strong>早朝・夜間の単独歩行を避ける</strong> — 複数人での移動を基本に
        </li>
        <li>
          <strong>河川敷・緑道のルートは日中のみ</strong>
        </li>
        <li>
          <strong>ライト・反射材・ブザー</strong>を装備 — クマと人の両方から見つけてもらう
        </li>
        <li>
          スマートフォンの懐中電灯機能を即起動できる位置に
        </li>
        <li>
          イヤホン・スマホ操作で周囲が見えなくなる行動を控える
        </li>
        <li>
          通勤・通学路の <strong>過去の出没ポイント</strong> を事前確認（くまウォッチの市町村ページの地図で）
        </li>
      </ul>
      <p>
        子どもの通学路特化の対策は <Link href="/articles/school-route">通学路のクマ対策</Link>
        を参照してください。
      </p>

      <h2 id="gov">自治体・町内会の対応</h2>
      <p>
        市街地クマへの対応は個人だけでは限界があり、自治体・町内会のレベルでの取り組みが不可欠です。
      </p>
      <ul>
        <li>
          <strong>放棄柿・放棄果樹の撤去推進</strong> — 所有者不明地への行政対応含む
        </li>
        <li>
          <strong>河川敷・緑道の刈払い</strong> — クマの通り道を物理的に遮断
        </li>
        <li>
          <strong>市街地境界での電気柵・柵設置</strong>
        </li>
        <li>
          <strong>ゴミ集積所の改善</strong> — 動物対策型集積所への切替
        </li>
        <li>
          <strong>AI 検知カメラ・撃退装置の導入</strong> — 詳細は{" "}
          <Link href="/products?for=gov">自治体向け対策ソリューション</Link>
        </li>
        <li>
          <strong>住民向け情報発信の強化</strong> — 公式 HP・防災メール・LINE・SNS。
          リアルタイム性が公衆衛生に直結
        </li>
        <li>
          <strong>猟友会・警察との三者連携の体制再確認</strong>
        </li>
        <li>
          <strong>緊急銃猟</strong>（2025 年 9 月 1 日施行の改正鳥獣保護管理法。市町村長の判断で市街地などでも銃猟ができる）の運用体制の整備
        </li>
      </ul>

      <h2 id="encounter">市街地で遭遇したら</h2>
      <p>
        万一、市街地でクマと遭遇した場合の基本対処です。
      </p>
      <ol>
        <li>
          <strong>走らない・背を向けない</strong> — 大声で騒がず、クマを刺激しない
        </li>
        <li>
          <strong>クマを見ながらゆっくり離れ、建物内に避難</strong> — 車内も可
        </li>
        <li>
          <strong>110 番通報</strong> — 市街地では距離にかかわらず通報。正確な位置・クマの大きさを伝える
        </li>
        <li>
          <strong>近接遭遇（10m 以内）の場合</strong> — 背を向けずに目を逸らさず、ゆっくり後退
        </li>
        <li>
          <strong>襲われた場合</strong> — 接触が避けられなければ、うつ伏せになり両手で首の後ろを守る防御姿勢。執拗に攻撃が続く場合は顔や鼻を狙って反撃
        </li>
      </ol>
      <p>
        距離別の正しい対処は <Link href="/articles/encounter">クマに遭遇したらどうする</Link>、
        襲撃時の応急処置は <Link href="/articles/first-aid">クマ被害の応急処置</Link>
        を参照してください。
      </p>

      <ArticleFaq
        items={[
          {
            q: "アーバン・ベアは増えていますか?",
            a: (
              <>
                増えています。2025 年は秋田市・盛岡市など県庁所在地の市街地でも出没が相次ぎ、住宅地での人身被害も起きました。
                詳細な年次推移は{" "}
                <Link href="/articles/bear-2025-retrospective">
                  2025年クマ大量出没を振り返る
                </Link>
                をご覧ください。
              </>
            ),
            aText:
              "増えている。2025年は秋田市・盛岡市など県庁所在地の市街地でも出没が相次ぎ、住宅地での人身被害も起きた。",
          },
          {
            q: "市街地のクマは「人慣れ」した個体ですか?",
            a: (
              <>
                すべてがそうとは限りませんが、繰り返し市街地に出没する個体は人馴れしている可能性が高いです。
                一度餌資源を覚えた個体は再来する傾向があり、これを「食物条件付け」と呼びます。
                詳細は <Link href="/articles/bear-learning">クマの学習と人慣れ</Link>
                をご覧ください。
              </>
            ),
            aText:
              "繰り返し市街地に出没する個体は人馴れしている可能性が高い。一度餌資源を覚えた個体は再来する傾向があり「食物条件付け」と呼ばれる。",
          },
          {
            q: "市街地で電気柵は使えますか?",
            a: "個人宅・家庭菜園・小規模果樹園には有効ですが、住宅街全体を囲うのは現実的でない場合が多いです。自治体レベルでは市街地境界に部分設置する事例が出始めています。",
            aText:
              "個人宅・家庭菜園・小規模果樹園には有効。住宅街全体を囲うのは現実的でない場合が多い。自治体は市街地境界に部分設置する事例が出始めている。",
          },
          {
            q: "クマよけスプレーは市街地でも携帯すべき?",
            a: (
              <>
                早朝・夜間に河川敷・緑道を通勤する方は携帯を検討してください。
                ただし市街地での誤噴射には注意（人混みで使うと第三者に被害が及ぶ）。人には絶対に向けないでください。正当な理由なく街中で持ち歩くと軽犯罪法に触れるおそれもあります。
                詳細は <Link href="/articles/bear-spray">クマよけスプレーの使い方</Link>
                を参照してください。
              </>
            ),
            aText:
              "早朝・夜間に河川敷・緑道を通勤する方は携帯を検討。ただし市街地での誤噴射に注意し、人には向けない。正当な理由なく街中で持ち歩くと軽犯罪法に触れるおそれも。詳細はクマよけスプレー記事へ。",
          },
          {
            q: "市街地のクマ情報をリアルタイムで知るには?",
            a: (
              <>
                自治体の防災メール・LINE 通知に登録するのが基本。
                加えて <Link href="/">くまウォッチトップマップ</Link>
                で全国の出没情報を日次で確認できます。地域別の詳細は{" "}
                <Link href="/place">都道府県ページ</Link>
                から市町村単位で閲覧可能です。
              </>
            ),
            aText:
              "自治体の防災メール・LINE通知が基本。加えてくまウォッチトップマップで全国の出没情報を日次で確認可能。",
          },
        ]}
      />
      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>
    </ArticleShell>
  );
}
