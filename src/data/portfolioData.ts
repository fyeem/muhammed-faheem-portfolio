export interface ProjectScreenshot {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  subtitle: string;
  role: string;
  period: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  screenshots: ProjectScreenshot[];
  features: {
    title: string;
    description: string;
    tags: string[];
  }[];
  architecture: {
    layer: string;
    technologies: string;
    details: string;
  }[];
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  scoreLabel: string;
  scoreValue: string;
  period: string;
  status?: string;
  highlight?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  type: string;
  description: string;
  badge: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  description: string;
  level: string;
  scope: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  items: string[];
}

export const PERSONAL_INFO = {
  name: "Muhammed Faheem Abdul Azeez",
  shortName: "Muhammed Faheem",
  title: "Computer Science Engineering Student & Full-Stack Developer",
  tagline: "Computer Science Engineering student at Lovely Professional University building web applications with Next.js, TypeScript, and PostgreSQL.",
  bio: "Computer Science Engineering student at Lovely Professional University and full-stack developer. Experienced in building full-stack web applications using Next.js, TypeScript, Supabase, and PostgreSQL with transaction-based order processing and administration workflows.",
  location: "Kannur, Kerala • LPU, Punjab",
  email: "faheemmuhammed15@gmail.com",
  phone: "+91-9946453947",
  phoneRaw: "+919946453947",
  whatsappUrl: "https://wa.me/919946453947?text=Hi%20Muhammed%20Faheem,%20I%20came%20across%20your%20portfolio!",
  githubUrl: "https://github.com/fyeem",
  linkedinUrl: "https://www.linkedin.com/in/muhammed-faheem22/",
  cvDownloadUrl: "/Muhammed_Faheem_Abdul_Azeez_CV.docx",
  currentEducation: "B.Tech CSE at Lovely Professional University (Aug 2025 - Ongoing)",
  status: "Available for internships, freelance & full-stack roles",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming and markup languages from my academic and practical coursework.",
    items: ["Python", "C", "C++", "JavaScript", "HTML"],
  },
  {
    category: "Technologies",
    description: "Modern frontend frameworks and styling solutions used in project development.",
    items: ["HTML", "CSS", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Databases / Tools",
    description: "Relational/document databases, version control, and cloud deployment platforms.",
    items: ["MySQL", "MongoDB", "Supabase", "PostgreSQL", "Git", "GitHub", "Vercel"],
  },
  {
    category: "Soft Skills",
    description: "Key collaborative and organizational competencies demonstrated in team projects.",
    items: ["Problem solving", "Team collaboration", "Time management", "Adaptability"],
  },
];

