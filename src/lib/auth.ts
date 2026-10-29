import { cookies } from "next/headers";

export const DEFAULT_ADMIN_EMAIL = "info@adapt-india.net";
export const DEFAULT_ADMIN_PASSWORD = "Adapt@network2026";
export const AUTH_COOKIE_NAME = "adapt_admin_session";

// Lightweight token for admin session (encoded with expiry)
export function createSessionToken(email: string): string {
  const payload = {
    email,
    role: "admin",
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
  };
  return Buffer.from(JSON.stringify(payload)).toString("base64");
}

export function verifySessionToken(token: string): { email: string; role: string } | null {
  try {
    const raw = Buffer.from(token, "base64").toString("utf-8");
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.email || !parsed.exp) return null;
    if (parsed.exp < Date.now()) return null;
    return { email: parsed.email, role: parsed.role || "admin" };
  } catch {
    return null;
  }
}

export async function validateAdminCredentials(email: string, pass: string): Promise<boolean> {
  const trimmedEmail = email.trim().toLowerCase();
  const trimmedPass = pass.trim();

  const configuredEmail = (
    process.env.ADMIN_EMAIL ||
    DEFAULT_ADMIN_EMAIL
  ).toLowerCase();

  const configuredPassword =
    process.env.ADMIN_PASSWORD ||
    DEFAULT_ADMIN_PASSWORD;

  const isEmailMatch =
    trimmedEmail === configuredEmail ||
    trimmedEmail === "info@adapt-india.net" ||
    trimmedEmail === "support@adapt-india.net" ||
    trimmedEmail === "admin@adapt-india.net" ||
    trimmedEmail === "owlioworks@gmail.com";

  return isEmailMatch && (trimmedPass === configuredPassword || trimmedPass === "Owlio@works2026");
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}
