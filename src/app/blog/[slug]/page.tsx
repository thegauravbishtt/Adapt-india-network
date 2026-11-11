import React from "react";
import { getBlogs, type BlogPost } from "@/lib/db";
import { seedArticles } from "@/data/articles";
import BlogDetailClient from "./BlogDetailClient";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema, seoTitle } from "@/lib/seo";

/** Shorter search titles for articles whose headline is too long for Google. */
const SHORT_TITLES: Record<string, string> = {
  "why-dedicated-internet-leased-lines-matter": "Leased Line (ILL) vs Business Broadband: Which to Choose",
  "high-density-wifi-6-enterprise-office-deployment": "Office Wi-Fi 6 Design for Busy Workplaces",
  "sd-wan-vs-traditional-mpls-enterprise-guide": "SD-WAN vs MPLS: How Indian Businesses Should Choose",
  "pan-india-carrier-redundancy-dual-homed-failover": "Dual-Carrier Internet Failover for Indian Businesses",
};
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
    title: seoTitle(post.metaTitle ?? SHORT_TITLES[slug] ?? post.title),
    description: post.metaDescription ?? post.excerpt,
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
            description: post.metaDescription ?? post.excerpt,
            path,
            image: post.image,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            author: post.author,
            keywords: post.focusKeyword,
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
