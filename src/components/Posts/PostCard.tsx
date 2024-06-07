"use client";
import { Post } from "#site/content";
import { formatDistance } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { siteConfig } from "../../../config/site";

function PostCard({ post }: { post: Post }) {
  const author = siteConfig.authors.find(author => author.name === post.author) ?? siteConfig.authors[0]
  return (
    <Link href={`/${post.slug}`} className="border pb-3 space-y-3 rounded-md">
      <div className="aspect-[16/9] w-full relative rounded-t-md">
        <Image
          src={`/blog/images/${post.slugAsParams}.png`}
          alt=""
          fill
          className="rounded-t-md object-cover"
        />
      </div>
      <div className="px-2">
        <div className="font-bold">{post.title}</div>
        <div className="line-clamp-3">{post.description}</div>

        <>
          <Avatar.Root className="flex items-center gap-4 mt-5">
            <Avatar.Image
              className="h-10 w-10 object-cover rounded-full border border-green-500 p-0.5"
              src={author?.image}
              alt={author?.name}
            />
            <Avatar.Fallback className="h-10 w-10 flex items-center justify-center bg-green-500 text-white rounded-full" delayMs={600}>
              <div>{author?.fallbackImageText}</div>
            </Avatar.Fallback>
            <div>
              <div className="text-sm font-bold">KodeZnippets</div>
              <div className="text-xs">{`${formatDistance(
                new Date(post.date),
                new Date()
              )} ago`}</div>
            </div>
          </Avatar.Root>
        </>
      </div>
    </Link>
  );
}

export default PostCard;
