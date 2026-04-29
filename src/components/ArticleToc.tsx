import Link from "next/link";

export type TocItem = { id: string; title: string };

type Props = {
  items: TocItem[];
};

export default function ArticleToc({ items }: Props) {
  if (items.length === 0) return null;
  return (
    <nav
      aria-label="目次"
      className="not-prose mb-8 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4"
    >
      <div className="mb-2 text-xs font-semibold text-amber-800">この記事の目次</div>
      <ol className="space-y-1 text-sm text-amber-900">
        {items.map((it, i) => (
          <li key={it.id} className="leading-snug">
            <Link href={`#${it.id}`} className="hover:underline">
              <span className="mr-1 text-amber-700">{i + 1}.</span>
              {it.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
