"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

// Each terminal line: key (cyan), value (white), with optional mint-colored value
const terminalLines = [
  { key: "[USER]",   value: "Moshe Shiri", bold: true },
  { key: "[ROLE]",   value: "IT & Security Engineer" },
  { key: "[SCALE]",  value: "1,000+ Identities • Global Enterprise" },
  { key: "[STACK]",  value: "[Python, Go, Terraform, GCP, AWS]" },
  { key: "[AUTH]",   value: "mTLS Enabled • Zero Trust Perimeter" },
  { key: "[STATUS]", value: "System Secure • Uptime: 99.9%", statusLine: true },
];

const COMMAND = "curl -X GET https://mosheshiri.com/api/v1/profile";

function TerminalContent() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cmdChars, setCmdChars]         = useState(0);
  const [showCursor, setShowCursor]     = useState(false);

  useEffect(() => {
    // Reveal each data line one at a time
    const timers: ReturnType<typeof setTimeout>[] = [];
    terminalLines.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), 400 + i * 220));
    });
    // Then type the command
    const cmdStart = 400 + terminalLines.length * 220 + 200;
    timers.push(setTimeout(() => {
      let i = 0;
      const iv = setInterval(() => {
        i++;
        setCmdChars(i);
        if (i >= COMMAND.length) {
          clearInterval(iv);
          setShowCursor(true);
        }
      }, 28);
    }, cmdStart));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col gap-[5px]">
      {/* Data lines */}
      {terminalLines.map((line, i) => (
        <div
          key={line.key}
          className={`flex gap-0 font-mono text-[13px] transition-opacity duration-200 ${
            i < visibleLines ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Aligned key column — fixed width */}
          <span className="text-[#00c2ff] w-[78px] shrink-0">{line.key}</span>
          <span className="text-white/50 mr-2">:</span>
          {line.statusLine ? (
            <span className="text-white">
              <span className="text-[#00ff9f]">● </span>
              <span className="text-[#00ff9f] font-semibold">Secure</span>
              <span className="text-white"> • Uptime: </span>
              <span className="text-[#00ff9f] font-semibold">99.9%</span>
            </span>
          ) : (
            <span className={`text-white${line.bold ? " font-bold" : ""}`}>{line.value}</span>
          )}
        </div>
      ))}

      {/* Divider */}
      {visibleLines >= terminalLines.length && (
        <div className="border-t border-white/[0.07] my-1" />
      )}

      {/* Command line */}
      {visibleLines >= terminalLines.length && (
        <div className="flex items-center gap-1 font-mono text-[13px]">
          <span className="text-[#00ff9f]">$</span>
          <span className="text-white/60 ml-1">{COMMAND.slice(0, cmdChars)}</span>
          {showCursor && (
            <span className="inline-block w-[7px] h-[13px] bg-[#00ff9f] cursor-blink ml-0.5 align-middle" />
          )}
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f8fafc] dark:bg-black"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-light dark:dot-grid-dark opacity-50 pointer-events-none" />

      {/* Radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/[0.04] dark:bg-sky-400/[0.04] blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/[0.03] dark:bg-emerald-400/[0.03] blur-[100px] pointer-events-none" />

      {/* Horizontal accent lines */}
      <div className="absolute inset-x-0 top-[30%] h-px bg-gradient-to-r from-transparent via-black/[0.05] dark:via-white/[0.04] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-[70%] h-px bg-gradient-to-r from-transparent via-black/[0.05] dark:via-white/[0.04] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col gap-8 max-w-4xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full
              border border-emerald-500/30 dark:border-[#00ff9f]/25
              bg-emerald-500/[0.06] dark:bg-[#00ff9f]/[0.05]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#00ff9f] animate-pulse" />
            <span className="font-mono text-[11px] text-emerald-700 dark:text-[#00ff9f] tracking-wider uppercase">
              Zero Trust · Cloud · Automation
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.05]"
          >
            Moshe
            <br />
            <span className="gradient-text-mint">Shiri</span>
            <span className="text-emerald-500 dark:text-[#00ff9f]">.</span>
          </motion.h1>

          {/* Terminal + Photo row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch gap-5"
          >
            {/* Terminal — always dark */}
            <div className="terminal-dark flex-1 rounded-xl p-5 min-w-0">
              {/* macOS traffic lights */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.07]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="font-mono text-[10px] text-[#4b5563] ml-2 tracking-wide">
                  moshe@rapyd ~ profile.sh
                </span>
              </div>
              <TerminalContent />
            </div>

            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.4 }}
              className="relative shrink-0"
            >
              <div className="relative w-full sm:w-[190px] h-[240px]">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-sky-400/20 via-transparent to-emerald-400/20 dark:from-[#00c2ff]/20 dark:to-[#00ff9f]/20 blur-lg" />
                <div className="absolute inset-0 rounded-2xl border border-sky-400/25 dark:border-[#00c2ff]/20 z-10 pointer-events-none" />
                <Image
                  src="/profile.jpg"
                  alt="Moshe Shiri"
                  fill
                  className="object-cover object-[50%_8%] rounded-2xl relative z-[5]"
                  priority
                  sizes="(max-width: 640px) 100vw, 190px"
                />
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-3 -right-3 z-20 bg-[#0a0a0a] rounded-xl px-2.5 py-1.5 border border-[#00ff9f]/25"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f] animate-pulse" />
                    <span className="font-mono text-[10px] text-[#00ff9f]">@ Rapyd</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <a href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                bg-emerald-500 dark:bg-[#00ff9f] text-white dark:text-black
                font-semibold text-sm hover:opacity-90 transition-all duration-200
                glow-mint-light dark:glow-mint-dark"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black" />
              Get In Touch
            </a>
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono font-medium text-sm transition-all duration-200
                border border-sky-500/40 dark:border-[#00c2ff]/40
                text-sky-600 dark:text-[#00c2ff]
                hover:bg-sky-500/10 dark:hover:bg-[#00c2ff]/10
                hover:border-sky-500/70 dark:hover:border-[#00c2ff]/70"
            >
              ↓ Resume
            </a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200
                border border-slate-200 dark:border-white/[0.08]
                text-slate-500 dark:text-[#6b7280]
                hover:text-slate-800 dark:hover:text-white
                hover:border-slate-400 dark:hover:border-white/20"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="font-mono text-[10px] text-slate-400 dark:text-[#374151] tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-sky-500/40 dark:from-[#00c2ff]/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
