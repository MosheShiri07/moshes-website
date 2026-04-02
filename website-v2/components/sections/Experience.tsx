"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { experience } from "@/lib/data";

const TYPE_BADGE: Record<string, string> = {
  "Full-Time":        "text-emerald-700 dark:text-[#00ff9f] border-emerald-300 dark:border-[#00ff9f]/25 bg-emerald-50 dark:bg-[#00ff9f]/[0.06]",
  "Military Service": "text-sky-700 dark:text-[#00c2ff] border-sky-300 dark:border-[#00c2ff]/25 bg-sky-50 dark:bg-[#00c2ff]/[0.06]",
  "Education":        "text-violet-700 dark:text-[#c4b5fd] border-violet-300 dark:border-[#c4b5fd]/25 bg-violet-50 dark:bg-[#c4b5fd]/[0.06]",
};

function TimelineItem({ entry, index }: { entry: (typeof experience)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10 group"
    >
      {/* Node */}
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full border-2 transition-all duration-300
        border-sky-400 dark:border-[#00c2ff]
        bg-white dark:bg-black
        group-hover:border-emerald-500 dark:group-hover:border-[#00ff9f]
        group-hover:shadow-[0_0_10px_rgba(0,204,122,0.3)] dark:group-hover:shadow-[0_0_10px_rgba(0,255,159,0.4)]" />

      <div className="rounded-xl p-5 transition-all duration-300
        bg-white dark:bg-[#0a0a0a]
        border border-slate-200 dark:border-white/[0.06]
        shadow-sm dark:shadow-none
        hover:border-sky-300 dark:hover:border-[#00c2ff]/20
        hover:shadow-md dark:hover:shadow-none">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{entry.title}</h3>
            {entry.companyUrl ? (
              <a href={entry.companyUrl} target="_blank" rel="noopener noreferrer"
                className="text-sm text-sky-600 dark:text-[#00c2ff] hover:text-emerald-600 dark:hover:text-[#00ff9f] transition-colors font-medium">
                {entry.company}
              </a>
            ) : (
              <span className="text-sm text-slate-500 dark:text-[#6b7280] font-medium">{entry.company}</span>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${TYPE_BADGE[entry.type] ?? "text-slate-500 dark:text-[#6b7280] border-slate-200 dark:border-white/[0.08]"}`}>
              {entry.type}
            </span>
            <span className="font-mono text-[11px] text-slate-400 dark:text-[#4b5563]">{entry.period}</span>
          </div>
        </div>

        <p className="text-sm text-slate-500 dark:text-[#6b7280] leading-relaxed mb-4">{entry.description}</p>

        <ul className="flex flex-col gap-1.5 mb-4">
          {entry.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-[#9ca3af]">
              <span className="text-sky-500 dark:text-[#00c2ff] mt-0.5 shrink-0">›</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {entry.stack.map((s) => (
            <span key={s} className="px-2 py-0.5 rounded text-[10px] font-mono
              bg-slate-50 dark:bg-white/[0.03]
              border border-slate-200 dark:border-white/[0.05]
              text-slate-500 dark:text-[#4b5563]">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 80%", "end 20%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={ref} className="py-28 bg-[#f8fafc] dark:bg-black relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.05] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-12">
          <span className="section-tag">04 / Experience</span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-white/[0.06]" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-14">
          The path
          <br />
          <span className="gradient-text-mint">so far.</span>
        </motion.h2>

        <div className="relative" ref={containerRef}>
          {/* Background line */}
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-slate-200 dark:bg-white/[0.04]" />
          {/* Animated foreground line */}
          <motion.div
            className="absolute left-[5px] top-0 w-px timeline-line-light dark:timeline-line-dark"
            style={{ height: lineHeight }}
          />
          <div className="flex flex-col gap-8">
            {experience.map((entry, i) => <TimelineItem key={entry.id} entry={entry} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
