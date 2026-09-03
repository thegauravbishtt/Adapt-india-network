"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  Plus,
  Trash2,
  Edit,
} from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminModal from "@/components/admin/AdminModal";
import { useToast } from "@/components/admin/ToastNotification";
import type { WorkItem } from "@/lib/db";

export default function AdminWorkPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [workItems, setWorkItems] = useState<WorkItem[]>([]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<WorkItem | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "HOSPITALITY & DINING",
    headline: "",
    description: "",
    src: "/creative1.png",
    featured: true,
  });

  const fetchWork = async () => {
    try {
      const authRes = await fetch("/api/admin/auth/me");
      if (!authRes.ok) {
        router.push("/admin/login");
        return;
      }

      const res = await fetch("/api/admin/work");
      const data = await res.json();
      setWorkItems(data.items || []);
      setLoading(false);
    } catch {
      router.push("/admin/login");
    }
  };

  useEffect(() => {
    fetchWork();
  }, []);

  const openCreateModal = () => {
    setEditingItem(null);
    setFormData({
      name: "",
      category: "HOSPITALITY & DINING",
      headline: "",
      description: "",
      src: "/creative1.png",
      featured: true,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (item: WorkItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      category: item.category,
      headline: item.headline,
      description: item.description,
      src: item.src,
      featured: item.featured,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...(editingItem ? { id: editingItem.id, order: editingItem.order } : {}),
      ...formData,
    };

    try {
      const res = await fetch("/api/admin/work", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast(editingItem ? "Project updated!" : "Case study added!", "success");
        setIsModalOpen(false);
        fetchWork();
      } else {
        toast("Failed to save project", "error");
      }
    } catch {
      toast("Error saving project", "error");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to remove this case study?")) return;

    try {
      const res = await fetch(`/api/admin/work?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        toast("Case study removed", "info");
        setWorkItems((prev) => prev.filter((w) => w.id !== id));
      } else {
        toast("Failed to delete", "error");
      }
    } catch {
      toast("Error deleting project", "error");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-zinc-300 border-t-zinc-900 rounded-full animate-spin" />
          <span className="text-xs text-zinc-500 font-medium">Loading Portfolio...</span>
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
          title="Portfolio & Case Studies"
          subtitle="Manage client work and showcases featured on the site"
          onOpenSidebar={() => setSidebarOpen(true)}
          actionButton={{
            label: "Add Project",
            onClick: openCreateModal,
          }}
        />

        <main className="p-4 sm:p-6 lg:p-8 flex flex-col gap-5 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workItems.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white border border-zinc-200 hover:border-zinc-300 rounded-xl overflow-hidden shadow-2xs transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Poster Image */}
                  <div className="relative aspect-[4/3] w-full bg-zinc-100 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 text-zinc-800 text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border border-zinc-200 backdrop-blur-xs">
                      {item.category}
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 bg-white/90 text-zinc-700 text-[10px] font-medium px-2 py-0.5 rounded border border-zinc-200">
                      #{idx + 1}
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-4 flex flex-col gap-1.5">
                    <span className="text-[11px] font-semibold text-zinc-500 uppercase">
                      {item.name}
                    </span>
                    <h3 className="text-sm font-bold text-zinc-900 leading-snug group-hover:text-zinc-600 transition-colors">
                      {item.headline}
                    </h3>
                    <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-3 sm:px-4 border-t border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                  <span className="text-[11px] text-zinc-400 font-mono">
                    ID: {item.id}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => openEditModal(item)}
                      className="p-1.5 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 transition-colors cursor-pointer"
                      title="Edit Project"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-1.5 rounded-md text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                      title="Delete Project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Modal */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? "Edit Project" : "Add Project"}
        subtitle="Manage client case study details"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-zinc-700">Client / Brand Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Smokey Lounge"
                className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-zinc-700">Category *</label>
              <input
                type="text"
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g. HOSPITALITY & DINING"
                className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-zinc-700">Headline Hook *</label>
            <input
              type="text"
              required
              value={formData.headline}
              onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
              placeholder="e.g. Culinary Elegance Under The Stars"
              className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-zinc-700">Image Asset URL *</label>
            <input
              type="text"
              required
              value={formData.src}
              onChange={(e) => setFormData({ ...formData, src: e.target.value })}
              placeholder="/creative1.png"
              className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-zinc-700">Description *</label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe deliverables and outcomes..."
              className="bg-white border border-zinc-200 rounded-lg p-2.5 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
            />
          </div>

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
              className="px-4 py-1.5 rounded-lg bg-zinc-900 hover:bg-black text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              {editingItem ? "Save Changes" : "Add Project"}
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
}
