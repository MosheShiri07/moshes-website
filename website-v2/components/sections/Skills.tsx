"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const PILL_CLASSES: Record<string, string> = {
  Cloud:        "text-sky-700 dark:text-[#00c2ff] border-sky-200 dark:border-[#00c2ff]/20 bg-sky-50 dark:bg-[#00c2ff]/[0.04]",
  IaC:          "text-emerald-700 dark:text-[#00ff9f] border-emerald-200 dark:border-[#00ff9f]/20 bg-emerald-50 dark:bg-[#00ff9f]/[0.04]",
  Automation:   "text-emerald-700 dark:text-[#00ff9f] border-emerald-200 dark:border-[#00ff9f]/20 bg-emerald-50 dark:bg-[#00ff9f]/[0.04]",
  Security:     "text-red-600 dark:text-[#ff6b6b] border-red-200 dark:border-[#ff6b6b]/20 bg-red-50 dark:bg-[#ff6b6b]/[0.04]",
  Dev:          "text-violet-600 dark:text-[#c4b5fd] border-violet-200 dark:border-[#c4b5fd]/20 bg-violet-50 dark:bg-[#c4b5fd]/[0.04]",
  Ops:          "text-sky-700 dark:text-[#00c2ff] border-sky-200 dark:border-[#00c2ff]/20 bg-sky-50 dark:bg-[#00c2ff]/[0.04]",
  Identity:     "text-emerald-700 dark:text-[#00ff9f] border-emerald-200 dark:border-[#00ff9f]/20 bg-emerald-50 dark:bg-[#00ff9f]/[0.04]",
  Productivity: "text-slate-600 dark:text-[#6b7280] border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02]",
};

function SkillPill({ skill }: { skill: (typeof skills)[number] }) {
  const cls = PILL_CLASSES[skill.category] ?? "text-slate-600 dark:text-[#6b7280] border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02]";
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      transition={{ duration: 0.15 }}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-mono text-sm shrink-0 cursor-default select-none ${cls}`}
    >
      <span className="text-base leading-none">{skill.icon}</span>
      <span className="font-medium">{skill.name}</span>
    </motion.div>
  );
}

const row1 = skills.slice(0, 9);
const row2 = skills.slice(9);

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-28 bg-white dark:bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.05] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.05] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-12">
          <span className="section-tag">03 / Tech Stack</span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-white/[0.06]" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10">
          Tools of the
          <br />
          <span className="gradient-text-mint">trade.</span>
        </motion.h2>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3 overflow-hidden">
          {/* Row 1 */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-[#030303] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-[#030303] to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 marquee-track w-max">
              {[...row1, ...row1].map((skill, i) => <SkillPill key={`r1-${i}`} skill={skill} />)}
            </div>
          </div>
          {/* Row 2 */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-[#030303] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-[#030303] to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 marquee-track-reverse w-max">
              {[...row2, ...row2].map((skill, i) => <SkillPill key={`r2-${i}`} skill={skill} />)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
