import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sell Your RV Park As-Is | Direct RV Park Buyer Nationwide",
  description: "Sell your RV park as-is without cleanup, upgrades, or a long listing process. XitSource works with RV park owners nationwide on direct, confidential acquisitions.",
};

export default function RVParksPage() {
  return (
    <div className="bg-white text-[#333333] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <div className="bg-[#f9fafb] border-b border-gray-200 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#333333] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
            <span>←</span> Back
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
            Industry Focus
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#333333] mb-6">
            Sell Your RV Park Without the Noise, Delays, or Cleanup
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#333333]/90 leading-relaxed mb-10 border-l-4 border-l-[#52D017] pl-6">
            We work with RV park owners nationwide who want a direct, confidential sale.
          </p>
          <p className="text-lg text-[#333333]/80 leading-relaxed max-w-3xl mb-10">
            We buy parks as-is, including older parks, underperforming parks, management-heavy properties, and complicated situations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link href="https://www.xitsource.com/sell" className="inline-block px-8 py-4 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors shadow-sm text-center">
              Request Confidential Conversation
            </Link>
          </div>
          <p className="text-sm font-bold text-[#333333]/60 uppercase tracking-widest">
            No public listing. No pressure. No obligation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl py-16 space-y-24">
        
        {/* Main Intro Image */}
        <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-sm relative group">
          <img src="/assets/industries/rv-parks/mobile-home-park-1.jpg" alt="Sell Your RV Park As-Is" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        {/* 2. DIRECT ANSWER BLOCK (AEO) */}
        <section className="bg-white p-8 md:p-10 border border-gray-200 shadow-xl shadow-black/5 rounded-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
          <h2 className="text-2xl font-bold text-[#333333] mb-6">Can You Sell an RV Park As-Is?</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            Yes, you can sell an RV park as-is without making repairs, replacing infrastructure, filling vacant spots, or listing the property publicly. By working with a direct buyer, you eliminate the need to stabilize operations or pass burdensome inspections, allowing for a quiet, straightforward exit.
          </p>
        </section>

        {/* 3. INTRO SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-8">A Direct Option for RV Park Owners Ready to Move On</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed mb-6">
            Owning an RV park or campground is a relentless operational burden. Between deferred maintenance, high tenant turnover, failing septic systems, and utility headaches, the daily friction rarely stops. The strain of managing managers, handling compliance pressure, and navigating seasonal cash flow swings leads many owners to deep burnout.
          </p>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            We understand the reality of operating these assets. Whether you are facing retirement, trying to manage the property from out of state, or dealing with an inherited park you simply do not want to run, the last thing you need is a complicated, unpredictable sales process.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* 4. ACQUISITION SITUATIONS */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Types of RV Park Situations We Commonly Work With</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Older parks needing modernization</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Properties with extensive deferred maintenance</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Infrastructure problems (utility or septic issues)</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">High vacancy or mostly empty sites</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Facilities struggling with underperforming income</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Traditional mom-and-pop operations</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Assets tied to partnership problems or disputes</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Probate cases or inherited campgrounds</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Properties with unresolved title issues</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Parks hampered by distant or out-of-state ownership</span>
             </li>
             <li className="flex gap-3 items-start md:col-span-2">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Owners who are simply tired and want to step away quietly</span>
             </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        {/* 5. WHY OWNERS SELL */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Why RV Park Owners Decide to Sell</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Burnout</h3>
               <p className="text-[#333333]/80">The constant flow of camper complaints, maintenance emergencies, and employee turnover is exhausting.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Retirement</h3>
               <p className="text-[#333333]/80">You spent years building your equity; now it is time to enjoy the capital without the daily operational stress.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Capital Fatigue</h3>
               <p className="text-[#333333]/80">Upgrading water lines, electrical pedestals, or wifi networks requires cash injections you prefer not to make.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Distance Management</h3>
               <p className="text-[#333333]/80">Running a piece of active real estate smoothly from hours away is nearly impossible.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Family or Estate Transition</h3>
               <p className="text-[#333333]/80">Liquidating an inherited asset is often safer and less contentious than trying to run it among heirs.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Operational Complexity</h3>
               <p className="text-[#333333]/80">Regulatory changes, insurance hikes, and zoning red tape make staying in business harder every year.</p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 6. PROCESS SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">A Simple, Direct Sale</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Connect</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Reach out directly for a private conversation. We learn the basics about your park, its history, and your goals for exiting the operation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Review</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">We perform a quiet, preliminary assessment of the asset based on current condition and financials under a Non-Disclosure Agreement.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Offer</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">We present a clear, realistic offer. We buy as-is, meaning you do not have to perform massive site cleanups or infrastructural upgrades.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Close</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">If accepted, we map out a closing timeline that fits your schedule, moving confidently through standard legal and title processes.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 7. COMPARISON SECTION */}
        <section className="bg-[#f9fafb] p-8 md:p-12 border border-gray-200 rounded-sm">
          <h2 className="text-3xl font-bold text-[#333333] mb-8 text-center">Why Some Owners Prefer a Direct Sale</h2>
          <p className="text-lg text-[#333333]/80 text-center max-w-2xl mx-auto mb-10">
             A traditional listing forces you to market your private business to the world. A direct sale with XitSource protects your privacy and bypasses the friction of standard brokerage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white p-6 border border-gray-200 rounded-sm">
                <h3 className="text-xl font-bold text-red-700 mb-4 border-b border-gray-100 pb-2">Traditional Broker Listing</h3>
                <ul className="space-y-3">
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Your park is listed publicly on the internet.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Endless tours from &quot;tire-kicker&quot; buyers.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Tenants find out and begin to panic or leave.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Pressure to spend cash on massive repairs first.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Lose 6% to 10% of your equity to commission fees.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Zero certainty on closing dates.</li>
                </ul>
             </div>
             <div className="bg-white p-6 border border-[#52D017]/30 rounded-sm shadow-sm md:transform md:scale-105 relative z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
                <h3 className="text-xl font-bold text-[#111827] mb-4 border-b border-gray-100 pb-2">Direct Sale to XitSource</h3>
                <ul className="space-y-3">
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Absolute privacy. We never publicly advertise the deal.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Direct conversation with reliable decision-makers.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Operations remain stable; no tenant panic.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Sell entirely &quot;as-is&quot; without fixing infrastructure.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Keep your equity. You pay exactly zero broker fees.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> You pick the closing timeline that fits your life.</li>
                </ul>
             </div>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">RV Park Seller FAQs</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Can I sell my RV park as-is?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. XitSource acquires RV parks in their current condition. You do not have to perform cleanup, fund expensive repairs, or completely modernize the park to secure an exit.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do I need to fill vacant spaces before selling?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                No. We frequently acquire parks ranging from fully stabilized to completely vacant. Poor occupancy simply alters the transaction structure, but it does not disqualify the property.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do you buy older RV parks?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. Older assets are common in this industry. We are highly familiar with evaluating and acquiring aging infrastructures without demanding that you update them first.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">What if my RV park has utility or septic issues?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Failing wastewater systems, unpermitted well setups, and outdated 30-amp electrical lines are standard problems. We factor these challenges squarely into our risk profile rather than making you fix them to sell.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Can I sell if I have partners or a complicated ownership structure?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. We regularly deal with partnership buyouts, distressed ownership disputes, family trusts, and probate scenarios. We provide a clear, neutral route out for all parties.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do you work with out-of-state owners?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Absolutely. Distance management is one of the most common reasons an owner decides to sell an RV park. We handle transactions seamlessly across state lines.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do I need to list with a broker first?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                No. By coming directly to XitSource, you bypass broker interference, dodge massive commission deductions, and keep your property entirely off of public listing sites.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">How do I start the conversation?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                You can initiate contact securely through our website. John or Ryan will personally review your details and reach out to discuss your options with strictly zero obligation to proceed.
              </p>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA SECTION */}
        <section className="bg-[#111827] text-white p-12 rounded-sm text-center shadow-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your RV Park?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you are tired of operations, dealing with deferred maintenance, or simply ready for a reliable exit, start with a direct, private conversation today.
          </p>
          <Link href="https://www.xitsource.com/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors">
            Request Confidential Conversation
          </Link>
        </section>

        {/* INTERNAL LINKS */}
        <section className="pt-8 text-center text-sm text-[#333333]/80 border-t border-gray-200">
          <p className="mb-4 text-xs font-bold tracking-widest uppercase">Other Supported Industries</p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="/industries/laundromat" className="hover:text-[#52D017] transition-colors">Laundromats</Link>
             <span>•</span>
             <Link href="/industries/self-storage" className="hover:text-[#52D017] transition-colors">Self Storage</Link>
             <span>•</span>
             <Link href="/industries/raw-land" className="hover:text-[#52D017] transition-colors">Raw Land</Link>
             <span>•</span>
             <Link href="/industries/residential-homes" className="hover:text-[#52D017] transition-colors">Residential Portfolios</Link>
          </div>
        </section>

      </div>
    </div>
  );
}
