import { useState } from 'react';
import { ExternalLink, Code, Filter, Eye, Sparkles } from 'lucide-react';

const GithubIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  github: string;
  demo: string;
  stars: number;
  color: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'NeuroFlow',
    description: 'AI Workflow automation studio using generative visual canvas and custom LLM routing.',
    longDescription: 'NeuroFlow delivers an enterprise-grade node-based interface that allows developers to link diverse AI systems (GPT-4, Claude, Stable Diffusion) into automated multi-agent chains. Includes full tracking of token usage, prompt versioning, and secure API storage.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Python', 'FastAPI'],
    category: 'AI',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    stars: 128,
    color: 'from-fuchsia-600 to-indigo-600',
  },
  {
    id: 2,
    title: 'QuantumDash',
    description: 'Real-time Web3 & DeFi analytics dashboard supporting multi-chain tracking and smart alerts.',
    longDescription: 'A cutting-edge data visualization dashboard designed to aggregate Ethereum, Solana, and Polygon gas prices, liquidity pools, and MEV bot activity into an optimized millisecond-response React UI.',
    tech: ['Next.js', 'Ethers.js', 'GraphQL', 'Chart.js', 'Tailwind'],
    category: 'Blockchain',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    stars: 84,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 3,
    title: 'HoloMall 3D',
    description: 'Interactive immersive 3D E-commerce environment powered by WebGL and Three.js.',
    longDescription: 'Reimagining web shopping by rendering products in interactive high-fidelity 3D models with dynamic texture customization. Tested on mobile and desktop, reaching over 60 FPS across all platforms.',
    tech: ['Three.js', 'React Three Fiber', 'PostCSS', 'GSAP'],
    category: '3D',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    stars: 215,
    color: 'from-amber-500 to-red-500',
  },
  {
    id: 4,
    title: 'Synthetix Audio',
    description: 'Web Audio API modular synthesizer with visual oscilloscopes and preset sharing.',
    longDescription: 'Synthetix allows music producers to construct digital sound synthesizers using oscillator nodes directly in their browser. Fully responsive, supporting MIDI controllers and preset saving through local storage.',
    tech: ['Web Audio API', 'React', 'TypeScript', 'CSS Modules'],
    category: 'Frontend',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    stars: 92,
    color: 'from-emerald-500 to-teal-600',
  },
];

const CATEGORIES = ['All', 'AI', 'Blockchain', '3D', 'Frontend'];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-semibold mb-4">
          <Sparkles size={14} className="animate-pulse" />
          <span>PORTFOLIO SHOWCASE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent mb-4 tracking-tight">
          Featured Engineering Projects
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
          Explore a curated selection of my professional work, featuring advanced web architectures, Web3 integration, and high-performance interactive interfaces.
        </p>

        {/* Categories / Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 border-transparent'
                  : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 border border-slate-700/50 hover:text-slate-200'
              }`}
            >
              {cat === 'All' && <Filter size={12} />}
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 flex flex-col justify-between overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5"
          >
            {/* Glowing Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-5 blur-2xl group-hover:opacity-15 transition-opacity duration-300 pointer-events-none`} />

            <div>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-1 bg-slate-800/80 border border-slate-700/50 px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-300 font-medium">
                  <Code size={12} className="text-violet-400" />
                  {project.category}
                </div>
                <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                  ⭐ {project.stars} stars
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mt-4 group-hover:text-violet-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-slate-800/40 text-slate-300 px-2 py-0.5 rounded text-[10px] border border-slate-700/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-4 border-t border-slate-800/60">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-xs text-violet-400 font-semibold flex items-center gap-1 hover:text-violet-300 transition-colors"
              >
                <Eye size={14} /> Learn More
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 ml-auto"
              >
                <GithubIcon /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
              >
                <ExternalLink size={14} /> Live
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative">
            <div className={`h-2 bg-gradient-to-r ${selectedProject.color}`} />
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-black text-slate-100">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-slate-100 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 flex gap-2">
                <span className="text-xs bg-slate-800 border border-slate-700 text-violet-400 font-mono px-2 py-0.5 rounded">
                  {selectedProject.category}
                </span>
                <span className="text-xs bg-slate-800 border border-slate-700 text-slate-400 font-mono px-2 py-0.5 rounded flex items-center gap-1">
                  ⭐ {selectedProject.stars} GitHub Stars
                </span>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Overview</h4>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Technologies</h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-slate-800/70 text-slate-200 px-2.5 py-1 rounded text-xs border border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-4 justify-end">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-slate-800 text-slate-200 rounded-xl text-xs font-semibold hover:bg-slate-700 transition-colors flex items-center gap-2"
                >
                  <GithubIcon /> View GitHub Source
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl text-xs font-semibold hover:opacity-90 shadow-lg shadow-violet-500/20 transition-all flex items-center gap-2"
                >
                  <ExternalLink size={14} /> Launch Live Application
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
