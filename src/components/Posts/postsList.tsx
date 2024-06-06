import React from "react";
import Post from "./post";

function PostsList({ posts }: { posts: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 gap-5">
      {posts.map((post) => (
        <Post post={post} key={post.slug} />
      ))}
    </div>
  );
}

export default PostsList;
