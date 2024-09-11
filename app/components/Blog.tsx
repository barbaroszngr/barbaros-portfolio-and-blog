import React from "react";
import Link from "next/link";
import { Eye } from "lucide-react";
import { Card } from "./card";
import { Blog } from "@/.contentlayer/generated";

interface BlogPost {
	slug: string;
	date: string;
	title: string;
	description: string;
  }
  
  interface BlogCardProps {
	post: Blog;
	views: number;
  }

export function BlogCard({ post, views }: BlogCardProps) {
  return (
    <Card>
      <Link href={`/blog/${post.slug}`}>
        <article className="relative w-full h-full p-4 md:p-8">
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs text-zinc-100">
              <time dateTime={new Date(post.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, {
                  dateStyle: "medium",
                }).format(new Date(post.date))}
              </time>
            </div>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Eye className="w-4 h-4" />{" "}
              {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white font-display">
            {post.title}
          </h2>
          <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
            {post.description}
          </p>
        </article>
      </Link>
    </Card>
  );
}