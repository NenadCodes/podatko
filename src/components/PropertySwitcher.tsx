import type { Property } from "@/lib/api";

export function PropertySwitcher({
  properties,
  selected,
  onChange,
}: {
  properties: Property[];
  selected: string;
  onChange: (slug: string) => void;
}) {
  if (properties.length <= 1) {
    return (
      <div className="text-sm font-medium text-foreground">
        {properties[0]?.name ?? "No property"}
      </div>
    );
  }

  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-foreground"
    >
      {properties.map((p) => (
        <option key={p.slug} value={p.slug}>
          {p.name}
        </option>
      ))}
    </select>
  );
}
