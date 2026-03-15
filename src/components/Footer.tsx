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
          <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-6">Sitemap</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link href="/" className="hover:text-#52D017 min-h-[44px] inline-flex items-center">Home</Link></li>
            <li><Link href="/#subsidiaries" className="hover:text-#52D017 min-h-[44px] inline-flex items-center">Subsidiaries</Link></li>
            <li><Link href="/#solutions" className="hover:text-#52D017 min-h-[44px] inline-flex items-center">Solutions</Link></li>
            <li><Link href="/#about" className="hover:text-#52D017 min-h-[44px] inline-flex items-center">About Us</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-6">Compliance</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link href="/privacy" className="hover:text-#52D017 min-h-[44px] inline-flex items-center">Privacy Policy</Link></li>
            <li><Link href="/privacy#california-choices" className="hover:text-#52D017 min-h-[44px] inline-flex items-center leading-tight">Your California Privacy Choices</Link></li>
            <li><Link href="/privacy#do-not-sell" className="hover:text-#52D017 min-h-[44px] inline-flex items-center leading-tight">Do Not Sell or Share My Personal Information</Link></li>
            <li>
              <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 border border-gray-700 rounded-sm bg-[#161616]/50">
                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                 <span className="text-xs">CCPA / CPRA Compliant</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-6">Strategic Partners</h3>
          <div className="bg-[#050505] border border-[#1a1a1a] p-4 rounded-sm">
            <div className="text-xs text-#52D017 font-semibold mb-2">SB 1001 Disclosure</div>
            <p className="text-xs text-slate-400 leading-relaxed italic">
              &quot;I am an AI Assistant for XitSource. Automated systems and artificial intelligence are utilized throughout this platform to optimize communications and data processing.&quot;
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#1a1a1a]/50">
        <h3 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-4 text-center">Regions We Serve</h3>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-slate-500">
          <Link href="/locations/sacramento" className="hover:text-[#52D017] transition-colors">Sacramento</Link>
          <Link href="/locations/roseville" className="hover:text-[#52D017] transition-colors">Roseville</Link>
          <Link href="/locations/rocklin" className="hover:text-[#52D017] transition-colors">Rocklin</Link>
          <Link href="/locations/folsom" className="hover:text-[#52D017] transition-colors">Folsom</Link>
          <Link href="/locations/stockton" className="hover:text-[#52D017] transition-colors">Stockton</Link>
          <Link href="/locations/modesto" className="hover:text-[#52D017] transition-colors">Modesto</Link>
          <Link href="/locations/fresno" className="hover:text-[#52D017] transition-colors">Fresno</Link>
          <Link href="/locations/chico" className="hover:text-[#52D017] transition-colors">Chico</Link>
          <Link href="/locations/redding" className="hover:text-[#52D017] transition-colors">Redding</Link>
          <Link href="/locations/san-francisco" className="hover:text-[#52D017] transition-colors">San Francisco</Link>
          <Link href="/locations/san-jose" className="hover:text-[#52D017] transition-colors">San Jose</Link>
          <Link href="/locations/oakland" className="hover:text-[#52D017] transition-colors">Oakland</Link>
          <Link href="/locations/santa-rosa" className="hover:text-[#52D017] transition-colors">Santa Rosa</Link>
          <Link href="/locations/walnut-creek" className="hover:text-[#52D017] transition-colors">Walnut Creek</Link>
          <Link href="/locations/pleasanton" className="hover:text-[#52D017] transition-colors">Pleasanton</Link>
          <Link href="/locations/palo-alto" className="hover:text-[#52D017] transition-colors">Palo Alto</Link>
          <Link href="/locations/mountain-view" className="hover:text-[#52D017] transition-colors">Mountain View</Link>
          <Link href="/locations/redwood-city" className="hover:text-[#52D017] transition-colors">Redwood City</Link>
          <Link href="/locations/south-lake-tahoe" className="hover:text-[#52D017] transition-colors">South Lake Tahoe</Link>
          <Link href="/locations/truckee" className="hover:text-[#52D017] transition-colors">Truckee</Link>
          <Link href="/locations/carson-city" className="hover:text-[#52D017] transition-colors">Carson City</Link>
          <Link href="/locations/reno" className="hover:text-[#52D017] transition-colors">Reno</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-[#1a1a1a]/50 flex flex-col items-center justify-center space-y-3">
        <p className="text-xs text-gray-600">
          &copy; 2026 XitSource. All rights reserved.
        </p>
        <p className="text-xs font-medium text-gray-600/70">
          John Poindexter & Ryan Peterson | Made in Roseville, California
        </p>
      </div>
    </footer>
  );
}
