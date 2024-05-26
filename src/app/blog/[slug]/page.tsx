import { posts } from "#site/content";
import { notFound } from "next/navigation";
import React from "react";
import "@/styles/mdx.css";
import MDXComponent from "@/components/MDXComponent";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams({ params }: BlogPostPageProps) {
  const slug = params.slug;
  const post = posts.find((post) => post.slugAsParams === slug);
  if (!post) {
    return null;
  }
  return post;
}

export async function generateStaticParams(): Promise<
  BlogPostPageProps["params"][]
> {
  return posts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

async function BlogPost({ params }: BlogPostPageProps) {
  const post = await getPostFromParams({ params });
  if (!post) {
    notFound();
  }
  return (
    <div className="space-y-5 max-w-7xl mx-auto w-full mb-10">
      <div className="w-full px-4">
        <article className="prose max-w-none w-full min-w-7xl pt-5 col-span-3">
          <h1>{post.title}</h1>
          <p>{post.description}</p>

          <MDXComponent code={post.body} />
        </article>
      </div>
    </div>
  );
}

export default BlogPost;

