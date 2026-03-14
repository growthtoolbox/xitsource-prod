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
            Pioneering the next stage of human evolution through advanced cyberkinetics, bio-engineering, and global infrastructure.
          </p>
          <address className="not-italic text-sm text-gray-500 leading-relaxed">
            123 Silicon Way<br />
            San Francisco, CA 94105<br />
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
          <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-6">AI Interface</h3>
          <div className="bg-[#050505] border border-[#1a1a1a] p-4 rounded-sm">
            <div className="text-xs text-#52D017 font-semibold mb-2">SB 1001 Disclosure</div>
            <p className="text-xs text-slate-400 leading-relaxed italic">
              &quot;I am an AI Assistant for XitSource. Automated systems and artificial intelligence are utilized throughout this platform to optimize communications and data processing.&quot;
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#1a1a1a]/50 flex flex-col items-center justify-center space-y-3">
        <p className="text-xs text-gray-600">
          &copy; 2026 XitSource Megacorporation. All rights reserved.
        </p>
        <p className="text-xs font-medium text-gray-600/70">
          Made in Roseville, California
        </p>
      </div>
    </footer>
  );
}
