import Link from 'next/link';

export default function ResourcesHubPage() {
  return (
    <div className="min-h-screen bg-white text-[#111827] py-24 pb-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 border-b border-gray-200 pb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111827] mb-6 max-w-3xl">
            Resources for Owners Considering a Transition
          </h1>
          <p className="text-xl text-[#111827]/90 leading-relaxed max-w-2xl">
            Clear, practical guidance to help you understand your options and next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Guides Section */}
          <Link href="/resources/guides" className="bg-[#fcfcfc] border border-gray-200 hover:border-[#52D017] p-8 rounded-sm group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col h-full relative cursor-pointer block">
            <h2 className="text-2xl font-bold text-[#111827] mb-4 group-hover:text-[#52D017] transition-colors">Guides →</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              Deep-dive operational walkthroughs, timelines, and transition strategies explicitly designed to help you execute smoothly.
            </p>
          </Link>
        </div>

      </div>
    </div>
  );
}
