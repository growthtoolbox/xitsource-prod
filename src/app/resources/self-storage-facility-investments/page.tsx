"use client";

import React from 'react';
import Link from 'next/link';

export default function SelfStorageFacilityInvestmentsPage() {
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
          Scale & Security: Selling Your NorCal Storage Asset
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          &quot;Storage value is no longer just about square footage; it&apos;s about automation and management software integration.&quot;
        </p>
      </div>

      <div className="prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-p:text-slate-300">
        <p>
          The Self-Storage industry has evolved from a sleepy real estate play into a highly optimized, digitally managed asset class. Institutional capital and private acquirers are aggressively expanding their portfolios across Northern California. To secure a high exit multiple, owners must showcase that their facility is ready to merge into modern management systems.
        </p>
        
        <h3 className="text-2xl font-bold text-slate-200 mt-12 mb-4">Contactless Entry & Automation</h3>
        <p>
          Facilities that still rely on padlocks down the alley and a full-time, on-site manager are undervalued compared to automated competitors. Transitioning gating infrastructure to Bluetooth or keypad-based &quot;contactless entry&quot; significantly reduces payroll overhead. Buyers pay a premium for properties where this heavy lifting has already been completed.
        </p>

        <h3 className="text-2xl font-bold text-slate-200 mt-12 mb-4">Cloud Management Integration</h3>
        <p>
          A buyer&apos;s primary goal post-acquisition is integrating your tenant data into their central dashboard. If your facility runs on handwritten ledgers or outdated desktop software, it introduces massive transition risk. Adopting standard cloud management software (like SiteLink or Storable) proves your occupancy rates are accurate and makes your asset highly liquid on the private market.
        </p>

        <h3 className="text-2xl font-bold text-slate-200 mt-12 mb-4">Cap Rate Compression</h3>
        <p>
          By removing operational friction points—updating software, automating gates, and streamlining your dynamic pricing models—you inherently compress the capitalization (cap) rate that buyers use to value your asset. A lower perceived risk profile directly translates to a higher acquisition payout.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-[#1a1a1a]">
        <Link href="/sell" className="inline-block px-8 py-4 bg-[#52D017] text-black font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-[#52D017]/10">
          Connect with Acquisitions Team
        </Link>
      </div>
    </div>
  );
}
