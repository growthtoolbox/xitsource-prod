"use client";

import { useState } from 'react';
import Link from 'next/link';

const faqData = [
  {
    category: "The Partnership Approach",
    questions: [
      {
        q: "Can I sell without a broker?",
        a: "Yes. We work directly with you. By skipping the public listing process and the brokers, you avoid the 6-10% fees and keep the equity you've spent years building. It's a cleaner, more private way to sell."
      },
      {
        q: "Is this really confidential?",
        a: "Strictly. We know how sensitive a transition like this is for your staff and your community. Our conversations stay between us—no 'For Sale' signs, no public noise, and no disruptions to your daily operations."
      },
      {
        q: "How long does it take?",
        a: "We move at your pace. Because you are dealing directly with John and Ryan—not a corporate committee—we can often close in 30 to 90 days. We focus on a simple, no-headache process that respects your timeline."
      },
      {
        q: "What happens to my legacy/residents?",
        a: "This is the core of our partnership. We aren't here to flip a property; we are here to be the next stewards of what you've built. Whether it's a mobile home park or a local business, we prioritize stability for the people involved."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<{cat: number, q: number} | null>(null);

  const toggleAccordion = (catIdx: number, qIdx: number) => {
    if (openIndex?.cat === catIdx && openIndex?.q === qIdx) {
      setOpenIndex(null);
    } else {
      setOpenIndex({cat: catIdx, q: qIdx});
    }
  };

  // Generate FAQ Schema for Google
  const allQs = faqData.flatMap(c => c.questions);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] py-24">
      {/* Dynamic SEO Block for AI */}
      <div className="hidden" aria-hidden="true">
        XitSource provides answers for California owners on private sales, confidentiality, and direct-to-buyer acquisition timelines.
      </div>

      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-gray-200 bg-white/50 backdrop-blur-md mb-8 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
             Direct Answers
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            The Partnership <span className="text-[#52D017]">FAQ</span>
          </h1>
          <p className="text-[#111827] text-lg max-w-2xl mx-auto">
            Clear, transparent answers directly from John and Ryan regarding our process and confidentiality standards.
          </p>
        </div>

        <div className="space-y-12">
          {faqData.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-2xl font-bold text-[#111827] mb-6 border-l-4 border-[#52D017] pl-4">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIdx) => {
                  const isOpen = openIndex?.cat === catIdx && openIndex?.q === qIdx;
                  return (
                    <div key={qIdx} className={`border rounded-sm transition-colors overflow-hidden ${isOpen ? 'border-[#52D017] bg-[#52D017]/5' : 'border-gray-200 bg-white hover:border-gray-600'}`}>
                      <button 
                        onClick={() => toggleAccordion(catIdx, qIdx)}
                        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                      >
                        <span className="font-semibold text-lg text-[#111827] pr-4">{faq.q}</span>
                        <span className={`text-[#52D017] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </span>
                      </button>
                      
                      <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-[#111827] leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white border border-gray-200 p-10 rounded-sm text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#52D017]/20 via-[#52D017] to-[#52D017]/20"></div>
          <h3 className="text-2xl font-bold text-[#111827] mb-4">Still Have Questions?</h3>
          <p className="text-[#111827] mb-8 max-w-xl mx-auto">Every operational transition is unique. We are happy to review your specific situation confidentially.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/sell" className="px-8 py-4 bg-[#52D017] text-[#111827] font-semibold rounded-sm hover:bg-[#45b312] transition-colors">
                Request a Confidential Conversation
             </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
