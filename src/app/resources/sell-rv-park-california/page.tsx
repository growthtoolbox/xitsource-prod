"use client";

import React from 'react';
import Link from 'next/link';

export default function SellRVParkGuide() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl">
      <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
        <span>←</span> Back to Resources
      </Link>
      
      <div className="mb-16 border-b border-[#1a1a1a] pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
          Transition Guide
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-200 mb-6">
          How to Sell an RV Park in California
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          A comprehensive look at valuing, preparing, and transitioning a mobile home or RV community in the NorCal market.
        </p>
      </div>

      <div className="prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-p:text-slate-300">
        <p>
          RV parks and mobile home communities are some of the most highly sought-after commercial real estate assets in California. For owners looking to transition, understanding how private buyers evaluate these assets is the key to maximizing exit value without the friction of a public listing.
        </p>
        
        <h3 className="text-2xl font-bold text-slate-200 mt-12 mb-4">1. Capital Expenditure (CapEx) & Deferred Maintenance</h3>
        <p>
          Before entering negotiations, it is critical to address the physical reality of the park&apos;s infrastructure. Have the electrical pedestals been updated to 50-amp service? What is the condition of the water and sewer systems? Private buyers, like XitSource, model these costs into our valuation immediately. Transparency regarding deferred maintenance builds trust and prevents deals from stalling during due diligence.
        </p>

        <h3 className="text-2xl font-bold text-slate-200 mt-12 mb-4">2. Long-Term Occupancy vs. Transient Income</h3>
        <p>
          Your revenue mix fundamentally changes how the asset is valued. Parks with a high percentage of long-term tenants often trade on multi-family commercial metrics (stable cap rates), whereas transient, nightly-rental parks are evaluated closer to hospitality assets. Organizing your trailing 12-month P&L to clearly demarcate these revenue streams allows buyers to underwrite the deal with certainty.
        </p>

        <h3 className="text-2xl font-bold text-slate-200 mt-12 mb-4">3. The Off-Market Advantage</h3>
        <p>
          Putting an RV park on the public market can create unnecessary anxiety among long-term residents and staff. Off-market, direct-to-buyer acquisitions ensure operational continuity. There are no &quot;for sale&quot; signs, no disrupted rent collections, and, crucially, no 6-10% broker fees eating into your equity.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-[#1a1a1a]">
        <Link href="/sell" className="inline-block px-8 py-4 bg-[#52D017] text-black font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-[#52D017]/10">
          Request a Confidential Valuation
        </Link>
      </div>
    </div>
  );
}
