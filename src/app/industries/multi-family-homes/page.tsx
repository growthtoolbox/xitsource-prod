import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Multifamily Investment & Acquisition in Northern California | XitSource",
  description: "We acquire and optimize multifamily apartment communities across Northern California. Focused on value-add opportunities, operational improvements, and long-term asset performance.",
};

export default function MultiFamilyHomesPage() {
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
            Multifamily Investment & Asset Optimization
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#333333]/90 leading-relaxed mb-10 border-l-4 border-l-[#52D017] pl-6">
            We acquire, stabilize, and scale multifamily properties across Northern California through disciplined operations and value-driven execution.
          </p>
          <p className="text-lg text-[#333333]/80 leading-relaxed max-w-3xl mb-10">
            Acquire. Optimize. Scale Multifamily Assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link href="https://www.xitsource.com/sell" className="inline-block px-8 py-4 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors shadow-sm text-center">
              Evaluate an Opportunity
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl py-16 space-y-24">
        
        {/* 1. HERO IMAGE */}
        <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-sm relative group">
          <img src="/assets/industries/multi-family-homes/hero_multifamily.png" alt="Multifamily Apartment Community" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        {/* 2. WHAT WE DO */}
        <section className="bg-white p-8 md:p-10 border border-gray-200 shadow-xl shadow-black/5 rounded-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
          <h2 className="text-2xl font-bold text-[#333333] mb-6">Operational Focus. Long-Term Value.</h2>
          
          <div className="w-full h-64 md:h-[300px] overflow-hidden rounded-sm relative group mb-8">
            <img src="/assets/industries/multi-family-homes/office_clubhouse.png" alt="Modern apartment leasing office" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>

          <p className="text-lg text-[#333333]/90 leading-relaxed">
            We focus on multifamily assets where operational improvements and strategic repositioning create measurable upside. From acquisition through stabilization, every decision is driven by performance, efficiency, and long-term value creation.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* 3. TARGET ASSETS */}
        <section>
          <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-sm relative group mb-10">
            <img src="/assets/industries/multi-family-homes/aerial_multifamily.png" alt="Aerial view of multifamily apartments" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Target Multifamily Opportunities</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Underperforming Class B and B+ assets</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Properties requiring operational improvements</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Value-add renovation opportunities</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Owner-managed or legacy-held properties</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Assets positioned for rent optimization</span>
             </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        {/* 4. VALUE CREATION STRATEGY */}
        <section>
          <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-sm relative group mb-10">
            <img src="/assets/industries/multi-family-homes/split_scene_renovation.png" alt="Before and after style improvement of a multifamily property" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>

          <h2 className="text-3xl font-bold text-[#333333] mb-10">Disciplined Value Creation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm hover:-translate-y-1 transition-transform duration-300 cursor-default">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Acquisition</h3>
               <p className="text-[#333333]/80">Identify assets with clear upside and favorable positioning.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm hover:-translate-y-1 transition-transform duration-300 cursor-default">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Stabilization</h3>
               <p className="text-[#333333]/80">Improve operations, tenant quality, and expense management.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm hover:-translate-y-1 transition-transform duration-300 cursor-default">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Optimization</h3>
               <p className="text-[#333333]/80">Enhance revenue through strategic upgrades and rent alignment.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm hover:-translate-y-1 transition-transform duration-300 cursor-default">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Hold or Exit</h3>
               <p className="text-[#333333]/80">Position assets for long-term cash flow or strategic disposition.</p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 5. WHY XITSOURCE */}
        <section>
          <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-sm relative group mb-10">
            <img src="/assets/industries/multi-family-homes/cinematic_multifamily.png" alt="Cinematic multifamily community" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Execution Over Theory</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            We approach multifamily investments with a practical, execution-first mindset. The focus is not on speculation, but on identifying inefficiencies, improving operations, and creating durable value over time.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* 6. CTA SECTION */}
        <section className="bg-white p-8 md:p-12 border border-[#52D017]/30 shadow-xl rounded-sm text-center mb-16 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
          
          <div className="w-full h-64 md:h-[300px] overflow-hidden rounded-sm relative group mx-auto mb-10">
            <img src="/assets/industries/multi-family-homes/clean_exterior_entrance.png" alt="Clean exterior entrance of multifamily property" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>

          <h2 className="text-3xl font-bold text-[#333333] mb-6">Have a Multifamily Opportunity?</h2>
          <p className="text-xl text-[#333333]/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you are considering selling, repositioning, or partnering on a multifamily asset, we are prepared to evaluate the opportunity and provide a clear path forward.
          </p>
          <Link href="https://www.xitsource.com/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors">
            Submit Property
          </Link>
        </section>

        {/* COMPLIANCE / FOOTER NOTE */}
        <section className="pt-8 text-center text-sm text-[#333333]/80 border-t border-gray-200">
          <p className="mb-4 text-xs font-bold tracking-widest uppercase">Direct Acquisition Guidelines</p>
          <p className="max-w-3xl mx-auto leading-relaxed text-xs opacity-75">
            XitSource operates as a direct buyer of real estate assets. We are not a real estate brokerage. All offers are subject to mutual agreement and thorough due diligence. We do not make legal or financial guarantees regarding your personal situation. CCPA/CPRA Compliant.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
             <Link href="/industries/laundromat" className="hover:text-[#52D017] transition-colors">Laundromats</Link>
             <span>•</span>
             <Link href="/industries/self-storage" className="hover:text-[#52D017] transition-colors">Self Storage</Link>
             <span>•</span>
             <Link href="/industries/rv-parks" className="hover:text-[#52D017] transition-colors">RV Parks</Link>
          </div>
        </section>

      </div>
    </div>
  );
}
