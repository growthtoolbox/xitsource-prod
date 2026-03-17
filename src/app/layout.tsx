import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "XitSource | National Business & Real Estate Acquisitions",
  description: "XitSource provides strategic partnerships for operations across the U.S., helping owners navigate business exits, optimize operations, and grow asset value through acquisitions.",
  keywords: ["National Business Strategy", "National Business Acquisitions", "Real Estate Transitions", "Confidential Exits", "Asset Acquisitions"],
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
                  "logo": "https://xitsource.com/logo.jpg",
                  "description": "National Real Estate and Business Acquisition Specialists.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "US"
                  },
                  "founder": [{"@type": "Person", "name": "John Poindexter"}],
                  "areaServed": ["United States"]
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white flex flex-col min-h-screen text-[#111827]`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
