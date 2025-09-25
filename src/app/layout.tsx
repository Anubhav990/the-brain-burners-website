import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
     {
      path: "./fonts/Satoshi-Medium.otf",  // <-- NEW
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",   // <-- ADD THIS
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "The Brain Burners",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-satoshi`}>
        {children}
      </body>
    </html>
  );
}