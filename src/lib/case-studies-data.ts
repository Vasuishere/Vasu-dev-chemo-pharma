export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  clientLogo: string;
  image: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  approach: string;
  specs: string[];
  results: string;
  stats: { value: string; label: string }[];
  serviceLink: { href: string; label: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "sour-gas-gathering-h2s-scavenger-optimization",
    category: "Oil and gas treatment",
    title: "Sour gas gathering system H2S scavenger optimization",
    description:
      "Stabilized pipeline-spec gas quality at a sour gathering station by redesigning MEA Triazine injection, contact time, and field monitoring.",
    stat: "68%",
    statLabel: "Fewer off-spec H2S events",
    clientLogo: "https://framerusercontent.com/images/TqbYVzg7ybZyZdS0f5Kul8k3qE.svg",
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
    heroImage:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
    galleryImages: [
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
      "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png",
      "https://framerusercontent.com/images/Hxgnn8KfIJnGioOtBbfYA5iYdQ8.webp",
    ],
    overview:
      "An upstream producer operating a multi-well sour gas gathering network was missing pipeline H2S specification during well changeovers and seasonal production swings. The site relied on conservative chemical over-injection to stay safe, but outlet readings still drifted during excursions and chemical spend was climbing faster than production. The project focused on stabilizing H2S control without adding a large sweetening package.",
    approach:
      "The program combined field sampling, pump calibration checks, injection-point relocation, and a revised MEA Triazine dosing envelope tied to actual H2S load rather than fixed pump settings. A simple contact improvement was added upstream of the custody transfer point, and the operator adopted tighter monitoring of inlet and outlet H2S during high-risk events such as new well tie-ins and separator pressure changes.",
    specs: [
      "Service: Sour gas gathering and pipeline delivery",
      "Treatment chemistry: MEA Triazine 78%",
      "Control method: Continuous injection with outlet H2S verification",
      "Project scope: Injection-point redesign, dosing reset, field monitoring",
      "Primary KPI: Pipeline-spec H2S compliance with lower chemical waste",
    ],
    results:
      "The optimized program reduced H2S excursions significantly while also lowering total chemical consumption. Operators gained a repeatable dosing procedure for upset conditions, and the field team no longer had to rely on blanket over-treatment to stay within sales-gas requirements. The site saw smoother handovers between operations and chemical supply planning became more predictable.",
    stats: [
      { value: "68%", label: "Reduction in off-spec H2S events" },
      { value: "22%", label: "Lower scavenger consumption" },
      { value: "99.5%", label: "Pipeline compliance achieved" },
    ],
    serviceLink: {
      href: "/industries/oil-gas-h2s-scavenger",
      label: "View Oil and Gas Solutions",
    },
  },
  {
    slug: "ptsa-scale-up-alkyd-resin-manufacturer",
    category: "Specialty chemicals",
    title: "PTSA scale-up for alkyd resin manufacturer",
    description:
      "Improved catalyst supply consistency and reduced cycle time for a resin producer using para toluene sulfonic acid in export-grade alkyd batches.",
    stat: "32%",
    statLabel: "Shorter batch cycle",
    clientLogo: "https://framerusercontent.com/images/ZOshmfIPPyIgwc1vt8fg4jl7XPw.svg",
    image:
      "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png",
    heroImage:
      "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png",
    galleryImages: [
      "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png",
      "https://framerusercontent.com/images/NKrt6BfazML4t6STW4J7jw1qHoQ.png",
      "https://framerusercontent.com/images/nwElwJzRsjpV0KeBSkL7mR2bQ.png",
    ],
    overview:
      "A regional alkyd resin manufacturer was expanding export production but was losing time to catalyst variability, repeated QA holds, and inconsistent reactor turnaround. PTSA quality fluctuations were creating avoidable adjustments in the esterification process, forcing production teams to trade speed for reliability. The project centered on improving catalyst consistency and batch execution.",
    approach:
      "The solution combined tighter incoming quality parameters, clarified usage windows for PTSA in the client's recipe set, and a coordinated dispatch plan so production did not switch between inconsistent lots mid-campaign. Technical review focused on acid value control, dosing repeatability, and the handoff between production and QC so operators could make fewer reactive corrections during the batch.",
    specs: [
      "Product: Para toluene sulfonic acid",
      "Application: Alkyd resin catalysis",
      "Focus area: Batch consistency, QC release, and dispatch planning",
      "Process impact: Faster turnaround with fewer rechecks",
      "Commercial impact: More reliable export scheduling",
    ],
    results:
      "The plant reduced batch cycle time, tightened consistency from lot to lot, and cut the number of hold-and-release interventions that had previously slowed shipments. Production planning improved because the catalyst supply became predictable, and the customer was able to schedule export batches with fewer last-minute changes to operating windows.",
    stats: [
      { value: "32%", label: "Batch cycle time reduced" },
      { value: "18%", label: "Lower catalyst adjustment frequency" },
      { value: "3 mo", label: "Consecutive on-time export campaigns" },
    ],
    serviceLink: {
      href: "/service/chemical-manufacturing",
      label: "View Chemical Manufacturing",
    },
  },
  {
    slug: "api-intermediate-solvent-recovery-upgrade",
    category: "Pharma intermediates",
    title: "API intermediate solvent recovery upgrade",
    description:
      "Raised solvent recovery and reduced waste burden in an API intermediate process without changing the core reaction train.",
    stat: "41%",
    statLabel: "Recovered solvent reuse",
    clientLogo: "https://framerusercontent.com/images/dkPEYiQUEC8xGo7JZ3roQZEMCyo.svg",
    image:
      "https://framerusercontent.com/images/NKrt6BfazML4t6STW4J7jw1qHoQ.png",
    heroImage:
      "https://framerusercontent.com/images/NKrt6BfazML4t6STW4J7jw1qHoQ.png",
    galleryImages: [
      "https://framerusercontent.com/images/NKrt6BfazML4t6STW4J7jw1qHoQ.png",
      "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png",
      "https://framerusercontent.com/images/NaB1BTPudXw9U4z7E7pwUp79iic.webp",
    ],
    overview:
      "A pharmaceutical intermediate plant was seeing high solvent loss and elevated waste handling cost during a recurring campaign for an export API intermediate. The chemistry itself was stable, but solvent recovery performance had degraded enough to affect economics and batch release timing. The site needed a process improvement path that would not disrupt validated core reaction steps.",
    approach:
      "The work focused on solvent segregation, recovery-stage discipline, impurity tracking, and tighter alignment between production and QC sampling. By identifying where reusable solvent quality drifted and which operating steps were driving contamination, the plant was able to recover more material safely while maintaining product acceptance. The operational emphasis was on procedural control rather than a full equipment replacement project.",
    specs: [
      "Sector: Pharmaceutical intermediates",
      "Goal: Improve solvent recovery and reduce waste burden",
      "Method: Process review, segregation control, and QC alignment",
      "Constraint: Preserve validated reaction train",
      "Outcome metric: Reuse rate and batch acceptance stability",
    ],
    results:
      "The revised recovery workflow increased solvent reuse, reduced disposal cost, and improved scheduling confidence for repeat campaigns. Because the changes were operational rather than disruptive, the plant implemented them quickly and kept campaign continuity. The customer gained a more stable cost structure without taking on the risk of a major process redesign.",
    stats: [
      { value: "41%", label: "Recovered solvent reused" },
      { value: "27%", label: "Waste handling cost reduced" },
      { value: "99.2%", label: "Batch acceptance maintained" },
    ],
    serviceLink: {
      href: "/service/custom-formulation",
      label: "View Custom Formulation",
    },
  },
  {
    slug: "copper-sulphate-process-debottlenecking",
    category: "Water treatment chemicals",
    title: "Copper sulphate process debottlenecking for water treatment supply",
    description:
      "Debottlenecked crystallization and packaging steps to increase copper sulphate output for industrial water treatment customers.",
    stat: "27%",
    statLabel: "Higher monthly output",
    clientLogo: "https://framerusercontent.com/images/5gEKWg2vllhD1ObP6AQ66ePRw.svg",
    image:
      "https://framerusercontent.com/images/u48JppC0L67MN952GwxQr0v8uY8.webp",
    heroImage:
      "https://framerusercontent.com/images/u48JppC0L67MN952GwxQr0v8uY8.webp",
    galleryImages: [
      "https://framerusercontent.com/images/u48JppC0L67MN952GwxQr0v8uY8.webp",
      "https://framerusercontent.com/images/nwElwJzRsjpV0KeBSkL7mR2bQ.png",
      "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png",
    ],
    overview:
      "A water treatment chemical supplier needed more copper sulphate output from its existing process without compromising crystal quality or packaging reliability. Production had become constrained by a combination of crystallization pacing, moisture variability, and packaging handoff delays. The challenge was to raise throughput with the equipment footprint already in place.",
    approach:
      "The debottlenecking effort focused on the sequence between concentration, crystallization, drying behavior, and final pack-out. By tightening operating windows and aligning packaging release with actual product condition, the plant reduced avoidable hold time between unit operations. The project also improved production visibility so operations and dispatch could work from the same throughput assumptions.",
    specs: [
      "Product: Copper sulphate",
      "Application: Industrial water treatment supply",
      "Primary focus: Crystallization, moisture control, and packaging flow",
      "Constraint: Expand output using existing line footprint",
      "KPI: Monthly tonnage with stable product condition",
    ],
    results:
      "The process changes increased monthly output and improved pack-out consistency, allowing the supplier to meet customer demand with fewer schedule disruptions. Moisture-related rework was reduced, dispatch became faster, and the site achieved a cleaner link between production planning and finished-goods availability.",
    stats: [
      { value: "27%", label: "Increase in monthly output" },
      { value: "35%", label: "Moisture variability reduced" },
      { value: "2 days", label: "Faster average dispatch cycle" },
    ],
    serviceLink: {
      href: "/service/quality-testing-packaging",
      label: "View Quality and Packaging",
    },
  },
];

export const CASE_STUDY_DATA: Record<string, CaseStudy> = Object.fromEntries(
  CASE_STUDIES.map((study) => [study.slug, study])
) as Record<string, CaseStudy>;

export const CASE_STUDY_SLUGS = CASE_STUDIES.map((study) => study.slug);
