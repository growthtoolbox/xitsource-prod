"use client";

import React from 'react';
import Link from 'next/link';

export default function SellRVParkGuide() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl bg-white text-[#111827]">
      <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-[#111827] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
        <span>←</span> Back to Resources
      </Link>
      
      <div className="mb-16 border-b border-gray-200 pb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111827] mb-6">
          A National Partner for RV Park & Campground Transitions.
        </h1>
        <p className="text-xl text-[#111827] leading-relaxed">
          Providing owners across the U.S. with a discreet, principal-to-principal exit strategy.
        </p>
      </div>

      {/* Three-Point Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="md:col-span-2 h-64 md:h-[400px] w-full overflow-hidden rounded-sm relative group">
           <img src="/assets/resources/rv-park/rv-park-hero.webp" alt="Community stability" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
           <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:h-[400px]">
           <div className="h-32 md:h-[188px] w-full overflow-hidden rounded-sm relative group">
             <img src="/assets/resources/rv-park/rv-pad-detail.webp" alt="Operational integrity" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
           </div>
           <div className="h-32 md:h-[188px] w-full overflow-hidden rounded-sm relative group">
             <img src="/assets/resources/rv-park/maintenance-detail.webp" alt="Community stability and trust" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
           </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none prose-p:leading-relaxed prose-p:text-[#111827]">
        <p>
          RV parks and mobile home communities are some of the most highly sought-after commercial real estate assets in California. For owners looking to transition, understanding how private buyers evaluate these assets is the key to maximizing exit value without the friction of a public listing.
        </p>
        
        <h3 className="text-2xl font-bold text-[#111827] mt-12 mb-4">1. Capital Expenditure (CapEx) & Deferred Maintenance</h3>
        <p>
          Before entering negotiations, it is critical to address the physical reality of the park&apos;s infrastructure. Have the electrical pedestals been updated to 50-amp service? What is the condition of the water and sewer systems? Private buyers, like XitSource, model these costs into our valuation immediately. Transparency regarding deferred maintenance builds trust and prevents deals from stalling during due diligence.
        </p>

        <h3 className="text-2xl font-bold text-[#111827] mt-12 mb-4">2. Long-Term Occupancy vs. Transient Income</h3>
        <p>
          Your revenue mix fundamentally changes how the asset is valued. Parks with a high percentage of long-term tenants often trade on multi-family commercial metrics (stable cap rates), whereas transient, nightly-rental parks are evaluated closer to hospitality assets. Organizing your trailing 12-month P&L to clearly demarcate these revenue streams allows buyers to underwrite the deal with certainty.
        </p>

        <h3 className="text-2xl font-bold text-[#111827] mt-12 mb-4">3. The Off-Market Advantage</h3>
        <p>
          Putting an RV park on the public market can create unnecessary anxiety among long-term residents and staff. Off-market, direct-to-buyer acquisitions ensure operational continuity. There are no &quot;for sale&quot; signs, no disrupted rent collections, and, crucially, no 6-10% broker fees eating into your equity.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-gray-200">
        <Link href="/sell" className="inline-block px-8 py-4 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-sm/10">
          Request Confidential Conversation
        </Link>
      </div>
    </div>
  );
}
