"use client";

import Reveal from "../Reveal";
import ScrollHint from "../ScrollHint";
import { BackgroundPattern, FloralBranch } from "../Ornaments";
import { WEDDING } from "@/lib/constants";

export default function Details() {
  return (
    <section className="snap-section flex flex-col items-center justify-center bg-blush text-center px-6">
      <BackgroundPattern opacity={0.1} />
      <FloralBranch className="absolute top-4 -left-4 w-36 opacity-50" flip />
      <FloralBranch className="absolute bottom-10 -right-4 w-36 opacity-50" />

      <Reveal>
        <div className="flex items-center gap-2 justify-center mb-3 text-gold-dark">
          <span className="h-px w-8 bg-gold/60" />
          <svg viewBox="0 0 16 16" className="w-3 h-3" fill="currentColor" aria-hidden>
            <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
          </svg>
          <span className="h-px w-8 bg-gold/60" />
        </div>
        <h2 className="font-arabic text-3xl text-ink mb-8">تفاصيل الحفلة</h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="relative w-full max-w-xs rounded-2xl border border-gold/50 bg-white/50 backdrop-blur-sm px-6 py-5 shadow-[0_8px_28px_rgba(110,62,54,0.12)]">
          {/* إطار داخلي رفيع */}
          <div className="absolute inset-1.5 rounded-xl border border-gold/25 pointer-events-none" />

          <div className="flex items-center gap-4 text-right">
            {/* أيقونة المكان */}
            <span className="shrink-0 w-11 h-11 rounded-full border border-gold/50 bg-blush flex items-center justify-center text-gold-dark">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
                <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-[11px] text-gold-dark tracking-[0.2em] mb-0.5">المكان</p>
              <p className="text-lg font-medium text-ink leading-snug">{WEDDING.venue}</p>
              <p className="text-sm text-ink/60">{WEDDING.city}</p>
            </div>
          </div>

          {/* فاصل مزخرف */}
          <div className="my-4 flex items-center gap-2">
            <span className="h-px flex-1 bg-gold/30" />
            <span className="w-1.5 h-1.5 rotate-45 border border-gold/60" />
            <span className="h-px flex-1 bg-gold/30" />
          </div>

          <div className="flex items-center gap-4 text-right">
            {/* أيقونة الموعد */}
            <span className="shrink-0 w-11 h-11 rounded-full border border-gold/50 bg-blush flex items-center justify-center text-gold-dark">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
                <rect x="3" y="5" width="18" height="16" rx="2.5" />
                <path d="M3 10h18 M8 3v4 M16 3v4" strokeLinecap="round" />
                <path d="M12 14l2 2" strokeLinecap="round" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-[11px] text-gold-dark tracking-[0.2em] mb-0.5">الموعد</p>
              <p className="text-lg font-medium text-ink leading-snug">{WEDDING.dateLabel}</p>
              <p className="text-sm text-ink/60">{WEDDING.timeLabel}</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3} className="w-full max-w-xs mt-5">
        {/* الخريطة بإطار ذهبي مزدوج */}
        <div className="rounded-2xl border border-gold/60 p-1 bg-white/40 shadow-[0_8px_28px_rgba(110,62,54,0.12)]">
          <div className="rounded-xl overflow-hidden border border-gold/30 h-40">
            <iframe
              src={WEDDING.venueMapEmbedUrl}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع القاعة على الخريطة"
            />
          </div>
        </div>
        <a
          href={WEDDING.venueMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full px-7 py-2.5 text-sm text-white shadow-lg active:scale-95 transition-transform"
          style={{ background: "linear-gradient(135deg, #C9A227 0%, #B8860B 60%, #9A7514 100%)" }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          افتح الموقع على الخريطة
        </a>
      </Reveal>

      <ScrollHint />
    </section>
  );
}
