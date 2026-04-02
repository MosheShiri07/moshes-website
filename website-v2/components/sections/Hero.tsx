"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig, heroLines } from "@/lib/data";

function TerminalLine({
  prefix,
  value,
  delay,
}: {
  prefix: string;
  value: string;
  delay: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor(true);
      let i = 0;
      const full = value;
      const interval = setInterval(() => {
        i++;
        setDisplayed(full.slice(0, i));
        if (i >= full.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 35);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay / 1000, duration: 0.3 }}
      className="flex items-baseline gap-2 font-mono text-sm md:text-base"
    >
      <span className="text-[#4b5563] shrink-0">{prefix}</span>
      <span className="text-white font-medium">
        {displayed}
        {showCursor && !done && (
          <span className="inline-block w-[2px] h-[1em] bg-[#00ff9f] ml-0.5 cursor-blink align-middle" />
        )}
      </span>
    </motion.div>
  );
}

// Animated dot grid background
function DotGrid() {
  return (
    <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
  );
}

// Radial gradient overlay
function RadialGlow() {
  return (
    <>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00c2ff]/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-[#00ff9f]/[0.03] blur-[100px] pointer-events-none" />
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <DotGrid />
      <RadialGlow />

      {/* Horizontal rule lines */}
      <div className="absolute inset-x-0 top-[30%] h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-[70%] h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr,auto] gap-16 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-[#00ff9f]/25 bg-[#00ff9f]/[0.05]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f] animate-pulse" />
              <span className="font-mono text-[11px] text-[#00ff9f] tracking-wider uppercase">
                Zero Trust · Cloud · Automation
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                Moshe
                <br />
                <span className="gradient-text-mint">Shiri</span>
                <span className="text-[#00ff9f]">.</span>
              </h1>
            </motion.div>

            {/* Terminal block */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-lg p-5 border border-white/[0.07] max-w-lg"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.07]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="font-mono text-[10px] text-[#4b5563] ml-2">
                  moshe@rapyd ~ identity.sh
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {heroLines.map((line, i) => (
                  <TerminalLine
                    key={line.prefix}
                    prefix={line.prefix}
                    value={line.value}
                    delay={600 + i * 800}
                  />
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00ff9f] text-black font-semibold text-sm hover:bg-[#00e58f] transition-all duration-200 glow-mint"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                Get In Touch
              </a>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#00c2ff]/40 text-[#00c2ff] font-medium text-sm hover:bg-[#00c2ff]/10 hover:border-[#00c2ff]/70 transition-all duration-200 font-mono"
              >
                ↓ Resume
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/[0.08] text-[#6b7280] font-medium text-sm hover:text-white hover:border-white/20 transition-all duration-200"
              >
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Right column — profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-[280px] h-[280px]">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#00c2ff]/20 via-transparent to-[#00ff9f]/20 blur-xl" />
              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-[#00c2ff]/20" />
              <Image
                src="/profile.jpg"
                alt="Moshe Shiri"
                fill
                className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                priority
                sizes="280px"
              />
              {/* Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating status badge */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 border border-[#00ff9f]/20"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f] animate-pulse" />
                  <span className="font-mono text-[10px] text-[#00ff9f]">Available</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="font-mono text-[10px] text-[#2d3748] tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#00c2ff]/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
