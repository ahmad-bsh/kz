"use client";

import KodeZnippets from "@/_icons/KodeZnippets";

function Header() {
  return (
    <div className="flex py-5 justify-between sticky w-full top-0 left-0 right-0 backdrop-blur-3xl bg-white/90">
      <KodeZnippets width={300} />
      <div className="md:hidden"></div>
    </div>
  );
}

export default Header;
