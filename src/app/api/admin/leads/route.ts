import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getLeads, saveLead, updateLeadStatus, deleteLead } from "@/lib/db";

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const statusFilter = searchParams.get("status");
  const query = searchParams.get("q")?.toLowerCase();

  let leads = await getLeads();

  if (statusFilter && statusFilter !== "all") {
    leads = leads.filter((l) => l.status === statusFilter);
  }

  if (query) {
    leads = leads.filter(
      (l) =>
        l.name.toLowerCase().includes(query) ||
        l.email.toLowerCase().includes(query) ||
        l.companyName.toLowerCase().includes(query) ||
        l.service.toLowerCase().includes(query) ||
        l.requirement.toLowerCase().includes(query)
    );
  }

  return NextResponse.json({ leads });
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const lead = await saveLead(body);
    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to create lead" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, status, notes } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "Lead ID required" }, { status: 400 });
    }

    const updated = await updateLeadStatus(id, status, notes);
    if (!updated) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead: updated });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to update lead" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Lead ID required" }, { status: 400 });
    }

    const success = await deleteLead(id);
    if (!success) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to delete lead" }, { status: 500 });
  }
}
