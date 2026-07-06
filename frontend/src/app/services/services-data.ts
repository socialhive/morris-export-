export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  slug: string;
  heroTitle?: string;
  intro: string;
  highlights: string[];
  capabilities: string[];
  faq: { question: string; answer: string }[];
}

export const serviceCategories = [
  {
    title: "Packing & Crating",
    description: "Industrial strength export packing.",
    services: [
      {
        title: "Custom Wooden Crating",
        description: "Engineered specs for any dimension.",
        image: "/images/crating/customcrating.webp",
        slug: "custom-wooden-crating",
        heroTitle: "Custom Wooden Crating",
        intro:
          "Our custom crates are engineered for the realities of international transit, from heavy refinery components to delicate instrumentation.",
        highlights: [
          "ISPM-15 compliant lumber and hardware",
          "Custom blocking and bracing for unusual dimensions",
          "On-site or facility-based build options"
        ],
        capabilities: [
          "Heavy-duty export crating for industrial equipment",
          "Shock, vibration, and moisture protection",
          "Seamless coordination with trucking and ocean freight"
        ],
        faq: [
          {
            question: "Can you build crates for oversized equipment?",
            answer: "Yes. We engineer crates for unusual dimensions, irregular load paths, and high-value machinery that requires custom support structures."
          },
          {
            question: "Do you handle on-site crate fabrication?",
            answer: "We regularly mobilize crews to customer facilities for on-site packing and crating when equipment cannot be moved."
          }
        ]
      },
      {
        title: "Vapor Barrier & Shrinkwrap",
        description: "Plastics protection against moisture and salt.",
        image: "/images/vinyl wrap protection/vinylwrap2.webp",
        slug: "vapor-barrier-shrinkwrap",
        heroTitle: "Vapor Barrier & Shrinkwrap",
        intro:
          "Our wrap systems provide moisture control, corrosion resistance, and weather protection for sensitive cargo in storage or transit.",
        highlights: [
          "VCI and moisture control systems",
          "Heat-shrink plastics for durable outer protection",
          "Tailored application for long-haul export work"
        ],
        capabilities: [
          "Protection against salt air, humidity, and surface corrosion",
          "Secure wrapping for machinery, spares, and finished equipment",
          "Compatible with storage and ocean freight requirements"
        ],
        faq: [
          {
            question: "Is this suitable for long-term storage?",
            answer: "Yes. Our wrap systems are designed for both short transit and extended storage where environmental protection is critical."
          }
        ]
      },
      {
        title: "Onsite Packing",
        description: "We deploy our crews to your facility.",
        image: "/images/onsitepacking/onsitepacking3.webp",
        slug: "onsite-packing",
        heroTitle: "Onsite Packing",
        intro:
          "When cargo cannot easily be moved, our crews bring the packing process directly to your site and execute it with the same standards as our facility teams.",
        highlights: [
          "Mobile packing teams with full materials inventory",
          "Facility-safe execution around active operations",
          "Documentation and crate marks completed on-site"
        ],
        capabilities: [
          "Packing for installed equipment and large assemblies",
          "Full protection and access planning for tight job sites",
          "Reduced handling and chain-of-custody concerns"
        ],
        faq: [
          {
            question: "How far do you travel for on-site packing?",
            answer: "We support customer facilities across the Gulf Coast and regularly mobilize for broader project work when required."
          }
        ]
      },
      {
        title: "Packing & Preservation",
        description: "Long-term protection for sensitive equipment and precision machinery.",
        image: "/images/onsitepacking/onsitepacking3.webp",
        slug: "packing-preservation",
        heroTitle: "Packing & Preservation",
        intro:
          "Packing and preservation combines export-grade packaging with corrosion control and sealed protection for equipment that must remain protected for extended periods.",
        highlights: [
          "VCI films, desiccants, and moisture barriers",
          "Protection for long-term storage and multi-leg shipments",
          "Inspection records and preservation documentation"
        ],
        capabilities: [
          "Corrosion mitigation for machined metal and critical components",
          "Sealed protection for high-value or time-sensitive assets",
          "Custom preservation plans for equipment downtime or storage cycles"
        ],
        faq: [
          {
            question: "What makes preservation different from standard packing?",
            answer: "Preservation focuses on long-duration protection with moisture control and corrosion mitigation, while standard packing is usually designed for a single transit event."
          },
          {
            question: "Can this be performed at our facility?",
            answer: "Yes. Our teams can apply preservation methods on-site when equipment must remain in place during the process."
          }
        ]
      }
    ]
  },
  {
    title: "Logistics & Operations",
    description: "Movement of massive assets.",
    services: [
      {
        title: "Containerization",
        description: "Flat racks, open tops, and standard boxes.",
        image: "/images/containerization/container1.webp",
        slug: "containerization",
        heroTitle: "Containerization",
        intro: "We coordinate the right container solution for your cargo, from standard boxes to specialized openings and flat racks.",
        highlights: [
          "Container planning for OOG and standard freight",
          "Carrier-ready loading and securing",
          "Integrated packing and drayage support"
        ],
        capabilities: [
          "Open-top and flat-rack coordination",
          "Heavy equipment loading support",
          "Documentation for export and inland movement"
        ],
        faq: []
      },
      {
        title: "Heavy Lift & Transloading",
        description: "140K lbs lift capacity on site.",
        image: "/images/crane/crane.webp",
        slug: "heavy-lift-transloading",
        heroTitle: "Heavy Lift & Transloading",
        intro: "Our lift teams and transloading crews move oversized industrial assets with precision and control.",
        highlights: [
          "Certified rigging and lift management",
          "Port and yard transloading support",
          "Execution for complex cargo moves"
        ],
        capabilities: [
          "Heavy lift planning",
          "On-site crane and rigging coordination",
          "Secure transfer to truck, rail, or vessel"
        ],
        faq: []
      },
      {
        title: "Flat Rack Securing",
        description: "Specialized lashing and bracing for flat rack and open-top transport.",
        image: "/images/containerization/container1.webp",
        slug: "flat-rack-securing",
        heroTitle: "Flat Rack Securing",
        intro: "We secure oversized and out-of-gauge cargo on flat racks and open-top containers using engineered lashing and blocking systems built for maritime transit.",
        highlights: [
          "IMO and CTU code compliant securing",
          "Custom blocking, bracing and lashing plans",
          "Survey-ready documentation and load certificate support"
        ],
        capabilities: [
          "Flat rack securing for machinery, steel, and project cargo",
          "Load planning for dynamic sea forces",
          "Carrier and insurance documentation support"
        ],
        faq: [
          {
            question: "What types of cargo do you secure on flat racks?",
            answer: "We secure heavy machinery, pressure vessels, industrial equipment, and other out-of-gauge cargo that requires specialized flat rack or open-top transport solutions."
          },
          {
            question: "Do you provide lashing certificates for shipments?",
            answer: "Yes. Every flat rack shipment is accompanied by a lashing certificate documenting the materials, configuration, and compliance details required by carriers and insurers."
          }
        ]
      }
    ]
  },
  {
    title: "Warehousing",
    description: "Secure staging and storage.",
    services: [
      {
        title: "Bonded Storage",
        description: "Customs compliant staging areas.",
        image: "/images/facilitiesstorage/Secure Facilities1.webp",
        slug: "bonded-storage",
        heroTitle: "Bonded Storage",
        intro: "Our bonded facilities support secure staging, compliance, and project-based inventory control.",
        highlights: [
          "Customs-controlled storage",
          "Secure laydown and staging space",
          "Integrated documentation support"
        ],
        capabilities: [
          "Short- and long-term storage",
          "Controlled access and inventory oversight",
          "Support for export readiness"
        ],
        faq: []
      }
    ]
  }
];

export function findServiceBySlug(slug: string) {
  for (const category of serviceCategories) {
    const service = category.services.find((item) => item.slug === slug);
    if (service) {
      return { categoryTitle: category.title, service };
    }
  }
  return null;
}
