import "./globals.css";
import {Poppins} from "next/font/google"
import Head from 'next/head';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FloatingChat from "@/components/FloatingChat/FloatingChat";
import TopBar from "@/components/TopBar/TopBar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Best Mobile Application Development Company in USA & India",
  description: "A Dropservicing website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <TopBar />
        <Navbar />
        {children}
        <FloatingChat />
        <Footer />        
      </body>
    </html>
  );
}
