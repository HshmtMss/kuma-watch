"use client";

import { useReportWebVitals } from "next/web-vitals";

type Gtag = (
  command: "event",
  action: string,
  params: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

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
