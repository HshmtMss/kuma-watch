"use client";

import { useState } from "react";

export type HistPoint = { date: string; value: number };

/**
 * 登録者数の推移グラフ（LINE / Web Push 共通）。
 *
 * 日次スナップショット（累計の登録者数）を折れ線で描き、マウスを乗せた日の
 * 数値を吹き出しで出す。累計だけだと「その日に何人増えたか」が読めないので、
 * 吹き出しには累計と増減の両方を出す。
 *
 * スナップショットが飛んだ日（cron の失敗・停止）があるので、増減は必ず
 * 「1つ前の記録」との差で、間隔が1日でないときは何日ぶんかを添える。
 */
const W = 640;
const H = 140;
const PADL = 34;
const PADR = 8;
const PADT = 10;
const PADB = 22;
const plotW = W - PADL - PADR;
const plotH = H - PADT - PADB;

/** 記録の間隔（日数）。スナップショットが飛んだ日を見抜くのに使う */
function daysBetween(a: string, b: string): number {
  const t1 = Date.parse(`${a}T00:00:00Z`);
  const t2 = Date.parse(`${b}T00:00:00Z`);
  if (!Number.isFinite(t1) || !Number.isFinite(t2)) return 1;
  return Math.round((t2 - t1) / 86_400_000);
}

export default function RegistrationHistoryChart({
  points,
  color,
  title = "登録者数の推移",
  unit = "人",
}: {
  points: HistPoint[];
  /** 折れ線の色。LINE=#06c755 / Web Push=#f59e0b */
  color: string;
  title?: string;
  unit?: string;
}) {
  const [hover, setHover] = useState<number | null>(null);

  if (points.length < 2) {
    return (
      <section>
        <h2 className="text-base font-bold text-stone-900">{title}</h2>
        <p className="mt-1 rounded-xl border border-stone-200 bg-white px-4 py-6 text-center text-sm text-stone-500">
          日次スナップショットを蓄積中です（毎日 0:10 JST
          記録）。数日で推移が表示されます。
        </p>
      </section>
    );
  }

  const n = points.length;
  const max = Math.max(1, ...points.map((p) => p.value));
  const niceMax = max <= 5 ? max : Math.ceil(max / 5) * 5;
  const x = (i: number) => PADL + (i / (n - 1)) * plotW;
  const y = (v: number) => PADT + (1 - v / niceMax) * plotH;
  const line = points.map((p, i) => `${x(i)},${y(p.value)}`).join(" ");
  const first = points[0];
  const latest = points[n - 1];
  const delta = latest.value - first.value;
  const md = (d: string) => d.slice(5).replace("-", "/");

  // ポインタの位置から最も近い日を選ぶ。viewBox は横幅いっぱいに伸びるので、
  // 実寸ではなく描画領域に対する比率で index を求める。
  const pick = (clientX: number, el: SVGSVGElement) => {
    const rect = el.getBoundingClientRect();
    if (rect.width === 0) return;
    const vx = ((clientX - rect.left) / rect.width) * W;
    const i = Math.round(((vx - PADL) / plotW) * (n - 1));
    setHover(Math.min(n - 1, Math.max(0, i)));
  };

  const h = hover != null ? points[hover] : null;
  const prev = hover != null && hover > 0 ? points[hover - 1] : null;
  const step = h && prev ? daysBetween(prev.date, h.date) : 0;
  const diff = h && prev ? h.value - prev.value : null;
  // 吹き出しが左右にはみ出さないよう、中央寄せの位置を 8〜92% に丸める
  const tipLeft =
    hover == null ? 0 : Math.min(92, Math.max(8, (x(hover) / W) * 100));

  return (
    <section>
      <div className="mb-1 flex items-baseline justify-between">
        <h2 className="text-base font-bold text-stone-900">{title}</h2>
        <span className="text-xs text-stone-500">
          直近{n}日 {delta >= 0 ? "+" : ""}
          {delta}
          {unit}
        </span>
      </div>
      <div className="relative rounded-2xl border border-stone-200 bg-white p-3">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full touch-none"
          onPointerMove={(e) => pick(e.clientX, e.currentTarget)}
          onPointerDown={(e) => pick(e.clientX, e.currentTarget)}
          onPointerLeave={() => setHover(null)}
        >
          {[0, niceMax].map((t) => (
            <g key={t}>
              <line
                x1={PADL}
                y1={y(t)}
                x2={W - PADR}
                y2={y(t)}
                stroke={t === 0 ? "#d1d5db" : "#f1f1f0"}
                strokeWidth="1"
              />
              <text
                x={PADL - 5}
                y={y(t) + 3.5}
                textAnchor="end"
                fontSize="10"
                fill="#9ca3af"
              >
                {t}
              </text>
            </g>
          ))}

          {/* 触れている日の縦線。線より先に描いて折れ線を隠さない */}
          {hover != null && (
            <line
              x1={x(hover)}
              y1={PADT}
              x2={x(hover)}
              y2={PADT + plotH}
              stroke="#a8a29e"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          )}

          <polyline
            points={line}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {points.map((p, i) => (
            <circle
              key={p.date}
              cx={x(i)}
              cy={y(p.value)}
              r={i === hover ? 4.5 : i === n - 1 ? 3.5 : 2}
              fill={color}
              stroke={i === hover ? "#fff" : "none"}
              strokeWidth={i === hover ? 1.5 : 0}
            />
          ))}
          <text
            x={x(0)}
            y={H - 6}
            textAnchor="start"
            fontSize="10"
            fill="#9ca3af"
          >
            {md(first.date)}
          </text>
          <text
            x={x(n - 1)}
            y={H - 6}
            textAnchor="end"
            fontSize="10"
            fill="#9ca3af"
          >
            {md(latest.date)}
          </text>
        </svg>

        {/* 吹き出し。SVG の text だと折り返しや背景が扱えないので HTML で重ねる */}
        {h && (
          <div
            className="pointer-events-none absolute top-1 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-stone-900/90 px-2.5 py-1.5 text-center text-white shadow-lg"
            style={{ left: `${tipLeft}%` }}
          >
            <div className="text-[10px] text-stone-300">
              {h.date.replace(/-/g, "/")}
            </div>
            <div className="text-sm font-bold tabular-nums">
              累計 {h.value.toLocaleString("ja-JP")}
              {unit}
            </div>
            <div className="text-[10px] tabular-nums text-stone-300">
              {diff == null
                ? "この期間の最初の記録"
                : `${step === 1 ? "前日比" : `前回(${step}日前)比`} ${
                    diff >= 0 ? "+" : ""
                  }${diff.toLocaleString("ja-JP")}${unit}`}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
