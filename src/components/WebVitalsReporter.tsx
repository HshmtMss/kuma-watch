"use client";

import { useReportWebVitals } from "next/web-vitals";

// window.gtag の型は @/lib/analytics で一元宣言 (ambient なので import 不要)。

export default function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    if (typeof window === "undefined" || !window.gtag) return;
    const value =
      metric.name === "CLS" ? Math.round(metric.value * 1000) : Math.round(metric.value);
    window.gtag("event", metric.name, {
      value,
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
      event_category: "Web Vitals",
      event_label: metric.id,
      non_interaction: true,
    });
  });
  return null;
}
