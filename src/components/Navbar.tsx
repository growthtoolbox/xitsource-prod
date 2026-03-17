"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[#52D017]/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
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
              <Link href="/resources" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017] border-b border-gray-200">Transition Guides</Link>
              <Link href="/resources" className="block px-4 py-3 text-sm text-[#111827] hover:bg-white hover:text-[#52D017]">Owner Resources</Link>
            </div>
          </div>
        </div>

        <div className="hidden md:flex">
          <Link href="/sell" className="px-5 py-2.5 text-sm font-medium bg-white text-[#111827] hover:bg-gray-200 transition-colors rounded-sm shadow-sm hover:shadow-sm">
            Request Confidential Conversation
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            className="p-2 -mr-2 text-[#111827] hover:text-[#111827] min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-#52D017/20 px-6 py-4 max-h-[80vh] overflow-y-auto flex flex-col space-y-4">
          <div className="py-2">
            <Link href="/#subsidiaries" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-[#111827] min-h-[44px]">What We Acquire</Link>
            <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
               <Link href="/industries/residential-homes" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600">Residential</Link>
               <Link href="/industries/raw-land" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600">Raw Land</Link>
               <Link href="/resources/sell-rv-park-california" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600">RV Parks</Link>
               <Link href="/resources/laundromat-business-exit-strategies" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600">Laundromats</Link>
               <Link href="/resources/self-storage-facility-investments" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600">Storage</Link>
            </div>
          </div>

          <div className="py-2">
            <span className="block text-base font-semibold text-[#111827] min-h-[44px]">Company</span>
            <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
               <Link href="/letter" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600">The Letter</Link>
               <Link href="/partnership" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600">The Partnership</Link>
               <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600">FAQ</Link>
            </div>
          </div>

          <div className="py-2">
            <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-[#111827] min-h-[44px]">Resources</Link>
            <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
               <Link href="/scorecard" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600">Seller Scorecard</Link>
               <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600">Transition Guides</Link>
               <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600">Owner Resources</Link>
            </div>
          </div>

          <Link href="/sell" onClick={() => setIsMobileMenuOpen(false)} className="block mt-6 text-center py-4 text-sm font-bold bg-[#111827] text-white rounded-sm">
            Request Confidential Conversation
          </Link>
        </div>
      )}
    </nav>
  );
}
