"use client";

import { useEffect, useRef, useState } from "react";
import type {
  Assessment,
  Priority,
  RejectReason,
} from "@/lib/submission-priority";

/**
 * 投稿の一覧 (受信箱)。表計算ではなく「上から順に捌く」ための画面。
 *
 * 近い将来この画面は自治体職員が使う。表計算のように 16 列を横スクロールさせると、
 * 状況を見ようとすると場所が画面外に出るなど、判断に必要な組が同時に見えない。
 *
 * 先頭に出すのは 5 つだけ: 優先度・日付・場所・写真・本文。
 * 状況 (目撃/人身被害) や信ぴょう性は優先度に畳み込んであるので、独立したバッジ
 * としては出さず、優先度の下に理由 1 行として添える。残りは「詳細」を開いたとき。
 *
 * 公開は地図に出る操作なので確認を挟む。公開後も「公開を取り消す」で戻せる。
 */

export type Situation = "sight" | "trace" | "damage" | "injury";
export type Status = "pending" | "approved" | "rejected";

export type Submission = {
  id: string;
  lat: number;
  lon: number;
  occurredAt: string;
  headCount: number;
  situation: Situation;
  status: Status;
  comment?: string;
  contact?: string;
  photoUrl?: string;
  photoLat?: number;
  photoLon?: number;
  photoTakenAt?: string;
  photoGpsAt?: string;
  photoDirection?: number;
  photoDirectionRef?: string;
  photoDevice?: string;
  photoSoftware?: string;
  prefectureName?: string;
  cityName?: string;
  sectionName?: string;
  receivedAt: number;
  cityCode?: string;
  assessment?: Assessment;
  rejectReason?: RejectReason;
};

const SITUATION_LABEL: Record<Situation, string> = {
  sight: "目撃",
  trace: "痕跡",
  damage: "物損被害",
  injury: "人身被害",
};
const STATUS_LABEL: Record<Status, string> = {
  pending: "承認待ち",
  approved: "公開中",
  rejected: "却下",
};
const STATUS_STYLE: Record<Status, string> = {
  pending: "bg-amber-100 text-amber-900",
  approved: "bg-emerald-100 text-emerald-900",
  rejected: "bg-rose-100 text-rose-900",
};
/** 優先度のチップ。高だけを塗り、低は控えめにして視線を上に集める */
const PRIORITY_CHIP: Record<Priority, string> = {
  high: "bg-rose-600 text-white",
  medium: "bg-amber-100 text-amber-900 ring-1 ring-amber-300",
  low: "bg-stone-100 text-stone-500 ring-1 ring-stone-200",
};
/** 行の左端の帯。一覧をスクロールしたとき、色だけで優先度を追えるようにする */
const PRIORITY_BAR: Record<Priority, string> = {
  high: "bg-rose-500",
  medium: "bg-amber-400",
  low: "bg-stone-200",
};
const PRIORITY_LABEL: Record<Priority, string> = {
  high: "高",
  medium: "中",
  low: "低",
};
const CREDIBILITY_LABEL: Record<string, string> = {
  high: "高",
  medium: "中",
  low: "低",
};

function fmtDateTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}/${p(d.getMonth() + 1)}/${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

function sinceLabel(iso: string): string {
  const t = new Date(iso).getTime();
  if (!Number.isFinite(t)) return "";
  const h = Math.floor((Date.now() - t) / 3600_000);
  if (h < 1) return "1時間以内";
  if (h < 24) return `${h}時間前`;
  return `${Math.floor(h / 24)}日前`;
}

/** 方位角を八方位の言葉にする。度だけだと向きが頭に入らない */
function compassLabel(deg: number): string {
  const dirs = ["北", "北東", "東", "南東", "南", "南西", "西", "北西"];
  return dirs[Math.round(deg / 45) % 8];
}

/** 「−」のような欠損の代替文字を地名として並べない */
function joinPlace(parts: (string | undefined)[]): string {
  const out = parts
    .map((v) => v?.trim())
    .filter((v): v is string => Boolean(v) && !/^[-−–—ー]$/.test(v!));
  return out.join(" ") || "場所不明";
}

function distanceKm(a: number, b: number, c: number, d: number): number {
  const toR = (x: number) => (x * Math.PI) / 180;
  const dLat = toR(c - a);
  const dLon = toR(d - b);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toR(a)) * Math.cos(toR(c)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(s));
}

