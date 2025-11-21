import React, { useState } from 'react';
import { Eye, EyeOff, Search } from 'lucide-react';

export const VisibilitySimulator: React.FC = () => {
  const [mode, setMode] = useState<'human' | 'ai'>('human');

  return (
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Search size={120} />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end mb-8 relative z-10">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">The Visibility Gap Simulator</h3>
          <p className="text-slate-400">Toggle between a Human User and an AI Assistant to see how product availability changes.</p>
        </div>
        <div className="bg-slate-800 p-1 rounded-lg flex gap-1 mt-4 md:mt-0">
          <button
            onClick={() => setMode('human')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              mode === 'human' ? 'bg-white text-slate-900 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye size={16} />
            Human User
          </button>
          <button
            onClick={() => setMode('ai')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              mode === 'ai' ? 'bg-brand-accent text-brand-dark shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <EyeOff size={16} />
            AI Assistant
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Amazon Card */}
        <div className={`transition-all duration-500 rounded-xl p-4 border ${mode === 'ai' ? 'bg-slate-800/50 border-slate-700 opacity-40 blur-[1px]' : 'bg-white border-white'}`}>
          <div className="h-4 w-24 bg-slate-300 rounded mb-4"></div> {/* Logo placeholder */}
          <div className="h-32 bg-slate-200 rounded-lg mb-4 flex items-center justify-center text-slate-400 text-sm">
             {mode === 'ai' ? 'Restricted Data' : 'Product Image'}
          </div>
          <div className="space-y-2">
            <div className="h-4 w-3/4 bg-slate-300 rounded"></div>
            <div className="h-4 w-1/2 bg-slate-300 rounded"></div>
          </div>
          {mode === 'ai' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <EyeOff size={12} /> INVISIBLE
              </div>
            </div>
          )}
        </div>

        {/* Walmart Card */}
        <div className="bg-white rounded-xl p-4 border border-white transition-all duration-500">
          <div className="h-4 w-24 bg-blue-400 rounded mb-4"></div>
           <div className="h-32 bg-slate-200 rounded-lg mb-4 flex items-center justify-center text-slate-400 text-sm">
             Product Image
          </div>
          <div className="space-y-2">
            <div className="h-4 w-3/4 bg-slate-300 rounded"></div>
            <div className="h-4 w-1/2 bg-slate-300 rounded"></div>
          </div>
           <div className="absolute top-4 right-4">
              <div className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
                <Eye size={12} /> VISIBLE
              </div>
            </div>
        </div>

         {/* Reddit Card */}
         <div className={`transition-all duration-500 rounded-xl p-4 border ${mode === 'ai' ? 'bg-amber-900/20 border-amber-500/30' : 'bg-white border-white'}`}>
          <div className="h-4 w-24 bg-orange-400 rounded mb-4"></div>
           <div className="space-y-3">
             <div className="flex gap-2">
               <div className="w-8 h-8 rounded-full bg-slate-200"></div>
               <div className="flex-1 space-y-1">
                 <div className="h-3 w-full bg-slate-200 rounded"></div>
                 <div className="h-3 w-2/3 bg-slate-200 rounded"></div>
               </div>
             </div>
             <div className="flex gap-2">
               <div className="w-8 h-8 rounded-full bg-slate-200"></div>
               <div className="flex-1 space-y-1">
                 <div className="h-3 w-full bg-slate-200 rounded"></div>
                 <div className="h-3 w-2/3 bg-slate-200 rounded"></div>
               </div>
             </div>
           </div>
           {mode === 'ai' && (
            <div className="mt-4 flex justify-center">
               <div className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                PAID API ONLY
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-sm text-slate-300">
        <p>
          <span className="font-bold text-brand-accent">Impact Analysis:</span> 
          {mode === 'ai' 
            ? " The AI Assistant misses Amazon's entire inventory and loses context from user discussions on Reddit. It defaults to Walmart for pricing and outdated data for reviews."
            : " Human users browse freely across all platforms, comparing prices and reading community reviews without restriction."}
        </p>
      </div>
    </div>
  );
};