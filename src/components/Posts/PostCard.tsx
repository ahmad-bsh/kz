import { Post } from "#site/content";
import { formatDistance } from "date-fns";
import Link from "next/link";
import React from "react";

function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/${post.slug}`} className="border px-2 py-3 space-y-3 rounded-md">
      <div className="font-bold">{post.title}</div>
      <div className="line-clamp-2">{post.description}</div>
      <small>{`${formatDistance(new Date(post.date), new Date())} ago`}</small>
    </Link>
  );
}

export default PostCard;
