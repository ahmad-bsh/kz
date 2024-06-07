import React from "react";
import PostCard from "./PostCard";

function PostsList({ posts }: { posts: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-10">
      {posts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </div>
  );
}

export default PostsList;