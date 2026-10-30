import React from 'react';
import { User, Code, Sparkles, Terminal, Compass, GraduationCap } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-28">
      <div className="p-8 sm:p-12 rounded-3xl bg-carbon-800/40 border border-emerald-500/20 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-black/40">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-500/10 via-lime-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
          
          {/* Left Text Column */}
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              01 // Background & Philosophy
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Undergraduate Engineer building with{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
                purpose & precision
              </span>
              .
            </h2>

            <div className="text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed font-normal pt-2">
              <p>
                I am an undergraduate Computer Science and Engineering student at{' '}
                <span className="text-emerald-300 font-semibold underline decoration-emerald-500/40 underline-offset-4">
                  K.S. Institute of Technology (KSIT)
                </span>
                , Bengaluru. My passion lies at the crossroads of high-performance frontend interfaces, scalable web backends, and practical machine learning applications.
              </p>
              <p>
                Rather than learning in isolation, I believe in building projects that solve concrete student and campus problems — from automated attendance tracking to interactive event discovery platforms.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-carbon-900 border border-emerald-500/30 text-emerald-300">
                <GraduationCap className="w-3.5 h-3.5" />
                KSIT CSE '27 / '28
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-carbon-900 border border-carbon-700 text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-lime-400" />
                Full-Stack & Systems
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-carbon-900 border border-carbon-700 text-slate-300">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                Bengaluru, India
              </span>
            </div>
          </div>

          {/* Right Highlights Column */}
          <div className="w-full md:w-72 flex flex-col gap-3.5 shrink-0">
            <div className="p-4 rounded-xl bg-carbon-900/80 border border-emerald-500/20">
              <div className="text-xs font-mono text-emerald-400 mb-1">01. Engineering Mindset</div>
              <div className="text-sm font-semibold text-white">Clean Architecture</div>
              <p className="text-xs text-slate-400 mt-1">Focusing on maintainable component hierarchies, modular API contracts, and performant state.</p>
            </div>

            <div className="p-4 rounded-xl bg-carbon-900/80 border border-emerald-500/20">
              <div className="text-xs font-mono text-lime-400 mb-1">02. Community Driven</div>
              <div className="text-sm font-semibold text-white">Open Source & Hackathons</div>
              <p className="text-xs text-slate-400 mt-1">Active contributor to peer coding bootcamps and rapid prototyping sprints.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;

