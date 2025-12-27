
import React, { useState, useRef, useEffect } from 'react';
import { getAssistantResponse } from '../services/geminiService';
import { Message, Language } from '../types';
import { UI_STRINGS } from '../constants';

interface AIAssistantProps {
  lang: Language;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: t.aiGreeting }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh greeting if language changes and conversation hasn't started
    if (messages.length === 1 && messages[0].role === 'model') {
      setMessages([{ role: 'model', text: t.aiGreeting }]);
    }
  }, [lang]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const aiResponse = await getAssistantResponse(userText, lang, history);
    
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.aiTitle}</h2>
          <p className="text-slate-400">{t.aiDesc}</p>
        </div>

        <div className="glass rounded-3xl overflow-hidden shadow-2xl border border-white/5 flex flex-col h-[600px]">
          <div className="p-4 border-b border-white/10 bg-slate-800/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-600 flex items-center justify-center text-white">
                <i className="fa-solid fa-robot"></i>
              </div>
              <div>
                <p className="font-bold text-sm">SterlingBot v2.0</p>
              </div>
            </div>
            <button onClick={() => setMessages([{ role: 'model', text: t.aiGreeting }])} className="text-slate-400 hover:text-white">
              <i className="fa-solid fa-rotate-right"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-sky-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-200 rounded-tl-none'}`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-4 rounded-2xl animate-pulse">...</div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-slate-800/50">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                className="w-full bg-slate-900 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm focus:outline-none"
              />
              <button type="submit" disabled={isLoading || !input.trim()} className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-sky-500 text-white rounded-xl">
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
