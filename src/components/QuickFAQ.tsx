"use client";

import { useState } from 'react';
import Link from 'next/link';

const quickFaqData = [
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
];

export default function QuickFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <section className="container mx-auto px-6 py-24 border-t border-gray-200/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111827] mb-4">Frequently Asked Questions</h2>
          <p className="text-[#111827]">Common questions regarding our direct acquisition process.</p>
        </div>

        <div className="space-y-4 mb-10">
          {quickFaqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`border rounded-sm transition-colors overflow-hidden ${isOpen ? 'border-[#52D017] bg-[#52D017]/5' : 'border-gray-200 bg-white hover:border-gray-600'}`}>
                <button 
                  onClick={() => toggleAccordion(idx)}
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
        
        <div className="text-center">
           <Link href="/faq" className="text-sm font-semibold text-[#52D017] hover:text-[#111827] transition-colors tracking-widest uppercase">
              View All FAQs →
           </Link>
        </div>
      </div>
    </section>
  );
}
