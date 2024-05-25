import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <div className="flex flex-col md:items-center">
        <div className="text-2xl md:text-4xl">
          {"Welcome to "}
          <span className="font-bold text-green-500">KodeZnippets</span>!
        </div>
        <div className="text-sm md:text-base">
          Join the journey towards software development mastery.
        </div>
        <Link href="/blog">
          <Button className="mt-10 bg-green-500 hover:bg-green-600 hover:font-bold">
            Explore my blog
          </Button>
        </Link>
      </div>
    </main>
  );
}
