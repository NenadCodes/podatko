const CONTACT_EMAIL = "kontakt@podatko.com";

export function Contact() {
  return (
    <section id="kontakt" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <span className="text-xs font-medium uppercase tracking-wide text-brand">
          Kontakt
        </span>
        <h2 className="mt-2 text-3xl font-semibold text-foreground">
          Razgovarajmo o vašem marketingu
        </h2>
        <p className="mt-3 text-muted">
          Zakažite besplatne konsultacije i saznajte kako možemo da unapredimo
          vaše digitalne kampanje.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-8 inline-block rounded-lg bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand-hover"
        >
          Pošaljite email — {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
