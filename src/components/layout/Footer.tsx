"use client";

import React from "react";
import {
  Mail,
  Phone,
  ArrowUp,
  Heart,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 text-slate-400 text-xs font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary-600/20 border border-primary-500/30 flex items-center justify-center text-primary-400 font-mono font-bold text-xs">
                MF
              </div>
              <span className="text-sm font-bold text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-light max-w-sm">
              Computer Science Engineering Student at Lovely Professional University • Full-Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all"
              aria-label="Email Muhammed Faheem"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all"
              aria-label="Call Muhammed Faheem"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-primary-500/40 hover:text-white transition-all text-xs font-medium"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary-400" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All verified CV data preserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono text-slate-400">
            <span>Crafted with Next.js, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
