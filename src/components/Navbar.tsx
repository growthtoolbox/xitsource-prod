"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#111827] text-white text-center py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-4">
        Nationwide Real Estate & Business Acquisition Platform
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
          
          {/* Desktop Menu - Extracted to Simple Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-[#111827] hover:text-[#52D017] transition-colors">
              Home
            </Link>
            <Link href="/#what-we-acquire" className="text-sm font-medium text-[#111827] hover:text-[#52D017] transition-colors">
              What We Acquire
            </Link>
            <Link href="/partnership" className="text-sm font-medium text-[#111827] hover:text-[#52D017] transition-colors">
              Partnership
            </Link>
            <Link href="/resources" className="text-sm font-medium text-[#111827] hover:text-[#52D017] transition-colors">
              Resources
            </Link>
            <Link href="/about" className="text-sm font-medium text-[#111827] hover:text-[#52D017] transition-colors">
              Company
            </Link>
            <Link href="/sell" className="text-sm font-medium text-[#111827] hover:text-[#52D017] transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex">
            <Link href="/sell" className="px-6 py-3 text-sm font-bold bg-[#52D017] text-[#111827] hover:bg-[#45b312] transition-colors rounded-sm shadow-sm hover:shadow-md flex items-center gap-2">
              👉 Request a Confidential Call
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
              
              <Link 
                href="/sell" 
                onClick={closeMenu} 
                className="w-full text-center py-4 bg-[#52D017] text-[#111827] text-lg font-bold rounded-sm shadow-md transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
              >
                👉 Request a Confidential Call
              </Link>

              <div className="bg-gray-200 w-full h-[1px] my-2"></div>

              <div className="space-y-4 flex-grow">
                <Link href="/" onClick={closeMenu} className="w-full px-5 py-4 flex items-center text-lg font-bold text-[#333333] bg-[#f9fafb] hover:bg-gray-100 transition-colors border border-gray-200 rounded-sm">
                  Home
                </Link>
                <Link href="/#what-we-acquire" onClick={closeMenu} className="w-full px-5 py-4 flex items-center text-lg font-bold text-[#333333] bg-[#f9fafb] hover:bg-gray-100 transition-colors border border-gray-200 rounded-sm">
                  What We Acquire
                </Link>
                <Link href="/partnership" onClick={closeMenu} className="w-full px-5 py-4 flex items-center text-lg font-bold text-[#333333] bg-[#f9fafb] hover:bg-gray-100 transition-colors border border-gray-200 rounded-sm">
                  Partnership
                </Link>
                <Link href="/resources" onClick={closeMenu} className="w-full px-5 py-4 flex items-center text-lg font-bold text-[#333333] bg-[#f9fafb] hover:bg-gray-100 transition-colors border border-gray-200 rounded-sm">
                  Resources
                </Link>
                <Link href="/about" onClick={closeMenu} className="w-full px-5 py-4 flex items-center text-lg font-bold text-[#333333] bg-[#f9fafb] hover:bg-gray-100 transition-colors border border-gray-200 rounded-sm">
                  Company
                </Link>
                <Link href="/sell" onClick={closeMenu} className="w-full px-5 py-4 flex items-center text-lg font-bold text-[#333333] bg-[#f9fafb] hover:bg-gray-100 transition-colors border border-gray-200 rounded-sm">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
