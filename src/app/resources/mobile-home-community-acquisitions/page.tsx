"use client";

import React from 'react';
import Link from 'next/link';

export default function MobileHomeCommunityAcquisitionsPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl bg-white text-slate-900">
      <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
        <span>←</span> Back to Industries
      </Link>
      
      <div className="mb-16 border-b border-gray-200 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
          Acquisition Pillar
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Community-First: Strategic Exits for Mobile Home Park Owners
        </h1>
        <p className="text-xl text-slate-900 leading-relaxed">
          &quot;Consistency in tenant-base and infrastructure stability are the primary drivers of MHC valuation in Northern California.&quot;
        </p>
      </div>

      {/* Three-Point Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="md:col-span-2 h-64 md:h-[400px] w-full overflow-hidden rounded-sm relative group">
           <img src="/assets/resources/mhc/mhc-community-hero.webp" alt="Aerial drone view of a sprawling, high-end manufactured home community in Northern California." className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
           <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:h-[400px]">
           <div className="h-32 md:h-[188px] w-full overflow-hidden rounded-sm relative group">
             <img src="/assets/resources/mhc/mhc-infrastructure-detail.webp" alt="Detail of a modern manufactured home lot with pristine concrete work and institutional utility pedestals." className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
           </div>
           <div className="h-32 md:h-[188px] w-full overflow-hidden rounded-sm relative group">
             <img src="/assets/resources/mhc/mhc-lifestyle-detail.webp" alt="Retired residents enjoying a luxury clubhouse patio with a gas fire pit at sunset." className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
           </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none prose-p:leading-relaxed prose-p:text-slate-900">
        <p>
          Mobile Home Communities (MHC) and RV Parks represent some of the most consistent yield-generating assets in the California commercial real estate sector. However, the exact valuation multiplier placed on your community by institutional and private buyers like XitSource depends heavily on the operational foundation you&apos;ve built.
        </p>
        
        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The Importance of Documentation</h3>
        <p>
          A community&apos;s value isn&apos;t just in its lot count; it is in the enforceability of its revenue. Buyers require clear, documented &quot;Park Rules&quot; signed by every tenant. Ambiguity creates legal risk, and risk decreases your exit multiple. Ensuring your leases and community guidelines are modernized and strictly enforced is step one to preparing for a sale.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Infrastructure & Utility Mapping</h3>
        <p>
          Before coming to the table, ensure you have updated, accurate utility maps. Are your lines sub-metered? Are you on city water and sewer, or utilizing a high-maintenance septic system and well? XitSource models acquisition offers based directly on deferred maintenance costs—upfront transparency here guarantees a smoother, faster close.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Rent Roll Consistency</h3>
        <p>
          A premium valuation requires a proven, 3-year history of routine rent increases aligned with local CPI or market rates. Buyers look for momentum. If rents have been stagnant for half a decade, the buyer must take on the friction of raising them, which will immediately be reflected as a discount in your purchase offer.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-gray-200">
        <Link href="/sell" className="inline-block px-8 py-4 bg-[#52D017] text-slate-900 font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-sm/10">
          Discuss Your Community
        </Link>
      </div>
    </div>
  );
}
