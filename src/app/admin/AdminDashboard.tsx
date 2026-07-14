"use client";

import { useCallback, useEffect, useState } from "react";
import {
  BarChart3,
  ClipboardList,
  MessageCircle,
  Mail,
  ArrowRight,
} from "lucide-react";
import AdminShell from "@/components/admin/AdminShell";

type Snap = { date: string; value: number };

type Stats = {
  pushSubscribers: number | null;
  pushSeries: Snap[];
  lineUsers: number | null;
  lineSeries: Snap[];
  pending: number | null;
  newContacts: number | null;
};

const EMPTY: Stats = {
  pushSubscribers: null,
  pushSeries: [],
  lineUsers: null,
  lineSeries: [],
  pending: null,
  newContacts: null,
};

export default function AdminDashboard() {
  return (
    <AdminShell active="home" title="ダッシュボード">
      {(secret, deauth) => (
        <DashboardContent secret={secret} deauth={deauth} />
      )}
    </AdminShell>
  );
}

function DashboardContent({
  secret,
  deauth,
}: {
  secret: string;
  deauth: () => void;
}) {
  const [s, setS] = useState<Stats>(EMPTY);

  const load = useCallback(async () => {
    const auth = { Authorization: `Bearer ${secret}` };
    const opt = { headers: auth, cache: "no-store" as const };
    try {
      const [push, line, subs, contacts] = await Promise.all([
        fetch(`/api/admin/push-stats?top=1`, opt),
        fetch(`/api/admin/line-stats?top=1`, opt),
        fetch(`/api/admin/submissions?status=pending`, opt),
        fetch(`/api/admin/contacts`, opt),
      ]);
      if ([push, line, subs, contacts].some((r) => r.status === 401)) {
        deauth();
        return;
      }
      const next: Stats = { ...EMPTY };
      if (push.ok) {
        const d = (await push.json()) as {
          totalSubscribers?: number;
          history?: { date: string; totalSubscribers: number }[];
        };
        next.pushSubscribers = d.totalSubscribers ?? null;
        next.pushSeries = (d.history ?? []).map((h) => ({
          date: h.date,
          value: h.totalSubscribers,
        }));
      }
      if (line.ok) {
        const d = (await line.json()) as {
          totalUsers?: number;
          history?: { date: string; totalUsers: number }[];
        };
        next.lineUsers = d.totalUsers ?? null;
        next.lineSeries = (d.history ?? []).map((h) => ({
          date: h.date,
          value: h.totalUsers,
        }));
      }
      if (subs.ok) {
        const d = (await subs.json()) as { submissions?: unknown[] };
        next.pending = d.submissions?.length ?? 0;
      }
      if (contacts.ok) {
        const d = (await contacts.json()) as {
          contacts?: { status?: string }[];
        };
        next.newContacts = (d.contacts ?? []).filter(
          (c) => (c.status ?? "new") !== "handled",
        ).length;
      }
      setS(next);
    } catch {
      /* best-effort */
    }
  }, [secret, deauth]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  return (
    <>
      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <TrendTile
          label="通知 実登録者数"
          value={s.pushSubscribers}
          unit="人"
          series={s.pushSeries}
          color="#d97706"
          href="/admin/push-stats"
        />
        <TrendTile
          label="LINE 友だち"
          value={s.lineUsers}
          unit="人"
          series={s.lineSeries}
          color="#06c755"
          href="/admin/line-stats"
        />
        <CountTile
          label="承認待ち投稿"
          value={s.pending}
          unit="件"
          accent={(s.pending ?? 0) > 0}
          href="/admin/submissions"
        />
        <CountTile
          label="新着問い合わせ"
          value={s.newContacts}
          unit="件"
          accent={(s.newContacts ?? 0) > 0}
          href="/admin/contacts"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <EntryCard
          href="/admin/push-stats"
          Icon={BarChart3}
          title="通知登録"
          desc="自治体別・観光地別の Web 通知登録数。営業材料に。"
        />
        <EntryCard
          href="/admin/line-stats"
          Icon={MessageCircle}
          title="LINE登録"
          desc="LINE 友だち数・地域別の登録状況。"
        />
        <EntryCard
          href="/admin/submissions"
          Icon={ClipboardList}
          title="投稿"
          desc="市民投稿の承認・却下・地図/表で確認。"
          badge={s.pending ?? undefined}
        />
        <EntryCard
          href="/admin/contacts"
          Icon={Mail}
          title="問い合わせ"
          desc="自治体・事業者からの相談。対応状況を管理。"
          badge={s.newContacts ?? undefined}
        />
      </div>
    </>
  );
}

/** 直近30日(≒履歴31点)の増減。 */
function delta30(series: Snap[]): number | null {
  if (series.length < 2) return null;
  const last = series[series.length - 1].value;
  const idx = Math.max(0, series.length - 31);
  return last - series[idx].value;
}

function Sparkline({ series, color }: { series: Snap[]; color: string }) {
  if (series.length < 2) return null;
  const w = 96;
  const h = 28;
  const pad = 3;
  const vals = series.map((p) => p.value);
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const span = max - min || 1;
  const n = series.length;
  const x = (i: number) => pad + (i / (n - 1)) * (w - 2 * pad);
  const y = (v: number) => h - pad - ((v - min) / span) * (h - 2 * pad);
  const d = series
    .map(
      (p, i) =>
        `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(p.value).toFixed(1)}`,
    )
    .join(" ");
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className="overflow-visible"
      aria-hidden
    >
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={x(n - 1)} cy={y(series[n - 1].value)} r={2.5} fill={color} />
    </svg>
  );
}

