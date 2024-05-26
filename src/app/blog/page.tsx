import KZ from "@/_icons/KZ";
import KodeZnippets from "@/_icons/KodeZnippets";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8">
          {/*  */}
          <Link href={"/blog/productive-folder-structure"} className="border px-2 py-3 space-y-3">
            <div className="font-bold">Clean & Productive Folder Structure</div>
            <div className="line-clamp-2">
              Organise your project structure to keep your code clean in import
              statements and enable accessibility while searching files in Text
              Editor.
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Blog;
