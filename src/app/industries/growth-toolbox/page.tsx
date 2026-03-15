import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GrowthToolBox | Digital Marketing for NorCal Businesses',
  description: 'GrowthToolBox is XitSource’s dedicated arm for SEO-optimized web builds and digital scaling strategies that accelerate business valuation for sale or transition.',
};

export default function GrowthToolBoxPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'GrowthToolBox by XitSource',
    'url': 'https://xitsource.com/sectors/growth-toolbox',
    'logo': 'https://xitsource.com/logo.png',
    'description': 'We provide high-performance, SEO-optimized website builds integrated directly with your social media marketing campaigns for a seamless, high-conversion workflow.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Roseville',
      'addressRegion': 'CA',
      'postalCode': '95678',
      'addressCountry': 'US'
    },
    'founder': [
      {
        '@type': 'Person',
        'name': 'John Poindexter'
      },
      {
        '@type': 'Person',
        'name': 'Ryan Peterson'
      }
    ],
    'areaServed': 'Northern California'
  };

  return (
    <>
      {/* Injecting AEO Schema */}
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
              GrowthToolBox
            </h1>
            <p className="text-xl text-[#111827] leading-relaxed">
              Comprehensive social media marketing and high-performance digital infrastructure to ensure your physical assets translate into a dominant online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content Area */}
            <div className="md:col-span-2 space-y-8 text-[#111827] leading-relaxed text-lg">
              <p>
                In today&apos;s NorCal market, the valuation of a physical asset or traditional business is inextricably linked to its digital footprint. GrowthToolBox represents the operational marketing division of XitSource, dedicated strictly to identifying bottlenecks in your conversion cycle and deploying rapid, modern solutions. 
              </p>
              
              <h3 className="text-2xl font-semibold text-[#111827] mt-12 mb-4">Strategic Digital Deployment</h3>
              <p>
                We do not just offer generic marketing packages; we construct high-conversion funnels explicitly tailored for real estate and business acquisitions. By integrating full-stack web development (utilizing advanced frameworks like Next.js 15) with targeted social media scaling, we drive qualified, localized leads directly into your operational pipelines.
              </p>

              {/* Callout Box */}
              <div className="mt-16 bg-white border-l-4 border-[#52D017] p-8 rounded-r-sm">
                <h4 className="text-sm font-bold tracking-widest text-[#52D017] uppercase mb-4">
                  The XitSource Perspective
                </h4>
                <blockquote className="text-xl italic text-[#111827] leading-relaxed">
                  &quot;Beyond Marketing: Why John and Ryan emphasize optimized web infrastructure as the foundation for NorCal scaling.&quot;
                </blockquote>
              </div>
            </div>

            {/* Sidebar Data */}
            <div className="md:col-span-1 border-t md:border-t-0 md:border-l border-gray-200 pt-12 md:pt-0 md:pl-12">
              <h4 className="text-sm font-semibold tracking-widest text-[#111827]/70 uppercase mb-6">Execution Pillars</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-[#111827] font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#52D017] rounded-full"></span>
                    SEO & Infrastructure
                  </h5>
                  <p className="text-sm text-[#111827]">Technical SEO frameworks emphasizing speed and AI-engine visibility (AEO).</p>
                </div>
                
                <div>
                  <h5 className="text-[#111827] font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#52D017] rounded-full"></span>
                    Social Scaling
                  </h5>
                  <p className="text-sm text-[#111827]">Organic and paid strategies designed to capture local California market share.</p>
                </div>

                <div>
                  <h5 className="text-[#111827] font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#52D017] rounded-full"></span>
                    Asset Valuation
                  </h5>
                  <p className="text-sm text-[#111827]">Digital acceleration directly linked to improving eventual exit multiples.</p>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-200">
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
