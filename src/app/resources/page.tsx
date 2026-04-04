import Link from 'next/link';

export default function ResourcesHubPage() {
  return (
    <div className="min-h-screen bg-white text-[#111827] py-24 pb-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20 border-b border-gray-200 pb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111827] mb-6 max-w-3xl">
            Institutional Resources
          </h1>
          <p className="text-xl text-[#111827]/90 leading-relaxed max-w-2xl">
            Direct access to industry guides, operational walkthroughs, and risk management strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/resources/preparing-staff-for-ownership-change" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <p className="text-xs font-bold text-[#52D017] uppercase tracking-widest mb-4">Operations</p>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Preparing Your Staff for Ownership Change</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              Strategies to minimize operational disruption and preserve culture during an executive transition.
            </p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">Read Guide →</span>
          </Link>

          <Link href="/resources/understanding-the-private-acquisition-process" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <p className="text-xs font-bold text-[#52D017] uppercase tracking-widest mb-4">Process</p>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Understanding the Private Acquisition Process</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              A breakdown of the due diligence, valuation, and capital staging required without the friction of a public broker.
            </p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">Read Guide →</span>
          </Link>

          <Link href="/resources/timeline-to-sell-business-or-property" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <p className="text-xs font-bold text-[#52D017] uppercase tracking-widest mb-4">M&A Strategy</p>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Timeline to a Successful Handshake</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              Mapping out the 90-120 day calendar from initial letter of intent to the final wire transfer.
            </p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">Read Guide →</span>
          </Link>

          <Link href="/resources/tenant-closed-equipment-left-behind" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <p className="text-xs font-bold text-[#52D017] uppercase tracking-widest mb-4">Risk Management</p>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Tenant Closed. Equipment Left Behind.</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              Navigating the legal, financial, and operational decisions when a commercial tenant abandons their space.
            </p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">Read Guide →</span>
          </Link>

          <Link href="/resources/selling-without-a-broker" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <p className="text-xs font-bold text-[#52D017] uppercase tracking-widest mb-4">Direct Acquisitions</p>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Selling Without a Broker</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              An institutional strategy to bypass listing fees while securing optimal portfolio valuation.
            </p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">Read Guide →</span>
          </Link>
        </div>

        <div className="mt-20 pt-16 border-t border-gray-200 text-center">
            <Link href="/sell" className="inline-flex px-10 py-5 bg-[#52D017] text-[#111827] font-bold text-lg rounded-sm hover:-translate-y-1 transition-all shadow-lg border border-[#52D017] justify-center items-center gap-2 max-w-sm mx-auto">
              👉 Request a Confidential Call
            </Link>
        </div>
      </div>
    </div>
  );
}
