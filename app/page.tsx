"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Cover from "@/components/Cover";
import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import Details from "@/components/sections/Details";
import Program from "@/components/sections/Program";
import Gallery from "@/components/sections/Gallery";
import Rsvp from "@/components/sections/Rsvp";
import Closing from "@/components/sections/Closing";

// مدة أنيميشن فتح الظرف كاملة (كسر الختم + فتح القلبة + طلوع الرسالة) بالمللي ثانية
const SEAL_OPEN_DURATION = 2400;

export default function Home() {
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleOpen = useCallback(() => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => setOpened(true), SEAL_OPEN_DURATION);
  }, [opening]);

  return (
    // عالديسكتوب: بطاقة بعرض موبايل بنص الشاشة، عالموبايل: كامل الشاشة
    <main className="min-h-dvh flex items-center justify-center">
      <div className="relative w-full h-dvh sm:max-w-[420px] sm:shadow-2xl sm:shadow-ink/20 overflow-hidden bg-blush">
        <AnimatePresence>
          {!opened && <Cover key="cover" onOpen={handleOpen} opening={opening} />}
        </AnimatePresence>

        {opened && (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="snap-container"
          >
            <Hero />
            <Countdown />
            <Details />
            <Program />
            <Gallery />
            <Rsvp />
            <Closing />
          </motion.div>
        )}
      </div>
    </main>
  );
}
