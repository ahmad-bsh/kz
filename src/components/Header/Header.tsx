"use client";

import KodeZnippets from "@/_icons/KodeZnippets";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@/app/hooks/use-media-query";

export function SheetSide() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(max-width:768px)");
  return isDesktop ? (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="px-4">
          <div className="cursor-pointer">
            <Menu />
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-full">
        <div className="sticky top-10 max-h-screen">
          <div className="absolute -top-10 left-0 right-0 flex justify-end">
            <SheetPrimitive.Close className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-green-600 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </SheetPrimitive.Close>
          </div>
          <SheetHeader className="mt-16">
            <SheetTitle className="flex justify-center sm:justify-start">
              <Link href={"/"} onClick={() => setOpen(false)}>
                <KodeZnippets width={200} />
              </Link>
            </SheetTitle>
            <SheetDescription className="!mt-8">
              <Link href="/blog" onClick={() => setOpen(false)}>
                <div className="hover:bg-green-50 p-2 rounded-sm">Blog</div>
              </Link>
            </SheetDescription>
          </SheetHeader>
        </div>
      </SheetContent>
    </Sheet>
  ) : null;
}

function Header() {
  return (
    <div className="py-5 sticky w-full top-0 left-0 right-0 backdrop-blur-3xl bg-white/90">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="md:hidden px-4">
          <Link href={"/"}>
            <KodeZnippets width={200} />
          </Link>
          <span className="text-xs italic">
            <span className="text-gray-500">{"{/* "}</span>
            <span className="text-green-600">
              {`Dokumenting Koding Journey `}
            </span>
            <span className="text-gray-500">{"*/}"}</span>
          </span>
        </div>
        <div className="hidden md:block px-4">
          <Link href={"/"}>
            <KodeZnippets width={300} />
          </Link>
          <span className="text-sm italic">
            <span className="text-gray-500">{"{/* "}</span>
            <span className="text-green-600">
              {`Dokumenting Koding Journey `}
            </span>
            <span className="text-gray-500">{"*/}"}</span>
          </span>
        </div>
        <div className="md:hidden">
          <SheetSide />
        </div>
        <div className="hidden md:flex px-4 gap-4">
          <Link href={"/blog"} className="hover:text-green-600 hover:underline">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
