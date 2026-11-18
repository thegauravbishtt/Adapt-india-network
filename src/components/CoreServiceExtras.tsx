import React from "react";
import Link from "next/link";

/**
 * Extra, server-rendered sections for the three most important service pages:
 * how to get a leased line connection, an MPLS comparison table, and hand-picked guides.
 */
const GUIDES: Record<string, Array<{ name: string; href: string }>> = {
  "smart-internet-ill": [
    { name: "Leased line vs broadband: which does your office need?", href: "/blog/why-dedicated-internet-leased-lines-matter/" },
    { name: "Documents required for a leased line connection", href: "/blog/leased-line-connection-documents-installation-process/" },
    { name: "Static IP address for business: how to get one", href: "/blog/static-ip-address-for-business-india/" },
    { name: "Dual ISP failover for office", href: "/blog/pan-india-carrier-redundancy-dual-homed-failover/" },
    { name: "Point-to-point vs internet leased line", href: "/blog/point-to-point-leased-line-vs-internet-leased-line/" },
  ],
  "managed-mpls": [
    { name: "SD-WAN vs MPLS: which WAN should your business choose?", href: "/blog/sd-wan-vs-traditional-mpls-enterprise-guide/" },
    { name: "Point-to-point vs internet leased line", href: "/blog/point-to-point-leased-line-vs-internet-leased-line/" },
    { name: "Multi-branch network security checklist", href: "/blog/securing-multi-branch-enterprise-networks/" },
  ],
  "smartflo-sd-wan": [
    { name: "SD-WAN vs MPLS: which WAN should your business choose?", href: "/blog/sd-wan-vs-traditional-mpls-enterprise-guide/" },
    { name: "Dual ISP failover for office", href: "/blog/pan-india-carrier-redundancy-dual-homed-failover/" },
    { name: "Multi-branch network security checklist", href: "/blog/securing-multi-branch-enterprise-networks/" },
  ],
};

const wrap = "w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 border-b border-gray-200 text-left";

function LeasedLineSteps() {
  const steps = [
    ["Share your address and needs", "Tell us the office address, number of users and whether you need static IPs or a backup line."],
    ["Feasibility check", "We check which carriers already have fibre in your building, or how far a new fibre run has to go."],
    ["Proposal and paperwork", "You receive options, then submit the application form and company documents."],
    ["Fibre and installation", "The carrier brings fibre to your floor and installs its equipment, with building approval where needed."],
    ["Testing and handover", "Speed and static IPs are tested, your firewall is connected, and you get the circuit ID and support contacts."],
  ];
  return (
    <section className={`${wrap} bg-gray-50`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How to get a leased line connection for your business</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 mb-8">
          Whether you call it an internet leased line, an ILL connection, a dedicated internet line or an enterprise leased line, the steps are the same.
        </p>
        <ol className="grid gap-4 md:grid-cols-5">
          {steps.map(([t, d], i) => (
            <li key={t} className="rounded-xl border border-gray-200 bg-white p-4">
              <span className="text-xs font-mono font-bold text-[#E31E24]">STEP {i + 1}</span>
              <h3 className="font-bold text-gray-900 mt-1 mb-1 text-sm sm:text-base">{t}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5">
          <h3 className="font-bold text-gray-900 mb-2">Documents usually needed</h3>
          <p className="text-sm text-gray-700">
            Customer application form, company PAN, GST certificate, proof of business registration, proof of the installation
            address, an authorisation letter for the signatory, and the signatory's photo ID. See the full{" "}
            <Link href="/blog/leased-line-connection-documents-installation-process/" className="font-semibold text-[#E31E24] hover:underline">
              leased line documents and installation guide
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function MplsComparison() {
  const rows = [
    ["Where traffic travels", "Carrier's private network", "Internet links, encrypted", "Public internet, encrypted"],
    ["Best for", "Banks, regulated firms, data centre links", "Many branches, cloud apps", "A few small sites"],
    ["Link failure at a site", "Down unless a second circuit is ordered", "Moves to another link automatically", "Down until the line is fixed"],
    ["Traffic priority", "Class of Service from the carrier", "Rules per application", "Limited"],
    ["New site rollout", "Depends on the carrier's fibre", "Can start on broadband or 4G/5G", "Quick, on any internet line"],
  ];
  return (
    <section className={`${wrap} bg-white`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">MPLS vs SD-WAN vs internet VPN</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 mb-6">
          Three common ways to connect offices across India. Many businesses use MPLS at head office and data centres and SD-WAN at branches.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="py-3 px-4"> </th>
                <th className="py-3 px-4">MPLS VPN</th>
                <th className="py-3 px-4">SD-WAN</th>
                <th className="py-3 px-4">Internet VPN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {rows.map(([k, a, b, c]) => (
                <tr key={k}>
                  <td className="py-3 px-4 font-medium text-gray-900">{k}</td>
                  <td className="py-3 px-4">{a}</td>
                  <td className="py-3 px-4">{b}</td>
                  <td className="py-3 px-4">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Guides({ slug }: { slug: string }) {
  const g = GUIDES[slug];
  if (!g) return null;
  return (
    <section className={`${wrap} bg-white`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Guides to help you decide</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {g.map((x) => (
            <li key={x.href}>
              <Link href={x.href} className="block rounded-lg border border-gray-200 p-4 text-sm sm:text-base font-semibold text-gray-900 hover:border-[#E31E24] hover:text-[#E31E24]">
                {x.name} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function CoreServiceExtras({ slug }: { slug: string }) {
  if (!GUIDES[slug]) return null;
  return (
    <>
      {slug === "smart-internet-ill" && <LeasedLineSteps />}
      {slug === "managed-mpls" && <MplsComparison />}
      <Guides slug={slug} />
    </>
  );
}
