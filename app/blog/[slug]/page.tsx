import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allBlogs.map((p) => ({
    slug: p.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
    const slug = params?.slug;
    const post = allBlogs.find((post) => post.slug === slug);
  
    if (!post) {
      notFound();
    }
  
    const views =
      (await redis.get<number>(["pageviews", "blog", slug].join(":"))) ?? 0;
  
      return (
        <div className="bg-gradient-to-tl from-zinc-900 via-zinc-900/90 to-zinc-900 min-h-screen flex flex-col">
          <div className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
           
            <Header post={post} views={views} />
            <ReportView slug={post.slug} />
            <article className="mt-8 prose prose-invert prose-quoteless overflow-hidden">
              <Mdx code={post.body.code} />
            </article>
            <div className="mt-8">
              <Link href="/blog" className="text-zinc-400 hover:text-zinc-100 transition duration-200">
                ← Back to blog
              </Link>
            </div>
          </div>
        </div>
      );
  }