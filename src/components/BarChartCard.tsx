"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function truncate(value: string, max = 24) {
  return value.length > max ? `${value.slice(0, max)}…` : value;
}

export function BarChartCard({
  data,
  dataKey,
  labelKey,
  valueLabel,
}: {
  data: Record<string, string | number>[];
  dataKey: string;
  labelKey: string;
  valueLabel: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <ResponsiveContainer width="100%" height={Math.max(160, data.length * 32)}>
        <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
          <XAxis type="number" stroke="var(--muted)" fontSize={12} allowDecimals={false} />
          <YAxis
            type="category"
            dataKey={labelKey}
            width={160}
            stroke="var(--muted)"
            fontSize={12}
            tickFormatter={(v: string) => truncate(v)}
          />
          <Tooltip
            formatter={(value) => [value, valueLabel] as [number, string]}
            contentStyle={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              fontSize: 12,
            }}
          />
          <Bar dataKey={dataKey} fill="var(--brand)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
