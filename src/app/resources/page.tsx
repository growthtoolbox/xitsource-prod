import QuickFAQ from '@/components/QuickFAQ';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 py-24">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#1a1a1a] bg-[#161616]/50 backdrop-blur-md mb-8 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
             Information Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
            Owner <span className="text-[#52D017]">Resources</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            XitSource provides educational resources for NorCal owners considering an exit. Explore our guides on maximizing asset value and navigating private acquisitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <article className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 rounded-sm group hover:border-[#52D017]/50 transition-colors flex flex-col h-full relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-[#52D017] duration-500"></div>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Guide</p>
             <h2 className="text-xl font-bold text-slate-200 mb-4 group-hover:text-[#52D017] transition-colors">How to Sell an RV Park in California</h2>
             <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">A comprehensive look at valuing, preparing, and transitioning a mobile home or RV community in the NorCal market.</p>
             <Link href="/resources/sell-rv-park-california" className="text-[#52D017] text-sm font-semibold flex items-center mt-auto">
               Read Guide <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
             </Link>
          </article>

          <article className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 rounded-sm group hover:border-white/50 transition-colors flex flex-col h-full relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-white duration-500"></div>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Guide</p>
             <h2 className="text-xl font-bold text-slate-200 mb-4 group-hover:text-white transition-colors">Exiting a Laundromat Business: A Step-by-Step Guide</h2>
             <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">Understanding equipment depreciation, long-term leases, and cash-flow multiples for owner-operated facilities.</p>
             <Link href="/resources/exit-laundromat-guide" className="text-white text-sm font-semibold flex items-center mt-auto">
               Read Guide <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
             </Link>
          </article>

          <article className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 rounded-sm group hover:border-cyan-500/50 transition-colors flex flex-col h-full relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-cyan-500 duration-500"></div>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Perspective</p>
             <h2 className="text-xl font-bold text-slate-200 mb-4 group-hover:text-cyan-500 transition-colors">Preparing Raw Land for Development Sale</h2>
             <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">Strategic steps to navigate entitlement risks and position your parcel for maximum acquisition value.</p>
             <Link href="/resources/raw-land-development-perspective" className="text-cyan-500 text-sm font-semibold flex items-center mt-auto">
               Read Perspective <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
             </Link>
          </article>
        </div>

      </div>
      
      <QuickFAQ />
    </div>
  );
}
