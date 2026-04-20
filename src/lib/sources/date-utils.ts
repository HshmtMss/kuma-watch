const ERA_OFFSETS: Record<string, number> = {
  令和: 2018, R: 2018, r: 2018,
  平成: 1988, H: 1988, h: 1988,
  昭和: 1925, S: 1925, s: 1925,
  大正: 1911, T: 1911, t: 1911,
  明治: 1867, M: 1867, m: 1867,
};

export function normalizeFullWidth(s: string): string {
  return s.replace(/[\uff21-\uff3a\uff41-\uff5a\uff10-\uff19]/g, (c) =>
    String.fromCharCode(c.charCodeAt(0) - 0xfee0),
  );
}

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

export function parseWarekiDate(raw: string): string | null {
  if (!raw) return null;
  const s = normalizeFullWidth(raw).trim();
  const m = s.match(
    /(令和|平成|昭和|大正|明治|[RHSTMrhstm])(元|\d{1,2})[.\/\-年](\d{1,2})[.\/\-月](\d{1,2})日?/,
  );
  if (!m) return null;
  const year = m[2] === "元" ? 1 : Number(m[2]);
  const mo = Number(m[3]);
  const da = Number(m[4]);
  const offset = ERA_OFFSETS[m[1]];
  if (offset == null || !Number.isFinite(year) || !Number.isFinite(mo) || !Number.isFinite(da)) return null;
  if (mo < 1 || mo > 12 || da < 1 || da > 31) return null;
  const y = offset + year;
  if (y < 1900 || y > 2100) return null;
  return `${y}-${pad2(mo)}-${pad2(da)}`;
}

export function parseIsoLike(raw: string): string | null {
  if (!raw) return null;
  const s = normalizeFullWidth(raw).trim();
  const m = s.match(/(\d{4})[.\/\-年](\d{1,2})[.\/\-月](\d{1,2})日?/);
  if (!m) return null;
  const mo = Number(m[2]);
  const da = Number(m[3]);
  if (mo < 1 || mo > 12 || da < 1 || da > 31) return null;
  return `${m[1]}-${pad2(mo)}-${pad2(da)}`;
}

export function epochToIsoDate(v: unknown): string {
  if (typeof v !== "number" || !Number.isFinite(v)) return "";
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().split("T")[0];
}
