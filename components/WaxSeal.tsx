import { WEDDING } from "@/lib/constants";

// ختم شمعي وردي 3D واقعي — إضاءة specular حقيقية على جسم الشمع،
// نقش بارز (زي الختم الحقيقي: القالب محفور فالنقش بيطلع بارز)،
// حواف متكتلة، سطح لامع، وظل ملامس للورق
export default function WaxSeal({ size = 160 }: { size?: number }) {
  const blobPath = `M100 12
    C117 9 129 17 143 21 C158 25 172 33 178 47 C184 60 178 72 185 86
    C192 102 188 118 179 130 C170 143 168 158 153 168 C139 178 124 176 110 184
    C95 192 78 186 66 177 C53 168 38 164 29 149 C21 136 25 122 18 108
    C10 92 15 76 24 64 C33 51 37 36 52 27 C66 18 84 15 100 12 Z`;

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden
      style={{ display: "block", overflow: "visible" }}
    >
      <defs>
        {/* جسم الشمع — إضاءة من أعلى اليسار */}
        <radialGradient id="waxBody" cx="38%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#F4C6BD" />
          <stop offset="42%" stopColor="#E7ABA0" />
          <stop offset="75%" stopColor="#D3948A" />
          <stop offset="100%" stopColor="#A96A5F" />
        </radialGradient>
        <radialGradient id="waxDish" cx="46%" cy="40%" r="64%">
          <stop offset="0%" stopColor="#ECB4A9" />
          <stop offset="62%" stopColor="#E2A398" />
          <stop offset="100%" stopColor="#B87B70" />
        </radialGradient>
        <radialGradient id="waxSheen" cx="32%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#FFF8F4" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#FFF0EA" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFF0EA" stopOpacity="0" />
        </radialGradient>

        {/* ظل الختم على الورق — ظل ناعم + ظل ملامس غامق */}
        <filter id="waxShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="7" stdDeviation="7" floodColor="#8A5148" floodOpacity="0.42" />
          <feDropShadow dx="0" dy="2" stdDeviation="1.2" floodColor="#5F332C" floodOpacity="0.45" />
        </filter>

        {/* إضاءة 3D لجسم الشمع — لمعة specular على الحواف والكتل */}
        <filter id="waxGloss" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
          <feSpecularLighting
            in="blur"
            surfaceScale="6"
            specularConstant="0.75"
            specularExponent="22"
            lightingColor="#FFF6F1"
            result="spec"
          >
            <fePointLight x="58" y="22" z="150" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specIn" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="specIn" />
          </feMerge>
        </filter>

        {/* إضاءة 3D للنقش البارز — بتلمّع حواف الحروف والإكليل */}
        <filter id="motifGloss" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
          <feSpecularLighting
            in="blur"
            surfaceScale="2.6"
            specularConstant="0.65"
            specularExponent="9"
            lightingColor="#FFEFE8"
            result="spec"
          >
            <feDistantLight azimuth="225" elevation="42" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specIn" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="specIn" />
          </feMerge>
        </filter>

        <filter id="blur1"><feGaussianBlur stdDeviation="0.9" /></filter>
        <filter id="blur2"><feGaussianBlur stdDeviation="2.4" /></filter>
      </defs>

      {/* ===== جسم الختم مع الظل واللمعة الـ 3D ===== */}
      <g filter="url(#waxShadow)">
        <g filter="url(#waxGloss)">
          <path d={blobPath} fill="url(#waxBody)" />
          {/* كتل شمع سايحة عالحواف */}
          <ellipse cx="178" cy="90" rx="10" ry="7" fill="url(#waxBody)" transform="rotate(20 178 90)" />
          <ellipse cx="30" cy="70" rx="9" ry="6" fill="url(#waxBody)" transform="rotate(-25 30 70)" />
          <ellipse cx="60" cy="176" rx="11" ry="6.5" fill="url(#waxBody)" transform="rotate(15 60 176)" />
          <ellipse cx="152" cy="30" rx="8" ry="5.5" fill="url(#waxBody)" transform="rotate(30 152 30)" />
          <ellipse cx="105" cy="188" rx="7" ry="5" fill="url(#waxBody)" />
        </g>
      </g>

      {/* سماكة الحافة — ظل داخلي حوالين الجسم */}
      <path
        d={blobPath}
        fill="none"
        stroke="#8F564D"
        strokeWidth="6"
        opacity="0.3"
        filter="url(#blur2)"
      />

      {/* ===== الصحن المضغوط (أثر قالب الختم) ===== */}
      <circle cx="100" cy="100" r="66" fill="url(#waxDish)" />
      {/* التجويف مظلل من فوق (الضوء من فوق) */}
      <path d="M38 86 A 64 64 0 0 1 162 86" fill="none" stroke="#834D44" strokeWidth="7" opacity="0.42" filter="url(#blur2)" />
      <path d="M44 78 A 63 63 0 0 1 156 78" fill="none" stroke="#6E3E36" strokeWidth="2.5" opacity="0.3" filter="url(#blur1)" />
      {/* ولمعة من تحت */}
      <path d="M42 120 A 62 62 0 0 0 158 120" fill="none" stroke="#FBDDD4" strokeWidth="5" opacity="0.7" filter="url(#blur1)" />

      {/* الحافة البارزة بين الصحن والجسم — لمعة فوقها وظل تحتها */}
      <circle cx="100" cy="100" r="70.5" fill="none" stroke="#F8D3CA" strokeWidth="2.6" opacity="0.85" />
      <circle cx="100" cy="100" r="74" fill="none" stroke="#96594F" strokeWidth="2.2" opacity="0.4" filter="url(#blur1)" />

      {/* حلقة نقاط منقوشة */}
      <circle cx="100" cy="100" r="57" fill="none" stroke="#9E6157" strokeWidth="1.7" strokeDasharray="0.5 5.2" strokeLinecap="round" opacity="0.5" />

      {/* ===== النقش البارز: ظل تحت-يمين، إضاءة فوق-يسار، ولمعة 3D ===== */}
      {/* الظل اللي بيرميه النقش البارز على الصحن */}
      <g transform="translate(2 2.6)" filter="url(#blur1)" opacity="0.55">
        <SealMotif color="#7E4B43" />
      </g>
      {/* حافة إضاءة أعلى النقش */}
      <g transform="translate(-1 -1.3)" opacity="0.85">
        <SealMotif color="#F9DED6" />
      </g>
      {/* جسم النقش البارز بلون شمع أفتح + لمعة specular */}
      <g filter="url(#motifGloss)">
        <SealMotif color="#DE9C90" />
      </g>

      {/* ===== لمعات نهائية ===== */}
      <ellipse cx="68" cy="50" rx="44" ry="27" fill="url(#waxSheen)" transform="rotate(-18 68 50)" />
      <ellipse cx="150" cy="150" rx="20" ry="9" fill="#FFF3EE" opacity="0.16" transform="rotate(-40 150 150)" filter="url(#blur2)" />
      {/* لمعات حادة صغيرة عالكتل */}
      <ellipse cx="174" cy="86" rx="3" ry="1.6" fill="#FFFAF7" opacity="0.85" transform="rotate(20 174 86)" />
      <ellipse cx="33" cy="67" rx="2.6" ry="1.4" fill="#FFFAF7" opacity="0.8" transform="rotate(-25 33 67)" />
      <ellipse cx="63" cy="173" rx="3" ry="1.4" fill="#FFFAF7" opacity="0.6" transform="rotate(15 63 173)" />
    </svg>
  );
}

