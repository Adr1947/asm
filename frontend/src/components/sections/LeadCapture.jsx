import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { IMAGES } from "@/lib/content";

export default function LeadCapture() {
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }
    toast.success("You're on the list — welcome to Gold Skin.");
    setEmail("");
  };

  return (
    <section data-testid="lead-capture-section" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.candles} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#050505]/85" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--gs-champagne)]">
          The Inner Circle
        </span>
        <h2 className="mt-6 font-serif-display font-light text-4xl md:text-6xl leading-[1] tracking-tight">
          Members receive first access to <span className="italic gold-gradient-text">seasonal rituals.</span>
        </h2>
        <p className="mt-6 text-white/60 font-light md:text-lg">
          Exclusive treatment previews, private events and quiet offers — reserved for the list.
        </p>

        <form onSubmit={submit} data-testid="lead-capture-form" className="mt-12 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            data-testid="lead-capture-email"
            className="flex-1 bg-transparent border-b border-white/25 py-4 px-1 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--gs-gold)] transition-colors duration-300"
          />
          <button
            type="submit"
            data-testid="lead-capture-submit"
            className="border border-[var(--gs-gold)]/70 px-9 py-4 text-[11px] uppercase tracking-[0.24em] text-white hover:bg-[var(--gs-gold)] hover:text-black transition-colors duration-400 whitespace-nowrap"
          >
            Join the Circle
          </button>
        </form>
      </motion.div>
    </section>
  );
}
