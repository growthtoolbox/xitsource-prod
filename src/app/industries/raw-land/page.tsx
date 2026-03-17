import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sell Raw Land Fast Without an Agent | Cash Land Buyers | XitSource",
  description: "We buy vacant land and development parcels across the United States. No agents, no 6% commissions, and no cleanup required. Get your direct cash offer today.",
};

export default function RawLandPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 max-w-5xl bg-white text-[#333333]">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#333333] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
        <span>←</span> Back to Industries
      </Link>
      
      {/* 1. HERO SECTION */}
      <div className="mb-16 border-b border-gray-200 pb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#333333] mb-6">
          Sell Your Raw Land Fast and Without the Wait
        </h1>
        <p className="text-xl md:text-2xl font-medium text-[#333333] leading-relaxed max-w-3xl mb-10">
          We buy vacant land and development parcels across the United States. No agents, no long listing periods, and no cleanup required.
        </p>
        <Link href="/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-sm/10">
          Request Confidential Conversation
        </Link>
      </div>

      {/* Main Intro Image */}
      <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-sm relative group mb-16">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" alt="Sell your raw land fast for cash" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>

      {/* 2. DIRECT ANSWER (AEO BLOCK) */}
      <div className="mb-20 bg-[#f9fafb] p-8 md:p-10 border border-gray-200 shadow-sm rounded-sm relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
        <h2 className="text-2xl font-bold text-[#333333] mb-6">How do I sell raw land without an agent?</h2>
        <p className="text-lg text-[#333333]/90 leading-relaxed">
          To sell raw land without an agent, you can work directly with a private acquisition partner like XitSource. We bypass the traditional listing process, handle all property due diligence in-house, and provide a direct cash offer. This allows you to avoid 6% commissions, marketing fees, and the typical 6–12 month wait time associated with land brokers.
        </p>
      </div>

      {/* 3. WHY LANDOWNERS SELL */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-6">Turning a Land Liability into Liquid Cash</h2>
        <p className="text-xl leading-relaxed text-[#333333] mb-10 border-l-4 border-l-[#52D017] pl-6 py-2 bg-[#f9fafb]">
          Owning vacant land is often more of a burden than an asset. Most landowners reach out to us because they are:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
            <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Tired of Property Taxes</h3>
            <p className="text-[#333333]/80">Paying annual taxes on land that produces zero income.</p>
          </div>
          <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
            <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Inherited Property</h3>
            <p className="text-[#333333]/80">You&apos;ve received land you have no plans to develop and don&apos;t want to manage from a distance.</p>
          </div>
          <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
            <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Market Fatigue</h3>
            <p className="text-[#333333]/80">The land has been sitting for years with no movement or interest from traditional buyers.</p>
          </div>
          <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
            <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Financial Stress</h3>
            <p className="text-[#333333]/80">You need to unlock the equity in your land to fund a new project or retirement.</p>
          </div>
        </div>
      </div>

      {/* 4. TYPES OF LAND WE ACQUIRE */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-10">Vacant Land Buyers for Any Situation</h2>
        <p className="text-lg text-[#333333]/80 mb-8 border-l-4 border-[#52D017] pl-4">We acquire diverse types of land across the U.S., regardless of current condition or complexity:</p>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1"><span className="text-[#52D017] text-sm font-bold">✓</span></div>
            <div><strong className="text-[#333333]">Residential Lots:</strong> <span className="text-[#333333]/80">Individual lots or multi-parcel subdivisions.</span></div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1"><span className="text-[#52D017] text-sm font-bold">✓</span></div>
            <div><strong className="text-[#333333]">Rural Acreage:</strong> <span className="text-[#333333]/80">Large tracts of land, even those without road access or utilities.</span></div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1"><span className="text-[#52D017] text-sm font-bold">✓</span></div>
            <div><strong className="text-[#333333]">Development Parcels:</strong> <span className="text-[#333333]/80">Commercial, industrial, or multi-family zoned land.</span></div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1"><span className="text-[#52D017] text-sm font-bold">✓</span></div>
            <div><strong className="text-[#333333]">Infill Lots:</strong> <span className="text-[#333333]/80">Urban land ready for revitalization.</span></div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-1"><span className="text-[#52D017] text-sm font-bold">✓</span></div>
            <div><strong className="text-[#333333]">Problematic Parcels:</strong> <span className="text-[#333333]/80">Land with title issues, back taxes, or complicated family ownership.</span></div>
          </div>
        </div>
      </div>

      {/* 5. A SIMPLE, DIRECT SALE */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center md:text-left">Our 4-Step Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] border-t border-dashed border-gray-300 z-0"></div>
          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">1</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Submit Property Details</h3>
            <p className="text-[#333333]/80 leading-relaxed text-sm">Share the parcel number or location via our secure form.</p>
          </div>
          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">2</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Professional Review</h3>
            <p className="text-[#333333]/80 leading-relaxed text-sm">We perform a quiet, off-market evaluation of the land&apos;s potential.</p>
          </div>
          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">3</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Receive Your Offer</h3>
            <p className="text-[#333333]/80 leading-relaxed text-sm">We provide a fair, no-obligation cash offer based on current market conditions.</p>
          </div>
          <div className="relative z-10 bg-white p-6 rounded-sm border border-gray-200 shadow-sm text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">4</div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Simple Closing</h3>
            <p className="text-[#333333]/80 leading-relaxed text-sm">We handle the paperwork and close at a local title company on your timeline.</p>
          </div>
        </div>
      </div>

      {/* 6. WHY OWNERS WORK WITH US */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-10">The XitSource Advantage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
            <div className="mb-4 text-[#52D017]">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-[#333333] mb-2">No Commissions</h3>
            <p className="text-[#333333]/80 text-sm">You keep the full sale price without losing 6–10% to land brokers.</p>
          </div>
          <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
            <div className="mb-4 text-[#52D017]">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="text-lg font-bold text-[#333333] mb-2">Sell As-Is</h3>
            <p className="text-[#333333]/80 text-sm">We take the land exactly as it sits—no need to clear brush, survey, or perc.</p>
          </div>
          <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
            <div className="mb-4 text-[#52D017]">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
            </div>
            <h3 className="text-lg font-bold text-[#333333] mb-2">Discreet Process</h3>
            <p className="text-[#333333]/80 text-sm">No &quot;For Sale&quot; signs or public listings. Your business remains private.</p>
          </div>
          <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
            <div className="mb-4 text-[#52D017]">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-[#333333] mb-2">We Handle the Paperwork</h3>
            <p className="text-[#333333]/80 text-sm">From title issues to back taxes, our team manages the administrative burden.</p>
          </div>
        </div>
      </div>

      {/* 7. WHAT MAKES RAW LAND DIFFERENT */}
      <div className="mb-20 bg-[#111827] text-white p-10 md:p-12 rounded-sm shadow-xl">
        <h2 className="text-3xl font-bold mb-6">Understanding the Land Market</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Raw land is notoriously difficult to sell because banks rarely lend on it, and most buyers want &quot;ready-to-build&quot; sites. This leaves landowners stuck in a cycle of waiting. XitSource is different. We use private capital to buy land for our own portfolio, meaning we don&apos;t wait for bank approvals or developer entitlements. We buy for the future, so you can get paid today.
        </p>
      </div>

      {/* 8. FAQ SECTION (SEO + AEO OPTIMIZED) */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-10 border-b border-gray-200 pb-4">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Can I sell my land if I have back taxes?</h3>
            <p className="text-lg text-[#333333]/80 leading-relaxed">Yes. We frequently purchase properties with delinquent taxes. We can often pay off the tax lien as part of the closing process, allowing you to walk away with the remaining equity.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Do I need to pay for a survey before selling to you?</h3>
            <p className="text-lg text-[#333333]/80 leading-relaxed">No. You do not need to provide a new survey or perc test. We handle all due diligence and mapping during our review period at no cost to you.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">How fast can I sell my vacant land?</h3>
            <p className="text-lg text-[#333333]/80 leading-relaxed">While traditional land sales take 6–12 months, we can typically close and fund a land acquisition in 14–30 business days.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Do you buy land with title issues or liens?</h3>
            <p className="text-lg text-[#333333]/80 leading-relaxed">Yes. Our team is experienced in resolving title &quot;clouds,&quot; probate issues, and liens. We work directly with title professionals to clear the path to a sale.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Is there a fee for a cash offer?</h3>
            <p className="text-lg text-[#333333]/80 leading-relaxed">Never. Our offers are 100% free and carry no obligation. If our offer doesn&apos;t work for you, there is no pressure to move forward.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Do you buy land in rural areas?</h3>
            <p className="text-lg text-[#333333]/80 leading-relaxed">Yes. We buy land nationwide, including remote rural acreage, desert lots, and mountain parcels, regardless of utility access.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Can I sell inherited land if I live out of state?</h3>
            <p className="text-lg text-[#333333]/80 leading-relaxed">Absolutely. We specialize in helping out-of-state owners sell inherited land. We handle all local filings and the closing can be done remotely.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">What information do you need to make an offer?</h3>
            <p className="text-lg text-[#333333]/80 leading-relaxed">All we need is the State, County, and Assessor&apos;s Parcel Number (APN). If you don&apos;t have the APN, the street address or owner name is usually enough.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Why not just list with a land agent?</h3>
            <p className="text-lg text-[#333333]/80 leading-relaxed">Agents often list land and wait for a buyer to appear. We <em>are</em> the buyer. Selling to us eliminates the risk of the property sitting on the market and removes the cost of commissions.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#333333] mb-3">Do you buy land in flood zones or wetlands?</h3>
            <p className="text-lg text-[#333333]/80 leading-relaxed">Yes. We evaluate all types of terrain. While these factors influence the offer, they do not prevent us from making one.</p>
          </div>
        </div>
      </div>

      {/* 9. RELATED ASSETS */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-[#333333] mb-8">Explore Other Acquisition Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/industries/residential-homes" className="bg-[#f9fafb] p-6 border border-gray-200 hover:border-[#52D017] rounded-sm group transition-all">
            <h3 className="text-lg font-bold text-[#333333] group-hover:text-[#52D017] mb-2">Residential Homes</h3>
            <p className="text-sm text-[#333333]/80">Sell your house fast, as-is.</p>
          </Link>
          <Link href="/industries/rv-parks" className="bg-[#f9fafb] p-6 border border-gray-200 hover:border-[#52D017] rounded-sm group transition-all">
            <h3 className="text-lg font-bold text-[#333333] group-hover:text-[#52D017] mb-2">RV Parks & Campgrounds</h3>
            <p className="text-sm text-[#333333]/80">Direct exits for park owners.</p>
          </Link>
          <Link href="/industries/self-storage" className="bg-[#f9fafb] p-6 border border-gray-200 hover:border-[#52D017] rounded-sm group transition-all">
            <h3 className="text-lg font-bold text-[#333333] group-hover:text-[#52D017] mb-2">Self-Storage Facilities</h3>
            <p className="text-sm text-[#333333]/80">Professional transitions for storage owners.</p>
          </Link>
        </div>
      </div>

      {/* 10. FINAL CTA SECTION */}
      <div className="mt-16 pt-12 border-t border-gray-200 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#333333] mb-4">No Pressure. No Waiting. Just a Fair Offer.</h2>
        <p className="text-xl text-[#333333]/80 mb-8 max-w-2xl">If you are ready to stop paying taxes on land you don&apos;t use, let&apos;s have a straightforward conversation today.</p>
        <Link href="/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-sm/10">
          Request Confidential Conversation
        </Link>
      </div>

    </div>
  );
}
