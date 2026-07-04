// زخارف SVG نباتية ذهبية line-art — تُستخدم بعدة أماكن لتوحيد الهوية البصرية

export function FloralBranch({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden
    >
      <g stroke="#C9A227" strokeWidth="1.4" strokeLinecap="round">
        <path d="M10 110 Q60 70 100 60 T190 20" />
        <path d="M60 82 q-6 -18 -22 -22" />
        <path d="M100 60 q-2 -20 -16 -28" />
        <path d="M140 42 q2 -18 16 -24" />
        {/* أوراق */}
        <path d="M38 88 q-14 -4 -20 6 q12 6 20 -6z" fill="#C9A227" fillOpacity="0.25" />
        <path d="M84 66 q-14 -6 -22 2 q10 8 22 -2z" fill="#C9A227" fillOpacity="0.25" />
        <path d="M128 48 q-12 -8 -22 -2 q8 10 22 2z" fill="#C9A227" fillOpacity="0.25" />
        <path d="M168 30 q-10 -10 -20 -6 q6 12 20 6z" fill="#C9A227" fillOpacity="0.25" />
      </g>
      {/* وردة صغيرة */}
      <g stroke="#B8860B" strokeWidth="1.2" fill="none">
        <circle cx="190" cy="18" r="5" />
        <circle cx="190" cy="18" r="9" strokeDasharray="3 3" />
      </g>
    </svg>
  );
}

export function Bee({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 32" fill="none" className={className} aria-hidden>
      <g stroke="#B8860B" strokeWidth="1.2">
        <ellipse cx="20" cy="20" rx="9" ry="6.5" fill="#C9A227" fillOpacity="0.3" />
        <path d="M15 15 Q10 6 6 8" />
        <path d="M25 15 Q30 6 34 8" />
        <path d="M16 17 v7 M20 15.5 v9 M24 17 v7" />
        <circle cx="11.5" cy="18" r="2.5" fill="#F7E9DE" />
      </g>
    </svg>
  );
}

// إطار زخرفي دائري — يُستخدم حول الختم وبالسكشن الختامي
export function OrnamentalRing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" fill="none" className={className} aria-hidden>
      <circle cx="110" cy="110" r="104" stroke="#C9A227" strokeWidth="1" strokeDasharray="1 5" />
      <circle cx="110" cy="110" r="96" stroke="#C9A227" strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}

// نمط خلفية شفاف من فروع نباتية — يوضع فوق الخلفية بشفافية خفيفة
export function BackgroundPattern({ opacity = 0.1 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity }}
      aria-hidden
    >
      <FloralBranch className="absolute -top-2 -right-6 w-44 rotate-180" />
      <FloralBranch className="absolute top-24 -left-8 w-40" flip />
      <FloralBranch className="absolute bottom-24 -right-8 w-40" />
      <FloralBranch className="absolute -bottom-2 -left-6 w-44" flip />
      <Bee className="absolute top-[18%] left-[16%] w-7 -rotate-12" />
      <Bee className="absolute bottom-[22%] right-[14%] w-6 rotate-12" />
    </div>
  );
}
