import { useState } from 'react';
import { Award, Briefcase, GraduationCap, Code2 } from 'lucide-react';

const EXPERIENCE = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Innovate Tech Solutions',
    period: '2023 - Present',
    description: 'Spearheaded migration of monolithic CRM system to high-performance micro-frontends with Next.js. Improved Core Web Vitals score by 34% and reduced load times to under 1.5 seconds.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    role: 'Frontend Developer',
    company: 'CyberPulse Studios',
    period: '2021 - 2023',
    description: 'Built interactive Web3 analytical dashboards and high-frequency trading platforms with real-time WebSockets data feeds. Directed junior developers and conducted code reviews.',
    skills: ['React', 'Web3.js', 'Redux Toolkit', 'REST API'],
  },
  {
    role: 'Junior Web Developer',
    company: 'PixelForge Studio',
    period: '2020 - 2021',
    description: 'Designed responsive static landing pages and integrated e-commerce CMS modules. Managed daily deployment pipelines and automated integration tests.',
    skills: ['JavaScript', 'HTML5', 'Sass', 'Webpack'],
  },
];

const SKILLS = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript / JS', level: 90, category: 'Frontend' },
  { name: 'Tailwind / CSS', level: 92, category: 'Frontend' },
  { name: 'Three.js / Canvas', level: 75, category: 'Frontend' },
  { name: 'Node.js / Express', level: 80, category: 'Backend' },
  { name: 'GraphQL / Apollo', level: 85, category: 'Backend' },
  { name: 'PostgreSQL / Prisma', level: 78, category: 'Backend' },
  { name: 'Git / GitHub Actions', level: 88, category: 'Tools' },
  { name: 'Docker / Kubernetes', level: 70, category: 'Tools' },
];

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'skills' | 'education'>('experience');

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent mb-4 tracking-tight">
          About My Professional Path
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
          A dedicated software engineer crafting clean architectures, accessible user interfaces, and engaging web experiences.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'experience'
                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-500/10'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase size={14} /> Experience
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'skills'
                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-500/10'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 size={14} /> Core Skills
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-500/10'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <GraduationCap size={14} /> Education
          </button>
        </div>
      </div>

      <div className="bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6 sm:p-10 backdrop-blur-md max-w-4xl mx-auto">
        {activeTab === 'experience' && (
          <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-slate-800/60">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="relative pl-8 sm:pl-12 group">
                <div className="absolute left-1 sm:left-2 top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-violet-500 group-hover:scale-125 transition-transform duration-300 z-10" />
                <span className="text-[10px] font-mono text-violet-400 font-bold bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-slate-100 mt-2">{exp.role}</h3>
                <p className="text-xs font-semibold text-slate-400 mt-0.5">{exp.company}</p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] bg-slate-800/60 text-slate-300 font-mono px-2 py-0.5 rounded border border-slate-700/30"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-slate-300 font-semibold">{skill.name}</span>
                  <span className="font-mono text-violet-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-800/60 rounded-full overflow-hidden border border-slate-700/30">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-6">
            <div className="border-l-2 border-violet-500/30 pl-4 py-1">
              <span className="text-[10px] font-mono text-violet-400 font-bold bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full">
                2016 - 2020
              </span>
              <h3 className="text-lg font-bold text-slate-100 mt-2">B.S. in Computer Science</h3>
              <p className="text-xs font-medium text-slate-400">Metropolitan Technical University</p>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Focused on Algorithm Analysis, Database Design, and Object-Oriented Programming. Graduated with honors.
              </p>
            </div>
            <div className="border-l-2 border-violet-500/30 pl-4 py-1">
              <span className="text-[10px] font-mono text-violet-400 font-bold bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full">
                2021
              </span>
              <h3 className="text-lg font-bold text-slate-100 mt-2">AWS Certified Solutions Architect</h3>
              <p className="text-xs font-medium text-slate-400">Amazon Web Services (License A-839)</p>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Acquired expertise in deploying high-availability, fault-tolerant architectures on cloud infrastructure.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* CV Download banner */}
      <div className="mt-12 text-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            alert('Resume download started! (Simulated PDF download)');
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 border border-slate-700/50 hover:border-slate-600 text-slate-100 text-xs font-bold hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-black/20"
        >
          <Award size={16} className="text-violet-400 animate-bounce" />
          Download Interactive CV / Resume (PDF)
        </a>
      </div>
    </div>
  );
};
