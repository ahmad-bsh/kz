import { posts } from "#site/content";
import { notFound } from "next/navigation";
import React from "react";
import "@/styles/mdx.css";
import MDXComponent from "@/components/MDXComponent";
import { Metadata } from "next";
import { siteConfig } from "../../../../config/site";
import Link from "next/link";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostFromParams({ params });

  if (!post) return {};

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: {
      name: siteConfig.author,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
    },
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
          <div className="flex space-x-2">
            {post.tags.map((tag) => (
              <Link className="p-1 text-green-500 no-underline hover:underline" href={`/tags/${tag}`}>#{tag}</Link>
            ))}
          </div>
          <MDXComponent code={post.body} />
        </article>
      </div>
    </div>
  );
}

export default BlogPost;
