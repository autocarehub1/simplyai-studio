"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import VoiceWaveform from "@/components/VoiceWaveform";

// Looks for /public/audio/demo-call.mp3. Until a real recording is added
// there, this degrades to a CTA instead of a broken/silent player — never
// ship a fake or unapproved call recording as if it were real.
export default function DemoAudio() {
  const [available, setAvailable] = useState(true);

  return (
    <section className="py-16 md:py-20 bg-navy-mid overflow-hidden">
      <Reveal className="max-w-3xl mx-auto px-6 text-center">
        <div className="text-xs font-bold uppercase tracking-widest mb-3 text-gold-light">
          Hear It For Yourself
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
          This Is What Your Customers Will Hear
        </h2>

        <VoiceWaveform height={56} className="mb-6" />

        {available ? (
          <>
            <audio
              controls
              preload="none"
              className="w-full max-w-md mx-auto mb-4"
              onError={() => setAvailable(false)}
            >
              <source src="/audio/demo-call.mp3" type="audio/mpeg" />
            </audio>
            <p className="text-sm text-white/50">
              A real call with one of our AI voice agents — answered, quoted, and booked.
            </p>
          </>
        ) : (
          <>
            <p className="text-sm leading-relaxed mb-6 text-white/55 max-w-md mx-auto">
              A recorded sample is on the way. In the meantime, the fastest way to
              hear your agent in action is a live demo call — we&apos;ll call you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm bg-gold hover:bg-gold-light text-navy transition-all duration-200"
            >
              Book a Free Demo Call →
            </Link>
          </>
        )}
      </Reveal>
    </section>
  );
}
