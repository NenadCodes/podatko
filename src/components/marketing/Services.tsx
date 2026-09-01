const SERVICES = [
  {
    title: "SEO optimizacija",
    description:
      "Poboljšavamo vašu poziciju u Google pretrazi kroz tehničku optimizaciju, sadržaj i analizu ključnih reči.",
  },
  {
    title: "Google Ads kampanje",
    description:
      "Kreiramo i svakodnevno optimizujemo Google Ads kampanje koje donose merljive rezultate, ne samo klikove.",
  },
  {
    title: "Meta Ads kampanje",
    description:
      "Ciljane reklame na Facebook-u i Instagramu prilagođene vašoj publici i budžetu.",
  },
  {
    title: "Analitika i izveštavanje",
    description:
      "Sve vaše podatke pratite na jednom mestu kroz Podatko platformu — bez čekanja na mesečni izveštaj.",
  },
];

export function Services() {
  return (
    <section id="usluge" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium uppercase tracking-wide text-brand">
          Usluge
        </span>
        <h2 className="mt-2 text-3xl font-semibold text-foreground">
          Kako vam pomažemo da rastete
        </h2>
        <p className="mt-3 text-muted">
          Od optimizacije za pretraživače do plaćenih kampanja — vodimo vaš
          digitalni marketing od početka do kraja.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <h3 className="font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
