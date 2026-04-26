export type MeshEntry = {
  m: string;
  s: number;
  x: number;
  l: number;
  ls: number;
  lat: number;
  lon: number;
  /**
   * 穴埋め用近傍推計スコア (0-50)。habitat が自セルにない山間部セル
   * (森林率 > 0.7 かつ 10km 以内に habitat あり) にのみセットされる。
   * ランタイムではこの値があれば calcHistoryScore() の代わりに使う。
   */
  n?: number;
};

type MeshJsonPayload = {
  generatedAt: string;
  count: number;
  meshes: MeshEntry[];
};

let cache: Promise<MeshJsonPayload> | null = null;

export function loadMeshes(): Promise<MeshEntry[]> {
  return loadMeshPayload().then((p) => p.meshes);
}

export function loadMeshPayload(): Promise<MeshJsonPayload> {
  if (!cache) {
    cache = fetch("/data/mesh.json", { cache: "force-cache" }).then((r) => {
      if (!r.ok) {
        cache = null;
        throw new Error(`mesh.json fetch failed: ${r.status}`);
      }
      return r.json() as Promise<MeshJsonPayload>;
    });
  }
  return cache;
}

export function findMeshByCode(
  meshes: MeshEntry[],
  code: string,
): MeshEntry | undefined {
  return meshes.find((m) => m.m === code);
}

/**
 * 国土数値情報 (MLIT L03-b-16) の森林率マップ。
 * 平滑化での「市街地は穴埋めしない」ゲートに使う。
 */
export type LandUseMap = Map<string, number>; // meshCode → forestRate (0-1)
type LandUsePayload = {
  generatedAt?: string;
  meshes: Record<string, { f: number; n?: number }>;
};
let landUseCache: Promise<LandUseMap> | null = null;
export function loadLandUse(): Promise<LandUseMap> {
  if (!landUseCache) {
    landUseCache = fetch("/data/landuse.json", { cache: "force-cache" })
      .then((r) => {
        if (!r.ok) {
          landUseCache = null;
          throw new Error(`landuse.json fetch failed: ${r.status}`);
        }
        return r.json() as Promise<LandUsePayload>;
      })
      .then((p) => {
        const map = new Map<string, number>();
        for (const [code, v] of Object.entries(p.meshes)) {
          map.set(code, typeof v.f === "number" ? v.f : 0);
        }
        return map;
      });
  }
  return landUseCache;
}
