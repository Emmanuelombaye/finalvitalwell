import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Providers } from "@/components/Providers";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400", "600", "700", "800"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "VitalWellRx | Medical Weight Loss Telehealth",
    template: "%s | VitalWellRx",
  },
  description:
    "Personalized Tirzepatide and Semaglutide weight-loss treatments with licensed U.S. providers, pharmacy fulfillment, and discreet delivery.",
  icons: {
    icon: [{ url: "/brand/icon.svg", type: "image/svg+xml" }],
    shortcut: "/brand/icon.svg",
    apple: "/brand/logo.webp",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <aside aria-label="Site notice" className="bg-navy text-navy-foreground">
            <div className="container-page flex flex-col items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-xs sm:flex-row">
              <p className="font-medium">Charged only if prescribed. Licensed U.S. provider review.</p>
              <span aria-hidden className="hidden opacity-40 sm:inline">
                |
              </span>
              <p className="opacity-80">{site.dba} is not a pharmacy and does not itself practice medicine.</p>
            </div>
          </aside>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
