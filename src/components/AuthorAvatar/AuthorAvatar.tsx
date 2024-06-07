"use client"
import * as Avatar from "@radix-ui/react-avatar";

import React from "react";
import { SiteConfig } from "../../../config/site";
import { formatDistance } from "date-fns";

function AuthorAvatar({
  author,
  date,
}: {
  author: SiteConfig["authors"][0];
  date: string;
}) {
  return (
    <Avatar.Root className="flex items-center gap-4 mt-5">
      <Avatar.Image
        className="h-10 w-10 object-cover rounded-full border border-green-500 p-0.5"
        src={author?.image}
        alt={author?.name}
      />
      <Avatar.Fallback
        className="h-10 w-10 flex items-center justify-center bg-green-500 text-white rounded-full"
        delayMs={600}
      >
        <div>{author?.fallbackImageText}</div>
      </Avatar.Fallback>
      <div>
        <div className="text-sm font-bold">KodeZnippets</div>
        <div className="text-xs">{`${formatDistance(
          new Date(date),
          new Date()
        )} ago`}</div>
      </div>
    </Avatar.Root>
  );
}

export default AuthorAvatar;
