"use client";

import React from 'react';
import Link from 'next/link';

export default function RawLandPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Backlink */}
        <Link href="/#subsidiaries" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
          <span>←</span> Return to Partnership Hub
        </Link>

        {/* Page Header */}
        <div className="mb-16 border-b border-gray-200 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
            Sector Overview
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Raw Land Development
          </h1>
          <p className="text-xl text-slate-900 leading-relaxed">
            A thoughtful approach to land acquisition, focused on responsible stewardship and the future potential of your acreage.
          </p>
        </div>

        {/* Three-Point Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2 h-64 md:h-[400px] w-full overflow-hidden rounded-sm relative group">
             <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" alt="Scenic view of undeveloped land." className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:h-[400px]">
             <div className="h-32 md:h-[192px] w-full overflow-hidden rounded-sm relative group">
               <img src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&q=80&w=600" alt="Preserving the natural potential of the land." className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white text-xs font-semibold">Preserving the natural potential of the land.</div>
             </div>
             <div className="h-32 md:h-[192px] w-full overflow-hidden rounded-sm relative group">
               <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600" alt="Respectful development for the next chapter." className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white text-xs font-semibold">Respectful development for the next chapter.</div>
             </div>
          </div>
        </div>
        <div className="mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-8 text-slate-900 leading-relaxed text-lg">
            <p>
              Transforming undeveloped parcels into strategic commercial and residential real estate through deep local expertise and methodical entitlement strategies.
            </p>


          </div>

          {/* Sidebar Data */}
          <div className="md:col-span-1 border-t md:border-t-0 md:border-l border-gray-200 pt-12 md:pt-0 md:pl-12">
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link href="/sell" className="block w-full py-4 px-6 bg-[#52D017]/10 border border-[#52D017] text-[#52D017] font-semibold text-center rounded-sm hover:bg-[#52D017] hover:text-slate-900 transition-colors">
                Start a Confidential Conversation
              </Link>
            </div>
          </div>
        </div>
        </div>

        {/* Partner Bios */}
        <div className="mt-24 pt-16 border-t border-gray-200/50">
          <h2 className="text-3xl font-bold text-[#111827] mb-10 text-center">Your Partners in Transition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* John Bio */}
            <div className="bg-white border border-gray-200 p-8 flex flex-col items-center text-center group hover:border-[#52D017]/50 transition-colors rounded-sm">
              <div 
                className="w-24 h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center mb-6 overflow-hidden"
              >
                <span className="text-3xl text-[#111827]/80 font-bold group-hover:text-[#52D017] transition-colors">JP</span>
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-2">John Poindexter</h3>
              <p className="text-[#111827]/70 text-sm uppercase tracking-widest font-semibold mb-6">Partner</p>
              <p className="text-[#111827] text-sm leading-relaxed mb-6 flex-grow">
                Focuses on operational stability and digital systems. John ensures that every business we transition continues to serve its community with the same integrity the original owner established.
              </p>
            </div>

            {/* Ryan Bio */}
            <div className="bg-white border border-gray-200 p-8 flex flex-col items-center text-center group hover:border-[#52D017]/50 transition-colors rounded-sm">
              <div 
                className="w-24 h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center mb-6 overflow-hidden"
              >
                <span className="text-3xl text-[#111827]/80 font-bold group-hover:text-[#52D017] transition-colors">RP</span>
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-2">Ryan Peterson</h3>
              <p className="text-[#111827]/70 text-sm uppercase tracking-widest font-semibold mb-6">Partner</p>
              <p className="text-[#111827] text-sm leading-relaxed mb-6 flex-grow">
                Specializes in fair, transparent valuations and real estate transitions. Ryan utilizes modern tools to provide simple, secure closing processes for owners ready for their next chapter.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
