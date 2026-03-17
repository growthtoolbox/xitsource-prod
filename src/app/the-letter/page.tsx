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
            
            <p>When we founded XitSource, we did it with a simple realization: selling a business or a property isn&apos;t just a financial transaction. For most of the people we work with, it&apos;s the culmination of decades of hard work, late nights, and a deep commitment to their community.</p>
            
            <p>We&apos;ve heard the same concerns from owners across the country: Is the process going to be a headache? Will my tenants or employees be blindsided? Can I trust the person on the other side of the table?</p>

            <p>We live and work where we value the pace and the people, but our partnership is designed to serve owners nationwide. Distance is never an issue. We utilize modern, secure systems to handle the heavy lifting and paperwork remotely, so you never have to worry about travel or office visits. These tools allow us to stay in close, personal contact through every step of the process, ensuring you are always informed and your time is respected.</p>

            <p>Our goal is to be the easiest, most respectful &apos;exit&apos; you&apos;ll ever have. Whether your facility is down the road from us or halfway across the country, we treat your legacy with the same level of integrity you used to build it.</p>

            <p>If you&apos;re ready to start thinking about your next chapter, we&apos;d welcome a confidential conversation—no pressure, no brokers, just a clear path forward.</p>
            
            <div className="pt-8 pb-4">
              <p>Sincerely,</p>
              <p className={`text-4xl md:text-5xl mt-4 text-[#111827] ${script.className}`}>John Poindexter</p>
              <p className={`text-sm mt-2 text-[#111827]/70 font-sans ${inter.className}`}>Partner, XitSource</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="/sell" className="inline-block px-10 py-5 bg-white text-[#111827] font-semibold rounded-sm hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 text-lg">
            Begin a Confidential Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
