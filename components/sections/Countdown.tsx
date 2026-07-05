"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import ScrollHint from "../ScrollHint";
import { BackgroundPattern, FloralBranch, OrnamentalRing } from "../Ornaments";
import { WEDDING } from "@/lib/constants";

function getTimeLeft() {
  const diff = WEDDING.weddingDate.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  // نبدأ بـ null لتجنب اختلاف الـ hydration بين السيرفر والمتصفح
  const [left, setLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setLeft(getTimeLeft());
    const id = setInterval(() => setLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "يوم", value: left?.days ?? 0 },
    { label: "ساعة", value: left?.hours ?? 0 },
    { label: "دقيقة", value: left?.minutes ?? 0 },
    { label: "ثانية", value: left?.seconds ?? 0 },
  ];

  return (
    <section className="snap-section flex flex-col items-center justify-center bg-blush-dark text-center px-6">
      <BackgroundPattern opacity={0.1} />

      {/* ورد بينزل بنعومة على طول السكشن */}
      <FallingPetals />

      {/* زخارف ذهبية بالزوايا */}
      <FloralBranch className="absolute top-4 -right-6 w-40 rotate-180 opacity-60" />
      <FloralBranch className="absolute top-16 -left-8 w-36 opacity-50" flip />
      <FloralBranch className="absolute bottom-16 -right-8 w-36 opacity-50" />
      <FloralBranch className="absolute bottom-4 -left-6 w-40 opacity-60" flip />

      {/* الخاتمان المتشابكان + حلقة زخرفية بتدور وراهم */}
      <div className="relative">
        <motion.div
          className="absolute -inset-8 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <OrnamentalRing className="w-full h-full opacity-60" />
        </motion.div>
        <WeddingRings />
      </div>

      <Reveal>
        <h2 className="font-arabic text-3xl text-ink mb-2">باقي على الفرحة</h2>
        <div className="mx-auto h-px w-24 bg-gold/70 mb-10" />
      </Reveal>

      <Reveal delay={0.2}>
        <div className="flex gap-3" dir="rtl">
          {units.map((u) => (
            <div
              key={u.label}
              className="flex flex-col items-center justify-center w-[74px] h-[86px] rounded-xl border border-gold/50 bg-blush/70 shadow-sm overflow-hidden"
            >
              {/* الرقم بينزلق بنعومة كل ما يتغير */}
              <motion.span
                key={u.value}
                initial={{ y: -14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-3xl font-bold text-gold-dark tabular-nums"
              >
                {u.value}
              </motion.span>
              <span className="text-xs text-ink/70 mt-1">{u.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="mt-10 flex items-center gap-3 justify-center text-ink/70">
          <span className="h-px w-10 bg-gold/50" />
          <p>
            {WEDDING.dateLabel} — {WEDDING.timeLabel}
          </p>
          <span className="h-px w-10 bg-gold/50" />
        </div>
        {/* قلب نابض */}
        <motion.div
          className="mt-5 flex justify-center"
          animate={{ scale: [1, 1.25, 1, 1.18, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#D98A80" aria-hidden>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      </Reveal>

      <ScrollHint />
    </section>
  );
}

// بتلات ورد بتنزل بنعومة من فوق مع تمايل ودوران — قيم ثابتة لتجنب مشاكل الـ hydration
const PETALS = [
  { left: "6%", size: 14, duration: 9, delay: 0, sway: 22, color: "#E5A99E" },
  { left: "18%", size: 10, duration: 12, delay: 2.5, sway: -18, color: "#D98A80" },
  { left: "30%", size: 12, duration: 10, delay: 5, sway: 16, color: "#C9A227" },
  { left: "44%", size: 9, duration: 13, delay: 1.2, sway: -24, color: "#E5A99E" },
  { left: "56%", size: 13, duration: 9.5, delay: 6.5, sway: 20, color: "#EFC3BA" },
  { left: "68%", size: 10, duration: 11, delay: 3.8, sway: -16, color: "#C9A227" },
  { left: "80%", size: 12, duration: 10.5, delay: 0.8, sway: 18, color: "#D98A80" },
  { left: "90%", size: 9, duration: 12.5, delay: 4.6, sway: -20, color: "#EFC3BA" },
] as const;

function FallingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {PETALS.map((p, i) => (
        <motion.div
          key={i}
          className="absolute -top-6"
          style={{ left: p.left }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, p.sway, -p.sway * 0.6, p.sway * 0.8, 0],
            rotate: [0, 140, 280, 420],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width={p.size} height={p.size * 1.4} viewBox="0 0 14 20" style={{ opacity: 0.55 }}>
            <path
              d="M7 0 C12 3 13.5 11 7 19 C0.5 11 2 3 7 0 Z"
              fill={p.color}
            />
            <path d="M7 2 C7 8 7 12 7 17" stroke="#fff" strokeWidth="0.7" opacity="0.4" fill="none" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

// خاتمان ذهب بينزلقوا وبيتشابكوا مع لمعات متلألئة — بتعيد الحركة كل ما يبين السكشن
// ملاحظة: مراقبة الظهور (whileInView) لازم تكون على div عادي مش على عناصر SVG داخلية،
// لأن سفاري على iOS ما بيدعم IntersectionObserver على عناصر SVG فالخواتم كانت بتضل مخفية
function WeddingRings() {
  return (
    <motion.div
      className="relative mb-6"
      // طفو ناعم مستمر بعد التشابك
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
      <svg viewBox="0 0 220 130" className="w-44" aria-hidden>
        <defs>
          <linearGradient id="ringGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EDD08A" />
            <stop offset="45%" stopColor="#C9A227" />
            <stop offset="100%" stopColor="#9A7514" />
          </linearGradient>
          <linearGradient id="ringGold2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F1DCA0" />
            <stop offset="50%" stopColor="#CFA92F" />
            <stop offset="100%" stopColor="#8F6C10" />
          </linearGradient>
        </defs>

        {/* الخاتم الأيسر — بيجي من اليسار وبيدور */}
        <motion.g
          variants={{
            hidden: { x: -55, rotate: -25, opacity: 0 },
            visible: {
              x: 0,
              rotate: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 60, damping: 12, delay: 0.15 },
            },
          }}
          style={{ transformOrigin: "88px 72px" }}
        >
          <circle cx="88" cy="72" r="36" fill="none" stroke="url(#ringGold)" strokeWidth="7.5" />
          <circle cx="88" cy="72" r="36" fill="none" stroke="#FFF3C4" strokeWidth="2" opacity="0.5" strokeDasharray="18 95" strokeLinecap="round" />
        </motion.g>

        {/* الخاتم الأيمن — بيجي من اليمين ومعه الألماسة */}
        <motion.g
          variants={{
            hidden: { x: 55, rotate: 25, opacity: 0 },
            visible: {
              x: 0,
              rotate: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 60, damping: 12, delay: 0.3 },
            },
          }}
          style={{ transformOrigin: "132px 62px" }}
        >
          <circle cx="132" cy="62" r="36" fill="none" stroke="url(#ringGold2)" strokeWidth="7.5" />
          <circle cx="132" cy="62" r="36" fill="none" stroke="#FFF3C4" strokeWidth="2" opacity="0.5" strokeDasharray="18 95" strokeLinecap="round" />
          {/* الألماسة */}
          <motion.g
            variants={{
              hidden: { scale: 0 },
              visible: {
                scale: 1,
                transition: { type: "spring", stiffness: 200, damping: 10, delay: 0.75 },
              },
            }}
            style={{ transformOrigin: "132px 20px" }}
          >
            <path d="M132 12 L140 20 L132 30 L124 20 Z" fill="#EAF4F8" stroke="#B9D8E3" strokeWidth="1.2" />
            <path d="M124 20 h16 M132 12 L128 20 L132 30 L136 20 Z" fill="none" stroke="#B9D8E3" strokeWidth="0.8" />
          </motion.g>
        </motion.g>

        {/* إعادة رسم قوس من الخاتم الأيسر فوق الأيمن — عشان يبينوا متشابكين فعلاً */}
        <motion.path
          d="M 106 40 A 36 36 0 0 1 122 60"
          fill="none"
          stroke="url(#ringGold)"
          strokeWidth="7.5"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.55, duration: 0.2 } },
          }}
        />

        {/* لمعات متلألئة حوالين الخواتم */}
        {[
          { x: 55, y: 30, s: 1, d: 0 },
          { x: 175, y: 45, s: 0.7, d: 0.6 },
          { x: 70, y: 112, s: 0.65, d: 1.2 },
          { x: 160, y: 108, s: 0.9, d: 1.8 },
          { x: 110, y: 14, s: 0.55, d: 2.4 },
        ].map((sp, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0.4, sp.s, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: sp.d, repeatDelay: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: `${sp.x}px ${sp.y}px` }}
          >
            <path
              d={`M ${sp.x} ${sp.y - 7} Q ${sp.x + 1.5} ${sp.y - 1.5} ${sp.x + 7} ${sp.y} Q ${sp.x + 1.5} ${sp.y + 1.5} ${sp.x} ${sp.y + 7} Q ${sp.x - 1.5} ${sp.y + 1.5} ${sp.x - 7} ${sp.y} Q ${sp.x - 1.5} ${sp.y - 1.5} ${sp.x} ${sp.y - 7} Z`}
              fill="#E8C766"
            />
          </motion.g>
        ))}
      </svg>
      </motion.div>
    </motion.div>
  );
}
