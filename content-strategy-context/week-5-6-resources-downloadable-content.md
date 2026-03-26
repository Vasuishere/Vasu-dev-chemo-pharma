# Week 5-6: Resources & Downloadable Content

**Brand:** Vasudev Chemo Pharma  
**Product:** MEA Triazine 78% H2S Scavenger (CAS 4719-04-4)  
**Primary source docs:** `seo-plan-mea-triazine-78-h2s-scavenger.md`, `content-strategy-context/internal-linking-plan.md`  
**Purpose:** Turn the Week 5-6 plan into production-ready templates for country pages, industry pages, blog posts, and resource/download pages with exact anchor text and placement guidance.

---

## 1. Week 5-6 Deliverables

Create these four resource pages during Week 5-6:

| URL | Primary Intent | Primary CTA |
|---|---|---|
| `/resources/mea-triazine-technical-datasheet` | Product specs and download support | Request a quote |
| `/resources/mea-triazine-safety-data-sheet` | Safety/compliance support | Request custom documentation |
| `/resources/h2s-scavenger-dosing-guide` | Technical education and calculator support | Contact technical team |
| `/resources/import-compliance-guide` | Country-specific import/compliance guidance | Request country-specific support |

Each resource page must:
- Link back to the product pillar: `/supply/mea-triazine-78`
- Include at least one educational link: `/how-h2s-scavengers-work`
- Include at least one conversion link: `/contact`
- Link to relevant country pages where compliance or import context matters
- Support PDF downloads without becoming orphan pages

---

## 2. Global Internal Linking Rules

Apply these rules to every template below:

1. The first mention of `MEA Triazine 78%` links to `/supply/mea-triazine-78`.
2. The first mention of a country links to `/supply/mea-triazine-78/[country]` when a country page exists.
3. The first mention of an industry links to `/industries/[slug]` when an industry page exists.
4. Put links inside body copy, not only in nav, footer, or related-articles blocks.
5. Link only the first relevant mention in a section unless the user journey clearly needs a second CTA.
6. Every page must contain a link to `/contact`.
7. Every page should be reachable within three clicks from the homepage.

Approved anchor style:
- Use descriptive anchors such as `MEA Triazine 78%`, `H2S scavenging in oil and gas`, `download full technical datasheet`
- Do not use `click here`, `learn more`, or generic `read more`

---

## 3. Country Page Template

**URL pattern:** `/supply/mea-triazine-78/[country]`  
**Primary keyword pattern:** `MEA Triazine 78% supplier [Country]`

### 3.1 Required Internal Links

| Section | Exact Anchor Text | Target URL | Placement Guidance |
|---|---|---|---|
| Opening paragraph | `MEA Triazine 78%` | `/supply/mea-triazine-78` | First product mention in the first 100 words |
| Why Vasudev section | `about our manufacturing` | `/about` | End of the bullet list or closing sentence of the section |
| Major operator/field subsection 1 | `H2S scavenging in oil and gas` | `/industries/oil-gas-h2s-scavenger` | First sentence that describes upstream or midstream use |
| Major operator/field subsection 2 | `gas sweetening solutions` | `/applications/gas-sweetening` | First sentence that discusses treatment method or process fit |
| Industry vertical subsection 3 | Use the exact destination page topic as anchor | `/applications/[slug]` or `/industries/[slug]` | First natural mention of the secondary use case |
| Product specifications | `download full technical datasheet` | `/resources/mea-triazine-technical-datasheet` | Immediately below the specification table |
| Chemistry section | `learn more about H2S scavenger chemistry` | `/how-h2s-scavengers-work` | Closing sentence of the chemistry explainer |
| Alternatives/comparison section | `detailed MEA vs MMA Triazine comparison` | `/mea-triazine-vs-mma-triazine` | End of the comparison paragraph |
| Logistics section | `contact us for CIF pricing to [Port]` | `/contact` | Final sentence after transit time and Incoterm details |
| Also Available In | `MEA Triazine 78% Supplier [Neighbor Country]` | `/supply/mea-triazine-78/[neighbor-country]` | List 3-5 neighboring or cluster pages |
| CTA section | `request pricing` | `/contact` | Primary CTA button or final paragraph |

### 3.2 Country Page Markdown Scaffold

