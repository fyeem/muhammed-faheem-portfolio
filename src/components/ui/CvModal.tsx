"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  FileText,
  Mail,
  Phone,
  CheckCircle2,
  GraduationCap,
  Award,
  Layers,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import {
  PERSONAL_INFO,
  EDUCATION_LIST,
  FEATURED_PROJECT,
  SKILL_CATEGORIES,
  CERTIFICATES_LIST,
  ACHIEVEMENTS_LIST,
} from "@/data/portfolioData";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20 text-primary-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Curriculum Vitae</h3>
                  <p className="text-xs text-slate-400">Verified official resume</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.cvDownloadUrl}
                  download="Muhammed_Faheem_Abdul_Azeez_CV.docx"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-600 hover:bg-primary-500 text-white transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
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

            {/* Scrollable CV Document View */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-slate-300 font-sans text-sm bg-slate-900/90">
              {/* CV Top Section */}
              <div className="text-center pb-6 border-b border-slate-800">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm text-primary-400 font-medium mt-1">
                  {PERSONAL_INFO.title}
                </p>

                {/* Contact Quick links */}
                <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-300 mt-4">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-1.5 hover:text-primary-400 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-primary-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </a>
                  <a
                    href={`tel:${PERSONAL_INFO.phoneRaw}`}
                    className="flex items-center gap-1.5 hover:text-primary-400 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-primary-400" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-primary-400 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-primary-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-primary-400 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-primary-400" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-1.5 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary-400" />
                  Skills
                </h2>
                <div className="space-y-2 text-xs">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div key={cat.category} className="flex flex-col sm:flex-row sm:gap-2">
                      <span className="font-semibold text-slate-200 w-36 shrink-0">
                        {cat.category}:
                      </span>
                      <span className="text-slate-300">
                        {cat.items.join(", ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-1.5 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary-400" />
                  Projects
                </h2>
                <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-white">
                        {FEATURED_PROJECT.title} — {FEATURED_PROJECT.subtitle}
                      </h3>
                      <a
                        href={FEATURED_PROJECT.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary-400 hover:underline flex items-center gap-0.5"
                      >
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {FEATURED_PROJECT.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">
                    <strong className="text-slate-300">Tech Stack:</strong>{" "}
                    {FEATURED_PROJECT.techStack.join(", ")}
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 leading-relaxed">
                    {FEATURED_PROJECT.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Certificates */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-1.5 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary-400" />
                  Certificates
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {CERTIFICATES_LIST.map((cert, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-950/40 p-3 rounded-lg border border-slate-800 flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold text-white">{cert.title}</p>
                        <p className="text-slate-400 text-[11px]">{cert.type}</p>
                      </div>
                      <span className="text-[11px] font-mono text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded border border-primary-500/20">
                        {cert.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-1.5 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent-cyan" />
                  Achievements
                </h2>
                <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 text-xs">
                  {ACHIEVEMENTS_LIST.map((ach, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-white">{ach.title}</h3>
                        <span className="text-[11px] text-accent-cyan font-medium">
                          {ach.level}
                        </span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{ach.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-1.5 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary-400" />
                  Education
                </h2>
                <div className="space-y-3 text-xs">
                  {EDUCATION_LIST.map((edu, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-950/40 p-3.5 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <h3 className="font-bold text-white text-sm">{edu.institution}</h3>
                        <p className="text-slate-300">{edu.degree}</p>
                        <p className="text-slate-400 text-[11px]">{edu.location}</p>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20 mb-1">
                          {edu.scoreLabel}: {edu.scoreValue}
                        </span>
                        <p className="text-slate-400 text-[11px] font-mono">{edu.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
              <span>Single Source of Truth: Verified Academic & Technical CV</span>
              <a
                href={PERSONAL_INFO.cvDownloadUrl}
                download="Muhammed_Faheem_Abdul_Azeez_CV.docx"
                className="flex items-center gap-1.5 text-primary-400 hover:text-primary-300 font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                Download Original File (.docx)
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
