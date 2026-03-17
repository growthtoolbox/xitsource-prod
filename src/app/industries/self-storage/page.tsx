import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sell Your Self-Storage Facility | Direct Storage Buyer | XitSource",
  description: "Looking to sell your self-storage facility? XitSource works directly with owners nationwide. Private, straightforward conversations without public listings.",
};

export default function SelfStoragePage() {
  return (
    <div className="bg-white text-[#333333] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <div className="bg-[#f9fafb] border-b border-gray-200 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#333333] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
            <span>←</span> Back
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
            Industry Focus
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#333333] mb-6">
            Sell Your Self-Storage Facility Through a Direct, Private Conversation
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#333333]/90 leading-relaxed mb-10 border-l-4 border-l-[#52D017] pl-6">
            We work with self-storage owners nationwide who are ready for a transition.
          </p>
          <p className="text-lg text-[#333333]/80 leading-relaxed max-w-3xl mb-10">
            Whether your facility is stabilized, underperforming, older, or needs repositioning, we are open to a straightforward discussion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://www.xitsource.com/sell" className="inline-block px-8 py-4 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors shadow-sm text-center">
              Request a Confidential Conversation
            </Link>
            <Link href="#process" className="inline-block px-8 py-4 bg-white border border-gray-300 text-[#333333] font-bold rounded-sm hover:border-[#52D017] hover:text-[#52D017] transition-colors text-center">
              See How the Process Works
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl py-16 space-y-24">
        
        {/* Main Intro Image */}
        <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-sm relative group">
          <img src="/assets/resources/storage/storage-facility-hero.webp" alt="Sell Your Self-Storage Facility" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        {/* 2. OPENING POSITIONING */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-8">We Work With Self-Storage Owners Ready for a Transition</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed mb-6">
            XitSource works with self-storage owners across a wide range of situations. Some are managing aging facilities. Others are dealing with occupancy challenges, operational inefficiencies, rising costs, or simply want to step away after years of ownership.
          </p>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            Instead of listing publicly and navigating an uncertain process, many owners prefer a direct conversation. We focus on practical evaluation and clear next steps.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* 3. “WE BUY” SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">The Types of Self-Storage Opportunities We Consider</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333]">Stabilized Self-Storage Facilities</h3>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333]">Value-Add / Underperforming Facilities</h3>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333]">Older Facilities with Deferred Maintenance</h3>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333]">Facilities with Low Occupancy</h3>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333]">Facilities Needing Operational Improvements</h3>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333]">Absentee-Owned Storage Properties</h3>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333]">Facilities with Management Issues</h3>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333]">Expansion or Repositioning Opportunities</h3>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333]">Facilities with Zoning or Use Challenges</h3>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333]">Rural and Secondary Market Storage</h3>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333]">Multi-Facility Portfolios</h3>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333]">Quiet / Off-Market Sale Situations</h3>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 4. WHY OWNERS REACH OUT */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Why Self-Storage Owners Start Looking for an Exit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
                <span className="text-lg text-[#333333]/80">Operational fatigue</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
                <span className="text-lg text-[#333333]/80">Managing tenants and turnover</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
                <span className="text-lg text-[#333333]/80">Maintenance and upkeep issues</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
                <span className="text-lg text-[#333333]/80">Increasing competition</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
                <span className="text-lg text-[#333333]/80">Declining or inconsistent occupancy</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
                <span className="text-lg text-[#333333]/80">Rising operating expenses</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
                <span className="text-lg text-[#333333]/80">Technology gaps or outdated systems</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
                <span className="text-lg text-[#333333]/80">Retirement planning</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
                <span className="text-lg text-[#333333]/80">Partnership issues</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
                <span className="text-lg text-[#333333]/80">Desire to simplify or reduce involvement</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
                <span className="text-lg text-[#333333]/80">Uncertainty about next steps</span>
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 5. SIMPLE, DIRECT SALE */}
        <section className="bg-white p-8 md:p-12 border border-gray-200 shadow-xl shadow-black/5 rounded-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
          <h2 className="text-3xl font-bold text-[#333333] mb-6">A Simple, Direct Sale</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed mb-8">
            A direct transaction can provide clarity without the complexity of a public listing. Instead of preparing the property for market, coordinating broker outreach, and waiting through uncertain timelines, owners can explore a direct path forward.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-[#52D017] font-bold">✓</span>
              <span className="text-lg text-[#333333]/80">Private conversations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#52D017] font-bold">✓</span>
              <span className="text-lg text-[#333333]/80">Direct evaluation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#52D017] font-bold">✓</span>
              <span className="text-lg text-[#333333]/80">Flexible timelines</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#52D017] font-bold">✓</span>
              <span className="text-lg text-[#333333]/80">No obligation to proceed</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#52D017] font-bold">✓</span>
              <span className="text-lg text-[#333333]/80">Focus on real asset conditions</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#52D017] font-bold">✓</span>
              <span className="text-lg text-[#333333]/80">Clear path from conversation to closing</span>
            </li>
          </ul>
        </section>

        {/* 6. WHY OWNERS WORK WITH US */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Why Owners Work With XitSource</h2>
          <div className="space-y-6">
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm flex items-start gap-4">
               <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                 <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               </div>
               <div>
                  <h3 className="text-lg font-bold text-[#333333] mb-1">One-on-one, confidential discussions</h3>
                  <p className="text-[#333333]/80">We talk directly with you, preserving operational privacy.</p>
               </div>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm flex items-start gap-4">
               <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                 <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               </div>
               <div>
                  <h3 className="text-lg font-bold text-[#333333] mb-1">Practical and straightforward approach</h3>
                  <p className="text-[#333333]/80">We focus on real metrics and bypass institutional jargon.</p>
               </div>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm flex items-start gap-4">
               <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                 <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               </div>
               <div>
                  <h3 className="text-lg font-bold text-[#333333] mb-1">Experience with operational real estate</h3>
                  <p className="text-[#333333]/80">We understand self-storage dynamics and operations.</p>
               </div>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm flex items-start gap-4">
               <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                 <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               </div>
               <div>
                  <h3 className="text-lg font-bold text-[#333333] mb-1">Focus beyond surface-level metrics</h3>
                  <p className="text-[#333333]/80">We review value-add opportunities hidden beneath current operations.</p>
               </div>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm flex items-start gap-4">
               <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                 <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               </div>
               <div>
                  <h3 className="text-lg font-bold text-[#333333] mb-1">Respect for the business you built</h3>
                  <p className="text-[#333333]/80">Honest evaluation of your hard work without dismissing its value.</p>
               </div>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm flex items-start gap-4">
               <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                 <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               </div>
               <div>
                  <h3 className="text-lg font-bold text-[#333333] mb-1">Flexible timing and transition options</h3>
                  <p className="text-[#333333]/80">We align our timeline with yours for a calm, controlled process.</p>
               </div>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm flex items-start gap-4">
               <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                 <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               </div>
               <div>
                  <h3 className="text-lg font-bold text-[#333333] mb-1">No pressure or obligation</h3>
                  <p className="text-[#333333]/80">If our approach doesn&apos;t fit your needs, you can walk away at any time.</p>
               </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 7. PROCESS SECTION */}
        <section id="process">
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Our Process</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Initial Confidential Conversation</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">It starts with a direct, private discussion about your facility, your goals, and your desired timeline. We focus on understanding if a direct acquisition aligns with your next steps.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">High-Level Review of the Facility</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">We review basic financials, occupancy rates, and operational details under a strict Non-Disclosure Agreement. This allows us to provide a grounded assessment of your property&apos;s value without disrupting your operations.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Fit, Structure, and Timing Discussion</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">If there is mutual alignment, we present a straightforward offer and transaction structure. We work with you to outline a closing timeline that works best for your situation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Due Diligence and Closing</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">We complete a focused, quiet due diligence period to verify the property conditions. Once completed, the transaction moves smoothly to closing through legal and title channels.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 8. FAQ SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Frequently Asked Questions About Selling a Self-Storage Facility</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">How do I sell my self-storage facility privately?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                To sell privately, you bypass brokers and public listings by engaging directly with a specialized buyer like XitSource. This ensures confidentiality and eliminates public market complications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do you buy storage facilities nationwide?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes, we evaluate and acquire self-storage properties across all markets in the United States.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do you buy underperforming storage properties?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Absolutely. We specialize in identifying value-add opportunities and have the operational capacity to absorb underperforming assets.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Can I sell if my occupancy is low?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. Low occupancy simply changes the structure of the deal. We have experience turning around facilities with inconsistent or low occupancy rates.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do you work with older storage facilities?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Older facilities often carry deferred maintenance or outdated systems. We are comfortable acquiring older properties &quot;as-is&quot; without you needing to do repairs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Can I sell if I manage the property myself?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. Many owner-operators choose to sell to step away from daily management. We understand the nuances of transitioning an owner-managed property.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">What if my facility needs upgrades or expansion?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                We view expansion potential and necessary upgrades as part of our evaluation. You do not need to make these investments before a sale.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Can I keep the sale confidential?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. Maintaining confidentiality protects your tenants and staff. A direct acquisition is the quietest path to transacting real estate.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">How long does a direct sale take?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                A standard timeline runs 45 to 60 days from the signing of an intent letter. We can also accelerate or extend the timeline to meet your needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do you buy multiple facilities at once?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. We acquire single assets as well as multi-facility portfolios.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do you consider rural storage properties?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. We review facilities in both primary urban markets and secondary or rural locations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Can I talk to you before deciding to sell?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Absolutely. We welcome introductory conversations to help you explore your options with zero pressure or obligation.
              </p>
            </div>
          </div>
        </section>

        {/* 9. CTA SECTION */}
        <section className="bg-[#111827] text-white p-12 rounded-sm text-center shadow-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Thinking About Selling Your Self-Storage Facility?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you are considering a transition or simply want to explore your options, start with a confidential conversation. We are open to direct discussions with self-storage owners nationwide.
          </p>
          <Link href="https://www.xitsource.com/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors">
            Request a Confidential Conversation
          </Link>
        </section>

        {/* INTERNAL LINKS (OTHER INDUSTRIES) */}
        <section className="pt-8 text-center text-sm text-[#333333]/80 border-t border-gray-200">
          <p className="mb-4 text-xs font-bold tracking-widest uppercase">Other Supported Industries</p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="/industries/laundromat" className="hover:text-[#52D017] transition-colors">Laundromats</Link>
             <span>•</span>
             <Link href="/industries/rv-parks" className="hover:text-[#52D017] transition-colors">RV Parks</Link>
             <span>•</span>
             <Link href="/industries/raw-land" className="hover:text-[#52D017] transition-colors">Raw Land</Link>
             <span>•</span>
             <Link href="/industries/residential-homes" className="hover:text-[#52D017] transition-colors">Residential Portfolios</Link>
          </div>
        </section>

      </div>
    </div>
  );
}
