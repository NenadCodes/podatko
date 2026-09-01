"use client";

import { useAuth } from "@/lib/auth-context";
import type { Property, Role } from "@/lib/api";
import { PropertySwitcher } from "./PropertySwitcher";

export function Header({
  role,
  properties,
  selected,
  onSelectProperty,
}: {
  role: Role;
  properties: Property[];
  selected: string;
  onSelectProperty: (slug: string) => void;
}) {
  const { session, signOut } = useAuth();

  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface px-6 py-4">
      <div className="flex items-center gap-3">
        <span className="text-base font-semibold text-foreground">
          Podatko
        </span>
        <span className="rounded-full bg-brand/10 px-2 py-0.5 text-xs font-medium capitalize text-brand">
          {role}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <PropertySwitcher
          properties={properties}
          selected={selected}
          onChange={onSelectProperty}
        />
        <span className="hidden text-sm text-muted sm:inline">
          {session?.user?.email}
        </span>
        <button
          type="button"
          onClick={() => signOut()}
          className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:bg-background"
        >
          Sign out
        </button>
      </div>
    </header>
  );
}
