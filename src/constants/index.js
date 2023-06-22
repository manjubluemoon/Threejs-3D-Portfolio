import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "M365 Architect",
    icon: web,
  },
  {
    title: "Azure Architect",
    icon: mobile,
  },
  {
    title: "Blochchain Administrator",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cloud Solution Architect",
    company_name: "Biocon Limited",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2011 - Present",
    points: [
      "Manage all offerings that are part of O365 / M365 subscription as the Global Administrator for the tenant.",
      "Collaborating with cross-functional teams including designers, product managers, to architect the solution.",
      "Serve as SME for communication platforms Email Messaging, Teams, OneDrive, Azure.",
      "Rollout of Microsoft Teams,Enterprise mobility Leading Performer and Project owner of office 365 migration.",
    ],
  },
  {
    title: "Blockchain Administrator",
    company_name: "Boochis Tech",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Blockchain Foundation, Process and Development from IBM and Kerala Blockchain Academy.",
      "Certified Cloud Security Professional (CCSP).",
      "Microsoft Certified Solution Expert Cloud Platform and Infrastructure.",
      "Contributing to open source projects.",
    ],
  },
  {
    title: "Hyper Ledger Fabric",
    company_name: "Boochis Tech",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2019 - Present",
    points: [
      "Developing own permissioned blockchain concept for the supply chain use case.",
      "Deployment of Hyper Ledger on Kubernetes platform.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Azure and M365 Security",
    company_name: "Biocon Limited",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2011 - Present",
    points: [
      "Securing Azure Identities hybrid with on premise AD infrastructure.",
      "Data managemnet including Azure/M365 e-Discovery, Content management.",
      "Implementing Conditional Access Policies to protect access of cloud workloads.",
      ".",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
