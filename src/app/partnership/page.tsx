import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Who You're Working With | Direct Buyers | XitSource",
  description: "XitSource partners are direct buyers, not brokers. We work with property and business owners nationwide who want a simple, private sale.",
};

export default function PartnershipPage() {
  return (
    <div className="bg-white text-[#333333] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <div className="bg-[#f9fafb] border-b border-gray-200 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
            The Partnership
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#333333] mb-6">
            Direct Buyers. Real Operators. Not Brokers.
          </h1>
          <p className="text-xl text-[#333333]/80 leading-relaxed max-w-3xl mx-auto mb-10">
            We work directly with property and business owners nationwide who want a simple, private sale. No listings. No drawn-out process. Just a direct conversation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link href="https://www.xitsource.com/sell" className="inline-block px-8 py-4 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors shadow-sm text-center">
              Request Confidential Conversation
            </Link>
          </div>
          <p className="text-sm font-bold text-[#333333]/60 uppercase tracking-widest">
            No pressure. No obligation.
          </p>
        </div>
      </div>

      {/* 2. CREDIBILITY STRIP */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-6 max-w-5xl py-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4 text-sm font-semibold text-[#333333]/70 uppercase tracking-wider text-center">
            <span>Nationwide Acquisitions</span>
            <span className="hidden md:inline text-[#52D017]">•</span>
            <span>Residential & Income Assets</span>
            <span className="hidden md:inline text-[#52D017]">•</span>
            <span>Complex Situations</span>
            <span className="hidden md:inline text-[#52D017]">•</span>
            <span>Direct, Off-Market Sales</span>
            <span className="hidden md:inline text-[#52D017]">•</span>
            <span>Simple, Practical Outcomes</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl py-16 space-y-24">

        {/* 3. INTRO SECTION */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Who You&apos;re Working With</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed mb-6">
            XitSource operates as a direct buyer, not an intermediary. When you <Link href="/resources/guides/selling-without-a-broker" className="text-[#52D017] hover:underline font-semibold">sell without a broker</Link>, you are dealing directly with the principles who will fund and operate the asset.
          </p>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            We understand that real estate and business transitions are often driven by real-life situations—burnout, inherited complexities, or shifting priorities. Our focus is absolute simplicity, clarity, and execution. We are highly selective and entirely practical, prioritizing logical deal structures over promotional sales tactics.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* 4. PARTNER BIOS */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* John Poindexter */}
            <div className="bg-[#f9fafb] p-8 border border-gray-200 rounded-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#111827] text-white flex items-center justify-center font-bold text-2xl rounded-sm mb-6">JP</div>
              <h3 className="text-2xl font-bold text-[#333333] mb-1">John Poindexter</h3>
              <p className="text-[#52D017] font-semibold text-sm uppercase tracking-widest mb-6">Partner</p>
              <p className="text-lg text-[#333333]/80 leading-relaxed mb-4">
                John leads operational execution once an agreement is reached. His focus is on the seamless transfer of the physical asset and managing the <Link href="/resources/guides/timeline-to-sell-business-or-property" className="text-[#52D017] hover:underline">timeline to sell</Link> with zero disruption to existing tenants or operations.
              </p>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                By prioritizing solid systems and structural stability, he ensures that the post-closing reality matches the commitments made on day one. When complex title or transition issues arise, John focuses on keeping the deal on track calmly and systematically.
              </p>
            </div>

            {/* Ryan Peterson */}
            <div className="bg-[#f9fafb] p-8 border border-gray-200 rounded-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#111827] text-white flex items-center justify-center font-bold text-2xl rounded-sm mb-6">RP</div>
              <h3 className="text-2xl font-bold text-[#333333] mb-1">Ryan Peterson</h3>
              <p className="text-[#52D017] font-semibold text-sm uppercase tracking-widest mb-6">Partner</p>
              <p className="text-lg text-[#333333]/80 leading-relaxed mb-4">
                Ryan directs acquisitions and structuring, working directly with sellers to build purchase frameworks that resolve specific pain points.
              </p>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                His approach is direct and problem-solving oriented. Whether an owner is dealing with pre-foreclosure, a massive deferred maintenance burden on a <Link href="/industries/rv-parks" className="text-[#52D017] hover:underline">commercial park</Link>, or a difficult partnership split, Ryan strips away the fluff to find the fastest, most practical path forward.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 5. WHAT IT'S LIKE TO WORK WITH US */}
        <section className="bg-white p-8 md:p-12 border border-[#52D017]/30 rounded-sm shadow-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
          <h2 className="text-3xl font-bold text-[#333333] mb-8">What It&apos;s Like to Work With Us</h2>
          <ul className="space-y-4 max-w-2xl">
             <li className="flex gap-4 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0 text-xl">✓</span>
               <span className="text-lg text-[#333333]/90 font-medium">Direct conversations. No pressure.</span>
             </li>
             <li className="flex gap-4 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0 text-xl">✓</span>
               <span className="text-lg text-[#333333]/90 font-medium">Straight answers. No runaround.</span>
             </li>
             <li className="flex gap-4 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0 text-xl">✓</span>
               <span className="text-lg text-[#333333]/90 font-medium">Experience handling highly complex situations.</span>
             </li>
             <li className="flex gap-4 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0 text-xl">✓</span>
               <span className="text-lg text-[#333333]/90 font-medium">Intense focus on solutions, not obstacles.</span>
             </li>
             <li className="flex gap-4 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0 text-xl">✓</span>
               <span className="text-lg text-[#333333]/90 font-medium">A clear, completely transparent <Link href="/resources/guides/understanding-the-private-acquisition-process" className="text-[#52D017] hover:underline">step-by-step process</Link>.</span>
             </li>
             <li className="flex gap-4 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0 text-xl">✓</span>
               <span className="text-lg text-[#333333]/90 font-medium">Transactions built squarely around your specific timeline.</span>
             </li>
          </ul>
        </section>

        {/* 6. PROCESS REINFORCEMENT */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#333333] mb-10 text-center">A Straightforward Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="font-bold text-[#333333]">Connect</h3>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="font-bold text-[#333333]">Review</h3>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h3 className="font-bold text-[#333333]">Offer</h3>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl mb-4">4</div>
              <h3 className="font-bold text-[#333333]">Close</h3>
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA SECTION */}
        <section className="bg-[#111827] text-white p-12 rounded-sm text-center shadow-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Start With a Simple Conversation</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you are considering conducting a <Link href="/resources/guides/understanding-the-private-acquisition-process" className="text-[#52D017] hover:underline">private sale</Link> and want to understand your options, the first step is directly speaking with us. No obligation. No pressure.
          </p>
          <Link href="https://www.xitsource.com/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors">
            Request Confidential Conversation
          </Link>
        </section>

        {/* COMPLIANCE / FOOTER NOTE */}
        <section className="pt-8 text-center text-sm text-[#333333]/80 border-t border-gray-200">
          <p className="mb-4 text-xs font-bold tracking-widest uppercase">Direct Acquisition Guidelines</p>
          <p className="max-w-3xl mx-auto leading-relaxed text-xs opacity-75">
            XitSource operates strictly as a direct principal buyer in off-market transactions. We are not real estate agents and do not list properties. All acquisitions and timelines are subject to standard operational due diligence. We make no guaranteed claims regarding specific closing speeds across all asset classes. CCPA/CPRA Compliant.
          </p>
        </section>

      </div>
    </div>
  );
}
