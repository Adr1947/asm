import { motion } from "framer-motion";
import { Star, ShieldCheck, Award, HeartHandshake } from "lucide-react";
import { IMAGES, BUSINESS, BOOKING_URL, CONSULT_URL, TRUST } from "@/lib/content";

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.45 + i * 0.14 },
  }),
};

const TRUST_ICONS = [ShieldCheck, Award, HeartHandshake];

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative w-full overflow-hidden bg-[var(--cream)] pt-36 md:pt-40 pb-0"
    >
      {/* soft sage + gold glows */}
      <div className="pointer-events-none absolute -top-32 -left-40 h-[520px] w-[520px] rounded-full bg-[var(--sage)]/30 blur-[150px]" />
      <div className="pointer-events-none absolute top-40 -right-40 h-[460px] w-[460px] rounded-full bg-[var(--champagne)]/30 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center pb-24 md:pb-28">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 border border-[var(--gold-deep)]/40 rounded-full px-6 py-2 bg-white/50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--sage-deep)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold-deep)]">
              Med Spa ✦ Bethlehem, Georgia
            </span>
          </motion.div>

          <h1 className="mt-8 font-serif-display font-light leading-[0.95] text-[var(--ink)] text-[clamp(2.7rem,6.4vw,6rem)] tracking-tight">
            <span className="reveal-mask">
              <motion.span custom={0} variants={lineVariants} initial="hidden" animate="visible" className="block">
                Refine, Rejuvenate
              </motion.span>
            </span>
            <span className="reveal-mask">
              <motion.span custom={1} variants={lineVariants} initial="hidden" animate="visible" className="block">
                & Reclaim Your{" "}
                <span className="italic gold-gradient-text">Glow</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-8 max-w-lg text-[var(--muted)] text-base md:text-lg font-light leading-relaxed"
          >
            ART Med Spa offers injectables, laser, wellness services and much more in
            Bethlehem, Georgia. Rejuvenate your appearance and enhance your natural beauty
            with advanced medical spa treatments — in a luxurious, professional setting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-book-btn"
              className="inline-flex items-center justify-center bg-[var(--sage-deep)] text-white px-9 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--ink)] transition-colors duration-400"
            >
              Book an Appointment
            </a>
            <a
              href={CONSULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-consult-btn"
              className="inline-flex items-center justify-center border border-[var(--gold-deep)] text-[var(--gold-deep)] px-9 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--gold-deep)] hover:text-white transition-colors duration-400"
            >
              Free Consultation
            </a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm ring-1 ring-inset ring-[var(--line)] shadow-[0_30px_80px_-30px_rgba(110,138,88,0.5)]">
            <img
              src={IMAGES.hero}
              alt="Woman receiving a rejuvenating aesthetic treatment at ART Med Spa, Bethlehem GA"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/20 via-transparent to-transparent" />
          </div>

          {/* floating review card */}
          <motion.div
            initial={{ opacity: 0, y: -20, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            data-testid="hero-review-card"
            className="absolute -top-5 -left-4 md:-left-8 w-60 bg-white text-[var(--ink)] p-5 rounded-sm shadow-[0_20px_50px_-20px_rgba(43,43,38,0.4)] border border-[var(--line)]"
          >
            <div className="flex gap-0.5 text-[var(--gold)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="fill-[var(--gold)]" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-3 font-serif-display text-base leading-snug">
              “The staff made me feel comfortable from the moment I walked in — honest,
              caring and thorough.”
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
              — Sarah M. · Bethlehem
            </p>
          </motion.div>

          {/* floating badge card */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            data-testid="hero-badge-card"
            className="absolute -bottom-6 -right-4 md:-right-8 flex items-center gap-4 bg-[var(--sage-deep)] px-6 py-5 rounded-sm shadow-xl"
          >
            <ShieldCheck size={30} strokeWidth={1.2} className="text-white" />
            <div>
              <p className="font-serif-display text-lg text-white leading-none">Licensed</p>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/70">Professionals</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust strip */}
      <div data-testid="hero-trust-strip" className="relative z-10 bg-[var(--ink)]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-6 flex flex-wrap items-center justify-center md:justify-between gap-x-10 gap-y-4">
          {TRUST.map((t, i) => {
            const Icon = TRUST_ICONS[i] || ShieldCheck;
            return (
              <div key={t} className="flex items-center gap-3">
                <Icon size={20} strokeWidth={1.3} className="text-[var(--champagne)]" />
                <span className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-[var(--cream)]/85">
                  {t}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
