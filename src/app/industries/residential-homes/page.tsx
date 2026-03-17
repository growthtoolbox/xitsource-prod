import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sell Your House As-Is | Direct Home Buyer Nationwide",
  description: "Sell your house as-is. We buy houses nationwide directly from owners dealing with repairs, tenants, probate, or financial stress. Quiet, confidential sales.",
};

export default function ResidentialHomesPage() {
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
            Sell Your House Without Repairs, Showings, or Delays
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#333333]/90 leading-relaxed mb-10 border-l-4 border-l-[#52D017] pl-6">
            Direct, confidential sales nationwide.
          </p>
          <p className="text-lg text-[#333333]/80 leading-relaxed max-w-3xl mb-10">
            We purchase homes as-is, including distressed, inherited, tenant-occupied, and complex properties. No agents, no commissions, and no uncertainty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link href="https://www.xitsource.com/sell" className="inline-block px-8 py-4 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors shadow-sm text-center">
              Request Confidential Conversation
            </Link>
          </div>
          <p className="text-sm font-bold text-[#333333]/60 uppercase tracking-widest">
            No listings. No showings. No pressure.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl py-16 space-y-24">
        
        {/* Main Intro Image */}
        <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-sm relative group">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070" alt="Sell Your House As-Is" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        {/* 2. DIRECT ANSWER BLOCK (AEO) */}
        <section className="bg-white p-8 md:p-10 border border-gray-200 shadow-xl shadow-black/5 rounded-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
          <h2 className="text-2xl font-bold text-[#333333] mb-6">Can You Sell Your House As-Is?</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            Yes, you can sell your house exactly as it sits today. A direct sale means you do not have to make repairs, clean out the property, pay for staging, or deal with months of public showings. You bypass the traditional real estate market entirely and sell directly to a buyer who accepts the property in its current condition.
          </p>
        </section>

        {/* 3. INTRO SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-8">A Direct Option When Selling Feels Overwhelming</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed mb-6">
            Selling a house is often pitched as an exciting milestone, but for many homeowners, the reality is far more stressful. Whether you are dealing with a property that needs tens of thousands in repairs, navigating a difficult divorce, or managing an inherited home from across the country, a traditional listing is rarely the best answer.
          </p>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            Traditional real estate agents require the home to be &quot;retail ready.&quot; That means time, money, and contractors. We understand that sometimes you just need to close the chapter smoothly. We provide a straightforward, private alternative to the chaotic open market.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* 4. SITUATIONS SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Common Situations We Work With</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Major repairs needed (roof, foundation, mold)</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Inherited properties and probate cases</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Difficult tenants or squatters</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Pre-foreclosure or financial distress</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Divorce or sudden life transitions</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Hoarder homes or junk-filled properties</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Title issues, tax liens, or code violations</span>
             </li>
             <li className="flex gap-3 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0">✓</span>
               <span className="text-lg text-[#333333]/80">Relocation or managing from out of state</span>
             </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        {/* 5. WHY OWNERS SELL */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Why People Decide to Sell Directly</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Repair Fatigue</h3>
               <p className="text-[#333333]/80">You don&apos;t have the cash, energy, or reliable contractors to fix a failing roof, cracked foundation, or outdated plumbing.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Financial Pressure</h3>
               <p className="text-[#333333]/80">Mounting debt, impending foreclosure, or heavy tax burdens mean you need liquidity now, not six months from now.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Tenant Issues</h3>
               <p className="text-[#333333]/80">Tired of chasing rent, paying for destruction, or dealing with the legal headache of a difficult eviction process.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Life Transitions</h3>
               <p className="text-[#333333]/80">A sudden job loss, medical issue, or divorce requires a quiet, guaranteed sale to cleanly divide assets.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Time Constraints</h3>
               <p className="text-[#333333]/80">You need to relocate quickly for work or family and cannot afford to carry two mortgages while waiting for a retail buyer.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
               <h3 className="text-xl font-bold text-[#333333] mb-2">Emotional Weight</h3>
               <p className="text-[#333333]/80">Inherited homes often carry memories or family disputes. A direct sale allows you to close probate cleanly and move forward.</p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 6. PROCESS SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">A Simple, Direct Sale</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Reach Out</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Tell us about the property and the situation you are facing. The conversation is strictly confidential and carries zero obligation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Review</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">We evaluate the home&apos;s condition, the local market, and any title or tenant complexities to formulate a fair direct offer.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Offer</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">We present a clear offer to purchase the property entirely &quot;as-is&quot;, with no hidden fees and no requests for repairs.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Close</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">You pick the closing timeline. We finalize the paperwork through a reputable, local title company and you receive your funds.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 7. COMPARISON SECTION */}
        <section className="bg-[#f9fafb] p-8 md:p-12 border border-gray-200 rounded-sm">
          <h2 className="text-3xl font-bold text-[#333333] mb-8 text-center">Why Some Homeowners Skip the Traditional Route</h2>
          <p className="text-lg text-[#333333]/80 text-center max-w-2xl mx-auto mb-10">
             The traditional real estate market is designed for updated, move-in ready homes. If your property doesn&apos;t fit that description, the process quickly becomes a liability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white p-6 border border-gray-200 rounded-sm">
                <h3 className="text-xl font-bold text-red-700 mb-4 border-b border-gray-100 pb-2">Traditional Real Estate Route</h3>
                <ul className="space-y-3">
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Requires cleaning, painting, and costly repairs.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Dozens of strangers walking through your home.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Buyers demanding price drops after inspections.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> High risk of the buyer&apos;s loan falling through.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> You lose 6% to real estate agent commissions.</li>
                   <li className="flex gap-2 text-[#333333]/80"><span className="text-red-500 font-bold">✕</span> Process routinely takes 3 to 6 months.</li>
                </ul>
             </div>
             <div className="bg-white p-6 border border-[#52D017]/30 rounded-sm shadow-sm md:transform md:scale-105 relative z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
                <h3 className="text-xl font-bold text-[#111827] mb-4 border-b border-gray-100 pb-2">Direct Sale to XitSource</h3>
                <ul className="space-y-3">
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> We buy &quot;as-is.&quot; Leave the junk, don&apos;t fix a thing.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Complete privacy. No signs in the yard, no public open houses.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Direct funding. We don&apos;t rely on retail bank approvals.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> No appraisals or demanding home inspectors.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> Keep your equity. You pay exactly zero agent commissions.</li>
                   <li className="flex gap-2 text-[#333333]/90 font-medium"><span className="text-[#52D017] font-bold">✓</span> You pick the exact closing date.</li>
                </ul>
             </div>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Home Seller FAQs</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Does selling &quot;as-is&quot; really mean I don&apos;t have to fix anything?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. Whether the property has a caved-in roof, severe mold, or foundation issues, we factor the condition into our offer. You do not need to hire contractors or patch holes before selling.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do I need to clean out the house before I leave?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                No. You can take the belongings you want and simply leave the rest behind. We routinely purchase homes filled with years of accumulated items, debris, or trash.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Can I sell my house if it has terrible tenants?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. We regularly acquire tenant-occupied properties, including situations with non-paying tenants or squatters. We handle the property management and legal transitions after closing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Can you help if I am facing foreclosure?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes, but time is critical in pre-foreclosure. A direct sale can provide the liquidity needed to pay off the bank, stop the auction, and help salvage your credit profile.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Do you buy inherited or probate properties?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Yes. Probate sales are common. We work alongside the estate to purchase the home quietly, allowing families to liquidate the asset during a difficult period without the stress of managing a retail listing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">What if my house has title issues or tax liens?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                We work closely with title professionals who specialize in untangling complex liens, judgments, and cloudy titles. This is part of the process we handle prior to closing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Why shouldn&apos;t I just use a real estate agent?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Agents are excellent for updated, picture-perfect homes where time is not a factor. If your home needs work, if you need privacy, or if you simply cannot wait months for a retail buyer to secure a mortgage, a direct sale is the better path.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">How fast can we actually close?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                While every situation is unique—especially if title work is required—we structure our capital to move quickly. In clean title scenarios, you can often choose a closing date within a matter of weeks.
              </p>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA SECTION */}
        <section className="bg-[#111827] text-white p-12 rounded-sm text-center shadow-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Move Forward?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you are dealing with a stressful property situation and need a dependable exit route, reach out. We will provide a clear perspective on your options.
          </p>
          <Link href="https://www.xitsource.com/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors">
            Request Confidential Conversation
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
