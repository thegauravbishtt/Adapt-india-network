"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  Search,
  Plus,
  Trash2,
  Calendar,
  MessageSquare,
  FileSpreadsheet,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminModal from "@/components/admin/AdminModal";
import { useToast } from "@/components/admin/ToastNotification";
import type { Lead } from "@/lib/db";

const ALL_STATUSES: Array<{ id: Lead["status"]; label: string; bg: string; text: string; border: string }> = [
  { id: "new", label: "New", bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  { id: "contacted", label: "Contacted", bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  { id: "in_discussion", label: "In Discussion", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  { id: "won", label: "Won", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  { id: "lost", label: "Lost", bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
  { id: "archived", label: "Archived", bg: "bg-zinc-100", text: "text-zinc-700", border: "border-zinc-200" },
];

export default function AdminLeadsPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [notesDraft, setNotesDraft] = useState("");
  const [lastSyncTime, setLastSyncTime] = useState<Date>(new Date());

  // Add Lead Modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState<{
    name: string;
    email: string;
    phone: string;
    countryCode: string;
    companyName: string;
    service: string;
    budget: string;
    requirement: string;
    notes: string;
    status: Lead["status"];
  }>({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    companyName: "",
    service: "SEO",
    budget: "$10,000 - $25,000",
    requirement: "",
    notes: "",
    status: "in_discussion",
  });

  const fetchLeads = async (isSilent = false) => {
    try {
      const authRes = await fetch("/api/admin/auth/me");
      if (!authRes.ok) {
        if (!isSilent) router.push("/admin/login");
        return;
      }

      const res = await fetch("/api/admin/leads");
      const data = await res.json();
      setLeads(data.leads || []);
      setLastSyncTime(new Date());
      if (!isSilent) setLoading(false);
    } catch {
      if (!isSilent) router.push("/admin/login");
    }
  };

  useEffect(() => {
    fetchLeads(false);
  }, []);

  // 3-Second Automatic Live Background Polling
  useEffect(() => {
    const interval = setInterval(() => {
      fetchLeads(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedLead) {
      setNotesDraft(selectedLead.notes || "");
    }
  }, [selectedLead]);

  const handleStatusChange = async (leadId: string, newStatus: Lead["status"]) => {
    // Optimistic UI update
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
    );
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
    }

    try {
      const res = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });

      if (res.ok) {
        toast(`Status updated to ${newStatus.replace("_", " ")}`, "success");
      } else {
        toast("Failed to update status", "error");
        fetchLeads(true);
      }
    } catch {
      toast("Error updating status", "error");
      fetchLeads(true);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedLead.id, notes: notesDraft }),
      });

      if (res.ok) {
        toast("Internal notes saved", "success");
        setSelectedLead((prev) => (prev ? { ...prev, notes: notesDraft } : null));
        setLeads((prev) =>
          prev.map((l) => (l.id === selectedLead.id ? { ...l, notes: notesDraft } : l))
        );
      }
    } catch {
      toast("Error saving notes", "error");
    }
  };

  const handleDeleteLead = async (leadId: string) => {
    if (!confirm("Are you sure you want to permanently delete this lead?")) return;

    // Optimistic UI update
    setLeads((prev) => prev.filter((l) => String(l.id).trim() !== String(leadId).trim()));
    if (selectedLead && String(selectedLead.id).trim() === String(leadId).trim()) {
      setSelectedLead(null);
    }

    try {
      const res = await fetch(`/api/admin/leads?id=${encodeURIComponent(leadId)}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast("Lead deleted permanently", "info");
      } else {
        const errJson = await res.json().catch(() => ({}));
        toast(errJson.error || "Failed to delete lead", "error");
        fetchLeads(true);
      }
    } catch {
      toast("Error deleting lead", "error");
      fetchLeads(true);
    }
  };

  const handleCreateLead = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newLeadForm,
          source: "Manual Admin Entry",
        }),
      });

      if (res.ok) {
        toast(`Lead recorded as ${newLeadForm.status.replace("_", " ")}!`, "success");
        setIsAddModalOpen(false);
        setNewLeadForm({
          name: "",
          email: "",
          phone: "",
          countryCode: "+91",
          companyName: "",
          service: "SEO",
          budget: "$10,000 - $25,000",
          requirement: "",
          notes: "",
          status: "in_discussion",
        });
        fetchLeads(true);
      }
    } catch {
      toast("Failed to create lead", "error");
    }
  };

  const exportCSV = () => {
    if (leads.length === 0) return toast("No leads to export", "info");
    const headers = ["ID", "Name", "Email", "Phone", "Company", "Service", "Budget", "Status", "Notes", "Date"];
    const rows = filteredLeads.map((l) => [
      l.id,
      `"${l.name}"`,
      `"${l.email}"`,
      `"${l.countryCode} ${l.phone}"`,
      `"${l.companyName}"`,
      `"${l.service}"`,
      `"${l.budget}"`,
      `"${l.status}"`,
      `"${(l.notes || "").replace(/"/g, '""')}"`,
      `"${new Date(l.createdAt).toISOString()}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `owlio_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast("Exported CRM Leads CSV", "success");
  };

  const tabCounts = {
    all: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    in_discussion: leads.filter((l) => l.status === "in_discussion").length,
    won: leads.filter((l) => l.status === "won").length,
    lost: leads.filter((l) => l.status === "lost").length,
    archived: leads.filter((l) => l.status === "archived").length,
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesTab = activeTab === "all" || lead.status === activeTab;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      lead.name.toLowerCase().includes(q) ||
      lead.email.toLowerCase().includes(q) ||
      lead.companyName.toLowerCase().includes(q) ||
      lead.service.toLowerCase().includes(q) ||
      (lead.requirement && lead.requirement.toLowerCase().includes(q));

    return matchesTab && matchesQuery;
  });

  const newLeadsTotal = tabCounts.new;

  if (loading && leads.length === 0) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-zinc-300 border-t-zinc-900 rounded-full animate-spin" />
          <span className="text-xs text-zinc-500 font-medium">Loading CRM Pipeline...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex">
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        newLeadsCount={newLeadsTotal}
      />

      <div className="flex-1 lg:pl-60 flex flex-col min-w-0">
        <AdminHeader
          title="Inquiries & CRM Leads"
          subtitle="Manage website briefs, client outreach, and manually set lead status"
          onOpenSidebar={() => setSidebarOpen(true)}
          actionButton={{
            label: "Record Lead",
            onClick: () => setIsAddModalOpen(true),
          }}
        />

        <main className="p-4 sm:p-6 lg:p-8 flex flex-col gap-5 max-w-6xl mx-auto w-full">
          {/* Live Sync Status Banner */}
          <div className="flex items-center justify-between bg-white border border-zinc-200 rounded-xl px-4 py-2.5 shadow-2xs text-xs">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-zinc-900">
                Live Inbound Polling Active (every 3s)
              </span>
              <span className="text-[11px] text-zinc-400 hidden sm:inline">
                • Website form submissions appear automatically
              </span>
            </div>

            <span className="text-zinc-400 text-[11px]">
              Last sync: {lastSyncTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
            </span>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Search Box */}
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search leads by name, email or company..."
                  className="w-full bg-white border border-zinc-200 rounded-lg pl-9 pr-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-900 shadow-2xs"
                />
              </div>

              {/* Actions */}
              <button
                onClick={exportCSV}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-900 bg-white hover:bg-zinc-50 border border-zinc-200 px-3 py-2 rounded-lg transition-colors cursor-pointer shadow-2xs self-start sm:self-auto"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                <span>Export CSV</span>
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
              {[
                { id: "all", label: "All" },
                { id: "new", label: "New Leads" },
                { id: "in_discussion", label: "In Discussion" },
                { id: "won", label: "Won" },
                { id: "contacted", label: "Contacted" },
                { id: "lost", label: "Lost" },
                { id: "archived", label: "Archived" },
              ].map((tab) => {
                const count = tabCounts[tab.id as keyof typeof tabCounts] || 0;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? "bg-zinc-900 text-white font-semibold"
                        : "bg-white text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 border border-zinc-200"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Table with Direct 1-Click Status Dropdown Selector */}
          <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-50/80 border-b border-zinc-200 text-zinc-600 font-semibold text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Contact</th>
                    <th className="py-3 px-4">Company</th>
                    <th className="py-3 px-4">Service</th>
                    <th className="py-3 px-4">Budget Range</th>
                    <th className="py-3 px-4">Status (Click to Change)</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-zinc-400">
                        <Users className="w-8 h-8 text-zinc-300 mx-auto mb-2" />
                        <span>No inquiries found matching this filter</span>
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => {
                      const currentSt = ALL_STATUSES.find((s) => s.id === lead.status) || ALL_STATUSES[0];

                      return (
                        <tr
                          key={lead.id}
                          className="hover:bg-zinc-50/70 transition-colors group"
                        >
                          <td className="py-3 px-4">
                            <div className="flex flex-col">
                              <span className="font-semibold text-xs text-zinc-900">
                                {lead.name}
                              </span>
                              <span className="text-[11px] text-zinc-500">
                                {lead.email}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="font-medium text-xs text-zinc-800">
                              {lead.companyName || "—"}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-xs text-zinc-600">
                              {lead.service}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="font-semibold text-xs text-zinc-900">
                              {lead.budget}
                            </span>
                          </td>
                          {/* Interactive Status Selector directly on Table */}
                          <td className="py-3 px-4">
                            <select
                              value={lead.status}
                              onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead["status"])}
                              className={`text-[11px] font-semibold rounded-lg px-2.5 py-1 border cursor-pointer focus:outline-hidden transition-all shadow-2xs ${currentSt.bg} ${currentSt.text} ${currentSt.border}`}
                            >
                              <option value="new">New</option>
                              <option value="in_discussion">In Discussion</option>
                              <option value="won">Won (Deal Closed)</option>
                              <option value="contacted">Contacted</option>
                              <option value="lost">Lost</option>
                              <option value="archived">Archived</option>
                            </select>
                          </td>
                          <td className="py-3 px-4 text-[11px] text-zinc-500 whitespace-nowrap">
                            {new Date(lead.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setSelectedLead(lead)}
                                className="px-2.5 py-1 text-xs font-medium text-zinc-700 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 rounded transition-colors cursor-pointer"
                              >
                                View Details
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteLead(lead.id);
                                }}
                                className="p-1 rounded-md text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                title="Delete Lead"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-zinc-50/50 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500">
              <span>Showing {filteredLeads.length} of {leads.length} total inquiries</span>
              <span className="font-semibold text-zinc-800">{tabCounts.won} Deals Closed</span>
            </div>
          </div>
        </main>
      </div>

      {/* Drawer / Modal: View & Update Lead Details */}
      {selectedLead && (
        <AdminModal
          isOpen={Boolean(selectedLead)}
          onClose={() => setSelectedLead(null)}
          title={`Lead: ${selectedLead.name}`}
          subtitle={`Source: ${selectedLead.source || "Website Form"} • Received ${new Date(
            selectedLead.createdAt
          ).toLocaleString()}`}
          maxWidth="max-w-xl"
        >
          <div className="flex flex-col gap-4">
            {/* Status Selector */}
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-zinc-50 border border-zinc-200">
              <span className="text-xs font-semibold text-zinc-800">
                Update Lead Status (Manual Selection)
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(["new", "in_discussion", "won", "contacted", "lost", "archived"] as const).map(
                  (st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => handleStatusChange(selectedLead.id, st)}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold capitalize transition-all cursor-pointer ${
                        selectedLead.status === st
                          ? "bg-zinc-900 text-white shadow-xs scale-102"
                          : "bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200"
                      }`}
                    >
                      {st.replace("_", " ")}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                <span className="text-[10px] uppercase font-semibold text-zinc-500 block mb-0.5">Company</span>
                <span className="text-xs font-bold text-zinc-900">{selectedLead.companyName || "—"}</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                <span className="text-[10px] uppercase font-semibold text-zinc-500 block mb-0.5">Budget</span>
                <span className="text-xs font-bold text-emerald-700">{selectedLead.budget}</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                <span className="text-[10px] uppercase font-semibold text-zinc-500 block mb-0.5">Phone</span>
                <span className="text-xs font-medium text-zinc-900">
                  {selectedLead.countryCode} {selectedLead.phone}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                <span className="text-[10px] uppercase font-semibold text-zinc-500 block mb-0.5">Email</span>
                <a href={`mailto:${selectedLead.email}`} className="text-xs font-medium text-blue-600 hover:underline">
                  {selectedLead.email}
                </a>
              </div>
              <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                <span className="text-[10px] uppercase font-semibold text-zinc-500 block mb-0.5">Service</span>
                <span className="text-xs font-medium text-zinc-900">{selectedLead.service}</span>
              </div>
            </div>

            {/* Project Requirement */}
            <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 flex flex-col gap-1">
              <span className="text-xs font-semibold text-zinc-800">
                Client Project Requirement
              </span>
              <p className="text-xs text-zinc-700 leading-relaxed whitespace-pre-wrap mt-0.5">
                {selectedLead.requirement}
              </p>
            </div>

            {/* Notes */}
            <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-800">
                  Internal Team Notes
                </span>
                <button
                  onClick={handleSaveNotes}
                  className="px-2.5 py-1 rounded bg-zinc-900 text-white text-xs font-medium hover:bg-black transition-colors"
                >
                  Save Notes
                </button>
              </div>
              <textarea
                rows={2}
                value={notesDraft}
                onChange={(e) => setNotesDraft(e.target.value)}
                placeholder="Add meeting takeaways or next steps..."
                className="w-full bg-white border border-zinc-200 rounded-lg p-2.5 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
              <button
                onClick={() => handleDeleteLead(selectedLead.id)}
                className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-medium cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Lead</span>
              </button>

              <button
                onClick={() => setSelectedLead(null)}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
              >
                Close Drawer
              </button>
            </div>
          </div>
        </AdminModal>
      )}

      {/* Add Lead Modal with Manual Status Dropdown */}
      <AdminModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Record New Lead"
        subtitle="Manually add a prospect and set initial status"
      >
        <form onSubmit={handleCreateLead} className="flex flex-col gap-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-zinc-700">Client Name *</label>
              <input
                type="text"
                required
                value={newLeadForm.name}
                onChange={(e) => setNewLeadForm({ ...newLeadForm, name: e.target.value })}
                placeholder="e.g. John Doe"
                className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-zinc-700">Company Name *</label>
              <input
                type="text"
                required
                value={newLeadForm.companyName}
                onChange={(e) => setNewLeadForm({ ...newLeadForm, companyName: e.target.value })}
                placeholder="e.g. Acme Corp"
                className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-zinc-700">Email Address *</label>
              <input
                type="email"
                required
                value={newLeadForm.email}
                onChange={(e) => setNewLeadForm({ ...newLeadForm, email: e.target.value })}
                placeholder="john@acme.com"
                className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-zinc-700">Phone</label>
              <input
                type="text"
                value={newLeadForm.phone}
                onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                placeholder="9876543210"
                className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-zinc-700">Initial Status (Manual) *</label>
              <select
                value={newLeadForm.status}
                onChange={(e) => setNewLeadForm({ ...newLeadForm, status: e.target.value as Lead["status"] })}
                className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900 cursor-pointer"
              >
                <option value="new">New</option>
                <option value="in_discussion">In Discussion</option>
                <option value="won">Won (Deal Closed)</option>
                <option value="contacted">Contacted</option>
                <option value="lost">Lost</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-zinc-700">Budget Range</label>
              <input
                type="text"
                value={newLeadForm.budget}
                onChange={(e) => setNewLeadForm({ ...newLeadForm, budget: e.target.value })}
                placeholder="$10,000 - $25,000"
                className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-zinc-700">Service</label>
            <input
              type="text"
              value={newLeadForm.service}
              onChange={(e) => setNewLeadForm({ ...newLeadForm, service: e.target.value })}
              placeholder="SEO / Performance Marketing"
              className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-zinc-700">Requirements Summary</label>
            <textarea
              rows={3}
              value={newLeadForm.requirement}
              onChange={(e) => setNewLeadForm({ ...newLeadForm, requirement: e.target.value })}
              placeholder="Brief details of project deliverables..."
              className="bg-white border border-zinc-200 rounded-lg p-2.5 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-3 border-t border-zinc-100">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-600 hover:text-zinc-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 rounded-lg bg-zinc-900 hover:bg-black text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Save Lead
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
}
