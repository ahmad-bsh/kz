import { Post, posts } from "#site/content";
import MDXComponent from "@/components/MDXComponent";
import PostsList from "@/components/Posts/PostsList";
import "@/styles/mdx.css";
import { compareDesc, parseISO } from "date-fns";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "../../../../config/site";
import Image from "next/image";
import AuthorAvatar from "@/components/AuthorAvatar/AuthorAvatar";

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
  const author =
    siteConfig.authors.find((author) => author.name === post.author) ??
    siteConfig.authors[0];

  return {
    title: post.title,
    description: post.description,
    authors: {
      name: author.name,
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

function getRelatedPosts(currentPost: Post) {
  // Extract tags from current post
  const currentTags = new Set(currentPost.tags);

  // Filter posts that share at least one tag with the current post
  const relatedPosts = posts.filter(
    (post) =>
      post.title !== currentPost.title &&
      post.tags.some((tag) => currentTags.has(tag))
  );

  // Sort related posts by date in descending order (latest first)
  relatedPosts.sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)));

  // Return the top 6 latest posts
  return relatedPosts.slice(0, 6);
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
  const author =
    siteConfig.authors.find((author) => author.name === post.author) ??
    siteConfig.authors[0];

  return (
    <div className="space-y-20 max-w-7xl mx-auto w-full mb-10 px-4">
      <div className="w-full">
        <div className="aspect-[4/1] w-full bg-green-50 relative">
          <Image
            src={`/blog/images/${post.slugAsParams}.png`}
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>
        <article className="prose max-w-none w-full min-w-7xl pt-5 col-span-3">
          <AuthorAvatar author={author} date={post.date} />
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div className="flex space-x-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                className="p-1 text-green-500 no-underline hover:underline"
                href={`/tags?tag=${tag.replaceAll(" ", "-")}`}
              >
                #{tag}
              </Link>
            ))}
          </div>
          <MDXComponent code={post.body} />
        </article>
      </div>
      {getRelatedPosts(post).length ? (
        <div className="px-4">
          <div className="text-center text-2xl font-medium ">Related posts</div>
          <div>
            <PostsList posts={getRelatedPosts(post)} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default BlogPost;
