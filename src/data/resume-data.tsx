import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rohit Nandi",
  initials: "RN",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bangalore",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 2 years of experience in working with companies all around the world.",
  avatarUrl:
    "https://media.licdn.com/dms/image/C4D03AQHvzXIBprD7Jw/profile-displayphoto-shrink_400_400/0/1659526447945?e=1710979200&v=beta&t=wUiHXXBbICu-GGFE8wOY-TxAruftul3DhkErL5zCbpE",
  personalWebsiteUrl: "https://rohitnandi.xyz",
  contact: {
    email: "rohitnandi01234@gmail.com",
    tel: "+919564240093",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RockingThor",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohitnandi/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/oirohit",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Midnapore College",
      degree: "Bachelor's Degree in Computer Science",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Wipro",
      link: "https://www.wipro.com/",
      badges: ["In-Office"],
      title: "Backend Developer",
      logo: ClevertechLogo,
      start: "2023",
      end: "Ongoing",
      description:
        "Created scalable and robust software solution. Developed, maintained REST APIs and middlewares. Technologies: NodeJS, Express, Fastify, AWS, TypeScript, GraphQL, Postgressql, Prisma",
    },
    {
      company: "Wipro",
      link: "https://www.wipro.com/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: ParabolLogo, //change
      start: "2022",
      end: "2023",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Fastify",
    "GraphQL",
    "React/Next.js",
    "AWS",
    "Postgressql",
    "Prisma",
    "MongoDB",
  ],
  projects: [
    {
      title: "Hangout Server",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Prisma",
        "postgressql",
        "Websocket",
        "Webhooks",
        "Auth.js",
      ],
      description: "A platform to communicate with peers/ Clone of Discord",
      logo: ConsultlyLogo,
      link: {
        label: "discord-rohit.vercel.app",
        href: "https://discord-rohit.vercel.app/",
      },
    },
    {
      title: "Ecommerce Store",
      techStack: ["Side Project", "TypeScript", "Next.js", "Redux", "Strapi"],
      description: "An ecommerce store for buying shoes/ NIKE store clone",
      logo: MonitoLogo,
      link: {
        label: "rohit-nike.vercel.app",
        href: "https://rohit-nike.vercel.app/",
      },
    },
    {
      title: "IRCTC Extension",
      techStack: [
        "Side Project",
        "React.js",
        "Typescript",
        "Browser Extension",
      ],
      description:
        "Browser extension that helps people to prefil their data while booking Tatkal tickets",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/RockingThor/irctcExtension",
      },
    },
    {
      title: "Rick and Morti Wiki",
      techStack: ["Side Project", "React.js", "Javascript"],
      description: "An Wiki for Rick and Morti characters",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/RockingThor/Rick-Morty-Wiki",
      },
    },
  ],
} as const;
