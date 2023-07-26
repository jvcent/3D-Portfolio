// Folder to hold all the portofolio content. Changing these will take effect everywhere else

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
  iai,
  powergen,
  statistics_indo,
  sds,
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
    title: "Experiences",
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
    title: "Back-End Development Intern",
    company_name: "Powergen Software",
    icon: powergen,
    iconBg: "#383E56",
    date: "April 2023 - June 2023",
    points: [
      "Developing real-time web applications using C#, ASP.NET, and SignalR.",
      "Created REST APIs using PHP, Laravel to connect with MySQL & MSSQL databases.",
      "Designed aesthetically pleasing UI/UX for mobile applications using FlutterFlow.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Statistics Indonesia",
    icon: statistics_indo,
    iconBg: "#E6DEDD",
    date: "July 2023 - August 2023",
    points: [
      "Maintaining the company website and implementing UI/UX improvements.",
      "Implementing new website features and functionality using HTML + CSS.",
      "Implementing responsive design on small devices and ensuring cross-browser compatibility.",
      "Participating in software reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Intelligent Adaptive Interventions Laboratory",
    icon: iai,
    iconBg: "#383E56",
    date: "September 2023 - April 2024",
    points: [
      "Web development using HTML, CSS, Javascript for MOOClet software framework used in Mental Health America treatment modules.",
      "Assisted in optimizing the Statistically Considerate Bandit Algorithms and other statistical tools used in the Lab.",
      "Assisted Professor & Graduates students in documentation, note-taking, & survey development.",
    ],
  },
  {
    title: "Front-End Web Developer",
    company_name: "Students Developing Software Team",
    icon: sds,
    iconBg: "#E6DEDD",
    date: "September 2023 - December 2023",
    points: [
      "Developing and maintaining an interactive Web application to aid students in course planning.",
      "Collaborating with cross-functional teams to expand the tool to cover all 700 undergraduate program areas at the University of Toronto.",
      "Aided in migrating the app's Front-End to React.js, unifying graph viewing and drawing tools, and improving exporting generation.",
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
