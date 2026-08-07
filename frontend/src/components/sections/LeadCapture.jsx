import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

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
    <section data-testid="lead-capture-section" className="relative py-24 md:py-32 bg-[var(--gs-ivory)] text-[var(--gs-ink)]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--gs-gold-muted)]">
          The Inner Circle
        </span>
        <h2 className="mt-6 font-serif-display font-light text-4xl md:text-6xl leading-[1] tracking-tight text-[var(--gs-ink)]">
          First access to <span className="italic text-[var(--gs-gold-muted)]">seasonal rituals.</span>
        </h2>
        <p className="mt-5 text-[var(--gs-ink)]/60 font-light md:text-lg max-w-xl mx-auto">
          Exclusive treatment previews, private events and quiet offers — reserved
          entirely for members of the list.
        </p>

        <form onSubmit={submit} data-testid="lead-capture-form" className="mt-11 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            data-testid="lead-capture-email"
            className="flex-1 bg-white/70 border border-[var(--gs-ink)]/15 py-4 px-5 text-[var(--gs-ink)] placeholder:text-[var(--gs-ink)]/40 focus:outline-none focus:border-[var(--gs-gold-muted)] transition-colors duration-300"
          />
          <button
            type="submit"
            data-testid="lead-capture-submit"
            className="bg-[var(--gs-ink)] text-[var(--gs-ivory)] px-9 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-[var(--gs-gold-muted)] hover:text-black transition-colors duration-400 whitespace-nowrap"
          >
            Join the Circle
          </button>
        </form>
        <p className="mt-4 text-[11px] text-[var(--gs-ink)]/40">No spam, ever. Unsubscribe anytime.</p>
      </motion.div>
    </section>
  );
}
