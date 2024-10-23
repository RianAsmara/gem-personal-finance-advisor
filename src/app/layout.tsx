import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI Powered Financial Advisor",
  description:
    "Personal Financial Advisor untuk memberikan saran dan solusi terbaik untuk masalah keuangan pengguna.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-grow">{children}</main>
            <footer className="bg-gray-100 dark:bg-gray-900 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Fin.ai</h3>
                    <p className="text-sm mb-4">
                      Your trusted financial advisor, providing AI-driven
                      insights for informed decision-making.
                    </p>
                    {/* <Button variant="outline" size="sm">About Us</Button> */}
                    <p className="text-sm mt-4">business@fin.ai</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Address</h4>
                    <p className="text-sm">
                      Perumahan Grand Muslim 2 Blok DE No 24
                    </p>
                    <p className="text-sm">
                      Kecamatan Labuapi, Kabupaten Lombok Barat, NTB
                    </p>
                    <p className="text-sm">business@fin.ai</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Navigation</h4>
                    <ul className="text-sm space-y-2">
                      <li>
                        <Link href="/" className="hover:underline">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" className="hover:underline">
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link href="/pricing" className="hover:underline">
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="hover:underline">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="hover:underline">
                          About
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Legal</h4>
                    <ul className="text-sm space-y-2">
                      <li>
                        <Link
                          href="/terms-of-service"
                          className="hover:underline"
                        >
                          Terms of Service
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacy-and-policy"
                          className="hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/pse-kominfo" className="hover:underline">
                          PSE Kominfo
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/company-registration"
                          className="hover:underline"
                        >
                          Company Registration Certificate
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-center">
                    &copy; {new Date().getFullYear()}
                    <Link
                      href="https://fin.ai"
                      className=" ml-1 hover:underline color-blue"
                    >
                      fin.ai
                    </Link>
                    . All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
