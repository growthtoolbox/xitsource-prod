import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Who You're Working With | Direct Buyers | XitSource",
  description: "XitSource partners are direct buyers, not brokers. We work with property and business owners nationwide who want a simple, private sale.",
};

// Simple SVG Icons
const LinkedInIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EnvelopeIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

export default function PartnershipPage() {
  return (
    <div className="bg-white text-[#333333] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <div className="bg-[#f9fafb] border-b border-gray-200 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
            The Partnership
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#333333] mb-6">
            Direct Buyers. Real Operators. Not Brokers.
          </h1>
          <p className="text-xl text-[#333333]/80 leading-relaxed max-w-3xl mx-auto mb-10">
            We work directly with property and business owners nationwide who want a simple, private sale. No listings. No drawn-out process. Just a direct conversation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link href="https://www.xitsource.com/sell" className="inline-block px-8 py-4 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors shadow-sm text-center">
              Request Confidential Conversation
            </Link>
          </div>
          <p className="text-sm font-bold text-[#333333]/60 uppercase tracking-widest">
            No pressure. No obligation.
          </p>
        </div>
      </div>

      {/* 2. CREDIBILITY STRIP */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-6 max-w-5xl py-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4 text-sm font-semibold text-[#333333]/70 uppercase tracking-wider text-center">
            <span>Nationwide Acquisitions</span>
            <span className="hidden md:inline text-[#52D017]">•</span>
            <span>Residential & Income Assets</span>
            <span className="hidden md:inline text-[#52D017]">•</span>
            <span>Complex Situations</span>
            <span className="hidden md:inline text-[#52D017]">•</span>
            <span>Direct, Off-Market Sales</span>
            <span className="hidden md:inline text-[#52D017]">•</span>
            <a href="https://www.linkedin.com/company/xitsource/" target="_blank" rel="noopener noreferrer" className="hover:text-[#52D017] transition-colors flex items-center justify-center gap-2">
              <span className="hidden md:inline">Focus on Simple, Practical Outcomes</span>
              <span className="md:hidden">Simple Outcomes</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl py-16 space-y-24">

        {/* 3. INTRO SECTION */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Who You&apos;re Working With</h2>
          <p className="text-lg text-[#333333]/90 leading-relaxed mb-6">
            XitSource operates as a direct buyer, not an intermediary. When you <Link href="/resources/guides/selling-without-a-broker" className="text-[#52D017] hover:underline font-semibold">sell without a broker</Link>, you are dealing directly with the principles who will fund and operate the asset.
          </p>
          <p className="text-lg text-[#333333]/90 leading-relaxed">
            We understand that real estate and business transitions are often driven by real-life situations. Our focus is absolute simplicity, clarity, and execution. We are highly selective and entirely practical, prioritizing logical deal structures over promotional sales tactics.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* 4. PARTNER BIOS */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* John Poindexter */}
            <div className="bg-white p-8 border border-gray-200 rounded-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#111827] text-white flex items-center justify-center font-bold text-2xl rounded-full mb-6 shrink-0">JP</div>
              <h3 className="text-2xl font-bold text-[#333333] mb-1">John Poindexter</h3>
              <p className="text-[#52D017] font-semibold text-sm uppercase tracking-widest mb-6">Partner</p>
              
              <div className="flex-grow">
                <p className="text-lg text-[#333333]/80 leading-relaxed mb-4">
                  John focuses on what happens after a deal is agreed to. His role is ensuring the transition works in practice, not just on paper.
                </p>
                <p className="text-lg text-[#333333]/80 leading-relaxed mb-4">
                  He works on operational continuity, system handoff, and stabilizing assets post-acquisition. His background includes scaling systems, managing complex transitions, and keeping deals moving when unexpected issues arise.
                </p>
                <p className="text-lg text-[#333333]/80 leading-relaxed mb-8">
                  Sellers working with John can expect a steady, structured process focused on protecting what they’ve built and ensuring a smooth transition.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                <a href="https://www.linkedin.com/in/johnepoindexter" target="_blank" rel="noopener noreferrer" className="text-[#333333]/60 hover:text-[#0a66c2] transition-colors" aria-label="John Poindexter LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href="mailto:John@xitsource.com" className="text-[#333333]/60 hover:text-[#52D017] transition-colors" aria-label="Email John Poindexter">
                  <EnvelopeIcon />
                </a>
              </div>
            </div>

            {/* Ryan Peterson */}
            <div className="bg-white p-8 border border-gray-200 rounded-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#111827] text-white flex items-center justify-center font-bold text-2xl rounded-full mb-6 shrink-0">RP</div>
              <h3 className="text-2xl font-bold text-[#333333] mb-1">Ryan Peterson</h3>
              <p className="text-[#52D017] font-semibold text-sm uppercase tracking-widest mb-6">Partner</p>
              
              <div className="flex-grow">
                <p className="text-lg text-[#333333]/80 leading-relaxed mb-4">
                  Ryan focuses on acquisitions and deal structure across residential and commercial assets.
                </p>
                <p className="text-lg text-[#333333]/80 leading-relaxed mb-4">
                  He works directly with owners to evaluate properties, navigate complications, and move transactions forward without unnecessary friction. His approach is simple. Identify the situation, solve the problems that stall deals, and keep things moving.
                </p>
                <p className="text-lg text-[#333333]/80 leading-relaxed mb-8">
                  Sellers working with Ryan can expect clear communication, practical thinking, and a process focused on real outcomes.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                <a href="https://www.linkedin.com/in/ryan-peterson-a974b256" target="_blank" rel="noopener noreferrer" className="text-[#333333]/60 hover:text-[#0a66c2] transition-colors" aria-label="Ryan Peterson LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href="mailto:Ryan@xitsource.com" className="text-[#333333]/60 hover:text-[#52D017] transition-colors" aria-label="Email Ryan Peterson">
                  <EnvelopeIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 5. WHAT IT'S LIKE TO WORK WITH US */}
        <section className="bg-white p-8 md:p-12 border border-[#52D017]/30 rounded-sm shadow-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#52D017] rounded-t-sm"></div>
          <h2 className="text-3xl font-bold text-[#333333] mb-8">What It&apos;s Like to Work With Us</h2>
          <ul className="space-y-4 max-w-2xl">
             <li className="flex gap-4 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0 text-xl">✓</span>
               <span className="text-lg text-[#333333]/90 font-medium">Direct conversations. No pressure.</span>
             </li>
             <li className="flex gap-4 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0 text-xl">✓</span>
               <span className="text-lg text-[#333333]/90 font-medium">Straight answers. No runaround.</span>
             </li>
             <li className="flex gap-4 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0 text-xl">✓</span>
               <span className="text-lg text-[#333333]/90 font-medium">Experience with complex situations.</span>
             </li>
             <li className="flex gap-4 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0 text-xl">✓</span>
               <span className="text-lg text-[#333333]/90 font-medium">Focus on solutions, not obstacles.</span>
             </li>
             <li className="flex gap-4 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0 text-xl">✓</span>
               <span className="text-lg text-[#333333]/90 font-medium">Clear, step-by-step process.</span>
             </li>
             <li className="flex gap-4 items-start">
               <span className="text-[#52D017] font-bold mt-1 shrink-0 text-xl">✓</span>
               <span className="text-lg text-[#333333]/90 font-medium">Built around your timeline.</span>
             </li>
          </ul>
        </section>

        {/* 6. PROCESS REINFORCEMENT */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#333333] mb-10 text-center">A Straightforward Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="font-bold text-[#333333]">Connect</h3>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="font-bold text-[#333333]">Review</h3>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h3 className="font-bold text-[#333333]">Offer</h3>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl mb-4">4</div>
              <h3 className="font-bold text-[#333333]">Close</h3>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 7. COMPANY + SOCIAL PRESENCE (SUBTLE) */}
        <section className="text-center max-w-2xl mx-auto">
           <h2 className="text-2xl font-bold text-[#333333] mb-4">Connect With XitSource</h2>
           <p className="text-lg text-[#333333]/80 mb-6">Stay connected and view company updates and activity.</p>
           <div className="flex items-center justify-center gap-6">
              <a href="https://www.linkedin.com/company/xitsource/" target="_blank" rel="noopener noreferrer" className="text-[#333333]/60 hover:text-[#0a66c2] transition-colors" aria-label="XitSource LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579536145410" target="_blank" rel="noopener noreferrer" className="text-[#333333]/60 hover:text-[#1877F2] transition-colors" aria-label="XitSource Facebook">
                <FacebookIcon />
              </a>
           </div>
        </section>

        {/* 8. FINAL CTA SECTION */}
        <section className="bg-[#111827] text-white p-12 rounded-sm text-center shadow-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Start With a Simple Conversation</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you’re considering selling and want to understand your options, the first step is a direct conversation. No obligation. No pressure.
          </p>
          <Link href="https://www.xitsource.com/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors">
            Request Confidential Conversation
          </Link>
        </section>

        {/* COMPLIANCE / FOOTER NOTE */}
        <section className="pt-8 text-center text-sm text-[#333333]/80 border-t border-gray-200">
          <p className="mb-4 text-xs font-bold tracking-widest uppercase">Direct Acquisition Guidelines</p>
          <p className="max-w-3xl mx-auto leading-relaxed text-xs opacity-75">
            XitSource operates strictly as a direct principal buyer in off-market transactions. We are not real estate agents and do not list properties. All acquisitions and timelines are subject to standard operational due diligence. We make no guaranteed claims regarding specific closing speeds across all asset classes. CCPA/CPRA Compliant.
          </p>
        </section>

      </div>
    </div>
  );
}
