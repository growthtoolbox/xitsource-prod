import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold tracking-tight text-[#111827] mb-6 flex items-center gap-2">
            <div className="w-6 h-6 bg-#52D017/10 border border-#52D017/40 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-#52D017"></div>
            </div>
            XITSOURCE
          </div>
          <p className="not-italic text-sm text-[#111827] font-semibold mb-3 tracking-widest uppercase text-[#52D017]">
            We work with owners who are ready for a clear next step.
          </p>
          <address className="not-italic text-sm text-[#111827] leading-relaxed">
            We focus on multifamily and cash-flowing assets across the United States.
          </address>
        </div>

        {/* Column 2: What We Acquire */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-6">What We Acquire</h3>
          <ul className="space-y-4 text-sm text-[#111827]">
            <li><Link href="/industries/multi-family-homes" className="hover:text-[#52D017] inline-flex items-center">Multi-Family Homes</Link></li>
            <li><Link href="/industries/rv-parks" className="hover:text-[#52D017] inline-flex items-center">RV Parks</Link></li>
            <li><Link href="/industries/laundromat" className="hover:text-[#52D017] inline-flex items-center">Laundromats</Link></li>
            <li><Link href="/resources/mobile-home-community-acquisitions" className="hover:text-[#52D017] inline-flex items-center">Mobile Home Communities</Link></li>
            <li><Link href="/industries/self-storage" className="hover:text-[#52D017] inline-flex items-center">Self Storage</Link></li>
            <li><Link href="/industries/raw-land" className="hover:text-[#52D017] inline-flex items-center">Raw Land</Link></li>
          </ul>
        </div>
        
        {/* Column 3: Navigation */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-6">Company</h3>
          <ul className="space-y-4 text-sm text-[#111827]">
            <li><Link href="/" className="hover:text-[#52D017] inline-flex items-center">Home</Link></li>
            <li><Link href="/markets" className="hover:text-[#52D017] inline-flex items-center">Markets</Link></li>
            <li><Link href="/resources" className="hover:text-[#52D017] inline-flex items-center">Resources</Link></li>
            <li><Link href="/company" className="hover:text-[#52D017] inline-flex items-center">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#52D017] inline-flex items-center">Contact</Link></li>
          </ul>
        </div>

        {/* Column 4: CTA */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-6">Have an Opportunity?</h3>
          <p className="text-sm text-[#111827] mb-6">
            Start a confidential conversation.
          </p>
          <ul className="space-y-4 text-sm text-[#111827]">
            <li><Link href="/sell" className="hover:text-[#52D017] font-semibold inline-flex items-center gap-2">👉 Request a Confidential Call</Link></li>
            <li className="text-xs text-gray-500 italic mt-2">We are ready, when you are ready.</li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-200/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-xs text-[#111827]">
              &copy; 2026 XitSource. All rights reserved.
            </p>
            <p className="text-xs font-semibold text-[#52D017] uppercase tracking-wider">
              Nationwide Focus. Built for Long-Term Value.
            </p>
          </div>
          
          <div className="flex gap-6 text-xs text-[#111827]">
            <Link href="/privacy" className="hover:text-[#52D017] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#52D017] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
