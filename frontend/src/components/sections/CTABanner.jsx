import { motion } from "framer-motion";
import { BUSINESS, BOOKING_URL } from "@/lib/content";

export default function CTABanner() {
  return (
    <section data-testid="cta-banner" className="relative py-20 md:py-28 bg-[var(--ink)] overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[rgba(94,122,74,0.4)] blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[rgba(110,87,23,0.3)] blur-[130px]" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--champagne)]">
          {BUSINESS.promo}
        </span>
        <h2 className="mt-6 font-serif-display font-light text-4xl md:text-6xl leading-[1.02] tracking-tight text-[var(--cream)]">
          Ready to reclaim{" "}
          <span className="italic gold-gradient-text">your glow?</span>
        </h2>
        <p className="mt-5 text-[rgba(251,250,246,0.7)] font-light md:text-lg max-w-xl mx-auto">
          Schedule your consultation today and start your journey to enhanced natural
          beauty with our licensed professionals in Bethlehem, GA.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="cta-book"
            className="inline-flex items-center justify-center bg-[var(--sage)] text-[var(--ink)] px-10 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-white transition-colors duration-400"
          >
            Book an Appointment
          </a>
          <a
            href="#contact"
            data-testid="cta-consult"
            className="inline-flex items-center justify-center border border-[rgba(228,212,168,0.6)] text-[var(--champagne)] px-10 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--champagne)] hover:text-[var(--ink)] transition-colors duration-400"
          >
            Free Consultation
          </a>
        </div>
      </motion.div>
    </section>
  );
}
