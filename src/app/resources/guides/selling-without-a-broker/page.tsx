import Link from 'next/link';

export const metadata = {
  title: "Selling a Business Without a Broker | XitSource Guides",
  description: "Learn how to bypass 6-10% broker fees and sell your business privately. Step-by-step guidance on structuring a direct, confidential acquisition.",
};

export default function SellingWithoutABrokerGuide() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-[#111827] text-white pt-24 pb-16 md:pt-32 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/resources/guides" className="inline-flex items-center text-[#52D017] hover:text-white transition-colors mb-8 text-sm font-semibold tracking-wide uppercase">
            &larr; Back to Transition Guides
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Selling a Business Without a Broker
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl">
            Keep your equity and your privacy. How to execute a direct private acquisition and bypass traditional 6-10% brokerage fees.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        
        {/* AEO Block */}
        <div className="bg-[#f9fafb] border-l-4 border-l-[#52D017] p-8 mb-16 shadow-sm">
          <h2 className="text-xl font-bold text-[#111827] mb-4">Executive Summary</h2>
          <p className="text-lg text-[#333333] leading-relaxed">
            Can you sell a business without a broker? Yes. A direct private acquisition eliminates the need for public listings, avoids the standard 6-10% broker commission, and significantly reduces the timeline from listing to closing. This approach is ideal for owners prioritizing confidentiality, speed, and maximizing their net proceeds.
          </p>
        </div>

        {/* 5 Steps Section */}
        <section className="prose prose-lg max-w-none text-[#333333] prose-headings:text-[#111827] prose-a:text-[#52D017] prose-strong:text-[#111827] mb-20 space-y-12">
          
          <div>
             <h2 className="text-3xl font-bold tracking-tight mb-6">The 5 Steps of a Direct Acquisition</h2>
             <p>Selling your business or portfolio privately follows a streamlined trajectory, eliminating the friction of market listings and third-party intermediaries.</p>
          </div>

          <div className="border border-gray-100 p-8 rounded-sm shadow-sm">
             <h3 className="text-2xl font-bold flex items-center gap-4 mt-0"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#111827] text-white text-sm">1</span> Initial Confidential Alignment</h3>
             <p>Instead of creating a public prospectus, the process begins with a direct, confidential conversation. This phase aims to understand your transition goals, timeline, and whether a direct acquisition aligns with your desired outcome.</p>
          </div>

          <div className="border border-gray-100 p-8 rounded-sm shadow-sm">
             <h3 className="text-2xl font-bold flex items-center gap-4 mt-0"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#111827] text-white text-sm">2</span> High-Level Financial Review</h3>
             <p>You provide high-level financials directly to the acquiring principal. Because there are no broker fees to factor in, the valuation focuses purely on the operational reality of the asset.</p>
          </div>

          <div className="border border-gray-100 p-8 rounded-sm shadow-sm">
             <h3 className="text-2xl font-bold flex items-center gap-4 mt-0"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#111827] text-white text-sm">3</span> The Letter of Intent (LOI)</h3>
             <p>If the alignment and financials make sense, a Letter of Intent is drafted. This document outlines the proposed purchase price, terms, and the expected timeline, serving as a formal roadmap for the transition.</p>
          </div>

          <div className="border border-gray-100 p-8 rounded-sm shadow-sm">
             <h3 className="text-2xl font-bold flex items-center gap-4 mt-0"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#111827] text-white text-sm">4</span> Direct Due Diligence</h3>
             <p>Due diligence is conducted quietly and sequentially. Since you are working directly with the buyer, requests are purposeful and focused on verifying the asset&apos;s health without alerting staff or competitors.</p>
          </div>

          <div className="border border-gray-100 p-8 rounded-sm shadow-sm">
             <h3 className="text-2xl font-bold flex items-center gap-4 mt-0"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#111827] text-white text-sm">5</span> Closing and Transition</h3>
             <p>With diligence complete, final purchase agreements are signed. Capital is deployed directly, and ownership transfers seamlessly, often with an agreed-upon handover period to ensure operational continuity.</p>
          </div>

        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#111827] mb-3">How much do I save by not using a broker?</h3>
              <p className="text-[#333333]">Business brokers typically charge a success fee of 6% to 10% of the total purchase price. On a $2M asset, a direct sale saves you between $120,000 and $200,000 in equity.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#111827] mb-3">Does a direct sale provide legal protection?</h3>
              <p className="text-[#333333]">Yes. Both parties still utilize strict Non-Disclosure Agreements (NDAs) and engage specialized M&A attorneys to draft and review the final closing documents, ensuring full legal protection.</p>
            </div>
            <div className="bg-[#f9fafb] p-6 rounded-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#111827] mb-3">Will my employees find out?</h3>
              <p className="text-[#333333]">A direct sale is the most reliable way to prevent staff from finding out prematurely. Without public listings or broker-led site visits, confidentiality remains completely intact until you are ready to announce the transition.</p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#111827] p-10 md:p-16 rounded-sm text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for a Direct Conversation?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            If you are exploring a direct, private acquisition to preserve your equity and confidentiality, we are ready to listen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sell" className="px-8 py-4 bg-[#52D017] text-white font-semibold rounded-sm hover:bg-[#45b013] transition-colors">
              Request Confidential Conversation
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