```markdown
# MEA Triazine 78% Supplier [Country] | Direct Manufacturer | Vasudev Chemo Pharma

## H2S Scavenger Supply to [Country]
[Opening paragraph. In the first 100 words, link `MEA Triazine 78%` to `/supply/mea-triazine-78`.]

## Why [Country] Operators Choose Vasudev Chemo Pharma
- Direct manufacturer with no middlemen
- 78% active concentration for consistent field performance
- ISO 9001:2015 aligned production and batch consistency
- Delivery to [Port Name] with practical transit planning
- Competitive bulk pricing for drums, IBCs, and larger orders

[Close the section with `about our manufacturing` -> `/about`.]

## MEA Triazine 78% Applications in [Country]
### [Major Operator or Field 1]
[Add 2-3 sentences and place `H2S scavenging in oil and gas` -> `/industries/oil-gas-h2s-scavenger` on the first relevant mention.]

### [Major Operator or Field 2]
[Add 2-3 sentences and place `gas sweetening solutions` -> `/applications/gas-sweetening` on the first process-focused mention.]

### [Secondary Vertical]
[Add 2-3 sentences and link the first relevant use case to `/applications/[slug]` or `/industries/[slug]`.]

## Product Specifications
[Insert technical table.]

[Immediately under the table, add `download full technical datasheet` -> `/resources/mea-triazine-technical-datasheet`.]

## How MEA Triazine 78% Removes H2S
[Add a short mechanism summary.]

[Close with `learn more about H2S scavenger chemistry` -> `/how-h2s-scavengers-work`.]

## Why MEA Triazine Over Alternatives?
[Add short comparison copy.]

[Close with `detailed MEA vs MMA Triazine comparison` -> `/mea-triazine-vs-mma-triazine`.]

## Logistics and Supply to [Country]
- Port: [Port Name]
- Transit time from India: [X-Y days]
- Packaging: 200L drums, 1000L IBC, bulk
- Incoterms: FOB, CIF, DDP as applicable

[Close with `contact us for CIF pricing to [Port]` -> `/contact`.]

## Regulatory Compliance in [Country]
[Summarize certifications, import expectations, and buyer documentation.]

## [Native Language] Keyword Section
[Add translated terms, local naming variants, and buyer-language support notes.]

## Also Available In
- [MEA Triazine 78% Supplier Neighbor 1](/supply/mea-triazine-78/[neighbor-1])
- [MEA Triazine 78% Supplier Neighbor 2](/supply/mea-triazine-78/[neighbor-2])
- [MEA Triazine 78% Supplier Neighbor 3](/supply/mea-triazine-78/[neighbor-3])

## Frequently Asked Questions
[Add 5-7 FAQs. Where relevant, answers may link back to the product pillar, resources, or contact page.]

## Get a Quote for MEA Triazine 78% in [Country]
[Use `request pricing` -> `/contact` as the final CTA anchor.]
```

### 3.3 Country Page Placement Notes

- The first paragraph should explicitly position Vasudev Chemo Pharma as a direct manufacturer.
- The technical datasheet link should sit directly below the specification table, not buried in a footer-style resources list.
- The comparison link works best after discussing MEA vs MMA, solid scavengers, or amine scrubbers.
- The country cluster links should match geography:
  - GCC: UAE, Qatar, Kuwait, Oman, Saudi Arabia, Iraq
  - Asia-Pacific: Vietnam, Thailand
  - Americas: USA, Brazil
  - Middle East extended: Iran, Iraq, Jordan, Egypt

---

## 4. Industry Page Template

**URL pattern:** `/industries/[slug]` or `/applications/[slug]`

### 4.1 Required Internal Links

| Section | Exact Anchor Text | Target URL | Placement Guidance |
|---|---|---|---|
| H2S challenge section | `understand H2S scavenger chemistry` | `/how-h2s-scavengers-work` | First explanatory paragraph about the technical problem |
| Solution section | `MEA Triazine 78% specifications` | `/supply/mea-triazine-78` | First product-focused sentence introducing the solution |
| Applications section | Use the application page title as anchor | `/applications/[slug]` | First mention of each sub-use case |
| Global supply section | `MEA Triazine 78% supply to [Country]` | `/supply/mea-triazine-78/[country]` | Mention 3-4 priority countries for that industry |
| Case study section | Use the case-study title as anchor | `/case-study/[slug]` | First line of the proof block |
| Technical resources section | `view all technical resources` | `/resources` | First sentence of the downloads/resources block |
| CTA section | `request industry-specific consultation` | `/contact` | Primary CTA button and last paragraph |

