export function MarketingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-10 text-center text-sm text-muted">
      <p className="font-medium text-foreground">Marković Marketing</p>
      <p className="mt-1">Podatko platforma je deo Marković Marketing agencije.</p>
      <p className="mt-4">
        © {year} Marković Marketing. Sva prava zadržana.
      </p>
    </footer>
  );
}
