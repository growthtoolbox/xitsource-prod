"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-lg border-b border-[#52D017]/20">
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
          <Link href="/sell" className="text-sm font-medium text-[#52D017] hover:text-white transition-colors">Sell a Business</Link>
          <div className="relative group">
            <Link href="/#subsidiaries" className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors inline-flex items-center">
              Industries <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute left-0 mt-2 w-64 rounded-sm shadow-xl bg-[#0a0a0a] border border-[#1a1a1a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/industries/residential-homes" className="block px-4 py-3 text-sm text-slate-300 hover:bg-[#161616] hover:text-[#52D017] border-b border-[#1a1a1a]">Residential Real Estate</Link>
              <Link href="/industries/raw-land" className="block px-4 py-3 text-sm text-slate-300 hover:bg-[#161616] hover:text-[#52D017] border-b border-[#1a1a1a]">Raw Land Development</Link>
              <Link href="/resources/sell-rv-park-california" className="block px-4 py-3 text-sm text-slate-300 hover:bg-[#161616] hover:text-[#52D017] border-b border-[#1a1a1a]">RV Parks & Campgrounds</Link>
              <Link href="/resources/mobile-home-community-acquisitions" className="block px-4 py-3 text-sm text-slate-300 hover:bg-[#161616] hover:text-[#52D017] border-b border-[#1a1a1a]">Mobile Home Communities</Link>
              <Link href="/resources/laundromat-business-exit-strategies" className="block px-4 py-3 text-sm text-slate-300 hover:bg-[#161616] hover:text-[#52D017] border-b border-[#1a1a1a]">Laundromat Businesses</Link>
              <Link href="/resources/self-storage-facility-investments" className="block px-4 py-3 text-sm text-slate-300 hover:bg-[#161616] hover:text-[#52D017]">Self Storage Facilities</Link>
            </div>
          </div>
          <div className="relative group">
            <span className="cursor-pointer text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors inline-flex items-center">
              Locations <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </span>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max rounded-sm shadow-xl bg-[#0a0a0a] border border-[#1a1a1a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-6 flex gap-12">
              <div>
                <h4 className="text-[#52D017] text-[10px] font-bold uppercase tracking-widest mb-3 border-b border-[#1a1a1a] pb-2">NorCal</h4>
                <div className="space-y-2.5">
                  <Link href="/locations/sacramento" className="block text-sm text-slate-300 hover:text-white transition-colors">Sacramento</Link>
                  <Link href="/locations/roseville" className="block text-sm text-slate-300 hover:text-white transition-colors">Roseville</Link>
                  <Link href="/locations/rocklin" className="block text-sm text-slate-300 hover:text-white transition-colors">Rocklin</Link>
                  <Link href="/locations/folsom" className="block text-sm text-slate-300 hover:text-white transition-colors">Folsom</Link>
                  <Link href="/locations/stockton" className="block text-sm text-slate-300 hover:text-white transition-colors">Stockton</Link>
                  <Link href="/locations/modesto" className="block text-sm text-slate-300 hover:text-white transition-colors">Modesto</Link>
                  <Link href="/locations/fresno" className="block text-sm text-slate-300 hover:text-white transition-colors">Fresno</Link>
                  <Link href="/locations/chico" className="block text-sm text-slate-300 hover:text-white transition-colors">Chico</Link>
                  <Link href="/locations/redding" className="block text-sm text-slate-300 hover:text-white transition-colors">Redding</Link>
                </div>
              </div>
              <div>
                <h4 className="text-[#52D017] text-[10px] font-bold uppercase tracking-widest mb-3 border-b border-[#1a1a1a] pb-2">Bay Area</h4>
                <div className="space-y-2.5">
                  <Link href="/locations/san-francisco" className="block text-sm text-slate-300 hover:text-white transition-colors">San Francisco</Link>
                  <Link href="/locations/san-jose" className="block text-sm text-slate-300 hover:text-white transition-colors">San Jose</Link>
                  <Link href="/locations/oakland" className="block text-sm text-slate-300 hover:text-white transition-colors">Oakland</Link>
                  <Link href="/locations/santa-rosa" className="block text-sm text-slate-300 hover:text-white transition-colors">Santa Rosa</Link>
                  <Link href="/locations/walnut-creek" className="block text-sm text-slate-300 hover:text-white transition-colors">Walnut Creek</Link>
                  <Link href="/locations/pleasanton" className="block text-sm text-slate-300 hover:text-white transition-colors">Pleasanton</Link>
                  <Link href="/locations/palo-alto" className="block text-sm text-slate-300 hover:text-white transition-colors">Palo Alto</Link>
                  <Link href="/locations/mountain-view" className="block text-sm text-slate-300 hover:text-white transition-colors">Mountain View</Link>
                  <Link href="/locations/redwood-city" className="block text-sm text-slate-300 hover:text-white transition-colors">Redwood City</Link>
                </div>
              </div>
              <div>
                <h4 className="text-[#52D017] text-[10px] font-bold uppercase tracking-widest mb-3 border-b border-[#1a1a1a] pb-2">Tahoe / Reno</h4>
                <div className="space-y-2.5">
                  <Link href="/locations/south-lake-tahoe" className="block text-sm text-slate-300 hover:text-white transition-colors">South Lake Tahoe</Link>
                  <Link href="/locations/truckee" className="block text-sm text-slate-300 hover:text-white transition-colors">Truckee</Link>
                  <Link href="/locations/carson-city" className="block text-sm text-slate-300 hover:text-white transition-colors">Carson City</Link>
                  <Link href="/locations/reno" className="block text-sm text-slate-300 hover:text-white transition-colors">Reno</Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/resources" className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors">Owner Resources</Link>
        </div>

        <div className="hidden md:flex">
          <Link href="/sell" className="px-5 py-2.5 text-sm font-medium bg-white text-black hover:bg-gray-200 transition-colors rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Request Confidential Conversation
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            className="p-2 -mr-2 text-slate-400 hover:text-slate-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
        <div className="md:hidden bg-[#050505] border-b border-#52D017/20 px-6 py-4 flex flex-col space-y-4">
          <Link href="/sell" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base font-medium text-[#52D017] min-h-[44px]">Sell a Business</Link>
          <Link href="/#subsidiaries" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base font-medium text-gray-300 min-h-[44px]">Industries</Link>
          <Link href="/locations/roseville" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base font-medium text-gray-300 min-h-[44px]">Locations</Link>
          <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base font-medium text-gray-300 min-h-[44px]">Owner Resources</Link>
          <Link href="/sell" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 mt-4 text-center text-sm font-bold bg-white text-black rounded-sm min-h-[44px]">
            Request Confidential Conversation
          </Link>
          <button className="w-full mt-4 min-h-[44px] px-5 py-3 text-sm font-medium bg-white text-black hover:bg-gray-200 transition-colors rounded-sm">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
