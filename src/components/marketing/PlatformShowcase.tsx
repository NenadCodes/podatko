import Link from "next/link";

const FEATURES = [
  "Jedan nalog za sve vaše marketing podatke",
  "Podaci ažurirani svakog dana",
  "Pregledni izveštaji umesto sirovih tabela",
  "Bezbedan pristup — svaki klijent vidi samo svoje podatke",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5 shrink-0 text-brand"
      aria-hidden="true"
    >
      <path
        d="M4 10.5l3.5 3.5L16 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlatformShowcase() {
  return (
    <section id="platforma" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-wide text-brand">
              Podatko platforma
            </span>
            <h2 className="mt-2 text-3xl font-semibold text-foreground">
              Vaša marketing kontrolna tabla
            </h2>
            <p className="mt-3 text-muted">
              Umesto da se prijavljujete na Google Ads, Google Analytics,
              Search Console i Meta Ads posebno, Podatko sve te podatke
              prikazuje na jednom preglednom mestu — ažurirano, jasno i bez
              tabela u kojima se lako izgubiti.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/app"
              className="mt-8 inline-block rounded-lg bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand-hover"
            >
              Prijavite se
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Google Ads", value: "Klikovi, CTR, budžet" },
              { label: "Google Analytics", value: "Sesije, korisnici" },
              { label: "Search Console", value: "Pretrage, pozicije" },
              { label: "Meta Ads", value: "Doseg, potrošnja" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-background p-5"
              >
                <p className="text-sm font-semibold text-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-muted">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
