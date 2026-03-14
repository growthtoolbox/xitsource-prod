"use client";

import { useState } from 'react';
import Link from "next/link";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const businesses = [
  { id: 1, name: "RV Parks & Mobile Home Communities", desc: "Strategic acquisition and management of high-yield residential communities.", color: "cyan" },
  { id: 2, name: "Laundromats & Owner-Operated Biz", desc: "Identifying and optimizing cash-flowing community businesses.", color: "white" },
  { id: 3, name: "Storage Units & Industrial Assets", desc: "Securing and expanding physical asset portfolios across Northern CA.", color: "gray" },
  { id: 4, name: "Raw Land Development", desc: "Transforming undeveloped parcels into strategic commercial real estate.", color: "white" },
  { id: 5, name: "Off-Market Residential Acquisitions", desc: "Direct-to-seller residential transactions focusing on speed and mutually beneficial terms.", color: "cyan" },
  { id: 6, name: "GrowthToolBox (Marketing)", desc: "Comprehensive social media marketing and lead generation infrastructure.", color: "gray" },
  { id: 7, name: "Full-Stack Website Builds", desc: "High-performance digital storefronts built on Next.js 15 for max conversion.", color: "white" },
  { id: 8, name: "1-on-1 Business Consulting", desc: "Direct strategic guidance for scaling operations and positioning for sale.", color: "gray" },
  { id: 9, name: "Operational Optimization", desc: "Streamlining workflows, integrating AI, and maximizing enterprise valuation.", color: "cyan" },
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
             Strategy & Acquisition Hub
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-200 mb-6">
            Strategic Partnerships for <br className="hidden md:block" />
            <span className="text-slate-400">NorCal Business & Real Estate.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
            We help Northern California owners navigate business exits, optimize operations, and grow asset value through strategic acquisitions and modern marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <a href="#briefing" className="px-8 py-4 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-colors shadow-lg shadow-white/5">
                Contact Our Team
             </a>
             <a href="#subsidiaries" className="px-8 py-4 bg-transparent border border-[#1a1a1a] text-slate-200 font-semibold rounded-sm hover:border-gray-500 transition-colors">
                View Our Sectors
             </a>
          </div>
        </section>

        {/* Sector Grid (Subsidiaries) */}
        <section id="subsidiaries" className="container mx-auto px-6 py-24 border-t border-[#1a1a1a]/50">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-200 mb-4">Sector Directory</h2>
            <p className="text-slate-400 max-w-2xl">Explore our current operational focus areas across Real Estate and Business Services in Northern California.</p>
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
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
              GrowthToolBox.app
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-200 mb-6">Digital Ecosystem Expansion</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
              GrowthToolBox.app is the digital acceleration arm of XitSource. We provide optimized web builds and social media scaling to ensure your physical assets have a high-performance digital presence.
            </p>
          </div>
          <div className="flex justify-center">
            <a href="#" className="px-8 py-4 bg-transparent border border-[#52D017] text-[#52D017] font-semibold rounded-sm hover:bg-[#52D017]/10 transition-colors">
              Visit GrowthToolBox (Coming Soon)
            </a>
          </div>
        </section>

        {/* Lead Form Section with AI Consent */}
        <section id="briefing" className="container mx-auto px-6 py-24 border-t border-[#1a1a1a]/50">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-200 mb-4">Start a Conversation</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Whether you are looking to exit your business, sell a property, or scale your marketing, John and Ryan are ready to discuss the next step for your assets.
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
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
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

        {/* About Section */}
        <section id="about" className="container mx-auto px-6 py-24 border-t border-[#1a1a1a]/50">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-200 mb-6">The Partnership: <br className="md:hidden"/> John Poindexter & Ryan Peterson</h2>
            <p className="text-xl text-[#52D017] font-medium mb-6">Strategic Acquisitions and Growth Experts based in Roseville, California.</p>
            <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
              XitSource was founded on a simple principle: providing business owners with a reliable path forward. Whether you are preparing for retirement, transitioning from a property, or looking to scale your current operations, our team provides the strategic expertise to unlock long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* John Bio */}
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 flex flex-col items-center text-center group hover:border-[#52D017]/50 transition-colors">
              <div className="w-24 h-24 bg-[#161616] rounded-full border border-[#1a1a1a] flex items-center justify-center mb-6 overflow-hidden">
                <span className="text-3xl text-slate-600 font-bold group-hover:text-[#52D017] transition-colors">JP</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-200 mb-2">John Poindexter</h3>
              <p className="text-[#52D017] text-sm uppercase tracking-widest font-semibold mb-6">Partner</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                John specializes in operations and strategic scaling, finance, business strategy, and marketing. He effectively bridges the gap between digital growth and physical asset structuring, collaborating closely with owners to optimize organizational transitions and identify lucrative off-market growth opportunities across diverse sectors.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <a href="https://www.linkedin.com/company/xitsource/" target="_blank" rel="noopener noreferrer" className="p-2 border border-[#1a1a1a] rounded hover:border-[#52D017] hover:text-[#52D017] text-slate-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61579536145410" target="_blank" rel="noopener noreferrer" className="p-2 border border-[#1a1a1a] rounded hover:border-[#52D017] hover:text-[#52D017] text-slate-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
              </div>
            </div>

            {/* Ryan Bio */}
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 flex flex-col items-center text-center group hover:border-[#52D017]/50 transition-colors">
              <div className="w-24 h-24 bg-[#161616] rounded-full border border-[#1a1a1a] flex items-center justify-center mb-6 overflow-hidden">
                <span className="text-3xl text-slate-600 font-bold group-hover:text-[#52D017] transition-colors">RP</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-200 mb-2">Ryan Peterson</h3>
              <p className="text-[#52D017] text-sm uppercase tracking-widest font-semibold mb-6">Partner</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                Ryan specializes in real estate acquisitions, with a particular emphasis on residential properties. He possesses deep expertise in generating revenue-generating assets, encompassing mobile home parks, RV parks, laundromats, co-living spaces, and raw land development.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <a href="https://www.linkedin.com/company/xitsource/" target="_blank" rel="noopener noreferrer" className="p-2 border border-[#1a1a1a] rounded hover:border-[#52D017] hover:text-[#52D017] text-slate-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61579536145410" target="_blank" rel="noopener noreferrer" className="p-2 border border-[#1a1a1a] rounded hover:border-[#52D017] hover:text-[#52D017] text-slate-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
