"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  Search,
  Plus,
  Trash2,
  Edit,
  Calendar,
  RefreshCw,
} from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminModal from "@/components/admin/AdminModal";
import { useToast } from "@/components/admin/ToastNotification";
import type { BlogPost } from "@/lib/db";
import { BLOG_CATEGORIES } from "@/data/categories";

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export default function AdminBlogsPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "SEO",
    readTime: "4 min read",
    image: "/image1.png",
    excerpt: "",
    content: "",
    tagsInput: "STRATEGY, GROWTH",
    status: "published" as "published" | "draft",
    author: "Owlio Growth Labs",
  });

  const fetchBlogs = async () => {
    try {
      const authRes = await fetch("/api/admin/auth/me");
      if (!authRes.ok) {
        router.push("/admin/login");
        return;
      }

      const res = await fetch("/api/admin/blogs");
      const data = await res.json();
      setBlogs(data.blogs || []);
      setLoading(false);
    } catch {
      router.push("/admin/login");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const openCreateModal = () => {
    setEditingBlog(null);
    setIsSlugManuallyEdited(false);
    setFormData({
      title: "",
      slug: "",
      category: "Performance & Advertising",
      readTime: "4 min read",
      image: "/image1.png",
      excerpt: "",
      content: "",
      tagsInput: "STRATEGY, GROWTH",
      status: "published",
      author: "Owlio Growth Labs",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (blog: BlogPost) => {
    setEditingBlog(blog);
    setIsSlugManuallyEdited(true);

    setFormData({
      title: blog.title,
      slug: blog.slug || slugify(blog.title),
      category: blog.category,
      readTime: blog.readTime,
      image: blog.image,
      excerpt: blog.excerpt,
      content: blog.content || "",
      tagsInput: blog.tags.map((t) => t.text).join(", "),
      status: blog.status,
      author: blog.author,
    });
    setIsModalOpen(true);
  };

  const handleTitleChange = (val: string) => {
    const updated: any = { title: val };
    if (!isSlugManuallyEdited || !formData.slug) {
      updated.slug = slugify(val);
    }
    setFormData((prev) => ({ ...prev, ...updated }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formattedTags = formData.tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .map((text) => ({
        text: text.toUpperCase(),
        variant: "dark" as const,
      }));

    const finalSlug = formData.slug.trim() || slugify(formData.title);

    const payload = {
      ...(editingBlog ? { id: editingBlog.id } : {}),
      title: formData.title,
      slug: finalSlug,
      category: formData.category || "SEO",
      readTime: formData.readTime,
      image: formData.image,
      excerpt: formData.excerpt,
      content: formData.content,
      tags: formattedTags.length > 0 ? formattedTags : [{ text: "GROWTH", variant: "dark" as const }],
      status: formData.status,
      author: formData.author,
      publishedAt: editingBlog ? editingBlog.publishedAt : new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast(editingBlog ? "Article updated successfully!" : "New article published!", "success");
        setIsModalOpen(false);
        fetchBlogs();
      } else {
        toast("Failed to save article", "error");
      }
    } catch {
      toast("Error saving article", "error");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;

    try {
      const res = await fetch(`/api/admin/blogs?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        toast("Article deleted", "info");
        setBlogs((prev) => prev.filter((b) => b.id !== id));
      } else {
        toast("Failed to delete article", "error");
      }
    } catch {
      toast("Error deleting article", "error");
    }
  };

  // Filtered blogs
  const filteredBlogs = blogs.filter((blog) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      blog.title.toLowerCase().includes(q) ||
      blog.category.toLowerCase().includes(q) ||
      blog.excerpt.toLowerCase().includes(q);

    const matchesCategory =
      categoryFilter === "all" ||
      blog.category.toLowerCase() === categoryFilter.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-zinc-300 border-t-zinc-900 rounded-full animate-spin" />
          <span className="text-xs text-zinc-500 font-medium">Loading Articles...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex">
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 lg:pl-60 flex flex-col min-w-0">
        <AdminHeader
          title="Blog Articles CMS"
          subtitle="Manage insights and articles published on the website"
          onOpenSidebar={() => setSidebarOpen(true)}
          actionButton={{
            label: "Create Article",
            onClick: openCreateModal,
          }}
        />

        <main className="p-4 sm:p-6 lg:p-8 flex flex-col gap-5 max-w-6xl mx-auto w-full">
          {/* Controls Bar: Simple Search + Only Exact 8 Categories Dropdown */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 max-w-md">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by title..."
                  className="w-full bg-white border border-zinc-200 rounded-lg pl-9 pr-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-900 shadow-2xs"
                />
              </div>

              {/* Simple filter dropdown with only the 8 categories */}
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-800 focus:outline-hidden focus:border-zinc-900 shadow-2xs cursor-pointer"
              >
                <option value="all">All Categories ({blogs.length})</option>
                {BLOG_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-xs text-zinc-500 font-medium">
              Showing {filteredBlogs.length} of {blogs.length} articles
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredBlogs.length === 0 ? (
              <div className="col-span-full py-16 text-center bg-white border border-zinc-200 rounded-xl p-8 shadow-2xs">
                <FileText className="w-8 h-8 text-zinc-300 mx-auto mb-2" />
                <h3 className="text-sm font-bold text-zinc-900">No articles found</h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Try adjusting your search query or creating a new article.
                </p>
              </div>
            ) : (
              filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white border border-zinc-200 hover:border-zinc-300 rounded-xl overflow-hidden shadow-2xs transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] w-full bg-zinc-100 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-white/95 text-zinc-900 border border-zinc-200 backdrop-blur-xs shadow-2xs">
                          {blog.category}
                        </span>
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-zinc-700 text-[10px] font-medium px-2 py-0.5 rounded border border-zinc-200">
                        {blog.readTime}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-4 flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
                        <span>/blog/{blog.slug || blog.id}</span>
                      </div>
                      <h3 className="text-sm font-bold text-zinc-900 leading-snug line-clamp-2 group-hover:text-zinc-600 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed mt-0.5">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer Controls */}
                  <div className="p-3 sm:px-4 border-t border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                    <div className="flex items-center gap-1 text-[11px] text-zinc-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => openEditModal(blog)}
                        className="p-1.5 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 transition-colors cursor-pointer"
                        title="Edit Article"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="p-1.5 rounded-md text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                        title="Delete Article"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>

      {/* Create / Edit Article Modal with Title, Slug, and ONLY the 8 exact categories in Dropdown */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingBlog ? "Edit Article" : "Create Article"}
        subtitle="Configure article title, slug, and category"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          {/* Article Title */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-zinc-800">
              Article Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="e.g. How Modern Search Infrastructure Drives 10x Organic Revenue"
              className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-900 shadow-2xs"
            />
          </div>

          {/* URL Slug with Live Preview */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-zinc-800">
                URL Slug *
              </label>
              <button
                type="button"
                onClick={() => {
                  setFormData((prev) => ({ ...prev, slug: slugify(prev.title) }));
                  setIsSlugManuallyEdited(false);
                }}
                className="text-[11px] text-zinc-500 hover:text-zinc-900 flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Auto-generate</span>
              </button>
            </div>
            <div className="flex items-center rounded-lg border border-zinc-200 bg-white overflow-hidden shadow-2xs focus-within:border-zinc-900">
              <span className="px-2.5 py-2 bg-zinc-50 border-r border-zinc-200 text-[11px] text-zinc-500 font-mono select-none">
                owlioworks.com/blog/
              </span>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => {
                  setIsSlugManuallyEdited(true);
                  setFormData({ ...formData, slug: slugify(e.target.value) });
                }}
                placeholder="modern-search-infrastructure-10x"
                className="flex-1 px-3 py-2 text-xs text-zinc-900 font-mono focus:outline-hidden"
              />
            </div>
          </div>

          {/* Category Dropdown - ONLY the exact 8 categories */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-zinc-800">
              Category *
            </label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900 shadow-2xs cursor-pointer"
            >
              {BLOG_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Read Time & Cover Image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-zinc-800">Read Time *</label>
              <input
                type="text"
                required
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                placeholder="e.g. 5 min read"
                className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900 shadow-2xs"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-zinc-800">Cover Image URL *</label>
              <input
                type="text"
                required
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="/image1.png"
                className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900 shadow-2xs"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-zinc-800">Tags (comma separated)</label>
            <input
              type="text"
              value={formData.tagsInput}
              onChange={(e) => setFormData({ ...formData, tagsInput: e.target.value })}
              placeholder="STRATEGY, GROWTH, TECH"
              className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900 shadow-2xs"
            />
          </div>

          {/* Excerpt / Summary */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-zinc-800">Excerpt / Summary *</label>
            <textarea
              required
              rows={2}
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="Short summary displayed on card previews..."
              className="bg-white border border-zinc-200 rounded-lg p-2.5 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900 shadow-2xs"
            />
          </div>

          {/* Content Body */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-zinc-800">Content Body</label>
            <textarea
              rows={4}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Full article content body..."
              className="bg-white border border-zinc-200 rounded-lg p-2.5 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900 shadow-2xs"
            />
          </div>

          {/* Modal Action Footer */}
          <div className="flex items-center justify-end gap-2 pt-3 border-t border-zinc-100">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-600 hover:text-zinc-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 rounded-lg bg-zinc-900 hover:bg-black text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
            >
              {editingBlog ? "Update Article" : "Publish Article"}
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
}
