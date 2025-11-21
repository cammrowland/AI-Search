import React from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { SCENARIOS } from '../constants.ts';

export const BrandScenarios: React.FC = () => {
  const icons = {
    danger: AlertOctagon,
    warning: AlertTriangle,
    success: CheckCircle2
  };

  const colors = {
    danger: 'border-red-500/50 bg-red-500/5 text-red-400',
    warning: 'border-amber-500/50 bg-amber-500/5 text-amber-400',
    success: 'border-emerald-500/50 bg-emerald-500/5 text-emerald-400'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {SCENARIOS.map((scenario, idx) => {
        const Icon = icons[scenario.status];
        const style = colors[scenario.status];
        
        return (
          <div key={idx} className={`rounded-xl border-2 p-6 flex flex-col h-full ${style} transition-transform hover:-translate-y-1`}>
            <div className="flex items-center gap-3 mb-4">
              <Icon size={28} />
              <h3 className="text-xl font-bold text-white">{scenario.title}</h3>
            </div>
            
            <p className="text-slate-300 text-sm mb-6 min-h-[40px]">{scenario.description}</p>
            
            <div className="space-y-3 mb-6 flex-grow">
              <h4 className="text-xs font-bold uppercase tracking-wider opacity-70">Characteristics:</h4>
              <ul className="space-y-2">
                {scenario.characteristics.map((char, i) => (
                  <li key={i} className="text-sm flex items-start gap-2 text-slate-300">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-current opacity-60" />
                    {char}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-current border-opacity-20">
              <p className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">Outcome:</p>
              <p className="text-sm font-medium">{scenario.outcome}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};