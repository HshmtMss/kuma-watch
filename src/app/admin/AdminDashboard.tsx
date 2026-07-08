"use client";

import { useCallback, useEffect, useState } from "react";
import { BarChart3, ClipboardList, ArrowRight } from "lucide-react";
import AdminShell from "@/components/admin/AdminShell";

type Summary = {
  totalSubscribers: number;
  activeMuniCount: number;
  activeSpotCount: number;
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
  const [summary, setSummary] = useState<Summary | null>(null);
  const [pending, setPending] = useState<number | null>(null);

  const load = useCallback(async () => {
    const auth = { Authorization: `Bearer ${secret}` };
    try {
      const [s, p] = await Promise.all([
        fetch(`/api/admin/push-stats?top=1`, { headers: auth, cache: "no-store" }),
        fetch(`/api/admin/submissions?status=pending`, {
          headers: auth,
          cache: "no-store",
        }),
      ]);
      if (s.status === 401 || p.status === 401) {
        deauth();
        return;
      }
      if (s.ok) {
        const d = (await s.json()) as Summary;
        setSummary(d);
      }
      if (p.ok) {
        const d = (await p.json()) as { submissions?: unknown[] };
        setPending(d.submissions?.length ?? 0);
      }
    } catch {
      /* best-effort */
    }
  }, [secret, deauth]);

  useEffect(() => {
    // マウント時に一度読み込む（意図的なデータ取得）。
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  return (
    <>
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Tile label="通知の実登録者数" value={summary?.totalSubscribers} unit="人" />
        <Tile label="承認待ち投稿" value={pending} unit="件" accent={(pending ?? 0) > 0} />
        <Tile label="登録あり自治体" value={summary?.activeMuniCount} unit="件" />
        <Tile label="登録あり観光地" value={summary?.activeSpotCount} unit="件" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <EntryCard
          href="/admin/push-stats"
          Icon={BarChart3}
          title="通知登録"
          desc="自治体別・観光地別の通知登録数。営業材料に。"
        />
        <EntryCard
          href="/admin/submissions"
          Icon={ClipboardList}
          title="投稿モデレーション"
          desc="市民投稿の承認・却下・地図確認。"
          badge={pending ?? undefined}
        />
      </div>
    </>
  );
}

function Tile({
  label,
  value,
  unit,
  accent,
}: {
  label: string;
  value?: number | null;
  unit: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border px-4 py-3 ${
        accent ? "border-rose-200 bg-rose-50" : "border-stone-200 bg-white"
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
    </div>
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
