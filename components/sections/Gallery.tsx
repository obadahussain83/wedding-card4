"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "../Reveal";
import ScrollHint from "../ScrollHint";
import { BackgroundPattern } from "../Ornaments";
import { WEDDING } from "@/lib/constants";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const images = WEDDING.galleryImages;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <section className="snap-section flex flex-col items-center justify-center bg-blush-dark text-center px-6">
      <BackgroundPattern opacity={0.08} />

      <Reveal>
        <h2 className="font-arabic text-3xl text-ink mb-2">لحظاتنا</h2>
        <div className="mx-auto h-px w-24 bg-gold/70 mb-8" />
      </Reveal>

      <Reveal delay={0.15} className="w-full max-w-xs">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gold/50 shadow-lg bg-blush">
          {images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`صورة ${i + 1} من معرض العروسين`}
              fill
              sizes="(max-width: 480px) 90vw, 380px"
              className="object-cover transition-opacity duration-500"
              style={{ opacity: i === index ? 1 : 0 }}
              unoptimized={src.endsWith(".svg")}
            />
          ))}

          {/* أزرار التنقل */}
          <button
            type="button"
            onClick={prev}
            aria-label="الصورة السابقة"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 text-gold-dark flex items-center justify-center shadow active:scale-90 transition-transform"
          >
            ›
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="الصورة التالية"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 text-gold-dark flex items-center justify-center shadow active:scale-90 transition-transform"
          >
            ‹
          </button>
        </div>

        {/* نقاط المؤشر */}
        <div className="mt-4 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`انتقل للصورة ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-gold-dark" : "w-2 bg-gold/40"
              }`}
            />
          ))}
        </div>
      </Reveal>

      <ScrollHint />
    </section>
  );
}
