import React from 'react';
import Link from 'next/link';

export default function SelfStoragePage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 max-w-5xl bg-white text-[#333333]">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#333333] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
        <span>←</span> Back to Industries
      </Link>
      
      {/* Hero Section */}
      <div className="mb-16 border-b border-gray-200 pb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#333333] mb-6">
          We Buy Self Storage Facilities As-Is. Nationwide.
        </h1>
        <p className="text-xl md:text-2xl font-medium text-[#333333] leading-relaxed max-w-3xl mb-10">
          Tired of the operational grind? No cleanup, no upgrades, and no broker fees. We provide a simple, direct path to sell your storage facility fast.
        </p>
        <Link href="/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-sm/10">
          Request Confidential Conversation
        </Link>
      </div>

      {/* Main Intro Image */}
      <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-sm relative group mb-16">
        <img src="/assets/resources/storage/storage-facility-hero.webp" alt="We Buy Self Storage Facilities" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>

      {/* Section: Who This Is For */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-8">Who This Is For</h2>
        <p className="text-xl leading-relaxed text-[#333333] mb-10 border-l-4 border-l-[#52D017] pl-6 py-2 bg-[#f9fafb]">
          We specialize in helping owners who are ready to step away from the daily management of their facility, especially in situations involving:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Burnout & Fatigue</h3>
              <p className="text-[#333333]/80 leading-relaxed">You&apos;re tired of the &apos;contactless&apos; tech headaches and tenant management.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Deferred Maintenance</h3>
              <p className="text-[#333333]/80 leading-relaxed">The roof, the gates, or the units need work you don&apos;t want to pay for.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Occupancy Issues</h3>
              <p className="text-[#333333]/80 leading-relaxed">Low occupancy or underperforming financials.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Complicated Ownership</h3>
              <p className="text-[#333333]/80 leading-relaxed">Distressed properties, probate, or out-of-state management challenges.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Why Sell Directly to Us? */}
      <div className="mb-20 bg-[#f9fafb] p-8 md:p-12 rounded-sm border border-gray-200">
        <h2 className="text-3xl font-bold text-[#333333] mb-10 text-center md:text-left">Why Sell Directly to Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#333333] mb-4">As-Is Acquisition</h3>
            <p className="text-[#333333]/80 leading-relaxed">We buy in current condition. No repairs or modernizing required.</p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#333333] mb-4">Skip the Brokers</h3>
            <p className="text-[#333333]/80 leading-relaxed">Avoid the 6% commissions and the long, public listing process.</p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#333333] mb-4">True Confidentiality</h3>
            <p className="text-[#333333]/80 leading-relaxed">Your tenants and competitors won&apos;t know the facility is for sale until the deal is done.</p>
          </div>
        </div>
      </div>

      {/* Section: Simple 3-Step Process */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center md:text-left">A Simple 3-Step Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] border-t border-dashed border-gray-300 z-0"></div>

          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">1</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Submit Property</h3>
            <p className="text-[#333333]/80 leading-relaxed">Share your facility details via our secure form.</p>
          </div>

          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">2</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Evaluation</h3>
            <p className="text-[#333333]/80 leading-relaxed">We perform a quiet, off-market review.</p>
          </div>

          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">3</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Your Choice</h3>
            <p className="text-[#333333]/80 leading-relaxed">Receive a fair cash offer and choose your closing date.</p>
          </div>
        </div>
      </div>

      {/* Section: FAQ (AEO Optimized) */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#333333] mb-2">Do you buy facilities with low occupancy?</h3>
            <p className="text-[#333333]/80 leading-relaxed">Yes. We buy underperforming properties and handle the stabilization ourselves.</p>
          </div>
          <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#333333] mb-2">What if my facility needs major repairs?</h3>
            <p className="text-[#333333]/80 leading-relaxed">We buy as-is. You don&apos;t need to fix a single gate or roof.</p>
          </div>
          <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#333333] mb-2">How long does it take to close?</h3>
            <p className="text-[#333333]/80 leading-relaxed">We can typically close within 30–45 days, or on your specific timeline.</p>
          </div>
          <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#333333] mb-2">Do you buy nationwide?</h3>
            <p className="text-[#333333]/80 leading-relaxed">Yes. We are active buyers of storage facilities across the United States.</p>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="mt-16 pt-8 border-t border-gray-200 text-center">
        <p className="text-xs text-[#333333]/60 uppercase tracking-widest font-semibold">
          Offers are no-obligation. Calls may be recorded for quality assurance. CCPA/CPRA Compliant.
        </p>
      </div>
    </div>
  );
}
