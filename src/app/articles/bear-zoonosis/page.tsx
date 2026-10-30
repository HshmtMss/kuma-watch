import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints, References } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-zoonosis")!;

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
        クマに襲われたとき、まず命に関わるのは<strong>大量出血</strong>です。
        その手当てと救急要請のあとで見落とされやすいのが<strong>感染症</strong>。
        動物に噛まれたり引っかかれたりした傷は、見た目が小さくても深く、細菌が入り込みやすい傷です。
        本記事では、クマとの接触やクマ肉の扱いで注意したい人獣共通感染症 (ズーノーシス) と、
        受傷後に何をすべきかを整理します。治療の判断は必ず医師が行います。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            襲われたら<strong>まず止血と救急要請</strong>。その後、傷が小さくても<strong>必ず受診</strong>。
          </>,
          <>
            噛み傷・引っかき傷は<strong>細菌感染と破傷風</strong>に注意。受診時に破傷風ワクチンの履歴を伝える。
          </>,
          <>
            クマ肉は<strong>旋毛虫（トリヒナ）</strong>の集団食中毒の原因。<strong>生や加熱不足で食べない</strong>。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "what-is", title: "人獣共通感染症とは" },
          { id: "bite-infection", title: "噛み傷・引っかき傷の細菌感染" },
          { id: "tetanus", title: "破傷風" },
          { id: "trichinella", title: "クマ肉と旋毛虫（トリヒナ）" },
          { id: "rabies", title: "狂犬病（国内と海外の違い）" },
          { id: "tularemia", title: "野兎病（ツラレミア）" },
          { id: "first-action", title: "受傷後の対応" },
          { id: "hunter", title: "狩猟者・解体者向け注意" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="what-is">人獣共通感染症とは</h2>
      <p>
        <strong>人獣共通感染症 (ズーノーシス、zoonosis)</strong> は、動物から人へ (またはその逆に) 感染する病気の総称です。
        クマの場合、人への感染の経路として考えられるのは、噛み傷・引っかき傷、
        解体時の血液や組織への接触、そして肉を食べることです。
      </p>

      <h2 id="bite-infection">噛み傷・引っかき傷の細菌感染</h2>
      <p>
        動物の口の中や爪には多くの細菌がいます。犬や猫の咬傷では、
        <strong>パスツレラ菌 (Pasteurella multocida)</strong> などによる感染がよく知られています。
        クマの口の細菌について詳しく調べたデータは多くありませんが、
        動物による噛み傷・引っかき傷である点は同じで、傷が深いと感染を起こしやすくなります。
      </p>
      <ul>
        <li>注意したい症状: 傷のまわりの腫れ・赤み・強い痛み・熱っぽさ・膿</li>
        <li>受傷から間もなく症状が出ることもあるため、腫れや痛みが強くなったらすぐ受診する</li>
        <li>抗菌薬が必要かどうか、傷を縫うかどうかは医師が判断する</li>
      </ul>

      <h2 id="tetanus">破傷風</h2>
      <p>
        <strong>破傷風菌 (Clostridium tetani)</strong> は土の中に広くいる菌で、
        傷口から入ると神経に作用する毒素をつくります。潜伏期間は一般に 3〜21 日で、
        口が開けにくい、首や背中のこわばり、けいれんなどが出ます。発症すると命に関わることがある病気です。
      </p>
      <ul>
        <li>土で汚れた傷・深い傷は破傷風の危険がある傷とされる</li>
        <li>受傷時に、ワクチンの追加接種や免疫グロブリンが必要かどうかを医師が判断する</li>
        <li>受診のときに、最後に破傷風ワクチンを打った時期を伝える（分からなければ「分からない」と伝える）</li>
      </ul>
      <p>
        登山・狩猟・農作業など野外で過ごす時間が長い人は、平時から破傷風ワクチンの履歴を確認しておくと安心です。
      </p>

      <h2 id="trichinella">クマ肉と旋毛虫（トリヒナ）</h2>
      <p>
        <strong>旋毛虫 (Trichinella)</strong> は、動物の筋肉の中に幼虫が潜む寄生虫です。
        国内では、人の旋毛虫症の集団発生はこれまで<strong>いずれもクマ肉が原因</strong>でした。
        2016 年 12 月には茨城県の飲食店で加熱不十分なクマ肉のローストが原因の集団食中毒が起き、
        2018 年と 2019 年には北海道でもクマ肉による集団発生がありました。
      </p>
      <ul>
        <li>症状: 腹痛・下痢のほか、発熱、まぶたや顔のむくみ、筋肉痛など</li>
        <li>
          厚生労働省は、クマ肉は<strong>中心部を 75℃ で 1 分間以上（または同等以上）加熱</strong>して食べるよう求めている
        </li>
        <li>
          野生動物の旋毛虫には冷凍に強いものがあり、冷凍しても安全とは限らない。加熱が基本
        </li>
      </ul>
      <p>
        クマ以外の野生動物の肉（シカ・イノシシなど）でも、寄生虫や E 型肝炎ウイルスなどの危険があるため、
        野生鳥獣の肉は生で食べず、中心部まで十分に加熱してください。
      </p>

      <h2 id="rabies">狂犬病（国内と海外の違い）</h2>
      <p>
        国内では <strong>1957 年以降、動物の狂犬病は確認されていません</strong>。
        国内でクマに噛まれて狂犬病になる危険はきわめて低いと考えられます。
        ワクチンが必要かどうかは医師が判断します。
      </p>
      <p>
        一方、海外の多くの国では狂犬病がいまも発生しています。
        <strong>海外で</strong>クマを含む野生動物に噛まれたり引っかかれたりした場合は、
        すぐに傷を洗い、現地の医療機関で受診してください。発症するとほぼ助からない病気ですが、
        噛まれた後すぐにワクチン接種（暴露後接種）を始めれば発症を防げます。帰国後も検疫所や医療機関に相談してください。
      </p>

      <h2 id="tularemia">野兎病（ツラレミア）</h2>
      <p>
        <strong>野兎病菌 (Francisella tularensis)</strong> は主にノウサギや齧歯類の間で維持されている菌です。
        国内では関東以北、特に東北地方で散発的に発生しており、人は主に感染したノウサギなどとの接触で感染します。
        クマなどの野生動物でも、この菌に対する抗体が見つかった例があります。
        感染した動物の解体・調理で血液や組織に触れることや、マダニなどに刺されることで感染するため、解体時は注意が必要です。
      </p>
      <ul>
        <li>症状: 発熱、リンパ節の腫れ、菌が入った部位の潰瘍など</li>
        <li>予防: 解体時は手袋を着ける、傷のある手で素手で触らない</li>
      </ul>

      <h2 id="first-action">受傷後の対応</h2>
      <ol>
        <li>
          <strong>大量出血があれば、まず止血</strong>。強く圧迫し、手足の大出血で止まらなければ止血帯を使う。
          止血帯は一度締めたら自分で緩めない。すぐに 119 番。
        </li>
        <li>
          <strong>出血が落ち着いたら、傷を流水でよく洗う</strong>。泥や汚れを洗い流す。
        </li>
        <li>
          <strong>必ず医療機関を受診</strong>。「軽傷だから」と自宅処置で済ませない。
          抗菌薬や破傷風の予防が必要かどうかを医師が判断する。
        </li>
        <li>
          <strong>受傷状況を医療者に伝える</strong>: クマに噛まれた・引っかかれたこと、場所、時間、
          破傷風ワクチンの履歴。海外で受傷した場合はその旨も必ず伝える。
        </li>
        <li>
          <strong>警察・市町村に連絡</strong>。同じクマによる次の被害を防ぐために必要な情報です。
        </li>
      </ol>
      <p>
        詳しくは <Link href="/articles/first-aid">クマに襲われた直後の応急処置</Link> も併せて読んでください。
      </p>

      <h2 id="hunter">狩猟者・解体者向け注意</h2>
      <ul>
        <li>解体時は手袋を着け、血液が目や口に入らないようにする</li>
        <li>手指に傷がある場合は保護してから作業する</li>
        <li>クマ肉は<strong>必ず中心部まで加熱</strong>。生食や、中が赤いままのロースト・タタキは避ける</li>
        <li>解体後は石けんでよく手を洗う</li>
      </ul>

      <ArticleFaq
        items={[
          {
            q: "クマに引っかかれただけ (出血は少量) でも医療機関へ？",
            a: "はい。爪の傷でも土や細菌が深くまで入り込むことがあり、細菌感染や破傷風の心配があります。受診して、抗菌薬や破傷風の予防が必要かどうかを医師に判断してもらってください。",
            aText: "はい。爪の傷でも土や細菌が深くまで入り込むことがあり、細菌感染や破傷風の心配があります。受診して、抗菌薬や破傷風の予防が必要かどうかを医師に判断してもらってください。",
          },
          {
            q: "平時からできる予防は？",
            a: "破傷風ワクチンの接種歴を確認しておくことです。狂犬病が発生している国で野外活動をする予定があれば、出発前に医療機関や検疫所に相談してください。",
            aText: "破傷風ワクチンの接種歴を確認しておくことです。狂犬病が発生している国で野外活動をする予定があれば、出発前に医療機関や検疫所に相談してください。",
          },
          {
            q: "クマの肉を貰った。生で食べていい？",
            a: "生で食べないでください。国内の旋毛虫症の集団発生はいずれもクマ肉が原因で、加熱不十分なローストでも起きています。中心部を 75℃ で 1 分間以上（または同等以上）加熱してください。冷凍では安全になるとは限りません。",
            aText: "生で食べないでください。国内の旋毛虫症の集団発生はいずれもクマ肉が原因で、加熱不十分なローストでも起きています。中心部を 75℃ で 1 分間以上（または同等以上）加熱してください。冷凍では安全になるとは限りません。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "野生鳥獣肉による食中毒防止の徹底について（令和元年 12 月 20 日 薬生食監発 1220 第 2 号）",
            citation: <>厚生労働省</>,
            href: "https://www.mhlw.go.jp/content/11130500/001214184.pdf",
            linkText: "厚生労働省（PDF）→",
          },
          {
            title: "野生鳥獣の寄生虫に関する研究（厚生労働科学研究 分担研究報告）",
            citation: <>「国内の人の旋毛虫症の集団発生はこれまでいずれもクマ肉が原因」</>,
            href: "https://mhlw-grants.niph.go.jp/system/files/report_pdf/202523011A-buntan5_0.pdf",
            linkText: "報告書（PDF）→",
          },
          {
            title: "狂犬病に関する Q&A",
            citation: <>厚生労働省</>,
            href: "https://www.mhlw.go.jp/bunya/kenkou/kekkaku-kansenshou10/07.html",
            linkText: "厚生労働省 →",
          },
          {
            title: "ファクトシート：野兎病",
            citation: <>食品安全委員会</>,
            href: "https://www.fsc.go.jp/sonota/hazard/H22_19.pdf",
            linkText: "食品安全委員会（PDF）→",
          },
          {
            title: "日本における野兎病",
            citation: <>堀田明豊（厚生労働科学研究 報告書）</>,
            href: "https://mhlw-grants.niph.go.jp/system/files/2012/123091/201225049B_upload/201225049B0010.pdf",
            linkText: "報告書（PDF）→",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/first-aid">クマに襲われた直後の応急処置</Link> /{" "}
        <Link href="/articles/bear-insurance">保険・補償の確認</Link> /{" "}
        <Link href="/articles/playing-dead">死んだふりの正しい方法</Link>
      </p>
    </ArticleShell>
  );
}
