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
            
            <p>Building a business isn&apos;t just a financial transaction; it&apos;s the culmination of decades of hard work. We&apos;ve heard your concerns: Is the process a headache? Will it be discreet? Can I trust the buyer?</p>
            
            <p>We live in Northern California because we value the community here, but our partnership is built on modern, national standards. We use tools like DocuSign and simple video check-ins not to replace the personal touch, but to protect it. By handling the technical heavy lifting digitally, we keep the process simple and respectful of your time.</p>
            
            <p>Our goal is to be the easiest, most respectful &apos;exit&apos; you&apos;ll ever have. Whether your facility is down the road or across the country, we treat your legacy with integrity.</p>
            
            <div className="pt-8 pb-4">
              <p>Sincerely,</p>
              <p className={`text-4xl md:text-5xl mt-4 text-[#111827] ${script.className}`}>Ryan Peterson & John Poindexter</p>
              <p className={`text-sm mt-2 text-[#111827]/70 font-sans ${inter.className}`}>Partners, XitSource</p>
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