### 4.2 Industry Page Markdown Scaffold

```markdown
# MEA Triazine 78% for [Industry] | H2S Scavenger Solutions | Vasudev Chemo Pharma

## [Industry] H2S Challenges
[Open with the industry problem and link `understand H2S scavenger chemistry` -> `/how-h2s-scavengers-work` in the first explanatory paragraph.]

## How MEA Triazine 78% Solves [Industry] H2S Problems
[Introduce the product and link `MEA Triazine 78% specifications` -> `/supply/mea-triazine-78` on the first product-focused mention.]

## Applications Within [Industry]
- [Application Anchor 1](/applications/[slug-1])
- [Application Anchor 2](/applications/[slug-2])
- [Application Anchor 3](/applications/[slug-3])

[These anchors should match the sub-use-case wording on the page.]

## Global Supply for [Industry] Operations
[Mention the most relevant countries and link the first mention of each target market.]

- [MEA Triazine 78% supply to Country 1](/supply/mea-triazine-78/[country-1])
- [MEA Triazine 78% supply to Country 2](/supply/mea-triazine-78/[country-2])
- [MEA Triazine 78% supply to Country 3](/supply/mea-triazine-78/[country-3])

## Case Studies
- [Case study title](/case-study/[slug])

## Technical Resources
[Open this block with `view all technical resources` -> `/resources`.]

## Request Industry-Specific Consultation
[Use `request industry-specific consultation` -> `/contact` as the main CTA.]
```

### 4.3 Industry Page Placement Notes

- Put the product pillar link early. Industry pages are support pages, so they should reinforce the product hub quickly.
- Country links belong in a market-availability or supply section, not in a random paragraph.
- If an industry page references compliance-heavy buying questions, add a secondary link to `/resources/import-compliance-guide`.
- If the page discusses dosing, add a contextual link to `/resources/h2s-scavenger-dosing-guide`.

---

## 5. Blog Post Template

**Purpose:** Support topical authority, country relevance, and conversion without feeling like a sales page.

### 5.1 Core Blog Linking Rules

| Blog Type | Required Links | Suggested Anchor Pattern |
|---|---|---|
| H2S chemistry guide | `/how-h2s-scavengers-work`, `/supply/mea-triazine-78` | `how H2S scavengers work`, `MEA Triazine 78%` |
| Country market report | `/supply/mea-triazine-78/[country]`, `/supply/mea-triazine-78` | `MEA Triazine 78% supplier [Country]`, `MEA Triazine 78%` |
| Industry trend article | `/industries/[slug]`, `/supply/mea-triazine-78` | `[Industry] H2S scavenging`, `MEA Triazine 78%` |
| Product comparison article | `/mea-triazine-vs-mma-triazine`, `/compare`, `/supply/mea-triazine-78` | `MEA vs MMA Triazine comparison`, `compare H2S scavenger products`, `MEA Triazine 78%` |
| Dosing or technical guide | `/resources`, `/supply/mea-triazine-78`, `/applications/[slug]` | `technical resources`, `MEA Triazine 78%`, `[application topic]` |
| Import or compliance guide | `/supply/mea-triazine-78/[country]`, `/resources` | `MEA Triazine 78% supplier [Country]`, `import compliance guide` |

### 5.2 Required Internal Links

| Section | Exact Anchor Text | Target URL | Placement Guidance |
|---|---|---|---|
| Opening paragraph | `MEA Triazine 78%` | `/supply/mea-triazine-78` | First product mention in the first 100 words |
| First industry mention | Use the industry page topic as anchor | `/industries/[slug]` | First natural industry mention in the body |
| First country mention | Use the country page title or keyword as anchor | `/supply/mea-triazine-78/[country]` | First natural market mention in the body |
| Secondary keyword section | Use a comparison or education-focused anchor | `/mea-triazine-vs-mma-triazine` or `/how-h2s-scavengers-work` | End of the first substantive H2 section |
| Additional keyword section | Use the application topic as anchor | `/applications/[slug]` | First relevant process or use-case mention |
| Related Articles block | Use full article titles | Existing blog URLs | Add exactly 3 contextual links near the end |
| CTA block | `request a quote` and `MEA Triazine 78%` | `/contact` and `/supply/mea-triazine-78` | Final conversion box |

