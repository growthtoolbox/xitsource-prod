import React from 'react';
import Link from 'next/link';

export default function RVParksPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 max-w-5xl bg-white text-[#333333]">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#333333] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
        <span>←</span> Back to Industries
      </Link>
      
      {/* Hero Section */}
      <div className="mb-16 border-b border-gray-200 pb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#333333] mb-6">
          We Buy RV Parks in Any Condition.
        </h1>
        <p className="text-xl md:text-2xl font-medium text-[#333333] leading-relaxed max-w-3xl">
          We work with owners across the United States who are ready for a simpler exit. No cleanup. No upgrades. No long listing process.
        </p>
      </div>

      {/* Main Intro Image */}
      <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-sm relative group mb-16">
        <img src="/assets/industries/rv-parks/rv-park-hero.webp" alt="Providing owners across the U.S. with a discreet exit strategy." className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>

      {/* The "Why" Section */}
      <div className="mb-20">
        <p className="text-xl leading-relaxed text-[#333333] mb-10 border-l-4 border-l-[#52D017] pl-6 py-2 bg-[#f9fafb]">
          If you&apos;re tired of managing tenants, dealing with constant maintenance, or handling day-to-day operations, you&apos;re not alone. Many owners reach a point where the park becomes more work than it&apos;s worth. We buy RV parks as-is.
        </p>

        <h2 className="text-3xl font-bold text-[#333333] mb-10">We Frequently Acquire:</h2>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center shrink-0 mt-1 bg-white">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <p className="text-lg text-[#333333] leading-relaxed">Older parks that need upgrades or repairs.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center shrink-0 mt-1 bg-white">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <p className="text-lg text-[#333333] leading-relaxed">Underperforming or partially occupied parks.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center shrink-0 mt-1 bg-white">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <p className="text-lg text-[#333333] leading-relaxed">Parks with deferred maintenance or infrastructure issues.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center shrink-0 mt-1 bg-white">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <p className="text-lg text-[#333333] leading-relaxed">Out-of-state ownership or management challenges.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center shrink-0 mt-1 bg-white">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <p className="text-lg text-[#333333] leading-relaxed">Complicated ownership, partnerships, or title issues.</p>
          </div>
        </div>
      </div>

      {/* The Process - Three Step Layout */}
      <div className="mb-20 bg-[#f9fafb] p-8 md:p-12 rounded-sm border border-gray-200">
        <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center md:text-left">A Simple, Direct Sale</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] border-t border-dashed border-gray-300 z-0"></div>

          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">1</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Connect</h3>
            <p className="text-[#333333]/80 leading-relaxed">Tell us about your RV park.</p>
          </div>

          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">2</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Offer</h3>
            <p className="text-[#333333]/80 leading-relaxed">Receive a no-obligation offer.</p>
          </div>

          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">3</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Close</h3>
            <p className="text-[#333333]/80 leading-relaxed">Choose your closing timeline.</p>
          </div>
        </div>
      </div>

      {/* Owner Empathy Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-10">Why Owners Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111827] text-white p-8 rounded-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="text-[#52D017]">●</span> Burned out
            </h3>
            <p className="text-gray-300">From the relentless daily operations and tenant management.</p>
          </div>
          <div className="bg-[#111827] text-white p-8 rounded-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="text-[#52D017]">●</span> Ready to Retire
            </h3>
            <p className="text-gray-300">Or step away completely to enjoy the fruits of your labor.</p>
          </div>
          <div className="bg-[#111827] text-white p-8 rounded-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="text-[#52D017]">●</span> Unpredictable Income
            </h3>
            <p className="text-gray-300">Tired of fluctuating cash flow paired with constantly rising operational costs.</p>
          </div>
          <div className="bg-[#111827] text-white p-8 rounded-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="text-[#52D017]">●</span> Distance Management
            </h3>
            <p className="text-gray-300">Done trying to manage the property or a local management team from a distance.</p>
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="mt-16 pt-12 border-t border-gray-200 text-center md:text-left">
        <p className="text-xl text-[#333333] leading-relaxed max-w-3xl mb-10">
          If you&apos;re exploring how to sell your RV park without brokers or delays, we&apos;re here to have a straightforward conversation. No pressure. Just options.
        </p>
        <Link href="/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-sm/10">
          Request Confidential Conversation
        </Link>
      </div>
    </div>
  );
}
