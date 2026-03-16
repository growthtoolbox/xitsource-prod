"use client";

import React from 'react';
import Link from 'next/link';

export default function LaundromatGuidePage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl bg-white text-slate-900">
      <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
        <span>←</span> Back to Resources
      </Link>
      
      <div className="mb-16 border-b border-gray-200 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
          Transition Guide
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Exiting a Laundromat Business: A Step-by-Step Guide
        </h1>
        <p className="text-xl text-slate-900 leading-relaxed">
          Understanding equipment depreciation, long-term leases, and cash-flow multiples for owner-operated facilities.
        </p>
      </div>

      <div className="prose prose-lg max-w-none prose-p:leading-relaxed prose-p:text-slate-900">
        <p>
          Laundromats are prized for their resistance to economic downturns and steady cash flow. However, selling a laundromat requires preparing specific operational documentation that is unique to the coin-laundry and card-operated space. If you are an owner in Northern California considering a transition, here is what strategic buyers evaluate first.
        </p>
        
        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. The Lease is the Asset</h3>
        <p>
          If you don&apos;t own the real estate, your lease terms dictate the viable future of the business. A buyer cannot secure financing or justify a high multiple if there are only 3 years left on the lease with no extension options. A healthy laundromat transaction typically requires a lease (or guaranteed options) extending 10 to 15 years.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Equipment Age & Utility Analysis</h3>
        <p>
          Washers and dryers have a finite lifespan. Buyers will evaluate the age, brand, and maintenance history of your machinery. Because utility costs (water, gas, electricity) represent the largest variable expense, modern, high-efficiency equipment commands a premium valuation. Be prepared to provide historical utility bills so buyers can verify usage ratios against reported income.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Proving the Cash</h3>
        <p>
          In a cash-heavy business, accurate water-usage analyses and distinct bank deposit records are essential. Card systems and digital payment gateways have made proving revenue significantly easier, but if your store is heavily coin-operated, ensuring your tax returns align closely with your actual operational cash flow is necessary for a smooth, private transition.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-gray-200">
        <Link href="/sell" className="inline-block px-8 py-4 bg-[#52D017] text-slate-900 font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-sm/10">
          Request a Confidential Conversation
        </Link>
      </div>
    </div>
  );
}
