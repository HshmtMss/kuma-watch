"use client";

import { useEffect, useState } from "react";
import SubmitWizard from "@/components/SubmitWizard";

/**
 * LIFF (LINE 内ブラウザ) で動く投稿クライアント。
 *
 * 流れ (LineRegisterClient と同じ認証パターン):
 *   1. @line/liff を動的 import して liff.init({ liffId })
 *   2. 未ログインなら liff.login() (LINE 内なら基本ログイン済み)
 *   3. liff.getIDToken() を取得
 *   4. 投稿本体は Web と共通の SubmitWizard に idToken を渡して描画
 *      → 送信時 /api/submit がサーバ側で検証して userId を紐付ける
 *
 * 投稿自体は idToken が取れなくても続行できる (匿名投稿と同じ)。idToken は
 * 「あとで承認通知を届ける / 連投を抑える」ための付加情報で、必須ではない。
 * そのため友だち追加の有無ではブロックしない (登録フローとの違い)。
 *
 * 地図ピッカー (/?pick=submit) は /submit へ戻る作りで LIFF からは戻れないため、
 * enableMapPick=false にして現在地 (GPS) に寄せる。
 */

// 投稿用の LIFF ID。登録用 LIFF はエンドポイントが /line/register 固定なので、
// /line/submit をエンドポイントにした専用 LIFF アプリ (同じ LINE ログイン
// チャネル配下) を作り、その ID を NEXT_PUBLIC_LIFF_SUBMIT_ID に入れる。
// 未設定なら登録用にフォールバック (エンドポイントを site 直下にしている場合)。
const LIFF_ID =
  process.env.NEXT_PUBLIC_LIFF_SUBMIT_ID ??
  process.env.NEXT_PUBLIC_LIFF_ID ??
  "";

type Phase = "init" | "ready" | "error";

export default function LineSubmitClient() {
  const [phase, setPhase] = useState<Phase>("init");
  const [errMsg, setErrMsg] = useState("");
  const [idToken, setIdToken] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!LIFF_ID) {
        setPhase("error");
        setErrMsg("LIFF ID が設定されていません。");
        return;
      }
      try {
        const liff = (await import("@line/liff")).default;
        await liff.init({ liffId: LIFF_ID });
        if (!liff.isLoggedIn()) {
          // 既定の戻り先はエンドポイント URL でクエリが落ちるため、明示する。
          liff.login({ redirectUri: window.location.href });
          return; // login はリダイレクトするので以降は次回ロードで処理
        }
        // idToken は取れなくても投稿は続行 (匿名扱い)。取れたら紐付けに使う。
        const token = liff.getIDToken();
        if (cancelled) return;
        setIdToken(token ?? null);
        setPhase("ready");
      } catch (e) {
        if (cancelled) return;
        setPhase("error");
        setErrMsg(
          `LINE の初期化に失敗しました: ${e instanceof Error ? e.message : String(e)}`,
        );
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (phase === "init") {
    return (
      <main className="mx-auto max-w-md px-4 py-10 text-center text-stone-500">
        読み込み中…
      </main>
    );
  }

  if (phase === "error") {
    return (
      <main className="mx-auto max-w-md px-4 py-10">
        <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {errMsg || "LINE 内で開いてください。"}
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-[100dvh] bg-gray-50">
      <SubmitWizard enableMapPick={false} idToken={idToken} />
    </main>
  );
}
