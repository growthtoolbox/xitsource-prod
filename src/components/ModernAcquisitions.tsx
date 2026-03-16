import React from 'react';

const ModernAcquisitions = () => {
  return (
    <div className="bg-white py-12 mb-16 border-y border-gray-200 w-full mt-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-[#111827] mb-4">
          Modern Acquisitions. Real Connections.
        </h2>
        <p className="text-lg text-slate-800 max-w-3xl mx-auto">
          We leverage institutional-grade technology to streamline the acquisition process, allowing us to focus on what matters most: the partnership and your legacy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* DocuSign Icon | Instant Execution */}
        <div className="flex flex-col items-center">
          <div className="mb-4 text-[#111827]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
              <path d="M10 9H8"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#111827] mb-3">Instant Execution</h3>
          <p className="text-slate-900 px-4 leading-relaxed">
            Secure and immediate contract finalization. We move at the speed of the market, ensuring no geographic delays in the closing timeline.
          </p>
        </div>

        {/* Google Meet Icon | Direct Collaboration */}
        <div className="flex flex-col items-center">
          <div className="mb-4 text-[#111827]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#111827] mb-3">Direct Collaboration</h3>
          <p className="text-slate-900 px-4 leading-relaxed">
            Face-to-face transparency and real-time strategy. Modern tools ensure we remain deeply connected to our partners across the country.
          </p>
        </div>

        {/* AI/Shield Icon | 24/7 AI-Assisted Oversight */}
        <div className="flex flex-col items-center">
          <div className="mb-4 text-[#111827]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M12 8v4"></path>
              <path d="M12 16h.01"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#111827] mb-3">24/7 AI-Assisted Oversight</h3>
          <p className="text-slate-900 px-4 leading-relaxed">
            Advanced remote monitoring and AI-assisted performance analytics. We maintain proactive oversight of asset security and operational systems 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModernAcquisitions;
