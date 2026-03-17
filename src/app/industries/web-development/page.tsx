import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development | High-Performance Info Structure',
  description: 'High-performance Next.js 15 builds as a business foundation.',
};

export default function WebDevelopmentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Web Development by XitSource',
    'url': 'https://xitsource.com/sectors/web-development',
    'logo': 'https://xitsource.com/logo.png',
    'description': 'High-performance Next.js 15 builds as a business foundation.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Roseville',
      'addressRegion': 'CA',
      'addressCountry': 'US'
    },
    'founder': [
      {
        '@type': 'Person',
        'name': 'John Poindexter'
      }
    ],
    'areaServed': 'Northern California'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Backlink */}
          <Link href="/#subsidiaries" className="inline-flex items-center gap-2 text-sm font-semibold text-[#111827] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
            <span>←</span> Return to Partnership Hub
          </Link>

          {/* Page Header */}
          <div className="mb-16 border-b border-gray-200 pb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
              Sector Overview
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111827] mb-6">
              Web Development
            </h1>
            <p className="text-xl text-[#111827] leading-relaxed">
              High-performance Next.js 15 builds as a business foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content Area */}
            <div className="md:col-span-2 space-y-8 text-[#111827] leading-relaxed text-lg">
              <p>
                A business&apos;s digital infrastructure is its most critical asset for growth and acquisition valuation. We specialize in building lightning-fast, highly scalable web solutions using modern toolchains like Next.js 15.
              </p>

              {/* Callout Box */}
              <div className="mt-16 bg-white border-l-4 border-[#52D017] p-8 rounded-r-sm">
                <h4 className="text-sm font-bold tracking-widest text-[#52D017] uppercase mb-4">
                  The XitSource Perspective
                </h4>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
                    <span className="text-sm text-[#111827]/80 font-bold">JP</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#111827]">John Poindexter</div>
                    <div className="text-xs text-[#111827]/70 uppercase tracking-widest">Lead Consultant - Roseville</div>
                  </div>
                </div>
                <blockquote className="text-base italic text-[#111827] leading-relaxed">
                  &quot;Leading our operational philosophy, ensuring a seamless handover that protects the foundation you&apos;ve built. We focus on clear execution, preserving relationships, and continuing your legacy without disruption.&quot;
                </blockquote>
              </div>
            </div>

            {/* Sidebar Data */}
            <div className="md:col-span-1 border-t md:border-t-0 md:border-l border-gray-200 pt-12 md:pt-0 md:pl-12">
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link href="/sell" className="block w-full py-4 px-6 bg-[#52D017]/10 border border-[#52D017] text-[#52D017] font-semibold text-center rounded-sm hover:bg-[#52D017] hover:text-[#111827] transition-colors">
                  Start a Confidential Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
