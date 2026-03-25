import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

/*
 * "We Supply Globally" section on the homepage.
 * Links to all 14 country landing pages — critical for internal linking
 * and building geographic topical authority for MEA Triazine 78%.
 */

const regions = [
  {
    heading: "Middle East & GCC",
    countries: [
      { name: "UAE", flag: "\u{1F1E6}\u{1F1EA}", href: "/supply/mea-triazine-78/uae", port: "Jebel Ali", transit: "3-5 days" },
      { name: "Saudi Arabia", flag: "\u{1F1F8}\u{1F1E6}", href: "/supply/mea-triazine-78/saudi-arabia", port: "Jubail / Jeddah", transit: "5-8 days" },
      { name: "Qatar", flag: "\u{1F1F6}\u{1F1E6}", href: "/supply/mea-triazine-78/qatar", port: "Hamad Port", transit: "3-5 days" },
      { name: "Kuwait", flag: "\u{1F1F0}\u{1F1FC}", href: "/supply/mea-triazine-78/kuwait", port: "Shuwaikh", transit: "4-6 days" },
      { name: "Oman", flag: "\u{1F1F4}\u{1F1F2}", href: "/supply/mea-triazine-78/oman", port: "Sohar", transit: "2-4 days" },
      { name: "Iraq", flag: "\u{1F1EE}\u{1F1F6}", href: "/supply/mea-triazine-78/iraq", port: "Umm Qasr", transit: "5-8 days" },
    ],
  },
  {
    heading: "Asia-Pacific",
    countries: [
      { name: "Vietnam", flag: "\u{1F1FB}\u{1F1F3}", href: "/supply/mea-triazine-78/vietnam", port: "Ho Chi Minh City", transit: "8-12 days" },
      { name: "Thailand", flag: "\u{1F1F9}\u{1F1ED}", href: "/supply/mea-triazine-78/thailand", port: "Laem Chabang", transit: "7-10 days" },
    ],
  },
  {
    heading: "Americas",
    countries: [
      { name: "United States", flag: "\u{1F1FA}\u{1F1F8}", href: "/supply/mea-triazine-78/united-states", port: "Houston, TX", transit: "25-30 days" },
      { name: "Brazil", flag: "\u{1F1E7}\u{1F1F7}", href: "/supply/mea-triazine-78/brazil", port: "Santos", transit: "20-25 days" },
    ],
  },
  {
    heading: "Africa & Others",
    countries: [
      { name: "Egypt", flag: "\u{1F1EA}\u{1F1EC}", href: "/supply/mea-triazine-78/egypt", port: "Alexandria", transit: "10-14 days" },
      { name: "Iran", flag: "\u{1F1EE}\u{1F1F7}", href: "/supply/mea-triazine-78/iran", port: "Bandar Abbas", transit: "3-5 days" },
      { name: "Jordan", flag: "\u{1F1EF}\u{1F1F4}", href: "/supply/mea-triazine-78/jordan", port: "Aqaba", transit: "7-10 days" },
      { name: "Russia", flag: "\u{1F1F7}\u{1F1FA}", href: "/supply/mea-triazine-78/russia", port: "Novorossiysk", transit: "15-20 days" },
    ],
  },
];

export default function GlobalSupplySection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>We supply globally</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-primary mt-4">
            MEA Triazine 78% — delivered to 14+ countries
          </h2>
          <p className="text-secondary text-base mt-4 max-w-2xl mx-auto">
            As a <strong>direct manufacturer of MEA Triazine 78%</strong>,
            Vasudev Chemo Pharma ships factory-direct from Gujarat, India to
            oil &amp; gas, petrochemical, and water treatment buyers worldwide.
          </p>
        </div>

        {/* Region groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {regions.map((region) => (
            <div key={region.heading}>
              <h3 className="font-heading text-lg font-semibold text-primary mb-4 pb-2 border-b border-gray-200">
                {region.heading}
              </h3>
              <div className="flex flex-col gap-2">
                {region.countries.map((country) => (
                  <Link
                    key={country.href}
                    href={country.href}
                    className="flex items-center justify-between rounded-xl px-4 py-3 transition-colors hover:bg-light group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{country.flag}</span>
                      <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
                        {country.name}
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-xs text-secondary">
                      <span>{country.port}</span>
                      <span className="rounded-full bg-light px-2.5 py-0.5 font-medium text-accent group-hover:bg-accent/10">
                        {country.transit}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/supply/mea-triazine-78"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-sm font-medium px-8 py-3.5 rounded-full transition-colors"
          >
            View all country supply pages
          </Link>
          <p className="text-secondary text-sm mt-4">
            Need a country not listed?{" "}
            <Link href="/contact" className="text-accent hover:underline font-medium">
              Contact us
            </Link>{" "}
            for custom supply arrangements.
          </p>
        </div>
      </div>
    </section>
  );
}
