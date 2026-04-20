import type { DataSourceEntry } from "@/data/data-sources";
import { inJapanBounds, type UnifiedSighting } from "./types";

const API_BASE = "https://v2.kemonote.com/web/api";
const CACHE_TTL_MS = 60 * 60 * 1000;
const TOKEN_TTL_MS = 10 * 60 * 60 * 1000;

const COMMON_HEADERS = {
  "Accept": "application/json",
  "Origin": "https://v2.kemonote.com",
  "Referer": "https://v2.kemonote.com/",
  "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)",
};

let tokenCache: { token: string; at: number } | null = null;
const memo = new Map<string, { at: number; data: UnifiedSighting[] }>();

type QaItem = {
  id: number;
  question_text: string;
  answer_type: string;
  answer_id: number | null;
  answer_text: string | null;
};
type QaContent = { contents?: QaItem[] };

type MapPoint = {
  id: number;
  site_id: number;
  user_name: string;
  status: string;
  posted_at: string;
  gps_latitude: number;
  gps_longitude: number;
  qa_content: string;
};

async function getToken(): Promise<string | null> {
  const now = Date.now();
  if (tokenCache && now - tokenCache.at < TOKEN_TTL_MS) return tokenCache.token;
  const username = process.env.KEMONOTE_USERNAME ?? "kuma";
  const password = process.env.KEMONOTE_PASSWORD ?? "kuma";
  try {
    const r = await fetch(`${API_BASE}/auth/user-auth`, {
      method: "POST",
      headers: { ...COMMON_HEADERS, "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      cache: "no-store",
    });
    if (!r.ok) return null;
    const j = (await r.json()) as { result?: string; token?: string };
    if (j.result !== "success" || !j.token) return null;
    tokenCache = { token: j.token, at: now };
    return j.token;
  } catch {
    return null;
  }
}

function parseQa(raw: string): QaContent {
  try {
    return JSON.parse(raw) as QaContent;
  } catch {
    return { contents: [] };
  }
}

function firstAnswer(qa: QaContent, texts: string[]): string | null {
  const contents = qa.contents ?? [];
  for (const q of texts) {
    const item = contents.find((c) => c.question_text === q);
    if (item?.answer_text) return item.answer_text.trim();
  }
  return null;
}

function toJstIso(iso: string): string {
  // 2026-04-20T23:40:41.000Z → JST yyyy-mm-dd
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const jstMs = d.getTime() + 9 * 60 * 60 * 1000;
  return new Date(jstMs).toISOString().split("T")[0];
}

function normalizeDate(raw: string | null): string | null {
  if (!raw) return null;
  // Accept 'YYYY-MM-DD' or 'YYYY/MM/DD'
  const m = raw.match(/(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const da = Number(m[3]);
  if (y < 1970 || y > 2100 || mo < 1 || mo > 12 || da < 1 || da > 31) return null;
  return `${y}-${String(mo).padStart(2, "0")}-${String(da).padStart(2, "0")}`;
}

export async function fetchKemonoteSightings(
  entry: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  const now = Date.now();
  const cached = memo.get(entry.id);
  if (cached && now - cached.at < CACHE_TTL_MS) return cached.data;

  const token = await getToken();
  if (!token) return cached?.data ?? [];

  try {
    const r = await fetch(`${API_BASE}/map_points`, {
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!r.ok) return cached?.data ?? [];
    const body = (await r.json()) as { result?: string; json?: MapPoint[] };
    if (body.result !== "success" || !Array.isArray(body.json)) return cached?.data ?? [];

    const prefName = entry.regionLabel.split(" ")[0] ?? entry.regionLabel;
    const sightings: UnifiedSighting[] = [];
    for (const p of body.json) {
      if (p.status !== "public") continue;
      if (!Number.isFinite(p.gps_latitude) || !Number.isFinite(p.gps_longitude)) continue;
      if (!inJapanBounds(p.gps_latitude, p.gps_longitude)) continue;

      const qa = parseQa(p.qa_content ?? "{}");
      const qaDate = firstAnswer(qa, ["目撃した日付", "クマを目撃した日付"]);
      const date = normalizeDate(qaDate) ?? toJstIso(p.posted_at);
      if (!date) continue;

      const section = firstAnswer(qa, ["地名等", "クマを目撃した地名等"]) ?? "";
      const comment = firstAnswer(qa, ["備考"]) ?? "";
      const headCountStr = firstAnswer(qa, ["目撃頭数"]);
      const headCount = headCountStr ? Number(headCountStr.replace(/[^0-9]/g, "")) || 1 : 1;

      sightings.push({
        id: `${entry.id}-${p.id}`,
        source: entry.id,
        sourceKind: "csv",
        lat: p.gps_latitude,
        lon: p.gps_longitude,
        date,
        prefectureName: prefName,
        cityName: p.user_name ?? "",
        sectionName: section,
        comment,
        headCount,
      });
    }

    memo.set(entry.id, { at: now, data: sightings });
    return sightings;
  } catch {
    return cached?.data ?? [];
  }
}
