/**
 * 国土地理院リバースジオコーダによる最終確認。
 *
 * 行政界の判定には public/data/boundaries の簡略化ポリゴンを使っているが、
 * 境界付近では実際と食い違う。実測で、矛盾ありと判定した73件のうち4件が
 * ポリゴンと GSI で不一致だった:
 *   群馬 川場村    当方=沼田市   / GSI=川場村 大字生品
 *   岐阜 白川村    当方=南砺市   / GSI=白川村 大字小白川  (村域北端の約1km内側)
 *   青森 むつ市    当方=海上     / GSI=むつ市 大字城ヶ沢  (海岸線の簡略化)
 *   富山 (庄川町)  当方=南砺市   / GSI=砺波市 庄川町金屋
 * このうち3件は「そもそも矛盾していない」= 当方の誤検知で、正しいデータを
 * 隠していた。自治体へ照会する材料にもなるので、疑わしいと判定した少数の
 * レコードだけは権威ある GSI で裏を取る。
 *
 * 全件に掛けると数万リクエストになるため、必ず「矛盾あり」と判定された
 * 候補だけに使うこと。取得に失敗したら null を返し、呼び出し側は
 * ポリゴンの判定を維持する (通信不能で判定が変わらないようにする)。
 */

const ENDPOINT =
  "https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress";
const MIN_INTERVAL_MS = 300;

let lastAt = 0;
let queue: Promise<unknown> = Promise.resolve();

export type GsiPlace = { muniCd: string; lv01Nm: string };

async function fetchOne(lat: number, lon: number): Promise<GsiPlace | null> {
  const job = queue.then(async () => {
    const wait = Math.max(0, lastAt + MIN_INTERVAL_MS - Date.now());
    if (wait > 0) await new Promise((r) => setTimeout(r, wait));
    lastAt = Date.now();
    try {
      const res = await fetch(`${ENDPOINT}?lat=${lat}&lon=${lon}`, {
        headers: {
          "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp) data-quality-check",
        },
      });
      if (!res.ok) return null;
      const j = (await res.json()) as {
        results?: { muniCd?: string; lv01Nm?: string };
      };
      const m = j?.results?.muniCd;
      if (!m) return null;
      return { muniCd: String(m).padStart(5, "0"), lv01Nm: j.results?.lv01Nm ?? "" };
    } catch {
      return null;
    }
  });
  queue = job.catch(() => undefined);
  return job;
}

/** 座標が実際に属する市町村コード。取得できなければ null。 */
export async function gsiMuniCode(
  lat: number,
  lon: number,
): Promise<string | null> {
  const r = await fetchOne(lat, lon);
  return r?.muniCd ?? null;
}

export async function gsiPlace(
  lat: number,
  lon: number,
): Promise<GsiPlace | null> {
  return fetchOne(lat, lon);
}
