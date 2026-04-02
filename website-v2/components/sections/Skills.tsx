"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const CATEGORY_COLORS: Record<string, string> = {
  Cloud: "text-[#00c2ff] border-[#00c2ff]/20 bg-[#00c2ff]/[0.04]",
  IaC: "text-[#00ff9f] border-[#00ff9f]/20 bg-[#00ff9f]/[0.04]",
  Automation: "text-[#00ff9f] border-[#00ff9f]/20 bg-[#00ff9f]/[0.04]",
  Security: "text-[#ff6b6b] border-[#ff6b6b]/20 bg-[#ff6b6b]/[0.04]",
  Dev: "text-[#c4b5fd] border-[#c4b5fd]/20 bg-[#c4b5fd]/[0.04]",
  Ops: "text-[#00c2ff] border-[#00c2ff]/20 bg-[#00c2ff]/[0.04]",
  Identity: "text-[#00ff9f] border-[#00ff9f]/20 bg-[#00ff9f]/[0.04]",
  Productivity: "text-[#6b7280] border-white/[0.08] bg-white/[0.02]",
};

function SkillPill({ skill }: { skill: (typeof skills)[number] }) {
  const colorClass = CATEGORY_COLORS[skill.category] ?? "text-[#6b7280] border-white/[0.08] bg-white/[0.02]";
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      transition={{ duration: 0.15 }}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-mono text-sm shrink-0 cursor-default select-none ${colorClass}`}
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
    <section id="skills" ref={ref} className="py-28 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      {/* Glow */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 bg-gradient-to-r from-transparent via-[#00c2ff]/[0.02] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="section-tag">03 / Tech Stack</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Tools of the
            <br />
            <span className="gradient-text-mint">trade.</span>
          </h2>
        </motion.div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3 overflow-hidden"
        >
          {/* Row 1 — left to right */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 marquee-track w-max">
              {[...row1, ...row1].map((skill, i) => (
                <SkillPill key={`r1-${i}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* Row 2 — right to left */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 marquee-track-reverse w-max">
              {[...row2, ...row2].map((skill, i) => (
                <SkillPill key={`r2-${i}`} skill={skill} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Category legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-3 mt-10 justify-center"
        >
          {Object.entries(CATEGORY_COLORS).slice(0, 5).map(([cat, cls]) => (
            <span
              key={cat}
              className={`px-3 py-1 rounded-full text-[11px] font-mono border ${cls}`}
            >
              {cat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
