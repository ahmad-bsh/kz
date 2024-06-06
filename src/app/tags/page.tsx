"use client";
import { posts } from "#site/content";
import React, { useMemo, useState } from "react";

import * as Tabs from "@radix-ui/react-tabs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Post from "@/components/Posts";
import PostsList from "@/components/Posts/postsList";

function Tags() {
  const allTags = ["all"].concat(posts.map((post) => post.tags).flat());
  const searchParams = useSearchParams();
  const urlSearchParams = useMemo(() => {
    return new URLSearchParams(searchParams.toString());
  }, [searchParams]);

  const parseTag = (tag: string) => tag.replaceAll(" ", "-");
  const currentTag = urlSearchParams.get("tag") || "all";
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col flex-1">
      <Tabs.Root className="flex flex-col flex-1" defaultValue={currentTag}>
        <Tabs.List className="h-full">
          <div className="space-x-5">
            {allTags.map((tag) => (
              <Link href={`/tags?tag=${parseTag(tag)}`}>
                <Tabs.Trigger
                  value={parseTag(tag)}
                  className={`${
                    parseTag(tag) == currentTag
                      ? "bg-green-500 text-white font-bold"
                      : "text-green-500 bg-white hover:underline"
                  } rounded-full px-2.5 py-1`}
                >
                  #{tag}
                </Tabs.Trigger>
              </Link>
            ))}
          </div>
        </Tabs.List>
        {allTags.map((tag) => (
          <Tabs.Content value={parseTag(tag)}>
            <PostsList
              posts={posts.filter(
                (post) => post.tags.includes(tag) || tag === "all"
              )}
            />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}

export default Tags;
