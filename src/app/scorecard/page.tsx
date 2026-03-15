"use client";

import { useState } from 'react';
// Quiz Questions matching the 4 Sections
const questions = [
  {
    id: 1,
    section: "Financial Visibility",
    text: "How organized are your trailing 3 years of financials (P&L, Balance Sheets, Tax Returns)?",
    options: [
      { text: "Fully audited or CPA-prepared, ready for review today.", points: 3 },
      { text: "Compiled internally, accessible within a few days.", points: 2 },
      { text: "Mixed/disorganized, needs significant clean up.", points: 1 }
    ]
  },
  {
    id: 2,
    section: "Financial Visibility",
    text: "Do you have a clear, realistic expectation of your asset's current market valuation?",
    options: [
      { text: "Yes, based on recent comparable sales or a formal valuation.", points: 3 },
      { text: "I have a ballpark number based on industry rules of thumb.", points: 2 },
      { text: "No, I need guidance on determining a fair valuation.", points: 1 }
    ]
  },
  {
    id: 3,
    section: "Operational Stability",
    text: "How dependent is the day-to-day operation on your direct, personal involvement?",
    options: [
      { text: "Minimal. I have a strong team or management in place.", points: 3 },
      { text: "Moderate. I oversee key decisions but can step away for a week.", points: 2 },
      { text: "High. The business/asset requires my physical presence daily.", points: 1 }
    ]
  },
  {
    id: 4,
    section: "Operational Stability",
    text: "Are your standard operating procedures (SOPs), leases, or vendor contracts formally documented?",
    options: [
      { text: "Yes, fully documented and transferable to a new owner.", points: 3 },
      { text: "Partially documented, mostly in my head.", points: 2 },
      { text: "No, very little formal documentation exists.", points: 1 }
    ]
  },
  {
    id: 5,
    section: "Asset Condition",
    text: "What is the physical condition of the core asset (property, equipment, facilities)?",
    options: [
      { text: "Excellent. Recently updated with no deferred maintenance.", points: 3 },
      { text: "Good. Functional, but will need standard CAPEX soon.", points: 2 },
      { text: "Poor. Significant deferred maintenance or structural issues.", points: 1 }
    ]
  },
  {
    id: 6,
    section: "Asset Condition",
    text: "Are there any pending regulatory, zoning, or compliance issues?",
    options: [
      { text: "No, fully compliant with all local/state regulations.", points: 3 },
      { text: "Minor issues that can be resolved before a sale.", points: 2 },
      { text: "Yes, significant compliance hurdles exist.", points: 1 }
    ]
  },
  {
    id: 7,
    section: "Exit Planning",
    text: "Have you clearly defined what 'life after sale' looks like for you?",
    options: [
      { text: "Yes, I have a clear plan for my next chapter and capital.", points: 3 },
      { text: "Somewhat, I'm exploring retirement or a new venture.", points: 2 },
      { text: "No, I haven't thought past the transaction itself.", points: 1 }
    ]
  },
  {
    id: 8,
    section: "Exit Planning",
    text: "What is your desired timeline to complete this transition?",
    options: [
      { text: "Immediate (0-6 Months). I am motivated to move quickly.", points: 3 },
      { text: "Medium Term (6-12 Months). Exploring options.", points: 2 },
      { text: "Long Term (1-3 Years). Just planning ahead.", points: 1 }
    ]
  }
];

