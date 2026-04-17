import KumaClient from "@/components/KumaClient";

export default function Home() {
  return (
    <main className="flex flex-col" style={{ height: "100vh" }}>
      <header className="flex items-center justify-between border-b border-black/8 bg-white px-5 py-3 shadow-sm shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-2xl" aria-hidden="true">🐻</span>
          <div>
            <h1 className="text-base font-bold leading-tight tracking-tight text-gray-900">
              KumaWatch <span className="text-xs font-normal text-gray-500">（クマウォッチ）</span>
            </h1>
            <p className="text-xs text-gray-500">全国クマ出没予報・危険度マップ</p>
          </div>
        </div>
        <nav className="flex items-center gap-3 text-xs text-gray-600">
          <a href="/for-gov" className="hover:text-gray-900">自治体の方へ</a>
          <a href="/sources" className="hover:text-gray-900">データ出典</a>
          <a href="/about" className="hover:text-gray-900">このサイトについて</a>
        </nav>
      </header>
      <KumaClient />
    </main>
  );
}
