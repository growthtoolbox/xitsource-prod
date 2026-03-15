import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const resolvedParams = await params;
  const cityName = resolvedParams.city
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const state = ['carson-city', 'reno'].includes(resolvedParams.city) ? 'NV' : 'CA';

  return {
    title: `Private Business & Real Estate Acquisitions in ${cityName}, ${state} | XitSource`,
    description: `XitSource provides discreet business and real estate transitions in ${cityName}, ${state}. Request a confidential valuation today.`,
  };
}

export default async function LocationPage({ params }: { params: { city: string } }) {
  const resolvedParams = await params;
  
  const cityName = resolvedParams.city
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const state = ['carson-city', 'reno'].includes(resolvedParams.city) ? 'NV' : 'CA';

  const norcalHubs = ['sacramento', 'roseville', 'rocklin', 'folsom', 'stockton', 'modesto', 'fresno', 'chico', 'redding'];
  const bayAreaMetro = ['san-francisco', 'san-jose', 'oakland', 'santa-rosa', 'walnut-creek', 'pleasanton', 'palo-alto', 'mountain-view', 'redwood-city'];
  const tahoeReno = ['south-lake-tahoe', 'truckee', 'carson-city', 'reno'];

  let regionContext = "";
  let expert = null;

  if (norcalHubs.includes(resolvedParams.city)) {
    regionContext = "Central Valley growth and owner-operated business transitions.";
    expert = {
      name: "John Poindexter",
      initials: "JP",
      role: "Strategic Acquisition Partner",
      desc: "Specializes in operational scaling, strategic business acquisitions, and identifying off-market opportunities across Northern California."
    };
  } else if (bayAreaMetro.includes(resolvedParams.city)) {
    regionContext = "High-value asset transitions, commercial density, and discreet private exits.";
    expert = {
      name: "John Poindexter",
      initials: "JP",
      role: "Strategic Acquisition Partner",
      desc: "Specializes in operational scaling, strategic business acquisitions, and identifying off-market opportunities across Northern California."
    };
  } else {
    regionContext = "Recreational assets, raw land development, and multi-state investment opportunities.";
    expert = {
      name: "Ryan Peterson",
      initials: "RP",
      role: "Real Estate Investment Specialist",
      desc: "Focuses on real estate acquisitions and income-producing assets including mobile home communities, RV parks, laundromats, and development opportunities."
    };
  }

  // Fallback if not matching explicitly
  if (!expert) {
    regionContext = "Strategic acquisitions and off-market value optimization.";
    expert = {
      name: "John Poindexter",
      initials: "JP",
      role: "Strategic Acquisition Partner",
      desc: "Specializes in operational scaling, strategic business acquisitions, and identifying off-market opportunities across Northern California."
    };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `XitSource ${cityName}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": state
    },
    "description": `Private business and real estate acquisitions specialized in ${cityName}, ${state}. ${regionContext}`,
    "url": `https://xitsource.com/locations/${resolvedParams.city}`
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-gray-200 bg-white/50 backdrop-blur-md mb-8 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
             Local Market Focus
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#111827] mb-6">
          Strategic Business & Real Estate Acquisitions in <span className="text-[#52D017]">{cityName}, {state}</span>
        </h1>
        
        <div className="bg-white border border-gray-200 p-8 md:p-12 mt-12 mb-16 rounded-sm max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-[#52D017]"></div>
           <p className="text-xl text-[#111827] leading-relaxed font-serif mb-8">
             XitSource works directly with {cityName} owners to facilitate confidential, off-market transitions. We understand the specific market dynamics of the {cityName} region and provide a direct alternative to public listings.
           </p>
           <div className="text-left bg-white border border-gray-200 p-6 rounded-sm">
             <div className="text-sm font-bold uppercase tracking-widest text-[#52D017] mb-2">Regional Context</div>
             <p className="text-[#111827] capitalize">{regionContext}</p>
           </div>
        </div>
        
        {/* Expert feature */}
        <div className="max-w-3xl mx-auto text-left bg-white border border-gray-200 p-8 flex flex-col md:flex-row items-center gap-6 mb-16 rounded-sm group hover:border-[#52D017]/50 transition-colors">
          <div className="w-24 h-24 bg-white rounded-full border border-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <span className="text-3xl text-[#111827]/80 font-bold group-hover:text-[#52D017] transition-colors">{expert.initials}</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#111827] mb-1">{expert.name}</h3>
            <p className="text-[#52D017] text-sm uppercase tracking-widest font-semibold mb-3">{expert.role}</p>
            <p className="text-[#111827] text-sm leading-relaxed">{expert.desc}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link href="/sell" className="px-8 py-4 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors text-lg shadow-lg shadow-sm/10">
              Request a Confidential {cityName} Valuation
           </Link>
           <Link href="/#subsidiaries" className="px-8 py-4 bg-transparent border border-gray-200 text-[#111827] font-semibold rounded-sm hover:border-gray-500 transition-colors text-lg">
              Return to Industry Hub
           </Link>
        </div>
      </div>
    </div>
  );
}

// Generate static params for the target cities
export async function generateStaticParams() {
  const cities = [
    // NorCal
    'sacramento', 'roseville', 'rocklin', 'folsom', 'stockton', 'modesto', 'fresno', 'chico', 'redding',
    // Bay Area
    'san-francisco', 'san-jose', 'oakland', 'santa-rosa', 'walnut-creek', 'pleasanton', 'palo-alto', 'mountain-view', 'redwood-city',
    // Tahoe
    'south-lake-tahoe', 'truckee', 'carson-city', 'reno'
  ];

  return cities.map((city) => ({
    city: city,
  }));
}
