"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  Search,
  Plus,
  Trash2,
  Edit,
  Calendar,
  RefreshCw,
  Upload,
  Image as ImageIcon,
  HelpCircle,
  UploadCloud,
  Loader2,
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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);

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
    faqs: [] as Array<{ question: string; answer: string }>,
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
    setShowUrlInput(false);
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
      faqs: [],
    });
    setIsModalOpen(true);
  };

  const openEditModal = (blog: BlogPost) => {
    setEditingBlog(blog);
    setIsSlugManuallyEdited(true);
    setShowUrlInput(false);

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
      faqs: blog.faqs && blog.faqs.length > 0 ? blog.faqs.map((f) => ({ ...f })) : [],
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

  const handleImageUpload = async (file: File) => {
    if (!file) return;
    setUploadingImage(true);
    try {
      const data = new FormData();
      data.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (res.ok && json.url) {
        setFormData((prev) => ({ ...prev, image: json.url }));
        toast("Image uploaded successfully!", "success");
      } else {
        toast(json.error || "Failed to upload image", "error");
      }
    } catch {
      toast("Error uploading image", "error");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
    // reset input value so re-uploading the same file triggers onChange
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAddFaq = () => {
    setFormData((prev) => ({
      ...prev,
      faqs: [...(prev.faqs || []), { question: "", answer: "" }],
    }));
  };

  const handleUpdateFaq = (index: number, field: "question" | "answer", value: string) => {
    setFormData((prev) => {
      const newFaqs = [...(prev.faqs || [])];
      if (newFaqs[index]) {
        newFaqs[index] = { ...newFaqs[index], [field]: value };
      }
      return { ...prev, faqs: newFaqs };
    });
  };

  const handleRemoveFaq = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      faqs: (prev.faqs || []).filter((_, i) => i !== index),
    }));
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

    const cleanedFaqs = (formData.faqs || []).filter(
      (faq) => faq.question.trim() !== "" || faq.answer.trim() !== ""
    );

    const payload = {
      ...(editingBlog ? { id: editingBlog.id } : {}),
      title: formData.title,
      slug: finalSlug,
      category: formData.category || "SEO",
      readTime: formData.readTime,
      image: formData.image || "/image1.png",
      excerpt: formData.excerpt,
      content: formData.content,
      faqs: cleanedFaqs,
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
    if (!confirm("Are you sure you want to permanently delete this article?")) return;

    // Optimistic UI update
    setBlogs((prev) =>
      prev.filter(
        (b) =>
          String(b.id).trim() !== String(id).trim() &&
          String(b.slug || "").trim() !== String(id).trim()
      )
    );

    try {
      const res = await fetch(`/api/admin/blogs?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      if (res.ok) {
        toast("Article deleted successfully", "info");
      } else {
        const errJson = await res.json().catch(() => ({}));
        toast(errJson.error || "Failed to delete article", "error");
        fetchBlogs();
      }
    } catch {
      toast("Error deleting article", "error");
      fetchBlogs();
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

      {/* Create / Edit Article Modal with Title, Slug, Image Upload, Category, Content and FAQ Section */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingBlog ? "Edit Article" : "Create Article"}
        subtitle="Configure article details, cover image, content, and FAQs"
        maxWidth="max-w-2xl"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          {/* Category & Read Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
          </div>

          {/* Cover Image Upload, Change, Delete */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-zinc-800">
                Cover Image *
              </label>
              <button
                type="button"
                onClick={() => setShowUrlInput(!showUrlInput)}
                className="text-[11px] text-zinc-500 hover:text-zinc-800 underline transition-colors cursor-pointer"
              >
                {showUrlInput ? "Hide manual URL" : "Or enter URL"}
              </button>
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            {formData.image ? (
              <div className="border border-zinc-200 rounded-xl overflow-hidden bg-zinc-50">
                <div className="relative aspect-[16/7] w-full max-h-52 overflow-hidden bg-zinc-900/5 group">
                  <img
                    src={formData.image}
                    alt="Cover preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploadingImage}
                      className="px-3 py-1.5 bg-white hover:bg-zinc-100 text-zinc-900 text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {uploadingImage ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <Upload className="w-3.5 h-3.5" />
                      )}
                      Change Image
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, image: "" }))}
                      className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Delete Image
                    </button>
                  </div>
                </div>

                <div className="p-2.5 bg-white border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 truncate pr-2">
                    <ImageIcon className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="text-[11px] font-mono text-zinc-600 truncate">
                      {formData.image}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploadingImage}
                      className="text-xs text-zinc-700 hover:text-zinc-900 font-semibold px-2.5 py-1 rounded-md bg-zinc-100 hover:bg-zinc-200 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {uploadingImage ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <Upload className="w-3 h-3" />
                      )}
                      Change
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, image: "" }))}
                      className="text-xs text-rose-600 hover:text-rose-700 font-semibold px-2.5 py-1 rounded-md hover:bg-rose-50 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files?.[0];
                  if (file) handleImageUpload(file);
                }}
                className="border-2 border-dashed border-zinc-200 hover:border-zinc-400 rounded-xl p-6 bg-zinc-50/50 hover:bg-zinc-50 transition-all cursor-pointer flex flex-col items-center justify-center gap-2 text-center"
              >
                {uploadingImage ? (
                  <div className="flex flex-col items-center gap-1.5 py-2">
                    <Loader2 className="w-6 h-6 text-zinc-900 animate-spin" />
                    <span className="text-xs font-medium text-zinc-600">
                      Uploading image...
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600">
                      <UploadCloud className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-zinc-800">
                        Click to upload image
                      </span>{" "}
                      <span className="text-xs text-zinc-500">or drag and drop</span>
                    </div>
                    <span className="text-[10px] text-zinc-400">
                      PNG, JPG, WEBP, GIF, SVG (up to 10MB)
                    </span>
                  </>
                )}
              </div>
            )}

            {showUrlInput && (
              <div className="mt-1">
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="Or paste image URL (e.g. /image1.png or https://...)"
                  className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-900 shadow-2xs font-mono"
                />
              </div>
            )}
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

          {/* FAQ Section (Frequently Asked Questions) */}
          <div className="flex flex-col gap-2.5 pt-3 border-t border-zinc-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-zinc-700" />
                <label className="text-xs font-bold text-zinc-900">
                  FAQ Section (Frequently Asked Questions)
                </label>
              </div>
              <button
                type="button"
                onClick={handleAddFaq}
                className="px-2.5 py-1 rounded-md bg-zinc-900 hover:bg-black text-white text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer shadow-2xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add FAQ</span>
              </button>
            </div>
            <p className="text-[11px] text-zinc-500">
              Add multiple FAQs for this article. Each entry contains a question and its answer.
            </p>

            {(!formData.faqs || formData.faqs.length === 0) ? (
              <div className="p-4 border border-dashed border-zinc-200 rounded-lg text-center bg-zinc-50/50">
                <p className="text-xs text-zinc-400">
                  No FAQs added yet. Click{" "}
                  <span className="font-semibold text-zinc-700">+ Add FAQ</span> to
                  add questions and answers.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {formData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-zinc-50/80 border border-zinc-200 rounded-lg p-3 flex flex-col gap-2 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-600 bg-white px-2 py-0.5 rounded border border-zinc-200">
                        FAQ #{index + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveFaq(index)}
                        className="p-1 rounded text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                        title="Remove FAQ"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-zinc-700">
                        Question
                      </label>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) =>
                          handleUpdateFaq(index, "question", e.target.value)
                        }
                        placeholder="e.g. How does programmatic SEO compare to traditional SEO?"
                        className="bg-white border border-zinc-200 rounded-md px-2.5 py-1.5 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-900 shadow-2xs"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-zinc-700">
                        Answer
                      </label>
                      <textarea
                        rows={2}
                        value={faq.answer}
                        onChange={(e) =>
                          handleUpdateFaq(index, "answer", e.target.value)
                        }
                        placeholder="Provide the answer here..."
                        className="bg-white border border-zinc-200 rounded-md p-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-900 shadow-2xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Action Footer */}
          <div className="flex items-center justify-end gap-2 pt-3 border-t border-zinc-100">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-600 hover:text-zinc-900 cursor-pointer"
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
