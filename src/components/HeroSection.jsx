import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Code2, 
  Cpu, 
  Terminal as TerminalIcon, 
  CheckCircle2, 
  ExternalLink,
  ChevronDown,
  Layers,
  GraduationCap
} from 'lucide-react';

export const HeroSection = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleResumeDownload = (e) => {
    e.preventDefault();
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  return (
    <section 
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
    >
      {/* Background radial gradient spotlight (Cyber-Emerald / Lime, no blue) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-emerald-500/10 via-emerald-400/15 to-lime-400/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Cyber Grid Crosshairs / Corner Accents */}
      <div className="absolute top-24 left-6 hidden lg:flex items-center gap-2 font-mono text-[11px] text-emerald-500/30">
        <span className="w-2 h-2 border-l border-t border-emerald-500/40"></span>
        <span>SYS.DEV // 2026</span>
      </div>
      <div className="absolute top-24 right-6 hidden lg:flex items-center gap-2 font-mono text-[11px] text-emerald-500/30">
        <span>LOC: BENGALURU, IN</span>
        <span className="w-2 h-2 border-r border-t border-emerald-500/40"></span>
      </div>

      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center relative z-10">
        
        {/* 1. STATUS BADGE: Animated Blinking Radar Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-carbon-800/80 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-400/60 transition-all duration-300 group cursor-default mb-8">
          {/* Radar Blinking Green Indicator */}
          <div className="relative flex items-center justify-center w-3 h-3">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-400 shadow-[0_0_8px_#10b981]" />
          </div>

          <span className="font-mono text-xs sm:text-sm font-medium tracking-wide text-emerald-300 group-hover:text-emerald-200 transition-colors">
            Student Developer <span className="text-emerald-500/70 mx-1">//</span> <span className="text-lime-300">Open for Internships</span>
          </span>
        </div>

        {/* 2. MAIN HEADLINE */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.1] max-w-3xl mb-6">
          Hey, I am{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 bg-clip-text text-transparent font-black drop-shadow-[0_0_35px_rgba(16,185,129,0.45)]">
              tanush
            </span>
            {/* Subtle glow underscore */}
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-400 rounded-full opacity-80" />
          </span>{' '}
          — Building the Future of Tech.
        </h1>

        {/* 3. STUDENT BIO */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10 px-2">
          2nd Year Computer Science Student at{' '}
          <span className="text-white font-semibold underline decoration-emerald-500/50 underline-offset-4 decoration-2 hover:decoration-emerald-400 transition-colors">
            KSIT
          </span>{' '}
          passionate about{' '}
          <span className="text-emerald-300 font-medium">web development</span>,{' '}
          <span className="text-lime-300 font-medium">AI</span>, and building{' '}
          <span className="text-slate-100 font-semibold border-b border-emerald-500/30">
            real-world projects
          </span>
          .
        </p>

        {/* 4. ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          {/* Primary Action Button: Glowing Emerald with hover lift */}
          <a
            href="#projects"
            className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm text-carbon-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 hover:from-emerald-300 hover:to-lime-200 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] font-semibold group focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4 text-carbon-950 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary Action Button: Outline with frosted glass & hover lift */}
          <button
            onClick={handleResumeDownload}
            type="button"
            className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-carbon-800/60 hover:bg-carbon-800/90 border border-emerald-500/30 hover:border-emerald-400 hover:text-white backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] group focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          >
            <Download className="w-4 h-4 text-emerald-400 group-hover:text-lime-300 transition-colors duration-300" />
            <span>Download Resume / CV</span>
          </button>
        </div>

        {/* Download Feedback Toast */}
        {downloadSuccess && (
          <div className="mb-8 px-4 py-2 rounded-lg bg-emerald-950/80 border border-emerald-400/60 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Tanush_Resume_2026.pdf ready for download!</span>
          </div>
        )}

        {/* 5. INTERACTIVE TERMINAL / DEVELOPER METRICS CARD */}
        <div className="w-full max-w-2xl bg-carbon-800/50 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/60 relative group hover:border-emerald-500/40 transition-all duration-300 text-left">
          {/* Top Bar with cyber dots */}
          <div className="flex items-center justify-between border-b border-carbon-700/60 pb-3 mb-3.5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                tanush@ksit-cs: ~
              </span>
            </div>
            <span className="font-mono text-[11px] text-emerald-400/70 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
              v2.4.0-active
            </span>
          </div>

          {/* Terminal Code Snippet */}
          <div className="font-mono text-xs sm:text-sm space-y-1.5 text-slate-300">
            <p>
              <span className="text-emerald-400 font-semibold">$</span> <span className="text-slate-100">cat profile.json</span>
            </p>
            <div className="text-slate-400 pl-3 border-l-2 border-emerald-500/30 space-y-1 text-[12px] sm:text-[13px]">
              <p>
                <span className="text-emerald-400">"status"</span>: <span className="text-lime-300">"Undergraduate in CSE (Sem 4)"</span>,
              </p>
              <p>
                <span className="text-emerald-400">"skills"</span>: [<span className="text-slate-200">"React"</span>, <span className="text-slate-200">"Tailwind"</span>, <span className="text-slate-200">"Node.js"</span>, <span className="text-slate-200">"Python"</span>, <span className="text-slate-200">"AI/ML"</span>],
              </p>
              <p>
                <span className="text-emerald-400">"objective"</span>: <span className="text-slate-200">"Building high-performance apps & scalable systems"</span>
              </p>
            </div>
          </div>

          {/* Micro Tags */}
          <div className="mt-4 pt-3 border-t border-carbon-700/60 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                KSIT Bangalore
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-lime-400" />
                AI & Full-Stack
              </span>
            </div>
            <span className="font-mono text-[11px] text-emerald-400/90 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Ready to collaborate
            </span>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#about"
        className="mt-12 flex flex-col items-center gap-1.5 text-slate-500 hover:text-emerald-400 transition-colors group cursor-pointer"
        aria-label="Scroll down to About"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-emerald-400/70 group-hover:text-emerald-400" />
      </a>
    </section>
  );
};

export default HeroSection;

