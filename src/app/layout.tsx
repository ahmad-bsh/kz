import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import { twMerge } from "tailwind-merge";
import UnderConstruction from "@/_lotties/animations/UnderConstruction";
import PrelineScript from "@/components/PrelineScript";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kode Znippets",
  description: "Documenting the Koding Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "min-h-dvh flex flex-col backdrop-blur-sm relative"
        )}
      >
        {process.env.NEXT_PUBLIC_CONSTRUCTION_STATUS === "IN_PROGRESS" ? (
          <div className="flex-1 flex flex-col h-full w-full items-center justify-center text-2xl text-yellow-400">
            <div className="max-w-xl">
              <UnderConstruction />
            </div>
          </div>
        ) : (
          <React.Fragment>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </React.Fragment>
        )}
      </body>
    </html>
  );
}
