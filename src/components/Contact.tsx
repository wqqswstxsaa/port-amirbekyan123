import { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Phone, MapPin, Music, ExternalLink, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaResult] = useState(7); // simple 3 + 4
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (parseInt(captchaAnswer) !== captchaResult) {
      setStatus('error');
      setIsSubmitting(false);
      return;
    }

    // Simulate network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setCaptchaAnswer('');
    }, 1500);
  };

  const MEDIA_LINKS = [
    { name: 'Telegram', url: 'https://t.me/example', icon: '✈️', color: 'hover:border-cyan-500/50 hover:bg-cyan-500/5' },
    { name: 'VKontakte', url: 'https://vk.com/example', icon: '🔗', color: 'hover:border-blue-500/50 hover:bg-blue-500/5' },
    { name: 'Yandex Music', url: 'https://music.yandex.ru', icon: '🎵', color: 'hover:border-amber-500/50 hover:bg-amber-500/5' },
    { name: 'Kinopoisk', url: 'https://kinopoisk.ru', icon: '🎬', color: 'hover:border-orange-500/50 hover:bg-orange-500/5' },
    { name: 'MAX', url: 'https://max.com', icon: '🍿', color: 'hover:border-blue-400/50 hover:bg-blue-400/5' },
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent mb-4 tracking-tight">
          Let's Build Something Great
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
          Have an exciting project in mind or looking to hire? Use the secure contact form below or reach out directly via media links.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Contacts Info & Links */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-md">
            <h3 className="text-base font-bold text-slate-100 mb-4 flex items-center gap-2">
              <Phone size={16} className="text-violet-400" /> Direct Info
            </h3>
            <div className="space-y-3 text-slate-400 text-xs sm:text-sm">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-violet-400" /> dev.lead@example.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-violet-400" /> remote / global
              </p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-md">
            <h3 className="text-base font-bold text-slate-100 mb-4 flex items-center gap-2">
              <Music size={16} className="text-violet-400" /> Digital Profile Links
            </h3>
            <p className="text-slate-400 text-xs mb-4 leading-relaxed">
              Explore my favorite playlists, movie bookmarks, or social media accounts.
            </p>

            <div className="space-y-2">
              {MEDIA_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl border border-slate-800/60 bg-slate-900/20 text-slate-300 text-xs font-semibold transition-all ${link.color}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base">{link.icon}</span>
                    {link.name}
                  </span>
                  <ExternalLink size={14} className="text-slate-500" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full bg-slate-800/40 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-violet-500/50 placeholder-slate-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@example.com"
                className="w-full bg-slate-800/40 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-violet-500/50 placeholder-slate-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Message Body
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi! We'd love to invite you for an interview..."
                className="w-full bg-slate-800/40 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-violet-500/50 placeholder-slate-600 transition-colors resize-none"
              />
            </div>

            {/* Antispam captcha */}
            <div className="border border-slate-800/60 bg-slate-900/20 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold">
                <ShieldCheck size={16} className="text-emerald-500" />
                Anti-Spam: Solve simple math: <span className="text-violet-400">3 + 4 =</span>
              </div>
              <input
                type="number"
                required
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                placeholder="?"
                className="w-20 bg-slate-800/40 border border-slate-700/50 rounded-lg px-3 py-1.5 text-center text-sm font-bold text-slate-200 focus:outline-none focus:border-violet-500/50"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-violet-500/20 hover:opacity-95 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? 'Transmitting Data...' : 'Transmit Message'}
              <Send size={14} className="animate-pulse" />
            </button>

            {status === 'success' && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl flex items-center gap-2 text-xs font-bold">
                <CheckCircle2 size={16} />
                Your transmission has been securely delivered. We will connect shortly.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-xl flex items-center gap-2 text-xs font-bold">
                <AlertCircle size={16} />
                Captcha challenge failed. Please calculate again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
