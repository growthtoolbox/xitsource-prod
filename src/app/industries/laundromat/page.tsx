import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sell Your Laundromat | Direct Laundromat Buyer | XitSource",
  description: "Looking to sell your laundromat? XitSource works directly with laundromat owners nationwide. Private, straightforward conversations with no public listing required.",
};

export default function LaundromatIndustryPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 max-w-5xl bg-white text-[#333333]">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#333333] hover:text-[#52D017] transition-colors mb-12 uppercase tracking-widest">
        <span>←</span> Back to Industries
      </Link>
      
      {/* 1. Hero Section */}
      <div className="mb-16 border-b border-gray-200 pb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#333333] mb-6">
          Sell Your Laundromat Through a Direct, Private Conversation
        </h1>
        <p className="text-xl md:text-2xl font-medium text-[#333333] leading-relaxed max-w-3xl mb-10">
          We work with laundromat owners nationwide who are ready for a transition. Whether your store is stable, underperforming, outdated, absentee-run, or needs a turnaround, we are open to a straightforward discussion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-sm/10 text-center">
            Request a Confidential Conversation
          </Link>
          <a href="#process" className="inline-block px-10 py-5 bg-white border border-gray-200 text-[#333333] font-semibold rounded-sm hover:border-[#52D017] hover:text-[#52D017] transition-colors text-center">
            See How the Process Works
          </a>
        </div>
      </div>

      {/* Main Intro Image */}
      <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-sm relative group mb-16">
        <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" alt="Laundromat business operations" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>

      {/* 2. Opening Positioning */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-6">We Work With Laundromat Owners Ready for a Transition</h2>
        <div className="text-xl leading-relaxed text-[#333333] space-y-6">
          <p>
            XitSource works with laundromat owners at different stages. Some are burned out from daily operations. Some are approaching retirement. Others are dealing with aging equipment, rising utility costs, staffing challenges, lease issues, or underperforming locations.
          </p>
          <p>
            Instead of navigating a public listing process, many owners prefer a direct conversation. We focus on practical evaluation and clear next steps, without unnecessary noise.
          </p>
        </div>
      </div>

      {/* 3. “We Buy” Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-10">The Types of Laundromat Opportunities We Consider</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Absentee-Owned Laundromats",
            "Older Stores with Deferred Maintenance",
            "Underperforming Locations",
            "Coin Laundry Businesses with Equipment Issues",
            "Owner-Operator Stores Ready for Retirement",
            "Stores with Operational Inefficiencies",
            "Partnership or Family Transition Situations",
            "Laundromats with Lease Challenges",
            "Turnaround Opportunities",
            "Multi-Store Portfolios",
            "Wash-and-Fold + Self-Service Operations",
            "Quiet / Off-Market Sale Situations"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 border border-gray-100 rounded-sm bg-[#f9fafb]">
              <div className="w-6 h-6 rounded-full bg-[#52D017]/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[#52D017] text-xs font-bold">✓</span>
              </div>
              <p className="font-semibold text-[#333333]">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Why Owners Reach Out */}
      <div className="mb-20 bg-[#f9fafb] p-8 md:p-12 rounded-sm border border-gray-200">
        <h2 className="text-3xl font-bold text-[#333333] mb-8">Why Laundromat Owners Start Looking for an Exit</h2>
        <p className="text-lg text-[#333333]/80 mb-8 border-l-4 border-l-[#52D017] pl-6 py-2">We understand the real-world drivers that lead owners to consider a sale, including:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
          <ul className="space-y-3 col-span-1 md:col-span-1">
            <li className="flex items-center gap-2"><span className="text-[#52D017]">•</span> Operational burnout</li>
            <li className="flex items-center gap-2"><span className="text-[#52D017]">•</span> Ongoing machine repairs</li>
            <li className="flex items-center gap-2"><span className="text-[#52D017]">•</span> Rising utility expenses</li>
            <li className="flex items-center gap-2"><span className="text-[#52D017]">•</span> Lease uncertainty</li>
          </ul>
          <ul className="space-y-3 col-span-1 md:col-span-1">
            <li className="flex items-center gap-2"><span className="text-[#52D017]">•</span> Declining profitability</li>
            <li className="flex items-center gap-2"><span className="text-[#52D017]">•</span> Staffing issues</li>
            <li className="flex items-center gap-2"><span className="text-[#52D017]">•</span> Increased competition</li>
            <li className="flex items-center gap-2"><span className="text-[#52D017]">•</span> Retirement planning</li>
          </ul>
          <ul className="space-y-3 col-span-2 md:col-span-1 mt-4 md:mt-0">
            <li className="flex items-center gap-2"><span className="text-[#52D017]">•</span> Family succession breakdown</li>
            <li className="flex items-center gap-2"><span className="text-[#52D017]">•</span> Partnership conflict</li>
            <li className="flex items-center gap-2"><span className="text-[#52D017]">•</span> Desire for simplicity & privacy</li>
          </ul>
        </div>
      </div>

      {/* 5. Simple, Direct Sale */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-6">A Simple, Direct Sale</h2>
        <p className="text-xl leading-relaxed text-[#333333] mb-8">
          A direct transaction offers an alternative to listing publicly. Instead of preparing a business for market, coordinating showings, and navigating uncertain timelines, owners can have a direct conversation with a buyer who understands operational businesses.
        </p>
        <div className="bg-white p-6 border border-gray-200 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3"><span className="text-xl text-[#52D017]">❖</span> <span className="font-medium">Private conversations</span></div>
          <div className="flex items-center gap-3"><span className="text-xl text-[#52D017]">❖</span> <span className="font-medium">Direct evaluation</span></div>
          <div className="flex items-center gap-3"><span className="text-xl text-[#52D017]">❖</span> <span className="font-medium">Flexible timelines</span></div>
          <div className="flex items-center gap-3"><span className="text-xl text-[#52D017]">❖</span> <span className="font-medium">No pressure to commit</span></div>
          <div className="flex items-center gap-3"><span className="text-xl text-[#52D017]">❖</span> <span className="font-medium">Focus on real operational conditions</span></div>
          <div className="flex items-center gap-3"><span className="text-xl text-[#52D017]">❖</span> <span className="font-medium">Clear path from conversation to closing</span></div>
        </div>
      </div>

      {/* 6. Why Owners Work With Us */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-8">Why Owners Work With XitSource</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Confidentiality", desc: "One-on-one, confidential discussions without public exposure." },
            { title: "Direct Approach", desc: "A practical, no-nonsense approach to evaluating your business." },
            { title: "Problem Solvers", desc: "Deep experience dealing with complex situations and turnarounds." },
            { title: "Operational Focus", desc: "We focus on real operations, not just surface-level financial metrics." },
            { title: "Legacy Protection", desc: "Respect for what you have built and the community you serve." },
            { title: "Flexibility", desc: "Flexible timing and transition structures tailored to your needs. No obligation to start the conversation." }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#f9fafb] p-6 rounded-sm border border-gray-100 shadow-sm border-t-4 border-t-[#52D017]">
              <h3 className="text-lg font-bold text-[#333333] mb-2">{item.title}</h3>
              <p className="text-[#333333]/80 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Process Section */}
      <div id="process" className="scroll-mt-32 mb-20 bg-white p-8 md:p-12 rounded-sm border border-gray-200">
        <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center md:text-left">Our Process</h2>
        
        <div className="space-y-12">
          <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start group">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold shrink-0 group-hover:bg-[#52D017] group-hover:text-white transition-colors">1</div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Initial Confidential Conversation</h3>
              <p className="text-[#333333]/80 leading-relaxed">It starts with a handshake-style introduction. We discuss your current situation, your goals for the exit, and answer any questions you have about our process. There is zero pressure to commit to anything during this call.</p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start group">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold shrink-0 group-hover:bg-[#52D017] group-hover:text-white transition-colors">2</div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">High-Level Review of the Business</h3>
              <p className="text-[#333333]/80 leading-relaxed">If there is mutual interest, we look at the fundamentals. We review lease documents, basic equipment conditions, and high-level financials. We do this respectfully and efficiently, without asking you to create complex pitch decks.</p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start group">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold shrink-0 group-hover:bg-[#52D017] group-hover:text-white transition-colors">3</div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Fit, Structure, and Timing Discussion</h3>
              <p className="text-[#333333]/80 leading-relaxed">We outline potential acquisition structures that make sense for both parties. We discuss the transition timeline, how to handle employees, and what a smooth handover looks like. Once we agree on the framework, we move forward.</p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start group">
            <div className="w-16 h-16 rounded-full bg-[#52D017]/10 text-[#52D017] border border-[#52D017]/30 flex items-center justify-center text-xl font-bold shrink-0 group-hover:bg-[#52D017] group-hover:text-white transition-colors">4</div>
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">Due Diligence and Closing</h3>
              <p className="text-[#333333]/80 leading-relaxed">We complete our formal verification of the business and lease terms quietly to ensure no business disruption. When everything is validated, we sign the final paperwork and fund the transaction, allowing you to move on to your next chapter.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 8. FAQ Section - Schema Ready */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#333333] mb-10">Frequently Asked Questions About Selling a Laundromat</h2>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
               "@context": "https://schema.org",
               "@type": "FAQPage",
               "mainEntity": [
                 {
                   "@type": "Question",
                   "name": "How do I sell my laundromat privately?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "To sell your laundromat privately, you can work directly with a private buyer like XitSource. This avoids public brokered listings, minimizing disruption to your customers, employees, and landlord while keeping the transaction confidential."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "Do you buy laundromats nationwide?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes, we evaluate and acquire laundromat businesses and portfolios across the United States. We handle the process seamlessly regardless of your location."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "Do you buy laundromats that need repairs or new equipment?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Absolutely. We routinely acquire older stores or laundromats suffering from deferred maintenance, aging machines, or in need of a full retool."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "Can I sell my laundromat if it is underperforming?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes. We work closely with owners of underperforming laundromats and turnaround situations. We evaluate the core location and infrastructure, not just current net income."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "Do you work with absentee-owned laundromats?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes, we are highly experienced in evaluating and restructuring absentee or semi-absentee owned laundromats, particularly those where management has slipped."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "Can I sell my laundromat if I lease the space?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes. While we do purchase mixed-use real estate, the vast majority of laundromats operate on leased premises. We are well-versed in navigating commercial lease assignments and landlord negotiations."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "Do you look at older coin laundry businesses?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes, we evaluate traditional coin laundries as well as hybrid or fully card/app-operated stores. An older store simply means there is room for modernization."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "Can I talk to you before deciding to sell?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes. We encourage early, confidential conversations to help you understand your options, even if you are months or years away from a final decision. There is no obligation."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "Can I keep the sale confidential?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes. Confidentiality is the primary benefit of a direct sale. There are no public listings, so your customer base, employees, and competitors will not know until after the transition is complete."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "How long does a direct laundromat sale take?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "The timeline of a direct sale is highly flexible. Depending on lease transfer requirements and your own readiness, a typical closing occurs between 30 and 90 days."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "Do you consider wash-and-fold operations?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes. We evaluate full-service operations, including robust drop-off wash-and-fold services, commercial laundry accounts, and delivery route segments."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "Do you buy multi-location laundromats?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes, we have the resources to evaluate and acquire multi-store laundromat portfolios from operators looking to exit the industry entirely."
                   }
                 }
               ]
             })
          }}
        />

        <div className="space-y-4">
          {[
            { q: "How do I sell my laundromat privately?", a: "To sell your laundromat privately, you can work directly with a private buyer like XitSource. This avoids public brokered listings, minimizing disruption to your customers, employees, and landlord while keeping the transaction confidential." },
            { q: "Do you buy laundromats nationwide?", a: "Yes, we evaluate and acquire laundromat businesses and portfolios across the United States. We handle the process seamlessly regardless of your location." },
            { q: "Do you buy laundromats that need repairs or new equipment?", a: "Absolutely. We routinely acquire older stores or laundromats suffering from deferred maintenance, aging machines, or in need of a full retool." },
            { q: "Can I sell my laundromat if it is underperforming?", a: "Yes. We work closely with owners of underperforming laundromats and turnaround situations. We evaluate the core location and infrastructure, not just current net income." },
            { q: "Do you work with absentee-owned laundromats?", a: "Yes, we are highly experienced in evaluating and restructuring absentee or semi-absentee owned laundromats, particularly those where management has slipped." },
            { q: "Can I sell my laundromat if I lease the space?", a: "Yes. While we do purchase mixed-use real estate, the vast majority of laundromats operate on leased premises. We are well-versed in navigating commercial lease assignments and landlord negotiations." },
            { q: "Do you look at older coin laundry businesses?", a: "Yes, we evaluate traditional coin laundries as well as hybrid or fully card/app-operated stores. An older store simply means there is room for modernization." },
            { q: "Can I talk to you before deciding to sell?", a: "Yes. We encourage early, confidential conversations to help you understand your options, even if you are months or years away from a final decision. There is no obligation." },
            { q: "Can I keep the sale confidential?", a: "Yes. Confidentiality is the primary benefit of a direct sale. There are no public listings, so your customer base, employees, and competitors will not know until after the transition is complete." },
            { q: "How long does a direct laundromat sale take?", a: "The timeline of a direct sale is highly flexible. Depending on lease transfer requirements and your own readiness, a typical closing occurs between 30 and 90 days." },
            { q: "Do you consider wash-and-fold operations?", a: "Yes. We evaluate full-service operations, including robust drop-off wash-and-fold services, commercial laundry accounts, and delivery route segments." },
            { q: "Do you buy multi-location laundromats?", a: "Yes, we have the resources to evaluate and acquire multi-store laundromat portfolios from operators looking to exit the industry entirely." }
          ].map((faq, index) => (
            <details key={index} className="group bg-white border border-gray-200 rounded-sm">
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-5 text-[#333333]">
                <span>{faq.q}</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-[#333333]/80 mb-5 px-5 leading-relaxed bg-white">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* 9. CTA Section */}
      <div className="mt-16 pt-12 border-t border-gray-200 text-center md:text-left bg-[#f9fafb] p-8 md:p-12 rounded-sm">
        <h2 className="text-3xl font-bold text-[#333333] mb-6">Thinking About Selling Your Laundromat?</h2>
        <div className="mb-8 max-w-3xl">
          <p className="text-xl leading-relaxed text-[#333333]">If you are considering an exit or simply want to understand your options, start with a confidential conversation. We are open to direct, practical discussions with laundromat owners nationwide.</p>
        </div>
        <Link href="/sell" className="inline-block px-10 py-5 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-sm/10">
          Request a Confidential Conversation
        </Link>
      </div>

    </div>
  );
}
