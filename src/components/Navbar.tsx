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
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#111827] text-white text-center py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-4">
        Focused on Multifamily & Value-Add Investment Opportunities in Northern California
      </div>
      
      <nav className="fixed top-[32px] sm:top-[34px] left-0 right-0 z-50 bg-white border-b border-[#52D017]/20">
        <div className="max-w-7xl mx-auto pl-[20px] pr-5 md:pr-6 h-[100px] md:h-[120px] flex items-center justify-between">
          <Link href="/" className="flex items-center relative z-50" onClick={closeMenu}>
            <Image 
              src="/logo.jpg" 
              alt="XitSource Logo" 
              width={475} 
              height={158} 
              className="w-auto h-[60px] md:h-[80px] object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-[#111827] hover:text-[#52D017] transition-colors">
              Home
            </Link>

            <div className="relative group">
              <span className="cursor-default text-sm font-medium text-[#111827] hover:text-[#111827] transition-colors inline-flex items-center">
                What We Acquire <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
              <div className="absolute left-0 mt-2 w-64 rounded-sm shadow-xl bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/industries/multi-family-homes" className="block px-4 py-3 text-sm font-semibold text-[#111827] bg-[#f9fafb] hover:bg-white hover:text-[#52D017] border-b border-gray-200">Multi-Family Homes</Link>
                <Link href="/industries/rv-parks" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017] border-b border-gray-200">RV Parks & Campgrounds</Link>
                <Link href="/resources/mobile-home-community-acquisitions" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017] border-b border-gray-200">Mobile Home Communities</Link>
                <Link href="/industries/raw-land" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017]">Raw Land Development</Link>
              </div>
            </div>

            <Link href="/the-letter" className="text-sm font-medium text-[#111827] hover:text-[#52D017] transition-colors">
              Investment Strategy
            </Link>

            <div className="relative group">
              <span className="cursor-default text-sm font-medium text-[#111827] hover:text-[#111827] transition-colors inline-flex items-center">
                Company <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
              <div className="absolute left-0 mt-2 w-56 rounded-sm shadow-xl bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/partnership" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017] border-b border-gray-200">About</Link>
                <Link href="/sell" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017]">Contact</Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex">
            <Link href="/sell" className="px-6 py-3 text-sm font-bold bg-[#52D017] text-[#111827] hover:bg-[#45b312] transition-colors rounded-sm shadow-sm hover:shadow-md flex items-center gap-2">
              👉 Submit a Deal
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
          <div className="lg:hidden fixed inset-0 top-[130px] sm:top-[154px] bg-white z-40 overflow-y-auto w-full h-[calc(100vh-130px)] overscroll-contain">
            <div className="px-6 py-6 flex flex-col space-y-5 max-w-sm mx-auto h-full pb-24">
              
              {/* 1. Prioritized Button */}
              <Link 
                href="/sell" 
                onClick={closeMenu} 
                className="w-full text-center py-4 bg-[#52D017] text-[#111827] text-lg font-bold rounded-sm shadow-md transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
              >
                👉 Submit a Deal
              </Link>

              <div className="bg-gray-200 w-full h-[1px] my-2"></div>

              {/* 2. Accordion Structure */}
              <div className="space-y-4 flex-grow">
                
                <Link href="/" onClick={closeMenu} className="w-full px-5 py-4 flex items-center text-lg font-bold text-[#333333] bg-[#f9fafb] hover:bg-gray-100 transition-colors border border-gray-200 rounded-sm">
                  Home
                </Link>

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
                      <Link href="/industries/multi-family-homes" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-bold block">Multi-Family Homes</Link>
                      <Link href="/industries/rv-parks" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">RV Parks & Campgrounds</Link>
                      <Link href="/resources/mobile-home-community-acquisitions" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">Mobile Home Communities</Link>
                      <Link href="/industries/raw-land" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">Raw Land Development</Link>
                    </div>
                  )}
                </div>

                <Link href="/the-letter" onClick={closeMenu} className="w-full px-5 py-4 flex items-center text-lg font-bold text-[#333333] bg-[#f9fafb] hover:bg-gray-100 transition-colors border border-gray-200 rounded-sm">
                  Investment Strategy
                </Link>

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
                      <Link href="/partnership" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">About</Link>
                      <Link href="/sell" onClick={closeMenu} className="text-[18px] text-[#333333] hover:text-[#52D017] font-medium block">Contact</Link>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
