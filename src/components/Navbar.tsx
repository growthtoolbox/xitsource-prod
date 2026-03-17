"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setOpenAccordion(null); // Reset accordion on close
    }
  }, [isMobileMenuOpen]);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[#52D017]/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 relative z-50" onClick={closeMenu}>
          <Image 
            src="/logo.png" 
            alt="XitSource Logo" 
            width={195} 
            height={65} 
            className="h-[65px] w-auto"
            priority
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="relative group">
            <Link href="/#subsidiaries" className="text-sm font-medium text-[#111827] hover:text-[#111827] transition-colors inline-flex items-center">
              What We Acquire <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute left-0 mt-2 w-64 rounded-sm shadow-xl bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/industries/residential-homes" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017] border-b border-gray-200">Residential</Link>
              <Link href="/industries/raw-land" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017] border-b border-gray-200">Raw Land</Link>
              <Link href="/resources/sell-rv-park-california" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017] border-b border-gray-200">RV Parks</Link>
              <Link href="/resources/laundromat-business-exit-strategies" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017] border-b border-gray-200">Laundromats</Link>
              <Link href="/resources/self-storage-facility-investments" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017]">Storage</Link>
            </div>
          </div>
          <div className="relative group">
            <span className="cursor-default text-sm font-medium text-[#111827] hover:text-[#111827] transition-colors inline-flex items-center">
              Company <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </span>
            <div className="absolute left-0 mt-2 w-56 rounded-sm shadow-xl bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/letter" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017] border-b border-gray-200">The Letter</Link>
              <Link href="/partnership" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017] border-b border-gray-200">The Partnership</Link>
              <Link href="/faq" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017]">FAQ</Link>
            </div>
          </div>

          <div className="relative group">
            <Link href="/resources" className="text-sm font-medium text-[#111827] hover:text-[#111827] transition-colors inline-flex items-center">
              Resources <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute left-0 mt-2 w-64 rounded-sm shadow-xl bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/scorecard" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017] border-b border-gray-200">Seller Scorecard</Link>
              <Link href="/resources/guides" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017] border-b border-gray-200">Transition Guides</Link>
              <Link href="/resources" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017]">Owner Resources</Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <Link href="/sell" className="px-5 py-2.5 text-sm font-medium bg-white border border-[#52D017] text-[#111827] hover:bg-gray-50 transition-colors rounded-sm shadow-sm hover:shadow-md">
            Request Confidential Conversation
          </Link>
        </div>

        {/* Hamburger Menu Toggle */}
        <div className="lg:hidden flex items-center relative z-50">
          <button 
            className="p-2 -mr-2 text-[#333333] hover:text-[#52D017] min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto w-full h-[calc(100vh-80px)] overscroll-contain">
          <div className="px-6 py-8 flex flex-col space-y-6 max-w-sm mx-auto h-full">
            
            {/* 1. Prioritized Button */}
            <Link 
              href="/sell" 
              onClick={closeMenu} 
              className="w-full text-center py-4 bg-[#52D017] text-[#111827] text-lg font-bold rounded-sm shadow-md transition-opacity hover:opacity-90"
            >
              Request Confidential Conversation
            </Link>

            <div className="bg-gray-200 w-full h-[1px] my-2"></div>

            {/* 2. Accordion Structure */}
            <div className="space-y-4 flex-grow">
              
              {/* Accordion 1: What We Acquire */}
              <div className="border border-gray-200 rounded-sm overflow-hidden bg-white">
                <button 
                  onClick={() => toggleAccordion('acquire')}
                  className="w-full px-5 py-4 flex justify-between items-center text-lg font-bold text-[#333333] bg-[#f9fafb] hover:bg-gray-100 transition-colors"
                >
                  What We Acquire
                  <svg className={`w-5 h-5 transform transition-transform ${openAccordion === 'acquire' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openAccordion === 'acquire' && (
                  <div className="px-5 py-4 space-y-4 border-t border-gray-100 flex flex-col">
                    <Link href="/industries/residential-homes" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">Residential</Link>
                    <Link href="/industries/raw-land" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">Raw Land</Link>
                    <Link href="/resources/sell-rv-park-california" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">RV Parks</Link>
                    <Link href="/resources/laundromat-business-exit-strategies" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">Laundromats</Link>
                    <Link href="/resources/self-storage-facility-investments" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">Storage</Link>
                  </div>
                )}
              </div>

              {/* Accordion 2: Company */}
              <div className="border border-gray-200 rounded-sm overflow-hidden bg-white">
                <button 
                  onClick={() => toggleAccordion('company')}
                  className="w-full px-5 py-4 flex justify-between items-center text-lg font-bold text-[#333333] bg-[#f9fafb] hover:bg-gray-100 transition-colors"
                >
                  Company
                  <svg className={`w-5 h-5 transform transition-transform ${openAccordion === 'company' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openAccordion === 'company' && (
                  <div className="px-5 py-4 space-y-4 border-t border-gray-100 flex flex-col">
                    <Link href="/letter" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">The Letter</Link>
                    <Link href="/partnership" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">The Partnership</Link>
                    <Link href="/faq" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">FAQ</Link>
                  </div>
                )}
              </div>

              {/* Accordion 3: Resources */}
              <div className="border border-gray-200 rounded-sm overflow-hidden bg-white">
                <button 
                  onClick={() => toggleAccordion('resources')}
                  className="w-full px-5 py-4 flex justify-between items-center text-lg font-bold text-[#333333] bg-[#f9fafb] hover:bg-gray-100 transition-colors"
                >
                  Resources
                  <svg className={`w-5 h-5 transform transition-transform ${openAccordion === 'resources' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openAccordion === 'resources' && (
                  <div className="px-5 py-4 space-y-4 border-t border-gray-100 flex flex-col">
                    <Link href="/scorecard" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">Seller Scorecard</Link>
                    <Link href="/resources/guides" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">Transition Guides</Link>
                    <Link href="/resources" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">Owner Resources</Link>
                  </div>
                )}
              </div>

            </div>

            {/* 4. Click to Call */}
            <div className="py-6 border-t border-gray-200 mt-auto">
              <a 
                href="tel:+18005550199" 
                className="flex items-center justify-center gap-3 w-full py-4 bg-white border-2 border-gray-200 text-[#333333] text-lg font-bold rounded-sm hover:border-[#52D017] hover:text-[#52D017] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Us Directly
              </a>
              <p className="text-center text-[#52D017] text-sm mt-3 font-semibold uppercase tracking-widest">Partnership Line</p>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
