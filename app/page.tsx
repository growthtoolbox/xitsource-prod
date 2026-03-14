import Image from "next/image";
import Link from "next/link";
import { Inter, Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const businesses = [
  { id: 1, name: "NeuroNet Solutions", desc: "Brain-computer interfaces & neural enhancements.", color: "text-cyan-400", border: "border-cyan-500/30", bg: "hover:bg-cyan-500/10", iconBg: "group-hover:bg-cyan-500/20", shadow: "rgba(34,211,238,0.2)" },
  { id: 2, name: "Neon Drift Logistics", desc: "Sub-orbital hover-courier services.", color: "text-pink-500", border: "border-pink-500/30", bg: "hover:bg-pink-500/10", iconBg: "group-hover:bg-pink-500/20", shadow: "rgba(236,72,153,0.2)" },
  { id: 3, name: "CyberDyne Prosthetics", desc: "Next-gen cybernetic limbs & bio-mods.", color: "text-purple-500", border: "border-purple-500/30", bg: "hover:bg-purple-500/10", iconBg: "group-hover:bg-purple-500/20", shadow: "rgba(168,85,247,0.2)" },
  { id: 4, name: "HoloWeave Media", desc: "Immersive VR construction & holoscapes.", color: "text-emerald-400", border: "border-emerald-500/30", bg: "hover:bg-emerald-500/10", iconBg: "group-hover:bg-emerald-500/20", shadow: "rgba(52,211,153,0.2)" },
  { id: 5, name: "Aegis ICE", desc: "Corporate netrunning & proactive defense.", color: "text-blue-500", border: "border-blue-500/30", bg: "hover:bg-blue-500/10", iconBg: "group-hover:bg-blue-500/20", shadow: "rgba(59,130,246,0.2)" },
  { id: 6, name: "SynthoFoods Inc.", desc: "Lab-grown nutrient synthesis & vertical farming.", color: "text-lime-400", border: "border-lime-500/30", bg: "hover:bg-lime-500/10", iconBg: "group-hover:bg-lime-500/20", shadow: "rgba(163,230,53,0.2)" },
  { id: 7, name: "Quantum Grid Energy", desc: "Zero-point energy harvesting.", color: "text-yellow-400", border: "border-yellow-500/30", bg: "hover:bg-yellow-500/10", iconBg: "group-hover:bg-yellow-500/20", shadow: "rgba(250,204,21,0.2)" },
  { id: 8, name: "Chroma Genetics", desc: "Designer bio-traits & DNA sequencing.", color: "text-rose-500", border: "border-rose-500/30", bg: "hover:bg-rose-500/10", iconBg: "group-hover:bg-rose-500/20", shadow: "rgba(244,63,94,0.2)" },
  { id: 9, name: "Voidwalker Aerospace", desc: "Low-orbit logistics & asteroid mining.", color: "text-indigo-400", border: "border-indigo-500/30", bg: "hover:bg-indigo-500/10", iconBg: "group-hover:bg-indigo-500/20", shadow: "rgba(129,140,248,0.2)" },
];

export default function Home() {
  return (
    <div className={`min-h-screen bg-black text-gray-200 overflow-hidden relative ${inter.className}`}>
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-cyan-900/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-pink-900/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-screen">
        <header className="text-center mb-16 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md mb-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Global Network Hub
          </div>
          <h1 className={`text-6xl md:text-8xl font-black tracking-tighter ${orbitron.className}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              XITSOURCE
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            The nexus of next-generation corporate entities. Pioneering human evolution through cyberkinetics, zero-point energy, and neural architectures.
          </p>
        </header>

        {/* Subsidiaries Grid */}
        <section className="w-full max-w-7xl relative mt-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent blur-3xl rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {businesses.map((biz) => (
              <Link href={`#${biz.id}`} key={biz.id} className="group outline-none">
                <div 
                  className={`h-full p-8 rounded-2xl border ${biz.border} bg-black/40 backdrop-blur-md transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_-10px_var(--tw-shadow-color)] ${biz.bg} hover:border-opacity-100 flex flex-col relative overflow-hidden`} 
                  style={{ '--tw-shadow-color': biz.shadow } as React.CSSProperties}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                  
                  <div className={`text-2xl font-bold mb-3 ${biz.color} ${orbitron.className} group-hover:scale-105 transition-transform duration-500 origin-left relative z-10`}>
                    {biz.name}
                  </div>
                  <p className="text-gray-400 font-light group-hover:text-gray-200 transition-colors duration-300 flex-grow relative z-10">
                    {biz.desc}
                  </p>
                  
                  <div className="mt-8 flex items-center justify-between relative z-10">
                    <span className={`text-xs uppercase tracking-widest font-semibold ${biz.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}>
                      Initialize Node
                    </span>
                    <div className={`w-8 h-8 rounded-full border ${biz.border} flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all duration-300 ${biz.iconBg}`}>
                      <svg className={`w-4 h-4 ${biz.color} transform group-hover:translate-x-0.5 transition-transform`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        
        <footer className="mt-24 text-center text-sm text-gray-500 border-t border-white/5 w-full pt-8 pb-4 relative z-10">
          <p>© 2077 XitSource Megacorporation. All rights reserved.</p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              AEO INDEX: ACTIVE
            </span>
            <span className="text-gray-700">|</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-75"></span>
              NEURAL NET: SYNCED
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
