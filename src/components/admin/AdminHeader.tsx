"use client";

import React from "react";
import Link from "next/link";
import { Menu, Plus, Bell } from "lucide-react";

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
  onOpenSidebar: () => void;
  newLeadsCount?: number;
  actionButton?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
}

export default function AdminHeader({
  title,
  subtitle,
  onOpenSidebar,
  newLeadsCount = 0,
  actionButton,
}: AdminHeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-zinc-200 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
      {/* Left Title & Mobile Toggle */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={onOpenSidebar}
          className="lg:hidden p-1.5 text-zinc-600 hover:text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors"
          aria-label="Toggle Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex flex-col">
          <h1 className="text-base sm:text-lg font-bold text-zinc-900 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs text-zinc-500 font-normal">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* New Leads Notification Indicator */}
        <Link
          href="/admin/leads"
          className="relative p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          title="View Inquiries"
        >
          <Bell className="w-4 h-4" />
          {newLeadsCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" />
          )}
        </Link>

        {/* Primary Action Button */}
        {actionButton && (
          <button
            onClick={actionButton.onClick}
            className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-black text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer shadow-xs"
          >
            {actionButton.icon || <Plus className="w-3.5 h-3.5" />}
            <span>{actionButton.label}</span>
          </button>
        )}
      </div>
    </header>
  );
}
