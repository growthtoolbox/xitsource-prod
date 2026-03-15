"use client";

import { useState } from 'react';
import Link from 'next/link';
import QuickFAQ from '@/components/QuickFAQ';

export default function SellPage() {
  const [formStatus, setFormStatus] = useState<'idle'|'submitting'|'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 py-24">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#1a1a1a] bg-[#161616]/50 backdrop-blur-md mb-8 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
             <span className="w-1.5 h-1.5 bg-[#52D017] rounded-full animate-pulse"></span>
             Direct Acquisition Request
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-200 mb-6">
            Confidential Business & <br className="hidden md:block" />
            <span className="text-[#52D017]">Property Acquisitions</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We acquire cash-flowing businesses, residential portfolios, and development land across Northern California. Zero broker fees. Complete confidentiality. Direct access to the partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Why XitSource */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-200 mb-6 border-l-4 border-[#52D017] pl-4">Why Go Off-Market?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-[#52D017] font-bold text-xl">01</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">Strict Confidentiality</h3>
                    <p className="text-slate-400 leading-relaxed">Your employees, tenants, and competitors don&apos;t need to know your business until the deal is done. Public listings create chaos; private sales create certainty.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#52D017] font-bold text-xl">02</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">No Broker Fees</h3>
                    <p className="text-slate-400 leading-relaxed">Traditional sales cost you 6-10% of your equity. Because we acquire directly with our own capital, you keep what you&apos;ve built.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#52D017] font-bold text-xl">03</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">Legacy Protection</h3>
                    <p className="text-slate-400 leading-relaxed">We honor the work you&apos;ve put into your assets and look to build upon it. We prioritize operational continuity where it matters most.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 rounded-sm">
              <h3 className="text-xl font-bold text-slate-200 mb-4">Not Sure If You&apos;re Ready?</h3>
              <p className="text-slate-400 mb-6">Take our Seller Readiness Scorecard to evaluate your transition timeline.</p>
              <Link href="/scorecard" className="inline-block px-6 py-3 bg-transparent border border-[#52D017] text-[#52D017] hover:bg-[#52D017] hover:text-black transition-colors rounded-sm font-semibold">
                Start Scorecard Assessment
              </Link>
            </div>
          </div>

          {/* Acquisition Form */}
          <div id="contact-form" className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#52D017]/20 via-[#52D017] to-[#52D017]/20"></div>
            
            <h2 className="text-2xl font-bold text-slate-200 mb-4">Request a Confidential Conversation</h2>
            <p className="text-slate-400 mb-8">Reach out to discuss your business transition or real estate goals. John and Ryan personally review all inquiries.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" id="name" required className="w-full bg-[#050505] border border-[#1a1a1a] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#52D017] transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full bg-[#050505] border border-[#1a1a1a] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#52D017] transition-colors" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input type="email" id="email" required className="w-full bg-[#050505] border border-[#1a1a1a] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#52D017] transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="asset" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest">Asset Category</label>
                  <select id="asset" required className="w-full bg-[#050505] border border-[#1a1a1a] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#52D017] transition-colors appearance-none">
                    <option value="">Select Asset Type...</option>
                    <option value="residential">Residential Portfolio</option>
                    <option value="raw_land">Raw Land / Development</option>
                    <option value="rv_mhc">RV Park / Mobile Home Community</option>
                    <option value="laundromat">Laundromat Facility</option>
                    <option value="storage">Self Storage</option>
                    <option value="other_biz">Other Service Business</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="city" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest">Asset Location (City)</label>
                <input type="text" id="city" required className="w-full bg-[#050505] border border-[#1a1a1a] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#52D017] transition-colors" placeholder="e.g. Roseville, CA" />
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest">Brief Transition Context</label>
                <textarea id="details" required rows={4} className="w-full bg-[#050505] border border-[#1a1a1a] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#52D017] transition-colors resize-none" placeholder="Provide a brief overview of your timeline and goals..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className="w-full bg-[#52D017] text-black font-semibold rounded-sm py-4 hover:bg-[#45b312] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {formStatus === 'idle' ? 'Request Conversation' : formStatus === 'submitting' ? 'Transmitting Securely...' : 'Request Sent ✔'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Global Quick FAQ */}
      <div className="mt-24">
        <QuickFAQ />
      </div>
    </div>
  );
}
