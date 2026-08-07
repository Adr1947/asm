import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";
import { IMAGES } from "@/lib/content";

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.4 + i * 0.14 },
  }),
};

const STATS = [
  { value: "40+", label: "Treatments offered" },
  { value: "Physician-guided", label: "Weight loss · Tirzepatide & Semaglutide" },
  { value: "McAllen & RGV", label: "Serving the Rio Grande Valley" },
  // NOTE TO CLIENT: replace one marker above with a real Google rating + review
  // count once confirmed (e.g. "4.9 ★ · 120 Google reviews"). Do not invent numbers.
];

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] pt-28 pb-16 md:pb-24"
    >
      {/* subtle gold glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[var(--gs-gold)]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 min-h-[calc(100vh-11rem)] grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 border border-[var(--gs-gold)]/40 rounded-full px-6 py-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--gs-champagne)]">
              Med Spa ✦ McAllen, TX
            </span>
          </motion.div>

          <h1 className="mt-8 font-serif-display font-light leading-[0.92] text-white text-[clamp(2.8rem,7vw,6.5rem)] tracking-tight">
            <span className="reveal-mask">
              <motion.span custom={0} variants={lineVariants} initial="hidden" animate="visible" className="block">
                Gold Skin
              </motion.span>
            </span>
            <span className="reveal-mask">
              <motion.span custom={1} variants={lineVariants} initial="hidden" animate="visible" className="block italic gold-gradient-text">
                Spa &amp; Beauty
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-8 max-w-md text-white/65 text-base md:text-lg font-light leading-relaxed"
          >
            Medical aesthetics in McAllen, TX — from injectables and the signature
            Gold Skin Facial to physician-guided weight loss. Where clinical expertise
            meets a warm, personal touch, and your natural radiance is simply revealed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#contact"
              data-testid="hero-book-btn"
              className="inline-flex items-center justify-center bg-[var(--gs-gold)] text-black px-9 py-4 text-[11px] uppercase tracking-[0.26em] hover:bg-[var(--gs-champagne)] transition-colors duration-400"
            >
              Reserve Your Visit
            </a>
            <a
              href="#services"
              data-testid="hero-services-btn"
              className="inline-flex items-center justify-center border border-white/25 px-9 py-4 text-[11px] uppercase tracking-[0.26em] text-white hover:border-[var(--gs-gold)] transition-colors duration-400"
            >
              View Treatments
            </a>
          </motion.div>

          {/* trust stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.35 }}
            data-testid="hero-stats"
            className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 pt-8"
          >
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col max-w-[220px]">
                <span className="font-serif-display text-2xl md:text-3xl text-white leading-tight">{s.value}</span>
                <span className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-white/45 leading-snug">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden ring-1 ring-inset ring-white/10">
            <img src="/hero.png" alt="Gold Skin Spa & Beauty interior, McAllen TX" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          </div>

          {/* floating review card - top */}
          <motion.div
            initial={{ opacity: 0, y: -20, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            data-testid="hero-review-card"
            className="absolute -top-5 -left-4 md:-left-8 w-60 bg-[var(--gs-ivory)] text-[var(--gs-ink)] p-5 shadow-2xl"
          >
            <div className="flex gap-0.5 text-[var(--gs-gold-muted)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="fill-[var(--gs-gold-muted)]" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-3 font-serif-display text-base leading-snug">
              “She is skilled and knowledgeable on how to operate the machine for my
              treatment and she explained the treatment to me in detail.”
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[var(--gs-ink)]/60">
              — Crystal Tan
            </p>
          </motion.div>

          {/* floating badge card - bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            data-testid="hero-badge-card"
            className="absolute -bottom-6 -right-4 md:-right-8 flex items-center gap-4 bg-black/80 backdrop-blur-xl border border-[var(--gs-gold)]/30 px-6 py-5"
          >
            <ShieldCheck size={30} strokeWidth={1} className="text-[var(--gs-gold)]" />
            <div>
              <p className="font-serif-display text-lg text-white leading-none">Board-Certified</p>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50">Medical Team</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
