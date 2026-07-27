#!/usr/bin/env python3
"""河川ジオメトリ辞書を国土数値情報 W05(河川) から生成する(オフライン・一回)。

目的:
  「河川敷/川沿い」等の報道出没は、Nominatim が認識地名(駅・町名)に座標を
  寄せるため実際の川から数百m〜1km ずれ、街中にピンが立つ(実測 400〜850m)。
  実際の川へ寄せる(snap)ための基礎データを、公式・安定な国土数値情報 W05
  (河川・シェープファイル)から作る。取り込み時に外部APIを叩かない=安定。

出力: src/data/river-geometry.json
  { "県名": { "梅田川": [[lat,lon],...], ... }, ... }
  出没テキストに名前が現れる川だけを収録し、約100m間隔に間引く(サイズ抑制)。

実行: python3 scripts/build-river-geometry.py
  再実行で未取得の県だけ追加取得(冪等)。
"""
import json, math, os, sys, tempfile, urllib.request, zipfile
import shapefile  # pyshp

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "src", "data", "river-geometry.json")
SIGHTINGS = os.path.join(ROOT, "public", "data", "sightings.json")
W05_URL = "https://nlftp.mlit.go.jp/ksj/gml/data/W05/W05-07/W05-07_{code}_GML.zip"

PREF_CODE = {
    "北海道":"01","青森県":"02","岩手県":"03","宮城県":"04","秋田県":"05",
    "山形県":"06","福島県":"07","茨城県":"08","栃木県":"09","群馬県":"10",
    "埼玉県":"11","千葉県":"12","東京都":"13","神奈川県":"14","新潟県":"15",
    "富山県":"16","石川県":"17","福井県":"18","山梨県":"19","長野県":"20",
    "岐阜県":"21","静岡県":"22","愛知県":"23","三重県":"24","滋賀県":"25",
    "京都府":"26","大阪府":"27","兵庫県":"28","奈良県":"29","和歌山県":"30",
    "鳥取県":"31","島根県":"32","岡山県":"33","広島県":"34","山口県":"35",
    "徳島県":"36","香川県":"37","愛媛県":"38","高知県":"39","福岡県":"40",
    "佐賀県":"41","長崎県":"42","熊本県":"43","大分県":"44","宮崎県":"45",
    "鹿児島県":"46","沖縄県":"47",
}

FEAT = ("河川敷", "川沿い", "川原", "堤防", "沿岸")


def sval(r, k):
    v = r.get(k, "")
    return v if isinstance(v, str) else ""


def km(a, b, c, e):
    t = math.pi / 180
    x = (c - a) * t
    y = (e - b) * t
    return 2 * 6371 * math.asin(math.sqrt(
        math.sin(x/2)**2 + math.cos(a*t)*math.cos(c*t)*math.sin(y/2)**2))


def resample(points, step_m=0.1):
    if len(points) <= 2:
        return points
    out = [points[0]]
    acc = 0.0
    for i in range(1, len(points)):
        acc += km(points[i-1][0], points[i-1][1], points[i][0], points[i][1])
        if acc >= step_m:
            out.append(points[i]); acc = 0.0
    out.append(points[-1])
    return out


def main():
    recs = json.load(open(SIGHTINGS, encoding="utf8"))["records"]
    # 対象: 河川敷系の news がある県。県ごとの出没テキストも集める(川名照合用)。
    pref_texts = {}
    for r in recs:
        if r.get("geoInconsistent") or r.get("source") != "news":
            continue
        if not isinstance(r.get("lat"), (int, float)):
            continue
        text = sval(r, "sectionName") + sval(r, "comment")
        if not any(w in text for w in FEAT):
            continue
        p = sval(r, "prefectureName")
        pref_texts.setdefault(p, []).append(text)

    out = json.load(open(OUT, encoding="utf8")) if os.path.exists(OUT) else {}
    prefs = sorted(pref_texts, key=lambda p: -len(pref_texts[p]))
    for pref in prefs:
        if pref in out:
            continue
        code = PREF_CODE.get(pref)
        if not code:
            print(f"  ? {pref}: 県コード不明"); continue
        alltext = "".join(pref_texts[pref])
        try:
            with tempfile.TemporaryDirectory() as tmp:
                zp = os.path.join(tmp, "w05.zip")
                urllib.request.urlretrieve(W05_URL.format(code=code), zp)
                with zipfile.ZipFile(zp) as z:
                    z.extractall(tmp)
                shp = next(f for f in os.listdir(tmp) if f.endswith("_Stream.shp"))
                sf = shapefile.Reader(os.path.join(tmp, shp), encoding="cp932")
                rivers = {}
                for sr in sf.iterShapeRecords():
                    name = str(sr.record["W05_004"]).strip()
                    if len(name) < 2 or name not in alltext:
                        continue  # 出没テキストに現れる川だけ収録
                    # shapefile points are (lon,lat) -> store [lat,lon]
                    pts = [[round(p[1], 5), round(p[0], 5)] for p in sr.shape.points]
                    rivers.setdefault(name, []).extend(pts)
                for name in list(rivers):
                    rivers[name] = resample(rivers[name])
                out[pref] = rivers
                json.dump(out, open(OUT, "w", encoding="utf8"), ensure_ascii=False)
                print(f"  ✓ {pref}(≒{code}): 収録河川 {len(rivers)}本 / 出没{len(pref_texts[pref])}件")
        except Exception as e:
            print(f"  ✗ {pref}: {e}")

    print(f"\n完了: {len([p for p in prefs if p in out])}/{len(prefs)}県")


if __name__ == "__main__":
    main()
