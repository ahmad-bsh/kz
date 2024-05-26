import UnderConstruction from "@/_lotties/animations/UnderConstruction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { twMerge } from "tailwind-merge";
import "./globals.css";
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
    <html lang="en" className="scroll-pt-28">
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
            <main className="flex flex-col flex-1">{children}</main>
            <Footer />
          </React.Fragment>
        )}
      </body>
    </html>
  );
}
