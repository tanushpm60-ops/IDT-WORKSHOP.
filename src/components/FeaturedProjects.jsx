import React, { useState, useRef } from 'react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Calendar, 
  ScanFace, 
  BookOpen, 
  Code2, 
  Layers,
  ArrowUpRight
} from 'lucide-react';

// Single 3D Perspective Tilt Card with Glare & Hover Lift
const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt calculation (max ~8 degrees)
    const rotateX = -((y - centerY) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;

    // Glare coordinates in percentages
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 1 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smooth reset to rest position
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      className="h-full flex"
    >
      <div
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-6px)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
          transition: isHovered 
            ? 'transform 0.12s ease-out, box-shadow 0.3s ease, border-color 0.3s ease' 
            : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease, border-color 0.3s ease',
        }}
        className={`relative flex flex-col justify-between w-full rounded-2xl bg-carbon-800/50 backdrop-blur-xl border border-emerald-500/20 p-6 sm:p-7 overflow-hidden group ${
          isHovered
            ? 'border-emerald-500/50 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.85),0_0_30px_-4px_rgba(16,185,129,0.32)]'
            : 'shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]'
        }`}
      >
        {/* Dynamic Interactive Glare / Shine Effect */}
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle 280px at ${glare.x}% ${glare.y}%, rgba(16, 185, 129, 0.18), rgba(163, 230, 53, 0.08) 40%, transparent 80%)`,
          }}
        />

        {/* Ambient Top Glow Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 group-hover:via-emerald-400 group-hover:shadow-[0_0_12px_#10b981] transition-all duration-300" />

        {/* Card Header & Content */}
        <div className="relative z-10 flex flex-col">
          <div className="flex items-center justify-between mb-5">
            {/* Project Icon */}
            <div className="w-12 h-12 rounded-xl bg-carbon-900/90 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:text-lime-300 group-hover:border-emerald-400 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-all duration-300">
              {project.icon}
            </div>

            {/* Category Micro Badge */}
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400/80 bg-emerald-950/60 border border-emerald-500/25 px-2.5 py-1 rounded-full">
              {project.badge}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-200 mb-3 flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-500/50 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </h3>

          {/* Project Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
            {project.description}
          </p>
        </div>

        {/* Card Footer: Tech Badges & Action Buttons */}
        <div className="relative z-10 mt-auto pt-5 border-t border-carbon-700/60 flex flex-col gap-4">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.techBadges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-carbon-900/80 border border-emerald-500/20 text-emerald-300/90 group-hover:border-emerald-500/35 transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Action Buttons: "Live Demo" and "GitHub Code" */}
          <div className="grid grid-cols-2 gap-2.5 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium text-carbon-950 bg-gradient-to-r from-emerald-400 to-lime-300 hover:from-emerald-300 hover:to-lime-200 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-200 active:scale-95"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium text-slate-200 bg-carbon-900/90 hover:bg-carbon-800 border border-emerald-500/30 hover:border-emerald-400 hover:text-white transition-all duration-200 active:scale-95"
            >
              <Github className="w-3.5 h-3.5 text-emerald-400" />
              <span>GitHub Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const projectsData = [
    {
      id: 1,
      title: "Campus Event Finder",
      badge: "Web Platform",
      categories: ['All', 'Web Apps'],
      icon: <Calendar className="w-6 h-6" />,
      description:
        "A centralized platform that helps students discover upcoming college events, workshops, hackathons, and cultural activities. Students can explore event details, register for events, and stay updated without missing important campus activities.",
      techBadges: ["React", "Firebase", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://example.com/demo/campus-events",
      githubUrl: "https://github.com/tanush/campus-event-finder",
    },
    {
      id: 2,
      title: "Smart Attendance Tracker",
      badge: "Computer Vision",
      categories: ['All', 'AI / ML', 'Mini-Projects'],
      icon: <ScanFace className="w-6 h-6" />,
      description:
        "An intelligent attendance management system that automates student attendance tracking using facial recognition. It uses a camera and computer vision to identify students, record attendance, and reduce manual work for teachers.",
      techBadges: ["Python", "OpenCV", "Face Recognition", "SQLite"],
      liveUrl: "https://example.com/demo/smart-attendance",
      githubUrl: "https://github.com/tanush/smart-attendance-tracker",
    },
    {
      id: 3,
      title: "Student Notes Marketplace",
      badge: "Full-Stack Web",
      categories: ['All', 'Web Apps', 'Mini-Projects'],
      icon: <BookOpen className="w-6 h-6" />,
      description:
        "A student-focused platform where users can upload, browse, share, and download academic notes and study materials. It helps students access quality learning resources, collaborate with peers, and prepare for examinations more efficiently.",
      techBadges: ["Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "https://example.com/demo/student-notes",
      githubUrl: "https://github.com/tanush/student-notes-marketplace",
    },
  ];

  const filteredProjects = projectsData.filter((project) =>
    project.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2.5 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>02 // Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Selected engineering builds designed for campus productivity, automated intelligence, and developer collaboration.
          </p>
        </div>

        {/* Filter Pill Row */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-carbon-800/80 border border-emerald-500/20 backdrop-blur-md">
          {filterOptions.map((filter) => {
            const count = projectsData.filter((p) => p.categories.includes(filter)).length;
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-emerald-500 text-carbon-950 font-semibold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-carbon-700/60'
                }`}
              >
                <span>{filter}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-carbon-950/30 text-carbon-950 font-bold' : 'bg-carbon-900 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {filteredProjects.map((project) => (
          <div key={project.id} className="animate-in fade-in zoom-in-95 duration-300">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;

