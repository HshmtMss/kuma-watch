// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月26日 / mode: daily-report / 生成日: 2026-10-27
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-26-daily-report";
const TITLE = "2026年10月26日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月26日における国内のクマ関連事案は総計56件が確認された。山梨県市川三郷町での襲撃による人的被害や、神奈川県秦野市における放獣個体の再出没、山口県周南市でのイノシシ用箱わなへの錯誤捕獲などが報告されており、生活圏周辺での警戒が求められる。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-27",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-10-27",
  dateModified: "2026-10-31",
  author: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp",
  },
  mainEntityOfPage: `${SITE_URL}/research/${SLUG}`,
};

const REFERENCES: { title: string; url: string; site?: string }[] = [
    {
      "title": "2026年10月26日 山梨県市川三郷町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTFBBaVhwWlR0VkNZa3ZDb0dKdzVURnp4STJqOXBMalRjRWFJaVA4Q2kzV3FQQUM2bkk4RUg4a2thcEd5OWU5VjR1dGI2ejM5aVhoRm1MTnJBdDAweks0Z1JQd3ZJMkcxeDBaSmRWN1pDSVYwMFB3WVE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 神奈川県秦野市 弘法山公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5lTlhKTGxhTXYteEQwUFF0bUhDSnVuVmZWeWNqYWV0bG9GVlY4ejJHU3QzaFlPTHB6eXQwaW5fd0t0RnFxUXpRb1dKeUxNTExrdkE3Z0hLNFdIdG9OR192bFRRc0xqWFNFcGw0RHFwUzlPV2PSAXhBVV95cUxPdUNqcFRlQjhnN0NNaF91N0tDeFA1MUh1VkthaDVFTW9KN0pxdVRZdExMQjdINlduaWVTLUF1TG1LR2dvM1RHbUROSUFJMkVrNzdvMl9WcmkwVHdmMUMxWGF4NXNmTFJnb0EzOGNMN3Z5Vk84YmlEYmw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 山口県周南市 大字須万の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 島根県益田市 美都町三谷の市道八坂線、三谷集会所から800m付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 北海道枝幸町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 北海道枝幸町 音標小の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE5UODlCUzlJYkFpOEd4bzdWTTEyOWh1dXNOWGRVQWVuSW1qamNDcURGMHBCYW5ZY1I4dGZXTHd1LUs2YWNXZUhVNHlBbw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 北海道釧路町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 北海道釧路町 遠野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbHdYeW9UX2F5d1lfMU9lZ2lhblh6bEx2Ui1Ua3ktRzkwX01UZjZMYXJLSF81dGY2ZnhyV014RXczY1pFN09jUml5V1g5Wmp1YmRubGh5dmU0QUhtNTVEQ25oQnJpdkhOUXlkcU5vcGE0bEhJemxZZzNiWmQzMXAxa1pDeWtQbGRaSUhDYktqc2NOZHRTSjhqSlplbm3SAaIBQVVfeXFMTmlFWEh5bnJuaXhJLWREQV9CWDNpZEpYOFhKaTNhdkw1U2NRTjl5NzRVWVY5M3BtQUpFeVBjdHpwRm5GV2hIMHpuWDVQU3VuWEp6aTVoTEx5X3BBb1VnS1dRamt3Q2doNF9zOXZPU3pSMmZQcFpXWkxsWEc0VUY4VHpPYTVlb0p2dGltUi1iTTVVNHNPRTFONHctaU9tU0UxbVlB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 北海道中標津町 緑ケ丘の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNVEVMcEMxWEtSWGhYN3N6UWRFSmZ0UjZpZTdVcHhGZW1FbXhrR2k5MDV1YnVXa2c5UUw2ZERVUXNoTmlRTUd0S2xKMXJiRUtIcU84TU14ZjFyemQ1aGNpUXM4YVM2aF9CY2xmWTFiMHFJWDRzbkN2REpRUUxwSEhXZUJkc3loS3UxbjZPMjVWTU9JNHdndklOME5JRmphN0liX1Fub1JDLVpCZTJMN196aHNJUEJ2ODR3Q1pYZXlKNTB0YVE0UlY5ZzVLMUZPQU1CV0k5MjRxRWxlWjJ1eFAtUVE5U2NtTU9mMmpWMkFiWlpOUdIBogFBVV95cUxPZTdpckdUMTM0MmRZcXJITGtvY0c0ckpIVXVMeGtGODg4UVJrMXRyUEtqX1duNXFlN1lDcE16QlhsWDlmQU92UTJOdnRnZ3p0M1Q5emFYU1NMd19UX19kRDd0NlVqRkN4ZnZDQmhoWlRoS1NWRE1wekFZU0E0SHNmZDVvQURxNFNXQVdwaTMzZ0tSY1RiSXNLbUFsNXRUdndtd2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 秋田県小坂町 荒谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5qcXpvU3JLdHlPSkI4LWRCUHB3S1dLS1h0UmstX3kwLXc2NW9DTTFXWVhIMTlvWC1TWGxiWlpCWnlFcF80SzJUNXV0NlBKQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 秋田県小坂町 荒谷手紙沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPZmNkbHNVZnF5VW9sNXJGNEN4dWhOblFTN3hBeTdYT0xxZGtOWkpJWjVWSHFtb3hBUlNoNmtfMmpnV05ocmg1TlR6cHJYdUVVVmhBYTNQR3RIc0JTa2owM0NaS0lqV1JpamJ4YWJST2NySkRFUXdadlNvOFY5b2ZBSGxQNm5yRzhrTEFrdVRtQUxqNWpyS2hrSzB1ZjhMemQ3Y1d4Q1dNZHFLTzNGb0tF0gGiAUFVX3lxTE5iMXI2NGNhaFM0cmhVVi1QMzJ5TzA5Nmx0d3JaRWRBc1dKLXd4X3ZyTFMyRlVGc18zRmphX3J0dlNON1ZxNmVkWW9Sa1FsN25zV0c5RzVXeS15blY5S2wxNWxqWW9rU3haYWFDUl96Nlk4TVpLNkxCYjl5azlXQWUwUTdyaDJnS2x0N2lKTno0NDdSNjAzeEVDUmhiU3ktMXY3dw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 秋田県大仙市 神宮寺明徳の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQ1dJa2E5eWdpanFjR0thcEM2OXFzNmZPMnE0QUY4Sk1PVFpIVWQ3Q2g3aVk1VXVFOEJKOWN4LUtDR3FTNUY2OFF2UlVjSkdpdnRRbGV1cGoxLWhZZnpuOFdIZFQ4ZF9EMDBreGc0MV8tbG1ZN0Z5ZVZSYW5LSzZZMzZfdGlMZ0M3bFh0ZFUwSWlhZ2FEcURMM1RqQy3SAaIBQVVfeXFMTW04bnlMeFJUaGNhWHNRNUp1bzB6bWQzd0FwUHVjb3ZDNGVBZ2RYdnEzSUg1aTJRQmthRG5YdWsyb3ZUNUhERWRlTVFuNUxCNHRQMTRCRlplTjBZaVlTMGtWcVFRNXhhcElkWDd1T0s4eXVMVVRpZk5KVHloSkFYUWl2WlhYVm5KclBYM3AzY0t6RG40WVA3MzN1SERCTDJ2dURB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 青森県青森市 田茂木野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOSFR6WDlVZ2tkaUdqNGhMcS1QOXNsa0w5WlFhbng0Yk5WaU84RXFFNFZNNnlRTVp4NHFrU21PaS1GaEpPbk13eFliWnV5Y3VJeHZGUF8xX3F3cWcxUGRMc2MzVi04eEdmeE9UNTJWdDh3cmpoU21SM2lzaXItZ0xtdTM0Sm95cjFuOVNNSl9CbGxYZTlwTkV2RzJ4TkhLWDhiYlNNWnJySmhXa3lySE9J0gGiAUFVX3lxTE5CREh2VmRzblR4QWtsLXI1WnRBeVViMzlqU2VqNHJfNlNRdGFQQndCeDNtWjdJWlU3MTF2YTBEempKR0M5ek5LTWRINlhKOVg5WWhWQnRBMEJSUVUtRloxTFo5b2paSGR6cHpwZ2tsOTFPSWUxZHpkQ21Dem9rU2l5RnpSRjFuMzh3X0NoUzdndEF1T25OSVdJdjd5TThWN21jUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 宮城県気仙沼市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 埼玉県秩父市 荒川久那の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNV3JLaWlJeU9OMWJwcG8xVjdTUFFpZWxQNHhoV2prS2xCOHJMc1J6Yi1FYkoxYkEtNDZwYmlaQkpkNlpDb2xnbXpabE5naDJBSDRHWTJjM1kzZVhXbTh1cVVablNxQmhXQ2lQLU9aUFQ1bEY2ZjFqTjdUblRhbXlCOHdOcmFQX3RWY01Ma0pDRnNwYlhtU1hXalkyTDfSAaIBQVVfeXFMTnlCblktcnJvOUhybkhGTjhEelNVN3Bmc00yRUtWUENZTWtzM3JDdnpmYjZDXzA1RUpFdlJ0dHJKQ0ZIeHJUM2JwSnhTR1c1azhYOGNUcnBOSm5uS0gxMmItWC1OZmZlOEpfT19sd3EwNzA0TmFPdnFHU0k4a2RrRFVNZFZGdVFCMC16RzZHUUZXNUp4T3VtWERWNXlmMTRDQWhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 埼玉県秩父市 秩父市荒川久那地内（諸下橋から南西に約１５０ｍ付近）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 埼玉県秩父市 秩父市大滝地内（三十槌区宮平交差点から二瀬ダム方面へ約200ｍ付近）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 埼玉県小鹿野町 小鹿野町両神薄中郷橋南100ｍ付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 埼玉県小鹿野町 小鹿野町両神小森野沢バス停北西80ｍ付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 栃木県佐野市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBfWmgxX2FUS0xZSWJPTnVRRDFRcjNrMnkySTFhb1d0R3VDc21aejFmaW4yWE9YVXRKeGRjQVZmcVRlNWI2TElrNm9vVUgtT1JnT2FyUmFtdXlLdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 栃木県佐野市 船越町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 栃木県鹿沼市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 群馬県桐生市 広沢町4丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9aQnEzcEF0UXYyTkdsMWtrOE1FdGl0UzVOeFhWSTV6d0NsSEZ1M1lfT1dvampiUXoyN05Ga2hIVUF6MXE3NHlJTFQyczlfUUNIdGhzdXVCOG90Z0dLUFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 神奈川県秦野市 西田原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVnlNTkVZYVc2WFpKRUdzaWZ3c2YzUkRJd1pQNTBkRVhQNkM4cjhFTmRyWHdVeGdYcmpqY04tMFJob2xuQVFUU0dlNHg2V3BXYXlnVkJXaVBKaXVGN2oxaWh3MU53d040U1k0NGRsNnVCajhYNWM5UGF1WFMtZkM3RjNfS182dF9IU3dOZjkzeEVTNG1KTTVFUDNhX1PSAaIBQVVfeXFMTnlOWkNmWFU5MkhZOWZlbVg0U2prVl9YanFUV250dmMyTDA2NE42a0RkcjhIbGJad3U3S1dGTkdyNW5sNUJOODZ5NW96YjJWREZ2ckhza0FqV055bS1ibWJZaThPbnlDSnNSVFNGSWZYN29zdWlIMHQ0amxua0xPMWp1dms0b0IxeV96TnYyUFc2WDdBWUpmZjJLeDBrRE5SYmNB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 神奈川県相模原市 緑区寸沢嵐の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNTGxqVGJDZ2RpQUI0RlFaa2hRUEJ1bFdwbGV4ZW9hX25ISHBMeGlvNkg1M25KQzJaM1ZxSC1JaDZnak50MXJtS1NJNmptS25NUkdaUGhPQU1Yb1d6WWpvR256Z3pSM21uQ3pJWnAxT1BpU1pWLUlNTVZpaDhlXzRQcTRHU1dwbnozTU9pYzd3NHRRSUtjOVdCVTVOX003bGNPWG0zUXVCdEZQY08wRjNYbjNzcXMwV2lnNHNabGJQM3d0cFFENUEwUVdKZXNIUkU3QmdGdXV1c0haOFd3YXBaV2dZQkM1UXo0bi1kU0hZOEdFd9IBogFBVV95cUxPcld3S3RJdjJmX2ZLS2U4cE91R2Jqci12aFNxNHRnZnl5V1RYektURlZLSDBQY2VDcWN0MUlvdDh4c2VYX2czZHNHaTdVODRSVlAzSmFCclR6VTFxVUplMktHSHRnUVhxQzRrUGs3cFhmZWVMeXZiZ1JUVV9wbVViZ0dNRWNUQ25YUFZBeEpfdWZucDJGSnBHQzFiX1NVOUJHRUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 山梨県甲府市 太陽光発電所の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5XbDMwTWQ2eDBpRFRPTFY2R2dUVTNRWjhIZWl5azdfZFZNVGpyY3NNQnN6Q1NuU2lKbGxMSFJNcGhad1Y5U2VzVHlHTkZOUjFiZFZjckhyc1RrMFJOMzh2WG9uWmluZ18wQV9KWFRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 岐阜県高山市 上宝町蔵柱の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONy1WanJqMHN3WWV6c0h6cEsxZGREdm13WWRKT2xCYVF5SG0xUklTc0Z5X0ZYTUtyeUs1MENabDhxNEx1SWJ2NUdTcTd4RmpEZkZETFNXeTlkLXlrLTZiRHNQTnYzU0RZdmtOc01QNWg1QVlocVlvdjMtUmxTNXA5TG1sSHpqNmg1Z0dKaFppUTZxVDMwTmtjTGNLNVTSAaIBQVVfeXFMT3RvTFAxVTV3MUstSE91T1JuUHZWd25heTNKS1A1MUNCWGJOekJ2UmdvRmg5VmtWbU1WOWd4MEhWUUxLTWNvYzliVGJ3anJxclo4anZ5Q05jelo0UkhxSFdYdTRweXpiT19SRGt6TE1HX00tVTZSRVY5WDZQUG9PX3BtRDRZQUxGYjR3Sk5MRzVhOV94dFJidk0zSUtEUVlESXJR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 岐阜県本巣市 根尾高尾の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 静岡県富士宮市 下条の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 福井県高浜町 今寺の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 兵庫県養父市 大屋町宮垣の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMXU0OTkzV0pMbktJMzBVMkRhd2VHLVVnVktJc0ZNd1VMMzg2MDdGcW5sdUNBMm1adHZwVnc1MmhyLVdVd3RyZlIzRUxIZXdIcHhFQWk0dlNoejVCY2g4cUlDWGhOQ2cwSlBhckRCWWY1MF9MSS1ld3A1YkdXTlFVbEhLa29kbHByVUV0R2I4enBDU1dhcmtEX1J5d23SAaIBQVVfeXFMTlhtUkZLb095SmVFNXB0dERPNXFXaTFtbHl1ekQyNktFQm43MjJ0dmx4cENZTXd6alMwQXVOMHMxcWxSOHhSNjYxQ2RzUGloS1Y1NFNvN05wLXgzZWFMLUg3XzZ6UFpFcHR6RGtsSUZ2OE5wdXcxYnFiQm5YRTh3ZXQ3QU9LYl96dlpyZi1UVVFIVE9pYTNHQXpjalJDOFQwRXVR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 兵庫県養父市 建屋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSW1HaDBkM1psajV1UGRkNkRPX01Ick9BUDJfV200R2dpTHQ0ejgyNGFmQndvblNhelZYazNtVG00V0hTSzdVend6LU90ZmJMeEZIdm82NE5ENTFnS1BEdVZqVDFHckpicmt4SW9SRDB3d2pZbWpKa2ZoYnFXYWRnblcyVU5qMktZckh1QmJCS1NTSFhSdHp1NGlFT3LSAaIBQVVfeXFMTkVtMTRwSFNyUzhtcUFRUlNJaHVPRkFyY09HRkdjbEdlZHEyWnpJMDIteEpNVlI0ME1PRFI1Zm1lMC1HVTBZWEhOMG5HNWk4WFpZSHhVUmlyeTRaS2k0RjhodWpNSXZxUUozbEcxNlBlQU9ld01uTVU2aGo2eFZEaDg5UEpBdWdxcl8wd2RfOGozS0ZUMUkzWGhjZFI3ZjE1THh3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 兵庫県加西市 両月町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOdUNkODFCUlNIdG1yY1U4ZFhrc3R4aDZWWTRTQlJXOEhaY1E2azdMZ3ZaR1RXTExoWDYtMERoUkFSVWlZQnNCTEFfVXFvNkZ6QmpwR19SenViT1lHQ0ZHRDJfV3F6eGw2OHIzNGhOU3RfcGJpaWc0Y1VSZ1hneWVYMHFjS3N4blVkbFdqdDFZbmNUZWdVTmQxY2NEVE1uUmxYc1HSAaIBQVVfeXFMTnVDZDgxQlJTSHRtcmNVOGRYa3N0eGg2Vlk0U0JSVzhIWmNRNms3TGd2WkdUV0xMaFg2LTBEaFJBUlVpWUJzQkxBX1VxbzZGekJqcEdfUnp1Yk9ZR0NGR0QyX1dxenhsNjhyMzRoTlN0X3BiaWlnNGNVUmdYZ3llWDBxY0tzeG5VZGxXanQxWW5jVGVnVU5kMWNjRFRNblJsWHNR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 奈良県五條市 西吉野町宗川野の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 奈良県黒滝村 寺戸の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 奈良県黒滝村 桂原の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 京都府京丹後市 網野町高橋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNVkpoWHNfNHM0ZWhpQjlSSVQxV09CcFJFLTlDeE1RWm92S1FyRVoxUTlGNVF4Mnh1M0VPWXlhbGZFdURxUVEyUVdmaEtJVzN4MXo4UUh6UEd4UTlGdDA5SV9nY2xIdTczTmpsQTdSeFlfUjNQTVJrTVRWZG5zRHhxb3RSZVJ2WEt1MzFtX1IzaE9GM25DRkF1cFR3S3FZWVVTbWfSAaIBQVVfeXFMTVZKaFhzXzRzNGVoaUI5UklUMVdPQnBSRS05Q3hNUVpvdktRckVaMVE5RjVReDJ4dTNFT1l5YWxmRXVEcVFRMlFXZmhLSVczeDF6OFFIelBHeFE5RnQwOUlfZ2NsSHU3M05qbEE3UnhZX1IzUE1Sa01UVmRuc0R4cW90UmVSdlhLdTMxbV9SM2hPRjNuQ0ZBdXBUd0txWVlVU21n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 和歌山県橋本市 須河の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 山口県周南市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1PODNoNHA2NzBPNUFTV0VRZkl4dUR0aG5sbDdZQmNsWjlZU0N3aVQwZ3N1MnFCYTl0RW9hT0RGN1ZxX05hZ0YtaXJWdGVHUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 山口県周南市 鹿野上の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 山口県周南市 大字鹿野上の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 島根県浜田市 美術館付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFA0MjFWWTgzMGlKZGEzTUdJRjRuWjJsOUt0YUdtaGlkZmVLVGpaakU2N2Z5REJFX2J5eUY3RVJmdEQ4WF9ZQ1ExTnNzeWt6WFRzbFVlcUJ5bkh6QkdVZVN4TDJfQVFnTGstS1BUd2NURE5Qd01LSDlnUE1DX2dZODQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月26日 島根県浜田市 浜田市三隅町古市場の石正美術館の北側約50メートル付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 鳥取県八頭郡八頭町 茂田の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 鳥取県西伯郡伯耆町 清原の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 鳥取県八頭郡智頭町 大屋の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 岡山県美作市 瀬戸の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月26日 広島県廿日市市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1lTVdhYlMydmNFQXFoNXVfOVJROGktUDFrMVFKYUJlakVwS0ZkLTk1MW5BYThpQnMwbkZuaWllWjVtSUJhZGI2SzFnNA?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":12},{"pref":"埼玉県","count":6},{"pref":"山口県","count":4},{"pref":"栃木県","count":3},{"pref":"島根県","count":3},{"pref":"鳥取県","count":3},{"pref":"奈良県","count":3},{"pref":"神奈川県","count":3},{"pref":"兵庫県","count":3},{"pref":"秋田県","count":3},{"pref":"岐阜県","count":2},{"pref":"山梨県","count":2},{"pref":"宮城県","count":1},{"pref":"静岡県","count":1},{"pref":"岡山県","count":1},{"pref":"和歌山県","count":1},{"pref":"福井県","count":1},{"pref":"青森県","count":1},{"pref":"京都府","count":1},{"pref":"群馬県","count":1},{"pref":"広島県","count":1}];

