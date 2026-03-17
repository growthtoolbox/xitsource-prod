import React from 'react';
import Link from 'next/link';

export default function ScorecardPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl bg-white text-[#333333]">
      <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-[#333333] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
        <span>←</span> Back to Resources
      </Link>
      
      {/* Intro Section */}
      <div className="mb-16 border-b border-gray-200 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#333333] mb-6">
          The Seller Readiness Scorecard
        </h1>
        <p className="text-xl md:text-2xl font-medium text-[#333333] leading-relaxed max-w-3xl">
          A 2-minute tool to help you determine if now is the right time to transition your asset, regardless of its condition.
        </p>
      </div>

      {/* Section 1: Universal Readiness */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-8 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
          Part 1: The Operator
        </div>
        <h2 className="text-3xl font-bold text-[#333333] mb-8">Universal Readiness Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 font-bold shrink-0">1</div>
            <div>
              <h3 className="text-lg font-bold text-[#333333] mb-2">Management Fatigue</h3>
              <p className="text-[#333333]/80 leading-relaxed">Do you find yourself dreading the daily operational tasks (repairs, collections, tenant calls)?</p>
            </div>
          </div>

          <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 font-bold shrink-0">2</div>
            <div>
              <h3 className="text-lg font-bold text-[#333333] mb-2">Equity Positioning</h3>
              <p className="text-[#333333]/80 leading-relaxed">Is your equity currently tied up in a property that requires significant capital to modernize?</p>
            </div>
          </div>

          <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 font-bold shrink-0">3</div>
            <div>
              <h3 className="text-lg font-bold text-[#333333] mb-2">Legacy Goals</h3>
              <p className="text-[#333333]/80 leading-relaxed">Are you ready to prioritize your time and family over the burdens of property management?</p>
            </div>
          </div>

          <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 font-bold shrink-0">4</div>
            <div>
              <h3 className="text-lg font-bold text-[#333333] mb-2">Market Timing</h3>
              <p className="text-[#333333]/80 leading-relaxed">Are you concerned about rising taxes, insurance costs, or shifting local regulations?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Asset-Specific Red Flags */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-8 text-xs font-semibold tracking-widest text-[#52D017] uppercase mt-8">
          Part 2: The Asset
        </div>
        <h2 className="text-3xl font-bold text-[#333333] mb-8">Asset-Specific &quot;Red Flags&quot;</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Residential & Land */}
          <div className="bg-white p-8 rounded-sm border-t-4 border-[#52D017] shadow-lg shadow-sm/10">
            <h3 className="text-xl font-bold text-[#333333] mb-6 flex flex-col gap-2">
              <span className="text-4xl mb-2">🏠</span> 
              Residential & Land
            </h3>
            <ul className="space-y-4 text-[#333333]/80">
              <li className="flex items-start gap-3">
                <span className="text-[#52D017] mt-1 shrink-0">●</span>
                <p>Is the property currently vacant, junk-filled, or in need of structural repair?</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#52D017] mt-1 shrink-0">●</span>
                <p>Are you dealing with probate, title liens, or out-of-state management?</p>
              </li>
            </ul>
          </div>

          {/* RV Parks & MHCs */}
          <div className="bg-white p-8 rounded-sm border-t-4 border-[#52D017] shadow-lg shadow-sm/10">
            <h3 className="text-xl font-bold text-[#333333] mb-6 flex flex-col gap-2">
              <span className="text-4xl mb-2">🚐</span> 
              RV Parks & MHCs
            </h3>
            <ul className="space-y-4 text-[#333333]/80">
              <li className="flex items-start gap-3">
                <span className="text-[#52D017] mt-1 shrink-0">●</span>
                <p>Is the infrastructure (septic, electric, roads) reaching the end of its life cycle?</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#52D017] mt-1 shrink-0">●</span>
                <p>Are you tired of the &apos;Landlord/Tenant&apos; friction and constant guest turnover?</p>
              </li>
            </ul>
          </div>

          {/* Commercial */}
          <div className="bg-white p-8 rounded-sm border-t-4 border-[#52D017] shadow-lg shadow-sm/10">
            <h3 className="text-xl font-bold text-[#333333] mb-6 flex flex-col gap-2">
              <span className="text-4xl mb-2">📦</span> 
              Self-Storage & Retail
            </h3>
            <ul className="space-y-4 text-[#333333]/80">
              <li className="flex items-start gap-3">
                <span className="text-[#52D017] mt-1 shrink-0">●</span>
                <p>Are you struggling to keep up with the &apos;Contactless&apos; tech requirements or equipment maintenance?</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#52D017] mt-1 shrink-0">●</span>
                <p>Is occupancy consistently dipping below your target, or is the &apos;daily grind&apos; becoming unmanageable?</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Result & CTA */}
      <div className="mt-16 pt-16 border-t border-gray-200 text-center bg-[#111827] text-white p-12 rounded-sm shadow-xl">
        <h2 className="text-3xl font-bold mb-6">Score Evaluation</h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
          If you answered &apos;Yes&apos; to more than two of these questions, it may be time for a quiet, professional transition. You don&apos;t have to keep carrying the burden alone.
        </p>
        <Link href="/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg">
          Request Your No-Obligation Valuation
        </Link>
      </div>

    </div>
  );
}
