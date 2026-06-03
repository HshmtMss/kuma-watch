"use client";

import { useState } from "react";

/**
 * 問い合わせフォーム (汎用)。送信は mailto: でメーラーを開き、入力内容を
 * 件名 + 本文に pre-fill する。サーバー側エンドポイントは持たないので
 * メール環境がないユーザーでも、表示されたテンプレートをコピーして送れる。
 *
 * 自治体 (/for-gov) と事業者 (/for-vendors) で見出し・項目・件名を変えて再利用。
 */

export type ContactKind = "gov" | "vendor";

type FieldSpec = {
  key: "name" | "org" | "email" | "phone" | "message";
  label: string;
  required?: boolean;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "textarea";
};

const GOV_FIELDS: FieldSpec[] = [
  { key: "name", label: "ご担当者お名前", required: true, placeholder: "山田 太郎" },
  { key: "org", label: "自治体名・ご担当部署", required: true, placeholder: "○○市 環境課" },
  { key: "email", label: "メールアドレス", required: true, type: "email", placeholder: "name@city.example.lg.jp" },
  { key: "phone", label: "お電話番号 (任意)", type: "tel", placeholder: "03-1234-5678" },
  { key: "message", label: "ご相談内容", required: true, type: "textarea", placeholder: "現状の運用 / 連携で実現したいこと / その他ご質問など" },
];

const VENDOR_FIELDS: FieldSpec[] = [
  { key: "name", label: "ご担当者お名前", required: true, placeholder: "山田 太郎" },
  { key: "org", label: "会社名・部署", required: true, placeholder: "株式会社○○ 営業部" },
  { key: "email", label: "メールアドレス", required: true, type: "email", placeholder: "name@example.com" },
  { key: "phone", label: "お電話番号 (任意)", type: "tel", placeholder: "03-1234-5678" },
  { key: "message", label: "掲載希望製品・ご相談内容", required: true, type: "textarea", placeholder: "掲載を検討している製品・サービス / 想定する掲載先カテゴリ / ご質問など" },
];

const CONFIG: Record<ContactKind, { fields: FieldSpec[]; subject: string; intro: string }> = {
  gov: {
    fields: GOV_FIELDS,
    subject: "KumaWatch 自治体連携のご相談",
    intro: "いつもお世話になっております。\nKumaWatch（くまウォッチ）の自治体連携についてご相談させていただきます。",
  },
  vendor: {
    fields: VENDOR_FIELDS,
    subject: "KumaWatch 製品掲載のご相談",
    intro: "いつもお世話になっております。\nKumaWatch（くまウォッチ）への製品・サービス掲載についてご相談させていただきます。",
  },
};

const TO = "contact@research-coordinate.co.jp";

export default function ContactForm({ kind }: { kind: ContactKind }) {
  const cfg = CONFIG[kind];
  const [data, setData] = useState<Record<string, string>>({});

  function handleChange(key: string, v: string) {
    setData((prev) => ({ ...prev, [key]: v }));
  }

  function buildMailto() {
    const lines = [cfg.intro, ""];
    for (const f of cfg.fields) {
      const v = data[f.key] ?? "";
      lines.push(`■${f.label.replace(" (任意)", "")}:`);
      lines.push(v || "(未記入)");
      lines.push("");
    }
    const body = encodeURIComponent(lines.join("\n"));
    const subject = encodeURIComponent(cfg.subject);
    return `mailto:${TO}?subject=${subject}&body=${body}`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = buildMailto();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="not-prose space-y-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
    >
      {cfg.fields.map((f) => (
        <div key={f.key} className="space-y-1">
          <label
            htmlFor={`cf-${kind}-${f.key}`}
            className="block text-xs font-semibold text-stone-700"
          >
            {f.label}
            {f.required && <span className="ml-1 text-red-600">*</span>}
          </label>
          {f.type === "textarea" ? (
            <textarea
              id={`cf-${kind}-${f.key}`}
              required={f.required}
              placeholder={f.placeholder}
              value={data[f.key] ?? ""}
              onChange={(e) => handleChange(f.key, e.target.value)}
              rows={5}
              className="block w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
          ) : (
            <input
              id={`cf-${kind}-${f.key}`}
              type={f.type ?? "text"}
              required={f.required}
              placeholder={f.placeholder}
              value={data[f.key] ?? ""}
              onChange={(e) => handleChange(f.key, e.target.value)}
              className="block w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
          )}
        </div>
      ))}
      <p className="text-[11px] leading-relaxed text-stone-500">
        送信ボタンを押すと、ご利用のメールアプリが起動し、入力内容が件名・本文に挿入されます。
        メールアプリが開かない場合は{" "}
        <a href={`mailto:${TO}`} className="font-semibold text-amber-700 underline">
          {TO}
        </a>{" "}
        に直接ご連絡ください。3 営業日以内にご返信いたします。
      </p>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 sm:w-auto"
      >
        この内容で送信する →
      </button>
    </form>
  );
}
