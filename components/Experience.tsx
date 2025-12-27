
import React from 'react';
import { EXPERIENCES, UI_STRINGS } from '../constants';
import { Language } from '../types';

interface ExperienceProps {
  lang: Language;
}

const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">{t.careerJourney}</h2>
        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:left-1/2 md:-translate-x-px"></div>
              <div className={`md:flex items-center gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`inline-block px-4 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase mb-4 tracking-widest`}>
                    {exp.period}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                  <p className="text-lg text-slate-400 mb-6 font-medium italic">{exp.position[lang]}</p>
                </div>
                <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1.5 top-2 w-3 h-3 rounded-full bg-sky-500 border-4 border-slate-900 z-10"></div>
                <div className="md:w-1/2">
                  <div className="glass p-6 rounded-3xl border border-white/5">
                    <ul className="space-y-3">
                      {exp.description[lang].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
