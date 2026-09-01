"use client";

import { useCallback } from "react";
import { useAsync } from "@/hooks/useAsync";
import { getMetaSummary, getTopCampaigns } from "@/lib/api";
import { formatNumber, formatPercent, formatCurrency } from "@/lib/format";
import { SummaryCard } from "./SummaryCard";
import { Table } from "./Table";
import { BarChartCard } from "./BarChartCard";
import { ErrorBlock, EmptyBlock } from "./StateBlock";
import { Spinner } from "./Spinner";

export function MetaSection({ property }: { property: string }) {
  const summary = useAsync(
    useCallback(() => getMetaSummary(property), [property]),
    `meta-summary-${property}`
  );
  const campaigns = useAsync(
    useCallback(() => getTopCampaigns(property), [property]),
    `meta-campaigns-${property}`
  );

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-foreground">Meta Ads</h2>

      {summary.status === "loading" && <Spinner />}
      {summary.status === "error" && (
        <ErrorBlock message={summary.error} onRetry={summary.refetch} />
      )}
      {summary.status === "success" && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <SummaryCard
            label="Spend"
            value={formatCurrency(summary.data.data.total_spend)}
          />
          <SummaryCard
            label="Impressions"
            value={formatNumber(summary.data.data.total_impressions)}
          />
          <SummaryCard
            label="Clicks"
            value={formatNumber(summary.data.data.total_clicks)}
          />
          <SummaryCard
            label="Avg. CTR"
            value={formatPercent(summary.data.data.avg_ctr)}
          />
        </div>
      )}

      {campaigns.status === "loading" && <Spinner />}
      {campaigns.status === "error" && (
        <ErrorBlock message={campaigns.error} onRetry={campaigns.refetch} />
      )}
      {campaigns.status === "success" && campaigns.data.rows.length === 0 && (
        <EmptyBlock message="No Meta Ads data yet for this property." />
      )}
      {campaigns.status === "success" && campaigns.data.rows.length > 0 && (
        <>
          <BarChartCard
            data={[...campaigns.data.rows]
              .sort((a, b) => b.spend - a.spend)
              .slice(0, 10)}
            dataKey="spend"
            labelKey="campaign_name"
            valueLabel="Spend"
          />
          <Table
            headers={["Campaign", "Spend", "Impressions", "Clicks", "CTR"]}
            rows={campaigns.data.rows.map((r) => [
              r.campaign_name,
              formatCurrency(r.spend),
              formatNumber(r.impressions),
              formatNumber(r.clicks),
              formatPercent(r.ctr),
            ])}
          />
        </>
      )}
    </section>
  );
}
