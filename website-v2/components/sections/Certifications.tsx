"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certifications } from "@/lib/data";

const STATUS_BADGE: Record<string, string> = {
  "In Progress": "text-emerald-700 dark:text-[#00ff9f] border-emerald-300 dark:border-[#00ff9f]/25 bg-emerald-50 dark:bg-[#00ff9f]/[0.06]",
  "Planned":     "text-sky-700 dark:text-[#00c2ff] border-sky-300 dark:border-[#00c2ff]/25 bg-sky-50 dark:bg-[#00c2ff]/[0.06]",
  "Completed":   "text-emerald-700 dark:text-[#00ff9f] border-emerald-400 dark:border-[#00ff9f]/40 bg-emerald-100 dark:bg-[#00ff9f]/[0.1]",
};

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} className="py-24 bg-white dark:bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.05] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-12">
          <span className="section-tag">05 / Certifications</span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-white/[0.06]" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold text-slate-900 dark:text-white mb-10">
          Credentials &amp;
          <br />
          <span className="gradient-text-mint">education.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="rounded-xl p-5 flex flex-col gap-3 group transition-all duration-300 cursor-default
                bg-white dark:bg-[#0d0d0d]
                border border-slate-200 dark:border-white/[0.06]
                shadow-sm dark:shadow-none
                hover:border-sky-300 dark:hover:border-[#00c2ff]/20
                hover:shadow-md dark:hover:shadow-none"
            >
              <div className="text-2xl">{cert.icon}</div>
              <div className="flex flex-col gap-1 flex-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight group-hover:text-sky-600 dark:group-hover:text-[#00c2ff] transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs text-slate-400 dark:text-[#4b5563]">{cert.issuer}</p>
              </div>
              <span className={`self-start px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${STATUS_BADGE[cert.status] ?? "text-slate-500 dark:text-[#6b7280] border-slate-200 dark:border-white/[0.08]"}`}>
                {cert.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
