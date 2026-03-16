"use client";

import React from 'react';
import Link from 'next/link';

export default function RawLandPerspectivePage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl bg-white text-slate-900">
      <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
        <span>←</span> Back to Resources
      </Link>
      
      <div className="mb-16 border-b border-gray-200 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
          Development Perspective
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Preparing Raw Land for Development Sale
        </h1>
        <p className="text-xl text-slate-900 leading-relaxed">
          Strategic steps to navigate entitlement risks and position your parcel for maximum acquisition value in California.
        </p>
      </div>

      <div className="prose prose-lg max-w-none prose-p:leading-relaxed prose-p:text-slate-900">
        <p>
          Undeveloped land in Northern California holds immense potential, but unlocking its value requires navigating one of the most complex regulatory and zoning environments in the country. At XitSource, we evaluate raw parcels based on their highest and best use, focusing heavily on what it takes to bring a project to life.
        </p>
        
        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. The Entitlement Risk Spectrum</h3>
        <p>
          Value in land is a direct reflection of &quot;entitlement risk.&quot; An un-entitled parcel of dirt trades at a massive discount compared to a &quot;shovel-ready&quot; lot with approved tentative maps, CEQA clearances, and utility will-serve letters. If you are preparing to sell, even minor preliminary work—such as conducting a Phase 1 Environmental Site Assessment or a biological survey—can significantly de-risk the asset for a buyer and increase your exit multiplier.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Utility Infrastructure and Access</h3>
        <p>
          A parcel is only as valuable as its ability to be serviced. Before marketing your land, clarify the exact locations of municipal water, sewer, and power tie-ins. If the land requires significant off-site improvements (e.g., bringing a sewer line a mile down the road), the capital required for those improvements will be deducted dollar-for-dollar from the land&apos;s valuation.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Strategic Partnerships vs. Outright Sales</h3>
        <p>
          Often, land owners are sitting on multi-generational equity but lack the capital to develop it themselves. In these scenarios, off-market transactions are ideal. XitSource engages directly with owners to explore flexible acquisition structures, ensuring the legacy of the land is respected while executing on its development potential.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-gray-200">
        <Link href="/sell" className="inline-block px-8 py-4 bg-[#52D017] text-slate-900 font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-sm/10">
          Request a Confidential Parcel Review
        </Link>
      </div>
    </div>
  );
}
