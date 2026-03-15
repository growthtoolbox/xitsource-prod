import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XitSource | NorCal Business & Real Estate Acquisitions",
  description: "XitSource provides strategic partnerships for Northern California owners navigating business exits, optimizing operations, and growing asset value through acquisitions and digital marketing.",
  keywords: ["Roseville Web Design", "Roseville Business Strategy", "Northern California Business Acquisitions", "Real Estate Transitions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://xitsource.com/#service",
                  "name": "XitSource Acquisitions",
                  "url": "https://xitsource.com",
                  "logo": "https://xitsource.com/logo.png",
                  "description": "Northern California Real Estate and Business Acquisition Specialists.",
                  "founder": [{"@type": "Person", "name": "John Poindexter"}, {"@type": "Person", "name": "Ryan Peterson"}],
                  "areaServed": "Northern California"
                },
                {
                   "@type": "InvestmentEntity",
                   "@id": "https://xitsource.com/#investment",
                   "name": "XitSource",
                   "description": "Private acquisitions and strategic business transitions without broker fees.",
                   "investmentType": ["Commercial Real Estate", "Residential Portfolios", "Owner-Operated Businesses"]
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] flex flex-col min-h-screen text-gray-200`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
