import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Store, ShoppingBag, Newspaper, MessageSquare, Video, Tag, Cloud, Globe,
  Target, Gem, Facebook, Twitter, Linkedin, Youtube, Instagram, Tv, FileText, BarChart3, Cpu, 
  TrendingUp, Film, Music, ChevronDown
} from 'lucide-react';
import { PLATFORMS } from '../constants';
import { StatusBadge } from './StatusBadge';

const iconMap: Record<string, any> = {
  ShoppingCart, Store, ShoppingBag, Newspaper, MessageSquare, Video, Tag, Cloud, Globe,
  Target, Gem, Facebook, Twitter, Linkedin, Youtube, Instagram, Tv, FileText, BarChart3, Cpu, 
  TrendingUp, Film, Music
};

export const PlatformGrid: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(8);

  const categories = ['All', 'Retail', 'Social', 'Media', 'Finance', 'Services', 'Tech'];

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(8);
  }, [filter]);

  const filteredPlatforms = filter === 'All' 
    ? PLATFORMS 
    : PLATFORMS.filter(p => p.category === filter);

  const displayedPlatforms = filteredPlatforms.slice(0, visibleCount);
  const hasMore = filteredPlatforms.length > visibleCount;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? 'bg-brand-accent text-brand-dark' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedPlatforms.map((platform) => {
          const Icon = iconMap[platform.iconName] || Globe;
          return (
            <div key={platform.id} className="bg-brand-card border border-slate-700 rounded-xl p-5 hover:border-slate-500 transition-colors group flex flex-col h-full animate-fade-in">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-800 rounded-lg text-white group-hover:bg-slate-700 transition-colors">
                  <Icon size={24} />
                </div>
                <StatusBadge status={platform.status} />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-white mb-1">{platform.name}</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">{platform.category}</p>
                <p className="text-slate-300 text-sm mb-4 min-h-[40px]">{platform.description}</p>
              </div>
              
              <div className="border-t border-slate-700 pt-3 mt-auto">
                <ul className="space-y-1">
                  {platform.details?.map((detail, idx) => (
                    <li key={idx} className="text-xs text-slate-400 flex items-start gap-1">
                      <span className="text-slate-600 mt-0.5">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={handleShowMore}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl"
          >
            Show More <ChevronDown size={18} />
          </button>
        </div>
      )}
    </div>
  );
};