"use client";

import { useState } from "react";
import { useAsync } from "@/hooks/useAsync";
import { getProperties } from "@/lib/api";
import { Header } from "@/components/Header";
import { SearchConsoleSection } from "@/components/SearchConsoleSection";
import { Ga4Section } from "@/components/Ga4Section";
import { ErrorBlock, EmptyBlock } from "@/components/StateBlock";
import { Spinner } from "@/components/Spinner";

export default function DashboardPage() {
  const properties = useAsync(getProperties, "properties");
  // User-picked override; falls back to the first available property.
  const [selectedOverride, setSelectedOverride] = useState<string | null>(
    null
  );

  if (properties.status === "loading") {
    return <Spinner label="Loading your properties…" />;
  }

  if (properties.status === "error") {
    return (
      <div className="p-6">
        <ErrorBlock message={properties.error} onRetry={properties.refetch} />
      </div>
    );
  }

  const { role, properties: propertyList } = properties.data;

  if (propertyList.length === 0) {
    return (
      <div className="p-6">
        <EmptyBlock message="No properties are assigned to your account yet. Contact the site owner to get access." />
      </div>
    );
  }

  const selected = selectedOverride ?? propertyList[0]?.slug ?? null;

  if (!selected) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-1 flex-col">
      <Header
        role={role}
        properties={propertyList}
        selected={selected}
        onSelectProperty={setSelectedOverride}
      />
      <main className="flex flex-1 flex-col gap-8 px-6 py-6">
        <SearchConsoleSection property={selected} />
        <Ga4Section property={selected} />
      </main>
    </div>
  );
}
