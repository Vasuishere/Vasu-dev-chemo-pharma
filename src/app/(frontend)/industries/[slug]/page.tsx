import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";

/* ── Industry data ────────────────────────────────────────────── */

type IndustryPage = {
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  image: string;
  sections: {
    heading: string;
    body: string;
  }[];
  specs?: {
    label: string;
    value: string;
  }[];
  benefits: string[];
  servedIndustries: string[];
  faqs: { question: string; answer: string }[];
};

const industryData: Record<string, IndustryPage> = {
  "oil-gas-h2s-scavenger": {
    title: "MEA Triazine H2S Scavenger for Oil & Gas",
    h1: "MEA Triazine H2S Scavenger for Oil & Gas — Manufacturer Direct from India",
    description:
      "Vasudev Chemo Pharma manufactures MEA Triazine 78% H2S scavenger for oil & gas. Direct supply from India with ISO 9001:2015 certification. Request a free sample.",
    keywords: [
      "H2S Scavenger oil gas",
      "MEA Triazine upstream oil gas",
      "hydrogen sulfide removal natural gas",
      "H2S scavenger manufacturer India",
      "MEA Triazine 78 oil and gas",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "The H2S Problem in Oil & Gas",
        body: `Hydrogen sulfide (H2S) is one of the most dangerous gases encountered in oil and gas operations. Even at low concentrations, H2S is acutely toxic — the OSHA permissible exposure limit (PEL) is just 20 ppm, and concentrations above 100 ppm are immediately life-threatening. Beyond personnel safety, H2S causes severe corrosion in pipelines, wellhead equipment, and processing facilities, leading to costly unplanned shutdowns and regulatory penalties.

In upstream production, H2S occurs naturally in sour crude oil and natural gas reservoirs. Midstream and downstream operations face H2S in gas processing, refining, and pipeline transport. Left untreated, H2S corrodes carbon steel infrastructure, contaminates products, and creates compliance failures with API and NACE standards. The cost of inaction — equipment replacement, safety incidents, and environmental fines — far exceeds the cost of effective chemical scavenging.`,
      },
      {
        heading: "How MEA Triazine 78% Solves It",
        body: `MEA Triazine (1,3,5-tri(2-hydroxyethyl)-hexahydro-s-triazine) reacts irreversibly with H2S to form dithiazine, a water-soluble and non-toxic by-product. This reaction is fast, efficient, and works across a wide range of temperatures and pressures encountered in oil and gas operations.

At 78% active concentration, our MEA Triazine delivers maximum scavenging capacity per litre, reducing your chemical consumption and logistics costs. It is effective across upstream wellhead injection, midstream gas sweetening, and downstream refinery off-gas treatment. The product is water-soluble, biodegradable, and does not introduce new environmental hazards into your operations.

MEA Triazine is the industry-standard liquid H2S scavenger for good reason: it is cost-effective, easy to inject via chemical dosing pumps, and does not require special handling equipment beyond standard chemical safety protocols.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "MOQ (Domestic)", value: "220 Kg" },
      { label: "Lead time (Export)", value: "10–15 days" },
      { label: "Lead time (Domestic)", value: "4–5 days" },
    ],
    benefits: [
      "ISO 9001:2015 certified manufacturer",
      "Direct from manufacturer — no middlemen",
      "Near Kandla, Mundra, Hazira ports — fast export",
      "COA, TDS, MSDS available on every order",
      "Free samples available for qualification testing",
      "Technical support for dosage optimisation",
    ],
    servedIndustries: [
      "Natural gas pipelines",
      "Offshore oil platforms",
      "Gas processing plants",
      "Petroleum refineries",
    ],
    faqs: [
      {
        question: "What concentration of MEA Triazine do you supply for oil and gas?",
        answer:
          "We supply MEA Triazine at 78% active concentration, which is the industry standard for oil and gas H2S scavenging. This high concentration maximises scavenging efficiency per litre and reduces overall chemical consumption.",
      },
      {
        question: "Can MEA Triazine be used in sour gas pipelines?",
        answer:
          "Yes. MEA Triazine 78% is widely used for continuous injection into sour gas pipelines to remove H2S. It is effective across typical pipeline operating temperatures and pressures, and the dithiazine by-product remains in the liquid phase.",
      },
      {
        question: "What is the typical dosage of MEA Triazine for H2S removal?",
        answer:
          "Dosage depends on the H2S concentration and flow rate. As a rule of thumb, approximately 4.5 litres of MEA Triazine 78% is required per kilogram of H2S removed. Our technical team can help you calculate the optimal dosage for your specific application.",
      },
      {
        question: "Do you provide free samples for testing?",
        answer:
          "Yes. We provide free samples of MEA Triazine 78% for laboratory and field qualification testing. Contact us with your requirements and we will arrange sample shipment.",
      },
      {
        question: "What export documentation do you provide?",
        answer:
          "Every shipment includes a Certificate of Analysis (COA), Technical Data Sheet (TDS), and Material Safety Data Sheet (MSDS). We also handle all export compliance documentation including customs paperwork, phytosanitary certificates, and dangerous goods declarations as required.",
      },
    ],
  },

  "water-treatment": {
    title: "Triazine H2S Scavenger for Water & Wastewater Treatment",
    h1: "Triazine H2S Scavenger for Water & Wastewater Treatment",
    description:
      "MMA Triazine 40% H2S scavenger for water and wastewater treatment. Safe for municipal systems. Manufactured by Vasudev Chemo Pharma, India.",
    keywords: [
      "MMA Triazine water treatment",
      "H2S scavenger wastewater",
      "triazine for sewage treatment",
      "hydrogen sulfide removal wastewater",
      "MMA Triazine 40 manufacturer",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Waste_Water_Treatment_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "H2S in Water Treatment Systems",
        body: `Hydrogen sulfide is a common problem in wastewater collection systems, treatment plants, and industrial water circuits. It forms when sulphate-reducing bacteria thrive in anaerobic conditions — inside sewer lines, lift stations, digesters, and stagnant holding tanks. The result is foul odour complaints, concrete and metal corrosion, and health risks for maintenance workers.

Municipal authorities and industrial operators face increasing pressure to control H2S emissions at the source. Chemical scavenging with triazine-based products offers an effective, easy-to-deploy solution that works in both batch treatment and continuous dosing scenarios.`,
      },
      {
        heading: "MMA Triazine 40% for Wastewater",
        body: `MMA Triazine (mono-methylamine triazine) at 40% active concentration is specifically formulated for water and wastewater applications. It reacts with dissolved H2S to form a stable, water-soluble by-product that does not re-release hydrogen sulfide.

MMA Triazine 40% is safe for use in municipal wastewater systems and does not introduce harmful residues. Typical dosage ranges from 10–20 ppm depending on H2S levels and system pH. The product can be injected at lift stations, headworks, or directly into collection lines using standard chemical dosing equipment.

Compared to iron-based and oxidiser alternatives, MMA Triazine offers consistent performance across varying pH and temperature conditions, with lower equipment maintenance requirements.`,
      },
    ],
    specs: [
      { label: "Product", value: "MMA Triazine 40%" },
      { label: "Active content", value: "40% (w/w)" },
      { label: "Appearance", value: "Clear liquid" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "MOQ (Domestic)", value: "220 Kg" },
      { label: "Lead time (Export)", value: "10–15 days" },
      { label: "Lead time (Domestic)", value: "4–5 days" },
    ],
    benefits: [
      "ISO 9001:2015 certified manufacturer",
      "Safe for municipal wastewater systems",
      "Direct from manufacturer — competitive pricing",
      "COA, TDS, MSDS with every shipment",
      "Free samples for pilot testing",
      "Technical dosage guidance available",
    ],
    servedIndustries: [
      "Municipal wastewater treatment plants",
      "Industrial effluent treatment",
      "Sewage collection systems",
      "Water recycling facilities",
    ],
    faqs: [
      {
        question: "Is MMA Triazine safe for municipal wastewater systems?",
        answer:
          "Yes. MMA Triazine 40% is widely used in municipal wastewater treatment. The reaction by-products are water-soluble and non-toxic, and the product does not introduce harmful residues into treated water.",
      },
      {
        question: "What dosage of MMA Triazine is needed for wastewater?",
        answer:
          "Typical dosage ranges from 10–20 ppm based on H2S concentration and system conditions. Our technical team can help you optimise dosage based on your specific water chemistry and treatment targets.",
      },
      {
        question: "Can MMA Triazine be used alongside other treatment chemicals?",
        answer:
          "MMA Triazine is compatible with most common wastewater treatment chemicals. However, we recommend consulting our technical team before combining with strong oxidisers or highly acidic chemicals to ensure optimal performance.",
      },
    ],
  },

  "metal-working-fluids": {
    title: "Triazine Biocide for Metal Working Fluids",
    h1: "Triazine Biocide for Metal Working Fluids — MMA & MEA Triazine Supplier",
    description:
      "Triazine biocide for metalworking fluid preservation. Formaldehyde-releasing biocide effective against bacteria, fungi, and algae. Manufactured in India.",
    keywords: [
      "Triazine biocide cutting fluid",
      "metalworking fluid preservative",
      "formaldehyde releasing biocide India",
      "Grotan BK equivalent India",
      "triazine biocide manufacturer",
    ],
    image:
      "https://framerusercontent.com/images/sCJnodXX6iVr5PAmaVz3lhv3l0.webp",
    sections: [
      {
        heading: "Microbial Contamination in Cutting Fluids",
        body: `Metalworking fluids (MWFs) provide an ideal environment for microbial growth. Water-miscible cutting fluids, grinding fluids, and coolants contain organic nutrients and operate at warm temperatures — conditions that promote rapid proliferation of bacteria, fungi, and algae. Uncontrolled microbial contamination leads to foul odours, reduced fluid performance, shortened sump life, skin irritation for operators, and increased disposal costs.

Regular biocide treatment is essential to maintain fluid quality, extend sump life, and protect worker health. Triazine-based biocides offer a proven, cost-effective solution used across the metalworking industry globally.`,
      },
      {
        heading: "How Triazine Acts as a Biocide Preservative",
        body: `Triazine biocides work through a formaldehyde-releasing mechanism. In the aqueous environment of metalworking fluids, triazine slowly hydrolyses to release formaldehyde at controlled, low concentrations. This sustained release provides broad-spectrum antimicrobial activity against bacteria, fungi, and algae without the handling risks associated with free formaldehyde.

Our triazine biocides are functionally equivalent to Grotan BK and other established formaldehyde-releasing preservatives. They are compatible with most water-miscible metalworking fluid formulations and can be used both as an initial charge biocide and for ongoing maintenance dosing.

Recommended dosage is typically 0.1–0.3% by volume for initial charge, with maintenance additions of 0.05–0.1% as needed based on microbiological monitoring. The product is easy to handle, mixes readily with metalworking fluids, and does not adversely affect fluid performance or surface finish quality.`,
      },
    ],
    specs: [
      { label: "Products available", value: "MMA Triazine 40%, MEA Triazine 78%" },
      { label: "Function", value: "Formaldehyde-releasing biocide" },
      { label: "Application", value: "Metalworking fluids, cutting oils, coolants" },
      { label: "Typical dosage", value: "0.1–0.3% (initial), 0.05–0.1% (maintenance)" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "Lead time (Export)", value: "10–15 days" },
    ],
    benefits: [
      "Grotan BK equivalent — proven performance",
      "Broad-spectrum: bacteria, fungi, and algae",
      "Controlled formaldehyde release — safer handling",
      "Compatible with most MWF formulations",
      "Competitive pricing — direct from Indian manufacturer",
      "COA, TDS, MSDS documentation included",
    ],
    servedIndustries: [
      "Automotive machining plants",
      "Aerospace component manufacturing",
      "General metalworking and fabrication",
      "Cutting fluid and coolant formulators",
    ],
    faqs: [
      {
        question: "Is your triazine biocide equivalent to Grotan BK?",
        answer:
          "Yes. Our triazine biocides are functionally equivalent to Grotan BK and other hexahydro-1,3,5-triazine based preservatives. They provide the same formaldehyde-releasing antimicrobial mechanism and are compatible with standard metalworking fluid formulations.",
      },
      {
        question: "What dosage is recommended for cutting fluids?",
        answer:
          "For initial charge, we recommend 0.1–0.3% by volume. Maintenance dosing of 0.05–0.1% should be applied based on regular microbiological monitoring (dip slides or plate counts). Our technical team can help you establish a monitoring and dosing programme.",
      },
      {
        question: "Is triazine biocide safe for operators?",
        answer:
          "Triazine biocides release formaldehyde at controlled, low concentrations — well below levels that would cause workplace exposure concerns when used at recommended dosages. Standard chemical handling precautions (gloves, eye protection) should be observed when adding the concentrate.",
      },
    ],
  },

  "paper-mill": {
    title: "MEA Triazine Slimicide for Pulp & Paper Mills",
    h1: "MEA Triazine Slimicide for Pulp & Paper Mills",
    description:
      "MEA Triazine slimicide for pulp and paper mill biofilm control. Anti-slime agent for paper production. Exported to mills in Vietnam, Thailand, Southeast Asia.",
    keywords: [
      "Triazine slimicide paper mill",
      "biocide pulp and paper",
      "anti-slime agent paper industry",
      "paper mill biocide India",
      "slimicide manufacturer export",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Paper_Mill_Treatment_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "Biofilm and Slime in Paper Production",
        body: `Paper and pulp mills operate extensive water circuits that are highly susceptible to microbial contamination. Warm, nutrient-rich white water systems, stock preparation areas, and paper machine wet ends provide ideal conditions for bacterial growth and biofilm formation. Slime deposits on wires, felts, and machine surfaces cause sheet breaks, holes, spots, and reduced paper quality.

Uncontrolled biofilm accumulation leads to costly unplanned machine shutdowns for cleaning, increased reject rates, and elevated fibre and chemical consumption. Effective slimicide treatment is essential for maintaining production efficiency and product quality.`,
      },
      {
        heading: "Triazine as an Industrial Slimicide",
        body: `MEA Triazine is an effective formaldehyde-releasing slimicide for paper mill applications. It provides sustained antimicrobial activity in the high-volume water circuits of paper machines, controlling bacterial growth and preventing biofilm accumulation on machine surfaces.

The product can be dosed continuously into the white water system or applied as a targeted shock treatment during scheduled cleaning. Its water solubility ensures uniform distribution throughout the water circuit, and the controlled formaldehyde release mechanism provides lasting protection between doses.

MEA Triazine is compatible with common paper mill chemicals including retention aids, sizing agents, and wet-strength resins. It does not cause foaming or interfere with paper machine runnability when used at recommended dosages.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Function", value: "Slimicide / biocide" },
      { label: "Application", value: "White water systems, stock preparation, wet end" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "Lead time (Export)", value: "10–15 days" },
    ],
    benefits: [
      "Effective biofilm and slime control",
      "Compatible with paper mill chemistry",
      "No foaming — safe for paper machines",
      "ISO 9001:2015 certified production",
      "Export experience to Vietnam, Thailand, Southeast Asia",
      "COA, TDS, MSDS documentation provided",
    ],
    servedIndustries: [
      "Kraft and recycled paper mills",
      "Tissue and packaging board production",
      "Pulp manufacturing facilities",
      "Specialty paper manufacturers",
    ],
    faqs: [
      {
        question: "Do you export triazine slimicide to Southeast Asia?",
        answer:
          "Yes. We regularly export MEA Triazine to paper mills in Vietnam, Thailand, Indonesia, and other Southeast Asian countries. Our manufacturing facility near Gujarat ports enables competitive freight rates and reliable lead times of 10–15 days.",
      },
      {
        question: "Will MEA Triazine cause foaming in our paper machine?",
        answer:
          "No. MEA Triazine does not cause foaming when used at recommended dosages. It is compatible with standard paper mill wet-end chemistry including retention aids, sizing agents, and defoamers.",
      },
      {
        question: "What is the recommended dosage for white water systems?",
        answer:
          "Dosage depends on your system volume, temperature, and contamination level. Typical continuous dosing rates range from 50–200 ppm in the white water circuit. Our technical team can help you determine the optimal dosage for your specific mill conditions.",
      },
    ],
  },
};

