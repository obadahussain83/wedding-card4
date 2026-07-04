"use client";

import { motion } from "framer-motion";

// مؤشر "اسحب للأسفل" خفي وأنيق — نص صغير شفاف مع سهم بينساب لتحت بهدوء
export default function ScrollHint() {
  return (
    <div
      className="absolute bottom-4 inset-x-0 flex flex-col items-center gap-1 pointer-events-none text-gold-dark/50"
      aria-hidden
    >
      <p className="text-[10px] tracking-[0.25em]">اسحب للأسفل</p>
      <motion.svg
        viewBox="0 0 24 24"
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        animate={{ y: [0, 5, 0], opacity: [0.35, 0.9, 0.35] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </div>
  );
}
