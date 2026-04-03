import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, ChevronRight, X } from 'lucide-react';

interface TerminalProps {
  onClose?: () => void;
}

export const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output'; text: string }>>([
    { type: 'output', text: 'Developer Shell v2.4.0 (Type "help" for a list of commands)' },
    { type: 'output', text: '-------------------------------------------------------------' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputValue.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input' as const, text: cmd }];

    switch (cmd) {
      case 'help':
        newHistory.push({ type: 'output', text: 'Commands available: \n • help: Display commands\n • clear: Clear terminal\n • about: Display developer info\n • skills: List programming skills\n • secret: ???\n • exit: Close terminal' });
        break;
      case 'about':
        newHistory.push({ type: 'output', text: 'Name: Tech Lead / Senior Frontend Engineer. Specializes in building highly scalable, elegant web experiences using React, TypeScript & Next.js.' });
        break;
      case 'skills':
        newHistory.push({ type: 'output', text: 'Frontend: React, Vue, Next.js, TypeScript, TailwindCSS, Three.js\nBackend: Node.js, GraphQL, PostgreSQL\nTools: Docker, Git, CI/CD, Figma' });
        break;
      case 'secret':
        newHistory.push({ type: 'output', text: '🎉 EASTER EGG! You unlocked a discount coupon for your next project: "DEV_ROCKS_2026"' });
        break;
      case 'clear':
        setHistory([]);
        setInputValue('');
        return;
      case 'exit':
        if (onClose) {
          onClose();
          return;
        }
        newHistory.push({ type: 'output', text: 'Terminal cannot be closed in this view.' });
        break;
      default:
        newHistory.push({ type: 'output', text: `Command not found: "${cmd}". Type "help" for assistance.` });
    }

    setHistory(newHistory);
    setInputValue('');
  };

  return (
    <div className="bg-slate-950 text-emerald-400 font-mono text-sm rounded-xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-80 w-full max-w-2xl mx-auto backdrop-blur-md bg-opacity-90">
      <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <TerminalIcon size={16} className="text-emerald-400 animate-pulse" />
          <span className="text-slate-300 text-xs font-semibold select-none">dev-terminal ~ bash</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          {onClose && (
            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2 select-text selection:bg-emerald-800 selection:text-white">
        {history.map((item, i) => (
          <div key={i} className="whitespace-pre-line leading-relaxed">
            {item.type === 'input' ? (
              <span className="flex items-center text-slate-300">
                <ChevronRight size={14} className="text-emerald-500 mr-1 inline" />
                {item.text}
              </span>
            ) : (
              <div className="text-emerald-400/90">{item.text}</div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleCommand} className="p-2 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
        <ChevronRight size={16} className="text-emerald-400" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Try typing 'help'..."
          className="flex-1 bg-transparent border-none outline-none text-emerald-300 placeholder-emerald-800 font-mono text-sm focus:ring-0"
          autoFocus
        />
        <button type="submit" className="p-1 text-emerald-400/70 hover:text-emerald-400 transition-colors">
          <Play size={14} />
        </button>
      </form>
    </div>
  );
};
