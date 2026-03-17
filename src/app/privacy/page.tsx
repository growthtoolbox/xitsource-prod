import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | XitSource',
  description: 'Privacy Policy and data practices for XitSource acquisitions.',
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-white min-h-screen text-[#333333]">
      <div className="max-w-4xl mx-auto px-6 py-20 pb-32 space-y-12">
        <header className="space-y-4 border-b border-gray-200 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#333333]">Privacy Policy</h1>
        <p className="text-[#333333] text-lg font-medium">Last Updated: March 17, 2026</p>
      </header>
      
      <div className="space-y-8 text-lg leading-relaxed">
        <p>
          At XitSource, your privacy is a cornerstone of our partnership. We do not sell your data, and we do not use your information for anything other than facilitating a confidential business transition.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#333333]">1. Information We Collect</h2>
          <p>We only collect information necessary to evaluate a potential acquisition, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact Details:</strong> Name, email, and phone number.</li>
            <li><strong>Business Information:</strong> Details submitted via the Seller Scorecard or Inquiry forms regarding your property or business.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#333333]">2. How We Use Your Data</h2>
          <p>Your information is used exclusively to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Communicate directly with you (John and Ryan).</li>
            <li>Assess the fit of your business for our partnership.</li>
            <li>Provide you with the resources you requested (Guides/Scorecards).</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#333333]">3. AI Disclosure (SB 1001)</h2>
          <p>
            To provide 24/7 support and lead organization, we utilize AI systems. By using our site, you acknowledge that initial communications may be facilitated by these automated tools to ensure your inquiry is routed to John or Ryan as quickly as possible.
          </p>
        </section>

        <section id="ccpa" className="space-y-4 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-[#333333]">4. California Privacy Rights (CCPA/CPRA) & Do Not Sell Request</h2>
          <p>Although we operate nationwide, we comply with California standards:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Right to Know:</strong> You can ask what data we have.</li>
            <li><strong>Right to Delete:</strong> You can ask us to delete your inquiry at any time.</li>
            <li><strong>No Sale of Data:</strong> XitSource does not and will never sell your personal or business information to third parties.</li>
          </ul>
          <div className="bg-[#f9fafb] p-6 border border-gray-200 rounded-sm mt-6">
             <p className="font-semibold text-[#333333] mb-2">Submit a Do Not Sell Request</p>
             <p className="text-[#333333]/80">To exercise these rights or to submit a formal &apos;Do Not Sell My Info&apos; request, please email us directly at <a href="mailto:privacy@xitsource.com" className="text-[#52D017] hover:underline font-bold">privacy@xitsource.com</a>. We will process your request within 45 days.</p>
          </div>
        </section>

        <section className="space-y-4 pt-8">
          <h2 className="text-2xl font-semibold text-[#333333]">5. Contact Us</h2>
          <p>
            For any privacy concerns, please reach out directly through <Link href="/partnership" className="text-[#52D017] hover:underline">The Partnership</Link> section of this site.
          </p>
        </section>
      </div>
      </div>
    </div>
  );
}
