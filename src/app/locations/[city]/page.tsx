import Link from 'next/link';

export default async function LocationPage({ params }: { params: { city: string } }) {
  // Await the params correctly for Next.js 15
  const resolvedParams = await params;
  
  // Basic text formatting: 'san-jose' -> 'San Jose'
  const cityName = resolvedParams.city
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 py-24">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#1a1a1a] bg-[#161616]/50 backdrop-blur-md mb-8 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
             Local Market Focus
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-200 mb-6">
          Strategic Business & Real Estate Acquisitions in <span className="text-[#52D017]">{cityName}, CA</span>
        </h1>
        
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 md:p-12 mt-12 mb-16 rounded-sm max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-[#52D017]"></div>
           <p className="text-xl text-slate-300 leading-relaxed font-serif">
             XitSource works directly with {cityName} owners to facilitate confidential, off-market transitions. We understand the specific market dynamics of the {cityName} region and provide a direct alternative to public listings.
           </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link href="/sell" className="px-8 py-4 bg-[#52D017] text-black font-semibold rounded-sm hover:bg-[#45b312] transition-colors text-lg shadow-lg shadow-[#52D017]/10">
              Discuss a {cityName} Property or Business
           </Link>
           <Link href="/#subsidiaries" className="px-8 py-4 bg-transparent border border-[#1a1a1a] text-slate-200 font-semibold rounded-sm hover:border-gray-500 transition-colors text-lg">
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
