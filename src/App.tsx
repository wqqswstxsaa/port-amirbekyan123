import { useState } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Terminal } from './components/Terminal';
import { Shield, Sparkles, User, Code2, Phone, Terminal as TermIcon } from 'lucide-react';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden">
      {/* Background canvas effects */}
      <ParticleCanvas />

      {/* Floating Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header / Sticky Floating Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/70 border-b border-slate-900/60 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center font-black text-xs shadow-md shadow-violet-500/10">
              D
            </span>
            <span className="font-mono text-xs font-bold tracking-widest text-slate-300">DEV.PROFILE</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-400">
            {[
              { id: 'hero', name: 'Intro', icon: Sparkles },
              { id: 'about', name: 'Profile', icon: User },
              { id: 'projects', name: 'Portfolio', icon: Code2 },
              { id: 'contacts', name: 'Contact', icon: Phone },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeSection === item.id ? 'text-violet-400 font-bold' : 'hover:text-slate-200'
                }`}
              >
                <item.icon size={13} />
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsTerminalOpen(!isTerminalOpen)}
              className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-[11px] font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <TermIcon size={14} className="animate-pulse" />
              Terminal
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Terminal Modal overlay if open */}
        {isTerminalOpen && (
          <div className="fixed inset-x-0 bottom-4 z-50 px-4 max-w-4xl mx-auto">
            <Terminal onClose={() => setIsTerminalOpen(false)} />
          </div>
        )}

        {/* Section wrappers */}
        <section id="hero" className="border-b border-slate-900/40">
          <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        </section>

        <section id="about" className="border-b border-slate-900/40 bg-slate-900/10">
          <About />
        </section>

        <section id="projects" className="border-b border-slate-900/40">
          <Projects />
        </section>

        <section id="contacts" className="bg-slate-900/20">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900/80 py-8 px-4 bg-slate-950/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-violet-500" />
            <span>Fully SEO Optimized & Accessible (WCAG 2.1)</span>
          </div>

          <p className="text-center sm:text-right">
            &copy; 2026 Developer Portfolio • Deployed via GitHub Pages
          </p>
        </div>
      </footer>
    </div>
  );
}
