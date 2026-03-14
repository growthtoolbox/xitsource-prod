"use client";

import { useState } from 'react';
import Link from "next/link";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const businesses = [
  { id: 1, name: "NeuroNet Solutions", desc: "Brain-computer interfaces & neural enhancements for enterprise efficiency.", color: "cyan" },
  { id: 2, name: "Neon Drift Logistics", desc: "Sub-orbital hover-courier services across mega-cities.", color: "white" },
  { id: 3, name: "CyberDyne", desc: "Next-gen cybernetic limbs & corporate bio-mods.", color: "gray" },
  { id: 4, name: "HoloWeave Media", desc: "Immersive VR construction & holoscapes.", color: "white" },
  { id: 5, name: "Aegis ICE", desc: "Corporate netrunning & proactive enterprise defense.", color: "cyan" },
  { id: 6, name: "SynthoFoods Inc.", desc: "Lab-grown nutrient synthesis & vertical farming.", color: "gray" },
  { id: 7, name: "Quantum Grid", desc: "Zero-point energy harvesting & distribution.", color: "white" },
  { id: 8, name: "Chroma Genetics", desc: "Designer bio-traits & rapid DNA sequencing.", color: "gray" },
  { id: 9, name: "Voidwalker Aero", desc: "Low-orbit logistics & asteroid mining frameworks.", color: "cyan" },
];

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle'|'submitting'|'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className={`min-h-screen bg-[#050505] text-gray-200 overflow-hidden relative ${inter.className}`}>
      
      {/* Background Gradients - Subtle Dark Executive */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#1a1a1a] bg-[#161616]/50 backdrop-blur-md mb-8 text-xs font-semibold tracking-widest text-slate-400 uppercase">
             <span className="w-1.5 h-1.5 bg-#52D017 rounded-full animate-pulse"></span>
             Global Network Hub
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-200 mb-6">
            The Nexus of <br className="hidden md:block" />
            <span className="text-slate-400">Next-Generation</span> Enterprise.
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
            XitSource is a high-authority global network hub and megacorporation incubator specializing in cybernetics, zero-point energy, and neural architectures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <a href="#briefing" className="px-8 py-4 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-colors shadow-lg shadow-white/5">
                Request Briefing
             </a>
             <a href="#subsidiaries" className="px-8 py-4 bg-transparent border border-gray-700 text-slate-200 font-semibold rounded-sm hover:border-gray-500 transition-colors">
                Explore Subsidiaries
             </a>
          </div>
        </section>

        {/* Sector Grid (Subsidiaries) */}
        <section id="subsidiaries" className="container mx-auto px-6 py-24 border-t border-[#1a1a1a]/50">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-200 mb-4">Sector Directory</h2>
            <p className="text-slate-400 max-w-2xl">Access detailed intelligence on our 9 primary operating subsidiaries across global markets.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-[#1a1a1a]/40 p-[1px]">
            {businesses.map((biz) => (
              <div key={biz.id} className="bg-[#050505] p-8 group hover:bg-[#161616] transition-colors relative overflow-hidden h-full flex flex-col">
                <div className={`absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ${biz.color === 'cyan' ? 'bg-#52D017' : biz.color === 'white' ? 'bg-white' : 'bg-gray-500'}`}></div>
                <div className="text-sm font-mono text-gray-500 mb-4 tracking-widest">0{biz.id} {"// SEC"}</div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3 group-hover:text-#52D017 transition-colors">{biz.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{biz.desc}</p>
                <div className="flex items-center text-xs font-semibold text-gray-500 group-hover:text-slate-200 transition-colors uppercase tracking-widest mt-auto">
                  Access Node <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GrowthToolBox Marketing Section */}
        <section id="marketing" className="container mx-auto px-6 py-24 border-t border-[#1a1a1a]/50">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-#52D017/30 bg-#52D017/10 mb-6 text-xs font-semibold tracking-widest text-#52D017 uppercase">
              GrowthToolBox.app
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-200 mb-6">Digital Ecosystem Expansion</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              At GrowthToolBox.app, we don&apos;t just market; we build. We provide high-performance, SEO-optimized website builds integrated directly with your social media marketing campaigns for a seamless, high-conversion workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 rounded-sm hover:border-#52D017/50 transition-colors">
              <div className="w-12 h-12 bg-#52D017/10 rounded-full flex items-center justify-center mb-6">
                 <svg className="w-6 h-6 text-#52D017" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-3">Social Media Scaling</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Lead generation and high-visibility digital campaigns designed for rapid audience acquisition.</p>
            </div>
            
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 rounded-sm hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-3">Strategic Consulting</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Deep operational optimization and strategic business alignment for established enterprises.</p>
            </div>
            
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 rounded-sm hover:border-pink-500/50 transition-colors">
              <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-3">Optimized Web Builds</h3>
              <p className="text-slate-400 text-sm leading-relaxed">High-conversion infrastructure featuring the &apos;Next.js 15&apos; advantage for unparalleled speed and SEO performance.</p>
            </div>
          </div>
        </section>

        {/* Lead Form Section with AI Consent */}
        <section id="briefing" className="container mx-auto px-6 py-24 border-t border-[#1a1a1a]/50">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-200 mb-4">Request a Corporate Briefing</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Connect with our executive liaisons to discuss how XitSource architecture can integrate into your existing supply chains and cybersecurity frameworks.
              </p>
              
              <div className="mt-12 bg-[#0a0a0a] border border-[#1a1a1a] p-6 rounded-sm">
                 <div className="text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-#52D017 animate-pulse"></span>
                    AI Chatbot Active
                 </div>
                 <p className="text-xs text-gray-500 leading-relaxed italic border-l border-gray-700 pl-3">
                   &quot;I am an AI Assistant for XitSource. Our automated systems qualify leads and organize corporate briefings 24/7.&quot; 
                   <br/><br/>
                   (Notice pursuant to California SB 1001)
                 </p>
              </div>
            </div>

            <div className="flex-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">First Name</label>
                    <input type="text" required className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm px-4 py-3 text-slate-200 focus:outline-none focus:border-#52D017 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Last Name</label>
                    <input type="text" required className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm px-4 py-3 text-slate-200 focus:outline-none focus:border-#52D017 transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Corporate Email</label>
                  <input type="email" required className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm px-4 py-3 text-slate-200 focus:outline-none focus:border-#52D017 transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Inquiry Details</label>
                  <textarea required rows={4} className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm px-4 py-3 text-slate-200 focus:outline-none focus:border-#52D017 transition-colors resize-none"></textarea>
                </div>

                <div className="bg-[#1a1a1a]/50 p-4 border border-[#1a1a1a]/80 rounded-sm">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-1 bg-black border-gray-700 rounded-sm accent-#52D017" />
                    <span className="text-xs text-slate-400 leading-relaxed">
                      <strong>Notice at Collection:</strong> By submitting this form, you consent to AI-assisted communications (Voice/Chat) for fulfilling this request per our <Link href="/privacy" className="text-#52D017 hover:underline">Privacy Policy</Link>. You acknowledge that XitSource uses AI to parse and respond to inquiries.
                    </span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus !== 'idle'}
                  className="w-full bg-white text-black font-semibold rounded-sm py-4 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'idle' ? 'Submit Inquiry' : formStatus === 'submitting' ? 'Transmitting...' : 'Node Established ✔'}
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
