"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Settings,
  Save,
  CheckCircle2,
  AlertTriangle,
  Server,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { useToast } from "@/components/admin/ToastNotification";
import type { AgencySettings } from "@/lib/db";

export default function AdminSettingsPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [smtpConfigured, setSmtpConfigured] = useState(false);
  const [nodeEnv, setNodeEnv] = useState("development");

  const [formData, setFormData] = useState<AgencySettings>({
    agencyName: "Owlio Works",
    tagline: "A Global SEO & Growth Engine for Startups",
    notificationEmail: "owlioworks@gmail.com",
    supportPhone: "+91 78382 40941",
    address: "Saket, New Delhi, India 110062",
    currency: "USD ($)",
    emailAlertsEnabled: true,
    maintenanceMode: false,
    adminEmail: "owlioworks@gmail.com",
  });

  const fetchSettings = async () => {
    try {
      const authRes = await fetch("/api/admin/auth/me");
      if (!authRes.ok) {
        router.push("/admin/login");
        return;
      }

      const res = await fetch("/api/admin/settings");
      const data = await res.json();
      if (data.settings) {
        setFormData((prev) => ({
          ...prev,
          ...data.settings,
        }));
      }
      setSmtpConfigured(Boolean(data.smtpConfigured));
      setNodeEnv(data.nodeEnv || "development");
      setLoading(false);
    } catch {
      router.push("/admin/login");
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast("Agency settings updated successfully!", "success");
      } else {
        toast("Failed to update settings", "error");
      }
    } catch {
      toast("Error saving settings", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-zinc-300 border-t-zinc-900 rounded-full animate-spin" />
          <span className="text-xs text-zinc-500 font-medium">Loading Settings...</span>
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
          title="Settings"
          subtitle="Agency profile, notification routing, and environment diagnostics"
          onOpenSidebar={() => setSidebarOpen(true)}
        />

        <main className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6 max-w-3xl mx-auto w-full">
          {/* Admin Credentials Info Card (.env Controlled) */}
          <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-2xs flex flex-col gap-3.5">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <h2 className="text-sm font-bold text-zinc-900">
                  Admin Credentials (.env Controlled)
                </h2>
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                Active Session
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200 flex flex-col justify-between">
                <span className="text-[10px] uppercase font-semibold text-zinc-500">Admin Login Email</span>
                <span className="font-bold text-zinc-900 text-xs mt-1">
                  owlioworks@gmail.com
                </span>
                <span className="text-[11px] text-zinc-400 mt-0.5 font-mono">ADMIN_EMAIL</span>
              </div>

              <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200 flex flex-col justify-between">
                <span className="text-[10px] uppercase font-semibold text-zinc-500">Admin Password Source</span>
                <span className="font-bold text-zinc-900 text-xs mt-1">
                  Configured in .env.local
                </span>
                <span className="text-[11px] text-zinc-400 mt-0.5 font-mono">ADMIN_PASSWORD</span>
              </div>
            </div>
          </div>

          {/* System Diagnostics */}
          <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-2xs flex flex-col gap-3.5">
            <div className="flex items-center gap-2.5 pb-2.5 border-b border-zinc-100">
              <Server className="w-4 h-4 text-zinc-600" />
              <h2 className="text-sm font-bold text-zinc-900">
                System Diagnostics
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-semibold text-zinc-500">SMTP Mailer</span>
                  <span className="text-xs font-semibold text-zinc-900 mt-0.5">
                    {smtpConfigured ? "Connected" : "Dev Mock Log"}
                  </span>
                </div>
                {smtpConfigured ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                )}
              </div>

              <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-semibold text-zinc-500">Database</span>
                  <span className="text-xs font-semibold text-emerald-700 mt-0.5">
                    JSON Store / OK
                  </span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>

              <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-semibold text-zinc-500">Environment</span>
                  <span className="text-xs font-mono font-semibold text-zinc-900 mt-0.5 uppercase">
                    {nodeEnv}
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>

          {/* General Profile */}
          <form onSubmit={handleSave} className="bg-white border border-zinc-200 rounded-xl p-5 shadow-2xs flex flex-col gap-4">
            <div className="flex items-center gap-2.5 pb-2.5 border-b border-zinc-100">
              <Settings className="w-4 h-4 text-zinc-600" />
              <h2 className="text-sm font-bold text-zinc-900">
                Agency Details
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-zinc-700">Agency Name</label>
                <input
                  type="text"
                  required
                  value={formData.agencyName}
                  onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                  className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-zinc-700">Tagline</label>
                <input
                  type="text"
                  required
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-zinc-700">Notification Email</label>
                <input
                  type="email"
                  required
                  value={formData.notificationEmail}
                  onChange={(e) => setFormData({ ...formData, notificationEmail: e.target.value })}
                  className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-zinc-700">Support / Phone</label>
                <input
                  type="text"
                  required
                  value={formData.supportPhone}
                  onChange={(e) => setFormData({ ...formData, supportPhone: e.target.value })}
                  className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-zinc-700">Office Address</label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-hidden focus:border-zinc-900"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-zinc-100">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-black text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all shadow-xs disabled:opacity-50 cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{saving ? "Saving..." : "Save Agency Details"}</span>
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
