import React from "react";
import { notFound } from "next/navigation";
import { getBlogs } from "@/lib/db";
import BlogDetailClient from "./BlogDetailClient";
import type { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug || blog.id,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.slug === slug || b.id === slug);

  if (!blog) {
    return {
      title: "Article Not Found | Owlio Works",
    };
  }

  return {
    title: `${blog.title} | Owlio Works`,
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
  const blog = blogs.find((b) => b.slug === slug || b.id === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return <BlogDetailClient blog={blog} relatedBlogs={relatedBlogs} />;
}
