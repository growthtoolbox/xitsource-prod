import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Preparing Your Staff for Ownership Change | XitSource Guides",
  description: "Learn how to protect your team, maintain stability, and transition ownership privately without creating employee fear or operational disruption.",
};

export default function PreparingStaffGuidePage() {
  return (
    <div className="bg-white text-[#333333] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <div className="bg-[#f9fafb] border-b border-gray-200 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/resources/guides" className="inline-flex items-center gap-2 text-sm font-semibold text-[#333333] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
            <span>←</span> Back to Guides
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
            Leadership & Transition
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#333333] mb-6">
            Preparing Your Staff for Ownership Change
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#333333]/90 leading-relaxed mb-10 border-l-4 border-l-[#52D017] pl-6">
            How to protect your team, maintain stability, and transition ownership without creating fear or disruption.
          </p>
          <p className="text-lg text-[#333333]/80 leading-relaxed max-w-3xl mb-10">
            Your employees are one of your most valuable assets. A poorly handled transition can create uncertainty, trigger turnover, and disrupt operations. A properly managed transition protects your team, preserves culture, and ensures continuity under new ownership.<br /><br />
            This guide outlines how to manage communication, timing, and expectations during a private ownership transition.
          </p>
          <Link href="/sell" className="inline-block px-8 py-4 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors shadow-sm">
            Request Confidential Conversation
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl py-16 space-y-24">
        
        {/* 2. DIRECT ANSWER (AEO BLOCK) */}
        <section className="bg-white p-8 md:p-10 border border-gray-200 shadow-xl shadow-black/5 rounded-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
          <h2 className="text-2xl font-bold text-[#333333] mb-6">How do you prepare your staff for an ownership change?</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            To prepare your staff for an ownership change, you should delay announcements until the deal is near completion, maintain strict confidentiality during negotiations, and communicate clearly once certainty exists. Working with a direct buyer allows you to control timing, messaging, and continuity, reducing the risk of employee turnover and operational disruption.
          </p>
        </section>

        {/* 3. WHY THIS MATTERS */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Why This Matters</h2>
          <p className="text-lg text-[#333333]/80 leading-relaxed mb-8">
            Improperly handled transitions create avoidable damage:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Employee Flight</h3>
              <p className="text-[#333333]/80">Uncertainty causes key team members to leave before the transition is complete.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Operational Disruption</h3>
              <p className="text-[#333333]/80">Daily performance drops when staff become distracted or concerned about job security.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Rumors & Misinformation</h3>
              <p className="text-[#333333]/80">Without controlled communication, speculation spreads quickly and undermines leadership.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm">
              <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Loss of Culture</h3>
              <p className="text-[#333333]/80">A rushed or unclear transition can erode the culture you spent years building.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 border border-gray-100 rounded-sm md:col-span-2">
              <h3 className="text-lg font-bold text-[#333333] mb-3 border-b border-gray-200 pb-2">Client Impact</h3>
              <p className="text-[#333333]/80">Customers may lose confidence if they sense instability within your organization.</p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 4. STEP-BY-STEP PROCESS */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">The Step-By-Step Process</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Maintain Confidentiality Early</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Do not inform staff during initial discussions or negotiations. Keep conversations limited to essential parties only.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Align With the Buyer</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Work directly with the acquisition partner to define how employees will be treated post-transition. Alignment prevents mixed messaging.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Time the Announcement Correctly</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Announce the transition only when the deal is substantially certain. This is typically near the end of due diligence.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Deliver a Clear Message</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Communicate directly with your team. Reinforce stability, continuity, and future direction.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">5</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Introduce New Ownership Properly</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Position the new owner as a steward, not a disruptor. Focus on continuity rather than change.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xl shrink-0">6</div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Provide Short-Term Certainty</h3>
                <p className="text-lg text-[#333333]/80 leading-relaxed">Clearly outline what will not change immediately. Stability reduces anxiety.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 5. COMMON MISTAKES TO AVOID */}
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-red-50 text-red-700 border border-red-200 mb-6 text-xs font-bold tracking-widest uppercase">
            Caution
          </div>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Common Mistakes to Avoid</h2>
          <ul className="space-y-6">
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold mt-1 shrink-0">✕</span>
              <div>
                <strong className="text-lg text-[#333333] block">Announcing Too Early:</strong>
                <span className="text-[#333333]/80">Premature communication creates unnecessary fear and turnover risk.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold mt-1 shrink-0">✕</span>
              <div>
                <strong className="text-lg text-[#333333] block">Lack of Clear Messaging:</strong>
                <span className="text-[#333333]/80">Vague explanations lead to confusion and speculation.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold mt-1 shrink-0">✕</span>
              <div>
                <strong className="text-lg text-[#333333] block">Overpromising:</strong>
                <span className="text-[#333333]/80">Avoid making commitments that the new ownership has not confirmed.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold mt-1 shrink-0">✕</span>
              <div>
                <strong className="text-lg text-[#333333] block">Ignoring Key Employees:</strong>
                <span className="text-[#333333]/80">Failing to address leadership or critical staff directly can destabilize operations.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 font-bold mt-1 shrink-0">✕</span>
              <div>
                <strong className="text-lg text-[#333333] block">Public Exposure:</strong>
                <span className="text-[#333333]/80">Using brokers or listings that expose the business before internal communication is controlled.</span>
              </div>
            </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        {/* 6. TIMING STRATEGY */}
        <section className="bg-[#f9fafb] p-8 md:p-12 border border-gray-200 rounded-sm">
          <h2 className="text-3xl font-bold text-[#333333] mb-10 text-center">Timing Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-6 border border-gray-200 rounded-sm">
              <h3 className="font-bold text-[#333333] mb-3 text-sm tracking-widest uppercase border-b border-gray-100 pb-3">Early Stage</h3>
              <p className="text-xs text-gray-500 mb-2 font-mono">CONFIDENTIAL PHASE</p>
              <p className="text-[#333333]/80 text-sm">No staff awareness. Focus on evaluation and alignment.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-sm">
              <h3 className="font-bold text-[#333333] mb-3 text-sm tracking-widest uppercase border-b border-gray-100 pb-3">Mid Stage</h3>
              <p className="text-xs text-gray-500 mb-2 font-mono">PRE-CLOSE PLANNING</p>
              <p className="text-[#333333]/80 text-sm">Prepare communication strategy with buyer. Identify key personnel.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-sm">
              <h3 className="font-bold text-[#333333] mb-3 text-sm tracking-widest uppercase border-b border-gray-100 pb-3">Late Stage</h3>
              <p className="text-xs text-gray-500 mb-2 font-mono">ANNOUNCEMENT WINDOW</p>
              <p className="text-[#333333]/80 text-sm">Deliver clear, unified message once deal certainty is high.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-sm">
              <h3 className="font-bold text-[#333333] mb-3 text-sm tracking-widest uppercase border-b border-gray-100 pb-3">Post-Close</h3>
              <p className="text-xs text-gray-500 mb-2 font-mono">STABILIZATION PHASE</p>
              <p className="text-[#333333]/80 text-sm">Reinforce continuity, address concerns, and maintain operational consistency.</p>
            </div>
          </div>
        </section>

        {/* 7. WHY DIRECT ACQUISITION SUPPORTS STAFF STABILITY */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Why Direct Acquisition Supports Staff Stability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">Controlled Communication</h3>
                <p className="text-[#333333]/80">No public listings or exposure that trigger unnecessary concern.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">Aligned Incentives</h3>
                <p className="text-[#333333]/80">Direct buyers prioritize continuity and operational stability.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">No External Noise</h3>
                <p className="text-[#333333]/80">No brokers, no open-market speculation, no disruption from outside parties.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">Faster Process</h3>
                <p className="text-[#333333]/80">Shorter timelines reduce the period of uncertainty for employees.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start md:col-span-2">
              <div className="bg-[#52D017]/20 p-2 rounded shrink-0">
                <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">Operational Respect</h3>
                <p className="text-[#333333]/80">Existing systems and teams are preserved, not immediately overhauled.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 8. FAQ SECTION (AEO OPTIMIZED) */}
        <section>
          <h2 className="text-3xl font-bold text-[#333333] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">When should I tell my employees I&apos;m selling?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                You should inform employees only when the deal is near completion and certainty is high to avoid unnecessary disruption.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Will my employees lose their jobs?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                The goal of a direct acquisition is continuity. Most transitions prioritize retaining existing staff and maintaining operations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">How do I prevent employees from leaving?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Control timing, communicate clearly, and avoid premature announcements that create uncertainty.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Should I tell managers first?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                In some cases, key leaders may be informed shortly before a full announcement, but only when aligned with the buyer.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">What if employees react negatively?</h3>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                Clear communication and reassurance around stability typically reduce negative reactions.
              </p>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA SECTION */}
        <section className="bg-[#111827] text-white p-12 rounded-sm text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Protect Your Team During Transition</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you are planning an ownership change and want to ensure a stable, professional transition for your employees, we can help you structure it correctly from the beginning.
          </p>
          <Link href="/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors">
            Request Confidential Conversation
          </Link>
        </section>

        {/* 10. RELATED GUIDES (INTERNAL LINKS) */}
        <section className="pt-8">
          <h2 className="text-xl font-bold text-[#333333] mb-8 border-b border-gray-200 pb-4">Read Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href="/resources/guides/selling-without-a-broker" className="block p-6 bg-[#f9fafb] border border-gray-200 rounded-sm hover:border-[#52D017] hover:shadow-md transition-all group">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Strategy</p>
              <h3 className="text-lg font-bold text-[#333333] group-hover:text-[#52D017] transition-colors">Selling a Business Without a Broker</h3>
            </Link>
            <Link href="/resources/guides" className="block p-6 bg-[#f9fafb] border border-gray-200 rounded-sm hover:border-[#52D017] hover:shadow-md transition-all group">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Execution</p>
              <h3 className="text-lg font-bold text-[#333333] group-hover:text-[#52D017] transition-colors">Timeline to Sell a Business or Property</h3>
            </Link>
          </div>
          <div className="text-center">
            <Link href="/resources/guides" className="text-sm font-bold text-[#333333] hover:text-[#52D017] uppercase tracking-widest border-b-2 border-[#52D017] pb-1">
              View All Guides in the Hub
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
