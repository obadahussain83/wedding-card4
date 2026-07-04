"use client";

import { motion } from "framer-motion";
import WaxSeal from "./WaxSeal";
import { FloralBranch } from "./Ornaments";
import { WEDDING } from "@/lib/constants";

type Props = {
  onOpen: () => void;
  opening: boolean;
};

// نسبة ارتفاع قلبة الظرف — رأسها بيلتقي مع نقطة V تبعت الجيب
const FLAP_TIP = 58; // % من ارتفاع الشاشة

export default function Cover({ onOpen, opening }: Props) {
  return (
    <motion.div
      className="absolute inset-0 z-50 overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      style={{ perspective: 1400, background: "#e9cfc0" }}
    >
      {/* ===== 1) جوف الظرف (بيبين لما تنفتح القلبة) ===== */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: `${FLAP_TIP + 4}%`,
          background: "linear-gradient(180deg, #d9b6a6 0%, #e3c2b2 55%, #dcb9a8 100%)",
          boxShadow: "inset 0 14px 24px rgba(110, 62, 54, 0.28)",
        }}
      />

      {/* ===== 2) الرسالة — بتطلع من جوا الظرف بعد فتح القلبة ===== */}
      <motion.div
        className="absolute left-1/2 z-[2] flex flex-col items-center justify-center gap-3 rounded-lg"
        style={{
          width: "76%",
          height: "62%",
          top: "24%",
          x: "-50%",
          background: "linear-gradient(180deg, #fffdf9 0%, #fbf3ea 100%)",
          boxShadow: "0 6px 24px rgba(110, 62, 54, 0.3)",
        }}
        initial={false}
        animate={opening ? { y: "-34%" } : { y: "6%" }}
        transition={{ duration: 0.9, delay: opening ? 1.15 : 0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-2 rounded-md border border-gold/40" />
        <FloralBranch className="w-24 opacity-70 rotate-180" />
        <p className="font-script text-3xl text-gold-dark" style={{ color: "#B8860B" }}>
          {WEDDING.groomName} &amp; {WEDDING.brideName}
        </p>
        <p className="text-xs tracking-widest text-ink/60">{WEDDING.dateLabel}</p>
        <FloralBranch className="w-24 opacity-70" flip />
      </motion.div>

      {/* ===== 3) جيب الظرف الأمامي — حافته العلوية مخبّاية بالظبط تحت حافة القلبة،
                 فالظرف المسكّر بيبين عليه V واحد نظيف بس ===== */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          clipPath: `polygon(0 0, 50% ${FLAP_TIP}%, 100% 0, 100% 100%, 0 100%)`,
        }}
      >
        {/* ورق الجيب — أفتح بالنص وأغمق عالأطراف زي ورقة حقيقية */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(110% 70% at 50% 62%, rgba(255,252,248,0.45) 0%, transparent 60%),
                         linear-gradient(190deg, #f7e5d8 0%, #f4ddcf 50%, #eccfbc 100%)`,
          }}
        />
        {/* حافة الجيب — خيط ظل رفيع على طول V (بيبين لما تنفتح القلبة) */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `polygon(0 0, 50% ${FLAP_TIP}%, 100% 0, 100% 1%, 50% ${FLAP_TIP + 1}%, 0 1%)`,
            background: "rgba(120, 70, 58, 0.16)",
          }}
        />
        {/* طيات X تحت الختم — من الزوايا السفلية لنقطة الختم، خفيفة جداً */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            top: `${2 * FLAP_TIP - 100}%`,
            background: `linear-gradient(to bottom right, transparent 49.5%, rgba(120,70,58,0.08) 49.9%, rgba(255,255,255,0.4) 50.15%, transparent 50.6%),
                         linear-gradient(to bottom left, transparent 49.5%, rgba(120,70,58,0.08) 49.9%, rgba(255,255,255,0.4) 50.15%, transparent 50.6%)`,
            opacity: 0.55,
          }}
        />
        <EmbossedTexture />
      </div>

      {/* ===== 4) قلبة الظرف — بتنفتح 3D لفوق ===== */}
      <motion.div
        className="absolute inset-x-0 top-0 z-[4]"
        style={{
          height: `${FLAP_TIP}%`,
          transformOrigin: "top center",
          transformStyle: "preserve-3d",
        }}
        initial={false}
        animate={{ rotateX: opening ? 178 : 0 }}
        transition={{ duration: 1.15, delay: opening ? 0.3 : 0, ease: [0.45, 0, 0.2, 1] }}
      >
        {/* الوجه الأمامي للقلبة */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            background: "linear-gradient(168deg, #fbf0e6 0%, #f6e2d3 45%, #efd2c0 100%)",
          }}
        >
          {/* انحناءة الورقة — ضوء ناعم من فوق */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(140% 90% at 50% -10%, rgba(255,255,255,0.55) 0%, transparent 55%)",
            }}
          />
          {/* حافة القلبة — خط إضاءة مقصوص + ظل تحته (سماكة ورق حقيقية) */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(65deg, transparent 96%, rgba(120,70,58,0.14) 99.3%, rgba(120,70,58,0.2) 100%),
                           linear-gradient(-65deg, transparent 96%, rgba(120,70,58,0.14) 99.3%, rgba(120,70,58,0.2) 100%)`,
            }}
          />
          <EmbossedTexture />
        </div>

        {/* الوجه الداخلي للقلبة (بيبين وهي بتنفتح) */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            background: "linear-gradient(180deg, #efd6c7 0%, #e6c6b3 100%)",
            boxShadow: "inset 0 -10px 18px rgba(110, 62, 54, 0.18)",
          }}
        />
      </motion.div>

      {/* ظل القلبة الواقع على الجيب — مثلث غامق مزحزح لتحت ومبلور (بيختفي مع الفتح) */}
      <motion.div
        className="absolute inset-x-0 z-[3] pointer-events-none"
        style={{
          top: "0.5%",
          height: `${FLAP_TIP}%`,
          clipPath: "polygon(-2% 0, 102% 0, 50% 102%)",
          background: "linear-gradient(180deg, transparent 72%, rgba(105,58,50,0.18) 94%, rgba(105,58,50,0.24) 100%)",
          filter: "blur(4px)",
        }}
        initial={false}
        animate={{ opacity: opening ? 0 : 1 }}
        transition={{ duration: 0.4, delay: opening ? 0.25 : 0 }}
      />

      {/* ===== 5) الختم الشمعي — بينكسر نصين عند الضغط ===== */}
      <motion.button
        type="button"
        onClick={onOpen}
        disabled={opening}
        aria-label={WEDDING.tapToOpenText}
        className="absolute left-1/2 z-[6] outline-none"
        style={{ top: `${FLAP_TIP}%`, x: "-50%", y: "-50%" }}
        initial={false}
        animate={opening ? {} : { scale: [1, 1.035, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* النص الأيسر من الختم */}
        <motion.div
          className="relative"
          style={{ clipPath: "inset(-15% 50% -15% -15%)" }}
          initial={false}
          animate={opening ? { x: -26, rotate: -10, opacity: 0, y: 10 } : { x: 0, rotate: 0, opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeIn" }}
        >
          <WaxSeal size={148} />
        </motion.div>
        {/* النص الأيمن من الختم */}
        <motion.div
          className="absolute inset-0"
          style={{ clipPath: "inset(-15% -15% -15% 50%)" }}
          initial={false}
          animate={opening ? { x: 26, rotate: 10, opacity: 0, y: 10 } : { x: 0, rotate: 0, opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeIn" }}
        >
          <WaxSeal size={148} />
        </motion.div>
      </motion.button>

      {/* ===== 6) نص "دوس لفتح الدعوة" ===== */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-[6] flex flex-col items-center gap-2 text-ink/70"
        style={{ top: `${FLAP_TIP + 14}%` }}
        initial={false}
        animate={{ opacity: opening ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#B8860B" strokeWidth="1.5" aria-hidden>
          <path d="M9 11.5V6a2 2 0 1 1 4 0v5m0-2.5a2 2 0 1 1 4 0V13c0 4-2.5 7-6.5 7S5 17 5 13v-1.5a2 2 0 1 1 4 0" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="text-sm tracking-wide">{WEDDING.tapToOpenText}</p>
      </motion.div>

      {/* ===== 7) حبيبات الورق + تظليل الأطراف — فوق كل شي لتوحيد الملمس ===== */}
      <div
        className="absolute inset-0 z-[8] pointer-events-none"
        style={{ backgroundImage: PAPER_GRAIN, opacity: 0.08, mixBlendMode: "multiply" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[8] pointer-events-none"
        style={{
          background: "radial-gradient(130% 100% at 50% 42%, transparent 55%, rgba(110,62,54,0.14) 100%)",
        }}
        aria-hidden
      />
    </motion.div>
  );
}

// ملمس حبيبات ورق ناعم (SVG noise) — بيعطي إحساس ورق حقيقي بدل لون مسطح
const PAPER_GRAIN =
  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'240\' height=\'240\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'240\' height=\'240\' filter=\'url(%23n)\'/%3E%3C/svg%3E")';

// نقش ورقي "مضغوط" أبيض شفاف فوق ورق الظرف — بيحاكي التنقيش تبع الصورة
function EmbossedTexture() {
  const emboss: React.CSSProperties = {
    filter:
      "brightness(0) invert(1) drop-shadow(1px 1.4px 0.6px rgba(135, 82, 62, 0.65)) drop-shadow(-0.4px -0.5px 0.4px rgba(255,255,255,0.5))",
    opacity: 0.75,
  };
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -top-4 -right-8 w-56 rotate-180" style={emboss}><FloralBranch className="w-full" /></div>
      <div className="absolute top-[14%] -left-10 w-52" style={emboss}><FloralBranch className="w-full" flip /></div>
      <div className="absolute top-[30%] right-[2%] w-44 -rotate-12" style={emboss}><FloralBranch className="w-full" /></div>
      <div className="absolute top-[48%] left-[4%] w-40 rotate-12" style={emboss}><FloralBranch className="w-full" flip /></div>
      <div className="absolute bottom-[26%] right-[8%] w-40 rotate-6" style={emboss}><FloralBranch className="w-full" /></div>
      <div className="absolute bottom-[14%] -left-8 w-48 rotate-6" style={emboss}><FloralBranch className="w-full" flip /></div>
      <div className="absolute -bottom-3 -right-6 w-56" style={emboss}><FloralBranch className="w-full" /></div>
    </div>
  );
}
