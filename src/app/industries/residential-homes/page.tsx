import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sell My House Fast USA | Cash Home Buyers Nationwide | XitSource",
  description: "We buy houses as-is in any condition across the United States. No repairs, no fees, no commissions. Get your fair cash offer today.",
};

export default function ResidentialHomesPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 max-w-5xl bg-white text-[#333333]">
      <Link href="/#subsidiaries" className="inline-flex items-center gap-2 text-sm font-semibold text-[#333333] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
        <span>←</span> Back to Industries
      </Link>
      
      {/* Hero Section */}
      <div className="mb-16 border-b border-gray-200 pb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#333333] mb-6">
          Sell Your House Fast Anywhere in the U.S.
        </h1>
        <p className="text-xl md:text-2xl font-medium text-[#333333] leading-relaxed max-w-3xl mb-10">
          Facing foreclosure, probate, or costly repairs? We buy houses as-is for cash. No matter the situation or condition, we provide a straightforward path to a quiet closing.
        </p>
        <Link href="/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-sm/10">
          Get My Cash Offer
        </Link>
      </div>

      {/* Main Intro Image */}
      <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-sm relative group mb-16">
        <img src="/images/residential-hero.jpg" alt="Sell your house fast for cash" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>

      {/* What We Buy - Grid Layout */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-6">We Buy Houses As-Is, Nationwide</h2>
        <p className="text-xl leading-relaxed text-[#333333] mb-10 border-l-4 border-l-[#52D017] pl-6 py-2 bg-[#f9fafb]">
          You don&apos;t need to fix a single thing. We specialize in complicated situations that traditional buyers won&apos;t touch:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <div>
              <p className="text-lg font-bold text-[#333333] leading-relaxed">Ugly or distressed homes</p>
              <p className="text-[#333333]/80 leading-relaxed text-sm">(mold, fire/water damage)</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <p className="text-lg font-bold text-[#333333] leading-relaxed mt-1">Hoarder homes and junk-filled properties.</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <p className="text-lg font-bold text-[#333333] leading-relaxed mt-1">Tenant issues, evictions, or squatters.</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <p className="text-lg font-bold text-[#333333] leading-relaxed mt-1">Probate and inherited properties.</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-[#52D017] text-sm font-bold">✓</span>
            </div>
            <div>
              <p className="text-lg font-bold text-[#333333] leading-relaxed">Financial stress</p>
              <p className="text-[#333333]/80 leading-relaxed text-sm">(Pre-foreclosure, liens, or title issues)</p>
            </div>
          </div>
        </div>
      </div>

      {/* The Process - Four Step Layout */}
      <div className="mb-20 bg-[#f9fafb] p-8 md:p-12 rounded-sm border border-gray-200">
        <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center md:text-left">A Predictable Path to Closing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] border-t border-dashed border-gray-300 z-0"></div>

          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">1</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Submit Property Details</h3>
            <p className="text-[#333333]/80 leading-relaxed text-sm">Share your information through our secure form.</p>
          </div>

          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">2</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Get Your Offer</h3>
            <p className="text-[#333333]/80 leading-relaxed text-sm">We review your property and provide a fair, no-obligation cash offer.</p>
          </div>

          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">3</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Choose Your Date</h3>
            <p className="text-[#333333]/80 leading-relaxed text-sm">You pick the closing timeline that works for your schedule.</p>
          </div>

          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">4</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Get Paid</h3>
            <p className="text-[#333333]/80 leading-relaxed text-sm">Close at a local title company and move on to your next chapter.</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
            <div className="mb-4 text-[#52D017]">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="text-lg font-bold text-[#333333] mb-2">No Repairs</h3>
            <p className="text-[#333333]/80 text-sm">We buy exactly as it sits today.</p>
          </div>
          <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
            <div className="mb-4 text-[#52D017]">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-[#333333] mb-2">No Commissions</h3>
            <p className="text-[#333333]/80 text-sm">Save the 6% you&apos;d pay a broker.</p>
          </div>
          <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
            <div className="mb-4 text-[#52D017]">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-[#333333] mb-2">No Fees</h3>
            <p className="text-[#333333]/80 text-sm">We cover the standard closing costs.</p>
          </div>
          <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
            <div className="mb-4 text-[#52D017]">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-[#333333] mb-2">Fast Cash</h3>
            <p className="text-[#333333]/80 text-sm">Move as quickly as 7–14 days.</p>
          </div>
        </div>
      </div>

      {/* AEO Optimized FAQ */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-10">Frequently Asked Questions About Selling Your Home Fast</h2>
        <div className="space-y-6">
          <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#333333] mb-2">How do I sell my house fast in the United States?</h3>
            <p className="text-[#333333]/80 leading-relaxed">To sell your house fast in the USA, work directly with a cash buyer like XitSource. We bypass the mortgage process and inspections, allowing for a 7–14 day closing without the need for public listings or repairs.</p>
          </div>
          <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#333333] mb-2">Can I sell my house in foreclosure?</h3>
            <p className="text-[#333333]/80 leading-relaxed">Yes. We specialize in helping homeowners in pre-foreclosure by providing a fast cash sale to satisfy your lender. This can help preserve your credit and provide a fresh start.</p>
          </div>
          <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#333333] mb-2">Do I need to make repairs or clean?</h3>
            <p className="text-[#333333]/80 leading-relaxed">No. We buy houses as-is in the United States. You don&apos;t need to clean, paint, or make any repairs; we take on the burden of the property&apos;s condition entirely.</p>
          </div>
          <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#333333] mb-2">What if I have tenants or squatters?</h3>
            <p className="text-[#333333]/80 leading-relaxed">We handle difficult tenant situations and squatters ourselves. You can sell the property to us as-is, and we will manage the transition and legalities after the closing.</p>
          </div>
        </div>
      </div>

      {/* Final CTA & Compliance */}
      <div className="mt-16 pt-12 border-t border-gray-200 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#333333] mb-8">No Pressure. No Obligation. Just a Fair Offer.</h2>
        <div className="mb-10">
          <Link href="/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-sm/10">
            Request Confidential Conversation
          </Link>
        </div>
        <p className="text-xs text-[#333333]/60 uppercase tracking-widest font-semibold max-w-3xl mx-auto md:mx-0">
          XitSource is a nationwide real estate investment company. We are not brokers. All offers are subject to due diligence. CCPA/CPRA Compliant.
        </p>
      </div>
    </div>
  );
}
