import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Thank You | XitSource",
  description: "Your inquiry has been successfully received. We will be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="bg-white min-h-screen text-[#333333]">
      <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827] mb-6">
          Your Inquiry is in Good Hands.
        </h1>
        <p className="text-lg md:text-xl text-[#333333]/90 leading-relaxed mb-16 max-w-2xl mx-auto">
          Thank you for reaching out. Your information has been sent directly to John and Ryan. You can expect a confidential follow-up within 24&ndash;48 hours.
        </p>

        <div className="bg-[#f9fafb] p-8 md:p-12 rounded-sm border border-gray-200 text-left mb-16 shadow-sm">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">Need to speak with us sooner?</h2>
          <p className="text-lg text-[#333333]/80 leading-relaxed mb-8">
            If you&apos;d prefer to skip the wait, you can reach us directly at <strong className="text-[#111827]">916-892-0680</strong>.
          </p>
          <a href="tel:9168920680" className="inline-block px-8 py-4 bg-white border border-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-gray-50 transition-colors shadow-sm">
            Call Now
          </a>
        </div>

        <div className="text-left mb-16">
          <h2 className="text-xl font-bold text-[#333333] mb-8 border-b border-gray-200 pb-4">While You Wait</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/the-letter" className="block p-6 bg-white border border-gray-200 rounded-sm hover:border-[#52D017] hover:shadow-md transition-all group">
              <h3 className="text-lg font-bold text-[#333333] group-hover:text-[#52D017] transition-colors mb-2">The Letter to Owners</h3>
              <p className="text-sm text-[#333333]/80">Read our philosophy on direct acquisitions.</p>
            </Link>
            <Link href="/resources" className="block p-6 bg-white border border-gray-200 rounded-sm hover:border-[#52D017] hover:shadow-md transition-all group">
              <h3 className="text-lg font-bold text-[#333333] group-hover:text-[#52D017] transition-colors mb-2">Transition Guides</h3>
              <p className="text-sm text-[#333333]/80">Explore resources on the selling process.</p>
            </Link>
            <Link href="/scorecard" className="block p-6 bg-white border border-gray-200 rounded-sm hover:border-[#52D017] hover:shadow-md transition-all group">
              <h3 className="text-lg font-bold text-[#333333] group-hover:text-[#52D017] transition-colors mb-2">Seller Scorecard</h3>
              <p className="text-sm text-[#333333]/80">Assess your readiness for a transaction.</p>
            </Link>
          </div>
        </div>

        <div className="text-left border-t border-gray-200 pt-12">
          <p className="text-lg text-[#333333]/90 italic mb-6">&quot;We look forward to speaking with you soon.&quot;</p>
          <p className="font-bold text-[#111827]">John Poindexter &amp; Ryan Peterson</p>
          <p className="text-[#333333]/80">Partners, XitSource</p>
          <p className="text-[#333333]/80 mt-1">Office: <a href="tel:9168920680" className="hover:text-[#52D017] transition-colors">916-892-0680</a></p>
        </div>
      </div>
    </div>
  );
}
