
import React from 'react';
import { PERSONAL_INFO, UI_STRINGS } from '../constants';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto glass rounded-[40px] p-8 md:p-16 relative border border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contactTitle}</h2>
            <p className="text-slate-400 text-lg mb-12">{t.contactDesc}</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <i className="fa-solid fa-envelope text-xl"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.emailMe}</p>
                  <p className="text-lg font-bold">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <i className="fa-solid fa-location-dot text-xl"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.basedIn}</p>
                  <p className="text-lg font-bold">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="w-full bg-slate-800/50 border border-white/5 rounded-2xl p-4" />
              <input type="email" placeholder="Email" className="w-full bg-slate-800/50 border border-white/5 rounded-2xl p-4" />
            </div>
            <textarea rows={5} placeholder="Message" className="w-full bg-slate-800/50 border border-white/5 rounded-2xl p-4"></textarea>
            <button type="submit" className="w-full py-4 bg-sky-500 text-white font-bold rounded-2xl">{t.send}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
