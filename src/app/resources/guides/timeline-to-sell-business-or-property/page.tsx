import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Timeline to Sell a Business or Property | XitSource Guides",
  description: "Understand the milestones of a private acquisition. Learn how a direct sale provides a predictable, accelerated timeline without broker delays.",
};

export default function TimelineToSellGuidePage() {
  return (
    <div className="bg-white text-[#333333] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <div className="bg-[#f9fafb] border-b border-gray-200 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/resources/guides" className="inline-flex items-center gap-2 text-sm font-semibold text-[#333333] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
            <span>←</span> Back to Guides
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
            Execution
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#333333] mb-6">
            What is the Timeline to Sell a Business or Property?
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#333333]/90 leading-relaxed mb-10 border-l-4 border-l-[#52D017] pl-6">
            From initial handshake to funded closing. Understand the milestones of a private acquisition.
          </p>
          <p className="text-lg text-[#333333]/80 leading-relaxed max-w-3xl mb-10">
            The traditional market can leave an asset sitting for months or years. A direct sale to a private partner provides a predictable, accelerated timeline that works around your needs.
          </p>
          <Link href="/sell" className="inline-block px-8 py-4 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors shadow-sm">
            Request Confidential Conversation
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl py-16 space-y-24">
        
        {/* 2. DIRECT ANSWER (AEO BLOCK) */}
        <section className="bg-white p-8 md:p-10 border border-gray-200 shadow-xl shadow-black/5 rounded-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
          <h2 className="text-2xl font-bold text-[#333333] mb-6">What is the timeline to sell a business or property?</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            A direct private acquisition typically takes 30 to 60 days from initial offer to final funding. This is significantly faster than the 6 to 12 month brokerage process because it eliminates public listings, third-party financing delays, and broker-led negotiations.
          </p>
        </section>

        {/* 3. WHY THIS MATTERS */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Why This Matters</h2>
          <p className="text-lg text-[#333333]/80 leading-relaxed mb-8">
            Time directly impacts deal quality and outcome:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Deal Fatigue</h3>
              <p className="text-[#333333]/80">Long timelines reduce momentum and increase the likelihood of failed transactions.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Market Risk</h3>
              <p className="text-[#333333]/80">Interest rates, economic shifts, or local conditions can change valuation while waiting.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Operational Burnout</h3>
              <p className="text-[#333333]/80">Owners lose focus running the business while managing a prolonged sale process.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Uncertainty</h3>
              <p className="text-[#333333]/80">The longer the process, the greater the risk of disruption to staff and customers.</p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 4. STEP-BY-STEP PROCESS */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">The Step-By-Step Process</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Discovery Call</h3>
                <p className="text-xs text-[#52D017] font-mono font-bold uppercase tracking-widest mb-2">Day 1–3</p>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Initial conversation to understand goals, timeline, and asset fit.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Data Review</h3>
                <p className="text-xs text-[#52D017] font-mono font-bold uppercase tracking-widest mb-2">Day 3–10</p>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Submission of basic financials or property details for internal evaluation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Letter of Intent</h3>
                <p className="text-xs text-[#52D017] font-mono font-bold uppercase tracking-widest mb-2">Day 10–14</p>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Formal written offer. Once signed, the asset is taken off-market.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Discreet Due Diligence</h3>
                <p className="text-xs text-[#52D017] font-mono font-bold uppercase tracking-widest mb-2">Day 14–45</p>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Quiet review of records and assets without disrupting operations or alerting staff.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">5</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Funding and Closing</h3>
                <p className="text-xs text-[#52D017] font-mono font-bold uppercase tracking-widest mb-2">Day 45–60</p>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Legal transfer completed through title or legal channels. Seller receives proceeds.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 5. COMMON MISTAKES TO AVOID */}
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-red-50 text-red-700 border border-red-200 mb-6 text-xs font-bold tracking-widest uppercase">
            Caution
          </div>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Common Mistakes to Avoid</h2>
          <ul className="space-y-6">
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold mt-1 shrink-0">✕</span>
              <div>
                <strong className="text-lg text-[#333333] block">Incomplete Financial Records:</strong>
                <span className="text-[#333333]/80">Missing documents delay or complicate due diligence.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold mt-1 shrink-0">✕</span>
              <div>
                <strong className="text-lg text-[#333333] block">Over-Negotiating Minor Details:</strong>
                <span className="text-[#333333]/80">Focusing on small items instead of overall deal structure slows closing.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold mt-1 shrink-0">✕</span>
              <div>
                <strong className="text-lg text-[#333333] block">Waiting for Perfect Timing:</strong>
                <span className="text-[#333333]/80">Market conditions are unpredictable. Delays can reduce value.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold mt-1 shrink-0">✕</span>
              <div>
                <strong className="text-lg text-[#333333] block">Introducing Too Many Parties:</strong>
                <span className="text-[#333333]/80">Additional stakeholders create friction and slow decision-making.</span>
              </div>
            </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        {/* 6. TIMELINE SCENARIOS */}
        <section className="bg-[#f9fafb] p-8 md:p-12 border border-gray-200 rounded-sm">
          <h2 className="text-3xl font-bold text-[#333333] mb-10 text-center">Timeline Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-6 border border-gray-200 rounded-sm">
              <h3 className="font-bold text-[#333333] mb-3 text-sm tracking-widest uppercase border-b border-gray-100 pb-3">Accelerated Close</h3>
              <p className="text-xs text-[#52D017] mb-2 font-mono font-bold uppercase">14–21 Days</p>
              <p className="text-[#333333]/80 text-sm">Best suited for residential property or raw land with simple documentation.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-sm">
              <h3 className="font-bold text-[#333333] mb-3 text-sm tracking-widest uppercase border-b border-gray-100 pb-3">Standard Acquisition</h3>
              <p className="text-xs text-[#52D017] mb-2 font-mono font-bold uppercase">45–60 Days</p>
              <p className="text-[#333333]/80 text-sm">Typical for RV parks, storage facilities, laundromats, and operating businesses.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-sm">
              <h3 className="font-bold text-[#333333] mb-3 text-sm tracking-widest uppercase border-b border-gray-100 pb-3">Planned Transition</h3>
              <p className="text-xs text-[#52D017] mb-2 font-mono font-bold uppercase">6 Months+</p>
              <p className="text-[#333333]/80 text-sm">Structured exits where the owner remains involved during transition.</p>
            </div>
          </div>
        </section>

        {/* 7. WHY DIRECT ACQUISITION WORKS */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Why Direct Acquisition Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">No Bank Delays</h3>
                <p className="text-[#333333]/80">Private capital removes dependency on lenders, appraisals, and committees.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">Sell As-Is</h3>
                <p className="text-[#333333]/80">No need for repairs, upgrades, or pre-sale improvements.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">Predictable Timeline</h3>
                <p className="text-[#333333]/80">Clear milestones reduce uncertainty and improve execution.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">Direct Decision-Making</h3>
                <p className="text-[#333333]/80">You work directly with buyers, not intermediaries.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 8. FAQ SECTION (AEO OPTIMIZED) */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">How fast can I get paid?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Residential and land transactions can close in as little as 10 to 14 business days.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Can I choose my closing date?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. The timeline can be structured around your schedule, including tax or retirement planning.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">What happens during due diligence?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                A quiet review of financials, records, and assets is conducted without disrupting operations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Will the price change during the process?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Minor issues do not typically affect the agreed price. Offers are structured with as-is conditions in mind.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Is the process confidential?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. The entire process is handled privately without public listings or exposure.
              </p>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA SECTION */}
        <section className="bg-[#111827] text-white p-12 rounded-sm text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Start With a Confidential Conversation</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your time is your most valuable asset. Build a timeline that respects it and aligns with your goals.
          </p>
          <Link href="https://www.xitsource.com/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors">
            Request Confidential Conversation
          </Link>
        </section>


      </div>
    </div>
  );
}
