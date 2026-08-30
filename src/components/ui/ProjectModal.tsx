"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Database,
  Server,
  Layers,
  ShoppingBag,
  ShieldCheck,
  Send,
  Cpu,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { FEATURED_PROJECT } from "@/data/portfolioData";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"features" | "architecture" | "transactions">("features");

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
          >
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-800 bg-slate-950/80 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium uppercase bg-primary-500/10 text-primary-400 border border-primary-500/20">
                    Flagship Full-Stack Project
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {FEATURED_PROJECT.period}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {FEATURED_PROJECT.title}
                </h2>
                <p className="text-xs md:text-sm text-slate-400 mt-0.5">
                  {FEATURED_PROJECT.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {FEATURED_PROJECT.liveUrl && (
                  <a
                    href={FEATURED_PROJECT.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-600 hover:bg-primary-500 text-white transition-colors shadow-sm"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <a
                  href={FEATURED_PROJECT.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 px-6 pt-3 border-b border-slate-800 bg-slate-950/40">
              <button
                onClick={() => setActiveTab("features")}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium rounded-t-lg transition-colors border-b-2 ${
                  activeTab === "features"
                    ? "border-primary-500 text-white bg-slate-800/60"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5 text-primary-400" />
                <span>Feature Breakdown</span>
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium rounded-t-lg transition-colors border-b-2 ${
                  activeTab === "architecture"
                    ? "border-accent-cyan text-white bg-slate-800/60"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-accent-cyan" />
                <span>System Architecture</span>
              </button>
              <button
                onClick={() => setActiveTab("transactions")}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium rounded-t-lg transition-colors border-b-2 ${
                  activeTab === "transactions"
                    ? "border-accent-emerald text-white bg-slate-800/60"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <Database className="w-3.5 h-3.5 text-accent-emerald" />
                <span>PostgreSQL &amp; Order Flow</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm text-slate-300">
              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-slate-800/80">
                <span className="text-xs font-medium text-slate-400 mr-2">Verified Stack:</span>
                {FEATURED_PROJECT.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Tab 1: Feature Breakdown */}
              {activeTab === "features" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {FEATURED_PROJECT.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2 text-white font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                          <span>{feat.title}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed mb-3">
                          {feat.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {feat.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-primary-950/20 border border-primary-800/30">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      Secure Admin Dashboard
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Equipped with product CRUD operations, image management, inventory tracking, and order status management.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: System Architecture */}
              {activeTab === "architecture" && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    {FEATURED_PROJECT.architecture.map((arch, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3"
                      >
                        <div className="md:w-1/3">
                          <span className="text-xs font-mono text-accent-cyan uppercase">
                            {arch.layer}
                          </span>
                          <h4 className="text-sm font-bold text-white mt-0.5">
                            {arch.technologies}
                          </h4>
                        </div>
                        <div className="md:w-2/3">
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {arch.details}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Transactions & Order Flow */}
              {activeTab === "transactions" && (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 space-y-3">
                    <div className="text-slate-400">// Server-side order validation &amp; PostgreSQL transaction</div>
                    <div className="text-emerald-400">BEGIN TRANSACTION;</div>
                    <div className="pl-4 text-slate-300 space-y-1">
                      <div>1. Validate item stock &amp; inventory:</div>
                      <div className="text-cyan-400 pl-4">SELECT stock FROM inventory WHERE item_id = :id FOR UPDATE;</div>
                      <div>2. Validate pricing &amp; calculated order total serverside;</div>
                      <div>3. Update inventory count:</div>
                      <div className="text-cyan-400 pl-4">UPDATE inventory SET stock = stock - :qty WHERE item_id = :id;</div>
                      <div>4. Insert validated order record:</div>
                      <div className="text-cyan-400 pl-4">INSERT INTO orders (items, status, total) VALUES (...);</div>
                      <div>5. Generate dynamic WhatsApp order summary;</div>
                    </div>
                    <div className="text-emerald-400">COMMIT;</div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800">
                      <h4 className="text-xs font-semibold text-white mb-1 flex items-center gap-1.5">
                        <Send className="w-3.5 h-3.5 text-emerald-400" />
                        WhatsApp Ordering
                      </h4>
                      <p className="text-xs text-slate-400">
                        Integrated WhatsApp ordering with dynamically generated order details for direct customer communication.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800">
                      <h4 className="text-xs font-semibold text-white mb-1 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-primary-400" />
                        Vercel Deployment
                      </h4>
                      <p className="text-xs text-slate-400">
                        Application deployed on Vercel with automated build workflows and production edge routing.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Created with Next.js, TypeScript, Supabase, PostgreSQL &amp; Vercel
              </span>
              <div className="flex items-center gap-2">
                {FEATURED_PROJECT.liveUrl && (
                  <a
                    href={FEATURED_PROJECT.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 transition-all"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <a
                  href={FEATURED_PROJECT.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-primary-600 hover:bg-primary-500 text-white transition-all shadow-md"
                >
                  <span>View on GitHub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
