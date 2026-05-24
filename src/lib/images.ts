export function brightnessPercent(value: unknown, fallback = 100): string {
  const numericValue = typeof value === "number" && Number.isFinite(value) ? value : fallback;
  const clampedValue = Math.min(160, Math.max(20, Math.round(numericValue)));

  return `${clampedValue}%`;
}

export function textColorValue(value: unknown, fallback = "#fff7eb"): string {
  if (typeof value === "string" && /^#[0-9a-fA-F]{3,8}$/.test(value)) {
    return value;
  }

  return fallback;
}