export default function ResearchPage() {
  return (
    <PageShell title={TITLE}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <div className="not-prose mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-800">
          日次レポート
        </span>
        <span>対象期間: 2026年10月26日</span>
        <span>·</span>
        <span>公開: 2026-10-27</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={56}
        periodLabel={"2026年10月26日"}
      />

      <h2>本日の概況と主要事案</h2>
      <p>2026年10月26日の集計において、国内で報告されたクマ関連事案の総件数は56件であった。都道府県別の内訳では北海道が12件と最も多く、次いで埼玉県が6件、山口県が4件、栃木県、島根県、鳥取県、奈良県、神奈川県、兵庫県、秋田県が各3件となっている。</p>
      <p>本日の特筆すべき主要事案として、山梨県市川三郷町においてクマによる襲撃が発生し、93歳の女性が負傷した事案が確認された（※1）。人身被害が発生した地域では、人的被害拡大防止のための警戒が急務となる。また、神奈川県秦野市の弘法山公園周辺においては、過去に放したクマが再び出没した事例が報告されている（※2）。放獣後の個体が公園緑地に再度侵入した事例であり、個体管理やモニタリングのあり方を検討する上で重要な記録である。さらに、山口県周南市大字須万では、イノシシ用の箱わなにクマが錯誤捕獲された事案が報告されている（※3）。</p>
      <h2>主要事案の一覧</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">発生場所・状況</th>
              <th className="px-3 py-2">事案内容</th>
              <th className="px-3 py-2">記録ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">山梨県</td><td className="px-3 py-2 text-xs">市川三郷町</td><td className="px-3 py-2 text-xs">詳細地点の記録なし</td><td className="px-3 py-2 text-xs">クマ襲撃、93歳女性けが</td><td className="px-3 py-2 text-xs">（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">神奈川県</td><td className="px-3 py-2 text-xs">秦野市</td><td className="px-3 py-2 text-xs">弘法山公園周辺</td><td className="px-3 py-2 text-xs">放したクマが再び出没</td><td className="px-3 py-2 text-xs">（※2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">周南市</td><td className="px-3 py-2 text-xs">大字須万</td><td className="px-3 py-2 text-xs">イノシシ用箱わなに錯誤捕獲</td><td className="px-3 py-2 text-xs">（※3）</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">益田市</td><td className="px-3 py-2 text-xs">美都町三谷 市道八坂線付近</td><td className="px-3 py-2 text-xs">19:00頃 3頭目撃</td><td className="px-3 py-2 text-xs">（※4）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別出没状況の分析</h2>
      <h3>北海道</h3>
      <p>北海道では本日最多となる12件が計上された。学校周辺での出没が複数記録されている。枝幸町では午後4時00分頃に音標小学校付近で目撃が報告されたほか（※5）、音標小にヒグマが出没したと報じられた記録も存在する（※6）。また、釧路町では午前10時頃に遠矢小学校から東遠野地区へ向かう道の途中で茂みへ逃げていく熊らしきものが目撃され（※7）、遠野地区でも出没の可能性が報告されている（※8）。さらに中標津町緑ケ丘でもクマの出没が確認されており（※9）、道内各所の文教施設や生活環境の至近において行動が確認されている。</p>
      <h3>東北地方</h3>
      <p>東北地方では秋田県で3件のほか、青森県や宮城県で事案が記録されている。秋田県小坂町荒谷の畑においてクマ1頭が目撃されたほか（※10）、同町荒谷手紙沢でも出没が確認されている（※11）。また大仙市神宮寺明徳でも出没が報告された（※12）。青森県では青森市田茂木野で出没があり（※13）、宮城県気仙沼市でも記録が確認されている（※14）。農地や集落縁辺部での出現が目立っている。</p>
      <h3>関東地方</h3>
      <p>関東地方では埼玉県で6件、栃木県と神奈川県で各3件、群馬県でも出没が確認された。埼玉県では秩父市荒川久那で出没痕跡が報告され（※15）、同地内の諸下橋から南西約150メートルの地点でも痕跡が発見されている（※16）。秩父市大滝の三十槌区宮平交差点から二瀬ダム方面へ約200メートルの地点では地元住民による目撃があった（※17）。また小鹿野町両神薄の中郷橋南100メートル付近（※18）、および両神小森の野沢バス停北西80メートル付近（※19）で地元住民による痕跡発見が続いた。栃木県佐野市では出没情報があり（※20）、同市船越町の船越橋から北約1.2キロメートルの農地で目撃された（※21）。鹿沼市でも記録がある（※22）。群馬県桐生市広沢町4丁目でクマが目撃された（※23）。神奈川県では秦野市の弘法山公園周辺での再出没（※2）に加え、西田原での出没の可能性（※24）、相模原市緑区寸沢嵐での痕跡発見が報告されている（※25）。</p>
      <h3>中部地方</h3>
      <p>中部地方では人身被害が発生した山梨県をはじめ、岐阜県、静岡県、福井県で事案が記録された。山梨県では市川三郷町での襲撃・負傷事案（※1）のほか、甲府市の太陽光発電所でクマが目撃されている（※26）。岐阜県では高山市上宝町蔵柱での出没（※27）、本巣市根尾高尾の道路において15時から16時にかけての事案が確認された（※28）。静岡県富士宮市下条の西の原下集会所南60メートル付近で目撃があり（※29）、福井県高浜町今寺では16時55分に成獣1頭が目撃されている（※30）。インフラ施設や集落集会所付近への接近が認められる。</p>
      <h3>関西地方</h3>
      <p>関西地方では兵庫県と奈良県で各3件のほか、京都府や和歌山県で報告されている。兵庫県では養父市の大屋町宮垣（※31）および建屋（※32）で出没が確認され、加西市両月町でも出没の可能性が報じられた（※33）。奈良県では五條市西吉野町宗川野で午前9時00分（※34）、黒滝村寺戸で10時30分（※35）、同村桂原で15時40分（※36）と、時間帯ごとの位置情報が記録されている。京都府京丹後市網野町高橋でクマの出没があり（※37）、和歌山県橋本市須河では映像と現地調査により1頭が確認された（※38）。</p>
      <h3>中国地方</h3>
      <p>中国地方では山口県で4件、島根県と鳥取県で各3件、岡山県や広島県でも事案が記録された。山口県周南市では大字須万での錯誤捕獲（※3）のほか、柿の木に登るクマの目撃（※39）、鹿野上での目撃（※40）、大字鹿野上でのカキの木に登るクマの目撃（※41）が報告されている。島根県浜田市三隅町古市場の石正美術館付近では午後3時50分頃に1頭が目撃され（※42・43）、益田市美都町三谷の市道八坂線・三谷集会所から800メートル付近では午後7時頃に3頭が目撃された（※4）。鳥取県では八頭町茂田において柿の食害および糞が確認され（※44）、伯耆町清原では子グマの出現が記録されている（※45）。智頭町大屋（※46）、岡山県美作市瀬戸（※47）、広島県廿日市市（※48）でも情報が寄せられている。</p>
      <h3>四国・九州地方</h3>
      <p>四国地方および九州地方においては、本日対象となる記録は報告されていない。</p>
      <h2>リスク評価</h2>
      <p>本日の収集データに基づき、出没動向と潜在的リスク要因について考察する。</p>
      <ul>
        <li>人口圏・生活インフラへの接近: 小学校周辺（北海道枝幸町・釧路町）、公園（神奈川県秦野市）、美術館付近（島根県浜田市）、集会所周辺（静岡県富士宮市、島根県益田市）、バス停（埼玉県小鹿野町）、太陽光発電所（山梨県甲府市）など、日常的な利用施設や生活導線への接近事例が極めて多い。</li>
        <li>果樹等の誘引物への依存: 山口県周南市におけるカキの木への登攀行動や、鳥取県八頭町における柿の食害および糞の確認など、人里周辺に残存する果樹が強い誘引要因として機能している状況が示されている。</li>
        <li>個体行動と警戒時間帯: 島根県益田市での3頭同時の目撃や鳥取県伯耆町での子グマの目撃のように、母子連れを含む複数頭での活動が記録されている。また、早朝から夜間（9時00分から19時00分頃まで）にかけて広範囲な時間帯で目撃や痕跡が報告されている。</li>
      </ul>
      <p>山梨県での重傷人身被害の発生を踏まえると、生活圏近傍における遭遇リスクは極めて高い状態にある。誘引物となる未収穫果樹の適切な管理や、通学路・集会施設周辺での痕跡確認時の情報共有など、現場に即した安全管理策の徹底が不可欠である。</p>

      <p className="text-sm text-stone-500">2026 年 10 月 31 日 改訂：同じ出没の重複を束ね、その後に集まった記録も含めて、本文を作り直しました。件数は公開時と異なることがあります。</p>

      {REFERENCES.length > 0 && (
        <>
          <h2>参考文献</h2>
          <ol className="text-sm">
            {REFERENCES.map((r, idx) => (
              <li key={idx}>
                {r.url.startsWith("http") ? (
                  <a href={r.url} target="_blank" rel="noopener noreferrer">
                    {r.title}
                  </a>
                ) : (
                  // 取り込み元 ID (例: iwate-morioka-mymap) は URL ではないのでリンクにしない
                  // (相対リンク /research/<id> になり 404 を生むため)。
                  r.title
                )}
                {r.site && <span className="text-stone-500"> — {r.site}</span>}
              </li>
            ))}
          </ol>
        </>
      )}

      <ResearchPlaceLinks slug={SLUG} />

      <hr className="my-10 border-stone-200" />

      <div className="not-prose rounded-2xl border border-stone-200 bg-stone-50 p-5 text-sm leading-relaxed text-stone-700">
        <div className="mb-2 font-semibold text-stone-900">監修・編集</div>
        <dl className="grid grid-cols-[6rem_1fr] gap-y-1 text-xs sm:text-sm">
          <dt className="text-stone-500">執筆</dt>
          <dd>AI（大規模言語モデル）による情報集約</dd>
          <dt className="text-stone-500">監修</dt>
          <dd>獣医工学ラボ（リサーチコーディネート株式会社）</dd>
          <dt className="text-stone-500">対象期間</dt>
          <dd>2026年10月26日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-27</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-31</dd>
          <dt className="text-stone-500">データ範囲</dt>
          <dd>くまウォッチ sightings.json (内部集計データのみ)</dd>
        </dl>
        <p className="mt-3 text-xs text-stone-600">
          本記事は、くまウォッチが収集した出没データを LLM が分析・文章化した内容を、獣医工学ラボの獣医師が確認・編集の上で公開しています。事実関係に誤りを発見された場合は{" "}
          <a
            href="mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20研究記事の訂正"
            className="text-blue-700 underline"
          >
            contact@research-coordinate.co.jp
          </a>
          {" "}までご連絡ください。
        </p>
      </div>
    </PageShell>
  );
}
