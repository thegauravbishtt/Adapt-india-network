import React from "react";
import { getBlogs, type BlogPost } from "@/lib/db";
import { seedArticles } from "@/data/articles";
import BlogDetailClient from "./BlogDetailClient";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/** Posts from the admin blog store plus the built-in articles (admin posts win on clashes). */
async function getAllPosts(): Promise<BlogPost[]> {
  const stored = (await getBlogs()).filter((b) => b.status !== "draft");
  const storedSlugs = new Set(stored.map((b) => b.slug || b.id));
  return [...stored, ...seedArticles.filter((a) => !storedSlugs.has(a.slug))];
}

async function findPost(slug: string) {
  const posts = await getAllPosts();
  return { posts, post: posts.find((b) => b.slug === slug || b.id === slug) };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((blog) => ({ slug: blog.slug || blog.id }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { post } = await findPost(slug);
  if (!post) return { title: "Article Not Found", robots: { index: false, follow: true } };

  return pageMetadata({
    // Long article titles are used as-is so Google does not cut them off mid-word
    title: post.title.length > 52 ? post.title : `${post.title} | Adapt India Network`,
    description: post.excerpt,
    path: `/blog/${post.slug || post.id}/`,
    image: post.image,
    type: "article",
  });
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const { posts, post } = await findPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug || post.id}/`;
  const relatedBlogs = posts.filter((b) => b.id !== post.id).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.excerpt,
            path,
            image: post.image,
            datePublished: post.publishedAt,
            author: post.author,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog/" },
            { name: post.title, path },
          ]),
          ...(post.faqs?.length ? [faqSchema(post.faqs)] : []),
        ]}
      />
      <BlogDetailClient blog={post} relatedBlogs={relatedBlogs} />
    </>
  );
}
