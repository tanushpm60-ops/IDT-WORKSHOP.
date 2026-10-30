import React from 'react';
import { MatrixGridCanvas } from './components/MatrixGridCanvas';
import { CursorFollower } from './components/CursorFollower';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { TechStackSkills } from './components/TechStackSkills';
import { EducationJourney } from './components/EducationJourney';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="relative min-h-screen bg-carbon-900 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 overflow-x-hidden">
      {/* Interactive Background Canvas: Matrix-Dot Grid with Ripple Physics */}
      <MatrixGridCanvas />

      {/* Interactive Mouse Feature (Easter Egg): Subtle Custom Cursor Follower / Trailing Light Spark */}
      <CursorFollower />

      {/* Floating Frosted-Glass Fixed Navigation Bar */}
      <Navbar />

      {/* Main Unified Portfolio Flow */}
      <main className="relative z-10">
        {/* 1. Hero Intro Screen */}
        <HeroSection />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Featured Projects 3D Showcase */}
        <FeaturedProjects />

        {/* 4. Tech Stack & Skills Matrix */}
        <TechStackSkills />

        {/* 5. Education & Campus Journey Section */}
        <EducationJourney />

        {/* 6. Get In Touch Contact Card, Direct Magnetic Links & Unified Footer */}
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
