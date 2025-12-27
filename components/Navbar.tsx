
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface NavbarProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, onLangChange }) => {
  const t = UI_STRINGS[currentLang];
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass px-6 py-3 rounded-2xl shadow-xl">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center font-bold text-white group-hover:rotate-12 transition-transform">
            AS
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">Sterling<span className="text-sky-400">.dev</span></span>
        </div>
        
        <div className="flex items-center gap-4 md:gap-8">
          <ul className="hidden lg:flex gap-8 font-medium text-slate-300">
            <li><button onClick={() => scrollTo('about')} className="hover:text-sky-400 transition-colors">{t.about}</button></li>
            <li><button onClick={() => scrollTo('projects')} className="hover:text-sky-400 transition-colors">{t.projects}</button></li>
            <li><button onClick={() => scrollTo('experience')} className="hover:text-sky-400 transition-colors">{t.experience}</button></li>
          </ul>

          <div className="flex items-center gap-2 glass rounded-xl p-1">
            {(['en', 'ru', 'ky'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onLangChange(lang)}
                className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all ${
                  currentLang === lang ? 'bg-sky-500 text-white shadow-md' : 'hover:bg-white/5 text-slate-400'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollTo('contact')}
            className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-xl font-semibold transition-all shadow-lg shadow-sky-500/20 active:scale-95 text-sm md:text-base"
          >
            {t.hireMe}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
