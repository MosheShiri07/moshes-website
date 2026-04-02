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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        const body = await res.json();
        setErrorMsg(body.error ?? "Something went wrong.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setFormState("error");
    }
  }

  return (
    <section id="contact" ref={ref} className="py-28 bg-black relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00ff9f]/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="section-tag">06 / Contact</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,420px] gap-14 items-start">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Let&apos;s build
              <br />
              <span className="gradient-text-mint">something.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#6b7280] text-base leading-relaxed max-w-md"
            >
              I&apos;m open to senior engineering roles, consulting engagements, and
              interesting security/cloud architecture conversations. No recruiters for
              junior roles, please.
            </motion.p>

            {/* Contact info cards */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3 mt-2"
            >
              <ContactInfoRow
                label="Email"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
                color="mint"
              />
              <ContactInfoRow
                label="LinkedIn"
                value="linkedin.com/in/mosheshiri"
                href={siteConfig.linkedin}
                color="blue"
              />
              <ContactInfoRow
                label="GitHub"
                value="github.com/MosheShiri07"
                href={siteConfig.github}
                color="blue"
              />
              <ContactInfoRow
                label="Location"
                value={`${siteConfig.location} · Open to remote`}
                color="mint"
              />
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 border border-white/[0.07] flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f]" />
                <span className="font-mono text-[11px] text-[#4b5563] uppercase tracking-wider">
                  Send a message
                </span>
              </div>

              <InputField
                name="name"
                label="Full Name"
                type="text"
                placeholder="John Doe"
                required
                disabled={formState === "sending"}
              />
              <InputField
                name="email"
                label="Email Address"
                type="email"
                placeholder="john@company.com"
                required
                disabled={formState === "sending"}
              />
              <InputField
                name="subject"
                label="Subject"
                type="text"
                placeholder="Senior DevSecOps Role · Consulting"
                required
                disabled={formState === "sending"}
              />
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-[#4b5563] uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about the role, project, or question..."
                  required
                  rows={4}
                  disabled={formState === "sending"}
                  className="w-full rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-[#2d3748] px-4 py-3 font-mono resize-none focus:outline-none focus:border-[#00c2ff]/40 focus:bg-[#00c2ff]/[0.02] transition-all disabled:opacity-50"
                />
              </div>

              {formState === "error" && (
                <p className="text-xs text-red-400 font-mono">⚠ {errorMsg}</p>
              )}

              {formState === "success" ? (
                <div className="flex items-center gap-2 py-3 px-4 rounded-lg bg-[#00ff9f]/[0.06] border border-[#00ff9f]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f]" />
                  <span className="text-sm text-[#00ff9f] font-mono">
                    Message sent. I&apos;ll be in touch.
                  </span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="w-full py-3 rounded-lg bg-[#00ff9f] text-black font-bold text-sm hover:bg-[#00e58f] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {formState === "sending" ? (
                    <>
                      <span className="w-3 h-3 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InputField({
  name,
  label,
  type,
  placeholder,
  required,
  disabled,
}: {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-mono text-[11px] text-[#4b5563] uppercase tracking-wider">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="w-full rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-[#2d3748] px-4 py-2.5 font-mono focus:outline-none focus:border-[#00c2ff]/40 focus:bg-[#00c2ff]/[0.02] transition-all disabled:opacity-50"
      />
    </div>
  );
}

function ContactInfoRow({
  label,
  value,
  href,
  color,
}: {
  label: string;
  value: string;
  href?: string;
  color: "mint" | "blue";
}) {
  const dotClass = color === "mint" ? "bg-[#00ff9f]" : "bg-[#00c2ff]";
  const textClass = color === "mint" ? "hover:text-[#00ff9f]" : "hover:text-[#00c2ff]";

  const inner = (
    <div className="flex items-center gap-3 glass rounded-xl px-4 py-3 border border-white/[0.06] group">
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotClass}`} />
      <span className="font-mono text-[11px] text-[#4b5563] uppercase tracking-widest w-16 shrink-0">
        {label}
      </span>
      <span className={`text-sm text-[#9ca3af] transition-colors ${href ? textClass : ""}`}>
        {value}
      </span>
      {href && (
        <span className="ml-auto text-[#2d3748] group-hover:text-current transition-colors text-xs">
          ↗
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return inner;
}
