import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-5 px-4">
      <div className="space-y-3">
        <div className="font-bold text-3xl">404: Page Not Found</div>
        <p>Uh-oh! Looks like you&apos;ve taken a wrong turn.</p>
        <p>
          The page you&apos;re looking for might have been moved, deleted, or maybe
          it never existed. But don&apos;t worry, there&apos;s still plenty to explore!
        </p>
        <div className="text-xl font-bold">
          Here are a few things you can do:
        </div>

        <div>
          <span className="font-bold">
            {" "}
            -{" "}
            <Link
              href={"/"}
              className="text-green-500 font-bold hover:underline"
            >
              Return Home:
            </Link>
          </span>{" "}
          Head back to the and start fresh.
        </div>
        <div>
          <span className="font-bold">
            {" "}
            -{" "}
            <Link
              href={"/blog"}
              className="text-green-500 font-bold hover:underline"
            >
              Explore the Blog:
            </Link>
          </span>{" "}
          Check out the latest posts and discover insights on front-end
          development with React and Next.js.
        </div>
      </div>
    </div>
  );
}

export default NotFound;
