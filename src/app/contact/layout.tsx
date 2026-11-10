import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { pageMetadata, absoluteUrl, breadcrumbSchema } from "../../lib/seo";

const TITLE = "Contact Adapt India Network | Leased Line Enquiry Delhi NCR";
const DESCRIPTION =
  "Get a leased line, SD-WAN or MPLS quote for your office in Delhi, Gurgaon, Noida or anywhere in India. Call +91 82874 79961 or email info@adapt-india.net.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/contact/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: TITLE,
            description: DESCRIPTION,
            url: absoluteUrl("/contact/"),
            inLanguage: "en-IN",
            about: { "@id": absoluteUrl("/#organization") },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact/" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
