import { AdBanner } from "@/components/ads/ad-banner";
import { ContactCard } from "@/components/contact/contact-card";
import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: `Welcome to ${siteConfig.name}. ${siteConfig.description}`,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <div className="flex">
      {/* Sidebar ad — fixed on left, visible on xl screens only */}
      <AdBanner
        format="vertical"
        className="fixed top-28 left-4 z-40 hidden xl:block"
      />

      <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
        <Hero />
        <Projects withHeadline viewMoreVisible />
        {/* Horizontal banner between projects and contact */}
        <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
          <AdBanner
            format="horizontal"
            className="rounded-xl border border-foreground/8 bg-muted/30 p-2"
          />
        </div>
        <ContactCard />
        <div className="h-12 sm:h-16" />
      </main>
    </div>
  );
}
