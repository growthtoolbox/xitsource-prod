"use client";

import Link from 'next/link';

const businesses = [
  { id: 1, name: "Multi-Family Homes", desc: "Apartment communities and multifamily properties where repositioning and operational improvements unlock scalable value.", href: "/industries/multi-family-homes", img: "/assets/industries/multi-family-homes/clean_exterior_entrance.png" },
  { id: 2, name: "RV Parks & Campgrounds", desc: "Demand-driven assets with opportunities for improved management and revenue optimization.", href: "/industries/rv-parks", img: "/assets/industries/rv-parks/mobile-home-park-1.jpg" },
  { id: 3, name: "Laundromats", desc: "Cash-flowing businesses with modernization potential and operational upside.", href: "/industries/laundromat", img: "/laundromat-business-exit-strategies-1.jpg" },
  { id: 4, name: "Mobile Home Communities", desc: "Stable, income-producing assets with strong tenant retention and operational leverage.", href: "/resources/mobile-home-community-acquisitions", img: "/assets/resources/mhc/mhc-community-hero.webp" },
  { id: 5, name: "Self Storage", desc: "We acquire self storage facilities with operational upside, revenue optimization potential, and strong local demand fundamentals.", href: "/industries/self-storage", img: "/assets/resources/storage/storage-facility-hero.webp" },
  { id: 6, name: "Raw Land Development", desc: "Strategic land opportunities aligned with long-term development and growth.", href: "/industries/raw-land", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" },
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
            Multifamily &amp; Value-Add <br className="hidden md:block" />
            <span className="text-[#52D017]">Asset Acquisition</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#111827] text-lg md:text-xl leading-relaxed mb-6">
            We work with property and business owners across the country who are ready for a clear, straightforward path forward.
          </p>
          <p className="max-w-2xl mx-auto text-[#111827] text-lg md:text-xl font-bold leading-relaxed mb-10">
            No noise. No unnecessary complexity. Just execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <div className="flex flex-col items-center">
               <Link href="/sell" className="px-8 py-4 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:-translate-y-1 transition-all shadow-lg border border-[#52D017] flex items-center gap-2 justify-center">
                  👉 Request a Confidential Call
               </Link>
               <p className="text-sm text-[#111827]/60 mt-4 italic font-medium">We are ready, when you are ready.</p>
               <Link href="/resources/guides" className="mt-8 text-sm font-semibold text-[#111827] hover:text-[#52D017] transition-colors underline decoration-[#52D017]/50 underline-offset-4">Prefer to learn first? Explore our guides.</Link>
             </div>
          </div>
          
          <div className="w-full h-64 md:h-[500px] overflow-hidden rounded-sm relative group mt-16 max-w-5xl mx-auto shadow-2xl">
             <img src="/assets/home/home_hero_multifamily.png" alt="Multifamily & Value-Add Strategy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </section>

        {/* Intro Section */}
        <section className="container mx-auto px-6 py-24 border-t border-gray-200/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#111827] mb-8">We are operators first.</h2>
            <p className="text-xl text-[#111827]/90 leading-relaxed mb-8">
              We work with owners who are thinking about selling, transitioning, or improving their properties and businesses. Our focus is simple. Understand the situation, evaluate the opportunity, and provide a clear path forward.
            </p>
            <p className="text-xl text-[#111827]/90 leading-relaxed">
              We focus on multifamily and other cash-flowing assets where hands-on execution makes the difference.
            </p>
          </div>
        </section>

        {/* Sector Grid (What We Acquire) */}
        <section id="what-we-acquire" className="container mx-auto px-6 py-24 border-t border-gray-200/50">
          <div className="mb-16 border-l-4 border-[#52D017] pl-6 max-w-3xl">
            <h2 className="text-3xl font-bold text-[#111827] mb-4">Value-Driven <span className="text-[#52D017]">Acquisition Focus.</span></h2>
            <p className="text-[#111827] text-lg">
               We acquire real estate and small business assets where operational improvements create measurable value. Our primary focus is multifamily, supported by select asset classes that provide stable cash flow and long-term growth potential.
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

        {/* NEW Investment Approach Section */}
        <section className="container mx-auto px-6 py-24 border-t border-gray-200/50 bg-[#f9fafb]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 h-64 md:h-[400px] overflow-hidden rounded-sm relative group shadow-xl">
               <img src="/assets/home/multifamily_focus_courtyard.png" alt="Execution-Driven Approach" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="w-12 h-1 bg-[#52D017] mb-6 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">Execution-Driven Approach</h2>
              <p className="text-lg text-[#111827]/90 leading-relaxed">
                We focus on opportunities where better operations, clear decision-making, and follow-through create measurable results. Every deal is evaluated based on real-world performance, not just projections.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-32 border-t border-gray-200/50 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-6">Have an Opportunity?</h2>
            <p className="text-lg md:text-xl text-[#111827] mb-10 leading-relaxed border-l-4 border-l-[#52D017] pl-4 inline-block text-left mx-auto">
              If you are considering a sale or just want to explore your options, we are open to a direct conversation.
            </p>
            <div>
              <Link href="/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold text-lg rounded-sm hover:bg-[#52D017]/90 transition-all shadow-lg hover:-translate-y-1 flex justify-center items-center gap-2 max-w-sm mx-auto">
                👉 Request a Confidential Call
              </Link>
              <p className="text-sm text-[#111827]/60 mt-6 italic font-medium">We are ready, when you are ready.</p>
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
                   "knowsAbout": ["Multifamily Real Estate", "Value-Add Assets", "Private Acquisitions", "Nationwide Investments"]
                 }
               ]
             })
          }}
        />

      </main>
    </div>
  );
}
