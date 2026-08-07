import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" data-testid="faq-section" className="relative py-28 md:py-40 bg-[#050505]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--gs-champagne)]">
              Good to Know
            </span>
            <h2 className="mt-6 font-serif-display font-light text-5xl md:text-6xl leading-[0.95] tracking-tight">
              Questions, <span className="italic gold-gradient-text">answered.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-white/10" data-testid={`faq-item-${i}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    data-testid={`faq-toggle-${i}`}
                    className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                  >
                    <span className="font-serif-display text-xl md:text-2xl text-white/85 group-hover:text-white transition-colors duration-300">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-[var(--gs-gold)]"
                    >
                      <Plus strokeWidth={1} />
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
                        <p className="pb-7 pr-10 text-white/55 font-light leading-relaxed md:text-lg max-w-2xl">
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
