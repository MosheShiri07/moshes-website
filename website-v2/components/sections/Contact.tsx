"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/data";

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (res.ok) { setFormState("success"); form.reset(); }
      else { const body = await res.json(); setErrorMsg(body.error ?? "Something went wrong."); setFormState("error"); }
    } catch { setErrorMsg("Network error. Please try again."); setFormState("error"); }
  }

  return (
    <section id="contact" ref={ref} className="py-28 bg-[#f8fafc] dark:bg-black relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.05] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-12">
          <span className="section-tag">06 / Contact</span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-white/[0.06]" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,420px] gap-14 items-start">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Let&apos;s stay
              <br />
              <span className="gradient-text-mint">in touch.</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-500 dark:text-[#6b7280] text-base leading-relaxed max-w-md">
              I&apos;m always open to discussing cloud security architecture, automation best
              practices, or the future of Zero Trust. Whether you&apos;re looking to exchange
              technical insights or connect with a fellow engineer in the ecosystem — my
              door is open.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3 mt-2">
              <ContactInfoRow label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} color="mint" />
              <ContactInfoRow label="LinkedIn" value="linkedin.com/in/moshe-shiri-403581217" href={siteConfig.linkedin} color="blue" />
              <ContactInfoRow label="GitHub" value="github.com/MosheShiri07" href={siteConfig.github} color="blue" />
              <ContactInfoRow label="Location" value={`${siteConfig.location} · Open to remote`} color="mint" />
            </motion.div>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="rounded-2xl p-6 flex flex-col gap-4
              bg-white dark:bg-[#0a0a0a]
              border border-slate-200 dark:border-white/[0.07]
              shadow-sm dark:shadow-none">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#00ff9f]" />
                <span className="font-mono text-[11px] text-slate-400 dark:text-[#4b5563] uppercase tracking-wider">Send a message</span>
              </div>
              <InputField name="name" label="Full Name" type="text" placeholder="John Doe" required disabled={formState === "sending"} />
              <InputField name="email" label="Email Address" type="email" placeholder="john@company.com" required disabled={formState === "sending"} />
              <InputField name="subject" label="Subject" type="text" placeholder="What are you reaching out about?" required disabled={formState === "sending"} />
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-slate-500 dark:text-[#4b5563] uppercase tracking-wider">Message</label>
                <textarea name="message" placeholder="Enter your message or technical inquiry here..." required rows={4}
                  disabled={formState === "sending"}
                  className="w-full rounded-lg text-sm font-mono resize-none focus:outline-none transition-all disabled:opacity-50
                    bg-slate-50 dark:bg-white/[0.03]
                    border border-slate-200 dark:border-white/[0.08]
                    text-slate-900 dark:text-white
                    placeholder-slate-300 dark:placeholder-[#2d3748]
                    px-4 py-3
                    focus:border-sky-400 dark:focus:border-[#00c2ff]/40
                    focus:bg-white dark:focus:bg-[#00c2ff]/[0.02]"
                />
              </div>
              {formState === "error" && <p className="text-xs text-red-500 font-mono">⚠ {errorMsg}</p>}
              {formState === "success" ? (
                <div className="flex items-center gap-2 py-3 px-4 rounded-lg
                  bg-emerald-50 dark:bg-[#00ff9f]/[0.06]
                  border border-emerald-200 dark:border-[#00ff9f]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#00ff9f]" />
                  <span className="text-sm text-emerald-700 dark:text-[#00ff9f] font-mono">Message sent. I&apos;ll be in touch.</span>
                </div>
              ) : (
                <button type="submit" disabled={formState === "sending"}
                  className="w-full py-3 rounded-lg font-bold text-sm text-white dark:text-black transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed
                    bg-emerald-500 dark:bg-[#00ff9f]
                    hover:bg-emerald-600 dark:hover:bg-[#00e58f]">
                  {formState === "sending" ? (
                    <><span className="w-3 h-3 rounded-full border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black animate-spin" />Sending…</>
                  ) : "Send Message"}
                </button>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InputField({ name, label, type, placeholder, required, disabled }: {
  name: string; label: string; type: string; placeholder: string; required?: boolean; disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-mono text-[11px] text-slate-500 dark:text-[#4b5563] uppercase tracking-wider">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required} disabled={disabled}
        className="w-full rounded-lg text-sm font-mono focus:outline-none transition-all disabled:opacity-50
          bg-slate-50 dark:bg-white/[0.03]
          border border-slate-200 dark:border-white/[0.08]
          text-slate-900 dark:text-white
          placeholder-slate-300 dark:placeholder-[#2d3748]
          px-4 py-2.5
          focus:border-sky-400 dark:focus:border-[#00c2ff]/40
          focus:bg-white dark:focus:bg-[#00c2ff]/[0.02]"
      />
    </div>
  );
}

function ContactInfoRow({ label, value, href, color }: { label: string; value: string; href?: string; color: "mint" | "blue" }) {
  const dot = color === "mint" ? "bg-emerald-500 dark:bg-[#00ff9f]" : "bg-sky-500 dark:bg-[#00c2ff]";
  const hover = color === "mint" ? "group-hover:text-emerald-600 dark:group-hover:text-[#00ff9f]" : "group-hover:text-sky-600 dark:group-hover:text-[#00c2ff]";
  const inner = (
    <div className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all border group cursor-pointer
      bg-white dark:bg-[#0a0a0a]
      border-slate-200 dark:border-white/[0.06]
      shadow-sm dark:shadow-none
      hover:border-slate-300 dark:hover:border-white/10">
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
      <span className="font-mono text-[11px] text-slate-400 dark:text-[#4b5563] uppercase tracking-widest w-16 shrink-0">{label}</span>
      <span className={`text-sm text-slate-600 dark:text-[#9ca3af] transition-colors ${href ? hover : ""}`}>{value}</span>
      {href && <span className="ml-auto text-slate-300 dark:text-[#2d3748] group-hover:text-current transition-colors text-xs">↗</span>}
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a> : inner;
}
