"use client";

import Reveal from "../Reveal";
import WaxSeal from "../WaxSeal";
import { BackgroundPattern, OrnamentalRing } from "../Ornaments";
import { WEDDING } from "@/lib/constants";

export default function Closing() {
  return (
    <section className="snap-section flex flex-col items-center justify-center bg-blush-dark text-center px-6">
      <BackgroundPattern opacity={0.12} />

      <Reveal>
        <p className="font-arabic text-2xl leading-relaxed text-ink max-w-xs">
          {WEDDING.thankYouMessage}
        </p>
      </Reveal>

      <Reveal delay={0.25} className="my-10">
        <div className="relative">
          <OrnamentalRing className="absolute -inset-5 w-[calc(100%+2.5rem)] h-[calc(100%+2.5rem)]" />
          <WaxSeal size={130} />
        </div>
      </Reveal>

      <Reveal delay={0.45}>
        <p className="font-script text-3xl text-gold-dark">
          {WEDDING.groomInitial} &amp; {WEDDING.brideInitial}
        </p>
        <p className="mt-2 text-sm text-ink/60">
          {WEDDING.groomName} و {WEDDING.brideName} — {WEDDING.dateLabel}
        </p>
      </Reveal>
    </section>
  );
}
