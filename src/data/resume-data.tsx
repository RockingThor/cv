import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rohit Nandi",
  initials: "RN",
  location: "Kolkata, India",
  locationLink: "https://maps.app.goo.gl/eCFM3dHXMm9C5aa19",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Frontend-focused Full Stack Engineer specializing in high-performance
      React applications, scalable Node.js services, and real-time collaboration
      systems. Experienced in technical architecture design and remote team
      collaboration.
    </>
  ),
  avatarUrl:
    "https://scontent.fccu16-1.fna.fbcdn.net/v/t39.30808-6/466360951_1204196907323741_6742943793329444171_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=w6Da-rx0Fy0Q7kNvgHGW8Fh&_nc_zt=23&_nc_ht=scontent.fccu16-1.fna&_nc_gid=AYcmr63GtBimW_1rOPli5Uy&oh=00_AYCggPIsGz0WszwrhNairW0fvPU0OFttKoNxuocUfyP7Xg&oe=67547319",
  personalWebsiteUrl: "https://rohitnandi.com",
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
        url: "https://x.com/oirohit",
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
      company: "Groundzero",
      link: "https://parabol.co",
      badges: ["Remote", "React", "Node.js"],
      title: "Senior Software Engineer",
      logo: ParabolLogo,
      start: "2024",
      end: null,
      description: (
        <>
          Senior Software Engineer at Groundzero. Working on a cutting-edge data
          analytics platform that empowers businesses to unlock the power of
          their data.
        </>
      ),
    },
    {
      company: "Wipro",
      link: "https://www.nokia.com",
      badges: [
        "On Site",
        "React",
        "Typescript",
        "Node.JS",
        "AWS",
        "Jest",
        "Agile",
      ],
      title: "Frontend Developer → Fullstack Developer",
      logo: NSNLogo,
      start: "2022",
      end: "2024",
      description: (
        <>
          Started as a frontend developer, switched to fullstack development.
          <ul className="list-inside list-disc">
            <li>
              Developed and optimized over 50 responsive web pages using ReactJS
              and Next.js, ensuring seamless performance across all devices.
            </li>
            <li>
              Delivered a complex 9-page claim form using React.js (frontend)
              and Node.js (backend), reducing user submission errors by 30%
              through intuitive UI design and robust server-side logic.
            </li>

            <li>
              Leveraged Redux and Context API for dynamic state handling,
              ensuring glitch-free performance for over 200,000 daily users
            </li>
            <li>
              {" "}
              Implemented robust security features, resolving 95% of identified
              vulnerabilities, and ensuring compliance with GDPR and ISO27001
              standards
            </li>
            <li>
              Integrated Jest-based automated testing and GitHub Actions
              pipelines, reducing deployment errors by 50%.
            </li>
            <li>
              Reduced server resource utilization by 35% by implementing caching
              mechanisms (Redis) and optimizing database queries in Node.js
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "Javascript",
    "CSS",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Redis",
    "PostgreSQL",
    "AWS",
    "MongoDB",
    "Docker",
    "System Architecture",
  ],
  projects: [
    {
      title: "Hangout Server",
      techStack: ["TypeScript", "Next.js", "AWS", "PostgreSQL"],
      description:
        "A full-stack hangout platform, built with Next.js, AWS, and PostgreSQL",
      logo: MonitoLogo,
      link: {
        label: "rohitnandi.com",
        href: "https://github.com/RockingThor",
      },
    },
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC",
    //     "Tailwind CSS",
    //     "PostgreSQL",
    //     "Redis",
    //   ],
    //   description:
    //     "Platform for online consultations with real-time video meetings and scheduling",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "consultly.com",
    //     href: "https://consultly.com/",
    //   },
    // },
    // {
    //   title: "Minimalist CV",
    //   techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
    //   description:
    //     "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "Minimalist CV",
    //     href: "https://github.com/BartoszJarocki/cv",
    //   },
    // },
  ],
} as const;