export const FEATURED_PROJECT: Project = {
  title: "Soulent Perfumes",
  subtitle: "Full-Stack E-Commerce Platform",
  role: "Full-Stack Developer",
  period: "Jun 2025 – Aug 2025",
  techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
  githubUrl: "https://github.com/fyeem",
  liveUrl: "https://soulentperfumes.vercel.app",
  highlights: [
    "Built and deployed a full-stack perfume e-commerce platform featuring product catalog, cart, wishlist, checkout, inventory, and search functionality.",
    "Developed a secure admin dashboard enabling product CRUD operations, image management, inventory tracking, and order status management.",
    "Implemented server-side order validation with PostgreSQL transaction-based order processing ensuring data consistency.",
    "Integrated WhatsApp ordering with dynamically generated order details and deployed the application on Vercel.",
  ],
  screenshots: [
    {
      id: "storefront-home",
      title: "Storefront & Catalog Home",
      category: "Storefront",
      description: "Luxury perfume brand storefront with product discovery, category navigation, and modern hero presentation.",
      src: "/images/projects/soulent/storefront-home.png",
      alt: "Soulent Perfumes Storefront Home Page",
    },
    {
      id: "product-detail",
      title: "Product Detail & Size Variants",
      category: "Product Page",
      description: "Interactive product page featuring dynamic size selection (30ml / 50ml), real-time pricing calculation, wishlist toggle, and Add to Bag.",
      src: "/images/projects/soulent/product-detail.png",
      alt: "Soulent Perfumes Product Detail Page",
    },
    {
      id: "cart-drawer",
      title: "Slide-Out Shopping Bag",
      category: "Cart System",
      description: "Slide-out cart drawer with delivery progress bar, item quantity adjustments, live subtotal calculations, and WhatsApp support.",
      src: "/images/projects/soulent/cart-drawer.png",
      alt: "Soulent Perfumes Cart Drawer",
    },
    {
      id: "checkout-page",
      title: "Delivery & Order Details Checkout",
      category: "Checkout Flow",
      description: "Structured shipping address form, customer contact inputs, order item breakdown, and direct order processing.",
      src: "/images/projects/soulent/checkout-page.png",
      alt: "Soulent Perfumes Checkout Page",
    },
    {
      id: "admin-dashboard",
      title: "Admin Executive Dashboard",
      category: "Admin Management",
      description: "Secure management console displaying total order counts, gross sales metrics, active fragrance catalog items, and live order status table.",
      src: "/images/projects/soulent/admin-dashboard.png",
      alt: "Soulent Perfumes Admin Dashboard",
    },
  ],
  features: [
    {
      title: "Product Catalog, Cart & Search",
      description: "Full-stack perfume e-commerce storefront featuring product catalog, cart, wishlist, checkout, inventory, and search functionality.",
      tags: ["Product Catalog", "Cart", "Wishlist", "Checkout", "Inventory", "Search"],
    },
    {
      title: "PostgreSQL Transaction-Based Orders",
      description: "Implemented server-side order validation with PostgreSQL transaction-based order processing ensuring data consistency.",
      tags: ["Server-Side Validation", "PostgreSQL Transactions", "Data Consistency"],
    },
    {
      title: "Secure Admin Dashboard",
      description: "Admin dashboard enabling product CRUD operations, image management, inventory tracking, and order status management.",
      tags: ["Admin Dashboard", "Product CRUD", "Image Management", "Inventory Tracking", "Order Status"],
    },
    {
      title: "WhatsApp Ordering & Vercel Deployment",
      description: "Integrated WhatsApp ordering with dynamically generated order details and deployed the application on Vercel.",
      tags: ["WhatsApp Ordering", "Dynamic Order Details", "Vercel Deployment"],
    },
  ],
  architecture: [
    {
      layer: "Frontend & UI",
      technologies: "Next.js, TypeScript, Tailwind CSS",
      details: "Responsive user interface featuring product catalog browsing, search, cart, and wishlist workflows.",
    },
    {
      layer: "Backend & Logic",
      technologies: "Next.js, TypeScript",
      details: "Server-side order validation, secure admin workflows, and WhatsApp order format generation.",
    },
    {
      layer: "Database",
      technologies: "PostgreSQL & Supabase",
      details: "PostgreSQL transaction-based order processing ensuring inventory and order data consistency.",
    },
    {
      layer: "Deployment",
      technologies: "Vercel",
      details: "Cloud deployment configured for continuous delivery from GitHub repository.",
    },
  ],
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    scoreLabel: "CGPA",
    scoreValue: "6.5",
    period: "Aug 2025 — Ongoing",
    status: "Currently Pursuing",
    highlight: "Focusing on Software Engineering, Data Structures, Algorithms, Web Technologies, and Database Management Systems.",
  },
  {
    institution: "Chembilode Higher Secondary School",
    location: "Kannur, Kerala",
    degree: "Intermediate (Higher Secondary)",
    scoreLabel: "Percentage",
    scoreValue: "78%",
    period: "March 2022 — 2024",
    status: "Completed",
    highlight: "Rigorous academic curriculum with strong grounding in Mathematics, Physics, and Computer Science.",
  },
  {
    institution: "Wadihuda Higher Secondary School",
    location: "Kannur, Kerala",
    degree: "Secondary Education",
    scoreLabel: "Percentage",
    scoreValue: "98%",
    period: "March 2022",
    status: "Completed (Distinction)",
    highlight: "Achieved outstanding distinction with 98% aggregate score across all core subjects.",
  },
];

export const CERTIFICATES_LIST: CertificateItem[] = [
  {
    title: "Basic Motivation and Leadership",
    issuer: "Certified Credential",
    date: "Nov 2025",
    type: "Leadership & Personal Development",
    description: "Training covering strategic leadership, motivational frameworks, team dynamics, and conflict resolution in collaborative project settings.",
    badge: "Leadership & Team Management",
  },
  {
    title: "Cybersmart Volunteer",
    issuer: "Cybersmart Initiative",
    date: "Aug 2025",
    type: "Cybersecurity & Community Awareness",
    description: "Recognition for active participation in promoting digital safety awareness, safe browsing practices, and cyber hygiene in community forums.",
    badge: "Digital Safety & Cyber Hygiene",
  },
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    title: "Smart India Hackathon (SIH)",
    organization: "Ministry of Education & AICTE",
    description: "Participated in Smart India Hackathon (SIH), collaborating on an innovative solution as part of a team-based national-level competition.",
    level: "National-Level Competition",
    scope: "Team-Based Innovation & Problem Solving",
  },
];
