#!/bin/bash
# Vercel の "Ignored Build Step" 用判定スクリプト。
#
# 終了コード:
#   0 → ビルドをスキップ（変更が sightings.json のみ等、再ビルド不要）
#   1 → ビルドを実行
#
# Vercel ダッシュボード設定:
#   Settings → Git → Ignored Build Step
#   command: "bash scripts/should-deploy.sh"
#
# 目的:
#   sharp9110-flash / news-flash が毎分〜5 分ごとに sightings.json だけ
#   更新する commit を入れるが、それで 4,500+ ページを再ビルドするのは無駄。
#   /api/kuma は sightings.json を runtime 読み込みなので、static HTML の
#   再生成は不要。Vercel の build キューを詰まらせる元凶を断つ。

set -e

# Vercel 上では VERCEL_GIT_PREVIOUS_SHA / VERCEL_GIT_COMMIT_SHA が利用可能。
# ローカル実行時は HEAD^..HEAD で代替。
PREV_SHA="${VERCEL_GIT_PREVIOUS_SHA:-HEAD^}"
CURR_SHA="${VERCEL_GIT_COMMIT_SHA:-HEAD}"

# 変更されたファイル一覧
CHANGED=$(git diff --name-only "$PREV_SHA" "$CURR_SHA" 2>/dev/null || true)

if [ -z "$CHANGED" ]; then
  # 変更なし or 取得失敗 → 念のためビルドする
  echo "no diff detected — proceeding with build"
  exit 1
fi

echo "changed files:"
echo "$CHANGED"

# sightings.json 以外に何も変わっていなければビルドをスキップ
NON_DATA_CHANGES=$(echo "$CHANGED" | grep -vE '^public/data/sightings\.json$' || true)

if [ -z "$NON_DATA_CHANGES" ]; then
  echo "only sightings.json changed → skip build (CDN serves new JSON via static)"
  exit 0
fi

echo "non-data files changed → run build"
exit 1
