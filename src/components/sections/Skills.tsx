"use client";

import React, { useState } from "react";
import {
  Code,
  Layers,
  Database,
  Users,
  CheckCircle2,
  Cpu,
  Sparkles,
  Terminal,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categoryIcons: Record<string, React.ReactNode> = {
    Languages: <Code className="w-5 h-5 text-primary-400" />,
    Technologies: <Layers className="w-5 h-5 text-accent-cyan" />,
    "Databases / Tools": <Database className="w-5 h-5 text-accent-emerald" />,
    "Soft Skills": <Users className="w-5 h-5 text-accent-amber" />,
  };

  const filteredCategories =
    activeTab === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) =>
          c.category.toLowerCase().includes(activeTab.toLowerCase())
        );

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Skills"
          title="Skills &"
          titleAccent="Competencies"
          subtitle="Core programming languages, technologies, databases, and collaboration strengths from my CV."
          icon={Layers}
        />

        {/* Tab Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
              activeTab === "all"
                ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25 border border-primary-500"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
            }`}
          >
            All Skills
          </button>
          {SKILL_CATEGORIES.map((cat) => {
            const shortName = cat.category.split(" ")[0].toLowerCase();
            return (
              <button
                key={cat.category}
                onClick={() => setActiveTab(shortName)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                  activeTab === shortName
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25 border border-primary-500"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => (
            <div key={cat.category} className="transition-all duration-300">
              <GlowCard className="h-full flex flex-col justify-between bg-slate-900/60 p-6 sm:p-8">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700">
                        {categoryIcons[cat.category] || (
                          <Cpu className="w-5 h-5 text-primary-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">
                          {cat.category}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {cat.items.length} skills listed
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed font-light">
                    {cat.description}
                  </p>

                  {/* Skill Badges Matrix */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.items.map((skillName) => (
                      <div
                        key={skillName}
                        className="group px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-primary-500/40 hover:bg-slate-900 transition-all duration-200 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 group-hover:scale-125 transition-transform" />
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {skillName}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
