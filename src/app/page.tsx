import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "../../config/site";

export default function Home() {
  const author = siteConfig.authors.find(
    (author) => author.name === "AhmadBShaik"
  );
  return (
    <main className="flex flex-col flex-1 justify-center px-4 max-w-7xl mx-auto w-full">
      <div className="flex flex-col">
        <div className="text-sm md:text-base space-y-2.5">
          <div className="text-2xl md:text-4xl">
            {"Welcome to "}
            <span className="font-bold text-green-500">KodeZnippets</span>!
          </div>
          <p>
            Hi! I&apos;m{" "}
            <Link href={author?.links?.personalSite!}>
              <span className="text-green-500 font-bold">Ahmad</span>
            </Link>
            , a front-end developer specializing in React and Next.js.
          </p>
          <p>
            Welcome to KodeZnippets, where I share my learnings and insights on
            front-end development.
          </p>
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
