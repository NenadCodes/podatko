"use client";

import { useCallback } from "react";
import { useAsync } from "@/hooks/useAsync";
import { getSearchConsoleSummary, getTopQueries } from "@/lib/api";
import { formatNumber, formatPercent, formatPosition } from "@/lib/format";
import { SummaryCard } from "./SummaryCard";
import { Table } from "./Table";
import { BarChartCard } from "./BarChartCard";
import { ErrorBlock, EmptyBlock } from "./StateBlock";
import { Spinner } from "./Spinner";

export function SearchConsoleSection({ property }: { property: string }) {
  const summary = useAsync(
    useCallback(() => getSearchConsoleSummary(property), [property]),
    `gsc-summary-${property}`
  );
  const queries = useAsync(
    useCallback(() => getTopQueries(property), [property]),
    `gsc-queries-${property}`
  );

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-foreground">Search Console</h2>

      {summary.status === "loading" && <Spinner />}
      {summary.status === "error" && (
        <ErrorBlock message={summary.error} onRetry={summary.refetch} />
      )}
      {summary.status === "success" && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <SummaryCard
            label="Clicks"
            value={formatNumber(summary.data.data.total_clicks)}
          />
          <SummaryCard
            label="Impressions"
            value={formatNumber(summary.data.data.total_impressions)}
          />
          <SummaryCard
            label="Avg. CTR"
            value={formatPercent(summary.data.data.avg_ctr)}
          />
          <SummaryCard
            label="Avg. Position"
            value={formatPosition(summary.data.data.avg_position)}
          />
        </div>
      )}

      {queries.status === "loading" && <Spinner />}
      {queries.status === "error" && (
        <ErrorBlock message={queries.error} onRetry={queries.refetch} />
      )}
      {queries.status === "success" && queries.data.rows.length === 0 && (
        <EmptyBlock message="No query data yet for this property." />
      )}
      {queries.status === "success" && queries.data.rows.length > 0 && (
        <>
          <BarChartCard
            data={[...queries.data.rows]
              .sort((a, b) => b.clicks - a.clicks)
              .slice(0, 10)}
            dataKey="clicks"
            labelKey="query"
            valueLabel="Clicks"
          />
          <Table
            headers={["Query", "Clicks", "Impressions", "CTR"]}
            rows={queries.data.rows.map((r) => [
              r.query,
              formatNumber(r.clicks),
              formatNumber(r.impressions),
              formatPercent(r.ctr),
            ])}
          />
        </>
      )}
    </section>
  );
}
