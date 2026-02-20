import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew Amin Azmy | Senior Automation Test Engineer",
  description: "QA Engineer specializing in test automation, security (OWASP ZAP), and performance (JMeter). Selenium, Cypress, Appium, API testing. Riyadh.",
  openGraph: {
    title: "Andrew Amin Azmy | Senior Automation Test Engineer",
    description: "QA Engineer · Automation · Security · Performance Testing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[#3b82f6] focus:px-3 focus:py-2 focus:text-white focus:outline-none">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
