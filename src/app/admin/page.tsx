"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Users,
  TrendingUp,
  TrendingDown,
  FileText,
  Mail,
  Plus,
  MessageSquare,
  Clock,
  ChevronRight,
  Download,
  Calendar,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
} from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminModal from "@/components/admin/AdminModal";
import { useToast } from "@/components/admin/ToastNotification";
import type { Lead } from "@/lib/db";

export default function AdminDashboardPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Sales Year / Month filter
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [hoveredMonthIndex, setHoveredMonthIndex] = useState<number | null>(null);

  // New Lead Modal
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    companyName: "",
    service: "SEO",
    budget: "$10,000 - $25,000",
    requirement: "",
  });

  const fetchData = async (isSilent = false) => {
    try {
      const authRes = await fetch("/api/admin/auth/me");
      if (!authRes.ok) {
        if (!isSilent) router.push("/admin/login");
        return;
      }

      const [statsRes, leadsRes] = await Promise.all([
        fetch(`/api/admin/stats?year=${selectedYear}&month=${selectedMonth}`),
        fetch("/api/admin/leads"),
      ]);

      const statsData = await statsRes.json();
      const leadsData = await leadsRes.json();

      setStats(statsData.stats);
      setLeads(leadsData.leads || []);
      if (!isSilent) setLoading(false);
    } catch {
      if (!isSilent) router.push("/admin/login");
    }
  };

  // Initial load
  useEffect(() => {
    fetchData(false);
  }, [selectedYear, selectedMonth]);

  // 3-Second Automatic Live Refresh Polling
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData(true);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedYear, selectedMonth]);

  const handleStatusChange = async (leadId: string, newStatus: Lead["status"]) => {
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });

      if (res.ok) {
        toast(`Lead status set to ${newStatus.replace("_", " ")}`, "success");
        fetchData(true);
        if (selectedLead && selectedLead.id === leadId) {
          setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch {
      toast("Failed to update status", "error");
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
          status: "new",
          source: "Manual Admin Entry",
        }),
      });

      if (res.ok) {
        toast("New lead recorded!", "success");
        setIsAddLeadOpen(false);
        setNewLeadForm({
          name: "",
          email: "",
          phone: "",
          countryCode: "+91",
          companyName: "",
          service: "SEO",
          budget: "$10,000 - $25,000",
          requirement: "",
        });
        fetchData(true);
      }
    } catch {
      toast("Failed to create lead", "error");
    }
  };

  const salesAnalytics = stats?.salesAnalytics;
  const monthlySales = salesAnalytics?.monthlySales || [];
  const maxRevenue = Math.max(...monthlySales.map((m: any) => m.revenue), 100000);
  const chartWidth = 700;
  const chartHeight = 180;
  const padX = 35;
  const padY = 20;

  const points = monthlySales.map((m: any, idx: number) => {
    const x = padX + (idx / 11) * (chartWidth - padX * 2);
    const y = chartHeight - padY - (m.revenue / (maxRevenue || 1)) * (chartHeight - padY * 2);
    return { x, y, ...m };
  });

  const linePath = points.reduce((acc: string, pt: any, idx: number, arr: any[]) => {
    if (idx === 0) return `M ${pt.x} ${pt.y}`;
    const prev = arr[idx - 1];
    const cx = (prev.x + pt.x) / 2;
    return `${acc} C ${cx} ${prev.y}, ${cx} ${pt.y}, ${pt.x} ${pt.y}`;
  }, "");

  const areaPath = points.length > 0
    ? `${linePath} L ${points[points.length - 1].x} ${chartHeight - padY} L ${points[0].x} ${chartHeight - padY} Z`
    : "";

  const isEarningGood = salesAnalytics?.isSalesUp ?? true;
  const growthRate = salesAnalytics?.salesGrowthPercentage ?? 0;

  if (loading && !stats) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-zinc-300 border-t-zinc-900 rounded-full animate-spin" />
          <span className="text-xs text-zinc-500 font-medium">Loading Dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex">
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        newLeadsCount={stats?.newLeads || 0}
      />

      <div className="flex-1 lg:pl-60 flex flex-col min-w-0">
        <AdminHeader
          title="Executive Dashboard"
          subtitle="Overview of inquiries, audience, and system performance"
          onOpenSidebar={() => setSidebarOpen(true)}
          actionButton={{
            label: "Record Lead",
            onClick: () => setIsAddLeadOpen(true),
          }}
        />

        <main className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6 max-w-6xl mx-auto w-full">
          {/* Top 4 KPI Metrics Grid (Exactly as before) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Inquiries */}
            <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-2xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-500">Total Inquiries</span>
                <Users className="w-4 h-4 text-zinc-400" />
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-zinc-900 tracking-tight">
                    {stats?.totalLeads || 0}
                  </span>
                  {stats?.newLeads > 0 && (
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      +{stats.newLeads} New
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-zinc-500 block mt-1">
                  Inbound project briefs received
                </span>
              </div>
            </div>

            {/* Active Pipeline */}
            <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-2xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-500">Active Pipeline</span>
                <Clock className="w-4 h-4 text-zinc-400" />
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-zinc-900 tracking-tight">
                    {stats?.inDiscussionLeads || 0}
                  </span>
                  <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                    In Progress
                  </span>
                </div>
                <span className="text-[11px] text-zinc-500 block mt-1">
                  Discovery calls & proposals
                </span>
              </div>
            </div>

            {/* Deals Closed */}
            <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-2xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-500">Deals Closed</span>
                <TrendingUp className="w-4 h-4 text-zinc-400" />
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-zinc-900 tracking-tight">
                    {stats?.wonLeads || 0}
                  </span>
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    {stats?.conversionRate || 0}% Win Rate
                  </span>
                </div>
                <span className="text-[11px] text-zinc-500 block mt-1">
                  Converted client engagements
                </span>
              </div>
            </div>

            {/* Subscribers */}
            <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-2xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-500">Subscribers</span>
                <Mail className="w-4 h-4 text-zinc-400" />
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-zinc-900 tracking-tight">
                    {stats?.totalSubscribers || 0}
                  </span>
                  <span className="text-xs font-medium text-zinc-600 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded-full">
                    {stats?.totalBlogs || 0} Articles
                  </span>
                </div>
                <span className="text-[11px] text-zinc-500 block mt-1">
                  Audience & published content
                </span>
              </div>
            </div>
          </div>

          {/* Sales & Revenue Performance Graph (Earning up/down map) */}
          <div className="bg-white border border-zinc-200 rounded-xl p-5 sm:p-6 shadow-2xs flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-zinc-900">Total Sales Performance</span>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full border inline-flex items-center gap-1 ${
                      isEarningGood
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-rose-50 text-rose-700 border-rose-200"
                    }`}
                  >
                    {isEarningGood ? (
                      <>
                        <ArrowUpRight className="w-3 h-3" />
                        <span>Map Goes UP (+{growthRate}%)</span>
                      </>
                    ) : (
                      <>
                        <ArrowDownRight className="w-3 h-3" />
                        <span>Map Goes DOWN ({growthRate}%)</span>
                      </>
                    )}
                  </span>
                </div>
                <span className="text-xs text-zinc-500 mt-0.5 block">
                  Sales Starting Next Month ({salesAnalytics?.nextMonthName || "October"} {selectedYear}): <strong className="text-zinc-900 font-bold">${(salesAnalytics?.currentPeriodSales || 0).toLocaleString()}</strong>
                </span>
              </div>

              {/* Year and Month Selectors */}
              <div className="flex items-center gap-2">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
                  className="bg-white border border-zinc-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-zinc-900 focus:outline-hidden cursor-pointer shadow-2xs"
                >
                  <option value={2026}>Year 2026</option>
                  <option value={2025}>Year 2025</option>
                  <option value={2024}>Year 2024</option>
                </select>

                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="bg-white border border-zinc-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-zinc-900 focus:outline-hidden cursor-pointer shadow-2xs"
                >
                  <option value="all">Full Year</option>
                  <option value="0">Jan</option>
                  <option value="1">Feb</option>
                  <option value="2">Mar</option>
                  <option value="3">Apr</option>
                  <option value="4">May</option>
                  <option value="5">Jun</option>
                  <option value="6">Jul</option>
                  <option value="7">Aug</option>
                  <option value="8">Sep</option>
                  <option value="9">Oct</option>
                  <option value="10">Nov</option>
                  <option value="11">Dec</option>
                </select>
              </div>
            </div>

            {/* SVG Sales Curve */}
            <div className="relative w-full overflow-hidden">
              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="w-full h-44 sm:h-48 overflow-visible"
              >
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={isEarningGood ? "#10b981" : "#18181b"} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={isEarningGood ? "#10b981" : "#18181b"} stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                {[0.3, 0.65].map((pct, i) => (
                  <line
                    key={i}
                    x1={padX}
                    y1={padY + pct * (chartHeight - padY * 2)}
                    x2={chartWidth - padX}
                    y2={padY + pct * (chartHeight - padY * 2)}
                    stroke="#f4f4f5"
                    strokeDasharray="4 4"
                  />
                ))}

                {/* Area */}
                <path d={areaPath} fill="url(#salesGradient)" />

                {/* Line */}
                <path
                  d={linePath}
                  fill="none"
                  stroke={isEarningGood ? "#059669" : "#18181b"}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Month Nodes */}
                {points.map((pt: any, idx: number) => {
                  const isHovered = hoveredMonthIndex === idx;
                  const isSelected = selectedMonth !== "all" && parseInt(selectedMonth, 10) === idx;

                  return (
                    <g key={idx} className="cursor-pointer">
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isHovered || isSelected ? 5.5 : 3.5}
                        fill="#ffffff"
                        stroke={pt.isUp ? "#059669" : "#e11d48"}
                        strokeWidth={isHovered || isSelected ? 2.5 : 2}
                        onMouseEnter={() => setHoveredMonthIndex(idx)}
                        onMouseLeave={() => setHoveredMonthIndex(null)}
                        onClick={() => setSelectedMonth(selectedMonth === `${idx}` ? "all" : `${idx}`)}
                      />
                      <text
                        x={pt.x}
                        y={chartHeight - 4}
                        fontSize="9.5"
                        fontWeight={isHovered || isSelected ? "bold" : "normal"}
                        fill={isHovered || isSelected ? "#09090b" : "#71717a"}
                        textAnchor="middle"
                        onClick={() => setSelectedMonth(selectedMonth === `${idx}` ? "all" : `${idx}`)}
                      >
                        {pt.monthName}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Tooltip */}
              {hoveredMonthIndex !== null && points[hoveredMonthIndex] && (
                <div
                  className="absolute bg-zinc-900 text-white rounded-lg px-3 py-2 shadow-xl pointer-events-none text-xs flex flex-col gap-0.5 z-20"
                  style={{
                    left: `${(points[hoveredMonthIndex].x / chartWidth) * 100}%`,
                    top: "5px",
                    transform: "translateX(-50%)",
                  }}
                >
                  <span className="font-bold">{points[hoveredMonthIndex].monthName} {selectedYear}</span>
                  <span>Sales: ${points[hoveredMonthIndex].revenue.toLocaleString()}</span>
                  <span className={points[hoveredMonthIndex].isUp ? "text-emerald-400" : "text-rose-400"}>
                    {points[hoveredMonthIndex].isUp ? "↑ Earning Good" : "↓ Earning Down"} ({points[hoveredMonthIndex].growthRate}%)
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Middle Row: Service Demand Breakdown + Quick Actions (Exact as before) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Service Demand */}
            <div className="lg:col-span-2 bg-white border border-zinc-200 rounded-xl p-5 sm:p-6 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-sm font-bold text-zinc-900">
                      Service Inquiries Breakdown
                    </h2>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Demand distribution across your core service offerings
                    </p>
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">
                    {stats?.serviceBreakdown?.length || 0} Categories
                  </span>
                </div>

                <div className="flex flex-col gap-3.5">
                  {stats?.serviceBreakdown?.map((item: any) => (
                    <div key={item.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-zinc-800 truncate max-w-xs">
                          {item.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-500">{item.count} leads</span>
                          <span className="font-semibold text-zinc-900 w-8 text-right">
                            {item.percentage}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-zinc-900 rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(item.percentage, 4)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                <span>Updated in real-time</span>
                <Link
                  href="/admin/leads"
                  className="font-medium text-zinc-900 hover:text-black"
                >
                  Manage Inquiries →
                </Link>
              </div>
            </div>

            {/* Quick Actions & Short Summary */}
            <div className="bg-white border border-zinc-200 rounded-xl p-5 sm:p-6 shadow-2xs flex flex-col justify-between">
              <div>
                <h2 className="text-sm font-bold text-zinc-900 mb-1">
                  Quick Actions
                </h2>
                <p className="text-xs text-zinc-500 mb-4">
                  Shortcuts for high-priority administrative workflows
                </p>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setIsAddLeadOpen(true)}
                    className="w-full flex items-center justify-between p-3 rounded-lg border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <Plus className="w-4 h-4 text-zinc-600" />
                      <span className="text-xs font-semibold text-zinc-900">
                        Record New Lead
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                  </button>

                  <Link
                    href="/admin/blogs"
                    className="w-full flex items-center justify-between p-3 rounded-lg border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-left transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-zinc-600" />
                      <span className="text-xs font-semibold text-zinc-900">
                        Write Blog Article
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                  </Link>

                  <Link
                    href="/admin/subscribers"
                    className="w-full flex items-center justify-between p-3 rounded-lg border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-left transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-zinc-600" />
                      <span className="text-xs font-semibold text-zinc-900">
                        Export Subscriber CSV
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                  </Link>
                </div>
              </div>

              <div className="p-3 mt-4 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-medium text-zinc-700">
                    Auto-sync active (3s)
                  </span>
                </div>
                <span className="text-[11px] text-zinc-500">Live</span>
              </div>
            </div>
          </div>

          {/* Inbound Leads Table (Exact as before) */}
          <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="p-4 sm:px-6 flex items-center justify-between border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-zinc-900">
                  Recent Inbound Inquiries
                </h2>
                <span className="text-xs text-zinc-500">({leads.length} Total)</span>
              </div>

              <Link
                href="/admin/leads"
                className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 hover:text-black transition-colors"
              >
                <span>View CRM Pipeline</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-50/80 border-b border-zinc-200 text-zinc-600 font-semibold text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Client / Company</th>
                    <th className="py-3 px-4">Service</th>
                    <th className="py-3 px-4">Budget Range</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Time</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {leads.slice(0, 6).map((lead) => (
                    <tr
                      key={lead.id}
                      className="hover:bg-zinc-50/70 transition-colors"
                    >
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col">
                          <span className="font-semibold text-zinc-900 text-xs">
                            {lead.name}
                          </span>
                          <span className="text-[11px] text-zinc-500">
                            {lead.companyName || lead.email}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="text-xs text-zinc-700 font-medium">
                          {lead.service}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-xs text-zinc-900">
                        {lead.budget}
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border uppercase ${
                            lead.status === "new"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : lead.status === "in_discussion"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : lead.status === "won"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-zinc-100 text-zinc-700 border-zinc-200"
                          }`}
                        >
                          {lead.status.replace("_", " ")}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-zinc-500 text-[11px]">
                        {new Date(lead.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="px-2.5 py-1 text-xs font-medium text-zinc-700 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 rounded transition-colors cursor-pointer"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <AdminModal
          isOpen={Boolean(selectedLead)}
          onClose={() => setSelectedLead(null)}
          title={`Inquiry from ${selectedLead.name}`}
          subtitle={`Submitted on ${new Date(selectedLead.createdAt).toLocaleString()}`}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-zinc-50 border border-zinc-200">
              <span className="text-xs font-semibold text-zinc-800">
                Update Lead Status
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(["new", "contacted", "in_discussion", "won", "lost"] as const).map(
                  (st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => handleStatusChange(selectedLead.id, st)}
                      className={`px-3 py-1 rounded-md text-xs font-semibold capitalize transition-colors cursor-pointer ${
                        selectedLead.status === st
                          ? "bg-zinc-900 text-white shadow-xs"
                          : "bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200"
                      }`}
                    >
                      {st.replace("_", " ")}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                <span className="text-[10px] uppercase font-semibold text-zinc-500 block">Company</span>
                <span className="text-xs font-bold text-zinc-900">{selectedLead.companyName}</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                <span className="text-[10px] uppercase font-semibold text-zinc-500 block">Budget</span>
                <span className="text-xs font-bold text-emerald-700">{selectedLead.budget}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                <span className="text-[10px] uppercase font-semibold text-zinc-500 block">Email</span>
                <a href={`mailto:${selectedLead.email}`} className="text-xs font-medium text-blue-600 hover:underline">
                  {selectedLead.email}
                </a>
              </div>
              <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                <span className="text-[10px] uppercase font-semibold text-zinc-500 block">Phone</span>
                <span className="text-xs font-medium text-zinc-900">{selectedLead.countryCode} {selectedLead.phone}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200 flex flex-col gap-1">
              <span className="text-xs font-semibold text-zinc-800">Project Requirement</span>
              <p className="text-xs text-zinc-700 leading-relaxed whitespace-pre-wrap">
                {selectedLead.requirement}
              </p>
            </div>
          </div>
        </AdminModal>
      )}

      {/* Record Lead Modal */}
      <AdminModal
        isOpen={isAddLeadOpen}
        onClose={() => setIsAddLeadOpen(false)}
        title="Record New Lead"
        subtitle="Manually add a prospect or enterprise deal"
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
              <label className="text-xs font-semibold text-zinc-700">Service Required</label>
              <input
                type="text"
                value={newLeadForm.service}
                onChange={(e) => setNewLeadForm({ ...newLeadForm, service: e.target.value })}
                placeholder="SEO / Web Development"
                className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
              />
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
              onClick={() => setIsAddLeadOpen(false)}
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
