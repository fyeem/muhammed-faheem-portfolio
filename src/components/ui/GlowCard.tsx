"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "cyan" | "emerald" | "violet" | "amber";
  hoverEffect?: boolean;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className,
  glowColor = "primary",
  hoverEffect = true,
  ...props
}) => {
  const glowBorderClasses = {
    primary: "hover:border-primary-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
    cyan: "hover:border-accent-cyan/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    emerald: "hover:border-accent-emerald/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    violet: "hover:border-accent-violet/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    amber: "hover:border-accent-amber/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl bg-slate-900/65 backdrop-blur-md border border-slate-800/80 p-6 md:p-8 transition-all duration-300",
        hoverEffect && [
          "hover:-translate-y-1 hover:bg-slate-900/85",
          glowBorderClasses[glowColor],
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
