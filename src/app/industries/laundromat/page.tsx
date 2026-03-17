import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sell Your Laundromat As-Is | Direct Laundromat Buyer | XitSource",
  description: "Sell your laundromat directly. We buy older and underperforming laundromats nationwide. No broker fees, no required equipment upgrades, and strict confidentiality.",
};

export default function LaundromatPage() {
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
            Sell Your Laundromat Without Upgrades, Delays, or Broker Fees
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#333333]/90 leading-relaxed mb-10 border-l-4 border-l-[#52D017] pl-6">
            Direct, confidential sales nationwide.
          </p>
          <p className="text-lg text-[#333333]/80 leading-relaxed max-w-3xl mb-10">
            We purchase laundromats as-is, including older locations and underperforming stores. Exit your lease and eliminate equipment maintenance without the uncertainty of the public market.
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
          <img src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2072" alt="Sell Your Laundromat As-Is" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        {/* 2. DIRECT ANSWER BLOCK (AEO) */}
        <section className="bg-white p-8 md:p-10 border border-gray-200 shadow-xl shadow-black/5 rounded-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
          <h2 className="text-2xl font-bold text-[#333333] mb-6">Can You Sell a Laundromat As-Is?</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            Yes. A direct sale allows you to sell the laundromat exactly as it operates today. You do not have to replace out-of-order machines, update the payment systems to accept credit cards, or renovate the interior before selling. We acquire the business and the assets in their current condition, absorbing the capital expenditure required to modernize the store.
          </p>
        </section>

        {/* 3. INTRO SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-8">A Direct Option for Laundromat Owners Ready to Move On</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed mb-6">
            Laundromats are frequently marketed as &quot;turnkey passive income.&quot; Any actual operator knows the reality involves constant machine repairs, unpredictable utility bills, managing coin collections, and dealing with disgruntled customers when a washer fails mid-cycle.
          </p>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            When machines near the end of their useful life, the replacement costs can be staggering, quickly wiping out years of profit. Instead of taking on massive debt to re-tool the store or signing another suffocating commercial lease, a direct sale provides a clean exit. We step in, take over the equipment liabilities, and allow you to move your capital and focus elsewhere.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* 4. SITUATIONS SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Types of Laundromat Situations We Work With</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Stores with aging, out-of-order equipment</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Coin-only stores needing system modernization</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Facilities facing steep utility cost increases</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Laundromats with declining net margins</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Operators dealing with commercial lease issues</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Absentee owners tired of remote management</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Mom-and-pop operations with minimal bookkeeping</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Multi-unit portfolios or standalone operations</span>
             </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        {/* 5. WHY OWNERS SELL */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Why Laundromat Owners Decide to Sell</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Equipment Fatigue</h3>
               <p className="text-[#333333]/80">The constant cycle of servicing old dryers, unjamming coin slides, and paying exorbitant parts prices has drained the joy out of the business.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Operational Demands</h3>
               <p className="text-[#333333]/80">Finding reliable attendants, managing complaints, and handling late-night security calls makes this business anything but hands-off.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Rising Costs</h3>
               <p className="text-[#333333]/80">Water tap fees, sewer rates, and electricity prices continue to climb, squeezing your net profit margin to unsustainable levels.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Time Commitment</h3>
               <p className="text-[#333333]/80">You want your weekends back. The required daily collections, cleaning, and maintenance take up time you&apos;d rather spend elsewhere.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Lease Pressure</h3>
               <p className="text-[#333333]/80">Your existing commercial lease is coming up for renewal, or you have a difficult landlord, and you do not want to lock in for another long, personally-guaranteed term.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Exit Timing</h3>
               <p className="text-[#333333]/80">You recognize that investing $200k+ into new equipment doesn&apos;t align with your 3-year retirement horizon. Selling now locks in your current equity.</p>
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
                <p className="text-lg text-[#333333]/80 leading-relaxed">Reach out confidentially to discuss your store&apos;s location, the age of the equipment mix, current lease terms, and your timeline for an exit.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Review</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Under a strict NDA, we analyze your utility bills, trailing revenue, and equipment list to structure a fair valuation based on the current physical asset.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Offer</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">We present a direct purchase offer. No broker fees, no demands to replace broken dryers, and no requirements to implement card readers before selling.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Close</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">We coordinate with the landlord to handle the lease assignment smoothly, complete the asset transfer, and execute the closing on your timeline.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 7. COMPARISON SECTION */}
        <section className="bg-[#f9fafb] p-8 md:p-12 border border-gray-200 rounded-sm">
          <h2 className="text-3xl font-bold text-[#333333] mb-8 text-center">Why Some Owners Skip the Broker Route</h2>
          <p className="text-lg text-[#333333]/80 text-center max-w-2xl mx-auto mb-10">
             Business brokers commonly push sellers to replace broken equipment and force massive operational changes before they will even list the store. We buy the store as it stands.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white p-6 border border-gray-200 rounded-sm">
                <h3 className="text-xl font-bold text-red-700 mb-4 border-b border-gray-100 pb-2">Traditional Broker Route</h3>
                <ul className="space-y-3">
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Detailed public financial marketing that competitors can see.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Brokers push you to fix all out-of-order machines to justify their fee.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Tire-kickers disrupting your store with &quot;secret shopping&quot; tours.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> High risk of the buyer failing to secure SBA financing.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> You lose 10% of your business equity to broker commissions.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> The process routinely takes 6 to 12 months.</li>
                </ul>
             </div>
             <div className="bg-white p-6 border border-[#52D017]/30 rounded-sm shadow-sm md:transform md:scale-105 relative z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
                <h3 className="text-xl font-bold text-[#111827] mb-4 border-b border-gray-100 pb-2">Direct Sale to XitSource</h3>
                <ul className="space-y-3">
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Strictly confidential review. Your attendants and competitors won&apos;t know.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Sell explicitly &quot;as-is&quot; with your broken machines left perfectly alone.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Direct funding without relying on slow retail bank approvals.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Direct, honest conversation with the actual acquiring business.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Keep your equity. You pay exactly zero broker commissions.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> A predictable closing timeline that works with your lease dates.</li>
                </ul>
             </div>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Laundromat Seller FAQs</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do you buy laundromats with mostly older, coin-only equipment?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. We frequently acquire older, first-generation stores. We factor the age and depreciation of the asset mix into our underwriting. You do not need to install modern card readers or new washers to sell the business to us.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">What happens if my landlord won&apos;t assign the commercial lease?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Lease assignment is a critical part of the transaction. We have extensive experience negotiating commercial leases and handling landlord introductions to secure either an assignment or a fresh long-term lease as a contingency of closing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Does selling &quot;as-is&quot; mean I get a lowball offer?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                No. Our offers are grounded in the verifiable data of your store&apos;s performance and location. By selling direct, you retain the 10% cash you would normally lose to a broker, which often makes the net payout highly competitive against a drawn-out listed sale.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do you require perfect accounting software records?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Many independent laundromat owners operate extensively in cash and use basic ledger keeping. While we need verifiable utility bills (water/gas/electric) to triangulate usage against claimed revenue, we are accustomed to evaluating cash-heavy operations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">What if my store is barely breaking even due to water costs?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Many operators get trapped by rising water rates on old, inefficient top-load machines. We acquire underperforming stores because we have the capital specifically designated to re-tool operations to modern utility efficiencies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Will my attendants or manager lose their jobs?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                In most cases, we prefer to retain reliable staff. Institutional knowledge is valuable, and good attendants who know your long-term customers help ensure a smooth transition.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Why shouldn&apos;t I just list my laundromat with a commercial broker?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                If you operate a fully re-tooled, mega-store pulling massive EBITDA, a specialized laundromat broker could be your best option. However, if your store is older, tired, or you value privacy and speed over a highly public 12-month marketing process, a direct buyer is the right path.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Will my competitors find out I&apos;m selling?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Only after the deal is done. We operate under strict NDAs and value discretion. There are no public marketplace listings, so rival operators won&apos;t be poking through your financials disguised as interested buyers.
              </p>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA SECTION */}
        <section className="bg-[#111827] text-white p-12 rounded-sm text-center shadow-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Laundromat?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you are tired of equipment repairs, rising utility costs, and the daily grind of the coin laundry business, reach out for a clear perspective on your options.
          </p>
          <Link href="https://www.xitsource.com/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors">
            Request Confidential Conversation
          </Link>
        </section>

        {/* COMPLIANCE / FOOTER NOTE */}
        <section className="pt-8 text-center text-sm text-[#333333]/80 border-t border-gray-200">
          <p className="mb-4 text-xs font-bold tracking-widest uppercase">Direct Acquisition Guidelines</p>
          <p className="max-w-3xl mx-auto leading-relaxed text-xs opacity-75">
            XitSource operates as a direct buyer of commercial businesses and real estate assets. We are not a broker. All offers and timelines are subject to mutual agreement, lease assignment approvals, and operational due diligence. We do not make guaranteed claims regarding business valuations. CCPA/CPRA Compliant.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
             <Link href="/industries/raw-land" className="hover:text-[#52D017] transition-colors">Raw Land</Link>
             <span>•</span>
             <Link href="/industries/rv-parks" className="hover:text-[#52D017] transition-colors">RV Parks</Link>
             <span>•</span>
             <Link href="/industries/self-storage" className="hover:text-[#52D017] transition-colors">Self Storage</Link>
             <span>•</span>
             <Link href="/industries/residential-homes" className="hover:text-[#52D017] transition-colors">Residential</Link>
          </div>
        </section>

      </div>
    </div>
  );
}
