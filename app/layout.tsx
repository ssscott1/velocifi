import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} — financial ventures that run themselves`,
  description:
    "Velocity Works is a founder owned financial services production house. We build ventures that run on software, not headcount. Build once. Launch many.",
  metadataBase: new URL("https://velocityworks.com.au"),
  openGraph: {
    title: `${site.name} — financial ventures that run themselves`,
    description:
      "A founder owned production house taking each venture from thesis to product to capital.",
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
