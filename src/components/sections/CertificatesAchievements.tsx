"use client";

import React from "react";
import {
  Award,
  Trophy,
  ShieldCheck,
  Calendar,
  Sparkles,
  Users,
  CheckCircle2,
  Flag,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { CERTIFICATES_LIST, ACHIEVEMENTS_LIST } from "@/data/portfolioData";

export const CertificatesAchievements: React.FC = () => {
  return (
    <section id="certificates" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Credentials & Recognition"
          title="Certificates &"
          titleAccent="Achievements"
          subtitle="Verified training credentials and national-level hackathon problem-solving participation."
          icon={Award}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Achievements Spotlight (SIH) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-accent-cyan" />
              <span>National Hackathon Recognition</span>
            </h3>

            {ACHIEVEMENTS_LIST.map((item, idx) => (
              <GlowCard
                key={idx}
                glowColor="cyan"
                className="bg-slate-900/65 p-6 md:p-8 space-y-5 border-slate-800"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-[11px] font-mono font-medium text-accent-cyan px-2.5 py-0.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
                      {item.level}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-1.5">
                      {item.title}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-slate-400">
                      {item.organization}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-slate-200 flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent-cyan" />
                    <span>Key Competency Highlight:</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Collaborated on real-time agile prototyping, architecting user flow solutions, and presenting innovative software concepts in a rigorous national hackathon format.
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>

          {/* Verified Certificates */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-primary-400" />
              <span>Verified Certificates</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATES_LIST.map((cert, idx) => (
                <GlowCard
                  key={idx}
                  glowColor="primary"
                  className="bg-slate-900/65 p-6 space-y-3 border-slate-800"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-slate-400 font-mono">
                          {cert.type}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-primary-400" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {cert.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Completion: {cert.badge}</span>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
