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
    <div className={`min-h-screen bg-[#121212] text-gray-200 overflow-hidden relative ${inter.className}`}>
      
      {/* Background Gradients - Subtle Dark Executive */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-gray-800 bg-gray-900/50 backdrop-blur-md mb-8 text-xs font-semibold tracking-widest text-gray-400 uppercase">
             <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
             Global Network Hub
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            The Nexus of <br className="hidden md:block" />
            <span className="text-gray-400">Next-Generation</span> Enterprise.
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
            XitSource is a high-authority global network hub and megacorporation incubator specializing in cybernetics, zero-point energy, and neural architectures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <a href="#briefing" className="px-8 py-4 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-colors shadow-lg shadow-white/5">
                Request Briefing
             </a>
             <a href="#subsidiaries" className="px-8 py-4 bg-transparent border border-gray-700 text-white font-semibold rounded-sm hover:border-gray-500 transition-colors">
                Explore Subsidiaries
             </a>
          </div>
        </section>

        {/* Sector Grid (Subsidiaries) */}
        <section id="subsidiaries" className="container mx-auto px-6 py-24 border-t border-gray-800/50">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Sector Directory</h2>
            <p className="text-gray-400 max-w-2xl">Access detailed intelligence on our 9 primary operating subsidiaries across global markets.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-gray-800/40 p-[1px]">
            {businesses.map((biz) => (
              <div key={biz.id} className="bg-[#121212] p-8 group hover:bg-[#161616] transition-colors relative overflow-hidden h-full flex flex-col">
                <div className={`absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ${biz.color === 'cyan' ? 'bg-cyan-500' : biz.color === 'white' ? 'bg-white' : 'bg-gray-500'}`}></div>
                <div className="text-sm font-mono text-gray-500 mb-4 tracking-widest">0{biz.id} {"// SEC"}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">{biz.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{biz.desc}</p>
                <div className="flex items-center text-xs font-semibold text-gray-500 group-hover:text-white transition-colors uppercase tracking-widest mt-auto">
                  Access Node <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Form Section with AI Consent */}
        <section id="briefing" className="container mx-auto px-6 py-24 border-t border-gray-800/50">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-4">Request a Corporate Briefing</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Connect with our executive liaisons to discuss how XitSource architecture can integrate into your existing supply chains and cybersecurity frameworks.
              </p>
              
              <div className="mt-12 bg-[#0a0a0a] border border-gray-800 p-6 rounded-sm">
                 <div className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
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
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">First Name</label>
                    <input type="text" required className="w-full bg-[#0a0a0a] border border-gray-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Last Name</label>
                    <input type="text" required className="w-full bg-[#0a0a0a] border border-gray-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Corporate Email</label>
                  <input type="email" required className="w-full bg-[#0a0a0a] border border-gray-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Inquiry Details</label>
                  <textarea required rows={4} className="w-full bg-[#0a0a0a] border border-gray-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"></textarea>
                </div>

                <div className="bg-[#1a1a1a]/50 p-4 border border-gray-800/80 rounded-sm">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-1 bg-black border-gray-700 rounded-sm accent-cyan-500" />
                    <span className="text-xs text-gray-400 leading-relaxed">
                      <strong>Notice at Collection:</strong> By submitting this form, you consent to AI-assisted communications (Voice/Chat) for fulfilling this request per our <Link href="/privacy" className="text-cyan-400 hover:underline">Privacy Policy</Link>. You acknowledge that XitSource uses AI to parse and respond to inquiries.
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
