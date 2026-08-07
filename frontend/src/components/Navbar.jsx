import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { NAV_LINKS, IMAGES } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1600px] px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="flex items-center gap-3 group">
          <img src={IMAGES.logo} alt="Gold Skin" className="h-9 w-9 object-contain" />
          <span className="font-serif-display text-lg tracking-[0.25em] text-white/90 hidden sm:block">
            GOLD SKIN
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="relative text-[11px] uppercase tracking-[0.22em] text-white/70 hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-[var(--gs-gold)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a
            href="#contact"
            data-testid="nav-book-now"
            className="hidden lg:inline-flex items-center bg-[var(--gs-ivory)] text-[var(--gs-ink)] px-6 py-2.5 text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--gs-champagne)] transition-colors duration-400"
          >
            Book Now
          </a>
          <button
            data-testid="nav-menu-toggle"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-white"
            aria-label="Menu"
          >
            {open ? <X strokeWidth={1.2} /> : <Menu strokeWidth={1.2} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                  className="font-serif-display text-2xl text-white/85"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-6 pt-4 text-white/60">
                <Instagram strokeWidth={1.2} />
                <Facebook strokeWidth={1.2} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
