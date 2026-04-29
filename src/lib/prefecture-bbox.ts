/**
 * 都道府県別のバウンディングボックス (緯度経度範囲)。
 * 一部の出没データは元ソースのジオコーダーが住所をパースできず、
 * ダミーの座標 (例: 神奈川県付近) を返した状態で保存されている。
 * 「県名 vs 座標」の整合性を BBox で検査し、外れ値をドロップするのに使う。
 *
 * 値は各県の本土を覆う粗い矩形。離島は許容しないので 0.3 度ほど余裕を持たせる。
 */
export type PrefBBox = {
  latMin: number;
  latMax: number;
  lonMin: number;
  lonMax: number;
};

export const PREFECTURE_BBOX: Record<string, PrefBBox> = {
  北海道: { latMin: 41.0, latMax: 46.0, lonMin: 139.0, lonMax: 149.0 },
  青森県: { latMin: 40.0, latMax: 41.7, lonMin: 139.4, lonMax: 142.0 },
  岩手県: { latMin: 38.6, latMax: 40.5, lonMin: 140.4, lonMax: 142.1 },
  宮城県: { latMin: 37.6, latMax: 39.0, lonMin: 140.2, lonMax: 141.8 },
  秋田県: { latMin: 38.8, latMax: 40.6, lonMin: 139.5, lonMax: 141.0 },
  山形県: { latMin: 37.5, latMax: 39.1, lonMin: 139.4, lonMax: 140.7 },
  福島県: { latMin: 36.7, latMax: 38.0, lonMin: 138.9, lonMax: 141.1 },
  茨城県: { latMin: 35.6, latMax: 37.0, lonMin: 139.6, lonMax: 140.8 },
  栃木県: { latMin: 36.1, latMax: 37.2, lonMin: 139.2, lonMax: 140.3 },
  群馬県: { latMin: 35.9, latMax: 37.1, lonMin: 138.3, lonMax: 139.7 },
  埼玉県: { latMin: 35.7, latMax: 36.3, lonMin: 138.6, lonMax: 139.9 },
  千葉県: { latMin: 34.8, latMax: 36.1, lonMin: 139.6, lonMax: 140.9 },
  東京都: { latMin: 24.0, latMax: 35.9, lonMin: 122.9, lonMax: 142.4 }, // 離島含む大きな範囲
  神奈川県: { latMin: 35.1, latMax: 35.7, lonMin: 138.9, lonMax: 139.8 },
  新潟県: { latMin: 36.6, latMax: 38.6, lonMin: 137.5, lonMax: 139.9 },
  富山県: { latMin: 36.2, latMax: 36.9, lonMin: 136.6, lonMax: 137.8 },
  石川県: { latMin: 35.9, latMax: 37.6, lonMin: 136.1, lonMax: 137.4 },
  福井県: { latMin: 35.2, latMax: 36.4, lonMin: 135.4, lonMax: 136.9 },
  山梨県: { latMin: 35.2, latMax: 35.9, lonMin: 138.2, lonMax: 139.2 },
  長野県: { latMin: 35.1, latMax: 37.0, lonMin: 137.3, lonMax: 138.9 },
  岐阜県: { latMin: 35.1, latMax: 36.5, lonMin: 136.2, lonMax: 137.7 },
  静岡県: { latMin: 34.5, latMax: 35.7, lonMin: 137.4, lonMax: 139.2 },
  愛知県: { latMin: 34.5, latMax: 35.5, lonMin: 136.5, lonMax: 137.9 },
  三重県: { latMin: 33.6, latMax: 35.3, lonMin: 135.7, lonMax: 137.0 },
  滋賀県: { latMin: 34.7, latMax: 35.8, lonMin: 135.7, lonMax: 136.5 },
  京都府: { latMin: 34.7, latMax: 35.9, lonMin: 134.7, lonMax: 136.1 },
  大阪府: { latMin: 34.2, latMax: 35.1, lonMin: 135.0, lonMax: 135.8 },
  兵庫県: { latMin: 34.1, latMax: 35.8, lonMin: 134.1, lonMax: 135.5 },
  奈良県: { latMin: 33.7, latMax: 34.9, lonMin: 135.5, lonMax: 136.3 },
  和歌山県: { latMin: 33.3, latMax: 34.5, lonMin: 135.0, lonMax: 136.0 },
  鳥取県: { latMin: 35.0, latMax: 35.7, lonMin: 133.0, lonMax: 134.5 },
  島根県: { latMin: 34.2, latMax: 35.7, lonMin: 131.5, lonMax: 133.5 },
  岡山県: { latMin: 34.3, latMax: 35.5, lonMin: 133.2, lonMax: 134.6 },
  広島県: { latMin: 33.9, latMax: 35.2, lonMin: 131.9, lonMax: 133.6 },
  山口県: { latMin: 33.6, latMax: 34.9, lonMin: 130.6, lonMax: 132.4 },
  徳島県: { latMin: 33.4, latMax: 34.4, lonMin: 133.6, lonMax: 135.0 },
  香川県: { latMin: 33.9, latMax: 34.7, lonMin: 133.3, lonMax: 134.6 },
  愛媛県: { latMin: 32.8, latMax: 34.4, lonMin: 131.9, lonMax: 133.8 },
  高知県: { latMin: 32.6, latMax: 34.0, lonMin: 132.4, lonMax: 134.5 },
  福岡県: { latMin: 33.0, latMax: 34.1, lonMin: 129.9, lonMax: 131.4 },
  佐賀県: { latMin: 32.8, latMax: 33.7, lonMin: 129.6, lonMax: 130.7 },
  長崎県: { latMin: 32.5, latMax: 34.8, lonMin: 128.5, lonMax: 130.5 },
  熊本県: { latMin: 32.0, latMax: 33.5, lonMin: 129.9, lonMax: 131.4 },
  大分県: { latMin: 32.6, latMax: 33.9, lonMin: 130.7, lonMax: 132.2 },
  宮崎県: { latMin: 31.2, latMax: 33.0, lonMin: 130.6, lonMax: 132.0 },
  鹿児島県: { latMin: 26.9, latMax: 32.3, lonMin: 128.3, lonMax: 131.3 },
  沖縄県: { latMin: 23.9, latMax: 27.0, lonMin: 122.8, lonMax: 131.5 },
};

/**
 * 県名と座標の整合性を判定する。県名が未知 or BBox 内なら true。
 * 既知の県名で BBox から外れていたら false (= データ不整合)。
 */
export function latLonMatchesPrefecture(
  prefectureName: string | undefined,
  lat: number,
  lon: number,
): boolean {
  if (!prefectureName) return true;
  const bbox = PREFECTURE_BBOX[prefectureName];
  if (!bbox) return true; // 未登録 (離島・別表記など) は寛容に通す
  return (
    lat >= bbox.latMin &&
    lat <= bbox.latMax &&
    lon >= bbox.lonMin &&
    lon <= bbox.lonMax
  );
}
