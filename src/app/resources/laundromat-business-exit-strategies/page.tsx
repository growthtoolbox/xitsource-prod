"use client";

import React from 'react';
import Link from 'next/link';

export default function LaundromatBusinessExitStrategiesPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl">
      <Link href="/#subsidiaries" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
        <span>←</span> Back to Industries
      </Link>
      
      <div className="mb-16 border-b border-[#1a1a1a] pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
          Acquisition Pillar
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-200 mb-6">
          The Clean Exit: Maximizing Your Laundromat&apos;s Sales Multiple
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          &quot;Laundromats are prized for their cash-flow, but buyers look for &apos;Zombie-Mat&apos; potential—the ability to modernize and scale.&quot;
        </p>
      </div>

      <div className="prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-p:text-slate-300">
        <p>
          Laundromats are cornerstone community assets. Their resistance to economic downturns makes them highly desirable acquisition targets in Northern California. But transitioning ownership of a heavy-utility business requires more than just proving your gross revenue. 
        </p>
        
        <h3 className="text-2xl font-bold text-slate-200 mt-12 mb-4">Lease Control is Everything</h3>
        <p>
          If you do not own the real estate beneath your laundromat, your lease is effectively your business. Buyers cannot secure financing without it, and private acquirers like XitSource will not pay a premium multiple if you are on the tail end of your term. A 10-year lease extension (or significant options) is practically non-negotiable for a top-of-market valuation. Negotiate this before you decide to sell.
        </p>

        <h3 className="text-2xl font-bold text-slate-200 mt-12 mb-4">The Equipment Audit</h3>
        <p>
          The condition of your washers, dryers, and boilers dictates the immediate CapEx the buyer must deploy upon acquisition. Running aged equipment not only spikes your utility bills—harming your net income—but forces the buyer to discount the offer to afford replacements. A certified equipment audit showing maintenance logs and expected lifespans builds instant credibility.
        </p>

        <h3 className="text-2xl font-bold text-slate-200 mt-12 mb-4">Proving the Cash</h3>
        <p>
          Because laundromats deal heavily in coin and un-tracked transactions, closing the gap between actual net profit and documented tax returns is the hardest part of the sale. Transitioning to hybrid card systems or utilizing strict water-volume proxy analyses helps buyers confidently underwrite your true cash flow.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-[#1a1a1a]">
        <Link href="/sell" className="inline-block px-8 py-4 bg-[#52D017] text-black font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-[#52D017]/10">
          Request a Private Valuation
        </Link>
      </div>
    </div>
  );
}
