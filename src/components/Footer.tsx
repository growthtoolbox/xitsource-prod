import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold tracking-tight text-[#111827] mb-6 flex items-center gap-2">
            <div className="w-6 h-6 bg-#52D017/10 border border-#52D017/40 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-#52D017"></div>
            </div>
            XITSOURCE
          </div>
          <p className="text-sm text-[#111827] mb-6">
            Modern Tools. Real Connections.
          </p>
          <address className="not-italic text-sm text-[#111827] leading-relaxed">
            Based in Northern California.<br />
            Partnering with Owners Across the U.S.
          </address>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-6">Acquisitions</h3>
          <ul className="space-y-4 text-sm text-[#111827]">
            <li><Link href="/industries/residential-homes" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Residential</Link></li>
            <li><Link href="/industries/raw-land" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Raw Land</Link></li>
            <li><Link href="/resources/sell-rv-park-california" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">RV Parks</Link></li>
            <li><Link href="/resources/laundromat-business-exit-strategies" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Laundromats</Link></li>
            <li><Link href="/resources/self-storage-facility-investments" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Storage</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-6">Company</h3>
          <ul className="space-y-4 text-sm text-[#111827]">
            <li><Link href="/#about" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">About</Link></li>
            <li><Link href="/letter" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Our Letter</Link></li>
            <li><Link href="/#about" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Partnership</Link></li>
            <li><Link href="/faq" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">FAQ</Link></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-6">Resources</h3>
          <ul className="space-y-4 text-sm text-[#111827]">
            <li><Link href="/scorecard" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Seller Scorecard</Link></li>
            <li><Link href="/resources" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Transition Guides</Link></li>
            <li><Link href="/resources" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Owner Resources</Link></li>
            <li><Link href="/sell" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Contact</Link></li>
            <li>
              <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 border border-gray-200 rounded-sm bg-white/50">
                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                 <span className="text-xs">CCPA / CPRA Compliant</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      


      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-gray-200/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-[#111827]">
              &copy; 2026 XitSource. All rights reserved.
            </p>
            <p className="text-xs font-medium text-[#111827]/70">
              Focused on Confidentiality. Driven by Integrity.
            </p>
          </div>
          
          <div className="flex gap-6 text-xs text-[#111827]">
            <Link href="/privacy" className="hover:text-[#52D017] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#52D017] transition-colors">Terms of Service</Link>
            <Link href="/privacy#do-not-sell" className="hover:text-[#52D017] transition-colors">CCPA: Do Not Sell My Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
