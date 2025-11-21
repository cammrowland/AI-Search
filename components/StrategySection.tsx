import React from 'react';
import { ShieldCheck, Globe, FileText, Database } from 'lucide-react';

export const StrategySection: React.FC = () => {
  const strategies = [
    {
      icon: Globe,
      title: "Diversify Presence",
      content: "Don't rely solely on Amazon. Maintain strong listings on Walmart, eBay, and your own accessible D2C site."
    },
    {
      icon: ShieldCheck,
      title: "Audit Robots.txt",
      content: "Check if your own site is inadvertently blocking AI. Ensure your product pages are crawlable by benign bots."
    },
    {
      icon: FileText,
      title: "Content Strategy",
      content: "Create accessible blog posts, FAQs, and comparison guides on your own domain that AI can index."
    },
    {
      icon: Database,
      title: "Structured Data",
      content: "Implement robust Schema.org markup. Make it easy for the few allowable bots to understand your product data."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {strategies.map((strat, idx) => (
        <div key={idx} className="bg-brand-card p-6 rounded-xl border border-slate-700 flex items-start gap-4 hover:bg-slate-800 transition-colors">
          <div className="bg-brand-accent/20 p-3 rounded-lg text-brand-accent">
            <strat.icon size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-2">{strat.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{strat.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};