export function formatNumber(n: number) {
  return new Intl.NumberFormat("en-US").format(n);
}

export function formatPercent(n: number) {
  return `${(n * 100).toFixed(2)}%`;
}

export function formatPosition(n: number) {
  return n.toFixed(1);
}
