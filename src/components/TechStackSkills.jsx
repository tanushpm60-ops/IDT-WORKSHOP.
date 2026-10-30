import React from 'react';
import { 
  Code2, 
  Wrench, 
  Cpu, 
  Sparkles, 
  Database, 
  Network, 
  Boxes, 
  Layers 
} from 'lucide-react';

export const TechStackSkills = () => {
  // SVG Icons for authentic official tech presentation
  const skillCategories = [
    {
      title: "Languages",
      subtitle: "Core Syntax & Programming",
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      skills: [
        {
          name: "C++",
          level: "Proficient",
          badgeColor: "emerald",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="#00599C" strokeWidth="1.5" fill="#004482" fillOpacity="0.25"/>
              <path d="M9.5 9.5C8.6 10.4 8.6 11.8 8.6 12C8.6 12.2 8.6 13.6 9.5 14.5" stroke="#659AD2" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 11V13M13 12H15" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
              <path d="M18 11V13M17 12H19" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ),
        },
        {
          name: "Python",
          level: "Proficient",
          badgeColor: "emerald",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M11.9 2C8.2 2 8.4 3.6 8.4 3.6L8.4 5.3H12V5.8H4.8C4.8 5.8 2 5.5 2 9.2C2 12.9 4.4 12.7 4.4 12.7H5.9V10.7C5.9 8.7 7.7 8.7 7.7 8.7H11.8C13.5 8.7 13.5 7.1 13.5 7.1V3.7C13.5 3.7 13.7 2 11.9 2ZM10.2 3.1C10.7 3.1 11.1 3.5 11.1 4C11.1 4.5 10.7 4.9 10.2 4.9C9.7 4.9 9.3 4.5 9.3 4C9.3 3.5 9.7 3.1 10.2 3.1Z" fill="#3776AB"/>
              <path d="M12.1 22C15.8 22 15.6 20.4 15.6 20.4L15.6 18.7H12V18.2H19.2C19.2 18.2 22 18.5 22 14.8C22 11.1 19.6 11.3 19.6 11.3H18.1V13.3C18.1 15.3 16.3 15.3 16.3 15.3H12.2C10.5 15.3 10.5 16.9 10.5 16.9V20.3C10.5 20.3 10.3 22 12.1 22ZM13.8 20.9C13.3 20.9 12.9 20.5 12.9 20C12.9 19.5 13.3 19.1 13.8 19.1C14.3 19.1 14.7 19.5 14.7 20C14.7 20.5 14.3 20.9 13.8 20.9Z" fill="#FFD43B"/>
            </svg>
          ),
        },
        {
          name: "JavaScript",
          level: "Proficient",
          badgeColor: "emerald",
          icon: (
            <svg className="w-5 h-5 rounded" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
              <path d="M6 18.5C6.8 19.5 8 20.1 9.6 20.1C11.8 20.1 13.2 19 13.2 16.8V8H11V16.8C11 17.8 10.4 18.3 9.6 18.3C8.6 18.3 7.8 17.6 7.3 16.9L6 18.5ZM14.4 18.7C15.5 19.6 16.9 20.1 18.7 20.1C21.4 20.1 23 18.7 23 16.3C23 14 21.6 13 19.6 12.2L18.8 11.8C17.6 11.3 17 10.8 17 9.9C17 9 17.8 8.3 19 8.3C20.1 8.3 21 8.8 21.7 9.6L22.9 8C21.9 6.8 20.5 6.3 19 6.3C16.6 6.3 15 7.7 15 10C15 12.2 16.4 13.1 18.3 13.9L19.1 14.3C20.4 14.9 21.1 15.5 21.1 16.5C21.1 17.6 20.1 18.3 18.7 18.3C17.2 18.3 16 17.6 15.3 16.5L14.4 18.7Z" fill="#000000"/>
            </svg>
          ),
        },
        {
          name: "Java",
          level: "Familiar",
          badgeColor: "lime",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M9 19C13 19.5 17 19.5 20 18C19 19.5 16 21 11 21C6 21 4 19.5 4 19C4 18.5 7 18 9 19Z" fill="#5382A1"/>
              <path d="M15 15C17 14 18.5 12.5 18 11C17.5 9.5 15.5 10 14 10.5C12.5 11 10 11.5 8 10C6.5 9 6.5 7.5 7.5 6.5C8.5 5.5 10 5.5 11.5 6.5C10 4 6 5 5 7.5C4 10 6 12 8 13C10.5 14 13.5 13.5 15 15Z" fill="#E76F00"/>
              <path d="M12 2C13.5 3.5 13 4.5 11.5 5.5C10 6.5 10.5 8 12 9C10.5 8 10 6.5 11.5 5.5C12.5 4.5 12 3.5 12 2Z" fill="#5382A1"/>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Frameworks & Tools",
      subtitle: "Web, Workflow & Versioning",
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      skills: [
        {
          name: "React",
          level: "Proficient",
          badgeColor: "emerald",
          icon: (
            <svg className="w-5 h-5 animate-[spin_10s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348">
              <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
              <g stroke="#61DAFB" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
              </g>
            </svg>
          ),
        },
        {
          name: "Tailwind CSS",
          level: "Proficient",
          badgeColor: "emerald",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
            </svg>
          ),
        },
        {
          name: "Node.js",
          level: "Familiar",
          badgeColor: "lime",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 2L3.5 6.9V16.8L12 21.7L20.5 16.8V6.9L12 2Z" fill="#339933" fillOpacity="0.2" stroke="#339933" strokeWidth="1.5"/>
              <path d="M12 5.5L6.5 8.7V15.1L12 18.3L17.5 15.1V8.7L12 5.5Z" fill="#339933"/>
            </svg>
          ),
        },
        {
          name: "Git / GitHub",
          level: "Proficient",
          badgeColor: "emerald",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M21.5 11.5L12.5 2.5C12 2 11.2 2 10.7 2.5L8.5 4.7L11.2 7.4C11.8 7.2 12.6 7.4 13.1 7.9C13.6 8.4 13.8 9.2 13.6 9.8L16.2 12.4C16.8 12.2 17.6 12.4 18.1 12.9C18.8 13.6 18.8 14.8 18.1 15.5C17.4 16.2 16.2 16.2 15.5 15.5C15 15 14.8 14.2 15 13.6L12.6 11.2V16.3C12.8 16.5 12.9 16.7 12.9 17C12.9 18.1 12 19 10.9 19C9.8 19 8.9 18.1 8.9 17C8.9 16.2 9.4 15.5 10.1 15.2V10.1C9.4 9.8 8.9 9.1 8.9 8.3C8.9 8 9 7.8 9.2 7.6L6.5 4.9L2.5 8.9C2 9.4 2 10.2 2.5 10.7L11.5 19.7C12 20.2 12.8 20.2 13.3 19.7L21.5 12.5C22 12 22 11.2 21.5 11.5Z" fill="#F05032"/>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Core CS Concepts",
      subtitle: "Computer Science Foundations",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      skills: [
        {
          name: "Data Structures",
          level: "Proficient",
          badgeColor: "emerald",
          icon: <Network className="w-5 h-5 text-emerald-400" />,
        },
        {
          name: "OOP",
          level: "Proficient",
          badgeColor: "emerald",
          icon: <Boxes className="w-5 h-5 text-lime-400" />,
        },
        {
          name: "DBMS",
          level: "Familiar",
          badgeColor: "lime",
          icon: <Database className="w-5 h-5 text-emerald-300" />,
        },
        {
          name: "OS",
          level: "Currently Learning",
          badgeColor: "amber",
          icon: <Layers className="w-5 h-5 text-amber-400" />,
        },
      ],
    },
  ];

  // Helper styling for tooltip tags based on comfort level
  const getLevelStyle = (level) => {
    switch (level) {
      case 'Proficient':
        return 'bg-emerald-950/95 text-emerald-300 border-emerald-400/50 shadow-[0_0_12px_rgba(16,185,129,0.4)]';
      case 'Familiar':
        return 'bg-lime-950/95 text-lime-300 border-lime-400/50 shadow-[0_0_12px_rgba(163,230,53,0.35)]';
      case 'Currently Learning':
        return 'bg-amber-950/95 text-amber-300 border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.35)]';
      default:
        return 'bg-carbon-900 text-slate-200 border-carbon-700';
    }
  };

  const getIndicatorDot = (level) => {
    switch (level) {
      case 'Proficient':
        return 'bg-emerald-400 shadow-[0_0_6px_#10b981]';
      case 'Familiar':
        return 'bg-lime-400 shadow-[0_0_6px_#a3e635]';
      case 'Currently Learning':
        return 'bg-amber-400 animate-pulse shadow-[0_0_6px_#f59e0b]';
      default:
        return 'bg-slate-400';
    }
  };

  return (
    <section id="skills" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2.5 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>03 // Technical Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tech Stack & <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A comprehensive breakdown of languages, development tools, and academic foundations honed during my coursework at KSIT.
          </p>
        </div>

        {/* Legend / Comfort Level Indicator */}
        <div className="inline-flex items-center gap-3.5 px-4 py-2 rounded-xl bg-carbon-800/80 border border-emerald-500/20 backdrop-blur-md text-xs font-mono">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
            Proficient
          </span>
          <span className="text-carbon-600">|</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_6px_#a3e635]" />
            Familiar
          </span>
          <span className="text-carbon-600">|</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_6px_#f59e0b]" />
            Learning
          </span>
        </div>
      </div>

      {/* 3 Categorized Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-carbon-800/40 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_-10px_rgba(16,185,129,0.15)] transition-all duration-300 relative group overflow-visible"
          >
            {/* Ambient Top Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 group-hover:via-emerald-400 transition-all duration-300" />

            {/* Category Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-carbon-900 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.3)] transition-all duration-300">
                  {cat.icon}
                </div>
                <span className="text-[11px] font-mono text-emerald-400/80 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {cat.skills.length} Items
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                {cat.subtitle}
              </p>
            </div>

            {/* Interactive Pill Badges Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-carbon-700/60">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="group/pill relative flex items-center justify-center gap-2.5 px-3 py-2.5 rounded-xl bg-carbon-900/90 border border-carbon-700/80 hover:border-emerald-400/80 hover:bg-carbon-800 transition-all duration-200 transform hover:scale-105 hover:shadow-[0_0_16px_rgba(16,185,129,0.35)] cursor-pointer select-none"
                >
                  {/* Tooltip on Hover */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/pill:opacity-100 group-hover/pill:-translate-y-1 transition-all duration-200 pointer-events-none z-30 whitespace-nowrap">
                    <div
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold tracking-wide border flex items-center gap-1.5 backdrop-blur-md ${getLevelStyle(
                        skill.level
                      )}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${getIndicatorDot(skill.level)}`} />
                      <span>{skill.level}</span>
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="w-2 h-2 rotate-45 bg-carbon-900 border-r border-b border-emerald-500/40 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                  </div>

                  {/* Skill Icon */}
                  <div className="w-5 h-5 flex items-center justify-center shrink-0 group-hover/pill:scale-110 transition-transform">
                    {skill.icon}
                  </div>

                  {/* Skill Label */}
                  <span className="text-xs font-mono font-medium text-slate-200 group-hover/pill:text-emerald-300 transition-colors truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSkills;

