"use client";

import React from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Sparkles,
  School,
  Building2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { EDUCATION_LIST } from "@/data/portfolioData";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Background"
          title="Education &"
          titleAccent="Qualifications"
          subtitle="Formal computer science education and foundational secondary schooling credentials."
          icon={GraduationCap}
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline connector line */}
          <div className="hidden sm:block absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-primary-500 via-accent-cyan to-slate-800" />

          <div className="space-y-6">
            {EDUCATION_LIST.map((edu, idx) => (
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 transition-all duration-300"
              >
                {/* Timeline node icon */}
                <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-slate-900 border-2 border-primary-500/50 items-center justify-center text-primary-400 shrink-0 shadow-lg shadow-primary-500/10 z-10">
                  {idx === 0 ? (
                    <Building2 className="w-7 h-7" />
                  ) : (
                    <School className="w-7 h-7" />
                  )}
                </div>

                {/* Education Card Content */}
                <GlowCard className="flex-1 w-full bg-slate-900/65 p-6 md:p-7">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800/80">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[11px] font-mono font-medium text-primary-400 px-2.5 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/20">
                          {edu.status || "Completed"}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {edu.location}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {edu.institution}
                      </h3>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 shrink-0">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-400 font-mono font-bold text-xs border border-emerald-500/20 shadow-sm">
                        <Award className="w-3.5 h-3.5" />
                        <span>{edu.scoreLabel}: {edu.scoreValue}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-slate-200 mb-2">
                    {edu.degree}
                  </p>

                  {edu.highlight && (
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {edu.highlight}
                    </p>
                  )}
                </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
