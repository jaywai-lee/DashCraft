"use client";

import { useReportWebVitals } from "next/web-vitals";
import { reportWebVitalMetric } from "@/shared/lib/monitoring/webVitals";

export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    reportWebVitalMetric(metric);
  });

  return null;
}
