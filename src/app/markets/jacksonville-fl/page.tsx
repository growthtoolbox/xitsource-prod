import Link from 'next/link';

export default function JacksonvilleMarket() {
  return (
    <div className="min-h-screen bg-white text-[#111827] py-24 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 border-b border-gray-200 pb-12">
          <Link href="/markets" className="inline-flex items-center gap-2 text-sm font-semibold text-[#111827] hover:text-[#52D017] transition-colors mb-8 uppercase tracking-widest">
            <span>←</span> Back to Markets
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
             Target Market
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111827] mb-6">
            Jacksonville, FL Multifamily
          </h1>
          <p className="text-xl text-[#111827] leading-relaxed mb-6">
            Driven by deep-water logistics and surging FinTech growth, Jacksonville represents a cornerstone of our strategic Southeast acquisitions.
          </p>
        </div>
        <div className="mt-16 pt-16 border-t border-gray-200 text-center">
            <Link href="/sell" className="inline-flex px-10 py-5 bg-[#52D017] text-[#111827] font-bold text-lg rounded-sm hover:-translate-y-1 transition-all shadow-lg border border-[#52D017] justify-center items-center gap-2 max-w-sm mx-auto w-full">
              👉 Request a Confidential Call
            </Link>
        </div>
      </div>
    </div>
  );
}
