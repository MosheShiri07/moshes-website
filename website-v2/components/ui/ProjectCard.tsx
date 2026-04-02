"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type projects } from "@/lib/data";

type Project = (typeof projects)[number];

export default function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden group cursor-default ${className}`}
      style={{
        background: "linear-gradient(135deg, #0d0d0d 0%, #0a0a0a 100%)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      whileHover={{
        borderColor: "rgba(0,194,255,0.2)",
        boxShadow: "0 0 30px rgba(0,194,255,0.08), 0 0 60px rgba(0,255,159,0.04)",
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 right-0 w-px h-16 bg-gradient-to-b from-[#00c2ff]/40 to-transparent" />
        <div className="absolute top-0 right-0 h-px w-16 bg-gradient-to-l from-[#00c2ff]/40 to-transparent" />
      </div>

      <div className="p-6 h-full flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] text-[#4b5563] uppercase tracking-widest">
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-[#00c2ff] transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 mt-1 text-[#2d3748] group-hover:text-[#00c2ff] transition-colors"
          >
            ↗
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-sm text-[#6b7280] leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-mono border border-white/[0.06] text-[#4b5563] bg-white/[0.02]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover reveal — spec sheet */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
                <SpecRow label="Architecture" value={project.architecture} color="blue" />
                <SpecRow
                  label="Security Stack"
                  value={project.securityStack.join(" · ")}
                  color="mint"
                />
                <SpecRow
                  label="Automation Flow"
                  value={project.automationFlow}
                  color="blue"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function SpecRow({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: "mint" | "blue";
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span
        className={`font-mono text-[10px] uppercase tracking-widest ${
          color === "mint" ? "text-[#00ff9f]/70" : "text-[#00c2ff]/70"
        }`}
      >
        {label}
      </span>
      <span className="text-xs text-[#9ca3af] font-mono leading-relaxed">{value}</span>
    </div>
  );
}
