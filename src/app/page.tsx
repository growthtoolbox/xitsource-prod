"use client";

import Link from 'next/link';

const businesses = [
  { id: 1, name: "Residential Real Estate", desc: "A direct, quiet path to selling your residential portfolio without the stress of public showings.", href: "/industries/residential-homes", img: "/assets/industries/residential/modern-home.jpg" },
  { id: 2, name: "Raw Land Development", desc: "A respectful approach to land acquisition that honors the future potential of your acreage.", href: "/industries/raw-land", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" },
  { id: 3, name: "RV Parks & Campgrounds", desc: "We acquire RV parks and campgrounds nationwide, offering a direct exit for owners ready for a simpler path.", href: "/industries/rv-parks", img: "/assets/industries/rv-parks/mobile-home-park-1.jpg" },
  { id: 4, name: "Mobile Home Communities", desc: "Dedicated to the long-term health of your community and the security of your residents.", href: "/resources/mobile-home-community-acquisitions", img: "/assets/resources/mhc/mhc-community-hero.webp" },
  { id: 5, name: "Laundromat Businesses", desc: "Continuing the reliable local service you’ve provided to your neighborhood for years.", href: "/industries/laundromat", img: "/laundromat-business-exit-strategies-1.jpg" },
  { id: 6, name: "Self Storage Facilities", desc: "Maintaining the high standards of security and convenience your customers expect.", href: "/industries/self-storage", img: "/assets/resources/storage/storage-facility-hero.webp" },
];

export default function Home() {
  return (
    <div className={`min-h-screen bg-white text-[#111827] overflow-hidden relative`}>
      
      {/* Background Gradients - Subtle Dark Executive */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#111827] mb-6">
            When You&apos;re Ready, <br className="hidden md:block" />
            <span className="text-[#52D017]">We&apos;re Ready.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#111827] text-lg md:text-xl leading-relaxed mb-10">
            No listings. No drawn-out process. Just a direct conversation and a clear path forward. We handle the details so you can move on with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/scorecard" className="px-8 py-4 bg-white text-[#111827] font-semibold rounded-sm hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 border border-gray-200">
                Take the Seller Scorecard
             </Link>
             <Link href="/sell" className="px-8 py-4 bg-[#111827] text-white font-semibold rounded-sm hover:bg-[#111827]/80 transition-colors">
                Request Confidential Conversation
             </Link>
          </div>
        </section>
          {/* Sector Grid (Subsidiaries) */}
        <section className="container mx-auto px-6 py-24 border-t border-gray-200/50">
          <div className="mb-16 border-l-4 border-[#52D017] pl-6">
            <h2 className="text-3xl font-bold text-[#111827] mb-4">Direct, as-is acquisitions <span className="text-[#52D017]">for business owners.</span></h2>
            <p className="text-[#111827] max-w-2xl">We specialize in acquiring properties with a long history of community service. Our goal is to provide a seamless transition of ownership for the following types of assets:</p>
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

        

        {/* High-Impact CTA Section */}
        <section className="container mx-auto px-6 py-32 border-t border-gray-200/50 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-6">Start a Confidential Conversation.</h2>
            <p className="text-lg md:text-xl text-[#111827] mb-10 leading-relaxed">
              Whether you are ready to sell now or are simply exploring your options for the future, we are here to listen. John and Ryan personally review every inquiry to ensure your legacy is treated with the respect it deserves.
            </p>
            <Link href="/sell" className="inline-block px-8 py-5 bg-[#52D017] text-[#111827] font-bold text-lg rounded-sm hover:bg-[#52D017]/90 transition-colors shadow-lg">
              Request Confidential Conversation
            </Link>
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
                   "knowsAbout": ["RV Park Acquisitions", "Laundromat Business Sales", "Raw Land Development", "National Off-Market Real Estate"]
                 }
               ]
             })
          }}
        />










        {/* FAQ Teaser */}
        <section className="container mx-auto px-6 py-24 border-t border-gray-200/50 text-center">
          <h2 className="text-3xl font-bold text-[#111827] mb-6">Have Questions?</h2>
          <p className="text-lg text-[#111827] mb-8 max-w-2xl mx-auto">
            We believe in transparency. Review our frequently asked questions to understand our process, confidentiality standards, and acquisition criteria.
          </p>
          <Link href="/faq" className="inline-block px-8 py-4 bg-white border border-gray-200 text-[#111827] font-semibold rounded-sm hover:border-[#52D017] hover:text-[#52D017] transition-colors shadow-sm">
            View Our Frequently Asked Questions
          </Link>
        </section>

      </main>
    </div>
  );
}
