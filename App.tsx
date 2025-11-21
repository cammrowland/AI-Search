import React, { useState, useEffect } from 'react';
import { ShieldAlert, Menu, X, ChevronRight, Lock, Server, Zap } from 'lucide-react';
import { StatsChart } from './components/StatsChart';
import { PlatformGrid } from './components/PlatformGrid';
import { VisibilitySimulator } from './components/VisibilitySimulator';
import { StrategyGuide } from './components/StrategyGuide';
import { BrandScenarios } from './components/BrandScenarios';
import { RoadmapTimeline } from './components/RoadmapTimeline';
import { PUBLISHER_BLOCK_LIST } from './constants';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans selection:bg-brand-accent selection:text-brand-dark">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center text-brand-dark font-bold">
              AI
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Access<span className="text-brand-accent">Report</span></span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <button onClick={() => scrollToSection('dashboard')} className="hover:text-white transition-colors">Data</button>
            <button onClick={() => scrollToSection('platforms')} className="hover:text-white transition-colors">Platforms</button>
            <button onClick={() => scrollToSection('scenarios')} className="hover:text-white transition-colors">Impact</button>
            <button onClick={() => scrollToSection('strategy')} className="hover:text-white transition-colors">Strategy</button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-dark pt-24 px-6 md:hidden">
           <div className="flex flex-col gap-6 text-lg font-medium text-slate-300">
            <button onClick={() => scrollToSection('dashboard')}>Data</button>
            <button onClick={() => scrollToSection('platforms')}>Platforms</button>
            <button onClick={() => scrollToSection('scenarios')}>Impact</button>
            <button onClick={() => scrollToSection('strategy')}>Strategy</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wide mb-6 animate-pulse-slow">
            <ShieldAlert size={14} />
            Critical Alert
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-500">Invisible</span> Web
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Over 35% of top websites now block AI crawlers. As search shifts to "Agentic Commerce," invisible brands risk extinction.
          </p>
          
          <div className="flex justify-center gap-4">
            <button onClick={() => scrollToSection('dashboard')} className="bg-brand-accent text-brand-dark font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-colors">
              Explore the Report
            </button>
            <button onClick={() => scrollToSection('strategy')} className="bg-slate-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-700 transition-colors">
              View Strategy
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20 bg-brand-dark border-y border-slate-800/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">The State of Blocking</h2>
            <p className="text-slate-400 max-w-3xl">
              Since 2023, AI crawler restrictions have increased seven-fold. Major infrastructure providers like Cloudflare now offer one-click blocking, creating a fragmented internet.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <StatsChart />
            </div>
            
            <div className="space-y-6">
              <div className="bg-brand-card p-6 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3 text-red-400 mb-2">
                  <Lock size={20} />
                  <h3 className="font-bold text-white">Media Blackout</h3>
                </div>
                <p className="text-sm text-slate-400 mb-4">
                  Nearly 80% of top U.S. news organizations block OpenAI's GPTBot.
                </p>
                <div className="flex flex-wrap gap-2">
                  {PUBLISHER_BLOCK_LIST.slice(0, 6).map(pub => (
                    <span key={pub} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-600">
                      {pub}
                    </span>
                  ))}
                  <span className="text-xs text-slate-500 px-1 self-center">+ many more</span>
                </div>
              </div>

              <div className="bg-brand-card p-6 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3 text-brand-accent mb-2">
                  <Server size={20} />
                  <h3 className="font-bold text-white">The Cloudflare Effect</h3>
                </div>
                <p className="text-sm text-slate-400">
                  With Cloudflare's new "default block" policy, ~20% of the internet became inaccessible to new AI crawlers overnight.
                </p>
                <div className="mt-4 w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-accent h-full w-[20%]"></div>
                </div>
                <p className="text-right text-xs text-brand-accent mt-1">20% Traffic Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section id="platforms" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Platform Status</h2>
              <p className="text-slate-400 max-w-2xl">
                Knowing where your brand is visible to AI is critical. Amazon has gone dark, while Walmart remains open.
              </p>
            </div>
          </div>
          <PlatformGrid />
        </div>
      </section>

       {/* The Shift to Agentic Commerce (New Context) */}
       <section className="py-20 bg-gradient-to-b from-brand-dark to-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block p-3 rounded-full bg-purple-500/10 text-purple-400 mb-6">
             <Zap size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Rise of Agentic Commerce</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            The retail landscape is shifting from "click-driven" to "AI-driven." 
            Consumers now use agents like ChatGPT and Perplexity to research and buy. 
            <span className="text-brand-accent font-semibold"> Zero-click searches have climbed to over 62%</span>. 
            If your brand isn't in the training data, it doesn't exist.
          </p>
        </div>
      </section>

      {/* Simulator & Scenarios */}
      <section id="scenarios" className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Visibility Simulator Block */}
          <div className="mb-24 max-w-5xl mx-auto">
             <div className="text-center mb-10">
               <h2 className="text-3xl font-bold text-white mb-4">The Visibility Gap</h2>
               <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                 See how product availability changes when viewed through the lens of an AI assistant versus a human browser.
               </p>
             </div>
             <VisibilitySimulator />
          </div>

          {/* Scenarios Block */}
          <div className="border-t border-slate-800/50 pt-24">
             <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">Three Scenarios for Brands</h3>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                  As AI intermediaries take over, brands fall into one of three categories. Most are currently at risk.
                </p>
             </div>
             <BrandScenarios />
          </div>

        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Strategic Adaptation Guide</h2>
             <p className="text-slate-400 max-w-3xl text-lg">
               To thrive in the Agentic Commerce era, brands must shift from traditional SEO to GEO (Generative Engine Optimization).
             </p>
          </div>

          <div className="mb-24">
             <StrategyGuide />
          </div>

          <div className="max-w-4xl mx-auto">
             <h3 className="text-2xl font-bold text-white mb-12 text-center">Implementation Roadmap</h3>
             <RoadmapTimeline />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500">
            &copy; 2025 AI Access Report.
          </div>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Download Full Report</a>
            <a href="#" className="hover:text-white transition-colors">Methodology</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;