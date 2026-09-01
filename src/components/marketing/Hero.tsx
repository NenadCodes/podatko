import Link from "next/link";

function DashboardPreview() {
  return (
    <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-muted">
          Podatko
        </span>
        <span className="rounded-full bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand">
          uživo
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-border p-3">
          <p className="text-xs text-muted">Google Ads</p>
          <p className="mt-1 text-lg font-semibold text-foreground">1 284</p>
        </div>
        <div className="rounded-lg border border-border p-3">
          <p className="text-xs text-muted">Meta Ads</p>
          <p className="mt-1 text-lg font-semibold text-foreground">€342</p>
        </div>
        <div className="rounded-lg border border-border p-3">
          <p className="text-xs text-muted">Analytics</p>
          <p className="mt-1 text-lg font-semibold text-foreground">5 019</p>
        </div>
        <div className="rounded-lg border border-border p-3">
          <p className="text-xs text-muted">Search Console</p>
          <p className="mt-1 text-lg font-semibold text-foreground">2.6%</p>
        </div>
      </div>
      <div className="mt-3 flex h-16 items-end gap-1.5 rounded-lg border border-border p-3">
        {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-brand/60"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:py-28">
      <div className="flex-1 text-center md:text-left">
        <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
          Digitalni marketing i analitika
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground md:text-5xl">
          Sav vaš marketing, na jednom mestu.
        </h1>
        <p className="mt-4 text-lg text-muted">
          Marković Marketing vodi vaše digitalne kampanje, a Podatko platforma
          vam u realnom vremenu prikazuje rezultate — Google Ads, Google
          Analytics, Search Console i Meta Ads, bez prijavljivanja na pet
          različitih naloga.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
          <Link
            href="/app"
            className="rounded-lg bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand-hover"
          >
            Prijavite se na Podatko
          </Link>
          <a
            href="#usluge"
            className="rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-surface"
          >
            Pogledajte naše usluge
          </a>
        </div>
      </div>

      <div className="w-full max-w-sm flex-1">
        <DashboardPreview />
      </div>
    </section>
  );
}
