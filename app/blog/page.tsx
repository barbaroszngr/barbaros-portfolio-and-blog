import React from "react";
import { allBlogs, Blog } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { BlogCard } from "../components/Blog";
import { Card } from "../components/card";
import { BlogArticle } from "./article";
import { Redis } from "@upstash/redis";
import Link from "next/link";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;

export default async function BlogPage() {
  const keys = allBlogs.map((p) => ["pageviews", "blog", p.slug].join(":"));
  const views = keys.length > 0 ? await redis.mget<number[]>(...keys) : [];

  const viewsObject = allBlogs.reduce((acc, blog, index) => {
    acc[blog.slug] = views[index] ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const sortedBlogs = allBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sortedBlogs[0];
  const otherBlogs = sortedBlogs.slice(1);

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-4 text-zinc-400">
            Thoughts, ideas, and experiences shared through writing.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 xl:grid-cols-3">
          {sortedBlogs.map((blog) => (
            <Card key={blog.slug}>
              <BlogArticle post={blog} views={viewsObject[blog.slug]} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
