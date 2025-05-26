import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/style/style.css";
import "../assets/style/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../common/Header";
import Footer from "../common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elogictech Edge",
  description: "Embedded Product Engineering and turnkey Internet-of-Things solutions partner",
  keywords: ['ElogicTechEdge', 'IIoT', 'Industrial IoT', "IoT"],
  openGraph: {
    title: 'Elogictech Edge',
    description: 'Embedded Product Engineering and turnkey Internet-of-Things solutions partner',
    url: 'https://eltedge.io',
    siteName: 'Elogictech Edge',
    images: [
      {
        url: 'https://eltedge.io/edgelogo.jpg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
