"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats, siteConfig } from "@/lib/data";

function StatCard({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="rounded-xl p-5 transition-colors duration-300 group
        bg-white dark:bg-[#0d0d0d]
        border border-slate-200 dark:border-white/[0.07]
        shadow-sm dark:shadow-none
        hover:border-sky-400/40 dark:hover:border-[#00c2ff]/20"
    >
      <div className="text-3xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#00ff9f] transition-colors duration-300">
        {value}
      </div>
      <div className="text-xs text-slate-500 dark:text-[#6b7280] mt-1 font-medium">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-28 bg-white dark:bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.05] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-12">
          <span className="section-tag">01 / About</span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-white/[0.06]" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,380px] gap-16 items-start">
          <div className="flex flex-col gap-6">
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Engineering security
              <br />
              <span className="gradient-text-mint">at cloud scale.</span>
            </motion.h2>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4 text-slate-600 dark:text-[#9ca3af] text-base leading-relaxed">
              <p>
                I&apos;m an IT &amp; Security Engineer at{" "}
                <span className="text-slate-900 dark:text-white font-medium">Rapyd</span>, a global fintech
                unicorn, where I architect and operate the cloud and identity infrastructure
                that keeps 500+ employees secure across AWS, GCP, and Azure.
              </p>
              <p>
                My work sits at the intersection of{" "}
                <span className="text-sky-600 dark:text-[#00c2ff]">Zero Trust security</span>,{" "}
                <span className="text-emerald-600 dark:text-[#00ff9f]">infrastructure automation</span>, and cloud
                engineering. I don&apos;t just manage systems — I eliminate manual processes,
                build self-healing pipelines, and design access models that are both
                maximally secure and frictionless for the teams that use them.
              </p>
              <p>
                Previously, I built and maintained mission-critical infrastructure in a
                classified intelligence unit of the Israel Defense Forces, where reliability
                and security weren&apos;t goals — they were requirements.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-2">
              {["Zero Trust Architecture","Cloud IAM","Infrastructure Automation","Incident Response","Security Posture"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono
                  border border-sky-500/20 dark:border-[#00c2ff]/20
                  text-sky-700 dark:text-[#00c2ff]
                  bg-sky-50 dark:bg-[#00c2ff]/[0.04]">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 pt-2 flex-wrap">
              {[
                { label: "GitHub", href: siteConfig.github },
                { label: "LinkedIn", href: siteConfig.linkedin },
                { label: "Email", href: `mailto:${siteConfig.email}` },
              ].map((link, i) => (
                <span key={link.label} className="flex items-center gap-4">
                  {i > 0 && <span className="text-slate-300 dark:text-[#2d3748]">/</span>}
                  <a href={link.href} target={link.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                    className="text-slate-400 dark:text-[#4b5563] hover:text-sky-600 dark:hover:text-[#00c2ff] transition-colors text-sm font-mono">
                    ↗ {link.label}
                  </a>
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => <StatCard key={s.label} value={s.value} label={s.label} />)}
            </div>
            <div className="rounded-xl p-5 mt-2
              bg-sky-50 dark:bg-[#00c2ff]/[0.03]
              border border-sky-100 dark:border-[#00c2ff]/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#00ff9f] animate-pulse" />
                <span className="font-mono text-[11px] text-emerald-600 dark:text-[#00ff9f] uppercase tracking-wider">Currently</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-[#9ca3af] leading-relaxed">
                IT &amp; Security Engineer at{" "}
                <span className="text-slate-900 dark:text-white font-medium">Rapyd Financial</span> ·
                Pursuing B.Sc. CS at HIT ·
                AWS Cloud Practitioner certification in progress
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
