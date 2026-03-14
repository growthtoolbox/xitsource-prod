import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Privacy Policy | California CPRA Choices - XitSource',
  description: 'California Privacy Notice, CCPA/CPRA disclosures, and AI interaction notices for XitSource.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 pb-32 space-y-16">
      
      <header className="space-y-4 border-b border-[#1a1a1a] pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-200">Privacy Policy & California Disclosures</h1>
        <p className="text-slate-400 text-lg">Last Updated: March 14, 2026</p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-#52D017/30 rounded-sm bg-#52D017/10 text-#52D017 text-sm font-medium">
           CCPA / CPRA Compliant Notice
        </div>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-200">Notice at Collection</h2>
        <p className="text-gray-300 leading-relaxed">
          XitSource and its subsidiaries collect Personal Information to provide services, enhance your experience, and comply with legal obligations. By using our services, you consent to the data collection practices described herein.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-200">Categories of Data Collected</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-300">
          <li><strong>Identifiers:</strong> Name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, social security number, driver&apos;s license number, passport number, or other similar identifiers.</li>
          <li><strong>Commercial information:</strong> Records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.</li>
          <li><strong>Biometric information:</strong> Genetic, physiological, biological, or behavioral characteristics (applicable primarily to CyberDyne and Chroma Genetics).</li>
          <li><strong>Internet or other electronic network activity:</strong> Browsing history, search history, and information regarding a consumer&apos;s interaction with an internet website, application, or advertisement.</li>
          <li><strong>Geolocation data:</strong> Physical location or movements (applicable to Neon Drift Logistics and Voidwalker Aerospace).</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-200">AI Interaction Disclosure (SB 1001)</h2>
        <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-6 rounded-sm">
          <p className="text-gray-300 leading-relaxed mb-4">
            In compliance with California SB 1001, users are hereby notified that they are communicating with Artificial Intelligence. AI and automated systems are utilized across this platform for customer service, predictive modeling, and lead qualification.
          </p>
          <p className="text-#52D017 text-sm font-mono border-l-2 border-#52D017 pl-4">
            Notice: I am an AI Assistant acting on behalf of XitSource. Our communications may be synthesized or facilitated by machine learning algorithms.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-200" id="california-choices">Your California Privacy Rights</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), California residents have specific rights regarding their personal information:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-300 mb-6">
          <li><strong>Right to Know:</strong> You may request disclosure of the specific pieces and categories of personal information we have collected about you, the categories of sources for that information, the business or commercial purposes for collecting the information, and the categories of third parties with which the information was shared.</li>
          <li><strong>Right to Delete:</strong> You have the right to request that we delete your personal information (with certain exceptions).</li>
          <li><strong>Right to Correct:</strong> You have the right to request the correction of inaccurate personal information.</li>
          <li><strong>Right to Opt-Out:</strong> You have the right to direct us not to sell or share your personal information.</li>
          <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
        </ul>
      </section>

      <section className="space-y-6 relative" id="do-not-sell">
        <div className="absolute -left-4 top-0 w-1 h-full bg-#52D017/50 rounded-full hidden md:block"></div>
        <h2 className="text-2xl font-semibold text-slate-200">Do Not Sell or Share My Personal Information</h2>
        <p className="text-gray-300 leading-relaxed">
          XitSource does not sell personal information for monetary value. However, we may &quot;share&quot; data with analytics or advertising partners as defined by the CPRA. 
        </p>
        <div className="mt-8">
          <button className="px-6 py-3 bg-[#0a0a0a] border border-gray-700 hover:border-#52D017 text-slate-200 rounded-sm transition-colors text-sm font-medium">
            Opt-Out of Data Sharing
          </button>
        </div>
      </section>
      
      <div className="pt-12 text-sm text-gray-500 border-t border-[#1a1a1a]">
        If you have questions about this privacy policy or wish to exercise your rights, contact us at privacy@xitsource.com or send a written request to 123 Silicon Way, San Francisco, CA 94105.
      </div>

    </div>
  );
}
