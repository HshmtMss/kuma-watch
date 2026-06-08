#!/usr/bin/env bash
# 市町村 行政界 GeoJSON（簡略化版）を public/data/boundaries/ に生成する。
#
# 出典: 「国土数値情報（行政区域データ N03）」（国土交通省）
# 取得元: smartnews-smri/japan-topography の simplified 版 (s0010)
# 加工: N03_007(行政区域コード)単位に dissolve → 50% simplify → プロパティを
#       code,name のみに削減。クライアントは県別ファイルを1つ取得し、
#       cityCode 一致の feature だけを描画する。
#
# 市町村合併などでデータ更新が必要になったら再実行する。要 mapshaper(npx)。
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/data/boundaries"
RAW="$(mktemp -d)"
BASE="https://raw.githubusercontent.com/smartnews-smri/japan-topography/main/data/municipality/geojson/s0010"

mkdir -p "$OUT"
echo "[boundaries] 出力先: $OUT"

for n in $(seq -w 1 47); do
  src="$BASE/N03-21_${n}_210101.json"
  raw="$RAW/${n}.json"
  if ! curl -sfL "$src" -o "$raw"; then
    echo "[boundaries] FAIL download: $n" >&2
    continue
  fi
  npx --yes mapshaper "$raw" \
    -dissolve2 N03_007 copy-fields=N03_004 \
    -simplify 50% keep-shapes \
    -rename-fields code=N03_007,name=N03_004 \
    -filter-fields code,name \
    -o "$OUT/${n}.json" format=geojson 2>/dev/null
  echo "[boundaries] wrote ${n}.json"
done

rm -rf "$RAW"
echo "[boundaries] 完了。合計サイズ:"
du -sh "$OUT"
