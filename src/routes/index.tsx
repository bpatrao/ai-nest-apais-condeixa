import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/components/site/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Mission } from "@/components/site/Mission";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { Notices } from "@/components/site/Notices";
import { Events } from "@/components/site/Events";
import { Gallery } from "@/components/site/Gallery";
import { Friends } from "@/components/site/Friends";
import { Join } from "@/components/site/Join";
import { Suggestions } from "@/components/site/Suggestions";
import { Contacts } from "@/components/site/Contacts";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "APAIS — Associação de Pais da EB N.º1 de Condeixa-a-Nova",
      },
      {
        name: "description",
        content:
          "Juntos construímos uma escola mais participativa, acolhedora e enriquecedora para as nossas crianças. Conheça a APAIS de Condeixa-a-Nova.",
      },
      {
        property: "og:title",
        content: "APAIS — Associação de Pais de Condeixa-a-Nova",
      },
      {
        property: "og:description",
        content:
          "Juntos construímos uma escola mais participativa, acolhedora e enriquecedora para as nossas crianças.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <WhatWeDo />
        <Notices />
        <Events />
        <Gallery />
        <Friends />
        <Join />
        <Suggestions />
        <Contacts />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
