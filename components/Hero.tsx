
import React from 'react';
import { PERSONAL_INFO, UI_STRINGS } from '../constants';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-sky-400 text-sm font-semibold tracking-wide uppercase border border-sky-500/20">
          {t.available}
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
          <span className="gradient-text">{t.heroTitle}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {PERSONAL_INFO.bios[lang]}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-white/5"
          >
            {t.viewWork}
            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </button>
          <button 
             onClick={() => document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            {t.talkAI}
            <i className="fa-solid fa-robot"></i>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <i className="fa-solid fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
