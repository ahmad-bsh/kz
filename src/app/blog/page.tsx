import KZ from "@/_icons/KZ";
import React from "react";
import { ChevronRight, Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import KodeZnippets from "@/_icons/KodeZnippets";

function Blog() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      <div className="h-52 w-full bg-green-50 mt-10 rounded border border-green-500 flex flex-col justify-center items-center">
        <KodeZnippets width={400} />
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

      <div className="w-full bg-gray-50 mt-8 border flex flex-col items-center justify-center p-20">
        <div>No blogs yet!</div>
        <div className="text-xs">Stay tuned for dev content</div>
      </div>
    </div>
  );
}

export default Blog;
