import React, { useState, useRef } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Loader2, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  ArrowUp, 
  Sparkles,
  MessageSquare,
  ExternalLink
} from 'lucide-react';

// Magnetic Button with smooth cursor attraction effect
const MagneticButton = ({ children, href, ariaLabel, className = '' }) => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate displacement vector from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Apply magnetic dampening (approx 30% pull)
    setPosition({
      x: distanceX * 0.32,
      y: distanceY * 0.32,
    });
  };

  const handleMouseLeave = () => {
    // Reset to origin with spring-like transition
    setPosition({ x: 0, y: 0 });
  };

  return (
    <a
      ref={btnRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.1s ease-out',
      }}
      className={`relative inline-flex items-center justify-center p-3 sm:px-4 sm:py-3 rounded-2xl bg-carbon-800/80 hover:bg-carbon-800 border border-emerald-500/30 hover:border-emerald-400 text-slate-200 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-colors duration-200 group ${className}`}
    >
      {children}
    </a>
  );
};

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'loading' | 'success'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'your.email@example.com'; // [REPLACE: your.email@example.com]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger emerald loading spinner
    setFormStatus('loading');

    // Simulate reliable dispatch & feedback
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Return to idle after a few seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 4500);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 scroll-mt-28">
      {/* Contact Card */}
      <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-b from-carbon-800/70 via-carbon-900/90 to-carbon-950 border border-emerald-500/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
        
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
          
          {/* Left Column: Headline, Subtitle & Direct Magnetic Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              05 // Direct Communication
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let’s <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 bg-clip-text text-transparent">Collaborate</span> & Build
            </h2>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Open for summer internships, open-source projects, or tech chats. Drop me a message!
            </p>

            {/* Availability Pill */}
            <div className="p-4 rounded-2xl bg-carbon-900/80 border border-emerald-500/20 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
              </span>
              <div>
                <div className="text-xs font-mono font-semibold text-emerald-300">Fast Response Rate</div>
                <div className="text-[11px] font-mono text-slate-400">Replying within 24 hours to campus & internship queries</div>
              </div>
            </div>

            {/* Direct Links with Magnetic Hover Effect */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
                Direct Channels & Socials
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                {/* GitHub */}
                <MagneticButton href="https://github.com" ariaLabel="GitHub Profile">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline-block ml-2 text-xs font-mono font-medium">GitHub</span>
                </MagneticButton>

                {/* LinkedIn */}
                <MagneticButton href="https://linkedin.com" ariaLabel="LinkedIn Profile">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline-block ml-2 text-xs font-mono font-medium">LinkedIn</span>
                </MagneticButton>

                {/* Email Direct Link */}
                <MagneticButton href={`mailto:${emailAddress}`} ariaLabel="Send Email">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline-block ml-2 text-xs font-mono font-medium">Email</span>
                </MagneticButton>

                {/* Quick Copy Email Button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy Email Address"
                  className="inline-flex items-center justify-center p-3 rounded-2xl bg-carbon-900/90 hover:bg-carbon-800 border border-carbon-700 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-300 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copiedEmail && (
                <div className="mt-2 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Email copied to clipboard!</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-carbon-900/80 backdrop-blur-xl border border-emerald-500/25 p-6 sm:p-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-carbon-800">
              <span className="text-xs font-mono text-slate-300 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Message Dispatcher</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                Encrypted & Direct
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Your Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Your Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Chen"
                  className="w-full px-4 py-2.5 rounded-xl bg-carbon-950/70 border border-carbon-700/80 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-slate-100 placeholder:text-slate-500 text-sm font-mono transition-all outline-none"
                />
              </div>

              {/* Your Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Your Email <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-carbon-950/70 border border-carbon-700/80 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-slate-100 placeholder:text-slate-500 text-sm font-mono transition-all outline-none"
                />
              </div>

              {/* Your Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Your Message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Tanush, let's connect about..."
                  className="w-full px-4 py-2.5 rounded-xl bg-carbon-950/70 border border-carbon-700/80 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-slate-100 placeholder:text-slate-500 text-sm font-mono transition-all outline-none resize-none"
                />
              </div>

              {/* Submit Button with Loading Spinner & Success State */}
              <button
                type="submit"
                disabled={formStatus === 'loading' || formStatus === 'success'}
                className={`w-full relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-bold tracking-wide transition-all duration-300 shadow-md transform active:scale-95 ${
                  formStatus === 'success'
                    ? 'bg-emerald-500 text-carbon-950 shadow-[0_0_25px_rgba(16,185,129,0.5)] cursor-default'
                    : formStatus === 'loading'
                    ? 'bg-emerald-400/90 text-carbon-950 cursor-wait'
                    : 'bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 hover:from-emerald-300 hover:to-lime-200 text-carbon-950 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-0.5'
                }`}
              >
                {formStatus === 'loading' && (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-carbon-950" />
                    <span>Transmitting Message...</span>
                  </>
                )}

                {formStatus === 'success' && (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-carbon-950" />
                    <span>Message Sent! 🚀</span>
                  </>
                )}

                {formStatus === 'idle' && (
                  <>
                    <Send className="w-4 h-4 text-carbon-950 transition-transform group-hover:translate-x-1" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>

      {/* Footer Section */}
      <footer className="mt-20 pt-8 border-t border-carbon-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
        
        {/* Centered Line Required: 'Designed & Engineered by Tanush PM • Class of 2027' */}
        <div className="w-full text-center">
          <p className="text-slate-300">
            Designed & Engineered by <span className="text-emerald-400 font-semibold">Tanush PM</span> • Class of 2027
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            K.S. Institute of Technology • Bengaluru, India • Cyber-Emerald Edition
          </p>
        </div>

        {/* Back to top smooth button */}
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll back to top"
          className="absolute right-4 sm:right-8 -mt-1 p-2 rounded-lg bg-carbon-800/80 border border-emerald-500/20 text-slate-400 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </footer>
    </section>
  );
};

export default ContactSection;

