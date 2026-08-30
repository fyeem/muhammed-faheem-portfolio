"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  Terminal,
  Database,
  Code2,
  Check,
  Sparkles,
  MapPin,
  GraduationCap,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-primary-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-accent-cyan/12 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status & Availability Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-slate-300 font-mono text-[11px] sm:text-xs">
                  {PERSONAL_INFO.status}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono text-primary-400 bg-primary-500/10 border border-primary-500/20">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>LPU CSE (Aug 2025–Ongoing)</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono text-primary-400 uppercase tracking-widest font-semibold">
                Computer Science Engineering Student &amp; Full-Stack Developer
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Muhammed <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-cyan to-accent-emerald">
                  Faheem
                </span>{" "}
                <span className="text-slate-300 font-light text-3xl sm:text-4xl md:text-5xl block sm:inline">
                  Abdul Azeez
                </span>
              </h1>
            </div>

            {/* Mobile-only Portrait Placement for natural story flow */}
            <div className="block lg:hidden my-6">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto group">
                {/* Ambient glow behind photo */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-primary-600/30 via-indigo-500/20 to-accent-cyan/25 rounded-[2.2rem] blur-xl opacity-80 pointer-events-none -z-10" />

                {/* Portrait frame */}
                <div className="relative rounded-[2rem] overflow-hidden border border-slate-700/60 bg-gradient-to-b from-slate-900 via-slate-950 to-[#080c14] shadow-2xl">
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-950">
                    <Image
                      src="/images/profile.jpg"
                      alt={PERSONAL_INFO.name}
                      width={480}
                      height={600}
                      priority
                      className="object-cover object-top w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-black/15 pointer-events-none" />

                    {/* Pinned Info Badge */}
                    <div className="absolute bottom-2.5 inset-x-2.5">
                      <div className="p-2.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800/80 shadow-md flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-primary-500/15 border border-primary-500/30 flex items-center justify-center text-primary-400 font-mono font-bold text-[10px]">
                            MF
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-white leading-tight">
                              Muhammed Faheem
                            </p>
                            <p className="text-[9px] text-slate-400 font-mono">
                              Full-Stack Developer
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-mono text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Online</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile floating tech pills */}
                <div className="absolute -top-2.5 -left-2 z-20">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/95 border border-slate-700 text-white text-[10px] font-mono shadow-md backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>Next.js</span>
                  </div>
                </div>
                <div className="absolute -top-2.5 -right-2 z-20">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/95 border border-blue-500/40 text-blue-300 text-[10px] font-mono shadow-md backdrop-blur-md">
                    <Code2 className="w-3 h-3 text-blue-400" />
                    <span>TypeScript</span>
                  </div>
                </div>
                <div className="absolute -bottom-2.5 -left-2 z-20">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/95 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono shadow-md backdrop-blur-md">
                    <Database className="w-3 h-3 text-cyan-400" />
                    <span>PostgreSQL</span>
                  </div>
                </div>
                <div className="absolute -bottom-2.5 -right-2 z-20">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/95 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono shadow-md backdrop-blur-md">
                    <Zap className="w-3 h-3 text-emerald-400" />
                    <span>Supabase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-headline & Bio (Strictly grounded in CV) */}
            <div className="space-y-3 max-w-2xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg font-medium text-slate-200">
                Building Web Applications with Next.js, TypeScript &amp; PostgreSQL
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
                Computer Science Engineering student at{" "}
                <strong className="text-slate-200 font-medium">Lovely Professional University</strong>{" "}
                and full-stack developer. Experienced in building web applications using Next.js, TypeScript, Supabase,
                and PostgreSQL with transaction-based order processing and administration workflows.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary-600 via-primary-500 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white shadow-lg shadow-primary-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-primary-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Quick Links & Contact Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4 text-slate-400 text-xs font-mono border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-primary-500/50 hover:text-white hover:bg-slate-800 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub: https://github.com/fyeem"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:text-white hover:bg-slate-800 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: muhammed-faheem22"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-primary-500/50 hover:text-white hover:bg-slate-800 transition-all shadow-sm"
                  aria-label="Email Muhammed Faheem"
                  title={PERSONAL_INFO.email}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${PERSONAL_INFO.phoneRaw}`}
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:text-white hover:bg-slate-800 transition-all shadow-sm"
                  aria-label="Call Muhammed Faheem"
                  title={PERSONAL_INFO.phone}
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:block h-4 w-[1px] bg-slate-800" />

              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <MapPin className="w-3.5 h-3.5 text-primary-400" />
                <span>Kannur, Kerala / Punjab, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Desktop Prominent Actual Profile Photo */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div className="relative w-full max-w-[380px] xl:max-w-[420px] group">
              
              {/* Multi-layered ambient lighting behind the portrait */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-primary-600/35 via-indigo-500/25 to-accent-cyan/30 rounded-[2.8rem] sm:rounded-[3.2rem] blur-2xl sm:blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
              <div className="absolute -inset-1 bg-gradient-to-b from-primary-500/20 via-transparent to-accent-cyan/20 rounded-[2.2rem] sm:rounded-[2.8rem] blur-md pointer-events-none -z-10" />

              {/* Main Portrait Frame Container */}
              <div className="relative rounded-[2.2rem] sm:rounded-[2.5rem] overflow-hidden border border-slate-700/60 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-[#080c14] shadow-2xl shadow-black/80 transition-all duration-500 group-hover:border-primary-500/50 group-hover:shadow-primary-500/20">
                
                {/* Image Container with precise aspect ratio and top focus */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-950">
                  <Image
                    src="/images/profile.jpg"
                    alt={PERSONAL_INFO.name}
                    width={600}
                    height={750}
                    priority
                    onLoad={() => setImgLoaded(true)}
                    className={`object-cover object-top w-full h-full transform transition-all duration-700 group-hover:scale-[1.03] ${
                      imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  />

                  {/* Subtle inner top and bottom gradient blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-black/15 pointer-events-none" />
                  
                  {/* Subtle corner light reflection */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                  {/* Pinned Info Badge at base of photo */}
                  <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4">
                    <div className="p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 shadow-lg flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-primary-500/15 border border-primary-500/30 flex items-center justify-center text-primary-400 font-mono font-bold text-xs">
                          MF
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white leading-tight">
                            Muhammed Faheem
                          </p>
                          <p className="text-[10px] text-slate-400 font-mono">
                            Full-Stack Developer
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Online</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges around Portrait */}
              
              {/* Top-Left: Next.js */}
              <div className="absolute -top-3 -left-4 sm:-top-4 sm:-left-6 z-20 animate-float-slow">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-xs font-mono font-semibold shadow-xl backdrop-blur-md hover:border-primary-400/60 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>Next.js</span>
                </div>
              </div>

              {/* Top-Right: TypeScript */}
              <div className="absolute -top-3 -right-4 sm:-top-4 sm:-right-6 z-20 animate-float-delayed">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-blue-500/40 text-blue-300 text-xs font-mono font-semibold shadow-xl backdrop-blur-md hover:border-blue-400 transition-colors">
                  <Code2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>TypeScript</span>
                </div>
              </div>

              {/* Bottom-Left: PostgreSQL */}
              <div className="absolute -bottom-3 -left-4 sm:-bottom-4 sm:-left-6 z-20 animate-float-reverse">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold shadow-xl backdrop-blur-md hover:border-cyan-400 transition-colors">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  <span>PostgreSQL</span>
                </div>
              </div>

              {/* Bottom-Right: Supabase / Vercel */}
              <div className="absolute -bottom-3 -right-4 sm:-bottom-4 sm:-right-6 z-20 animate-float-slow">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold shadow-xl backdrop-blur-md hover:border-emerald-400 transition-colors">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Supabase &amp; Vercel</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
