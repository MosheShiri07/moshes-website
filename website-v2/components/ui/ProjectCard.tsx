"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type projects } from "@/lib/data";

type Project = (typeof projects)[number];

/** Parses "||metric||" markers → wraps them in a mint-colored span */
function HighlightedDescription({ text }: { text: string }) {
  const parts = text.split(/(\|\|[^|]+\|\|)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("||") && part.endsWith("||")) {
          const value = part.slice(2, -2);
          return (
            <span key={i} className="text-emerald-600 dark:text-[#00ff9f] font-semibold">
              {value}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export default function ProjectCard({ project, className = "" }: { project: Project; className?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden cursor-default group flex flex-col
        bg-white dark:bg-[#0d0d0d]
        border border-slate-200/80 dark:border-white/[0.06]
        shadow-sm dark:shadow-none
        transition-shadow duration-300
        ${className}`}
      whileHover={{
        borderColor: "rgba(2,132,199,0.3)",
        boxShadow: "0 0 0 1px rgba(2,132,199,0.12), 0 8px 32px rgba(2,132,199,0.07)",
      }}
      transition={{ duration: 0.25 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Hover corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-sky-400/50 to-transparent" />
        <div className="absolute top-0 right-0 h-px w-12 bg-gradient-to-l from-sky-400/50 to-transparent" />
      </div>

      <div className="p-6 flex flex-col gap-4 h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1 min-w-0">
            <span className="font-mono text-[10px] text-slate-400 dark:text-[#4b5563] uppercase tracking-widest">
              {project.category}
            </span>
            <h3 className="text-[15px] font-bold text-slate-900 dark:text-white leading-snug group-hover:text-sky-600 dark:group-hover:text-[#00c2ff] transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <motion.span
            animate={{ rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 mt-0.5 text-slate-300 dark:text-[#2d3748] group-hover:text-sky-500 dark:group-hover:text-[#00c2ff] transition-colors text-sm"
          >
            ↗
          </motion.span>
        </div>

        {/* Description with highlighted metrics */}
        <p className="text-sm text-slate-500 dark:text-[#6b7280] leading-relaxed flex-1">
          <HighlightedDescription text={project.description} />
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium transition-colors
                border border-slate-100 dark:border-white/[0.06]
                text-slate-500 dark:text-[#4b5563]
                bg-slate-50/80 dark:bg-white/[0.02]
                group-hover:border-slate-200 dark:group-hover:border-white/[0.08]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover spec sheet */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] flex flex-col gap-3">
                <SpecRow label="Architecture"    value={project.architecture}               color="blue" />
                <SpecRow label="Security Stack"  value={project.securityStack.join(" · ")} color="mint" />
                <SpecRow label="Automation Flow" value={project.automationFlow}             color="blue" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function SpecRow({ label, value, color }: { label: string; value: string; color: "mint" | "blue" }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className={`font-mono text-[10px] uppercase tracking-widest ${
        color === "mint"
          ? "text-emerald-600/80 dark:text-[#00ff9f]/70"
          : "text-sky-600/80 dark:text-[#00c2ff]/70"
      }`}>
        {label}
      </span>
      <span className="text-[11px] text-slate-500 dark:text-[#9ca3af] font-mono leading-relaxed">{value}</span>
    </div>
  );
}
