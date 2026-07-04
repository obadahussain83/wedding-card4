"use client";

import { useState, type FormEvent } from "react";
import Reveal from "../Reveal";
import ScrollHint from "../ScrollHint";
import { BackgroundPattern } from "../Ornaments";

export default function Rsvp() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    // TODO: اربط الفورم بخدمة خارجية (Google Form / API) لتخزين الردود
    setSubmitted(true);
  };

  return (
    <section className="snap-section flex flex-col items-center justify-center bg-blush text-center px-6">
      <BackgroundPattern opacity={0.08} />

      <Reveal>
        <h2 className="font-arabic text-3xl text-ink mb-2">تأكيد الحضور</h2>
        <div className="mx-auto h-px w-24 bg-gold/70 mb-8" />
      </Reveal>

      {submitted ? (
        <Reveal>
          <div className="max-w-xs rounded-2xl border border-gold/50 bg-white/50 p-8">
            <p className="text-2xl mb-2">🤍</p>
            <p className="font-arabic text-xl text-ink">
              {attending === "yes"
                ? "شكراً إلك! بنستناك عالفرح"
                : "شكراً لردّك، رح نشتاقلك"}
            </p>
          </div>
        </Reveal>
      ) : (
        <Reveal delay={0.15} className="w-full max-w-xs">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gold/50 bg-white/40 backdrop-blur-sm p-6 space-y-4 text-right"
          >
            <div>
              <label htmlFor="rsvp-name" className="block text-sm text-ink/80 mb-1.5">
                الاسم الكريم
              </label>
              <input
                id="rsvp-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="اكتب اسمك"
                className="w-full rounded-lg border border-gold/40 bg-white/70 px-3 py-2.5 text-sm outline-none focus:border-gold-dark"
              />
            </div>

            <div>
              <label htmlFor="rsvp-guests" className="block text-sm text-ink/80 mb-1.5">
                عدد الأشخاص
              </label>
              <select
                id="rsvp-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full rounded-lg border border-gold/40 bg-white/70 px-3 py-2.5 text-sm outline-none focus:border-gold-dark"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setAttending("yes")}
                className={`flex-1 rounded-lg border py-2.5 text-sm transition-colors ${
                  attending === "yes"
                    ? "border-gold-dark bg-gold-dark text-white"
                    : "border-gold/40 bg-white/50 text-ink/70"
                }`}
              >
                رح أحضر 🎉
              </button>
              <button
                type="button"
                onClick={() => setAttending("no")}
                className={`flex-1 rounded-lg border py-2.5 text-sm transition-colors ${
                  attending === "no"
                    ? "border-gold-dark bg-gold-dark text-white"
                    : "border-gold/40 bg-white/50 text-ink/70"
                }`}
              >
                ما رح أقدر
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gold-dark py-3 text-sm text-white shadow-md active:scale-95 transition-transform"
            >
              إرسال التأكيد
            </button>
          </form>
        </Reveal>
      )}

      <ScrollHint />
    </section>
  );
}
