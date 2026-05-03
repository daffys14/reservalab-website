import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "reservalab — Salon management built for iPhone",
    template: "%s | reservalab",
  },
  description:
    "Native iOS app for salon owners. Manage appointments, clients, and payments — no hardware needed. Built-in Stripe payments, real-time sync, multi-location support.",
  metadataBase: new URL("https://reservalab.com"),
  openGraph: {
    type: "website",
    siteName: "reservalab",
    title: "reservalab — Salon management built for iPhone",
    description:
      "Native iOS app for salon owners. Manage appointments, clients, and payments — no hardware needed.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "reservalab — Salon management built for iPhone",
    description:
      "Native iOS app for salon owners. Manage appointments, clients, and payments — no hardware needed.",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💈</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--ink)]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
