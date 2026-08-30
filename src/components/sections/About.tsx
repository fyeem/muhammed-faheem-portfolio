"use client";

import React from "react";
import Image from "next/image";
import {
  User,
  GraduationCap,
  Code2,
  Trophy,
  CheckCircle2,
  Database,
  Sparkles,
  MapPin,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building responsive web applications using Next.js, TypeScript, and modern component layouts.",
      color: "primary" as const,
      tag: "Next.js & TypeScript",
    },
    {
      icon: Database,
      title: "Databases & PostgreSQL",
      description:
        "Implementing server-side validation and PostgreSQL transaction-based order processing ensuring data consistency.",
      color: "cyan" as const,
      tag: "PostgreSQL & Supabase",
    },
    {
      icon: Trophy,
      title: "Smart India Hackathon",
      description:
        "Participated in Smart India Hackathon (SIH), collaborating on an innovative solution as part of a national-level team.",
      color: "amber" as const,
      tag: "SIH Participant",
    },
    {
      icon: GraduationCap,
      title: "B.Tech Computer Science",
      description:
        "Pursuing Computer Science and Engineering at Lovely Professional University, Phagwara, Punjab (Aug 2025 – Ongoing).",
      color: "emerald" as const,
      tag: "LPU Phagwara",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Me"
          title="Engineering &"
          titleAccent="Background"
          subtitle="Computer Science Engineering student building full-stack web applications with Next.js, TypeScript, and PostgreSQL."
          icon={User}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Narrative Card */}
          <div className="lg:col-span-6 flex">
            <GlowCard className="space-y-6 bg-slate-900/65 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 border-b border-slate-800 pb-4 mb-5">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-primary-500/30 shadow-md bg-slate-950 shrink-0">
                    <Image
                      src="/images/profile.jpg"
                      alt={PERSONAL_INFO.name}
                      width={96}
                      height={96}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Muhammed Faheem Abdul Azeez
                    </h3>
                    <p className="text-xs text-primary-400 font-mono">
                      B.Tech CSE Student • Full-Stack Developer
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 text-slate-300 text-sm leading-relaxed font-light">
                  <p>
                    I am a Computer Science Engineering student pursuing my Bachelor of Technology at <strong className="text-white font-semibold">Lovely Professional University (LPU)</strong> in Phagwara, Punjab.
                  </p>
                  <p>
                    My project work focuses on developing full-stack web applications using <strong className="text-white font-semibold">Next.js</strong>, <strong className="text-white font-semibold">TypeScript</strong>, <strong className="text-white font-semibold">Supabase</strong>, and <strong className="text-white font-semibold">PostgreSQL</strong>, with experience implementing server-side order validation and PostgreSQL transaction-based processing.
                  </p>
                  <p>
                    Grounding in core programming languages (<strong className="text-white font-semibold">Python, C, C++, JavaScript</strong>) and collaborative problem solving demonstrated through the <strong className="text-white font-semibold">Smart India Hackathon (SIH)</strong>.
                  </p>
                </div>
              </div>

              {/* Verified Snapshot Grid */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                  <span>Full-Stack Web Apps</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                  <span>PostgreSQL Transactions</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                  <span>Smart India Hackathon</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                  <span>LPU CSE (Aug 2025–Ongoing)</span>
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Right Core Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <GlowCard
                  key={idx}
                  glowColor={pillar.color}
                  className="flex flex-col justify-between h-full bg-slate-900/50 p-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white">
                        <Icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {pillar.tag}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
