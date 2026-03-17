import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | XitSource',
  description: 'Terms of Service agreement for XitSource.',
};

export default function TermsPage() {
  return (
    <div className="w-full bg-white min-h-screen text-[#111827]">
      <div className="max-w-4xl mx-auto px-6 py-20 pb-32 space-y-12">
        <header className="space-y-4 border-b border-gray-200 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">Terms of Service</h1>
        <p className="text-[#111827] text-lg">Last Updated: March 17, 2026</p>
      </header>

      <div className="space-y-8 text-lg leading-relaxed">
        <p>
          Welcome to XitSource. By accessing our website and utilizing our resources, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#111827]">1. Acceptance of Agreement</h2>
          <p>
            By using this site, you agree to the terms and conditions outlined in this Terms of Service Agreement. This Agreement constitutes the entire and only agreement between us and you, and supersedes all prior agreements or understandings with respect to the site and the subject matter herein.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#111827]">2. Nature of Services</h2>
          <p>
            XitSource is a private acquisition partnership. The information provided on this website—including the Seller Scorecard, Transition Guides, and Owner Resources—is for informational purposes only and does not constitute financial, legal, or real estate brokerage advice. We are principals seeking to acquire assets, not brokers representing third parties.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#111827]">3. Confidentiality &amp; Privacy</h2>
          <p>
            We value your privacy as much as our own. Any information submitted through our &quot;Request a Confidential Conversation&quot; form or the &quot;Seller Scorecard&quot; is treated with the highest level of discretion. Please refer to our <Link href="/privacy" className="text-[#52D017] hover:underline">Privacy Policy</Link> for detailed information on how we handle your data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#111827]">4. Intellectual Property</h2>
          <p>
            The content, organization, graphics, design, and other matters related to the site are protected under applicable copyrights and trademarks. The copying, redistribution, or publication of any such matters or any part of the site is strictly prohibited without our express written permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#111827]">5. User Conduct</h2>
          <p>
            Users agree not to use the site for any unlawful purpose. Any attempt to disrupt the server, scrape data, or interfere with the site’s functionality is a violation of these terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#111827]">6. Limitation of Liability</h2>
          <p>
            XitSource shall not be liable for any damages resulting from the use or inability to use the materials on this site. While we strive for 100% accuracy, we do not warrant that the materials on this website are accurate, complete, or current.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#111827]">7. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#111827]">8. Contact Information</h2>
          <p>
            If you have any questions regarding these terms, please contact us directly via the <Link href="/partnership" className="text-[#52D017] hover:underline">The Partnership</Link> section of this website.
          </p>
        </section>
      </div>
      </div>
    </div>
  );
}
