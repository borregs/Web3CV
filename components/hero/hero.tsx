import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";

const PORTRAIT_SRC = "/Web3CV/borregs.png";
const PORTRAIT_HOVER_SRC = "/Web3CV/borregs_wave.png";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
       <div className="mx-auto w-full max-w-7xl px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">   
          <FadeIn className="flex flex-col gap-4">
            <p className="text-[20px] leading-tight tracking-tight font-medium text-foreground">
              Hi
              <span aria-hidden="true" className="mx-0.5">
                👋
              </span>
              , I&rsquo;m Miguel Bravo
            </p>

            <h1 className="text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[3.65rem]">
              <span className="block whitespace-nowrap">
                WebDeveloper &amp;
              </span>
              <span className="block whitespace-nowrap">Open Source Wizard</span>
            </h1>

            <p className="max-w-[34ch] text-[22px] leading-[1.4] tracking-tight text-foreground/65">
              Independent web developer focused on automations. My lengthy experience record encompasses DevOps, Blockchain, Embedded Systems, Sales and Telemarketing
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-center md:justify-end">
            {/* FIX 1: Changed aspect-square to aspect-[3/4] for a portrait layout. Added max-w-md to keep it from getting too massive on large screens. */}
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
              
              {/* FIX 2: Added h-full and w-full so this inner container maps exactly to the aspect ratio set above */}
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <PortraitMorph
                  srcA={PORTRAIT_SRC}
                  srcB={PORTRAIT_HOVER_SRC}
                  alt="borre headshot"
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
