"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-28 bg-[#f8fafc] dark:bg-black relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.05] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-4">
          <span className="section-tag">02 / Projects</span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-white/[0.06]" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            What I&apos;ve
            <br />
            <span className="gradient-text-mint">shipped.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-slate-400 dark:text-[#4b5563] font-mono max-w-xs text-right">
            hover cards to reveal
            <br />
            architecture &amp; security specs
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]"
        >
          {/* Large featured card */}
          <ProjectCard project={projects[0]} className="lg:col-span-2" />

          {/* JIT card */}
          <ProjectCard project={projects[1]} />

          {/* GCP card */}
          <ProjectCard project={projects[2]} />

          {/* Google Workspace / IT Ops — wider */}
          <ProjectCard project={projects[3]} className="md:col-span-2" />

          {/* Coming soon placeholder */}
          <motion.div
            className="rounded-2xl border border-dashed flex flex-col items-center justify-center gap-3 p-6 group transition-colors duration-300
              border-slate-200 dark:border-white/[0.05]
              hover:border-emerald-400/30 dark:hover:border-[#00ff9f]/20"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors
              border-slate-200 dark:border-white/[0.1]
              group-hover:border-emerald-400/40 dark:group-hover:border-[#00ff9f]/30">
              <span className="text-slate-300 dark:text-[#2d3748] text-lg group-hover:text-emerald-500 dark:group-hover:text-[#00ff9f]/50 transition-colors">+</span>
            </div>
            <span className="font-mono text-[11px] text-center text-slate-400 dark:text-[#2d3748] group-hover:text-slate-500 dark:group-hover:text-[#4b5563] transition-colors">
              More projects in progress
              <br />
              Check GitHub for latest work
            </span>
            <a href="https://github.com/MosheShiri07" target="_blank" rel="noopener noreferrer"
              className="font-mono text-[10px] text-transparent group-hover:text-sky-500 dark:group-hover:text-[#00c2ff]/60 transition-all duration-300">
              ↗ github.com/MosheShiri07
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
