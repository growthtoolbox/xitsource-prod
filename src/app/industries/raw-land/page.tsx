"use client";

import React from 'react';
import Link from 'next/link';

export default function RawLandPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Backlink */}
        <Link href="/#subsidiaries" className="inline-flex items-center gap-2 text-sm font-semibold text-[#111827] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
          <span>←</span> Return to Partnership Hub
        </Link>

        {/* Page Header */}
        <div className="mb-16 border-b border-gray-200 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
            Sector Overview
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111827] mb-6">
            Raw Land Development
          </h1>
          <p className="text-xl text-[#111827] leading-relaxed">
            Vision for entitlement and development from South Lake Tahoe, CA to the Valley.
          </p>
        </div>

        {/* Three-Point Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="md:col-span-2 h-64 md:h-[400px] w-full overflow-hidden rounded-sm relative group">
             <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" alt="High-yield investment property in Sacramento, Northern California" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:h-[400px]">
             <div className="h-32 md:h-[192px] w-full overflow-hidden rounded-sm relative group">
               <img src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&q=80&w=600" alt="High-yield investment property detail in Sacramento, Northern California" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="h-32 md:h-[192px] w-full overflow-hidden rounded-sm relative group">
               <img src="https://images.unsplash.com/photo-1533575975618-f2b7a956beeb?auto=format&fit=crop&q=80&w=600" alt="High-yield investment interior detail in Sacramento, Northern California" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-8 text-[#111827] leading-relaxed text-lg">
            <p>
              Transforming undeveloped parcels into strategic commercial and residential real estate through deep local expertise and methodical entitlement strategies.
            </p>

            {/* Callout Box */}
            <div className="mt-16 bg-white border-l-4 border-[#52D017] p-8 rounded-r-sm">
              <h4 className="text-sm font-bold tracking-widest text-[#52D017] uppercase mb-4">
                The XitSource Perspective
              </h4>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
                  <span className="text-sm text-[#111827]/80 font-bold">RP</span>
                </div>
                <div>
                  <div className="font-bold text-[#111827]">Ryan Peterson</div>
                  <div className="text-xs text-[#111827]/70 uppercase tracking-widest">Lead Consultant - South Lake Tahoe, CA</div>
                </div>
              </div>
              <blockquote className="text-base italic text-[#111827] leading-relaxed">
                &quot;Based in South Lake Tahoe. Specializes in real estate acquisitions, with a particular emphasis on residential properties. He possesses expertise in generating revenue-generating assets, encompassing mobile home parks, RV parks, laundromats, co-living spaces, and raw land development.&quot;
              </blockquote>
            </div>
          </div>

          {/* Sidebar Data */}
          <div className="md:col-span-1 border-t md:border-t-0 md:border-l border-gray-200 pt-12 md:pt-0 md:pl-12">
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link href="/sell" className="block w-full py-4 px-6 bg-[#52D017]/10 border border-[#52D017] text-[#52D017] font-semibold text-center rounded-sm hover:bg-[#52D017] hover:text-[#111827] transition-colors">
                Start a Confidential Conversation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
