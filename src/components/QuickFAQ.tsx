"use client";

import { useState } from 'react';
import Link from 'next/link';

const quickFaqData = [
  {
    q: "Is this conversation actually confidential?",
    a: "Absolutely. We understand that your employees, tenants, and competitors don't need to know about a potential transition until the deal is done. Discretion is our first priority."
  },
  {
    q: "Do I have to pay a brokerage commission?",
    a: "No. We are direct principals, not brokers. Because you are selling directly to us, you eliminate the standard 6–10% commission, putting more of your hard-earned equity in your pocket."
  },
  {
    q: "How do you determine the value of my business or property?",
    a: "We use modern data analytics and AI-assisted market oversight to provide a fair, transparent valuation based on current market performance and the unique foundation you’ve built."
  },
  {
    q: "Do I need to be located in Northern California to work with you?",
    a: "No. While our roots are in NorCal, we partner with owners across the U.S. Our digital systems allow us to handle the entire process remotely and respectfully, regardless of geography."
  },
  {
    q: "How long does the typical closing process take?",
    a: "Because we are a private partnership and not a corporate committee, we move quickly. A typical closing ranges from 30 to 90 days, depending on the complexity of the asset."
  },
  {
    q: "What happens to my tenants or employees after the sale?",
    a: "We view ourselves as stewards of your legacy. Our goal is operational stability. we work to ensure a seamless transition that protects the reputation you’ve built in your community."
  }
];

// Generate FAQ Schema for Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": quickFaqData.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a
    }
  }))
};

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
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
