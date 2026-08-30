"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  ShoppingBag,
  ShieldCheck,
  Database,
  Send,
  Sparkles,
  Lock,
} from "lucide-react";
import { GithubIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { FEATURED_PROJECT } from "@/data/portfolioData";

interface FeaturedProjectProps {
  onOpenProjectModal: () => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  onOpenProjectModal,
}) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const screenshots = FEATURED_PROJECT.screenshots;
  const currentScreenshot = screenshots[selectedIdx];

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev + 1) % screenshots.length);
      }
      if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, screenshots.length]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % screenshots.length);
  };

  // Route labels for simulated browser address bar
  const routeUrls: Record<string, string> = {
    "storefront-home": "soulentperfumes.vercel.app",
    "product-detail": "soulentperfumes.vercel.app/products/ajmal-blue",
    "cart-drawer": "soulentperfumes.vercel.app/products/ajmal-blue (Shopping Bag)",
    "checkout-page": "soulentperfumes.vercel.app/checkout",
    "admin-dashboard": "soulentperfumes.vercel.app/admin",
  };

  const deliverableIcons = [ShoppingBag, ShieldCheck, Database, Send];

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-primary-600/12 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Engineering Work"
          title="Flagship"
          titleAccent="Project Showcase"
          subtitle="Real production interface screenshots and architectural deliverables from Soulent Perfumes."
          icon={Layers}
        />

        {/* Main Featured Showcase Container */}
        <div className="relative rounded-3xl bg-slate-900/75 border border-slate-800 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/50 space-y-8">
          {/* Top Bar: Title, Status, and Action Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-primary-500/15 text-primary-400 border border-primary-500/30">
                  Full-Stack E-Commerce
                </span>
                <span className="text-xs font-mono text-slate-300 bg-slate-800/90 px-2.5 py-1 rounded-full border border-slate-700">
                  {FEATURED_PROJECT.period}
                </span>
                <a
                  href={FEATURED_PROJECT.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>soulentperfumes.vercel.app</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                {FEATURED_PROJECT.title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base font-light">
                {FEATURED_PROJECT.subtitle}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {FEATURED_PROJECT.liveUrl && (
                <a
                  href={FEATURED_PROJECT.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Globe className="w-4 h-4" />
                  <span>Live Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              <a
                href={FEATURED_PROJECT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all hover:scale-[1.02]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Code</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href="https://wa.me/919946453947?text=Hi%20Muhammed%20Faheem,%20I%20am%20testing%20the%20Soulent%20Perfumes%20WhatsApp%20order%20flow!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 transition-all hover:scale-[1.02]"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Live WhatsApp Flow</span>
              </a>

              <button
                onClick={onOpenProjectModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all"
              >
                <span>Architecture Deep-Dive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-800/80">
            <span className="text-xs font-mono text-slate-400 mr-2">Verified Stack:</span>
            {FEATURED_PROJECT.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-950/90 text-slate-200 border border-slate-800 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* MAIN VISUAL ELEMENT: Real Screenshot Showcase in Browser Window Frame */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Real Production Interface
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  • Click screenshot to view fullscreen
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span>{selectedIdx + 1} / {screenshots.length}</span>
              </div>
            </div>

            {/* Browser Window Mockup Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-2xl shadow-black/80 group">
              {/* Browser Window Titlebar */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-4">
                {/* Traffic lights */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-600/50" />
                </div>

                {/* Simulated Address Bar */}
                <div className="flex-1 max-w-xl mx-auto px-3.5 py-1.5 rounded-lg bg-slate-950/90 border border-slate-800/90 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2 truncate">
                    <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-slate-200 truncate">
                      https://{routeUrls[currentScreenshot.id] || "soulentperfumes.vercel.app"}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0 hidden sm:inline">
                    SSL Verified
                  </span>
                </div>

                {/* Window Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="View fullscreen"
                    aria-label="View fullscreen screenshot"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  {FEATURED_PROJECT.liveUrl && (
                    <a
                      href={FEATURED_PROJECT.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors hidden sm:inline-flex"
                      title="Open in new tab"
                      aria-label="Open Soulent Perfumes website in new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Main Screenshot Canvas */}
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="relative cursor-pointer overflow-hidden bg-slate-950 aspect-[16/9] sm:aspect-[16/10] flex items-center justify-center"
              >
                <Image
                  src={currentScreenshot.src}
                  alt={currentScreenshot.alt}
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* Ambient vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Left/Right navigation buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-700/80 text-white shadow-xl backdrop-blur-md transition-all hover:scale-110 opacity-80 hover:opacity-100 z-10"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-700/80 text-white shadow-xl backdrop-blur-md transition-all hover:scale-110 opacity-80 hover:opacity-100 z-10"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Overlay Info Pill */}
                <div className="absolute bottom-4 inset-x-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800/80 shadow-lg pointer-events-none">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-primary-500/20 text-primary-300 border border-primary-500/30">
                        {currentScreenshot.category}
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        {currentScreenshot.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 font-light line-clamp-1">
                      {currentScreenshot.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-primary-400 font-medium shrink-0">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to enlarge</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Selector Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
              {screenshots.map((s, idx) => {
                const isActive = selectedIdx === idx;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedIdx(idx)}
                    className={`relative p-2 rounded-xl text-left transition-all border group overflow-hidden ${
                      isActive
                        ? "bg-slate-900 border-primary-500 shadow-lg shadow-primary-500/10 ring-1 ring-primary-500"
                        : "bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60"
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-slate-900 mb-2 border border-slate-800">
                      <Image
                        src={s.src}
                        alt={s.alt}
                        width={320}
                        height={200}
                        className={`w-full h-full object-cover object-top transition-transform duration-300 ${
                          isActive ? "scale-105" : "group-hover:scale-105 opacity-70 group-hover:opacity-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-1 left-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/70 text-slate-300 border border-white/10">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Thumbnail Caption */}
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-primary-400 block truncate">
                        {s.category}
                      </span>
                      <p className={`text-xs font-semibold truncate ${isActive ? "text-white" : "text-slate-300"}`}>
                        {s.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Core Architectural Deliverables Grid (from CV) */}
          <div className="pt-6 border-t border-slate-800/80 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Core Architectural Deliverables
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FEATURED_PROJECT.highlights.map((highlight, idx) => {
                const Icon = deliverableIcons[idx] || CheckCircle2;
                return (
                  <GlowCard
                    key={idx}
                    className="p-5 bg-slate-950/60 border border-slate-800/80 flex items-start gap-3.5 hover:border-slate-700 transition-colors"
                  >
                    <div className="p-2 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                        {highlight}
                      </p>
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-6xl max-h-[95vh] flex flex-col z-10 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Lightbox Header */}
              <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-primary-500/20 text-primary-300 border border-primary-500/30">
                      {currentScreenshot.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {currentScreenshot.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 font-light hidden sm:block">
                    {currentScreenshot.description}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400">
                    {selectedIdx + 1} / {screenshots.length}
                  </span>
                  {FEATURED_PROJECT.liveUrl && (
                    <a
                      href={FEATURED_PROJECT.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary-600 hover:bg-primary-500 text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Visit Live</span>
                    </a>
                  )}
                  <button
                    onClick={() => setIsLightboxOpen(false)}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    aria-label="Close fullscreen view"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Lightbox Main Image Display */}
              <div className="relative flex-1 overflow-auto p-2 sm:p-4 bg-black/70 flex items-center justify-center min-h-[50vh] max-h-[80vh]">
                <Image
                  src={currentScreenshot.src}
                  alt={currentScreenshot.alt}
                  width={1920}
                  height={1080}
                  priority
                  className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-slate-800"
                />

                {/* Prev / Next navigation overlays */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-all hover:scale-110 shadow-xl"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-all hover:scale-110 shadow-xl"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Footer Thumbnail Bar */}
              <div className="px-4 py-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-center gap-2 overflow-x-auto">
                {screenshots.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedIdx(idx)}
                    className={`relative w-16 sm:w-20 aspect-[16/10] rounded-md overflow-hidden border transition-all shrink-0 ${
                      selectedIdx === idx
                        ? "border-primary-500 ring-2 ring-primary-500/50 scale-105"
                        : "border-slate-800 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      width={100}
                      height={60}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
