"use client";

import { motion } from "framer-motion";
import Reveal from "../Reveal";
import ScrollHint from "../ScrollHint";
import { BackgroundPattern, FloralBranch } from "../Ornaments";
import { WEDDING } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="snap-section flex flex-col items-center justify-center bg-blush text-center px-8">
      <BackgroundPattern opacity={0.1} />

      {/* توهج وردي ناعم خلف المنتصف */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(60% 42% at 50% 50%, rgba(217,138,128,0.14) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* الإطار الذهبي المزدوج */}
      <div className="absolute inset-3 rounded-[26px] border border-gold/50 pointer-events-none" aria-hidden />
      <div className="absolute inset-[22px] rounded-[18px] border border-gold/25 pointer-events-none" aria-hidden />

      {/* زوايا مزخرفة */}
      <CornerFlourish className="top-5 right-5" rotate={0} />
      <CornerFlourish className="top-5 left-5" rotate={90} />
      <CornerFlourish className="bottom-5 left-5" rotate={180} />
      <CornerFlourish className="bottom-5 right-5" rotate={270} />

      {/* فاصل علوي صغير فوق الآية */}
      <Reveal>
        <div className="flex items-center gap-2 justify-center mb-5 text-gold-dark">
          <span className="h-px w-8 bg-gold/60" />
          <svg viewBox="0 0 16 16" className="w-3 h-3" fill="currentColor" aria-hidden>
            <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
          </svg>
          <span className="h-px w-8 bg-gold/60" />
        </div>
        <p className="text-sm leading-loose text-gold-dark mb-9 max-w-[300px]">
          {WEDDING.invitationLine}
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <h1 className="font-arabic text-6xl leading-tight text-ink drop-shadow-sm">
          {WEDDING.groomName}
        </h1>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="my-4 flex items-center gap-3 justify-center">
          <span className="h-px w-14 bg-gradient-to-l from-gold/70 to-transparent" />
          {/* قلب ذهبي صغير بينبض بهدوء بدل & */}
          <motion.svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="#C9A227"
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </motion.svg>
          <span className="h-px w-14 bg-gradient-to-r from-gold/70 to-transparent" />
        </div>
      </Reveal>

      <Reveal delay={0.45}>
        <h1 className="font-arabic text-6xl leading-tight text-ink drop-shadow-sm">
          {WEDDING.brideName}
        </h1>
      </Reveal>

      <Reveal delay={0.65}>
        <p className="mt-9 text-base text-ink/70 leading-relaxed max-w-[280px]">
          {WEDDING.heroLine}
        </p>
        {/* غصنان صغيران متقابلان تحت الجملة */}
        <div className="mt-4 flex items-end justify-center gap-1 opacity-70">
          <FloralBranch className="w-20" flip />
          <FloralBranch className="w-20" />
        </div>
      </Reveal>

      <ScrollHint />
    </section>
  );
}

// زخرفة زاوية ذهبية — قوس بأوراق صغيرة، بتنرسم بكل زاوية بدوران مناسب
function CornerFlourish({ className, rotate }: { className: string; rotate: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`absolute w-14 h-14 pointer-events-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="none"
      aria-hidden
    >
      <g stroke="#C9A227" strokeWidth="1.3" strokeLinecap="round" opacity="0.8">
        <path d="M60 4 Q34 6 20 20 Q6 34 4 60" />
        <path d="M44 10 q-6 -6 -14 -4 q4 8 14 4z" fill="#C9A227" fillOpacity="0.3" />
        <path d="M10 44 q-6 -6 -4 -14 q8 4 4 14z" fill="#C9A227" fillOpacity="0.3" />
        <circle cx="24" cy="24" r="3" strokeWidth="1" />
        <circle cx="24" cy="24" r="6" strokeWidth="0.7" strokeDasharray="2 3" />
      </g>
    </svg>
  );
}
