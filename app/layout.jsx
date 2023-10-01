import "./globals.css";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OffShop | Grab your Deal",
  description: "Search for products to get discount information and sale price information from popular websites like flipkart, amazon, myntra, ajio etc.",
  other: {
    'theme-color': '#321a56',
    "color-scheme": "dark only",
    "twitter:image": 'https://drive.google.com/file/d/1R0iXWq1h21tzdP3rCq1x3a4a4Y79GZWE/view?usp=sharing',
    "twitter:card": "summary_large_image",
    "og:url": "offshop.vercel.app",
    "og:image": 'https://drive.google.com/file/d/1R0iXWq1h21tzdP3rCq1x3a4a4Y79GZWE/view?usp=sharing',
    "og:type": "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen background-gradient no-scrollbar ${inter.className}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
