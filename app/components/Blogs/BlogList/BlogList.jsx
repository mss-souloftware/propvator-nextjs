import React from "react";
import BlogCard from "../BlogCard/BlogCard";

export default function BlogList() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <BlogCard />
        </div>
      </div>
    </section>
  );
}
