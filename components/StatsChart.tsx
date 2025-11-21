import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { BLOCK_RATES } from '../constants';

export const StatsChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-brand-card rounded-xl p-6 border border-slate-700 shadow-lg">
      <h3 className="text-xl font-bold text-white mb-2">Crawler Block Rates (Top 1k Sites)</h3>
      <p className="text-slate-400 text-sm mb-6">Percentage of top websites explicitly blocking specific AI bots.</p>
      
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={BLOCK_RATES} layout="vertical" margin={{ left: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
          <XAxis type="number" domain={[0, 40]} stroke="#94a3b8" tickFormatter={(val) => `${val}%`} />
          <YAxis 
            dataKey="name" 
            type="category" 
            width={120} 
            stroke="#e2e8f0"
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f8fafc' }}
            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={30}>
            {BLOCK_RATES.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};