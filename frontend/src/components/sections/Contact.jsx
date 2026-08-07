import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SERVICES } from "@/lib/content";

const INFO = [
  { icon: MapPin, label: "Studio", value: "128 Aurelia Avenue, Beverly Hills, CA" },
  { icon: Phone, label: "Call", value: "+1 (310) 555-0147" },
  { icon: Mail, label: "Email", value: "hello@goldskin.com" },
  { icon: Clock, label: "Hours", value: "Tue – Sat · 9am – 7pm" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please add your name and email.");
      return;
    }
    toast.success("Request received — our concierge will be in touch shortly.");
    setForm({ name: "", email: "", service: "", message: "" });
  };

  const inputCls =
    "w-full bg-transparent border-b border-white/20 py-4 px-1 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--gs-gold)] transition-colors duration-300";

  return (
    <section id="contact" data-testid="contact-section" className="relative py-28 md:py-40 bg-[#080808]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--gs-champagne)]">
              Book Your Visit
            </span>
            <h2 className="mt-6 font-serif-display font-light text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Begin your <span className="italic gold-gradient-text">ritual.</span>
            </h2>
            <p className="mt-6 text-white/55 font-light md:text-lg max-w-md">
              Share a few details and our concierge will craft the perfect appointment
              around you.
            </p>

            <div className="mt-14 grid sm:grid-cols-2 gap-8">
              {INFO.map((it) => (
                <div key={it.label} className="flex items-start gap-4" data-testid={`contact-info-${it.label.toLowerCase()}`}>
                  <it.icon size={20} strokeWidth={1} className="text-[var(--gs-gold)] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">{it.label}</p>
                    <p className="mt-1 text-white/80 font-light">{it.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={submit}
            data-testid="contact-form"
            className="flex flex-col gap-8"
          >
            <input data-testid="contact-name" className={inputCls} placeholder="Full name" value={form.name} onChange={update("name")} />
            <input data-testid="contact-email" type="email" className={inputCls} placeholder="Email address" value={form.email} onChange={update("email")} />
            <select data-testid="contact-service" className={`${inputCls} appearance-none cursor-pointer`} value={form.service} onChange={update("service")}>
              <option value="" className="bg-[#0a0a0a]">Select a treatment</option>
              {SERVICES.map((s) => (
                <option key={s.n} value={s.title} className="bg-[#0a0a0a]">{s.title}</option>
              ))}
            </select>
            <textarea data-testid="contact-message" rows={3} className={`${inputCls} resize-none`} placeholder="Tell us about your goals (optional)" value={form.message} onChange={update("message")} />
            <button
              type="submit"
              data-testid="contact-submit"
              className="mt-2 self-start border border-[var(--gs-gold)]/70 px-11 py-4 text-[11px] uppercase tracking-[0.26em] text-white hover:bg-[var(--gs-gold)] hover:text-black transition-colors duration-400"
            >
              Request Appointment
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
