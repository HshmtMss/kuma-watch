export type MeshEntry = {
  m: string;
  s: number;
  x: number;
  l: number;
  ls: number;
  lat: number;
  lon: number;
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
