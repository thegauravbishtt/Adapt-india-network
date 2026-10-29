import { redirect } from "next/navigation";
import { allIndustries } from "@/data/industriesData";

export async function generateStaticParams() {
  return allIndustries.map((ind) => ({ slug: ind.slug }));
}

export default function IndustryDetailPage() {
  redirect("/services");
}
