import Link from 'next/link';

export default function TransitionGuidesPage() {
  return (
    <div className="min-h-screen bg-white text-[#111827] py-24 pb-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20 border-b border-gray-200 pb-12">
          <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-[#111827] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
            <span>←</span> Back to Resources
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
             Library
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111827] mb-6 max-w-3xl">
            Thinking About Selling or Transitioning?
          </h1>
          <p className="text-xl text-[#111827] leading-relaxed max-w-2xl mb-6">
            Clear, straightforward guides to help you understand the process and make informed decisions.
          </p>
          <p className="text-lg text-[#111827]/80 italic max-w-2xl">
            If you prefer to talk it through instead of reading, you can always reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Guide 1 */}
          <Link href="/resources/guides/preparing-staff-for-ownership-change" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <p className="text-xs font-bold text-[#52D017] uppercase tracking-widest mb-4">Getting Started</p>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Preparing Your Staff for Ownership Change</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              Strategies to minimize operational disruption and preserve culture during an executive transition.
            </p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">
               Read Guide →
            </span>
          </Link>

          {/* Guide 2 */}
          <Link href="/resources/guides/understanding-the-private-acquisition-process" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <p className="text-xs font-bold text-[#52D017] uppercase tracking-widest mb-4">Understanding the Process</p>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Understanding the Private Acquisition Process</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              A breakdown of the due diligence, valuation, and capital staging required without the friction of a public broker.
            </p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">
               Read Guide →
            </span>
          </Link>

          {/* Guide 3 */}
          <Link href="/resources/guides/timeline-to-sell-business-or-property" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <p className="text-xs font-bold text-[#52D017] uppercase tracking-widest mb-4">What to Expect</p>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Timeline to a Successful Handshake</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              Mapping out the 90-120 day calendar from initial letter of intent to the final wire transfer.
            </p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">
               Read Guide →
            </span>
          </Link>

          {/* Guide 4 */}
          <Link href="/resources/tenant-closed-equipment-left-behind" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <p className="text-xs font-bold text-[#52D017] uppercase tracking-widest mb-4">Operations & Liability</p>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Tenant Closed. Equipment Left Behind.</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              Navigating the legal, financial, and operational decisions when a commercial tenant abandons their space and assets.
            </p>
            <span className="text-[#52D017] text-sm font-bold flex items-center mt-auto group-hover:underline">
               Read Guide →
            </span>
          </Link>
        </div>

        {/* Global CTA */}
        <div className="mt-20 pt-16 border-t border-gray-200 text-center">
            <Link href="/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-bold text-lg rounded-sm hover:-translate-y-1 transition-all shadow-lg border border-[#52D017] flex justify-center items-center gap-2 max-w-sm mx-auto">
              👉 Request a Confidential Call
            </Link>
            <p className="text-sm text-[#111827]/60 mt-6 italic font-medium">We are ready, when you are ready.</p>
        </div>

      </div>
    </div>
  );
}
