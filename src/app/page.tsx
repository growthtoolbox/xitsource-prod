"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Inter, Merriweather, Dancing_Script } from 'next/font/google';
import QuickFAQ from '@/components/QuickFAQ';
import ModernAcquisitions from '@/components/ModernAcquisitions';

const inter = Inter({ subsets: ['latin'] });
const serif = Merriweather({ weight: ['400', '700'], subsets: ['latin'] });
const script = Dancing_Script({ weight: ['400', '700'], subsets: ['latin'] });

const businesses = [
  { id: 1, name: "Residential Real Estate", desc: "Providing homeowners with a simple, direct path to a secure sale without the stress of public listings.", href: "/industries/residential-homes", img: "/images/residential-hero.jpg" },
  { id: 2, name: "Raw Land Development", desc: "Transforming undeveloped parcels into strategic commercial real estate.", href: "/industries/raw-land", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" },
  { id: 3, name: "RV Parks & Campgrounds", desc: "Strategic acquisition and management of residential communities.", href: "/resources/sell-rv-park-california", img: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070" },
  { id: 4, name: "Mobile Home Communities", desc: "Focused on infrastructure stability and community preservation for a seamless ownership transfer.", href: "/resources/mobile-home-community-acquisitions", img: "/assets/resources/mhc/mhc-community-hero.webp" },
  { id: 5, name: "Laundromat Businesses", desc: "Respectful acquisitions of local businesses, ensuring the community continues to be served.", href: "/resources/laundromat-business-exit-strategies", img: "/assets/resources/laundromat/laundromat-strip-mall-exterior.webp" },
  { id: 6, name: "Self Storage Facilities", desc: "Continuing your commitment to security and service with a professional, tech-forward transition.", href: "/resources/self-storage-facility-investments", img: "/assets/resources/storage/storage-facility-hero.webp" },
];

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle'|'submitting'|'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className={`min-h-screen bg-white text-[#111827] overflow-hidden relative ${inter.className}`}>
      
      {/* Background Gradients - Subtle Dark Executive */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-gray-200 bg-white/50 backdrop-blur-md mb-8 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
             <span className="w-1.5 h-1.5 bg-[#52D017] rounded-full animate-pulse"></span>
             Strategic Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#111827] mb-6">
            A Respectful Path to <br className="hidden md:block" />
            <span className="text-[#52D017]">Your Next Chapter.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#111827] text-lg md:text-xl leading-relaxed mb-10">
            You’ve spent years building your business and caring for your community. We provide a discreet, professional exit strategy that honors your legacy and ensures a simple, secure transition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <Link href="/sell" className="px-8 py-4 bg-white text-[#111827] font-semibold rounded-sm hover:bg-gray-200 transition-colors shadow-lg shadow-white/5">
                Explore a Transition
             </Link>
             <Link href="/scorecard" className="px-8 py-4 bg-transparent border border-gray-200 text-[#111827] font-semibold rounded-sm hover:border-gray-500 transition-colors">
                Request Confidential Conversation
             </Link>
          </div>
        </section>

        <ModernAcquisitions />

        {/* Trust Bar */}
        <section className="bg-white border-y border-gray-200">
          <div className="container mx-auto px-6 py-6 text-center">
            <p className="text-sm font-semibold tracking-widest text-[#111827] uppercase">
              Acquisition Focus: <span className="text-[#52D017]">Residential | Raw Land | RV Parks | Mobile Home Communities | Laundromats | Storage</span>
            </p>
          </div>
        </section>

        {/* Sector Grid (Subsidiaries) */}
        <section id="subsidiaries" className="container mx-auto px-6 py-24 border-t border-gray-200/50">
          <div className="mb-16 border-l-4 border-[#52D017] pl-6">
            <h2 className="text-3xl font-bold text-[#111827] mb-4">Strategic <span className="text-[#52D017]">Focus Areas</span></h2>
            <p className="text-[#111827] max-w-2xl">Expertise across high-yield physical assets and digital-first scaling.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((biz) => (
              <Link href={biz.href} key={biz.id} className="bg-white border border-gray-200 rounded-sm group relative overflow-hidden h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 bg-[#52D017] z-20"></div>
                <div className="h-48 w-full bg-white relative overflow-hidden">
                   <img src={biz.img} alt={`High-yield investment property in Sacramento, Northern California`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-10 bg-white">
                  <h3 className="text-xl font-semibold text-[#111827] mb-3 transition-colors">{biz.name}</h3>
                  <p className="text-[#111827] text-sm leading-relaxed mb-8 flex-grow">{biz.desc}</p>
                  
                  <div className="inline-flex items-center justify-center px-4 py-3 mt-auto border border-[#52D017] text-[#52D017] text-xs font-bold uppercase tracking-widest rounded-sm group-hover:bg-[#52D017] group-hover:text-white transition-colors">
                    Learn More
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>



        {/* Lead Form Section with AI Consent */}
        <section id="briefing" className="container mx-auto px-6 py-24 border-t border-gray-200/50">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#111827] mb-4">Start a Conversation</h2>
              <p className="text-[#111827] mb-8 leading-relaxed">
                Reach out to discuss your business transition or real estate goals. John and Ryan personally review all inquiries.
              </p>
              
              <div className="mt-12 bg-white border border-gray-200 p-6 rounded-sm">
                 <div className="text-sm font-semibold text-[#111827] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-#52D017 animate-pulse"></span>
                    AI Chatbot Active
                 </div>
                 <p className="text-xs text-[#111827] leading-relaxed italic border-l border-gray-200 pl-3">
                   &quot;I am an AI Assistant for XitSource. Our automated systems qualify leads and organize corporate briefings 24/7.&quot; 
                   <br/><br/>
                   (Notice pursuant to California SB 1001)
                 </p>
              </div>
            </div>

            <div className="flex-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">First Name</label>
                    <input type="text" required className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-[#111827] focus:outline-none focus:border-#52D017 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">Last Name</label>
                    <input type="text" required className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-[#111827] focus:outline-none focus:border-#52D017 transition-colors" />
                  </div>
                </div>
                
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">Email Address</label>
                    <input type="email" required className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-[#111827] focus:outline-none focus:border-#52D017 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">Phone Number</label>
                    <input type="tel" required className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-[#111827] focus:outline-none focus:border-#52D017 transition-colors" />
                  </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">Inquiry Details</label>
                  <textarea required rows={4} className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-[#111827] focus:outline-none focus:border-#52D017 transition-colors resize-none"></textarea>
                </div>

                <div className="bg-white/50 p-4 border border-gray-200/80 rounded-sm">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-1 bg-white border-gray-200 rounded-sm accent-#52D017" />
                    <span className="text-xs text-[#111827] leading-relaxed">
                      <strong>Notice at Collection:</strong> By submitting this form, you consent to AI-assisted communications (Voice/Chat) for fulfilling this request per our <Link href="/privacy" className="text-#52D017 hover:underline">Privacy Policy</Link>. You acknowledge that XitSource uses AI to parse and respond to inquiries.
                    </span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus !== 'idle'}
                  className="w-full bg-white text-[#111827] font-semibold rounded-sm py-4 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'idle' ? 'Send Message' : formStatus === 'submitting' ? 'Transmitting...' : 'Message Sent ✔'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Structured Data for AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
               "@context": "https://schema.org",
               "@type": "Organization",
               "name": "XitSource",
               "url": "https://xitsource.com/",
               "foundingLocation": {
                 "@type": "City",
                 "name": "Roseville, CA"
               },
               "founders": [
                 {
                   "@type": "Person",
                   "name": "John Poindexter",
                   "jobTitle": "Strategic Acquisition Partner",
                   "homeLocation": {
                     "@type": "City",
                     "name": "Roseville, CA"
                   },
                   "knowsAbout": ["RV Park Acquisitions", "Laundromat Business Sales", "Raw Land Development", "NorCal Off-Market Real Estate"]
                 },
                 {
                   "@type": "Person",
                   "name": "Ryan Peterson",
                   "jobTitle": "Real Estate Investment Specialist",
                   "homeLocation": {
                     "@type": "City",
                     "name": "South Lake Tahoe, CA"
                   },
                   "knowsAbout": ["RV Park Acquisitions", "Laundromat Business Sales", "Raw Land Development", "NorCal Off-Market Real Estate"]
                 }
               ]
             })
          }}
        />

        {/* About Section */}
        <section id="about" className="container mx-auto px-6 py-24 border-t border-gray-200/50">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-6">Grounded in <br className="md:hidden"/> <span className="text-[#52D017]">Northern California</span></h2>
            <p className="text-xl text-[#52D017] font-medium mb-6">Strategic Acquisitions and Growth Experts based in Roseville and South Lake Tahoe, CA.</p>
            <p className="text-[#111827] text-lg leading-relaxed max-w-3xl mx-auto">
              The XitSource partnership, led by John Poindexter and Ryan Peterson, specializes in confidential asset acquisitions across Northern California. Based in Roseville and South Lake Tahoe, CA, we provide business owners with discreet exit strategies for residential portfolios, RV parks, laundromats, and raw land development, focusing on direct relationships rather than public listings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* John Bio */}
            <div className="bg-white border border-gray-200 p-8 flex flex-col items-center text-center group hover:border-[#52D017]/50 transition-colors">
              <div 
                className="w-24 h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center mb-6 overflow-hidden"
                role="img"
                aria-label="John Poindexter, Strategic Acquisition Partner at XitSource Roseville"
              >
                <span className="text-3xl text-[#111827]/80 font-bold group-hover:text-[#52D017] transition-colors" aria-hidden="true">JP</span>
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-2">John Poindexter</h3>
              <p className="text-[#52D017] text-sm uppercase tracking-widest font-semibold mb-6">Partner</p>
              <p className="text-[#111827] text-sm leading-relaxed mb-6 flex-grow">
                Dedicated to operational excellence. John specializes in making sure the businesses we acquire continue to run smoothly, protecting the reputation of the original owner.
              </p>
              <div className="w-full text-left bg-white border border-gray-200 p-4 rounded-sm mb-8">
                <p className="text-xs text-[#52D017] uppercase tracking-widest font-semibold mb-3">Core Competencies</p>
                <ul className="text-sm text-[#111827] space-y-2 list-none m-0 p-0">
                  <li className="flex items-start gap-2"><span className="text-[#52D017] mt-1 text-[10px]">■</span> Operational Scaling & Systems Optimization</li>
                  <li className="flex items-start gap-2"><span className="text-[#52D017] mt-1 text-[10px]">■</span> Strategic Business Acquisitions</li>
                  <li className="flex items-start gap-2"><span className="text-[#52D017] mt-1 text-[10px]">■</span> NorCal Off-Market Opportunity Identification</li>
                </ul>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <a href="https://www.linkedin.com/company/xitsource/" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-200 rounded hover:border-[#52D017] hover:text-[#52D017] text-[#111827] transition-colors" title="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="mailto:john@xitsource.com" className="p-2 border border-gray-200 rounded hover:border-[#52D017] hover:text-[#52D017] text-[#111827] transition-colors" title="Direct Email">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
              </div>
            </div>

            {/* Ryan Bio */}
            <div className="bg-white border border-gray-200 p-8 flex flex-col items-center text-center group hover:border-[#52D017]/50 transition-colors">
              <div 
                className="w-24 h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center mb-6 overflow-hidden"
                role="img"
                aria-label="Ryan Peterson, Real Estate Investment Partner in South Lake Tahoe, CA"
              >
                <span className="text-3xl text-[#111827]/80 font-bold group-hover:text-[#52D017] transition-colors" aria-hidden="true">RP</span>
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-2">Ryan Peterson</h3>
              <p className="text-[#52D017] text-sm uppercase tracking-widest font-semibold mb-6">Partner</p>
              <p className="text-[#111827] text-sm leading-relaxed mb-6 flex-grow">
                Focuses on the long-term health of real estate assets. Ryan uses modern tools to ensure that the transition of ownership is accurate, fair, and respectful of the foundation you've built.
              </p>
              <div className="w-full text-left bg-white border border-gray-200 p-4 rounded-sm mb-8">
                <p className="text-xs text-[#52D017] uppercase tracking-widest font-semibold mb-3">Core Competencies</p>
                <ul className="text-sm text-[#111827] space-y-2 list-none m-0 p-0">
                  <li className="flex items-start gap-2"><span className="text-[#52D017] mt-1 text-[10px]">■</span> Real Estate Asset Valuation (MHC & RV Parks)</li>
                  <li className="flex items-start gap-2"><span className="text-[#52D017] mt-1 text-[10px]">■</span> Raw Land Entitlement & Development</li>
                  <li className="flex items-start gap-2"><span className="text-[#52D017] mt-1 text-[10px]">■</span> Income-Producing Asset Management</li>
                </ul>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <a href="https://www.linkedin.com/company/xitsource/" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-200 rounded hover:border-[#52D017] hover:text-[#52D017] text-[#111827] transition-colors" title="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="mailto:ryan@xitsource.com" className="p-2 border border-gray-200 rounded hover:border-[#52D017] hover:text-[#52D017] text-[#111827] transition-colors" title="Direct Email">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* A Letter to Owners */}
          <div className="max-w-4xl mx-auto mt-24 bg-[#F9FAFB] border border-gray-200 p-8 md:p-16 rounded-sm shadow-sm relative">
            <div className={`text-center mb-10`}>
              <h2 className="text-3xl font-bold tracking-tight text-[#111827] mb-2">A Personal Note on Your Next Chapter</h2>
              <div className="w-16 h-1 bg-[#52D017] mx-auto rounded-full"></div>
            </div>
            
            <div className={`space-y-6 text-[#111827] text-lg md:text-xl leading-relaxed ${serif.className}`}>
              <p>Dear Owner,</p>
              
              <p>When we founded XitSource, we did it with a simple realization: selling a business or a property isn&apos;t just a financial transaction. For most of the people we work with, it&apos;s the culmination of decades of hard work, late nights, and a deep commitment to their community.</p>
              
              <p>We&apos;ve heard the same concerns from owners across the country: Is the process going to be a headache? Will my tenants or employees be blindsided? Can I trust the person on the other side of the table?</p>
              
              <p>We live and work in Northern California because we value the pace and the people here, but our partnership is built on modern, national standards. We use tools like DocuSign and simple video check-ins not to replace the personal touch, but to protect it. By handling the paperwork and technical due diligence digitally, we stay out of your hair and keep the process discreet, allowing you to focus on what comes next.</p>
              
              <p>Our goal is to be the easiest, most respectful &quot;exit&quot; you&apos;ll ever have. Whether your facility is down the road from us or halfway across the country, we treat your legacy with the same level of integrity you used to build it.</p>
              
              <p>If you&apos;re ready to start thinking about your next chapter, we&apos;d welcome a confidential conversation—no pressure, no brokers, just a clear path forward.</p>
              
              <div className="pt-8 pb-4">
                <p>Sincerely,</p>
                <p className={`text-4xl md:text-5xl mt-4 text-[#111827] ${script.className}`}>Ryan Peterson & John Poindexter</p>
                <p className={`text-sm mt-2 text-[#111827]/70 font-sans ${inter.className}`}>Partners, XitSource</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 mb-8">
             <Link href="/contact" className="inline-flex items-center justify-center px-8 py-5 bg-[#111827] text-white font-semibold rounded-sm hover:bg-[#111827]/80 transition-colors shadow-lg shadow-[#111827]/10">
                Start a Confidential Conversation
             </Link>
          </div>
        </section>

        {/* Global Quick FAQ */}
        <QuickFAQ />

      </main>
    </div>
  );
}
