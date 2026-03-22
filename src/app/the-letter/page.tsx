import { Inter, Merriweather, Dancing_Script } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const serif = Merriweather({ weight: ['400', '700'], subsets: ['latin'] });
const script = Dancing_Script({ weight: ['400', '700'], subsets: ['latin'] });

export default function LetterPage() {
  return (
    <div className="min-h-screen bg-white text-[#111827] py-24">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-gray-200 bg-white/50 backdrop-blur-md mb-8 text-xs font-semibold tracking-widest text-[#52D017] uppercase">
             A Letter to Owners
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            A Personal Note on <br className="hidden md:block" />
            <span className="text-[#52D017]">Your Next Chapter</span>
          </h1>
        </div>

        <div className="bg-[#F9FAFB] border border-gray-200 p-10 md:p-16 rounded-sm shadow-sm relative">
          <div className={`space-y-6 text-[#111827] text-lg md:text-xl leading-relaxed ${serif.className}`}>
            <p>Dear Owner,</p>
            
            <p>We know that selling a property or business is not a small decision.</p>

            <p>In many cases, it represents years of work, relationships, and responsibility. It is not just about the transaction. It is about what comes next.</p>

            <p>We work with owners across the country who are thinking about selling, transitioning, or simply exploring their options. Some are ready to move forward now. Others are just starting to consider what the right path might look like.</p>

            <p>Our approach is straightforward.</p>

            <p>We focus on understanding the situation, evaluating the opportunity, and giving a clear answer. If it makes sense to move forward, we will. If it does not, we will say that directly.</p>

            <p>We are not here to complicate the process or create unnecessary pressure. The goal is to provide a path that is simple, honest, and aligned with what you are trying to accomplish.</p>

            <p>We focus primarily on multifamily properties and other cash-flowing assets including RV parks, laundromats, mobile home communities, self storage, and select land opportunities.</p>

            <p>If you are considering a sale, a partnership, or just want a second perspective, we are always open to a direct conversation.</p>

            <p>We work together across acquisitions and operations, taking a hands-on approach to every opportunity we evaluate.</p>
            
            <div className="pt-8 pb-4">
              <p>Sincerely,</p>
              <div className="mt-4 flex flex-col items-start">
                  <p className={`text-4xl md:text-5xl text-[#111827] ${script.className}`}>John Poindexter</p>
                  <p className={`text-4xl md:text-5xl text-[#111827] mt-2 ${script.className}`}>Ryan Peterson</p>
              </div>
              <p className={`text-sm mt-4 text-[#111827]/70 font-sans font-bold uppercase tracking-widest ${inter.className}`}>XitSource</p>
            </div>

            <p className="mt-8 pt-8 border-t border-gray-200 text-base italic text-[#111827]/70">
              We approach every opportunity with a focus on clarity, follow-through, and doing what we say we&apos;ll do.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="/sell" className="inline-flex items-center gap-2 px-10 py-5 bg-[#52D017] text-[#111827] font-bold rounded-sm hover:bg-[#45b312] transition-colors shadow-lg shadow-[#52D017]/20 text-lg">
            👉 Request a Confidential Call
          </a>
          <p className="text-sm text-[#111827]/60 mt-6 italic font-medium">We are ready, when you are ready.</p>
        </div>
      </div>
    </div>
  );
}
