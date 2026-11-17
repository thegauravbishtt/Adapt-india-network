import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionLanding from "../../../components/SolutionLanding";
import { industryPages, getIndustryPage } from "../../../data/solutionPages";
import { pageMetadata, seoTitle } from "../../../lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industryPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) return { title: "Not Found", robots: { index: false, follow: true } };
  return pageMetadata({
    title: seoTitle(page.metaTitle),
    description: page.metaDescription,
    path: `/industries/${page.slug}/`,
    image: page.image,
    keywords: [page.focusKeyword],
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) notFound();
  const path = `/industries/${page.slug}/`;
  return (
    <SolutionLanding
      page={page}
      path={path}
      serviceType="Business Internet and Network Services"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries/" },
        { name: page.name, path },
      ]}
      relatedTitle="Other industries we connect"
      related={industryPages
        .filter((p) => p.slug !== page.slug)
        .map((p) => ({ name: p.name, href: `/industries/${p.slug}/` }))}
    />
  );
}
