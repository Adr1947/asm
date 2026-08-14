import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import { BUSINESS, HOURS, SERVICES, MORE_SERVICES } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), ...MORE_SERVICES];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please add your name and email so we can reach you.");
      return;
    }
    toast.success("Thank you — our team will be in touch shortly to confirm your visit.");
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const inputClass =
    "w-full bg-white border border-white/70 rounded-sm py-3 px-4 text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-white/70 transition-shadow duration-300";

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
          {/* Contact form (sage card) */}
          <motion.form
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={submit}
            data-testid="contact-form"
            className="bg-[var(--sage-deep)] text-white p-8 md:p-10 rounded-sm flex flex-col gap-4"
          >
            <p className="font-serif-display text-2xl">Request an Appointment</p>
            <p className="text-white/75 text-sm font-light -mt-1 mb-1">
              Tell us a little about you and we&rsquo;ll take care of the rest.
            </p>

            <label htmlFor="cf-name" className="sr-only">Full name</label>
            <input id="cf-name" data-testid="contact-name" placeholder="Full name" aria-label="Full name"
              value={form.name} onChange={update("name")} className={inputClass} />

            <label htmlFor="cf-phone" className="sr-only">Phone number</label>
            <input id="cf-phone" data-testid="contact-phone" type="tel" placeholder="Phone number" aria-label="Phone number"
              value={form.phone} onChange={update("phone")} className={inputClass} />

            <label htmlFor="cf-email" className="sr-only">Email address</label>
            <input id="cf-email" data-testid="contact-email" type="email" placeholder="Email address" aria-label="Email address"
              value={form.email} onChange={update("email")} className={inputClass} />

            {/* Service dropdown with chevron */}
            <label htmlFor="cf-service" className="sr-only">Service of interest</label>
            <div className="relative">
              <select id="cf-service" data-testid="contact-service" aria-label="Service of interest"
                value={form.service} onChange={update("service")}
                className={`${inputClass} appearance-none pr-11 cursor-pointer ${form.service ? "" : "text-[var(--muted)]"}`}>
                <option value="">Service of interest</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s} className="text-[var(--ink)]">{s}</option>
                ))}
              </select>
              <ChevronDown size={18} strokeWidth={1.6} aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--sage-deep)]" />
            </div>

            <label htmlFor="cf-message" className="sr-only">Message</label>
            <textarea id="cf-message" data-testid="contact-message" rows={3} placeholder="Tell us about your goals (optional)"
              aria-label="Message" value={form.message} onChange={update("message")}
              className={`${inputClass} resize-none`} />

            <button type="submit" data-testid="contact-submit"
              className="mt-1 bg-[var(--ink)] text-white py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-white hover:text-[var(--sage-deep)] transition-colors duration-400">
              Send Request
            </button>
          </motion.form>

          {/* Get In Touch + Working Hours (middle card) */}
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
            <div className="mt-7 flex flex-col gap-6">
              <div className="flex items-start gap-4" data-testid="contact-address">
                <MapPin size={20} strokeWidth={1.4} className="text-[var(--gold-deep)] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Location</p>
                  <p className="mt-1.5 text-[var(--ink-soft)] font-light">{BUSINESS.address}</p>
                </div>
              </div>
              <a href={BUSINESS.phoneHref} className="flex items-start gap-4 group" data-testid="contact-phone-link">
                <Phone size={20} strokeWidth={1.4} className="text-[var(--gold-deep)] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Call</p>
                  <p className="mt-1.5 text-[var(--ink-soft)] font-light group-hover:text-[var(--sage-deep)] transition-colors">{BUSINESS.phone}</p>
                </div>
              </a>
              <a href={BUSINESS.emailHref} className="flex items-start gap-4 group" data-testid="contact-email-link">
                <Mail size={20} strokeWidth={1.4} className="text-[var(--gold-deep)] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Email</p>
                  <p className="mt-1.5 text-[var(--ink-soft)] font-light group-hover:text-[var(--sage-deep)] transition-colors break-all">{BUSINESS.email}</p>
                </div>
              </a>
            </div>

            {/* Working hours */}
            <div className="mt-8 pt-7 border-t border-[var(--line)]" data-testid="contact-hours">
              <div className="flex items-center gap-3">
                <Clock size={18} strokeWidth={1.4} className="text-[var(--gold-deep)]" aria-hidden="true" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Working Hours</p>
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-[var(--ink-soft)] font-light">{h.day}</span>
                    <span className={h.time === "Closed" ? "text-[var(--muted)]" : "text-[var(--ink)] font-medium"}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
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
              title="ART Med Spa — Bethlehem, GA location on Google Maps"
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