// نقش الختم — إكليل غار + حرفا العروسين
function SealMotif({ color }: { color: string }) {
  return (
    <g fill="none" stroke={color} strokeLinecap="round">
      {/* الحروف */}
      <text
        x="84"
        y="114"
        textAnchor="middle"
        fontFamily="var(--font-script), 'Segoe Script', cursive"
        fontSize="52"
        fill={color}
        stroke="none"
      >
        {WEDDING.groomInitial}
      </text>
      <text
        x="118"
        y="126"
        textAnchor="middle"
        fontFamily="var(--font-script), 'Segoe Script', cursive"
        fontSize="52"
        fill={color}
        stroke="none"
      >
        {WEDDING.brideInitial}
      </text>

      {/* إكليل الغار — غصنان متقابلان */}
      <g strokeWidth="1.6">
        <path d="M62 142 Q46 128 44 104 Q44 84 56 68" />
        <path d="M58 134 q-9 -1 -13 6 q9 4 13 -6z" fill={color} />
        <path d="M50 120 q-9 -3 -14 3 q8 6 14 -3z" fill={color} />
        <path d="M46 104 q-9 -4 -14 1 q7 7 14 -1z" fill={color} />
        <path d="M47 89 q-8 -6 -14 -2 q5 8 14 2z" fill={color} />
        <path d="M53 75 q-6 -8 -13 -6 q3 9 13 6z" fill={color} />
        <path d="M138 142 Q154 128 156 104 Q156 84 144 68" />
        <path d="M142 134 q9 -1 13 6 q-9 4 -13 -6z" fill={color} />
        <path d="M150 120 q9 -3 14 3 q-8 6 -14 -3z" fill={color} />
        <path d="M154 104 q9 -4 14 1 q-7 7 -14 -1z" fill={color} />
        <path d="M153 89 q8 -6 14 -2 q-5 8 -14 2z" fill={color} />
        <path d="M147 75 q6 -8 13 -6 q-3 9 -13 6z" fill={color} />
      </g>

      {/* نجمة صغيرة فوق الحروف */}
      <g strokeWidth="1.4">
        <path d="M100 58 v8 M96 62 h8" />
      </g>
    </g>
  );
}
