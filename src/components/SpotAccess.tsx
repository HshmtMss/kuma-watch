import { TrainFront, CableCar, Bus, Car, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * 観光地への「アクセス」カード。最寄駅・ケーブルカー・バス等を、来訪前にひと目で
 * 確認できるよう観光情報の並びに前出しする（従来は「詳しく見る」内に埋もれていた）。
 * サーバーコンポーネント（フックなし）。
 */
function iconFor(label: string): LucideIcon {
  if (/鉄道|電車|駅|線/.test(label)) return TrainFront;
  if (/ケーブル|リフト|ロープ/.test(label)) return CableCar;
  if (/バス/.test(label)) return Bus;
  if (/車|駐車/.test(label)) return Car;
  return MapPin;
}

export default function SpotAccess({
  name,
  access,
  className = "",
}: {
  name: string;
  access: { label: string; detail: string; url?: string }[];
  className?: string;
}) {
  if (!access?.length) return null;
  return (
    <section
      className={`not-prose rounded-2xl border border-stone-200 bg-white p-4 ${className}`}
      aria-label={`${name}へのアクセス`}
    >
      <div className="flex items-center gap-1.5 text-xs font-bold text-stone-700">
        <TrainFront size={14} aria-hidden />
        アクセス
      </div>
      <ul className="mt-3 space-y-2.5">
        {access.map((a) => {
          const Icon = iconFor(a.label);
          return (
            <li key={a.label} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-500">
                <Icon size={15} aria-hidden />
              </span>
              <div className="min-w-0">
                <div className="text-[13px] font-semibold text-stone-800">
                  {a.label}
                </div>
                <div className="text-[13px] leading-snug text-stone-600">
                  {a.url ? (
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline"
                    >
                      {a.detail}
                    </a>
                  ) : (
                    a.detail
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
