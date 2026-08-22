"use client";

import { useEffect, useState } from "react";

/**
 * 問い合わせフォーム (汎用)。送信は /api/contact への JSON POST。サーバー側で
 * Upstash に保存し (管理画面 /admin/contacts で一覧)、RESEND_API_KEY があれば
 * メール通知も飛ぶ。送信ボタンだけで完結し、メールアプリは起動しない。送信後は
 * フォームを空にして「送信しました」を表示する。
 *
 * 自治体 (/for-gov) と事業者 (/for-vendors) で見出し・項目・件名を変えて再利用。
 * メール環境しか使いたくない人向けに、末尾に直接メールの導線も残す。
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

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ kind }: { kind: ContactKind }) {
  const cfg = CONFIG[kind];
  const [data, setData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  // ボット除け (ハニーポット)。人間には見えない。埋まっていたらサーバーが捨てる。
  const [honeypot, setHoneypot] = useState("");

  /**
   * 市町村ページの「ご担当者の方へ」導線 (/for-gov?from=秋田県秋田市) から来たときは、
   * 自治体名の欄をあらかじめ埋めておく。担当者の入力が 1 つ減り、こちらは問い合わせが
   * どの市町村から来たかを把握できる。
   *
   * useSearchParams ではなく window.location を読むのは、/for-gov を静的なまま
   * 保つため (searchParams をページで受けると動的レンダリングに落ちる)。
   * マウント時に一度だけ入れ、以降の編集は上書きしない。
   */
  useEffect(() => {
    if (kind !== "gov") return;
    const from = new URLSearchParams(window.location.search).get("from")?.trim();
    if (!from) return;
    setData((prev) => (prev.org ? prev : { ...prev, org: from }));
  }, [kind]);

  function handleChange(key: string, v: string) {
    setData((prev) => ({ ...prev, [key]: v }));
    if (status === "error") setStatus("idle");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          name: data.name ?? "",
          org: data.org ?? "",
          email: data.email ?? "",
          phone: data.phone ?? "",
          message: data.message ?? "",
          company_website: honeypot,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setData({});
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg(
        "送信に失敗しました。お手数ですが、少し時間をおいて再度お試しいただくか、下記のメールアドレスへ直接ご連絡ください。",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="not-prose rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center shadow-sm">
        <p className="text-base font-semibold text-emerald-900">
          送信しました。ありがとうございます。
        </p>
        <p className="mt-2 text-sm text-emerald-800">
          担当より 3 営業日以内にご返信いたします。
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white px-4 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-50"
        >
          続けて問い合わせる
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="not-prose space-y-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
    >
      {/* ハニーポット: 画面外に隠す。ラベルは人が触らない名前に。 */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
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
      {status === "error" && (
        <p className="rounded-lg bg-rose-50 px-3 py-2 text-xs leading-relaxed text-rose-700">
          {errorMsg}
        </p>
      )}
      <p className="text-[11px] leading-relaxed text-stone-500">
        送信ボタンを押すと、この内容が運営に届きます。担当より 3 営業日以内にご返信いたします。
        うまく送れない場合は{" "}
        <a href={`mailto:${TO}`} className="font-semibold text-amber-700 underline">
          {TO}
        </a>{" "}
        へ直接メールでもご連絡いただけます。
      </p>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 disabled:cursor-not-allowed disabled:bg-stone-300 sm:w-auto"
      >
        {status === "submitting" ? "送信中…" : "この内容で送信する →"}
      </button>
    </form>
  );
}
