
import React from 'react';
import { PROJECTS, UI_STRINGS } from '../constants';
import { Language } from '../types';

interface ProjectsProps {
  lang: Language;
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.featuredWork}</h2>
            <p className="text-slate-400 max-w-xl text-lg">{t.featuredDesc}</p>
          </div>
          <a href="#" className="text-sky-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            {t.seeAll} <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative glass rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title[lang]} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-semibold bg-sky-500/10 text-sky-400 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-sky-400 transition-colors">{project.title[lang]}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  {project.description[lang]}
                </p>
                <div className="flex gap-4">
                  <a href={project.link} className="flex-1 text-center py-2 bg-slate-800 hover:bg-slate-700 rounded-xl font-medium transition-colors text-sm">
                    Live Demo
                  </a>
                  <a href={project.github} className="w-11 h-11 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">
                    <i className="fa-brands fa-github text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
