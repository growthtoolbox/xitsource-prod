"use client";

import { useState } from 'react';
import Link from 'next/link';

const faqData = [
  {
    category: "Institutional Trust & Operational Transitions",
    questions: [
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
      },
      {
        q: "Is the paperwork going to be a headache for me?",
        a: "Not at all. We use secure tools like DocuSign so you can review and sign everything from the comfort of your home. We handle the heavy lifting of the due diligence process."
      },
      {
        q: "Why should I sell to XitSource instead of a large national corporation?",
        a: "Large firms often treat owners like a number on a spreadsheet. We offer the same institutional closing power but with a personal, one-on-one partnership that respects your life's work."
      },
      {
        q: "Will you require me to make expensive repairs before the sale?",
        a: "We typically buy assets in 'as-is' condition. Our team is equipped to handle infrastructure stabilization and deferred maintenance, allowing you to walk away without the stress of a renovation."
      },
      {
        q: "What information do I need to provide for an initial offer?",
        a: "Initially, very little. A brief conversation and a few high-level financial points are usually enough for us to determine if there is a fit and provide a ballpark valuation."
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
            Acquisition & Transition <span className="text-[#52D017]">FAQ</span>
          </h1>
          <p className="text-[#111827] text-lg max-w-2xl mx-auto">
            Clear, transparent answers regarding our off-market acquisition process, asset criteria, and confidentiality standards.
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
