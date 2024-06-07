"use client";
import { Post } from "#site/content";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { siteConfig } from "../../../config/site";
import AuthorAvatar from "../AuthorAvatar/AuthorAvatar";

function PostCard({ post }: { post: Post }) {
  const author =
    siteConfig.authors.find((author) => author.name === post.author) ??
    siteConfig.authors[0];

  return (
    <Link
      href={`/${post.slug}`}
      className="border pb-3 space-y-3 rounded-md flex flex-col"
    >
      <div className="aspect-[16/9] w-full relative rounded-t-md">
        <Image
          src={`/blog/images/${post.slugAsParams}.png`}
          alt=""
          fill
          className="rounded-t-md object-cover object-top"
        />
      </div>
      <div className="px-2 flex flex-col flex-1 gap-2">
        <div className="font-bold">{post.title}</div>
        <div className="line-clamp-3 flex-1 ">{post.description}</div>

        <AuthorAvatar author={author} date={post.date} />
      </div>
    </Link>
  );
}

export default PostCard;
