import * as Sentry from "@sentry/nextjs";

export type WebVitalName = "CLS" | "FCP" | "FID" | "INP" | "LCP" | "TTFB";
export type WebVitalRating = "good" | "needs-improvement" | "poor";

export interface WebVitalMetricPayload {
  id: string;
  name: string;
  value: number;
  delta?: number;
  navigationType?: string;
}

const THRESHOLDS: Record<WebVitalName, [number, number]> = {
  LCP: [2500, 4000],
  INP: [200, 500],
  CLS: [0.1, 0.25],
  FCP: [1800, 3000],
  TTFB: [800, 1800],
  FID: [100, 300],
};

const CORE_VITALS = new Set<WebVitalName>(["LCP", "INP", "CLS"]);
const reportedPoorMetrics = new Set<string>();

export function evaluateWebVitalRating(
  name: string,
  value: number,
): WebVitalRating {
  const bounds = THRESHOLDS[name as WebVitalName];
  if (!bounds) return "good";

  const [goodMax, poorMin] = bounds;
  if (value <= goodMax) return "good";
  if (value <= poorMin) return "needs-improvement";
  return "poor";
}

export function reportWebVitalMetric(metric: WebVitalMetricPayload): void {
  const rating = evaluateWebVitalRating(metric.name, metric.value);
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "unknown";
  const roundedValue =
    metric.name === "CLS"
      ? Number(metric.value.toFixed(4))
      : Math.round(metric.value);

  if (process.env.NODE_ENV === "development") {
    console.info(
      `[Web Vitals] ${metric.name}: ${roundedValue}${metric.name === "CLS" ? "" : "ms"} (${rating}) @ ${pathname}`,
    );
  }

  Sentry.setMeasurement(
    metric.name,
    metric.value,
    metric.name === "CLS" ? "" : "millisecond",
  );

  Sentry.addBreadcrumb({
    category: "web-vitals",
    message: `${metric.name}: ${roundedValue} (${rating})`,
    level: rating === "poor" ? "warning" : "info",
    data: {
      id: metric.id,
      name: metric.name,
      value: roundedValue,
      rating,
      pathname,
      navigationType: metric.navigationType,
    },
  });

  const dedupeKey = `${pathname}:${metric.name}`;
  if (
    CORE_VITALS.has(metric.name as WebVitalName) &&
    rating === "poor" &&
    !reportedPoorMetrics.has(dedupeKey)
  ) {
    reportedPoorMetrics.add(dedupeKey);

    Sentry.withScope((scope) => {
      scope.setLevel("warning");
      scope.setTag("vital_name", metric.name);
      scope.setTag("vital_rating", rating);
      scope.setTag("route", pathname);
      scope.setContext("web_vital", {
        id: metric.id,
        value: roundedValue,
        delta: metric.delta,
        navigationType: metric.navigationType,
      });
      Sentry.captureMessage(
        `[Web Vitals Poor] ${metric.name} (${roundedValue}) on ${pathname}`,
      );
    });
  }
}
