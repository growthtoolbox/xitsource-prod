import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sell Your Land As-Is | Direct Land Buyer Nationwide",
  description: "Sell your vacant or raw land directly. We buy inherited, rural, and difficult land parcels nationwide. No broker fees, no listings, no guesswork.",
};

export default function RawLandPage() {
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
            Sell Your Land Without Listings, Delays, or Guesswork
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#333333]/90 leading-relaxed mb-10 border-l-4 border-l-[#52D017] pl-6">
            Direct, confidential sales nationwide.
          </p>
          <p className="text-lg text-[#333333]/80 leading-relaxed max-w-3xl mb-10">
            We purchase raw and vacant land as-is, including rural, inherited, and difficult parcels. Stop paying property taxes on land you aren&apos;t using.
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
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064" alt="Sell Your Raw Land As-Is" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        {/* 2. DIRECT ANSWER BLOCK (AEO) */}
        <section className="bg-white p-8 md:p-10 border border-gray-200 shadow-xl shadow-black/5 rounded-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
          <h2 className="text-2xl font-bold text-[#333333] mb-6">Can You Sell Land As-Is?</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            Yes. A direct sale allows you to sell vacant or raw land exactly as it sits today. You do not need to clear timber, survey the property lines, pull utilities, or secure zoning variances before exiting. We evaluate the parcel based on its current, unaltered condition and purchase it directly without public marketing phases.
          </p>
        </section>

        {/* 3. INTRO SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-8">A Simple Exit for Land That Is Sitting Idle</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed mb-6">
            Owning raw land is often romanticized, but the reality is frequently different. If the land is just sitting there, it generates zero income while quietly draining your resources through annual property taxes, HOA fees, or liability concerns.
          </p>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            Many landowners hold onto parcels for years because they don&apos;t know what it&apos;s worth, how to develop it, or how to sell a property that lacks an address. We remove the uncertainty. We provide a straightforward, cash-based exit that allows you to liquidate the asset cleanly and stop throwing money at an unused property.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* 4. SITUATIONS SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Common Land Situations We Work With</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Inherited land with multiple heirs</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Parcels located in other states</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Failed or abandoned development plans</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Land with severe access or utility issues</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Delinquent property tax situations</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Rural, off-grid, or heavily timbered acreage</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Unwanted agricultural or farmland</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Zoning restrictions or strange topography</span>
             </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        {/* 5. WHY OWNERS SELL */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Why Owners Decide to Sell Land</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">No Income</h3>
               <p className="text-[#333333]/80">Unlike residential rentals, raw land produces exactly zero cash flow while constantly demanding money for annual property taxes and assessments.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Lack of Clarity</h3>
               <p className="text-[#333333]/80">You don&apos;t live near the land, don&apos;t know what it&apos;s zoned for, and don&apos;t want to spend the money required to figure out its highest and best use.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Holding Fatigue</h3>
               <p className="text-[#333333]/80">You bought the land years ago with dreams of building a cabin, retiring, or developing it. Those plans have changed, but you are still holding the asset.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Inherited Property</h3>
               <p className="text-[#333333]/80">The land was passed down through a family trust or probate. You and your siblings want to cleanly split the asset&apos;s value rather than co-owning dirt.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Access Issues</h3>
               <p className="text-[#333333]/80">The land is landlocked, lacks a paved road, or requires expensive utility lines (water, sewer, power) that you cannot afford to trench.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Changing Priorities</h3>
               <p className="text-[#333333]/80">You need liquidity. Converting a dormant asset into cash allows you to pay off debt, fund a business, or invest in an income-producing asset instead.</p>
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
                <p className="text-lg text-[#333333]/80 leading-relaxed">Reach out with your property details (APN or Parcel Number if you have it). We will have a strictly confidential review of your situation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Review</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">We evaluate the parcel remotely using GIS data, analyzing the topography, zoning, road access, and recent market comparables.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Offer</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">We provide a clear offer to purchase the property entirely &quot;as-is&quot;. No complicated contingencies forcing you to guarantee soil quality or utility access.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Close</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">We open escrow with a local, reputable title company. You review the final paperwork, sign remotely, and we fund the transaction.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 7. COMPARISON SECTION */}
        <section className="bg-[#f9fafb] p-8 md:p-12 border border-gray-200 rounded-sm">
          <h2 className="text-3xl font-bold text-[#333333] mb-8 text-center">Why Some Landowners Skip the Traditional Market</h2>
          <p className="text-lg text-[#333333]/80 text-center max-w-2xl mx-auto mb-10">
             The traditional real estate market heavily favors houses. Selling vacant land through a traditional brokerage is notoriously slow and unreliable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white p-6 border border-gray-200 rounded-sm">
                <h3 className="text-xl font-bold text-red-700 mb-4 border-b border-gray-100 pb-2">Traditional Real Estate Route</h3>
                <ul className="space-y-3">
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Vacant land listings often sit active for 6 to 12+ months.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Agents prioritize high-value homes over lower-priced dirt.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Retail buyers demand expensive perc tests and fresh surveys.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Retail land loans frequently fall apart at the last minute.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> You lose up to 10% on land-specific broker commissions.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> You continue paying property taxes while you wait.</li>
                </ul>
             </div>
             <div className="bg-white p-6 border border-[#52D017]/30 rounded-sm shadow-sm md:transform md:scale-105 relative z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
                <h3 className="text-xl font-bold text-[#111827] mb-4 border-b border-gray-100 pb-2">Direct Sale to XitSource</h3>
                <ul className="space-y-3">
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> We absorb the risk of the land&apos;s topography and condition.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Direct funding. We don&apos;t rely on retail bank loan contingencies.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> No demands that you pay thousands for new boundary surveys.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Direct conversation. We communicate cleanly and professionally.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Keep your equity. You pay exactly zero agent commissions.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Stop the tax bleeding with a defined closing date.</li>
                </ul>
             </div>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Land Seller FAQs</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Does selling &quot;as-is&quot; really mean I don&apos;t have to do anything?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. You do not need to clear brush, mark the property lines, conduct soil percolation tests, or clean up any debris. We evaluate the land in its current, raw state.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Will you buy land if it lacks utilities or road access?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. We frequently purchase &quot;off-grid&quot; properties, landlocked parcels, or lots that lack municipal water, sewer, and power infrastructure. We factor these challenges into our evaluation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">What if I owe back property taxes?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                We handle delinquent taxes all the time. The owed amount is simply satisfied out of the final purchase proceeds at closing by the title company. You do not have to write a check to the county first to sell the property.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Can I sell land I inherited if it&apos;s out of state?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. You do not need to travel to the property to sell it. We coordinate remote, notarized closings through our title partners so you can sell the asset securely from your own home.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">How do you determine the value of raw land?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                We use county GIS data, recent comparative sales, topographical mapping, and zoning codes to determine the property&apos;s current market viability and construct a fair, direct offer.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Is it faster to sell to a direct buyer than list with a broker?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Drastically. Raw land is highly illiquid on the retail market. A successful traditional sale often requires months of marketing followed by a 60-day loan period. A direct sale with us bypasses marketing entirely and aims for a clear, predictable close.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do I have to pay any fees or commissions?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                No. Because we are direct buyers, there are no 6% to 10% agent broker commissions. We present a clear offer, and what you see is what you are netting (minus any taxes or liens you currently owe).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">What kind of land do you specialize in?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                We are interested in vacant lots, rural acreage, development sites, timberland, unwanted farm plots, and recreational land across the United States. If it is sitting idle, we are open to a conversation.
              </p>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA SECTION */}
        <section className="bg-[#111827] text-white p-12 rounded-sm text-center shadow-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Move On From Your Land?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop paying taxes on a property you aren&apos;t using. Reach out today for a confidential, no-obligation conversation about your parcel.
          </p>
          <Link href="https://www.xitsource.com/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors">
            Request Confidential Conversation
          </Link>
        </section>

        {/* COMPLIANCE / FOOTER NOTE */}
        <section className="pt-8 text-center text-sm text-[#333333]/80 border-t border-gray-200">
          <p className="mb-4 text-xs font-bold tracking-widest uppercase">Direct Acquisition Guidelines</p>
          <p className="max-w-3xl mx-auto leading-relaxed text-xs opacity-75">
            XitSource operates as a direct buyer of real estate assets. We are not a broker. All offers and timelines are subject to mutual agreement and operational due diligence. We do not make guaranteed claims regarding real estate values. CCPA/CPRA Compliant.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
             <Link href="/industries/laundromat" className="hover:text-[#52D017] transition-colors">Laundromats</Link>
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
