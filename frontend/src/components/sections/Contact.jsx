import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BUSINESS, HOURS, BOOKING_URL } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export default function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 md:py-36 bg-[var(--cream)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">Visit Us</span>
          <h2 className="mt-5 font-serif-display font-light text-5xl md:text-7xl leading-[0.95] tracking-tight text-[var(--ink)]">
            Come Say <span className="italic sage-gradient-text">Hello</span>
          </h2>
          <p className="mt-5 text-[var(--muted)] font-light md:text-lg">{BUSINESS.serving}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Working hours + CTA */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            data-testid="contact-hours-card"
            className="bg-[var(--sage-deep)] text-white p-8 md:p-10 rounded-sm flex flex-col"
          >
            <div className="flex items-center gap-3">
              <Clock size={20} strokeWidth={1.3} className="text-[var(--champagne)]" />
              <p className="font-serif-display text-2xl">Working Hours</p>
            </div>
            <ul className="mt-7 flex flex-col gap-3.5">
              {HOURS.map((h) => (
                <li key={h.day} className="flex items-center justify-between text-sm border-b border-white/15 pb-3.5 last:border-0">
                  <span className="text-white/85">{h.day}</span>
                  <span className={h.time === "Closed" ? "text-white/45" : "text-white font-medium"}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-book-btn"
              className="mt-8 inline-flex items-center justify-center bg-white text-[var(--sage-deep)] py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--champagne)] transition-colors duration-400"
            >
              Book an Appointment
            </a>
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            data-testid="contact-info-card"
            className="bg-white border border-[var(--line)] p-8 md:p-10 rounded-sm flex flex-col"
          >
            <p className="font-serif-display text-2xl text-[var(--ink)]">Get In Touch</p>
            <div className="mt-8 flex flex-col gap-7">
              <div className="flex items-start gap-4" data-testid="contact-address">
                <MapPin size={20} strokeWidth={1.3} className="text-[var(--gold-deep)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Location</p>
                  <p className="mt-1.5 text-[var(--ink-soft)] font-light">{BUSINESS.address}</p>
                </div>
              </div>
              <a href={BUSINESS.phoneHref} className="flex items-start gap-4 group" data-testid="contact-phone">
                <Phone size={20} strokeWidth={1.3} className="text-[var(--gold-deep)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Call</p>
                  <p className="mt-1.5 text-[var(--ink-soft)] font-light group-hover:text-[var(--sage-deep)] transition-colors">{BUSINESS.phone}</p>
                </div>
              </a>
              <a href={BUSINESS.emailHref} className="flex items-start gap-4 group" data-testid="contact-email">
                <Mail size={20} strokeWidth={1.3} className="text-[var(--gold-deep)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Email</p>
                  <p className="mt-1.5 text-[var(--ink-soft)] font-light group-hover:text-[var(--sage-deep)] transition-colors">{BUSINESS.email}</p>
                </div>
              </a>
            </div>
            <p className="mt-auto pt-8 font-serif-display italic text-lg text-[var(--sage-deep)]">
              A calm, refined space — designed for you to relax and leave feeling confident.
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            data-testid="contact-map-card"
            className="relative min-h-[420px] lg:min-h-full border border-[var(--line)] rounded-sm overflow-hidden"
          >
            <iframe
              title="ART Med Spa — Bethlehem, GA location"
              src={BUSINESS.mapEmbed}
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="pointer-events-none absolute bottom-5 left-5 bg-white/90 backdrop-blur-md border border-[var(--line)] px-5 py-3 rounded-sm">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold-deep)]">Find us</p>
              <p className="mt-1 text-[var(--ink)] font-light text-sm">Bethlehem, GA 30620</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
