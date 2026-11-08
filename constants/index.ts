import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Python",
    image: "python.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SQL",
    image: "mysql-icon.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Power BI",
    image: "power-bi-icon.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Excel",
    image: "excel.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Azure",
    image: "azure.svg",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/abadmustafa/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Abad-87",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Matplotlib",
    image: "Matplotlib.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Seaborn",
    image: "seaborn.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Power BI",
    image: "power-bi-icon.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Excel",
    image: "excel.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "Figma.svg",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Python",
    image: "python.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SQL",
    image: "mysql-icon.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Apache Spark",
    image: "Apache_Spark_logo.svg",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Pandas",
    image: "Pandas.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "NumPy",
    image: "numpy.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Scikit-learn",
    image: "scikit-learn.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Jupyter",
    image: "jupyter.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Google Colab",
    image: "colab.svg",
    width: 75,
    height: 75,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Azure",
    image: "azure.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Git",
    image: "Git.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "GitHub",
    image: "GitHub.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "VS Code",
    image: "vscode.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Netlify",
    image: "netlify-icon.svg",
    width: 75,
    height: 75,
  },
] as const;

export const PROJECTS = [
  {
    title: "International Airline Passengers — Forecasting",
    description: "Multi-sheet Excel workbook analysing 1949–1960 airline data. Features SARIMA-driven forecasts, Holt-Winters smoothing, dark-themed KPI dashboard with sparklines.",
    image: "/Images/Multi Airlines.png",
    link: "#",
    category: ["excel"],
    tags: ["Excel", "Pivot Tables", "Power Query", "Forecasting"],
    badge: "Advanced Excel"
  },
  {
    title: "Spotify Streaming Intelligence Dashboard",
    description: "An interactive Spotify analytics dashboard that explores music trends, artist performance, genre popularity, and audio features to uncover data-driven insights into streaming behavior and song success.",
    image: "/Images/Spotify.png",
    link: "#",
    category: ["powerbi"],
    tags: ["Power BI", "DAX", "Data Modeling", "ETL"],
    badge: "Advanced Power BI"
  },
  {
    title: "No Cap, Just Stats: Airbnb Analytics Dashboard",
    description: "An interactive Airbnb analytics dashboard that uncovers pricing trends, booking insights, host performance, and customer preferences through dynamic visualizations and business intelligence.",
    image: "/Images/AirBnb.webp",
    link: "#",
    category: ["powerbi"],
    tags: ["Power BI", "DAX", "Drill-Through", "Row-Level Security"],
    badge: "Airbnb Analytics"
  },
  {
    title: "Workforce Decoded",
    description: "HR analytics dashboard that explores employee demographics, attrition, performance, and engagement to help organizations make smarter, data-driven workforce decisions.",
    image: "/Images/HR Analytics .png",
    link: "#",
    category: ["powerbi"],
    tags: ["Power BI", "DAX", "Attrition Analysis", "Power Query"],
    badge: "HR Analytics"
  },
  {
    title: "Beyond the Runway: Boeing Insights",
    description: "An end-to-end Boeing capstone analytics project that visualizes aircraft production, supply chain metrics, and business KPIs to support data-driven decision-making in the aerospace industry.",
    image: "/Images/Boeing.jpeg",
    link: "#",
    category: ["python","powerbi","sql","excel"],
    tags: ["Python", "Power BI", "Power Query", "Data Modeling"],
    badge: "Capstone In Aerospace Analytics"
  },
  {
    title: "Superstore Business Intelligence Suite — End-to-End Capstone",
    description: "A comprehensive business intelligence project on 9,994-order Superstore data following the full analytics lifecycle.",
    image: "/Images/Super Store.png",
    link: "#",
    category: ["excel", "sql", "powerbi", "python"],
    tags: ["Excel", "SQL", "Power BI", "Python"],
    badge: "Full Stack Analytics"
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Abad-87",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/abadmustafa/",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email Me",
        icon: null,
        link: "mailto:abadmustafa280@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About Me",
    link: "#about-me",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Tools",
    link: "#tools",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Abad-87/space-portfolio",
};
