import Link from "next/link";

const NAV_LINKS = [
  { href: "#usluge", label: "Usluge" },
  { href: "#platforma", label: "Platforma" },
  { href: "#o-nama", label: "O nama" },
  { href: "#kontakt", label: "Kontakt" },
];

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-base font-semibold text-foreground">
            Marković Marketing
          </span>
          <span className="text-sm text-muted">× Podatko</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/app"
          className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition hover:bg-brand-hover"
        >
          Prijavite se
        </Link>
      </div>
    </header>
  );
}
