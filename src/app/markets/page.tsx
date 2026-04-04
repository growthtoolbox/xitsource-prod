import Link from 'next/link';

export default function MarketsHub() {
  return (
    <div className="min-h-screen bg-white text-[#111827] py-24 pb-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20 border-b border-gray-200 pb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111827] mb-6">
            National Market Hubs
          </h1>
          <p className="text-xl text-[#111827] leading-relaxed max-w-3xl">
            An institutional directory of our 9 strategic target markets, driven by strong fundamentals, infrastructure growth, and supply constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/markets/sf-bay-area" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <h3 className="text-xl font-bold text-[#111827] mb-2">SF Bay Area, CA</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">AI-Driven Recovery</p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">View Profile →</span>
          </Link>
          <Link href="/markets/phoenix-az" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <h3 className="text-xl font-bold text-[#111827] mb-2">Phoenix, AZ</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">TSMC Semiconductor Corridor</p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">View Profile →</span>
          </Link>
          <Link href="/markets/austin-tx" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <h3 className="text-xl font-bold text-[#111827] mb-2">Austin, TX</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">Silicon Hills Absorption</p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">View Profile →</span>
          </Link>
          <Link href="/markets/dallas-tx" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <h3 className="text-xl font-bold text-[#111827] mb-2">Dallas-Fort Worth, TX</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">National Logistics Anchor</p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">View Profile →</span>
          </Link>
          <Link href="/markets/tampa-fl" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <h3 className="text-xl font-bold text-[#111827] mb-2">Tampa, FL</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">Port Resilience & Migration</p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">View Profile →</span>
          </Link>
          <Link href="/markets/jacksonville-fl" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <h3 className="text-xl font-bold text-[#111827] mb-2">Jacksonville, FL</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">Deep-Water & FinTech Growth</p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">View Profile →</span>
          </Link>
          <Link href="/markets/huntsville-al" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <h3 className="text-xl font-bold text-[#111827] mb-2">Huntsville, AL</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">Aerospace moats & 2026 Cliff</p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">View Profile →</span>
          </Link>
          <Link href="/markets/greenville-sc" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <h3 className="text-xl font-bold text-[#111827] mb-2">Greenville, SC</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">I-85/BMW Automotive Corridor</p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">View Profile →</span>
          </Link>
          <Link href="/markets/savannah-ga" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <h3 className="text-xl font-bold text-[#111827] mb-2">Savannah, GA</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">Port expansion & Hyundai Metaplant</p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">View Profile →</span>
          </Link>
        </div>

        <div className="mt-20 pt-16 border-t border-gray-200 text-center">
            <Link href="/sell" className="inline-flex px-10 py-5 bg-[#52D017] text-[#111827] font-bold text-lg rounded-sm hover:-translate-y-1 transition-all shadow-lg border border-[#52D017] justify-center items-center gap-2 max-w-sm mx-auto">
              👉 Discuss a Portfolio
            </Link>
        </div>
      </div>
    </div>
  );
}
