# KumaWatch（くまウォッチ）

[![Site](https://img.shields.io/badge/site-kuma--watch.jp-amber)](https://kuma-watch.jp)
[![Supervised by](https://img.shields.io/badge/supervised%20by-獣医師-emerald)](https://kuma-watch.jp/about)

全国のクマ出没情報を集約し、5km メッシュ単位で警戒レベルを予報する **獣医師監修** の無料 Web サービス。

## 提供価値

- **70+ の自治体公式サイト** + **Sharp9110** + **環境省** + **報道（Google News / NHK / Yahoo!）** から自動取り込み
- 1 分以内の鮮度で **「いま、近くに出没情報があるか」** を可視化
- 5km メッシュ単位の **警戒レベル予報**（過去履歴・季節・気象・時間帯を加味）
- 全国 **1,894 市区町村** + **50 主要ランドマーク**（高尾山・上高地・知床等）の専用ページ
- スマホ Safari でホーム追加すれば **PWA** として常用可能・**完全無料・広告なし**

## アーキテクチャ概要

```
[ 各種ソース ] ──→ [ GitHub Actions cron ] ──→ [ public/data/sightings.json ]
   ├ 自治体公式 (KML / ArcGIS / CSV / HTML / PDF)            ↓
   ├ Sharp9110 (公衆衛生通報)            [ Vercel Static Export (Next.js 16) ]
   ├ Google News / NHK / Yahoo!                       ↓
   └ Kemonote / HiguMap                       [ kuma-watch.jp ]
```

### データ更新頻度

| ソース | 取り込み間隔 | 鮮度 |
|---|---|---|
| Sharp9110 | **毎分** | 1〜2 分以内 |
| ニュース報道 (Google News / NHK / Yahoo!) | **5 分** | 5〜10 分以内 |
| 自治体公式 (67+ ソース) | **4 時間** | 4〜8 時間以内 |
| クライアント自動更新 | **30 秒** | — |

## 運営

**獣医工学ラボ** — 獣医療・野生動物・公衆衛生領域の技術プロジェクト。獣医師がプロジェクトの中心となり、データの集約・分析・公開に至るまで監修しています。

法人: リサーチコーディネート株式会社（東京都新宿区）  
連絡: contact@research-coordinate.co.jp

自治体連携・データ連携のご相談: <https://kuma-watch.jp/for-gov>

## ローカル開発

```bash
npm install
npm run dev
# http://localhost:3000
```

主要 npm スクリプト:

```bash
npm run build:sightings     # 全 67 ソース集約 (約 20 分)
npm run ingest:news         # Google News / NHK / Yahoo から差分取り込み
npm run ingest:sharp9110    # Sharp9110 から差分取り込み
npm run import:research     # Google Drive から /research 記事を取り込み
```

## ライセンス

- ソースコード: 当面は **All Rights Reserved**（OSS 化は未定）
- 集約しているデータの著作権は各提供元に帰属。詳細は <https://kuma-watch.jp/credits>
- 表示マップタイル: © OpenStreetMap contributors

## Stack

Next.js 16 (App Router) / TypeScript / Tailwind CSS v4 / Leaflet / Vercel / GitHub Actions / Gemini (LLM 抽出)
