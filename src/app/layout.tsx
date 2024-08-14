import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"], display: "swap" });

const MonaspaceKrypton = localFont({
  src: [
    {
      path: "../../public/fonts/MonaspaceKrypton-SemiBold.woff2",
      weight: "600",
    },
  ],
  display: "swap",
  variable: "--font-krypton",
  fallback:['system-ui', 'arial']
});

const MonaspaceNeon = localFont({
  src: [
    {
      path: "../../public/fonts/MonaspaceNeon-Regular.woff2",
      weight: "400",
    },
  ],
  display: "swap",
  variable: "--font-neon",
  fallback:['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: "mdkrul.dev",
  description: "Muh. Khaerul Personal Portofolio",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  keywords: [
    "mdkrul",
    "muh. khaerul",
    "indonesia backend",
    "full-stack",
    "full stack",
    "software engineer",
    "engineering",
  ],
  metadataBase: new URL("https://mdkrul.dev"),
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${MonaspaceKrypton.variable} ${MonaspaceNeon.variable}`}
      >
        <NavBar />
        <main className="container max-w-3xl m-auto px-4 py-4">{children}</main>
        <Footer />
      </body>
      <Analytics/>
    </html>
  );
}
