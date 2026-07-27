#!/usr/bin/env python3
"""river-geometry.json を使い、河川敷系の報道出没を実際の川へスナップした場合の
効果を測定する(適用はしない・検証のみ)。

チェック:
  - スナップ後、実際の川までの距離が縮むか(現状の平均ズレ)
  - スナップ先が「主張する市町村の境界内」に収まるか(域外に出さない)
"""
import json, math, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GEO = os.path.join(ROOT, "src", "data", "river-geometry.json")
SIGHTINGS = os.path.join(ROOT, "public", "data", "sightings.json")
BND = os.path.join(ROOT, "public", "data", "boundaries")

rivers = json.load(open(GEO, encoding="utf8"))
recs = json.load(open(SIGHTINGS, encoding="utf8"))["records"]
FEAT = ("河川敷", "川沿い", "川原", "堤防", "沿岸")
PREF_CODE = {"北海道":"01","青森県":"02","岩手県":"03","宮城県":"04","秋田県":"05","山形県":"06","福島県":"07","栃木県":"09","新潟県":"15","福井県":"18","長野県":"20"}


def sval(r, k):
    v = r.get(k, ""); return v if isinstance(v, str) else ""


def km(a, b, c, e):
    t = math.pi/180; x=(c-a)*t; y=(e-b)*t
    return 2*6371*math.asin(math.sqrt(math.sin(x/2)**2+math.cos(a*t)*math.cos(c*t)*math.sin(y/2)**2))


# --- 市町村境界(GeoJSON)を読み、point-in-polygon で域内判定 ---
_bnd_cache = {}
def load_pref_boundaries(pref):
    code = PREF_CODE.get(pref)
    if not code: return None
    if code in _bnd_cache: return _bnd_cache[code]
    path = os.path.join(BND, f"{code}.json")
    data = json.load(open(path, encoding="utf8")) if os.path.exists(path) else None
    _bnd_cache[code] = data
    return data

def point_in_ring(lon, lat, ring):
    inside = False; n = len(ring); j = n-1
    for i in range(n):
        xi, yi = ring[i][0], ring[i][1]; xj, yj = ring[j][0], ring[j][1]
        if ((yi > lat) != (yj > lat)) and (lon < (xj-xi)*(lat-yi)/(yj-yi)+xi):
            inside = not inside
        j = i
    return inside

def _name_matches(nm, city):
    # 政令市対応: city「仙台市」に対し境界は区名「仙台市宮城野区」等で入る。
    # 逆に city が区名で境界が市名の場合もあるため双方向 startswith を許す。
    return nm == city or nm.startswith(city) or city.startswith(nm)

def inside_muni(lat, lon, pref, city):
    data = load_pref_boundaries(pref)
    if not data: return None
    matched_any = False
    for feat in data["features"]:
        nm = feat["properties"].get("name", "")
        if not nm or not _name_matches(nm, city): continue
        matched_any = True
        geom = feat["geometry"]; polys = geom["coordinates"] if geom["type"]=="MultiPolygon" else [geom["coordinates"]]
        for poly in polys:
            if point_in_ring(lon, lat, poly[0]):
                if not any(point_in_ring(lon, lat, hole) for hole in poly[1:]):
                    return True
    return False if matched_any else None  # 該当市の境界が無ければ判定不能=Noneで通す


def match_river(r):
    dict_ = rivers.get(sval(r, "prefectureName"))
    if not dict_: return None
    text = sval(r, "sectionName") + sval(r, "comment")
    for name in sorted(dict_, key=len, reverse=True):
        if len(name) >= 2 and name in text:
            return name, dict_[name]
    return None


feat = [r for r in recs if not r.get("geoInconsistent") and r.get("source")=="news"
        and isinstance(r.get("lat"), (int, float))
        and any(w in sval(r,"sectionName")+sval(r,"comment") for w in FEAT)]

# 安全制約: 現在地からこの距離以内の川の点にだけスナップする。
# これより遠い「同名の別の川」(例: 地名『大川添』の大川が11km先) には寄せない。
# 報道由来のジオコード誤差は概ね〜2km なので、その範囲の本物の川に補正する。
MAX_SNAP_KM = 2.0

matched = snapped = corrected_over150 = too_far = kept_outside = 0
corr_sum = 0.0
examples = []
for r in feat:
    m = match_river(r)
    if not m: continue
    matched += 1
    name, pts = m
    best = float("inf"); bla = blo = 0
    for la, lo in pts:
        d = km(r["lat"], r["lon"], la, lo)
        if d < best: best = d; bla, blo = la, lo
    if best > MAX_SNAP_KM:
        too_far += 1  # 近くに該当の川が無い=誤マッチ/遠い別川 → 寄せない(安全)
        continue
    ins = inside_muni(bla, blo, sval(r,"prefectureName"), sval(r,"cityName"))
    if ins is False:
        kept_outside += 1
        continue
    snapped += 1
    corr_sum += best
    if best > 0.15: corrected_over150 += 1
    if len(examples) < 14:
        examples.append(f"{sval(r,'prefectureName')}{sval(r,'cityName')}「{sval(r,'sectionName')}」→{name}へ {best*1000:.0f}m補正")

print(f"河川敷系 {len(feat)}件 / 川名照合 {matched}件")
print(f"  スナップ適用: {snapped}件 (平均補正距離 {corr_sum/snapped*1000:.0f}m)" if snapped else "  スナップ適用: 0件")
print(f"    うち150m超ズレていた(街中に立っていた)を補正: {corrected_over150}件")
print(f"  適用見送り: 2km超で該当川なし {too_far}件 / スナップ先が市域外 {kept_outside}件 (どちらも安全側)")
print("\n補正の例:")
for e in examples: print("  " + e)
