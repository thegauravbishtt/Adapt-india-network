"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Search,
  Download,
  Copy,
  Plus,
  Trash2,
} from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminModal from "@/components/admin/AdminModal";
import { useToast } from "@/components/admin/ToastNotification";
import type { Subscriber } from "@/lib/db";

export default function AdminSubscribersPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Add Subscriber modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newSource, setNewSource] = useState("Manual Admin Addition");

  const fetchSubscribers = async () => {
    try {
      const authRes = await fetch("/api/admin/auth/me");
      if (!authRes.ok) {
        router.push("/admin/login");
        return;
      }

      const res = await fetch("/api/admin/subscribers");
      const data = await res.json();
      setSubscribers(data.subscribers || []);
      setLoading(false);
    } catch {
      router.push("/admin/login");
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const handleAddSubscriber = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newEmail, source: newSource }),
      });

      if (res.ok) {
        toast("Subscriber added successfully", "success");
        setIsModalOpen(false);
        setNewEmail("");
        fetchSubscribers();
      }
    } catch {
      toast("Failed to add subscriber", "error");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to remove this subscriber?")) return;

    try {
      const res = await fetch(`/api/admin/subscribers?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        toast("Subscriber removed", "info");
        setSubscribers((prev) => prev.filter((s) => s.id !== id));
      }
    } catch {
      toast("Error deleting subscriber", "error");
    }
  };

  const handleCopyAll = () => {
    if (subscribers.length === 0) return toast("No emails to copy", "info");
    const emailsList = subscribers.map((s) => s.email).join(", ");
    navigator.clipboard.writeText(emailsList);
    toast(`Copied ${subscribers.length} email addresses to clipboard!`, "success");
  };

  const handleExportCSV = () => {
    if (subscribers.length === 0) return toast("No subscribers to export", "info");
    const headers = ["ID", "Email", "Source", "Subscribed At"];
    const rows = filteredSubscribers.map((s) => [
      s.id,
      `"${s.email}"`,
      `"${s.source}"`,
      `"${new Date(s.subscribedAt).toISOString()}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `owlio_subscribers_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast("Exported subscribers CSV", "success");
  };

  const filteredSubscribers = subscribers.filter((s) => {
    const q = searchQuery.toLowerCase().trim();
    return !q || s.email.toLowerCase().includes(q) || s.source.toLowerCase().includes(q);
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-zinc-300 border-t-zinc-900 rounded-full animate-spin" />
          <span className="text-xs text-zinc-500 font-medium">Loading Subscribers...</span>
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
          title="Subscribers"
          subtitle="Manage email list and newsletter signups"
          onOpenSidebar={() => setSidebarOpen(true)}
          actionButton={{
            label: "Add Subscriber",
            onClick: () => setIsModalOpen(true),
          }}
        />

        <main className="p-4 sm:p-6 lg:p-8 flex flex-col gap-5 max-w-6xl mx-auto w-full">
          {/* Top Actions Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search subscriber emails..."
                className="w-full bg-white border border-zinc-200 rounded-lg pl-9 pr-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-900"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyAll}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-900 bg-white hover:bg-zinc-50 border border-zinc-200 px-3 py-2 rounded-lg transition-colors cursor-pointer shadow-2xs"
              >
                <Copy className="w-3.5 h-3.5 text-zinc-600" />
                <span>Copy Emails</span>
              </button>
              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-900 bg-white hover:bg-zinc-50 border border-zinc-200 px-3 py-2 rounded-lg transition-colors cursor-pointer shadow-2xs"
              >
                <Download className="w-3.5 h-3.5 text-emerald-600" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-50/80 border-b border-zinc-200 text-zinc-600 font-semibold text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Source</th>
                    <th className="py-3 px-4">Subscribed Date</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {filteredSubscribers.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-10 text-center text-zinc-400">
                        No subscribers found.
                      </td>
                    </tr>
                  ) : (
                    filteredSubscribers.map((sub) => (
                      <tr key={sub.id} className="hover:bg-zinc-50/60 transition-colors">
                        <td className="py-3.5 px-4">
                          <span className="font-semibold text-xs text-zinc-900">{sub.email}</span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="text-xs text-zinc-600">
                            {sub.source}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-[11px] text-zinc-500">
                          {new Date(sub.subscribedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => handleDelete(sub.id)}
                            className="p-1.5 rounded-md text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                            title="Remove Subscriber"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-zinc-50/50 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500">
              <span>Total: {subscribers.length} subscribers</span>
              <span>Audience List</span>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Subscriber"
        subtitle="Manually add a contact to your list"
      >
        <form onSubmit={handleAddSubscriber} className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-zinc-700">Email Address *</label>
            <input
              type="email"
              required
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="founder@company.com"
              className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-zinc-700">Acquisition Source</label>
            <input
              type="text"
              value={newSource}
              onChange={(e) => setNewSource(e.target.value)}
              placeholder="e.g. VIP Dinner / Event"
              className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
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
              Add Subscriber
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
}
