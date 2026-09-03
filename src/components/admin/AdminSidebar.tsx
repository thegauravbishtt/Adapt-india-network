"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  Mail,
  Settings,
  LogOut,
  ExternalLink,
  X,
} from "lucide-react";

interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  newLeadsCount?: number;
}

export default function AdminSidebar({
  isOpen,
  onClose,
  newLeadsCount = 0,
}: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      label: "Leads & CRM",
      href: "/admin/leads",
      icon: Users,
      badge: newLeadsCount > 0 ? `${newLeadsCount}` : null,
      badgeColor: "bg-zinc-900 text-white",
    },
    {
      label: "Blog & Articles",
      href: "/admin/blogs",
      icon: FileText,
      badge: null,
    },
    {
      label: "Subscribers",
      href: "/admin/subscribers",
      icon: Mail,
      badge: null,
    },
    {
      label: "Settings",
      href: "/admin/settings",
      icon: Settings,
      badge: null,
    },
  ];

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch {
      router.push("/admin/login");
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-60 bg-white border-r border-zinc-200 flex flex-col justify-between transition-transform duration-200 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Header & Brand */}
        <div>
          <div className="h-16 px-5 flex items-center justify-between border-b border-zinc-100">
            <Link href="/admin" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center font-bold text-xs text-white">
                OW
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-zinc-900 leading-tight">
                  Owlio Works
                </span>
                <span className="text-[11px] text-zinc-500 font-medium">
                  Admin Workspace
                </span>
              </div>
            </Link>

            <button
              onClick={onClose}
              className="lg:hidden text-zinc-400 hover:text-zinc-700 p-1 rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="p-3 flex flex-col gap-1">
            <div className="px-3 pt-2 pb-1 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
              Navigation
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-zinc-100 text-zinc-900 font-semibold"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? "text-zinc-900" : "text-zinc-500"
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        item.badgeColor || "bg-zinc-100 text-zinc-700"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-3 border-t border-zinc-100 flex flex-col gap-2">
          {/* Public Website Link */}
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 text-xs font-medium transition-colors"
          >
            <span>View Public Site</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </Link>

          {/* Profile & Logout */}
          <div className="flex items-center justify-between pt-2 px-2 border-t border-zinc-100">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center font-bold text-xs text-zinc-800 shrink-0">
                A
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-medium text-zinc-900 truncate">Administrator</span>
                <span className="text-[10px] text-zinc-500 truncate">admin@owlioworks.com</span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="Log out"
              className="p-1.5 text-zinc-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
