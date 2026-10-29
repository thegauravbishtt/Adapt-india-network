import type { Metadata } from "next";
import { ToastProvider } from "@/components/admin/ToastNotification";

export const metadata: Metadata = {
  title: "Admin Portal | Adapt India Network",
  description: "Adapt India Network Management & Control Panel",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white antialiased">
        {children}
      </div>
    </ToastProvider>
  );
}
