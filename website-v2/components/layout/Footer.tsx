"use client";

import { siteConfig } from "@/lib/data";

const statusItems = [
  { label: "SYSTEM",   value: "SECURE",     color: "mint" },
  { label: "IDENTITY", value: "VERIFIED",   color: "mint" },
  { label: "NETWORK",  value: "ZERO TRUST", color: "blue" },
  { label: "LOCATION", value: "IL",         color: "blue" },
  { label: "UPTIME",   value: "99.9%",      color: "mint" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-[#050505] border-slate-200 dark:border-white/[0.06]">
      {/* Status bar */}
      <div className="border-b border-slate-100 dark:border-white/[0.04] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2 overflow-x-auto">
          <span className="font-mono text-[10px] text-slate-300 dark:text-[#2d3748] mr-2 shrink-0">STATUS //</span>
          <div className="flex items-center gap-4 shrink-0">
            {statusItems.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 shrink-0">
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                  item.color === "mint" ? "bg-emerald-500 dark:bg-[#00ff9f]" : "bg-sky-500 dark:bg-[#00c2ff]"
                }`} />
                <span className="font-mono text-[10px] text-slate-400 dark:text-[#2d3748]">{item.label}:</span>
                <span className={`font-mono text-[10px] font-medium ${
                  item.color === "mint" ? "text-emerald-600 dark:text-[#00ff9f]" : "text-sky-600 dark:text-[#00c2ff]"
                }`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
              <span className="text-sky-600 dark:text-[#00c2ff]">&gt; </span>
              {siteConfig.name.toLowerCase().replace(" ", ".")}
            </span>
            <span className="text-[11px] text-slate-400 dark:text-[#4b5563] font-mono">
              {siteConfig.title} · {siteConfig.company}
            </span>
          </div>

          <div className="flex items-center gap-6">
            {[
              { label: "GitHub", href: siteConfig.github },
              { label: "LinkedIn", href: siteConfig.linkedin },
              { label: "Email", href: `mailto:${siteConfig.email}` },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                className="text-slate-400 dark:text-[#4b5563] hover:text-sky-600 dark:hover:text-[#00c2ff] transition-colors duration-200 font-mono text-xs">
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-[11px] text-slate-300 dark:text-[#2d3748] font-mono text-center md:text-right">
            © {new Date().getFullYear()} {siteConfig.name} · Built with Next.js + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
