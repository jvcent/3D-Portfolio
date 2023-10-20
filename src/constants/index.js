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
  sds,
  markus,
  courseography,
  mlpaper,
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
    title: "Full-Stack Development Intern",
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
      "Maintained & Improved the main website’s UI/UX to meet modern accessibility standards for the 2000+ government employees that use it daily with React, Figma. ",
      "Implementing responsive design on small devices and ensuring cross-browser compatibility.",
      "Conducting sentiment analysis by webscraping social media & online news articles using Python.",
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
      "Optimized the Statistically Considerate Bandit Algorithms & other statistical tools used in the Lab to improve productivity and streamline data pipelines by 43%",
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
    name: "MarkUs",
    description:
      "Web application for the submission and grading of student assignments. Provides TAs with simple tools for giving high quality feedback to students, as well as a straight-forward interface for students to submit work.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Ruby",
        color: "pink-text-gradient",
      },
    ],
    image: markus,
    source_code_link: "https://github.com/MarkUsProject/Markus",
  },
  {
    name: "Courseography",
    description:
      "A set of interactive tools to aid in navigating prerequisite chains, program requirements, and term-by-term offerings by graphically presenting course and scheduling information.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Haskell",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: courseography,
    source_code_link: "https://github.com/courseography/courseography",
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
