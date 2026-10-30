import React from 'react';
import { 
  GraduationCap, 
  Trophy, 
  Zap, 
  Users, 
  Award, 
  Calendar, 
  MapPin, 
  ArrowUpRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

export const EducationJourney = () => {
  const milestones = [
    {
      year: "2026",
      status: "Present Phase",
      isCurrent: true,
      title: "Engineering Student – Building Technical Skills",
      description:
        "Currently pursuing B.Tech in Computer Science, focusing on AI, web development, programming, and real-world project development.",
      highlights: ["Specializing in AI & Web Development", "KSIT CSE Semester 4", "Real-World Project Prototyping"],
    },
    {
      year: "2025",
      status: "Collaborative Growth",
      isCurrent: false,
      title: "Exploring Development & Team Projects",
      description:
        "Strengthened programming fundamentals and collaborated on technical projects, gaining practical experience in software development and problem-solving.",
      highlights: ["Object-Oriented Programming & Systems", "Full-Stack Web Architectures", "Hackathons & Dev Sprints"],
    },
    {
      year: "2024",
      status: "The Beginning",
      isCurrent: false,
      title: "Started Engineering Journey",
      description:
        "Began my engineering degree, developed an interest in technology, and started learning programming and core computer science concepts.",
      highlights: ["Enrolled at KSIT Bangalore", "C++ & Python Foundations", "Data Structures Inception"],
    },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "1st Place - University Hackathon",
      detail: "Prototyped a rapid campus productivity app under 24 hours.",
      tag: "Hackathon Champion",
      accent: "from-amber-400/20 to-emerald-400/10",
      borderGlow: "group-hover:border-amber-400/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]",
    },
    {
      icon: "⚡",
      title: "150+ LeetCode Problems Solved",
      detail: "Data Structures, Algorithms & competitive programming in C++.",
      tag: "Algorithmic Rigor",
      accent: "from-lime-400/20 to-emerald-400/10",
      borderGlow: "group-hover:border-lime-400/50 group-hover:shadow-[0_0_20px_rgba(163,230,53,0.25)]",
    },
    {
      icon: "👥",
      title: "Tech Club Organizer",
      detail: "Conducting technical workshops and peer mentoring sessions.",
      tag: "Leadership & Community",
      accent: "from-emerald-400/20 to-teal-400/10",
      borderGlow: "group-hover:border-emerald-400/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    },
    {
      icon: "📜",
      title: "Full-Stack Certified",
      detail: "Certified in modern frontend UI, RESTful backends & databases.",
      tag: "Industry Credentials",
      accent: "from-cyan-400/20 to-emerald-400/10",
      borderGlow: "group-hover:border-emerald-400/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]",
    },
  ];

  return (
    <section id="campus-life" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-28">
      {/* Anchor alias for Education */}
      <span id="education" className="absolute -top-28" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2.5 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>04 // Academic Roadmap & Student Life</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">Campus Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Tracing my engineering path at KSIT — from computational fundamentals to real-world AI and web solutions.
          </p>
        </div>

        {/* Institution Badge */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-carbon-800/80 border border-emerald-500/20 backdrop-blur-md">
          <div className="w-8 h-8 rounded-lg bg-carbon-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono font-semibold text-white">KSIT Bengaluru</div>
            <div className="text-[11px] font-mono text-emerald-400/80">B.Tech in CSE (2024 – 2028)</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Timeline (Left) & Achievement Callouts (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Vertical Illuminated Milestone Timeline */}
        <div className="lg:col-span-7 relative">
          {/* Vertical Illuminated Emerald Line */}
          <div className="absolute top-5 bottom-6 left-[19px] sm:left-[23px] w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500/60 to-emerald-950/40 pointer-events-none" />

          <div className="space-y-8">
            {milestones.map((item, index) => (
              <div key={index} className="relative flex items-start gap-4 sm:gap-6 group">
                
                {/* Glowing Nodal Dot */}
                <div className="relative z-10 flex items-center justify-center mt-1 shrink-0">
                  {item.isCurrent ? (
                    <div className="relative flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-30 animate-ping" />
                      <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-carbon-900 border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_15px_#10b981]">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-10 sm:w-12 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-carbon-900 border-2 border-emerald-500/60 group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 group-hover:bg-lime-300 transition-colors" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Milestone Card */}
                <div className="flex-1 p-5 sm:p-6 rounded-2xl bg-carbon-800/40 backdrop-blur-xl border border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:bg-carbon-800/60 transition-all duration-300 transform group-hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] group-hover:shadow-[0_15px_30px_-10px_rgba(16,185,129,0.2)] relative overflow-hidden">
                  
                  {/* Subtle Top-Edge Accent Glow */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-500/30 group-hover:via-emerald-400 transition-all duration-300" />

                  {/* Header: Year Pill & Status */}
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-carbon-900 border border-emerald-500/40 text-emerald-300 group-hover:border-emerald-400 transition-colors">
                      {item.year}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400/80 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/20">
                      {item.status}
                    </span>
                  </div>

                  {/* Milestone Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  {/* Milestone Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-carbon-700/60">
                    {item.highlights.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-carbon-900/80 border border-carbon-700 text-slate-300 group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Achievement Badges (Compact 2x2 Grid) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <span>Achievement Callouts</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">Campus & Honors</span>
          </div>

          {/* 2x2 Compact Grid of Accomplishment Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl bg-carbon-800/40 backdrop-blur-xl border border-emerald-500/20 ${ach.borderGlow} transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] flex flex-col justify-between group cursor-default shadow-md hover:bg-carbon-800/70`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                      {ach.icon}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400/90 bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      {ach.tag}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-100 group-hover:text-emerald-300 transition-colors leading-snug mb-1.5">
                    {ach.title}
                  </h4>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {ach.detail}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-carbon-700/50 flex items-center justify-between text-[11px] font-mono text-emerald-500/70 group-hover:text-emerald-400 transition-colors">
                  <span>Verified</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* College Quick Info Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-carbon-800/60 to-carbon-900 border border-emerald-500/20 backdrop-blur-md flex items-center justify-between gap-4 mt-2">
            <div>
              <div className="text-xs font-mono text-emerald-400 mb-0.5">Academic Rigor</div>
              <div className="text-sm font-semibold text-white">Consistent High Performance</div>
              <p className="text-xs text-slate-400 mt-1">Maintaining strong core GPA while active in coding clubs and hackathons.</p>
            </div>
            <div className="shrink-0 text-center px-3.5 py-2 rounded-xl bg-carbon-900/90 border border-emerald-500/30">
              <div className="text-base font-bold font-mono text-lime-300">Sem 4</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">2026 Active</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationJourney;

