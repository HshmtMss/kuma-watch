# 市町村 行政界データ（簡略化版）

市町村ページ（/place/[pref]/[muni]）の埋め込み地図で、対象市町村の境界を強調表示するために使う。

- ファイル: `{都道府県コード2桁}.json`（例 `20.json` = 長野県）。県別に全市町村の境界 feature を収録。
- 各 feature のプロパティ: `{ code, name }`
  - `code` = 5 桁の行政区域コード（総務省コード = N03_007）。`src/data/japan-municipalities.ts` の `cityCode` と一致。
  - `name` = 市区町村名（N03_004）。
- クライアントが県ファイルを 1 つ取得し、`code` 一致の feature だけを描画する。

## 出典・加工

- 出典: 「国土数値情報（行政区域データ N03）」（国土交通省）
- 取得元: smartnews-smri/japan-topography（s0010, 簡略化済み）
- 加工: mapshaper で `N03_007` 単位に dissolve → さらに 50% simplify（keep-shapes）→ プロパティを `code,name` のみに削減。

## 再生成

`scripts/build-boundaries.sh` 参照（47 県を取得し上記加工で再出力）。市町村合併等で更新が必要になったら再実行する。