function TrendTile({
  label,
  value,
  unit,
  series,
  color,
  href,
}: {
  label: string;
  value: number | null;
  unit: string;
  series: Snap[];
  color: string;
  href: string;
}) {
  const d = delta30(series);
  return (
    <a
      href={href}
      className="rounded-2xl border border-stone-200 bg-white px-4 py-3 transition hover:border-amber-300 hover:shadow-sm"
    >
      <div className="text-[11px] font-medium text-stone-500">{label}</div>
      <div className="mt-0.5 flex items-baseline gap-1">
        <span className="text-2xl font-bold tabular-nums text-stone-900">
          {value == null ? "—" : value.toLocaleString("ja-JP")}
        </span>
        <span className="text-xs text-stone-500">{unit}</span>
      </div>
      <div className="mt-1 flex items-end justify-between gap-2">
        <span
          className={`text-[11px] font-medium tabular-nums ${
            d == null || d === 0
              ? "text-stone-400"
              : d > 0
                ? "text-emerald-600"
                : "text-stone-500"
          }`}
        >
          {d == null
            ? " "
            : `${d > 0 ? "+" : ""}${d.toLocaleString("ja-JP")} / 30日`}
        </span>
        <Sparkline series={series} color={color} />
      </div>
    </a>
  );
}

function CountTile({
  label,
  value,
  unit,
  accent,
  href,
}: {
  label: string;
  value: number | null;
  unit: string;
  accent?: boolean;
  href: string;
}) {
  return (
    <a
      href={href}
      className={`rounded-2xl border px-4 py-3 transition hover:shadow-sm ${
        accent
          ? "border-rose-200 bg-rose-50 hover:border-rose-300"
          : "border-stone-200 bg-white hover:border-amber-300"
      }`}
    >
      <div className="text-[11px] font-medium text-stone-500">{label}</div>
      <div className="mt-0.5 flex items-baseline gap-1">
        <span
          className={`text-2xl font-bold tabular-nums ${
            accent ? "text-rose-700" : "text-stone-900"
          }`}
        >
          {value == null ? "—" : value.toLocaleString("ja-JP")}
        </span>
        <span className="text-xs text-stone-500">{unit}</span>
      </div>
      <div className="mt-1 text-[11px] text-stone-400">
        {accent ? "要対応" : "なし"}
      </div>
    </a>
  );
}

function EntryCard({
  href,
  Icon,
  title,
  desc,
  badge,
}: {
  href: string;
  Icon: typeof BarChart3;
  title: string;
  desc: string;
  badge?: number;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-4 transition hover:border-amber-300 hover:bg-amber-50/40 hover:shadow-sm"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
        <Icon size={22} strokeWidth={1.8} aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2 text-base font-bold text-stone-900">
          {title}
          {badge != null && badge > 0 && (
            <span className="inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-rose-500 px-1.5 text-[11px] font-bold text-white">
              {badge}
            </span>
          )}
        </span>
        <span className="mt-0.5 block text-xs text-stone-500">{desc}</span>
      </span>
      <ArrowRight size={18} className="shrink-0 text-stone-400" aria-hidden />
    </a>
  );
}
