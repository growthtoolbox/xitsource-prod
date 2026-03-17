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
            Preparing for Your Next Chapter.
          </h1>
          <p className="text-xl text-[#111827] leading-relaxed max-w-2xl">
            Practical guides to help you navigate the complexities of a business or property transition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Guide 1 */}
          <article className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017]/50 p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-not-allowed">
            <div className="absolute top-0 right-0 px-3 py-1 bg-yellow-100 text-yellow-800 text-[10px] font-bold uppercase tracking-wider rounded-bl-sm">Coming Soon</div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Leadership</p>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Preparing Your Staff for Ownership Change</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              Strategies to minimize operational disruption and preserve culture during an executive transition.
            </p>
            <span className="text-gray-400 text-sm font-semibold flex items-center mt-auto">
               Available Q3
            </span>
          </article>

          {/* Guide 2 */}
          <article className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017]/50 p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-not-allowed">
            <div className="absolute top-0 right-0 px-3 py-1 bg-yellow-100 text-yellow-800 text-[10px] font-bold uppercase tracking-wider rounded-bl-sm">Coming Soon</div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Strategy</p>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Understanding the Private Acquisition Process</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              A breakdown of the due diligence, valuation, and capital staging required without the friction of a public broker.
            </p>
            <span className="text-gray-400 text-sm font-semibold flex items-center mt-auto">
               Available Q3
            </span>
          </article>

          {/* Guide 3 */}
          <article className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017]/50 p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-not-allowed">
            <div className="absolute top-0 right-0 px-3 py-1 bg-yellow-100 text-yellow-800 text-[10px] font-bold uppercase tracking-wider rounded-bl-sm">Coming Soon</div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Execution</p>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Timeline to a Successful Handshake</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              Mapping out the 90-120 day calendar from initial letter of intent to the final wire transfer.
            </p>
            <span className="text-gray-400 text-sm font-semibold flex items-center mt-auto">
               Available Q3
            </span>
          </article>
        </div>

      </div>
    </div>
  );
}
