"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/40 rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-cyan-400"></div>
          </div>
          XITSOURCE
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#subsidiaries" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Subsidiaries</Link>
          <Link href="/#solutions" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Solutions</Link>
          <Link href="/#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About</Link>
        </div>

        <div className="hidden md:flex">
          <button className="px-5 py-2.5 text-sm font-medium bg-white text-black hover:bg-gray-200 transition-colors rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Get a Briefing
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            className="p-2 -mr-2 text-gray-400 hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
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
        <div className="md:hidden bg-[#121212] border-b border-cyan-500/20 px-6 py-4 flex flex-col space-y-4">
          <Link href="/#subsidiaries" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base font-medium text-gray-300 min-h-[44px]">Subsidiaries</Link>
          <Link href="/#solutions" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base font-medium text-gray-300 min-h-[44px]">Solutions</Link>
          <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base font-medium text-gray-300 min-h-[44px]">About</Link>
          <button className="w-full mt-4 min-h-[44px] px-5 py-3 text-sm font-medium bg-white text-black hover:bg-gray-200 transition-colors rounded-sm">
            Get a Briefing
          </button>
        </div>
      )}
    </nav>
  );
}
