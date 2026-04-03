import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Sparkles, Terminal as TerminalIcon } from 'lucide-react';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [text, setText] = useState('');
  const fullText = 'Senior Full Stack Engineer.';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-4 max-w-7xl mx-auto">
      {/* Dynamic light badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-[10px] sm:text-xs font-semibold mb-6 animate-fade-in">
        <Sparkles size={12} className="text-violet-400" />
        <span>AVAILABLE FOR EXCITING NEW PROJECTS</span>
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-100 tracking-tight leading-tight max-w-4xl">
        Building high-performance <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">architectures</span> for the web.
      </h1>

      <p className="mt-6 text-base sm:text-xl text-slate-400 font-mono max-w-xl flex items-center justify-center gap-2">
        <ChevronRight size={20} className="text-violet-500" />
        <span className="border-r-2 border-violet-400 pr-1 animate-pulse">{text}</span>
      </p>

      <p className="mt-4 text-xs sm:text-sm text-slate-500 max-w-md">
        Crafting accessible, scalable, and delightful user experiences with modern tools and clean engineering.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full justify-center">
        <a
          href="#projects"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-violet-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 hover:translate-y-[-1px]"
        >
          Explore Finished Work
          <ArrowRight size={16} />
        </a>

        <button
          onClick={onOpenTerminal}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs sm:text-sm font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
        >
          <TerminalIcon size={16} className="text-emerald-400" />
          Open Bash Terminal
        </button>
      </div>

      {/* Floating features */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl w-full mt-20 border-t border-slate-900/40 pt-10">
        <div className="text-left p-4 rounded-2xl bg-slate-900/20 border border-slate-800/40 backdrop-blur-sm">
          <p className="text-xl sm:text-2xl font-black text-slate-100">5+ Years</p>
          <p className="text-[10px] sm:text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">Active Experience</p>
        </div>
        <div className="text-left p-4 rounded-2xl bg-slate-900/20 border border-slate-800/40 backdrop-blur-sm">
          <p className="text-xl sm:text-2xl font-black text-slate-100">40+ Apps</p>
          <p className="text-[10px] sm:text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">Successfully Launched</p>
        </div>
        <div className="text-left p-4 rounded-2xl bg-slate-900/20 border border-slate-800/40 backdrop-blur-sm col-span-2 md:col-span-1">
          <p className="text-xl sm:text-2xl font-black text-slate-100">100%</p>
          <p className="text-[10px] sm:text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">Production Uptime</p>
        </div>
      </div>
    </div>
  );
};
