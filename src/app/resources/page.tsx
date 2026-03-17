import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white text-[#111827] py-24 pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
             Owner Portal
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111827] mb-6">
            Tools for <span className="text-[#52D017]">Business Owners</span>
          </h1>
          <p className="text-xl text-[#111827] leading-relaxed max-w-2xl mx-auto">
            Practical instruments to help you evaluate your position and consider your next steps with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <article className="bg-[#111827] text-white p-10 md:p-12 rounded-sm group relative overflow-hidden flex flex-col h-full border border-gray-800">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#52D017]/5 rounded-full blur-[80px] group-hover:bg-[#52D017]/10 transition-colors"></div>
             
             <p className="text-xs font-bold text-[#52D017] uppercase tracking-widest mb-6 border-b border-[#52D017]/20 pb-4 inline-block">Primary Feature</p>
             <h2 className="text-3xl font-bold text-white mb-6">The Seller Scorecard</h2>
             <p className="text-gray-300 text-lg leading-relaxed mb-10 flex-grow">
               A confidential, automated diagnostic tool that scores the structural health, operational readiness, and transition viability of your business or property. Real answers in 5 minutes.
             </p>
             <Link href="/scorecard" className="inline-flex w-fit items-center justify-center px-8 py-4 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg">
               Take the Scorecard <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
             </Link>
          </article>

          <article className="bg-white border border-gray-200 p-10 md:p-12 rounded-sm group hover:border-gray-300 transition-colors flex flex-col h-full">
             <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 pb-4 inline-block">Foundational Context</p>
             <h2 className="text-3xl font-bold text-[#111827] mb-6">The Letter to Owners</h2>
             <p className="text-[#111827] text-lg leading-relaxed mb-10 flex-grow">
               Read a direct message from John and Ryan detailing why XitSource was founded, how we view modern stewardship, and why the private acquisition network is replacing traditional brokerage listings.
             </p>
             <Link href="/letter" className="inline-flex items-center text-[#52D017] text-lg font-semibold mt-auto group-hover:text-[#45b312] transition-colors">
               Read The Letter <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
             </Link>
          </article>
        </div>

      </div>
    </div>
  );
}
