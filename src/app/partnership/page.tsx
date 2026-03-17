import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#111827] pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Section 1: The Personal Note (New Header) */}
        <div className="text-center mb-24 mt-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111827] mb-6">
            Built on a Handshake.
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-[#111827] leading-relaxed">
            We founded XitSource to provide a direct, honest, and respectful path for owners ready to move on to their next chapter.
          </p>
        </div>

        {/* Section 2: Partner Bios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {/* John Bio */}
          <div className="bg-white border border-gray-200 p-8 flex flex-col items-center text-center group hover:border-[#52D017]/50 transition-colors rounded-sm shadow-sm">
            <div 
              className="w-24 h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center mb-6 overflow-hidden"
              role="img"
              aria-label="John Poindexter, Partner at XitSource"
            >
              <span className="text-3xl text-[#111827]/80 font-bold group-hover:text-[#52D017] transition-colors" aria-hidden="true">JP</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-2">John Poindexter</h3>
            <p className="text-[#111827]/70 text-sm uppercase tracking-widest font-semibold mb-6">Partner</p>
            <p className="text-[#111827] text-base leading-relaxed mb-8 flex-grow">
              John focuses on the operational health and long-term stability of every business we acquire. With a background in scaling systems and managing complex transitions, he ensures that the legacy you&apos;ve built is protected and that the hand-off is seamless for everyone involved.
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <a href="https://www.linkedin.com/company/xitsource/" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-200 rounded hover:border-[#52D017] hover:text-[#52D017] text-[#111827] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="mailto:john@xitsource.com" className="p-2 border border-gray-200 rounded hover:border-[#52D017] hover:text-[#52D017] text-[#111827] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>

          {/* Ryan Bio */}
          <div className="bg-white border border-gray-200 p-8 flex flex-col items-center text-center group hover:border-[#52D017]/50 transition-colors rounded-sm shadow-sm">
            <div 
              className="w-24 h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center mb-6 overflow-hidden"
              role="img"
              aria-label="Ryan Peterson, Partner at XitSource"
            >
              <span className="text-3xl text-[#111827]/80 font-bold group-hover:text-[#52D017] transition-colors" aria-hidden="true">RP</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-2">Ryan Peterson</h3>
            <p className="text-[#111827]/70 text-sm uppercase tracking-widest font-semibold mb-6">Partner</p>
            <p className="text-[#111827] text-base leading-relaxed mb-8 flex-grow">
              Ryan specializes in the acquisition of physical assets, from residential portfolios to specialized commercial properties. His approach is rooted in fair valuations and a &apos;no-headache&apos; closing process. He is dedicated to solving the complicated title, repair, or management issues that often stall traditional sales.
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <a href="https://www.linkedin.com/company/xitsource/" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-200 rounded hover:border-[#52D017] hover:text-[#52D017] text-[#111827] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="mailto:ryan@xitsource.com" className="p-2 border border-gray-200 rounded hover:border-[#52D017] hover:text-[#52D017] text-[#111827] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Section 3: The Values */}
        <div className="max-w-6xl mx-auto border-t border-gray-200/50 pt-20 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20 mb-16">
            {/* Value 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#F9FAFB] border border-gray-200 rounded-full flex items-center justify-center mb-8 text-[#111827]">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-5">Direct Communication</h3>
              <p className="text-[#111827] leading-relaxed text-base">
                You talk to the principals, not a middleman or a corporate committee.
              </p>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#F9FAFB] border border-gray-200 rounded-full flex items-center justify-center mb-8 text-[#111827]">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-5">As-Is Acquisitions</h3>
              <p className="text-[#111827] leading-relaxed text-base">
                We take on the repairs, the cleaning, and the tenant issues so you don&apos;t have to.
              </p>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#F9FAFB] border border-gray-200 rounded-full flex items-center justify-center mb-8 text-[#111827]">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-5">Total Discretion</h3>
              <p className="text-[#111827] leading-relaxed text-base">
                No public listings. No &apos;For Sale&apos; signs. No noise.
              </p>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-200/50 mt-16 max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl italic font-bold text-[#111827]">
              &quot;We do what we say we&apos;re going to do. Our word is our bond.&quot;
            </p>
          </div>
        </div>

        <div className="text-center mt-20">
          <Link href="/sell" className="inline-flex px-10 py-5 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg">
            Start a Private Conversation
          </Link>
        </div>

      </div>
    </div>
  );
}
