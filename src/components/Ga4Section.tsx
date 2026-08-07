"use client";

import { useCallback } from "react";
import { useAsync } from "@/hooks/useAsync";
import { getGa4Summary, getTopPages } from "@/lib/api";
import { formatNumber } from "@/lib/format";
import { SummaryCard } from "./SummaryCard";
import { Table } from "./Table";
import { BarChartCard } from "./BarChartCard";
import { ErrorBlock, EmptyBlock } from "./StateBlock";
import { Spinner } from "./Spinner";

export function Ga4Section({ property }: { property: string }) {
  const summary = useAsync(
    useCallback(() => getGa4Summary(property), [property]),
    `ga4-summary-${property}`
  );
  const pages = useAsync(
    useCallback(() => getTopPages(property), [property]),
    `ga4-pages-${property}`
  );

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-foreground">Google Analytics</h2>

      {summary.status === "loading" && <Spinner />}
      {summary.status === "error" && (
        <ErrorBlock message={summary.error} onRetry={summary.refetch} />
      )}
      {summary.status === "success" && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <SummaryCard
            label="Sessions"
            value={formatNumber(summary.data.data.sessions)}
          />
          <SummaryCard
            label="New Users"
            value={formatNumber(summary.data.data.new_users)}
          />
          <SummaryCard
            label="Page Views"
            value={formatNumber(summary.data.data.page_views)}
          />
          <SummaryCard
            label="Total Users"
            value={formatNumber(summary.data.data.total_users)}
          />
        </div>
      )}

      {pages.status === "loading" && <Spinner />}
      {pages.status === "error" && (
        <ErrorBlock message={pages.error} onRetry={pages.refetch} />
      )}
      {pages.status === "success" && pages.data.rows.length === 0 && (
        <EmptyBlock message="No page view data yet for this property." />
      )}
      {pages.status === "success" && pages.data.rows.length > 0 && (
        <>
          <BarChartCard
            data={[...pages.data.rows]
              .sort((a, b) => b.views - a.views)
              .slice(0, 10)}
            dataKey="views"
            labelKey="page"
            valueLabel="Views"
          />
          <Table
            headers={["Page", "Views"]}
            rows={pages.data.rows.map((r) => [r.page, formatNumber(r.views)])}
          />
        </>
      )}
    </section>
  );
}
