// Folder to hold all the portofolio content. Changing these will take effect everywhere else

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  python,
  java,
  c,
  ruby,
  tailwind,
  nodejs,
  git,
  figma,
  iai,
  powergen,
  statistics_indo,
  utmist,
  ea,
  sds,
  ncsc,
  ncsclogo,
  argumentor,
  shopwise,
  mlpaper,
  luciddream,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Front-End Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Ruby",
    icon: ruby,
  },
];

const experiences = [
  {
    title: "Web Designer",
    company_name: "New College Student Council",
    icon: ncsclogo,
    iconBg: "#FFFFFF",
    date: "September 2023 - April 2024",
    points: [
      "Developed a fully responsive website for the university’s New College students with over 6000 user engagements, complete with software accessibility standards",
      "Maintained the website to keep it up to date with ongoing events, elections, office hour schedules",
    ],
  },
  {
    title: "University of Toronto - Machine Intelligence Team",
    company_name: "Computational Social Science Laboratory",
    icon: utmist,
    iconBg: "#FFFFFF",
    date: "September 2023 - April 2024",
    points: [
      "Collaborated with engineers & co-founders of tech firms, AI startups to share career insights & tech tools with the University’s Machine Learning community through workshops, conferences, & hackathons",
      "Reached out to company representatives to secure over 10 000 dollars in sponsorships & funding for events",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "Computational Social Science Laboratory",
    icon: iai,
    iconBg: "#FFFFFF",
    date: "September 2023 - Present",
    points: [
      "Designed & developed an experiment interface in React to measure participant’s creative performance (divergent thinking)",
      "Lead the front-end development of the Maia Chess platform for collecting ML research data using Next.js, Sass",
    ],
  },
  {
    title: "Technical Artist",
    company_name: "Electronic Arts",
    icon: ea,
    iconBg: "#FFFFFF",
    date: "May 2024 - August 2024",
    points: [
      "Developed & maintained tools to support the production of EA Sports Titles for FY 2025 - FC25, NHL25, UFC6",
      "Accelerated, augmented, & optimized content creator development workflows"
    ],
  }
  // {
  //   title: "Front-End Web Developer",
  //   company_name: "Students Developing Software Team",
  //   icon: sds,
  //   iconBg: "#E6DEDD",
  //   date: "September 2023 - December 2023",
  //   points: [
  //     "Developing and maintaining an interactive Web application to aid students in course planning.",
  //     "Collaborating with cross-functional teams to expand the tool to cover all 700 undergraduate program areas at the University of Toronto.",
  //     "Aided in migrating the app's Front-End to React.js, unifying graph viewing and drawing tools, and improving exporting generation.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial: "Testimonial 1.",
    name: "Reference 1",
    designation: "Position",
    company: "Company 1",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Testimonial 2.",
    name: "Reference 2",
    designation: "Position",
    company: "Company 2",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "Testimonial 3",
    name: "Reference 3",
    designation: "Position",
    company: "Company 3",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ArguMentor",
    description:
      "Web application that harnesses GPT-4 to simulate real-life debates on user inputted topics. Challenging users to critically evaluate & identify inaccuracies. Providing an innovative way for students of all levels to revise.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: argumentor,
    source_code_link: "https://devpost.com/software/temptalk-pdw2o6",
  },
  {
    name: "ShopWise",
    description:
      "Web application that web scrapes top 5 products on Amazon, uses integrated GPT-4 to analyze them and their reviews to provide a comprehensive summary of each one’s pros & cons. Configured a Chatbot using the Cohere model that users can engage in conversation with for specific inquiries.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "GPT-4",
        color: "pink-text-gradient",
      },
    ],
    image: shopwise,
    source_code_link: "https://devpost.com/software/shopwise-cf75sd",
  },
  {
    name: "New College Student Council Website",
    description:
      "Website for the University of Toronto New College Student Council, showcasing current events, council members, constitution, etc. Fully responsive and up to date with software accessibility standards.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: ncsc,
    source_code_link: "https://newcollegestudentcouncil.netlify.app/",
  },
  {
    name: "LucidDream.ai",
    description:
      "An application designed to bring storytelling and creativity to your fingertips. By simply entering text prompts, users can generate an entire storybook to read, store, share. Code was written in Clean Architecture & adheres to SOLID Principles. ",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "GPT-4",
        color: "green-text-gradient",
      },
      {
        name: "Swing",
        color: "pink-text-gradient",
      },
    ],
    image: luciddream,
    source_code_link: "https://github.com/vsahni3/LucidDream.ai",
  },
  {
    name: "ML Research Paper",
    description:
      "Investigated the feasibility of utilizing Python's Sci-kit Learn Machine Learning algorithms to predict future stock prices and generate profits for individual retail investors. Data cleaning with Pandas, Numpy.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Sci-kit Learn",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: mlpaper,
    source_code_link:
      "https://github.com/jvcent/Research-/blob/main/ML%20Stocks%20Research%20Paper.pdf",
  },
];

export { services, technologies, experiences, testimonials, projects };
