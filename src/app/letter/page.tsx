export default function LetterPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 py-24">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#1a1a1a] bg-[#161616]/50 backdrop-blur-md mb-8 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
             Founding Ethos
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
            A Personal Note to <br className="hidden md:block" />
            <span className="text-[#52D017]">Northern California Owners</span>
          </h1>
        </div>

        <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-10 md:p-16 rounded-sm relative">
          {/* Subtle accent corner */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#52D017] rounded-tl-sm opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#52D017] rounded-br-sm opacity-50"></div>

          <div className="prose prose-invert prose-lg max-w-none prose-p:font-serif prose-p:leading-relaxed">
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              Building a business, a residential portfolio, or a land legacy takes years of sacrifice, late nights, and relentless focus. We understand that for most owners in Roseville, the Bay Area, and South Lake Tahoe, CA, your assets represent more than just a balance sheet—they represent your life&apos;s work.
            </p>
            
            <p className="mt-6">
              When the time comes to consider a transition, the traditional &quot;public listing&quot; route can be noisy, stressful, and often compromises the very confidentiality you&apos;ve worked to maintain.
            </p>

            <p className="mt-6">
              XitSource was founded to provide a different path. Our approach is built on real connections and private, direct negotiations. We aren&apos;t here to list your property; we are here to understand your goals. Whether you are looking for a clean exit from a laundromat, a strategic hand-off for an RV park, or a fair valuation for raw land, we prioritize:
            </p>

            <div className="my-10 space-y-6 font-sans">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#52D017]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#52D017] font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-200 mb-1">Strict Confidentiality</h4>
                  <p className="text-slate-400">Your employees, tenants, and competitors don&apos;t need to know your business until the deal is done.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#52D017]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#52D017] font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-200 mb-1">Legacy Protection</h4>
                  <p className="text-slate-400">We honor the work you&apos;ve put in and look to build upon it, not strip it down.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#52D017]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#52D017] font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-200 mb-1">Certainty of Execution</h4>
                  <p className="text-slate-400">We move at the speed of a partnership, not a committee.</p>
                </div>
              </div>
            </div>

            <p className="mt-10">
              If you&apos;ve ever wondered what your next chapter looks like, we invite you to an informal, low-pressure conversation. No brokers, no public signs, just a direct path forward.
            </p>

            <div className="mt-12 pt-8 border-t border-[#1a1a1a]">
              <p className="italic text-slate-400 mb-2">Respectfully,</p>
              <p className="text-xl font-bold text-slate-200">The XitSource Partnership</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs uppercase tracking-widest text-[#52D017]">John Poindexter</span>
                <span className="text-slate-600">|</span>
                <span className="text-xs uppercase tracking-widest text-[#52D017]">Ryan Peterson</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="/sell" className="inline-block px-10 py-5 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 text-lg">
            Begin a Confidential Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
