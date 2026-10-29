import React from "react";
import { getBlogs } from "@/lib/db";
import BlogDetailClient from "./BlogDetailClient";
import type { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const fallbackBlog = {
  id: "network-architecture",
  slug: "network-architecture",
  title: "Next-Gen Enterprise Networking Architecture",
  excerpt: "Insights into high-speed SD-WAN and MPLS network infrastructures.",
  content: "Content coming soon.",
  category: "Networking",
  date: "2026-10-29",
  readTime: "5 min read",
  author: "Adapt Network Team",
  image: "/fabric-intelligence.jpg",
  tags: ["SD-WAN", "Networking"],
};

export async function generateStaticParams() {
  const blogs = await getBlogs();
  if (!blogs || blogs.length === 0) {
    return [{ slug: "network-architecture" }];
  }
  return blogs.map((blog) => ({
    slug: blog.slug || blog.id,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.slug === slug || b.id === slug) || fallbackBlog;

  return {
    title: `${blog.title} | Adapt India Network`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: blog.image ? [blog.image] : [],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.slug === slug || b.id === slug) || fallbackBlog;

  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return <BlogDetailClient blog={blog as any} relatedBlogs={relatedBlogs as any} />;
}
