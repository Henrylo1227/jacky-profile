import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Changa_One } from "next/font/google";
import { Provider } from "@components/ui/provider";
import { Box } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const changaOne = Changa_One({
  variable: "--font-changa-one",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Profolio - Tsz Yip Jacky LO",
  description: "Tsz Yip Jacky LO's profolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${changaOne.variable} antialiased`}
      >
        <Provider>
          <Navbar />
          <Box height="5vh" background="black" />
          {children}
          <Footer />{" "}
        </Provider>
      </body>
    </html>
  );
}
