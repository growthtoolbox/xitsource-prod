"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Inter, Merriweather, Dancing_Script } from 'next/font/google';
import QuickFAQ from '@/components/QuickFAQ';

const inter = Inter({ subsets: ['latin'] });
const serif = Merriweather({ weight: ['400', '700'], subsets: ['latin'] });
const script = Dancing_Script({ weight: ['400', '700'], subsets: ['latin'] });

const businesses = [
  { id: 1, name: "Residential Real Estate", desc: "A direct, quiet path to selling your residential portfolio without the stress of public showings.", href: "/industries/residential-homes", img: "/images/residential-hero.jpg" },
  { id: 2, name: "Raw Land Development", desc: "A respectful approach to land acquisition that honors the future potential of your acreage.", href: "/industries/raw-land", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" },
  { id: 3, name: "RV Parks & Campgrounds", desc: "Preserving the lifestyle and community of your park through a professional, stable transition.", href: "/industries/rv-parks", img: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070" },
  { id: 4, name: "Mobile Home Communities", desc: "Dedicated to the long-term health of your community and the security of your residents.", href: "/resources/mobile-home-community-acquisitions", img: "/assets/resources/mhc/mhc-community-hero.webp" },
  { id: 5, name: "Laundromat Businesses", desc: "Continuing the reliable local service you’ve provided to your neighborhood for years.", href: "/resources/laundromat-business-exit-strategies", img: "/assets/resources/laundromat/laundromat-strip-mall-exterior.webp" },
  { id: 6, name: "Self Storage Facilities", desc: "Maintaining the high standards of security and convenience your customers expect.", href: "/industries/self-storage", img: "/assets/resources/storage/storage-facility-hero.webp" },
];

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle'|'submitting'|'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      email: formData.get('email'),
      phone: formData.get('phone'),
      asset: 'General Inquiry', // Home page doesn't ask for asset type
      city: 'Not Specified', // Home page doesn't ask for city
      details: formData.get('details')
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('idle');
        alert('There was an issue sending your message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setFormStatus('idle');
      alert('Network error. Please try again.');
    }
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
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#111827] mb-6">
            A National Partnership <br className="hidden md:block" />
            <span className="text-[#52D017]">Built on a Handshake.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#111827] text-lg md:text-xl leading-relaxed mb-10">
            You&apos;ve spent decades building your business and caring for your community. We provide a discreet, professional exit strategy that honors your work and ensures a simple, secure transition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <Link href="/letter" className="px-8 py-4 bg-white text-[#111827] font-semibold rounded-sm hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 border border-gray-200">
                Read Our Letter to Owners
             </Link>
             <Link href="/sell" className="px-8 py-4 bg-[#111827] text-white font-semibold rounded-sm hover:bg-[#111827]/80 transition-colors">
                Request a Confidential Conversation
             </Link>
          </div>
        </section>
          {/* Sector Grid (Subsidiaries) */}
        <section id="subsidiaries" className="container mx-auto px-6 py-24 border-t border-gray-200/50">
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

          {/* A Letter to Owners Teaser */}
          <div className="max-w-4xl mx-auto mt-24 bg-[#F9FAFB] border border-gray-200 p-8 md:p-12 rounded-sm shadow-sm relative text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#111827] mb-6">A Personal Note on Your Next Chapter</h2>
            <div className="w-16 h-1 bg-[#52D017] mx-auto rounded-full mb-8"></div>
            
            <p className={`text-[#111827] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto ${serif.className}`}>
              Selling a business you&apos;ve spent decades building is a significant transition. We&apos;ve written a personal letter to owners explaining our commitment to a respectful, stress-free exit.
            </p>
            
            <Link href="/letter" className="inline-flex items-center justify-center px-8 py-4 bg-[#111827] text-white font-semibold rounded-sm hover:bg-[#111827]/80 transition-colors shadow-lg shadow-[#111827]/10">
              Read Our Letter to Owners
            </Link>
          </div>

        

        {/* Lead Form Section with AI Consent */}
        <section id="briefing" className="container mx-auto px-6 py-32 border-t border-gray-200/50">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#111827] mb-4">Start a Confidential Conversation.</h2>
              <p className="text-[#111827] mb-8 leading-relaxed text-lg">
                Whether you are ready to sell now or are simply exploring your options for the future, we are here to listen. John and Ryan personally review every inquiry to ensure your legacy is treated with the respect it deserves.
              </p>
              
              <div className="mt-12 bg-[#F9FAFB] border border-gray-200 p-8 rounded-sm">
                 <div className="text-sm font-semibold text-[#111827] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#52D017] animate-pulse"></span>
                    Intelligent Intake
                 </div>
                 <p className="text-sm text-[#111827] leading-relaxed border-l-2 border-[#52D017]/30 pl-4">
                   To ensure we can respond to you as quickly as possible, we use an AI-assisted briefing system to organize your details for John and Ryan&apos;s immediate review. Your information remains strictly confidential.
                 </p>
              </div>
            </div>

            <div className="flex-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">First Name</label>
                    <input name="firstName" type="text" required className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-[#111827] focus:outline-none focus:border-#52D017 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">Last Name</label>
                    <input name="lastName" type="text" required className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-[#111827] focus:outline-none focus:border-#52D017 transition-colors" />
                  </div>
                </div>
                
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">Email Address</label>
                    <input name="email" type="email" required className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-[#111827] focus:outline-none focus:border-#52D017 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">Phone Number</label>
                    <input name="phone" type="tel" required className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-[#111827] focus:outline-none focus:border-#52D017 transition-colors" />
                  </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">Inquiry Details</label>
                  <textarea name="details" required rows={4} className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-[#111827] focus:outline-none focus:border-#52D017 transition-colors resize-none"></textarea>
                </div>

                <div className="bg-white/50 p-4 border border-gray-200/80 rounded-sm flex items-start gap-3">
                  <input id="ai-consent" type="checkbox" required className="mt-1 bg-white border-gray-200 rounded-sm accent-#52D017 cursor-pointer" />
                  <div className="text-xs text-[#111827] leading-relaxed">
                    <label htmlFor="ai-consent" className="cursor-pointer">
                      <strong>Notice at Collection:</strong> By submitting this form, you consent to AI-assisted communications (Voice/Chat) for fulfilling this request per our{' '}
                    </label>
                    <Link href="/privacy" className="text-#52D017 hover:underline">Privacy Policy</Link>
                    <label htmlFor="ai-consent" className="cursor-pointer">
                      . You acknowledge that XitSource uses AI to parse and respond to inquiries.
                    </label>
                  </div>
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
                 },
                 {
                   "@type": "Person",
                   "name": "Ryan Peterson",
                   "jobTitle": "Real Estate Investment Specialist",
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










        {/* Global Quick FAQ */}
        <QuickFAQ />

      </main>
    </div>
  );
}
