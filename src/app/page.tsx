"use client";

import Link from 'next/link';

const businesses = [
  { id: 1, name: "Multi-Family Homes", desc: "We acquire apartment communities and multifamily assets where operational improvements and repositioning can unlock long-term value.", href: "/industries/multi-family-homes", img: "/assets/industries/multi-family-homes/clean_exterior_entrance.png" },
  { id: 2, name: "RV Parks & Campgrounds", desc: "We target well-located parks with stable demand and opportunities for operational improvement and revenue optimization.", href: "/industries/rv-parks", img: "/assets/industries/rv-parks/mobile-home-park-1.jpg" },
  { id: 3, name: "Raw Land Development", desc: "We evaluate land with strategic development potential aligned with long-term growth and market demand.", href: "/industries/raw-land", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" },
];

export default function Home() {
  return (
    <div className={`min-h-screen bg-white text-[#111827] overflow-hidden relative`}>
      
      {/* Background Gradients - Subtle Dark Executive */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
      </div>

      <main className="relative z-10">
        
        {/* NEW HERO SECTION */}
        <section className="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#111827] mb-6 max-w-5xl">
            Multifamily Acquisition <br className="hidden md:block" />
            <span className="text-[#52D017]">&amp; Investment</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#111827] text-lg md:text-xl leading-relaxed mb-10">
            We acquire and optimize multifamily apartment communities through disciplined operations and long-term value creation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/sell" className="px-8 py-4 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:-translate-y-1 transition-all shadow-lg border border-[#52D017] flex items-center gap-2 justify-center">
                👉 Submit a Deal
             </Link>
             <Link href="/the-letter" className="px-8 py-4 bg-[#111827] text-white font-semibold rounded-sm hover:bg-[#111827]/80 hover:-translate-y-1 transition-all">
                View Acquisition Criteria
             </Link>
          </div>
          
          <div className="w-full h-64 md:h-[500px] overflow-hidden rounded-sm relative group mt-16 max-w-5xl mx-auto shadow-2xl">
             <img src="/assets/home/home_hero_multifamily.png" alt="Multifamily Home Hero" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </section>

        {/* Sector Grid (What We Acquire) */}
        <section className="container mx-auto px-6 py-24 border-t border-gray-200/50">
          <div className="mb-16 border-l-4 border-[#52D017] pl-6 max-w-3xl">
            <h2 className="text-3xl font-bold text-[#111827] mb-4">Value-Driven <span className="text-[#52D017]">Acquisition Focus.</span></h2>
            <p className="text-[#111827] text-lg">
               We focus on acquiring and improving real estate assets with strong underlying fundamentals. Our approach prioritizes operational discipline, strategic upgrades, and long-term performance over short-term speculation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((biz) => (
              <Link href={biz.href} key={biz.id} className="bg-white border border-gray-200 rounded-sm group relative overflow-hidden h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 bg-[#52D017] z-20"></div>
                <div className="h-48 w-full bg-white relative overflow-hidden">
                   <img src={biz.img} alt={`${biz.name} property`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
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

        {/* NEW Multifamily Focus Section */}
        <section className="container mx-auto px-6 py-24 border-t border-gray-200/50 bg-[#f9fafb]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 h-64 md:h-[400px] overflow-hidden rounded-sm relative group shadow-xl">
               <img src="/assets/home/multifamily_focus_courtyard.png" alt="Multifamily Focus Courtyard" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="w-12 h-1 bg-[#52D017] mb-6 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">Why Multifamily</h2>
              <p className="text-lg text-[#111827]/90 leading-relaxed">
                Multifamily assets provide scalable, resilient income with multiple levers for value creation. We focus on properties where improved management, targeted upgrades, and disciplined execution can drive meaningful performance gains.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-32 border-t border-gray-200/50 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-6">Have a Multifamily Opportunity?</h2>
            <p className="text-lg md:text-xl text-[#111827] mb-10 leading-relaxed border-l-4 border-l-[#52D017] pl-4 inline-block text-left mx-auto">
              We evaluate acquisition, repositioning, and partnership opportunities across Northern California.
            </p>
            <div>
              <Link href="/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold text-lg rounded-sm hover:bg-[#52D017]/90 transition-all shadow-lg hover:-translate-y-1">
                Submit Property
              </Link>
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
                 "@type": "Country",
                 "name": "United States"
               },
               "founders": [
                 {
                   "@type": "Person",
                   "name": "John Poindexter",
                   "jobTitle": "Strategic Acquisition Partner",
                   "homeLocation": {
                     "@type": "Country",
                     "name": "United States"
                   },
                   "knowsAbout": ["Multifamily Real Estate", "Value-Add Assets", "Private Acquisitions", "Northern California Investments"]
                 }
               ]
             })
          }}
        />

      </main>
    </div>
  );
}
