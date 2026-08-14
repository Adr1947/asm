import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" data-testid="faq-section" className="relative py-24 md:py-36 bg-[var(--sage-mist)] text-[var(--ink)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <span className="eyebrow">Questions & Answers</span>
            <h2 className="mt-6 font-serif-display font-light text-5xl md:text-6xl leading-[0.95] tracking-tight text-[var(--ink)]">
              Have questions? <span className="italic sage-gradient-text">We&rsquo;ve got answers.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-[var(--line)]" data-testid={`faq-item-${i}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    data-testid={`faq-toggle-${i}`}
                    className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                  >
                    <span className="font-serif-display text-xl md:text-2xl text-[var(--ink)]/85 group-hover:text-[var(--ink)] transition-colors duration-300">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-[var(--gold-deep)]"
                    >
                      <Plus strokeWidth={1.2} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-10 text-[var(--muted)] font-light leading-relaxed md:text-lg max-w-2xl">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