export default function SubmissionList({
  items,
  selected,
  toggleSelect,
  moderate,
  onReject,
  busy,
  highlightId,
}: {
  items: Submission[];
  selected: Set<string>;
  toggleSelect: (id: string) => void;
  moderate: (id: string, decision: "approve" | "reject" | "delete") => void;
  onReject: (id: string) => void;
  busy: string | null;
  /** 地図のピンから選ばれた投稿。その行までスクロールして目立たせる */
  highlightId?: string | null;
}) {
  const [open, setOpen] = useState<Set<string>>(new Set());
  const rowRefs = useRef<Map<string, HTMLLIElement>>(new Map());

  useEffect(() => {
    if (!highlightId) return;
    const el = rowRefs.current.get(highlightId);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [highlightId]);
  const toggleOpen = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <ul className="flex flex-col gap-2">
      {items.map((s) => {
        const a = s.assessment;
        const isOpen = open.has(s.id);
        const place = joinPlace([s.prefectureName, s.cityName, s.sectionName]);
        const gapKm =
          s.photoLat != null && s.photoLon != null
            ? distanceKm(s.lat, s.lon, s.photoLat, s.photoLon)
            : null;

        return (
          <li
            key={s.id}
            ref={(el) => {
              if (el) rowRefs.current.set(s.id, el);
              else rowRefs.current.delete(s.id);
            }}
            className={`flex overflow-hidden rounded-xl border bg-white transition ${
              highlightId === s.id
                ? "border-sky-400 ring-2 ring-sky-200"
                : "border-stone-200"
            }`}
          >
            {/* 左端の帯。色だけで優先度を追える */}
            <div
              className={`w-1.5 shrink-0 ${a ? PRIORITY_BAR[a.priority] : "bg-stone-200"}`}
              aria-hidden
            />

            <div className="min-w-0 flex-1">
              <div className="flex gap-3 p-3">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 shrink-0"
                  checked={selected.has(s.id)}
                  onChange={() => toggleSelect(s.id)}
                  aria-label="この投稿を選択"
                />

                {/* 写真は無いほうが多い。無いときは枠も置かず、本文に幅を渡す */}
                {s.photoUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={s.photoUrl}
                    alt=""
                    className="h-20 w-20 shrink-0 cursor-zoom-in rounded-lg bg-stone-100 object-cover"
                    onClick={() => toggleOpen(s.id)}
                  />
                )}

                <div className="min-w-0 flex-1">
                  {/* 見出し: 場所と優先度 */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="min-w-0 text-base font-bold leading-snug text-stone-900">
                      {place}
                    </h3>
                    <div className="flex shrink-0 items-center gap-1.5">
                      {s.status !== "pending" && (
                        <span
                          className={`whitespace-nowrap rounded px-1.5 py-0.5 text-[11px] font-semibold ${STATUS_STYLE[s.status]}`}
                        >
                          {STATUS_LABEL[s.status]}
                        </span>
                      )}
                      {a && (
                        <span
                          className={`whitespace-nowrap rounded px-2 py-0.5 text-xs font-bold ${PRIORITY_CHIP[a.priority]}`}
                          title={a.reason}
                        >
                          {PRIORITY_LABEL[a.priority]}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 日時と種類。1 行にまとめて、同じ語を二度出さない */}
                  <p className="mt-0.5 text-xs text-stone-500">
                    <span className="tabular-nums">{fmtDateTime(s.occurredAt)}</span>
                    <span className="mx-1.5">·</span>
                    {sinceLabel(s.occurredAt)}
                    <span className="mx-1.5">·</span>
                    {SITUATION_LABEL[s.situation]}
                    {s.headCount > 0 ? ` ${s.headCount}頭` : ""}
                    {s.photoUrl && gapKm != null && gapKm >= 1 && (
                      <>
                        <span className="mx-1.5">·</span>
                        <span className="text-orange-700">
                          写真の位置が {gapKm.toFixed(1)}km ずれ
                        </span>
                      </>
                    )}
                  </p>

                  {/* 本文。一番の判断材料なので省略しない */}
                  {s.comment ? (
                    <p className="mt-1.5 whitespace-pre-wrap text-sm leading-relaxed text-stone-800">
                      {s.comment}
                    </p>
                  ) : (
                    <p className="mt-1.5 text-sm text-stone-400">コメントなし</p>
                  )}

                  {s.rejectReason && (
                    <p className="mt-1 text-xs text-rose-700">
                      却下理由: {s.rejectReason}
                    </p>
                  )}

                  {/* 操作 */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    {s.status === "approved" ? (
                      <button
                        type="button"
                        onClick={() => {
                          if (
                            window.confirm(
                              "この投稿の公開を取り消します。\n地図から下がりますが投稿は残るので、あとで公開し直せます。",
                            )
                          )
                            moderate(s.id, "reject");
                        }}
                        disabled={busy === s.id}
                        className="rounded-lg border border-stone-400 px-3 py-1.5 text-sm font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-40"
                      >
                        公開を取り消す
                      </button>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            if (
                              window.confirm(
                                `この投稿を地図に公開します。\n\n${place}\n${fmtDateTime(s.occurredAt)}\n${s.comment ?? "（コメントなし）"}\n\n公開すると、地図と通知で誰でも見られる状態になります。\nあとから取り消すこともできます。`,
                              )
                            )
                              moderate(s.id, "approve");
                          }}
                          disabled={busy === s.id}
                          className="rounded-lg bg-emerald-600 px-3.5 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700 disabled:bg-stone-300"
                        >
                          承認して公開
                        </button>
                        <button
                          type="button"
                          onClick={() => onReject(s.id)}
                          disabled={busy === s.id || s.status === "rejected"}
                          className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-40"
                        >
                          却下
                        </button>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleOpen(s.id)}
                      aria-expanded={isOpen}
                      className="rounded-lg px-2.5 py-1.5 text-sm text-stone-600 hover:bg-stone-100"
                    >
                      詳細 {isOpen ? "▲" : "▼"}
                    </button>
                    <button
                      type="button"
                      onClick={() => moderate(s.id, "delete")}
                      disabled={busy === s.id}
                      className="ml-auto rounded-lg px-2 py-1.5 text-xs text-stone-400 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-40"
                    >
                      削除
                    </button>
                  </div>
                </div>
              </div>

              {isOpen && (
                <div className="border-t border-stone-200 bg-stone-50 p-3">
                  {s.photoUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={s.photoUrl}
                      alt="投稿写真"
                      className="mb-3 max-h-96 w-full rounded-lg bg-white object-contain"
                    />
                  )}
                  <dl className="grid grid-cols-[7rem_1fr] gap-x-3 gap-y-1.5 text-sm">
                    {a && (
                      <>
                        <Row label="優先度の理由">{a.reason}</Row>
                        <Row label="内訳">
                          緊急度{" "}
                          {a.urgency === "urgent"
                            ? "至急"
                            : a.urgency === "normal"
                              ? "通常"
                              : "低"}
                          {" ・ "}信ぴょう性 {CREDIBILITY_LABEL[a.credibility]}
                        </Row>
                        {a.thinEvidence && (
                          <Row label="足りない情報">
                            {a.thinEvidence.join("・")}
                          </Row>
                        )}
                      </>
                    )}
                    <Row label="状況">
                      {SITUATION_LABEL[s.situation]}
                      {s.headCount > 0 ? ` ・ ${s.headCount}頭` : ""}
                    </Row>
                    <Row label="受信">
                      {fmtDateTime(new Date(s.receivedAt).toISOString())}
                    </Row>
                    <Row label="ピン位置">
                      <a
                        href={`https://www.google.com/maps?q=${s.lat},${s.lon}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline"
                      >
                        {s.lat.toFixed(4)}, {s.lon.toFixed(4)}
                      </a>
                    </Row>
                    {s.photoLat != null && s.photoLon != null && (
                      <Row label="写真の位置">
                        <a
                          href={`https://www.google.com/maps?q=${s.photoLat},${s.photoLon}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 underline"
                        >
                          {s.photoLat.toFixed(4)}, {s.photoLon.toFixed(4)}
                        </a>
                        {gapKm != null && (
                          <span
                            className={
                              gapKm >= 1
                                ? "ml-2 text-orange-800"
                                : "ml-2 text-stone-500"
                            }
                          >
                            ピンから {gapKm.toFixed(1)}km
                          </span>
                        )}
                      </Row>
                    )}
                    {s.photoTakenAt && (
                      <Row label="撮影日時">
                        {s.photoTakenAt.replace("T", " ")}
                        <span className="ml-2 text-stone-500">
                          (申告 {fmtDateTime(s.occurredAt)})
                        </span>
                      </Row>
                    )}
                    {s.photoGpsAt && (
                      <Row label="GPS日時">
                        {s.photoGpsAt.replace("T", " ").replace("Z", " UTC")}
                      </Row>
                    )}
                    {s.photoDirection != null && (
                      <Row label="撮影方向">
                        {compassLabel(s.photoDirection)} ({s.photoDirection}°
                        {s.photoDirectionRef === "M" ? " 磁北" : ""})
                      </Row>
                    )}
                    {s.photoDevice && <Row label="撮影機材">{s.photoDevice}</Row>}
                    {s.photoSoftware && (
                      <Row label="加工ソフト">
                        <span className="text-orange-900">{s.photoSoftware}</span>
                      </Row>
                    )}
                    {s.contact && <Row label="連絡先">{s.contact}</Row>}
                    {s.cityCode && <Row label="団体コード">{s.cityCode}</Row>}
                    <Row label="受付番号">
                      <span className="text-xs text-stone-500">{s.id}</span>
                    </Row>
                  </dl>
                  {s.photoUrl && !s.photoTakenAt && (
                    <p className="mt-2 text-xs text-stone-500">
                      この写真に撮影情報 (EXIF) はありません。SNS 経由の画像や
                      スクリーンショット、2026年9月より前の投稿では取得できません。
                    </p>
                  )}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <dt className="text-stone-500">{label}</dt>
      <dd className="text-stone-800">{children}</dd>
    </>
  );
}
