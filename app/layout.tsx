import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} — AI-native financial ventures`,
  description:
    "Velocifi is a founder-owned, AI-native financial-services production house. Build once. Launch many.",
  metadataBase: new URL("https://velocifi.com.au"),
  openGraph: {
    title: `${site.name} — AI-native financial ventures`,
    description:
      "A founder-owned production house — from thesis to product to capital.",
    siteName: site.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#11141A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
