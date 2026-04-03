import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chattanooga Multifamily: Infrastructure & Gig-City Growth | XitSource',
  description: 'Chattanooga is a "Plug-and-Play" manufacturing hub. With a $20M city investment in mixed-income housing and a world-class fiber network, the city attr...',
};

export default function ChattanoogaMarketPage() {
  return (
    <div className="min-h-screen bg-white text-[#111827] py-24 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 border-b border-gray-200 pb-12">
          <Link href="/resources/guides" className="inline-flex items-center gap-2 text-sm font-semibold text-[#111827] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
            <span>←</span> Back to Guides
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#52D017]/30 bg-[#52D017]/10 mb-6 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
             Market Profile
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827] mb-6">
            Chattanooga Multifamily: Infrastructure & Gig-City Growth
          </h1>
          <p className="text-xl text-[#111827] leading-relaxed max-w-3xl">
            Chattanooga is a "Plug-and-Play" manufacturing hub. With a $20M city investment in mixed-income housing and a world-class fiber network, the city attracts a mix of VW assembly talent and remote-tech professionals.
          </p>
        </div>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 mb-20 text-lg">
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Investment Thesis</h2>
            <p className="leading-relaxed font-medium">
              Wellness-centric repositioning (coworking, high-speed tech) in legacy assets.
            </p>
          </div>
        </div>
        <div className="mt-20 pt-16 border-t border-gray-200 text-center">
            <Link href="https://www.xitsource.com/sell" className="inline-flex px-10 py-5 bg-[#52D017] text-[#111827] font-bold text-lg rounded-sm hover:-translate-y-1 transition-all shadow-lg border border-[#52D017] justify-center items-center gap-2 max-w-sm mx-auto">
              Discuss Your Portfolio →
            </Link>
            <p className="text-sm text-[#111827]/60 mt-6 italic font-medium">Confidential capital solutions. No broker fees.</p>
        </div>
      </div>
    </div>
  );
}
