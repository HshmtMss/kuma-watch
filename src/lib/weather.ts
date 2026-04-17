export function weatherCodeLabel(code: number | null | undefined): string {
  if (code == null) return "—";
  if (code === 0) return "快晴";
  if (code <= 3) return "晴れ〜曇り";
  if (code <= 48) return "霧";
  if (code <= 57) return "霧雨";
  if (code <= 67) return "雨";
  if (code <= 77) return "雪";
  if (code <= 86) return "雪";
  if (code <= 99) return "雷雨";
  return "—";
}

export function weatherCodeEmoji(code: number | null | undefined): string {
  if (code == null) return "⛅";
  if (code === 0) return "☀️";
  if (code <= 3) return "🌤️";
  if (code <= 48) return "🌫️";
  if (code <= 57) return "🌦️";
  if (code <= 67) return "🌧️";
  if (code <= 77) return "🌨️";
  if (code <= 86) return "❄️";
  if (code <= 99) return "⛈️";
  return "⛅";
}
