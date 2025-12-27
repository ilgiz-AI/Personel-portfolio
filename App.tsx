
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar currentLang={lang} onLangChange={setLang} />
      
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <AIAssistant lang={lang} />
        <Contact lang={lang} />
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <span>© {new Date().getFullYear()} Alex Sterling.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sky-400">GitHub</a>
            <a href="#" className="hover:text-sky-400">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
