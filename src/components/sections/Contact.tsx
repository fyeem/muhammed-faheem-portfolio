"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formState.subject || `Portfolio Contact from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.open(mailtoUrl, "_blank");
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Glow Effect */}
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[350px] bg-primary-600/12 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Build"
          titleAccent="Something Great"
          subtitle="Open for internships, full-stack opportunities, and collaborative engineering projects."
          icon={Mail}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2">
              Direct Contact Channels
            </h3>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/65 border border-slate-800 backdrop-blur-md space-y-2 hover:border-primary-500/40 transition-all shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Email Address</span>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-primary-400 hover:text-primary-300 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm sm:text-base font-semibold text-white hover:text-primary-400 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <span className="break-all">{PERSONAL_INFO.email}</span>
              </a>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-slate-900/65 border border-slate-800 backdrop-blur-md space-y-2 hover:border-emerald-500/40 transition-all shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Phone &amp; WhatsApp</span>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <a
                  href={`tel:${PERSONAL_INFO.phoneRaw}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all flex items-center gap-1"
                >
                  <WhatsAppIcon className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-900/65 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <LinkedinIcon className="w-5 h-5 text-blue-400" />
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">LinkedIn</span>
                  <span className="text-[11px] text-slate-400 font-mono">Connect profile</span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-900/65 border border-slate-800 hover:border-purple-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <GithubIcon className="w-5 h-5 text-purple-400" />
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">GitHub</span>
                  <span className="text-[11px] text-slate-400 font-mono">Explore code</span>
                </div>
              </a>
            </div>

            {/* Location Badge */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <MapPin className="w-4 h-4 text-primary-400 shrink-0" />
              <span>Location: Kannur, Kerala • LPU, Punjab, India</span>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <GlowCard className="bg-slate-900/65 p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-light">
                Fill in your details below to compose an email directly to <strong className="text-slate-300 font-mono">{PERSONAL_INFO.email}</strong>.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Email Client Opened
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    Your message has been pre-formatted for <strong className="text-white">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-primary-400 hover:underline pt-2 font-medium"
                  >
                    Compose another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Your Name <span className="text-primary-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Your Email <span className="text-primary-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="Internship opportunity / Full-stack project"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Message <span className="text-primary-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your team or project requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white shadow-lg shadow-primary-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Opening Email Client...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Email via Client</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
};
