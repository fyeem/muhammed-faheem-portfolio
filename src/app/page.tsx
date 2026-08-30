"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Education } from "@/components/sections/Education";
import { CertificatesAchievements } from "@/components/sections/CertificatesAchievements";
import { Contact } from "@/components/sections/Contact";
import { CvModal } from "@/components/ui/CvModal";
import { ProjectModal } from "@/components/ui/ProjectModal";

export default function HomePage() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 selection:bg-primary-600/30 selection:text-white">
      {/* Background Subtle Gradient Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] -right-40 w-[600px] h-[600px] bg-accent-cyan/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-20 -left-40 w-[500px] h-[500px] bg-accent-violet/8 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10 space-y-8 md:space-y-16">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About />
        <Skills />
        <FeaturedProject onOpenProjectModal={() => setIsProjectModalOpen(true)} />
        <Education />
        <CertificatesAchievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />
    </div>
  );
}
