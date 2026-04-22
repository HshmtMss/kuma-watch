"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import PlaceSearch from "@/components/PlaceSearch";
import type { GeocodeHit } from "@/app/api/geocode/route";

const POPULAR_DESTINATIONS: Array<{ label: string; lat: number; lon: number }> = [
  { label: "上高地", lat: 36.2485, lon: 137.6405 },
  { label: "軽井沢", lat: 36.3485, lon: 138.6270 },
  { label: "奥多摩", lat: 35.8094, lon: 139.0030 },
  { label: "蔵王", lat: 38.1397, lon: 140.4358 },
  { label: "白神山地", lat: 40.4622, lon: 140.0617 },
  { label: "大山", lat: 35.3708, lon: 133.5473 },
  { label: "富士山麓", lat: 35.3606, lon: 138.7278 },
  { label: "知床", lat: 44.0731, lon: 145.0594 },
];

export default function HomeLanding() {
  const router = useRouter();
  const [gpsStatus, setGpsStatus] = useState<"idle" | "loading" | "error">("idle");

  const goToPlace = useCallback(
    (lat: number, lon: number, name?: string) => {
      const params = new URLSearchParams({
        lat: String(lat),
        lon: String(lon),
      });
      if (name) params.set("name", name);
      router.push(`/place?${params.toString()}`);
    },
    [router],
  );

  const handleSearchPick = useCallback(
    (hit: GeocodeHit) => {
      goToPlace(hit.lat, hit.lon, hit.displayName);
    },
    [goToPlace],
  );

  const handleGps = useCallback(() => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      setGpsStatus("error");
      return;
    }
    setGpsStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGpsStatus("idle");
        goToPlace(pos.coords.latitude, pos.coords.longitude, "現在地");
      },
      () => setGpsStatus("error"),
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 },
    );
  }, [goToPlace]);

  return (
    <main className="min-h-[100dvh] bg-stone-50 text-stone-900">
      {/* ────── Header ────── */}
      <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-stone-50/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="text-xl" aria-hidden>🐻</span>
            <span className="text-base">KumaWatch</span>
            <span className="hidden text-[11px] font-medium text-stone-500 sm:inline">
              全国クマ出没予報
            </span>
          </Link>
          <nav className="flex items-center gap-1 text-xs text-stone-600">
            <Link href="/map" className="rounded-full px-3 py-1.5 hover:bg-stone-100">
              全国マップ
            </Link>
            <Link href="/sources" className="hidden rounded-full px-3 py-1.5 hover:bg-stone-100 sm:inline">
              データ出典
            </Link>
            <Link href="/for-gov" className="hidden rounded-full px-3 py-1.5 hover:bg-stone-100 sm:inline">
              自治体の方へ
            </Link>
          </nav>
        </div>
      </header>

      {/* ────── Hero ────── */}
      <section className="relative overflow-hidden px-4 pt-10 pb-12 sm:pt-16 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 10%, #6b8e23 0, transparent 40%), radial-gradient(circle at 80% 80%, #d97706 0, transparent 40%)",
          }}
        />
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-amber-700">
            あなたの行き先 × クマ出没情報
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            目的地の安全、
            <br className="sm:hidden" />
            出発前に確認。
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
            過去のクマ出没記録と自治体のお知らせを集約し、
            <br className="hidden sm:block" />
            その場所が今どれだけ危険か、ひと目で把握できます。
          </p>

          <div className="mx-auto mt-8 max-w-xl">
            <PlaceSearch autofocus={false} onPick={handleSearchPick} />
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-stone-500">
            <span className="h-px w-8 bg-stone-300" />
            または
            <span className="h-px w-8 bg-stone-300" />
          </div>

          <div className="mt-4">
            <button
              onClick={handleGps}
              disabled={gpsStatus === "loading"}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-stone-900 px-6 text-sm font-medium text-white shadow-sm transition hover:bg-stone-800 disabled:opacity-60"
            >
              <span aria-hidden>📍</span>
              {gpsStatus === "loading" ? "現在地を取得中..." : "現在地で判断する"}
            </button>
            {gpsStatus === "error" && (
              <p className="mt-2 text-xs text-red-600">
                位置情報の取得に失敗しました。検索で場所を指定してください。
              </p>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] text-stone-500">人気の行き先:</span>
            {POPULAR_DESTINATIONS.slice(0, 6).map((d) => (
              <button
                key={d.label}
                onClick={() => goToPlace(d.lat, d.lon, d.label)}
                className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs text-stone-700 transition hover:border-amber-400 hover:bg-amber-50"
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ────── Value props ────── */}
      <section className="border-y border-stone-200/70 bg-white py-10">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-3">
          <ValueItem
            icon="🗺️"
            title="全国カバー"
            body="環境省・自治体・Sharp9110 の公開データを統合。47 都道府県を順次カバー中。"
          />
          <ValueItem
            icon="⏱️"
            title="過去 × 予報"
            body="過去の出没記録に気象・時間帯・月相を重ねて、いま行く場所のリスクを算出。"
          />
          <ValueItem
            icon="💬"
            title="対策まで質問できる"
            body="遭ったらどうする？鈴は効く？ AI アシスタントがその場で答えます。"
          />
        </div>
      </section>

      {/* ────── Recent highlights (stub for news) ────── */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                最近の注目エリア
              </h2>
              <p className="mt-1 text-xs text-stone-500">
                出没件数が増えている地域・ニュース要約（AI 自動生成）
              </p>
            </div>
            <Link
              href="/map"
              className="hidden text-xs font-medium text-amber-700 hover:underline sm:inline"
            >
              全国マップで俯瞰 →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <HighlightCard
              area="長野県"
              headline="ツキノワグマ出没 年間 2,346 件"
              detail="県内 71 市町村で確認。大町市・長野市・軽井沢町が特に多い。10〜12 月ピーク。"
              href="/place?lat=36.3486&lon=138.6272&name=軽井沢町"
            />
            <HighlightCard
              area="北海道"
              headline="ひぐまっぷ連携で道内全域を網羅"
              detail="65 市町村のヒグマ出没情報を直近 3 ヶ月分表示。札幌市は CKAN 公式連携済み。"
              href="/map"
            />
            <HighlightCard
              area="静岡県"
              headline="R7 は 200 件・R6 156 件と増加傾向"
              detail="富士宮市・静岡市葵区・清水区・浜松市天竜区が出没の 3/4 を占める。"
              href="/place?lat=35.2186&lon=138.6213&name=富士宮市"
            />
          </div>
        </div>
      </section>

      {/* ────── CTA: Submit + Municipal ────── */}
      <section className="px-4 pb-16">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          <CtaCard
            title="目撃情報を投稿する"
            body="あなたの投稿が、自治体との連携を加速させます。位置と日時、簡単な状況だけで OK。"
            cta="投稿する"
            href="/submit"
            accent="amber"
          />
          <CtaCard
            title="自治体の方へ"
            body="詳細データを共有いただくと、貴自治体向け高機能ダッシュボードを無料でご提供します。"
            cta="パートナーシップの詳細"
            href="/for-gov"
            accent="emerald"
          />
        </div>
      </section>

      {/* ────── Footer ────── */}
      <footer className="border-t border-stone-200/70 bg-white py-10 text-xs text-stone-500">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-1 flex items-center gap-1.5 font-semibold text-stone-700">
              <span aria-hidden>🐻</span> KumaWatch
            </div>
            <p className="text-[11px] leading-relaxed text-stone-500">
              全国クマ出没予報 / © 2026 リサーチコーディネート株式会社
              <br />
              旧サービス名: くまもりマップ
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[11px]">
            <Link href="/about" className="hover:text-stone-800">このサイトについて</Link>
            <Link href="/sources" className="hover:text-stone-800">データ出典</Link>
            <Link href="/for-gov" className="hover:text-stone-800">自治体の方へ</Link>
            <Link href="/submit" className="hover:text-stone-800">目撃情報を投稿</Link>
            <Link href="/disclaimer" className="hover:text-stone-800">免責事項</Link>
            <Link href="/privacy" className="hover:text-stone-800">プライバシー</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}

function ValueItem({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="text-center sm:text-left">
      <div className="mb-2 text-2xl" aria-hidden>{icon}</div>
      <h3 className="text-sm font-semibold text-stone-900">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-stone-600">{body}</p>
    </div>
  );
}

function HighlightCard({
  area,
  headline,
  detail,
  href,
}: {
  area: string;
  headline: string;
  detail: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
    >
      <div>
        <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-medium text-amber-700">
          {area}
        </div>
        <h3 className="text-sm font-semibold leading-snug text-stone-900">{headline}</h3>
        <p className="mt-2 text-xs leading-relaxed text-stone-600">{detail}</p>
      </div>
      <div className="mt-4 text-[11px] font-medium text-amber-700 group-hover:underline">
        詳しく見る →
      </div>
    </Link>
  );
}

function CtaCard({
  title,
  body,
  cta,
  href,
  accent,
}: {
  title: string;
  body: string;
  cta: string;
  href: string;
  accent: "amber" | "emerald";
}) {
  const accentMap = {
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-900",
      button: "bg-amber-600 hover:bg-amber-700",
    },
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-900",
      button: "bg-emerald-600 hover:bg-emerald-700",
    },
  }[accent];
  return (
    <div className={`rounded-2xl border ${accentMap.border} ${accentMap.bg} p-6`}>
      <h3 className={`text-base font-bold ${accentMap.text}`}>{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-stone-700">{body}</p>
      <Link
        href={href}
        className={`mt-4 inline-flex h-10 items-center rounded-full px-5 text-xs font-medium text-white transition ${accentMap.button}`}
      >
        {cta}
      </Link>
    </div>
  );
}
