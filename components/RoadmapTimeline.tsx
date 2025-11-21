import React from 'react';
import { ROADMAP_PHASES } from '../constants';

export const RoadmapTimeline: React.FC = () => {
  return (
    <div className="relative">
      {/* Connecting Line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700 md:left-1/2 md:-ml-px"></div>

      <div className="space-y-12">
        {ROADMAP_PHASES.map((phase, idx) => (
          <div key={idx} className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Spacer for alternating layout */}
            <div className="hidden md:block w-5/12"></div>

            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-brand-accent border-4 border-brand-dark shadow-[0_0_0_4px_rgba(56,189,248,0.2)] -ml-2 z-10 transform -translate-x-[1px] md:translate-x-0"></div>

            {/* Content Card */}
            <div className="ml-12 md:ml-0 w-full md:w-5/12 bg-brand-card border border-slate-700 p-6 rounded-xl hover:border-brand-accent/50 transition-colors group">
              <div className="flex justify-between items-start mb-2">
                <span className="text-brand-accent font-bold text-sm tracking-wider">{phase.phase}</span>
                <span className="text-slate-500 text-xs font-mono bg-slate-800 px-2 py-1 rounded">{phase.duration}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{phase.title}</h4>
              <ul className="space-y-2">
                {phase.goals.map((goal, i) => (
                  <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                     <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-1.5 group-hover:bg-brand-accent transition-colors"></span>
                     {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};