import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sell Your Self Storage Facility | Direct Storage Buyer | XitSource",
  description: "Sell your self storage facility directly. No broker fees, no required upgrades, and no public listings. We work with self storage owners nationwide.",
};

export default function SelfStoragePage() {
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
            Sell Your Self Storage Facility Without Delays or Cleanup
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#333333]/90 leading-relaxed mb-10 border-l-4 border-l-[#52D017] pl-6">
            Direct, confidential sales nationwide.
          </p>
          <p className="text-lg text-[#333333]/80 leading-relaxed max-w-3xl mb-10">
            We purchase self storage assets as-is, including underperforming, older, and management-heavy facilities. We provide a straightforward exit without the friction of a public market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link href="https://www.xitsource.com/sell" className="inline-block px-8 py-4 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors shadow-sm text-center">
              Request Confidential Conversation
            </Link>
          </div>
          <p className="text-sm font-bold text-[#333333]/60 uppercase tracking-widest">
            No listings. No pressure. No obligation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl py-16 space-y-24">
        
        {/* Main Intro Image */}
        <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-sm relative group">
          <img src="/assets/resources/storage/storage-facility-hero.webp" alt="Sell Your Self Storage Facility As-Is" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        {/* 2. DIRECT ANSWER BLOCK (AEO) */}
        <section className="bg-white p-8 md:p-10 border border-gray-200 shadow-xl shadow-black/5 rounded-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
          <h2 className="text-2xl font-bold text-[#333333] mb-6">Can You Sell a Self Storage Facility As-Is?</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            Yes. A direct sale allows you to sell the facility in its current condition. You do not have to install new gate systems, repair aging roofs, pave gravel lots, or stabilize occupancy before exiting. We evaluate the asset &quot;as-is&quot; and shoulder the burden of bringing the facility up to modern market standards.
          </p>
        </section>

        {/* 3. INTRO SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-8">A Direct Option for Self Storage Owners Ready to Exit</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed mb-6">
            Running a self storage facility looks like passive income from the outside, but operators know the reality. Between chasing delinquent accounts, managing auctions, fixing damaged units, and keeping gate software online, it is an active, demanding business. 
          </p>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            As the industry consolidates and customer expectations rise, many independent operators face a crossroads: deploy significant capital to modernize, or secure a clean exit. We provide an option for the latter—a private, reliable transition that respects the business you&apos;ve built without demanding you fix it first.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* 4. SITUATIONS SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Types of Self Storage Situations We Work With</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Older, first-generation facilities</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Properties requiring major capital expenditures</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">High vacancy and underperforming occupancy</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Facilities lacking modern management software</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Assets struggling against new, multi-story competitors</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Distance-management and absentee landlord fatigue</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Mom-and-pop operations with manual bookkeeping</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Inherited facilities and estate liquidations</span>
             </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        {/* 5. WHY OWNERS SELL */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Why Self Storage Owners Decide to Sell</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Operational Fatigue</h3>
               <p className="text-[#333333]/80">Tired of answering calls about broken latches, dealing with abandoned units, and navigating the legal headaches of the auction process.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Capital Pressure</h3>
               <p className="text-[#333333]/80">The property requires new roofs, paved driveways, or security system overhauls that you prefer not to fund out of pocket.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Market Competition</h3>
               <p className="text-[#333333]/80">New, climate-controlled mega-facilities are moving into your radius and putting downward pressure on your traditional rates.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Time vs. Return</h3>
               <p className="text-[#333333]/80">The facility was supposed to be passive income, but the hourly management demands no longer justify the monthly cash flow.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Distance Management</h3>
               <p className="text-[#333333]/80">Managing an older facility that lacks robust &quot;contactless&quot; technology from hours away is inefficient and stressful.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Exit Timing</h3>
               <p className="text-[#333333]/80">You&apos;ve held the asset for years, built substantial equity, and simply want to cash out for retirement or reallocation.</p>
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
                <p className="text-lg text-[#333333]/80 leading-relaxed">Reach out directly to discuss your facility. We review the basics—unit count, occupancy, rate structure, and your goals for the exit.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Review</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">We assess the physical asset and the trailing financials to understand the deferred maintenance and operational realities under an NDA.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Offer</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">We provide a straightforward offer to acquire the facility as-is. No broker loops, no required tenant cleanouts, no required upgrades.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Close</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">We map out a closing timeline that aligns with your schedule, executing smoothly through standardized title and escrow procedures.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 7. COMPARISON SECTION */}
        <section className="bg-[#f9fafb] p-8 md:p-12 border border-gray-200 rounded-sm">
          <h2 className="text-3xl font-bold text-[#333333] mb-8 text-center">Why Some Owners Skip the Traditional Listing</h2>
          <p className="text-lg text-[#333333]/80 text-center max-w-2xl mx-auto mb-10">
             Commercial real estate brokers specialize in marketing optimized assets to institutional buyers. If your facility is older or underperforming, standard brokerage can be an agonizing, expensive process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white p-6 border border-gray-200 rounded-sm">
                <h3 className="text-xl font-bold text-red-700 mb-4 border-b border-gray-100 pb-2">Traditional Broker Route</h3>
                <ul className="space-y-3">
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Detailed public financial disclosures.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Pressure to aggressively raise rates before listing.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Expected to handle all deferred maintenance first.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Endless tours from regional competitors.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Give up 4% to 6% of your asset equity to commissions.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Unpredictable timeline stretched by institutional financing.</li>
                </ul>
             </div>
             <div className="bg-white p-6 border border-[#52D017]/30 rounded-sm shadow-sm md:transform md:scale-105 relative z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
                <h3 className="text-xl font-bold text-[#111827] mb-4 border-b border-gray-100 pb-2">Direct Sale to XitSource</h3>
                <ul className="space-y-3">
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Strictly confidential review. No public exposure.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Sell at your current rates; we handle the optimization later.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Sell explicitly &quot;as-is&quot; without replacing roofs or doors.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Direct conversation with the actual buyer.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Exact zero broker commissions paid by you.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> A defined, predictable closing date.</li>
                </ul>
             </div>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Self Storage Seller FAQs</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do you buy facilities with high vacancy rates?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. We evaluate self-storage facilities based on their location and physical footprint, not just their trailing twelve-month revenue. Underperforming or largely vacant properties fit squarely within our acquisition model.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do I need to upgrade my security or gate software before selling?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                No. If your facility still relies on manual padlocks and wire fencing, that is fine. We handle the capital expenditures required to modernize the facility post-closing. You sell it as it operates today.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">What happens to my current tenants?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                We honor existing leases and aim to provide a seamless transition for your renters. Our goal is to stabilize the asset and integrate it into our management framework without causing mass tenant disruption.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Does selling &quot;as-is&quot; mean I take a massive discount?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                We make fair, data-driven offers based on the current condition and revenue of the facility. You avoid paying 6% in broker fees and thousands in pre-listing repairs, making the net yield highly competitive without the standard brain damage of a listing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do you require perfect, CPA-audited financials?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                No. While we need basic visibility into the rent roll, occupancy rates, and major expenses, we understand that many independent operators use simpler bookkeeping methods. We work with the data you have.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Can we structure the sale if I have multiple partners?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. Partnership dissolution is a very common catalyst for a sale. We work methodically through the title and escrow process to ensure all recorded partners are cleared and paid correctly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Why shouldn&apos;t I just list my facility with a commercial broker?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                If you have a Class-A, fully stabilized facility with pristine financials, a broker may achieve the highest gross price. If your facility needs work, has lagging operations, or you simply prioritize speed and confidentiality over a public bidding war, a direct buyer is the superior path.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Will my competitors find out I&apos;m selling?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Not until the deal is closed. The advantage of a direct sale is absolute discretion. There are no &quot;for sale&quot; signs, no public listing details, and no blast emails alerting the market or your tenants.
              </p>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA SECTION */}
        <section className="bg-[#111827] text-white p-12 rounded-sm text-center shadow-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Facility?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you are navigating management fatigue or capital pressure and want to explore a quiet exit, reach out to begin a straightforward conversation.
          </p>
          <Link href="https://www.xitsource.com/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors">
            Request Confidential Conversation
          </Link>
        </section>

        {/* COMPLIANCE / FOOTER NOTE */}
        <section className="pt-8 text-center text-sm text-[#333333]/80 border-t border-gray-200">
          <p className="mb-4 text-xs font-bold tracking-widest uppercase">Direct Acquisition Guidelines</p>
          <p className="max-w-3xl mx-auto leading-relaxed text-xs opacity-75">
            XitSource operates as a direct buyer of commercial and residential assets. We are not a broker. All offers and timelines are subject to mutual agreement and operational due diligence. We do not make guaranteed claims regarding real estate values. CCPA/CPRA Compliant.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
             <Link href="/industries/laundromat" className="hover:text-[#52D017] transition-colors">Laundromats</Link>
             <span>•</span>
             <Link href="/industries/rv-parks" className="hover:text-[#52D017] transition-colors">RV Parks</Link>
             <span>•</span>
             <Link href="/industries/raw-land" className="hover:text-[#52D017] transition-colors">Raw Land</Link>
             <span>•</span>
             <Link href="/industries/residential-homes" className="hover:text-[#52D017] transition-colors">Residential</Link>
          </div>
        </section>

      </div>
    </div>
  );
}
