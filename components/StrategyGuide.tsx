import React, { useState } from 'react';
import { Activity, Zap, Share2, Database, ArrowRight, Check } from 'lucide-react';
import { STRATEGY_PILLARS } from '../constants';

const icons: Record<string, any> = {
  Activity, Zap, Share2, Database
};

export const StrategyGuide: React.FC = () => {
  const [activeId, setActiveId] = useState(STRATEGY_PILLARS[0].id);

  const activePillar = STRATEGY_PILLARS.find(p => p.id === activeId) || STRATEGY_PILLARS[0];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Navigation Tabs */}
      <div className="lg:w-1/3 space-y-2">
        {STRATEGY_PILLARS.map(pillar => {
          const Icon = icons[pillar.iconName];
          const isActive = activeId === pillar.id;
          
          return (
            <button
              key={pillar.id}
              onClick={() => setActiveId(pillar.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                isActive 
                  ? 'bg-brand-accent text-brand-dark border-brand-accent shadow-[0_0_20px_rgba(56,189,248,0.3)]' 
                  : 'bg-brand-card border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon size={24} className={isActive ? 'text-brand-dark' : 'text-brand-accent'} />
              <span className="font-bold text-lg">{pillar.title}</span>
              {isActive && <ArrowRight size={20} className="ml-auto animate-pulse" />}
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="lg:w-2/3 bg-brand-card border border-slate-700 rounded-2xl p-8 shadow-xl animate-in fade-in slide-in-from-right-4 duration-300 key={activeId}">
        <div className="flex items-center gap-3 mb-6">
           <div className="p-3 rounded-lg bg-slate-800 text-brand-accent">
              {React.createElement(icons[activePillar.iconName], { size: 32 })}
           </div>
           <h3 className="text-3xl font-bold text-white">{activePillar.title}</h3>
        </div>

        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          {activePillar.summary}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-bold text-brand-accent uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
              Key Actions
            </h4>
            <ul className="space-y-4">
              {activePillar.actions.map((action, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <Check size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
              Recommended Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {activePillar.tools.map((tool, i) => (
                <span key={i} className="px-3 py-1.5 bg-slate-800 text-slate-200 rounded-md text-sm border border-slate-600">
                  {tool}
                </span>
              ))}
            </div>
            
            <div className="mt-6 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                <p className="text-xs text-slate-500 italic">
                  "Invest in tools that track AI sentiment, not just SEO rankings. The metrics of success have changed."
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};