import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Princeton Connective | Reliable Voice, Data &amp; Connectivity Solutions for all Business",
  description: "Empowering businesses with cost-effective voice, data, and connectivity solutions. Backed by global partnerships and local support for seamless IT performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