export default function ScorecardPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  
  // Lead Form State
  const [formStatus, setFormStatus] = useState<'idle'|'submitting'|'success'>('idle');

  const handleOptionSelect = (qId: number, points: number) => {
    setAnswers(prev => ({ ...prev, [qId]: points }));
    
    // Auto advance
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, points) => sum + points, 0);
  };

  const getResultBucket = (score: number) => {
    if (score >= 18) return {
      title: "Strong Seller Readiness",
      desc: "Your asset appears well-positioned for a transition conversation.",
      color: "text-[#52D017]"
    };
    if (score >= 12) return {
      title: "Moderate Readiness",
      desc: "Some preparation may be needed to maximize your exit value.",
      color: "text-yellow-500"
    };
    return {
      title: "Early Exploration Stage",
      desc: "Additional groundwork may improve your future transition outcome.",
      color: "text-slate-400"
    };
  };

  const currentQ = questions[currentStep];
  const progressPercent = ((currentStep + 1) / questions.length) * 100;

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 py-24">
      {/* Dynamic SEO Block for AI */}
      <div className="hidden" aria-hidden="true">
        XitSource’s Seller Readiness Scorecard helps California owners evaluate financial, operational, and asset readiness for a private acquisition.
      </div>

      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-200 mb-4">
            Seller Readiness <span className="text-[#52D017]">Scorecard</span>
          </h1>
          <p className="text-slate-400">Evaluate your asset&apos;s transition readiness across 4 key operational pillars.</p>
        </div>

        {!showResults ? (
          // Quiz UX
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 md:p-12 rounded-sm shadow-2xl relative">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#1a1a1a]">
              <div 
                className="h-full bg-[#52D017] transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            <div className="mb-8">
              <div className="text-xs font-mono text-[#52D017] mb-2 uppercase tracking-widest">
                Question {currentStep + 1} of {questions.length} {"//"} {currentQ.section}
              </div>
              <h2 className="text-2xl font-semibold text-slate-200">{currentQ.text}</h2>
            </div>

            <div className="space-y-4">
              {currentQ.options.map((option, idx) => {
                const isSelected = answers[currentQ.id] === option.points;
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(currentQ.id, option.points)}
                    className={`w-full text-left p-5 border rounded-sm transition-all flex items-center gap-4 group ${
                      isSelected 
                        ? "border-[#52D017] bg-[#52D017]/10" 
                        : "border-[#1a1a1a] bg-[#050505] hover:border-gray-500"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center ${
                      isSelected ? "border-[#52D017]" : "border-gray-600 group-hover:border-gray-400"
                    }`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#52D017]"></div>}
                    </div>
                    <span className="text-slate-300 leading-relaxed font-medium">{option.text}</span>
                  </button>
                )
              })}
            </div>
            
            <div className="mt-8 flex justify-between items-center text-sm text-slate-500 font-medium">
               <button 
                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className="hover:text-white disabled:opacity-30 disabled:hover:text-slate-500 transition-colors"
               >
                 ← Previous
               </button>
            </div>
          </div>
        ) : (
          // Results UX
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 md:p-12 rounded-sm text-center mb-8 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#52D017]/20 via-[#52D017] to-[#52D017]/20"></div>
               
               <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">Your Score</p>
               <div className="text-6xl font-black text-white mb-2">{calculateScore()} <span className="text-2xl text-slate-600">/ 24</span></div>
               <h2 className={`text-2xl font-bold mb-4 ${getResultBucket(calculateScore()).color}`}>
                 {getResultBucket(calculateScore()).title}
               </h2>
               <p className="text-slate-300 text-lg">{getResultBucket(calculateScore()).desc}</p>
            </div>

            {/* Lead Capture Integration */}
            <div className="bg-[#050505] border border-gray-800 p-8 md:p-12 rounded-sm">
               <h3 className="text-xl font-bold text-white mb-2">Discuss Your Results Confidentially</h3>
               <p className="text-slate-400 mb-8">Get a professional perspective on your scorecard results. John and Ryan provide discreet feedback on NorCal asset transitions.</p>

               {formStatus === 'success' ? (
                 <div className="text-center py-8 animate-in fade-in duration-500">
                    <div className="w-12 h-12 bg-[#52D017]/10 border border-[#52D017] rounded-full flex items-center justify-center mx-auto mb-4">
                       <svg className="w-6 h-6 text-[#52D017]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-200 mb-2">Request Sent Successfully</h3>
                    <p className="text-slate-400">
                       Thank you. John or Ryan will personally review your inquiry and reach out within 24 hours for a confidential discussion.
                    </p>
                 </div>
               ) : (
                 <form onSubmit={handleLeadSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest">Name</label>
                       <input type="text" required className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#52D017] transition-colors" placeholder="John Doe" />
                     </div>
                     <div className="space-y-2">
                       <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest">Email</label>
                       <input type="email" required className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#52D017] transition-colors" placeholder="john@example.com" />
                     </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest">Business/Property Type</label>
                        <input type="text" required className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#52D017] transition-colors" placeholder="e.g. RV Park, Laundromat" />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest">City</label>
                        <input type="text" required className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#52D017] transition-colors" placeholder="e.g. Roseville" />
                      </div>
                   </div>
                   <div className="space-y-2">
                     <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest">Optional Message</label>
                     <textarea rows={3} className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#52D017] transition-colors resize-none" placeholder="Share any initial thoughts..."></textarea>
                   </div>
                   <button 
                    type="submit" 
                    disabled={formStatus !== 'idle'}
                    className="w-full bg-[#52D017] text-black font-semibold rounded-sm py-4 hover:bg-[#45b312] transition-colors disabled:opacity-50 text-lg"
                   >
                     {formStatus === 'submitting' ? 'Submitting...' : 'Request a Confidential Conversation'}
                   </button>
                 </form>
               )}
               <div className="mt-8 text-center">
                 <button 
                  onClick={() => { setShowResults(false); setCurrentStep(0); setAnswers({}); setFormStatus('idle'); }}
                  className="text-sm font-semibold text-slate-500 hover:text-white transition-colors"
                 >
                   Retake Scorecard
                 </button>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