const SITE_URL = "https://www.vasudevchemopharma.com";

/* ── Static params ────────────────────────────────────────────── */

export function generateStaticParams() {
  return Object.keys(industryData).map((slug) => ({ slug }));
}

/* ── Metadata ─────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = industryData[slug];
  if (!page) return {};

  return {
    title: `${page.title} | Vasudev Chemo Pharma`,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: `${SITE_URL}/industries/${slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE_URL}/industries/${slug}`,
      images: [{ url: page.image }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.image],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

/* ── Page component ───────────────────────────────────────────── */

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = industryData[slug];
  if (!page) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Industries", url: `${SITE_URL}/industries` },
          { name: page.title, url: `${SITE_URL}/industries/${slug}` },
        ]}
      />
      <FAQSchema items={page.faqs} />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel>Industry solutions</SectionLabel>
                <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                  {page.h1}
                </h1>
                <p className="text-secondary text-lg mt-6">{page.description}</p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button href="/contact">Request a quote</Button>
                  <Button href="/contact?subject=sample" variant="outline">
                    Request free sample
                  </Button>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden aspect-[7/4]">
                <Image
                  src={page.image}
                  alt={page.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content sections */}
        {page.sections.map((section, i) => (
          <section
            key={section.heading}
            className={`py-16 ${i % 2 === 0 ? "bg-light" : ""}`}
          >
            <div className="max-w-container mx-auto px-6 lg:px-10">
              <h2 className="font-heading text-h2 font-semibold text-primary mb-6">
                {section.heading}
              </h2>
              {section.body.split("\n\n").map((paragraph, j) => (
                <p
                  key={j}
                  className="text-secondary leading-relaxed mb-4 max-w-3xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* Specifications table */}
        {page.specs && (
          <section className="py-16">
            <div className="max-w-container mx-auto px-6 lg:px-10">
              <h2 className="font-heading text-h2 font-semibold text-primary mb-8">
                Product Specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full max-w-2xl text-left border-collapse">
                  <tbody>
                    {page.specs.map((spec) => (
                      <tr key={spec.label} className="border-b border-gray-200">
                        <td className="py-3 pr-8 font-medium text-primary">
                          {spec.label}
                        </td>
                        <td className="py-3 text-secondary">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Why choose us */}
        <section className="py-16 bg-light">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-heading text-h2 font-semibold text-primary mb-6">
                  Why Choose Vasudev Chemo Pharma
                </h2>
                <div className="space-y-4">
                  {page.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 bg-white rounded-2xl p-4"
                    >
                      <svg
                        width="15"
                        height="10"
                        viewBox="0 0 15 10"
                        fill="none"
                        className="flex-shrink-0"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 5L5.5 9L14 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-accent"
                        />
                      </svg>
                      <span className="text-base text-primary font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries served */}
              <div>
                <h3 className="font-heading text-h4 font-semibold text-primary mb-6">
                  Industries We Serve
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {page.servedIndustries.map((industry) => (
                    <div
                      key={industry}
                      className="bg-white rounded-2xl p-5 text-center"
                    >
                      <span className="text-sm font-medium text-primary">
                        {industry}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h2 font-semibold text-primary mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-light rounded-2xl"
                >
                  <summary className="cursor-pointer p-5 font-medium text-primary list-none flex items-center justify-between">
                    {faq.question}
                    <span className="ml-4 text-accent transition-transform group-open:rotate-45 text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/product"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Browse Products
                </h3>
                <p className="text-sm text-secondary mt-1">
                  View our full chemical product catalogue
                </p>
              </Link>
              <Link
                href="/how-h2s-scavengers-work"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  How H2S Scavengers Work
                </h3>
                <p className="text-sm text-secondary mt-1">
                  Complete technical guide to H2S removal chemistry
                </p>
              </Link>
              <Link
                href="/mea-triazine-vs-mma-triazine"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  MEA vs MMA Triazine
                </h3>
                <p className="text-sm text-secondary mt-1">
                  Which H2S scavenger should you choose?
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="relative rounded-3xl overflow-hidden bg-dark p-12 lg:p-16 text-center">
              <Image
                src="https://framerusercontent.com/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover opacity-30"
              />
              <div className="relative z-10">
                <h2 className="font-heading text-h2 font-semibold text-white mb-4">
                  Ready to solve your H2S challenge?
                </h2>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                  Get a quote, request a free sample, or download our Technical Data Sheet.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button href="/contact">Request a quote</Button>
                  <Button href="/contact?subject=sample" variant="dark">
                    Request free sample
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
