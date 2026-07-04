"use client";

import { motion } from "framer-motion";
import Reveal from "../Reveal";
import ScrollHint from "../ScrollHint";
import { BackgroundPattern, FloralBranch } from "../Ornaments";
import { WEDDING } from "@/lib/constants";

export default function Program() {
  return (
    <section className="snap-section flex flex-col items-center justify-center bg-blush-dark text-center px-6">
      <BackgroundPattern opacity={0.09} />
      <FloralBranch className="absolute top-4 -right-4 w-36 rotate-180 opacity-50" />
      <FloralBranch className="absolute bottom-10 -left-4 w-36 opacity-50" flip />

      <Reveal>
        <div className="flex items-center gap-2 justify-center mb-3 text-gold-dark">
          <span className="h-px w-8 bg-gold/60" />
          <svg viewBox="0 0 16 16" className="w-3 h-3" fill="currentColor" aria-hidden>
            <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
          </svg>
          <span className="h-px w-8 bg-gold/60" />
        </div>
        <h2 className="font-arabic text-3xl text-ink mb-10">برنامج الحفل</h2>
      </Reveal>

      {/* الخط الزمني */}
      <div className="relative w-full max-w-xs" dir="rtl">
        {/* الخط الذهبي — بينرسم من فوق لتحت */}
        <motion.div
          className="absolute right-[21px] top-5 bottom-5 w-px origin-top"
          style={{ background: "linear-gradient(180deg, #C9A227 0%, rgba(201,162,39,0.35) 100%)" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          aria-hidden
        />

        <div className="space-y-5">
          {WEDDING.program.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.18, ease: "easeOut" }}
            >
              {/* الأيقونة بدائرة ذهبية فوق الخط */}
              <span className="relative shrink-0 w-[42px] h-[42px] rounded-full border border-gold/60 bg-blush shadow-[0_3px_10px_rgba(110,62,54,0.15)] flex items-center justify-center text-gold-dark">
                <ProgramIcon name={item.icon} />
              </span>

              {/* البطاقة */}
              <div className="flex-1 flex items-center justify-between rounded-xl border border-gold/40 bg-white/45 backdrop-blur-sm px-4 py-3">
                <p className="text-base text-ink font-medium">{item.title}</p>
                <span className="text-sm text-gold-dark tabular-nums border-r border-gold/30 pr-3 mr-3">
                  {item.time}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}

// أيقونات فقرات البرنامج — رسمات خطية ذهبية بسيطة
function ProgramIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "welcome": // باب مفتوح
      return (
        <svg {...common}>
          <path d="M4 21 V5 a2 2 0 0 1 2 -2 h8" />
          <path d="M14 3 l6 2 v14 l-6 2 z" />
          <circle cx="16.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "rings": // خاتمان متشابكان
      return (
        <svg {...common}>
          <circle cx="9.5" cy="13.5" r="5.5" />
          <circle cx="15.5" cy="10.5" r="5.5" />
          <path d="M15.5 3.5 l-1.6 1.8 M15.5 3.5 l1.6 1.8" strokeWidth="1.3" />
        </svg>
      );
    case "dinner": // شوكة وسكينة
      return (
        <svg {...common}>
          <path d="M7 3 v6 M4.5 3 v4 a2.5 2.5 0 0 0 5 0 v-4 M7 12 v9" />
          <path d="M17 3 c-2 2.5 -2.5 6 -1 8 v10 M17 3 v18" />
        </svg>
      );
    case "cake": // كيكة
      return (
        <svg {...common}>
          <path d="M4 21 h16 M5 21 v-6 a2 2 0 0 1 2 -2 h10 a2 2 0 0 1 2 2 v6" />
          <path d="M5 16 q1.75 1.6 3.5 0 t3.5 0 t3.5 0 t3.5 0" strokeWidth="1.3" />
          <path d="M12 9 v4 M12 9 q-1.4 -1.6 0 -3 q1.4 1.4 0 3" strokeWidth="1.3" />
        </svg>
      );
    case "party": // نوتة موسيقية ونجوم
      return (
        <svg {...common}>
          <path d="M9 18 V7 l8 -2 v11" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="15" cy="16" r="2" />
          <path d="M4.5 5 l0.6 1.4 L6.5 7 l-1.4 0.6 L4.5 9 l-0.6 -1.4 L2.5 7 l1.4 -0.6 z" strokeWidth="1" />
        </svg>
      );
    default:
      return null;
  }
}
