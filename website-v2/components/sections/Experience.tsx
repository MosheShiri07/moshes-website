"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { experience } from "@/lib/data";

const TYPE_STYLES: Record<string, string> = {
  "Full-Time": "text-[#00ff9f] border-[#00ff9f]/25 bg-[#00ff9f]/[0.06]",
  "Military Service": "text-[#00c2ff] border-[#00c2ff]/25 bg-[#00c2ff]/[0.06]",
  Education: "text-[#c4b5fd] border-[#c4b5fd]/25 bg-[#c4b5fd]/[0.06]",
};

function TimelineItem({
  entry,
  index,
}: {
  entry: (typeof experience)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10 group"
    >
      {/* Node */}
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-[#00c2ff] bg-black group-hover:border-[#00ff9f] group-hover:shadow-[0_0_10px_rgba(0,255,159,0.4)] transition-all duration-300" />

      <div
        className="glass rounded-xl p-5 border border-white/[0.06] hover:border-[#00c2ff]/20 transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(13,13,13,0.9), rgba(8,8,8,0.9))",
        }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-bold text-white leading-tight">{entry.title}</h3>
            <div className="flex items-center gap-2">
              {entry.companyUrl ? (
                <a
                  href={entry.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#00c2ff] hover:text-[#00ff9f] transition-colors font-medium"
                >
                  {entry.company}
                </a>
              ) : (
                <span className="text-sm text-[#6b7280] font-medium">{entry.company}</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${
                TYPE_STYLES[entry.type] ?? "text-[#6b7280] border-white/[0.08]"
              }`}
            >
              {entry.type}
            </span>
            <span className="font-mono text-[11px] text-[#4b5563]">{entry.period}</span>
          </div>
        </div>

        <p className="text-sm text-[#6b7280] leading-relaxed mb-4">{entry.description}</p>

        {/* Highlights */}
        <ul className="flex flex-col gap-1.5 mb-4">
          {entry.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-[#9ca3af]">
              <span className="text-[#00c2ff] mt-0.5 shrink-0">›</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {entry.stack.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.05] text-[#4b5563]"
            >
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={ref} className="py-28 bg-black relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-[400px] bg-gradient-to-l from-[#00c2ff]/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="section-tag">04 / Experience</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-14"
        >
          The path
          <br />
          <span className="gradient-text-mint">so far.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative" ref={containerRef}>
          {/* Animated vertical line */}
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-white/[0.04]" />
          <motion.div
            className="absolute left-[5px] top-0 w-px timeline-line"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-8">
            {experience.map((entry, i) => (
              <TimelineItem key={entry.id} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
