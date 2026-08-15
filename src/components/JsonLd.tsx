/**
 * JSON-LD 構造化データを <script type="application/ld+json"> で埋め込むサーバ部品。
 * data は自前の値のみ（ユーザー入力なし）だが、念のため "<" をエスケープして
 * </script> による早期終了を防ぐ。
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
