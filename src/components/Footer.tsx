import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold tracking-tight text-slate-200 mb-6 flex items-center gap-2">
            <div className="w-6 h-6 bg-#52D017/10 border border-#52D017/40 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-#52D017"></div>
            </div>
            XITSOURCE
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Strategic Acquisitions and Growth Experts based in Roseville, California. Providing clear paths forward for business exits and operational optimization.
          </p>
          <address className="not-italic text-sm text-gray-500 leading-relaxed">
            Roseville, CA 95678<br />
            United States
          </address>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-6">Acquisitions</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link href="/industries/residential-homes" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Residential</Link></li>
            <li><Link href="/industries/raw-land" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Raw Land</Link></li>
            <li><Link href="/resources/sell-rv-park-california" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">RV Parks</Link></li>
            <li><Link href="/resources/laundromat-business-exit-strategies" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Laundromats</Link></li>
            <li><Link href="/resources/self-storage-facility-investments" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Storage</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-6">Company</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link href="/#about" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">About</Link></li>
            <li><Link href="/letter" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Our Letter</Link></li>
            <li><Link href="/#about" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Partnership</Link></li>
            <li><Link href="/faq" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">FAQ</Link></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-6">Resources</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link href="/scorecard" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Seller Scorecard</Link></li>
            <li><Link href="/resources" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Transition Guides</Link></li>
            <li><Link href="/resources" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Owner Resources</Link></li>
            <li><Link href="/sell" className="hover:text-[#52D017] min-h-[44px] inline-flex items-center">Contact</Link></li>
            <li>
              <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 border border-gray-700 rounded-sm bg-[#161616]/50">
                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                 <span className="text-xs">CCPA / CPRA Compliant</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#1a1a1a]/50">
        <h3 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-6 text-center">Regions We Serve</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* NorCal Hubs */}
          <div>
            <h4 className="text-[#52D017] text-[10px] font-bold uppercase tracking-widest mb-3 border-b border-[#1a1a1a] pb-2">NorCal Hubs</h4>
            <div className="flex flex-col gap-2 text-xs text-slate-500">
              <Link href="/locations/sacramento" className="hover:text-[#52D017] transition-colors">Sacramento</Link>
              <Link href="/locations/roseville" className="hover:text-[#52D017] transition-colors">Roseville</Link>
              <Link href="/locations/rocklin" className="hover:text-[#52D017] transition-colors">Rocklin</Link>
              <Link href="/locations/folsom" className="hover:text-[#52D017] transition-colors">Folsom</Link>
              <Link href="/locations/stockton" className="hover:text-[#52D017] transition-colors">Stockton</Link>
              <Link href="/locations/modesto" className="hover:text-[#52D017] transition-colors">Modesto</Link>
              <Link href="/locations/fresno" className="hover:text-[#52D017] transition-colors">Fresno</Link>
              <Link href="/locations/chico" className="hover:text-[#52D017] transition-colors">Chico</Link>
              <Link href="/locations/redding" className="hover:text-[#52D017] transition-colors">Redding</Link>
            </div>
          </div>
          {/* Bay Area Metro */}
          <div>
            <h4 className="text-[#52D017] text-[10px] font-bold uppercase tracking-widest mb-3 border-b border-[#1a1a1a] pb-2">Bay Area Metro</h4>
            <div className="flex flex-col gap-2 text-xs text-slate-500">
              <Link href="/locations/san-francisco" className="hover:text-[#52D017] transition-colors">San Francisco</Link>
              <Link href="/locations/san-jose" className="hover:text-[#52D017] transition-colors">San Jose</Link>
              <Link href="/locations/oakland" className="hover:text-[#52D017] transition-colors">Oakland</Link>
              <Link href="/locations/santa-rosa" className="hover:text-[#52D017] transition-colors">Santa Rosa</Link>
              <Link href="/locations/walnut-creek" className="hover:text-[#52D017] transition-colors">Walnut Creek</Link>
              <Link href="/locations/pleasanton" className="hover:text-[#52D017] transition-colors">Pleasanton</Link>
              <Link href="/locations/palo-alto" className="hover:text-[#52D017] transition-colors">Palo Alto</Link>
              <Link href="/locations/mountain-view" className="hover:text-[#52D017] transition-colors">Mountain View</Link>
              <Link href="/locations/redwood-city" className="hover:text-[#52D017] transition-colors">Redwood City</Link>
            </div>
          </div>
          {/* Tahoe / Reno */}
          <div>
            <h4 className="text-[#52D017] text-[10px] font-bold uppercase tracking-widest mb-3 border-b border-[#1a1a1a] pb-2">Tahoe / Reno</h4>
            <div className="flex flex-col gap-2 text-xs text-slate-500">
              <Link href="/locations/south-lake-tahoe" className="hover:text-[#52D017] transition-colors">South Lake Tahoe, CA</Link>
              <Link href="/locations/truckee" className="hover:text-[#52D017] transition-colors">Truckee</Link>
              <Link href="/locations/carson-city" className="hover:text-[#52D017] transition-colors">Carson City</Link>
              <Link href="/locations/reno" className="hover:text-[#52D017] transition-colors">Reno</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-[#1a1a1a]/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-600">
              &copy; 2026 XitSource. All rights reserved.
            </p>
            <p className="text-xs font-medium text-gray-600/70">
              Headquartered in Roseville, CA | Serving Northern California & South Lake Tahoe, CA
            </p>
          </div>
          
          <div className="flex gap-6 text-xs text-gray-600">
            <Link href="/privacy" className="hover:text-[#52D017] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#52D017] transition-colors">Terms of Service</Link>
            <Link href="/privacy#do-not-sell" className="hover:text-[#52D017] transition-colors">CCPA: Do Not Sell My Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
