import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podatko — Prijava",
  description: "Prijavite se da vidite svoje marketing podatke.",
};

export default function AppSectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
