"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  icon?: LucideIcon;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  titleAccent,
  subtitle,
  icon: Icon,
  align = "center",
}) => {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {/* Category Badge */}
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide uppercase bg-primary-500/10 text-primary-400 border border-primary-500/25 mb-4 shadow-[0_0_20px_rgba(99,102,241,0.12)] ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        {Icon && <Icon className="w-3.5 h-3.5 text-primary-400" />}
        <span>{badge}</span>
      </div>

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
        {title}{" "}
        {titleAccent && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-cyan to-accent-emerald">
            {titleAccent}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};