### 5.3 Blog Post Markdown Scaffold

```markdown
# [Blog Title With Primary Keyword]

[Opening paragraph. In the first 100 words, link `MEA Triazine 78%` -> `/supply/mea-triazine-78`.]

## [Secondary Keyword H2]
[Add body copy. Link the first industry mention to `/industries/[slug]`. Link the first country mention to `/supply/mea-triazine-78/[country]` when relevant.]

[Close the section with a contextual link to `/how-h2s-scavengers-work` or `/mea-triazine-vs-mma-triazine`.]

## [Long-Tail Keyword H2]
[Add body copy and link the first relevant application mention to `/applications/[slug]`.]

## [Additional Keyword Variant H2]
[Add body copy and link to the most relevant resource, comparison, or country page.]

### Related Articles
- [Article Title 1](/blog/[slug-1])
- [Article Title 2](/blog/[slug-2])
- [Article Title 3](/blog/[slug-3])

### Ready to Order MEA Triazine 78%?
[Use `request a quote` -> `/contact` and a secondary product link back to `/supply/mea-triazine-78`.]
```

### 5.4 Blog Placement Notes

- Do not wait until the conclusion to add the product pillar link.
- If the post is a market report, the country page should appear in the first substantial section, not only in related articles.
- Related Articles links should be editorially relevant; do not use generic placeholders in production.
- The CTA box should include both a conversion link and a product hub link.

---

## 6. Resource Page Template

**Resource hub role:** Support downloads, technical trust, and assisted conversions.

### 6.1 Required Internal Links for Resource Pages

| Section | Exact Anchor Text | Target URL | Placement Guidance |
|---|---|---|---|
| Intro paragraph | `MEA Triazine 78% product page` | `/supply/mea-triazine-78` | First product reference in the intro |
| Education block | `learn the fundamentals` | `/how-h2s-scavengers-work` | First educational sentence after the download summary |
| Country/compliance block | `compliance guide for [Country]` | `/supply/mea-triazine-78/[country]` | Use only when the resource references local import requirements |
| CTA block | `request custom documentation` | `/contact` | Final CTA or sticky sidebar CTA |

### 6.2 Resource Page Markdown Scaffold

```markdown
# [Resource Title]

## Download Overview
[Introduce the file and link `MEA Triazine 78% product page` -> `/supply/mea-triazine-78` in the opening paragraph.]

## What This Document Covers
[Summarize what the reader will get.]

[Add `learn the fundamentals` -> `/how-h2s-scavengers-work` after the summary.]

## Related Markets or Compliance Notes
[When needed, link `compliance guide for [Country]` -> `/supply/mea-triazine-78/[country]`.]

## Need Additional Documentation?
[Use `request custom documentation` -> `/contact`.]
```

### 6.3 Resource-Specific Notes

| Resource URL | Recommended Supporting Links |
|---|---|
| `/resources/mea-triazine-technical-datasheet` | Product pillar, dosing guide, contact |
| `/resources/mea-triazine-safety-data-sheet` | Product pillar, contact, import compliance guide |
| `/resources/h2s-scavenger-dosing-guide` | Product pillar, gas sweetening page, contact |
| `/resources/import-compliance-guide` | Product pillar, 3-5 country pages, contact |

---

## 7. Publishing Checklist

- One clear primary keyword per page template
- Product pillar link included early
- Contact link included before the final section ends
- At least one contextual body link, not just related-links blocks
- Resource link placed where the user expects it:
  - Under specs for datasheet links
  - Near compliance content for import/compliance links
  - Near process discussion for dosing or chemistry links
- Anchor text matches the destination topic exactly enough to feel natural
- No orphan pages after publishing

---

## 8. Recommended Production Order

1. Publish the four resource pages.
2. Update country pages to add the technical datasheet and chemistry links.
3. Update industry pages to add resource and country-support links.
4. Update priority blog posts so each one links to the product pillar plus one country or industry page.
5. Run an internal-link crawl and confirm the product pillar remains the most-linked page in the cluster.
