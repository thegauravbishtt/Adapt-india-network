import type { Metadata } from "next";
import SolutionLanding from "../../../components/SolutionLanding";
import { ixPage } from "../../../data/solutionPages";
import { pageMetadata, seoTitle } from "../../../lib/seo";

const path = "/services/internet-exchange-peering/";

export const metadata: Metadata = pageMetadata({
  title: seoTitle(ixPage.metaTitle),
  description: ixPage.metaDescription,
  path,
  image: ixPage.image,
  keywords: [
    "internet exchange point india",
    "internet exchange mumbai",
    "internet exchange hyderabad",
    "peering services delhi",
    "internet peering bengaluru",
    "ip transit india",
  ],
});

export default function InternetExchangePage() {
  return (
    <SolutionLanding
      page={ixPage}
      path={path}
      serviceType="Internet Exchange Connectivity and Peering"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services/" },
        { name: ixPage.name, path },
      ]}
      relatedTitle="Exchange locations"
      related={[
        { name: "Mumbai", href: "/locations/mumbai/" },
        { name: "Delhi", href: "/locations/delhi/" },
        { name: "Chennai", href: "/locations/chennai/" },
        { name: "Hyderabad", href: "/locations/hyderabad/" },
        { name: "Bengaluru", href: "/locations/bengaluru/" },
        { name: "Kolkata", href: "/locations/kolkata/" },
      ]}
    />
  );
}
