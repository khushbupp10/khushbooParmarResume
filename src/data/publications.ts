export type PublicationType = "journal" | "conference" | "workshop" | "preprint";

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: PublicationType;
  abstract: string;
  doi?: string;
  url?: string;
  citation: string;
  tags: string[];
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    id: "manet-routing-energy-2015",
    title: "Comparative Analysis of Routing Protocols in MANETs for Energy Efficiency",
    authors: ["Khushboo P. Parmar", "Bhavisha Shah", "Asmita Patel", "Parita Savaliya"],
    venue: "IOSR Journal of Computer Engineering (IOSR-JCE)",
    year: 2015,
    type: "journal",
    abstract:
      "A comparative study of routing protocols in Mobile Ad-hoc Networks (MANETs) with a focus on energy efficiency, evaluating protocol behavior to identify approaches that reduce energy consumption in dynamic network environments.",
    url: "https://scholar.google.com/citations?user=0UHDuD8AAAAJ&hl=en",
    citation:
      "Parmar, K. P., Shah, B., Patel, A., & Savaliya, P. (2015). Comparative Analysis of Routing Protocols in MANETs for Energy Efficiency. IOSR Journal of Computer Engineering (IOSR-JCE).",
    tags: ["MANETs", "routing protocols", "energy efficiency", "networking"],
    featured: true,
  },
  {
    id: "image-compression-lossless-2015",
    title: "Survey of Image Compression Method: Lossless Approach",
    authors: [
      "Khushboo P. Parmar",
      "Diya V. Chudasama",
      "Dipali Patel",
      "Kruti J. Dangarwala",
      "Shaishav Shah",
    ],
    venue: "International Journal of Engineering Research & Technology (IJERT)",
    year: 2015,
    type: "journal",
    abstract:
      "A survey of lossless image compression methods, reviewing techniques that reduce image size while preserving full data integrity for accurate reconstruction.",
    url: "https://scholar.google.com/citations?user=0UHDuD8AAAAJ&hl=en",
    citation:
      "Parmar, K. P., Chudasama, D. V., Patel, D., Dangarwala, K. J., & Shah, S. (2015). Survey of Image Compression Method: Lossless Approach. International Journal of Engineering Research & Technology (IJERT), 4(3).",
    tags: ["image compression", "lossless compression", "survey"],
    featured: true,
  },
];

export const publicationTypes: { value: PublicationType | "all"; label: string }[] = [
  { value: "all", label: "All Types" },
  { value: "journal", label: "Journal Articles" },
  { value: "conference", label: "Conference Papers" },
  { value: "workshop", label: "Workshop Papers" },
  { value: "preprint", label: "Preprints" },
];
