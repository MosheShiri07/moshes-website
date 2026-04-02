"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-28 bg-black relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00ff9f]/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-tag">02 / Projects</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            What I&apos;ve
            <br />
            <span className="gradient-text-mint">shipped.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-[#4b5563] font-mono max-w-xs text-right"
          >
            hover cards to reveal
            <br />
            architecture & security specs
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]"
        >
          {/* Large featured card */}
          <ProjectCard
            project={projects[0]}
            className="lg:col-span-2 lg:row-span-1"
          />

          {/* Medium cards */}
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[2]} className="md:col-span-2 lg:col-span-1" />

          {/* Placeholder / coming soon card */}
          <motion.div
            className="rounded-2xl border border-dashed border-white/[0.05] flex flex-col items-center justify-center gap-3 p-6 group hover:border-[#00ff9f]/20 transition-colors duration-300 md:col-span-2 lg:col-span-2"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center group-hover:border-[#00ff9f]/30 transition-colors">
              <span className="text-[#2d3748] text-lg group-hover:text-[#00ff9f]/50 transition-colors">+</span>
            </div>
            <span className="font-mono text-[11px] text-[#2d3748] group-hover:text-[#4b5563] transition-colors text-center">
              More projects in progress
              <br />
              Check GitHub for latest work
            </span>
            <a
              href="https://github.com/MosheShiri07"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-[#00c2ff]/0 group-hover:text-[#00c2ff]/60 transition-all duration-300"
            >
              ↗ github.com/MosheShiri07
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
