import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Understanding the Private Acquisition Process | XitSource Guides",
  description: "A clear, step-by-step breakdown of how to sell your business privately without brokers, public listings, or unnecessary complexity.",
};

export default function PrivateAcquisitionProcessGuidePage() {
  return (
    <div className="bg-white text-[#333333] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <div className="bg-[#f9fafb] border-b border-gray-200 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/resources/guides" className="inline-flex items-center gap-2 text-sm font-semibold text-[#333333] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
            <span>←</span> Back to Guides
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
            Strategy & Execution
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#333333] mb-6">
            Understanding the Private Acquisition Process
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#333333]/90 leading-relaxed mb-10 border-l-4 border-l-[#52D017] pl-6">
            A clear, step-by-step breakdown of how to sell your business privately without brokers, public listings, or unnecessary complexity.
          </p>
          <p className="text-lg text-[#333333]/80 leading-relaxed max-w-3xl mb-10">
            The private acquisition process is designed for business owners who value confidentiality, speed, and control. Unlike traditional sales that rely on brokers and public exposure, a direct acquisition allows you to work one-on-one with a qualified buyer to structure a clean, efficient transition.<br /><br />
            This guide outlines exactly how the process works from first conversation to closing.
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
          <h2 className="text-2xl font-bold text-[#333333] mb-6">What is the private acquisition process?</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            The private acquisition process is a direct, off-market transaction between a business owner and a qualified buyer, where valuation, due diligence, and closing are handled without brokers or public listings. This approach ensures confidentiality, reduces timelines, and allows both parties to work collaboratively toward a structured and efficient sale.
          </p>
        </section>

        {/* 3. WHY THIS MATTERS */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Why This Matters</h2>
          <p className="text-lg text-[#333333]/80 leading-relaxed mb-8">
            Understanding the process removes uncertainty and positions you to make informed decisions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Confidentiality Protection</h3>
              <p className="text-[#333333]/80">No public listings means your staff, customers, and competitors remain unaware during negotiations.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Faster Execution</h3>
              <p className="text-[#333333]/80">Direct transactions eliminate broker delays, reducing time to close.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Control of the Narrative</h3>
              <p className="text-[#333333]/80">You decide when and how information is shared internally and externally.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Reduced Costs</h3>
              <p className="text-[#333333]/80">No brokerage commissions impacting your final proceeds.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm md:col-span-2">
              <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Cleaner Transactions</h3>
              <p className="text-[#333333]/80">Fewer intermediaries leads to clearer communication and fewer complications.</p>
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
                <h3 className="text-xl font-bold text-[#333333] mb-2">Initial Conversation</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">A confidential discussion to understand your goals, timeline, and the current state of the business.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Preliminary Review</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">High-level financial and operational information is reviewed under NDA to assess fit and valuation range.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Indicative Offer</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">You receive a straightforward, no-obligation offer based on real conditions, not market speculation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Due Diligence</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">A structured but quiet review of financials, operations, and assets without disrupting daily business activity.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">5</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Final Agreement</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Terms are finalized with clear expectations, timelines, and transition structure.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">6</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Closing</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">The transaction is completed through legal and title channels with a timeline aligned to your needs.</p>
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
                <strong className="text-lg text-[#333333] block">Engaging Too Many Parties:</strong>
                <span className="text-[#333333]/80">Introducing multiple buyers or brokers creates confusion and slows progress.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold mt-1 shrink-0">✕</span>
              <div>
                <strong className="text-lg text-[#333333] block">Overexposing Information:</strong>
                <span className="text-[#333333]/80">Sharing sensitive details too early or without protection risks confidentiality.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold mt-1 shrink-0">✕</span>
              <div>
                <strong className="text-lg text-[#333333] block">Delaying Financial Preparation:</strong>
                <span className="text-[#333333]/80">Disorganized records can stall or reduce deal quality.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold mt-1 shrink-0">✕</span>
              <div>
                <strong className="text-lg text-[#333333] block">Chasing &quot;Highest Price&quot; Over Certainty:</strong>
                <span className="text-[#333333]/80">Unrealistic expectations often lead to longer timelines and failed deals.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold mt-1 shrink-0">✕</span>
              <div>
                <strong className="text-lg text-[#333333] block">Ignoring Transition Planning:</strong>
                <span className="text-[#333333]/80">Failing to think through post-sale operations creates unnecessary risk.</span>
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
              <h3 className="font-bold text-[#333333] mb-3 text-sm tracking-widest uppercase border-b border-gray-100 pb-3">Fast Track</h3>
              <p className="text-xs text-[#52D017] mb-2 font-mono font-bold">30–45 DAYS</p>
              <p className="text-[#333333]/80 text-sm">For owners with clean records and a need for speed.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-sm">
              <h3 className="font-bold text-[#333333] mb-3 text-sm tracking-widest uppercase border-b border-gray-100 pb-3">Standard Process</h3>
              <p className="text-xs text-[#52D017] mb-2 font-mono font-bold">60–90 DAYS</p>
              <p className="text-[#333333]/80 text-sm">Balanced approach allowing for full diligence and structured transition.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-sm">
              <h3 className="font-bold text-[#333333] mb-3 text-sm tracking-widest uppercase border-b border-gray-100 pb-3">Planned Exit</h3>
              <p className="text-xs text-[#52D017] mb-2 font-mono font-bold">3–6 MONTHS+</p>
              <p className="text-[#333333]/80 text-sm">For owners who want to remain involved during transition or maximize planning.</p>
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
                <h3 className="text-lg font-bold text-[#333333] mb-2">Single Point of Contact</h3>
                <p className="text-[#333333]/80">You work directly with decision-makers, not intermediaries.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">No Public Market Exposure</h3>
                <p className="text-[#333333]/80">Your business is never listed or marketed publicly.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">Aligned Incentives</h3>
                <p className="text-[#333333]/80">The buyer&apos;s goal is long-term value, not transaction fees.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">Efficient Communication</h3>
                <p className="text-[#333333]/80">Fewer layers result in faster decisions and cleaner execution.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start md:col-span-2">
              <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">Operational Continuity</h3>
                <p className="text-[#333333]/80">Transactions are structured to preserve what is already working.</p>
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
              <h3 className="text-xl font-bold text-[#333333] mb-3">Is a private acquisition confidential?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. The process is structured to keep all discussions private and protected by non-disclosure agreements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do I need a broker?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                No. The private acquisition process is specifically designed to eliminate the need for a broker.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">How is the business valued?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Valuation is based on real financial performance, operational strength, and current market conditions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Will this disrupt my business operations?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                No. Due diligence is conducted quietly to avoid impacting staff, customers, or daily operations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">How long does the process take?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Most transactions close within 30 to 90 days depending on complexity and preparedness.
              </p>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA SECTION */}
        <section className="bg-[#111827] text-white p-12 rounded-sm text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Start With a Clear, Private Path Forward</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you are considering a sale and want a straightforward, confidential process without unnecessary complexity, we are ready to have that conversation.
          </p>
          <Link href="https://www.xitsource.com/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors">
            Request Confidential Conversation
          </Link>
        </section>


      </div>
    </div>
  );
}
