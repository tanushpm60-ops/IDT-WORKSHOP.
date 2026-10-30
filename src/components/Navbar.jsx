import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles, Github, ExternalLink } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section for active indicator
      const sections = ['about', 'projects', 'skills', 'campus-life', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`relative flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl transition-all duration-300 border ${
            isScrolled
              ? 'bg-carbon-900/85 backdrop-blur-xl border-emerald-500/25 shadow-[0_12px_35px_-8px_rgba(0,0,0,0.85)] shadow-emerald-950/20'
              : 'bg-carbon-900/60 backdrop-blur-md border-emerald-500/15 shadow-lg shadow-black/40'
          }`}
        >
          {/* Subtle Cyber Top-Line Accent */}
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent pointer-events-none" />

          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-lg px-1.5 py-1"
          >
            <div className="w-8 h-8 rounded-lg bg-carbon-800 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.35)] transition-all duration-300">
              <Terminal className="w-4 h-4 text-emerald-400 group-hover:scale-110 group-hover:text-lime-300 transition-all duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-base font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                tanush<span className="text-emerald-400 group-hover:text-lime-400 transition-colors">.dev</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-500/70 -mt-1 tracking-wider uppercase">
                KSIT CS '27
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-300 bg-emerald-500/10 border border-emerald-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-carbon-800/60'
                  } group`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Subtle hover neon bar */}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </a>
              );
            })}
          </div>

          {/* Right Action / Quick Links */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-carbon-800/80 rounded-lg border border-transparent hover:border-emerald-500/20 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-4 py-1.5 text-xs font-mono font-semibold text-emerald-300 bg-carbon-800/90 border border-emerald-500/40 rounded-xl hover:bg-emerald-500/15 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 group"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-carbon-800/80 border border-emerald-500/30 text-slate-300 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu with Frosted Glass Effect */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-carbon-900/95 backdrop-blur-2xl border border-emerald-500/30 shadow-2xl shadow-emerald-950/40 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-emerald-300 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20 transition-all"
                >
                  <span>{link.name}</span>
                  <span className="text-emerald-500 font-mono text-xs opacity-60">→</span>
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-carbon-700/60 flex items-center justify-between px-2">
                <span className="text-xs font-mono text-emerald-400/80 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Available for Internships
                </span>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-mono font-medium text-emerald-300 bg-carbon-800 px-3 py-1.5 rounded-lg border border-emerald-500/30"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

