import { posts } from "#site/content";
import KZ from "@/_icons/KZ";
import KodeZnippets from "@/_icons/KodeZnippets";
import PostsList from "@/components/Posts/PostsList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function Blog() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      <div className="h-52 w-full bg-green-50 mt-10 rounded border border-green-500 flex flex-col justify-center items-center">
        <div className="md:hidden">
          <KodeZnippets width={200} />
        </div>
        <div className="hidden md:block lg:hidden">
          <KodeZnippets width={300} />
        </div>

        <div className="hidden lg:block xl:hidden">
          <KodeZnippets width={400} />
        </div>

        <div className="hidden xl:block">
          <KodeZnippets width={500} />
        </div>
        <Breadcrumb className="mt-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <KZ width={48} />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>Blog</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {false ? (
        <div className="w-full bg-gray-50 mt-8 border flex flex-col items-center justify-center p-20">
          <div>No blogs yet!</div>
          <div className="text-xs">Stay tuned for dev content</div>
        </div>
      ) : (
        <PostsList posts={posts} />
      )}
    </div>
  );
}

export default Blog;
