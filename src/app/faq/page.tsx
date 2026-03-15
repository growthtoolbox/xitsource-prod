"use client";

import { useState } from 'react';
import Link from 'next/link';

const faqData = [
  {
    category: "General Process",
    questions: [
      {
        q: "Can I sell my business or property without using a broker?",
        a: "Yes. XitSource works directly with owners to facilitate private, off-market transactions. This allows for a more confidential process and eliminates the standard 6-10% brokerage commission."
      },
      {
        q: "Is this conversation actually confidential?",
        a: "Absolutely. We prioritize discretion above all else. Initial conversations are strictly between the partners and the owner, ensuring your employees, tenants, and competitors remain unaware of the potential transition."
      },
      {
        q: "How long does the acquisition process typically take?",
        a: "Because we are a direct partnership rather than a large corporate committee, we move quickly. A typical timeline from initial conversation to closing ranges from 30 to 90 days, depending on the complexity of the asset."
      }
    ]
  },
  {
    category: "Specific Assets",
    questions: [
      {
        q: "What types of businesses does XitSource review?",
        a: "Our focus is on cash-flowing, owner-operated businesses in Northern California, including laundromats, storage facilities, and mobile home communities. We also look for residential portfolios and raw land with development potential."
      },
      {
        q: "Do you buy properties that need significant work?",
        a: "Yes. We specialize in identifying value-add opportunities. Whether the asset requires physical renovations or operational stabilization, we are equipped to handle the transition."
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
    <div className="min-h-screen bg-[#050505] text-gray-200 py-24">
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#1a1a1a] bg-[#161616]/50 backdrop-blur-md mb-8 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
             Direct Answers
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
            Acquisition & Transition <span className="text-[#52D017]">FAQ</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Clear, transparent answers regarding our off-market acquisition process, asset criteria, and confidentiality standards.
          </p>
        </div>

        <div className="space-y-12">
          {faqData.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-2xl font-bold text-slate-200 mb-6 border-l-4 border-[#52D017] pl-4">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIdx) => {
                  const isOpen = openIndex?.cat === catIdx && openIndex?.q === qIdx;
                  return (
                    <div key={qIdx} className={`border rounded-sm transition-colors overflow-hidden ${isOpen ? 'border-[#52D017] bg-[#52D017]/5' : 'border-[#1a1a1a] bg-[#0a0a0a] hover:border-gray-600'}`}>
                      <button 
                        onClick={() => toggleAccordion(catIdx, qIdx)}
                        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                      >
                        <span className="font-semibold text-lg text-slate-200 pr-4">{faq.q}</span>
                        <span className={`text-[#52D017] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </span>
                      </button>
                      
                      <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-slate-400 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0a0a0a] border border-[#1a1a1a] p-10 rounded-sm text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#52D017]/20 via-[#52D017] to-[#52D017]/20"></div>
          <h3 className="text-2xl font-bold text-slate-200 mb-4">Still Have Questions?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Every operational transition is unique. We are happy to review your specific situation confidentially.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/sell" className="px-8 py-4 bg-[#52D017] text-black font-semibold rounded-sm hover:bg-[#45b312] transition-colors">
                Request a Confidential Conversation
             </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
