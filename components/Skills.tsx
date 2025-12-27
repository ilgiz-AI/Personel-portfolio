
import React from 'react';
import { SKILLS, UI_STRINGS } from '../constants';
import { Language } from '../types';

interface SkillsProps {
  lang: Language;
}

const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.skillsTitle}</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">{t.skillsDesc}</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 glass rounded-2xl border-l-4 border-sky-400">
              <h4 className="text-3xl font-black mb-1">10+</h4>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wide">{t.yearsExp}</p>
            </div>
            <div className="p-6 glass rounded-2xl border-l-4 border-indigo-400">
              <h4 className="text-3xl font-black mb-1">50+</h4>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wide">{t.projectsDelivered}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-bold text-slate-200">{skill.name}</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.category === 'frontend' ? 'from-sky-400 to-sky-600' : 'from-indigo-400 to-indigo-600'} transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
