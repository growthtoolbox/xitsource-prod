"use client";

import React from 'react';
import Link from 'next/link';

export default function SelfStorageFacilityInvestmentsPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl bg-white text-slate-900">
      <Link href="/#subsidiaries" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
        <span>←</span> Back to Industries
      </Link>
      
      <div className="mb-16 border-b border-gray-200 pb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Thoughtful Transitions for Self-Storage Owners.
        </h1>
        <p className="text-xl text-slate-900 leading-relaxed">
          Specializing in the acquisition of storage portfolios with a focus on long-term stewardship and professional management.
        </p>
      </div>

      {/* Three-Point Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="md:col-span-2 h-64 md:h-[400px] w-full overflow-hidden rounded-sm relative group">
           <img src="/assets/resources/storage/storage-facility-hero.webp" alt="Community stability" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
           <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:h-[400px]">
           <div className="h-32 md:h-[188px] w-full overflow-hidden rounded-sm relative group">
             <img src="/assets/resources/storage/storage-management-detail.webp" alt="Operational integrity" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
           </div>
           <div className="h-32 md:h-[188px] w-full overflow-hidden rounded-sm relative group">
             <img src="/assets/resources/storage/storage-corridor-detail.webp" alt="Maintaining facility excellence" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
           </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none prose-p:leading-relaxed prose-p:text-slate-900">
        <p>
          The Self-Storage industry has evolved from a sleepy real estate play into a highly optimized, digitally managed asset class. Institutional capital and private acquirers are aggressively expanding their portfolios nationwide. To ensure a smooth transition, owners must showcase that their facility is maintaining facility excellence.
        </p>
        
        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Contactless Entry & Automation</h3>
        <p>
          Facilities that still rely on padlocks down the alley and a full-time, on-site manager are undervalued compared to automated competitors. Transitioning gating infrastructure to Bluetooth or keypad-based &quot;contactless entry&quot; significantly reduces payroll overhead. Buyers pay a premium for properties where this heavy lifting has already been completed.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Cloud Management Integration</h3>
        <p>
          A buyer&apos;s primary goal post-acquisition is integrating your tenant data into their central dashboard. If your facility runs on handwritten ledgers or outdated desktop software, it introduces massive transition risk. Adopting standard cloud management software (like SiteLink or Storable) proves your occupancy rates are accurate and makes your asset highly liquid on the private market.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Cap Rate Compression</h3>
        <p>
          By removing operational friction points—updating software, automating gates, and streamlining your dynamic pricing models—you inherently compress the capitalization (cap) rate that buyers use to value your asset. A lower perceived risk profile directly translates to a higher acquisition payout.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-gray-200">
        <Link href="/sell" className="inline-block px-8 py-4 bg-[#52D017] text-slate-900 font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-sm/10">
          Request Confidential Conversation
        </Link>
      </div>
    </div>
  );
}
