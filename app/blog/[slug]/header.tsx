"use client";
import { Eye } from "lucide-react";
import Link from "next/link";
import { Blog } from "contentlayer/generated";
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";

type Props = {
  post: Blog;
  views: number;
};

export const Header: React.FC<Props> = ({ post, views }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-white/10  border-zinc-200 lg:border-transparent"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <span
              title="View counter for this page"
              className={`duration-200 hover:font-medium flex items-center gap-1 ${
                isIntersecting
                  ? " text-zinc-400 hover:text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-900"
              } `}
            >
              <Eye className="w-5 h-5" />{" "}
              {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
            </span>
          </div>

          <Link
            href="/blog"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? " text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            } `}
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
      <div className="pt-24">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center text-zinc-400 text-sm">
          <time dateTime={post.date} className="mr-4">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <p className="mt-6 text-base leading-7 text-zinc-300">
          {post.description}
        </p>
      </div>
    </header>
  );
};