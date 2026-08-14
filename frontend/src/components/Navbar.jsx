import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook, Phone } from "lucide-react";
import { NAV_LINKS, IMAGES, BUSINESS, BOOKING_URL } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="navbar"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Announcement bar */}
      <div className="bg-[var(--ink)] text-[var(--cream)] text-center text-[11px] md:text-xs tracking-[0.14em] py-2.5 px-4">
        <span className="text-[var(--champagne)] font-medium">{BUSINESS.promo}</span>
        <span className="mx-2 opacity-40">|</span>
        <a
          href="#contact"
          data-testid="announce-consult"
          className="underline underline-offset-4 decoration-[var(--gold)] hover:text-[var(--champagne)] transition-colors duration-300"
        >
          Get a Free Consultation Today
        </a>
      </div>

      <nav
        className={`transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ${
          scrolled
            ? "bg-[rgba(251,250,246,0.85)] backdrop-blur-xl border-b border-[var(--line)] shadow-[0_4px_30px_rgba(43,43,38,0.06)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-[72px] flex items-center justify-between">
          <a href="#top" data-testid="nav-logo" className="flex items-center gap-3 group">
            <img src={IMAGES.logo} alt="ART Med Spa" width={44} height={44} className="h-11 w-11 object-contain" />
            <span className="font-serif-display text-xl tracking-[0.28em] text-[var(--ink)] hidden sm:block">
              ART MED SPA
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className="relative text-[11px] uppercase tracking-[0.2em] text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-[var(--gold-deep)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-book-now"
              className="hidden lg:inline-flex items-center bg-[var(--sage-deep)] text-white px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] hover:bg-[var(--ink)] transition-colors duration-400"
            >
              Book an Appointment
            </a>
            <button
              data-testid="nav-menu-toggle"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden text-[var(--ink)]"
              aria-label="Menu"
            >
              {open ? <X strokeWidth={1.3} /> : <Menu strokeWidth={1.3} />}
            </button>
          </div>
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
            className="lg:hidden overflow-hidden bg-[var(--cream)] backdrop-blur-xl border-t border-[var(--line)]"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                  className="font-serif-display text-3xl text-[var(--ink)]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="mobile-book-now"
                className="mt-2 inline-flex items-center justify-center bg-[var(--sage-deep)] text-white px-6 py-3.5 text-[11px] uppercase tracking-[0.2em]"
              >
                Book an Appointment
              </a>
              <div className="flex items-center gap-6 pt-4 text-[var(--sage-deep)]">
                <Instagram strokeWidth={1.3} />
                <Facebook strokeWidth={1.3} />
                <a href={BUSINESS.phoneHref} className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
                  <Phone size={16} strokeWidth={1.3} /> {BUSINESS.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
