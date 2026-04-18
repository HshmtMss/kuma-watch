import Link from "next/link";
import PlaceSearch from "@/components/PlaceSearch";
import GpsButton from "@/components/GpsButton";
import HomeMapPreview from "@/components/HomeMapPreview";

const POPULAR_DESTINATIONS: Array<{ name: string; lat: number; lon: number; hint: string }> = [
  { name: "上高地", lat: 36.2508, lon: 137.6341, hint: "長野県松本市・北アルプス" },
  { name: "奥多摩", lat: 35.811, lon: 139.093, hint: "東京都西多摩郡" },
  { name: "蔵王連峰", lat: 38.135, lon: 140.445, hint: "山形県・宮城県" },
  { name: "白神山地", lat: 40.477, lon: 140.083, hint: "青森県・秋田県" },
  { name: "知床", lat: 44.067, lon: 145.083, hint: "北海道・ヒグマ生息域" },
  { name: "奥日光", lat: 36.75, lon: 139.48, hint: "栃木県日光市" },
];

export default function HomePage() {
  return (
    <main className="flex min-h-[100dvh] flex-col bg-gradient-to-b from-amber-50 via-white to-white">
      <header className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden>🐻</span>
          <span className="text-base font-bold text-gray-900">KumaWatch</span>
          <span className="hidden text-xs text-gray-500 sm:inline">全国クマ出没予報</span>
        </Link>
        <nav className="flex items-center gap-3 text-xs text-gray-600">
          <Link href="/map" className="hover:text-gray-900">🗺️ 地図</Link>
          <Link href="/submit" className="hover:text-gray-900">投稿</Link>
          <Link href="/about" className="hover:text-gray-900">使い方</Link>
        </nav>
      </header>

      <section className="mx-auto w-full max-w-xl px-5 pt-4 sm:pt-8">
        <h1 className="mb-2 text-center text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
          行き先のクマ情報、1 画面で。
        </h1>
        <p className="mb-5 text-center text-sm text-gray-600">
          全国のクマ生息域と出没予測を、地名か現在地ですぐ確認できます。
        </p>

        <div className="mb-5">
          <HomeMapPreview />
        </div>

        <div className="mb-3">
          <PlaceSearch autofocus={false} />
        </div>

        <div className="mb-8 flex items-center gap-3 text-xs text-gray-400">
          <span className="h-px flex-1 bg-gray-200" />
          <span>または</span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        <GpsButton />

        <div className="mt-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            人気の行き先
          </div>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {POPULAR_DESTINATIONS.map((d) => (
              <li key={d.name}>
                <Link
                  href={`/place?lat=${d.lat}&lon=${d.lon}&name=${encodeURIComponent(d.name)}`}
                  className="block rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-amber-400 hover:shadow"
                >
                  <div className="font-medium text-gray-900">{d.name}</div>
                  <div className="mt-0.5 text-[11px] text-gray-500">{d.hint}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link
            href="/map"
            className="rounded-xl border border-gray-200 bg-white p-4 transition hover:border-amber-400 hover:shadow"
          >
            <div className="mb-1 text-base font-semibold text-gray-900">
              🗺️ 地図で広く見る
            </div>
            <p className="text-xs text-gray-600">
              全国の出没ピン、生息域のヒートマップを俯瞰できます。
            </p>
          </Link>
          <Link
            href="/submit"
            className="rounded-xl border border-gray-200 bg-white p-4 transition hover:border-amber-400 hover:shadow"
          >
            <div className="mb-1 text-base font-semibold text-gray-900">
              📝 目撃情報を投稿
            </div>
            <p className="text-xs text-gray-600">
              見かけた情報を投稿できます。自治体への共有にも使われます。
            </p>
          </Link>
        </div>
      </section>

      <footer className="mt-auto border-t border-gray-100 px-5 py-5 text-center text-[11px] text-gray-400">
        <div>
          <Link href="/about" className="mx-1.5 hover:text-gray-700">このサイトについて</Link>
          <Link href="/sources" className="mx-1.5 hover:text-gray-700">データ出典</Link>
          <Link href="/for-gov" className="mx-1.5 hover:text-gray-700">自治体の方へ</Link>
          <Link href="/disclaimer" className="mx-1.5 hover:text-gray-700">免責事項</Link>
          <Link href="/privacy" className="mx-1.5 hover:text-gray-700">プライバシー</Link>
        </div>
        <div className="mt-2">© リサーチコーディネート株式会社</div>
      </footer>
    </main>
  );
}
