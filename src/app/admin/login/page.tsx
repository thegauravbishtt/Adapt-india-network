"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/admin/ToastNotification";

export default function AdminLoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Authentication failed. Check your credentials.");
        setLoading(false);
        return;
      }

      toast("Welcome back! Authentication successful.", "success");
      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 bg-[#fafafa]">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Brand Header */}
        <Link href="/" className="flex items-center gap-2.5 mb-8">
          <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center font-bold text-sm text-white shadow-xs">
            OW
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-base text-zinc-900 tracking-tight leading-none">
              Owlio Works
            </span>
            <span className="text-[11px] text-zinc-500 font-medium mt-0.5">
              Admin Portal
            </span>
          </div>
        </Link>

        {/* Login Card */}
        <div className="w-full bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-zinc-900">
              Sign In
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              Enter your admin credentials to access the management portal.
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-5 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@owlioworks.com"
                  className="w-full bg-white border border-zinc-200 rounded-lg pl-9 pr-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-700">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white border border-zinc-200 rounded-lg pl-9 pr-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full bg-zinc-900 hover:bg-black text-white py-2.5 px-4 rounded-lg font-semibold text-xs transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 cursor-pointer shadow-xs"
            >
              {loading ? (
                <span>Signing in...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Return to website */}
        <Link
          href="/"
          className="mt-6 text-xs text-zinc-500 hover:text-zinc-800 transition-colors font-medium"
        >
          ← Return to public website
        </Link>
      </div>
    </div>
  );
}
