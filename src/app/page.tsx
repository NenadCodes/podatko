import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { Hero } from "@/components/marketing/Hero";
import { Services } from "@/components/marketing/Services";
import { PlatformShowcase } from "@/components/marketing/PlatformShowcase";
import { About } from "@/components/marketing/About";
import { Contact } from "@/components/marketing/Contact";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";

export default function MarketingHome() {
  return (
    <div className="flex flex-1 flex-col">
      <MarketingHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Services />
        <PlatformShowcase />
        <About />
        <Contact />
      </main>
      <MarketingFooter />
    </div>
  );
}
