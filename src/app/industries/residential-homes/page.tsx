import React from 'react';
import Link from 'next/link';

export default function ResidentialHomesPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 max-w-5xl bg-white text-[#333333]">
      <Link href="/#subsidiaries" className="inline-flex items-center gap-2 text-sm font-semibold text-[#333333] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
        <span>←</span> Back to Industries
      </Link>
      
      {/* Hero Section */}
      <div className="mb-16 border-b border-gray-200 pb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#333333] mb-6">
          We Buy Residential Property As-Is.
        </h1>
        <p className="text-xl md:text-2xl font-medium text-[#333333] leading-relaxed max-w-3xl">
          No cleaning. No repairs. No showings. Just a straightforward path to a quiet closing.
        </p>
      </div>

      {/* Main Intro Image */}
      <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-sm relative group mb-16">
        <img src="/assets/industries/residential/residential-hero.webp" alt="Preserving the integrity of residential portfolios" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>

      {/* What We Buy - Grid Layout */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-8 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
          Acquisition Criteria
        </div>
        <h2 className="text-3xl font-bold text-[#333333] mb-10">What We Acquire</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Houses in any condition</h3>
              <p className="text-[#333333]/80 leading-relaxed">Ugly, outdated, or worn-out properties looking for a fresh start.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Properties with major repairs</h3>
              <p className="text-[#333333]/80 leading-relaxed">Fire/water damage, severe mold, or strict structural code issues.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Inherited properties</h3>
              <p className="text-[#333333]/80 leading-relaxed">Probate processes or long-distance out-of-state ownership situations.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Problematic situations</h3>
              <p className="text-[#333333]/80 leading-relaxed">Difficult tenant issues, pre-foreclosure timelines, or existing title liens.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Extreme cleanouts</h3>
              <p className="text-[#333333]/80 leading-relaxed">Hoarder homes, junk-filled properties, or long-term vacant houses.</p>
            </div>
          </div>
        </div>
      </div>

      {/* The Process - Three Step Layout */}
      <div className="mb-20 bg-[#f9fafb] p-8 md:p-12 rounded-sm border border-gray-200 border-l-4 border-l-[#52D017]">
        <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center md:text-left">A Simple, Predictable Closing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-gray-200 z-0"></div>

          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017] text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto md:mx-0 shadow-md">1</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Connect</h3>
            <p className="text-[#333333]/80 leading-relaxed">Submit your property details through our secure form for a confidential evaluation.</p>
          </div>

          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017] text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto md:mx-0 shadow-md">2</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Offer</h3>
            <p className="text-[#333333]/80 leading-relaxed">Receive a clean, no-obligation cash offer based precisely on the current condition.</p>
          </div>

          <div className="relative z-10 bg-white p-6 rounded-sm border border-[#52D017]/50 shadow-md text-center md:text-left ring-1 ring-[#52D017]/20">
            <div className="w-16 h-16 rounded-full bg-[#111827] text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto md:mx-0 shadow-md">3</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Close</h3>
            <p className="text-[#333333]/80 leading-relaxed">Choose your timeline and date. Get paid and transfer the keys in as little as 7–14 days.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-12 border-t border-gray-200">
        <Link href="/sell" className="inline-block px-8 py-4 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-sm/10">
          Request Confidential Conversation
        </Link>
      </div>
    </div>
  );
}
