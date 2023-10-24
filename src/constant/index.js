import {
  mobile,
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
  
  threejs
 
} from "../assets";
import nexticon from "../assets/tech/nexticon.svg"
import firebase from "../assets/tech/firebase.svg"
import AICTE from "../assets/company/AICTE.png"
import forge2 from "../assets/company/forge2.png"
import IITM from   "../assets/company/IITM.png"
import sreyas from   "../assets/company/sreyas.png"
import xstore from "../assets/xstore.png"
import chaikathela from "../assets/chaikathela.png"
import ahs from "../assets/ahs.png"
import uiux from "../assets/uiux.png"
import react from "../assets/react.png"
import webdev from "../assets/webdev.png"
import backend from "../assets/backend.png"
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
    title: "Web Developer",
    icon: webdev,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Enthusiast",
    icon: uiux,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Next JS",
    icon: nexticon,
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
    name: "Firebase",
    icon: firebase,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Innovate India Coding Championship",
    company_name: "AICTE",
    icon: AICTE,
    iconBg: "#fff",
    date: "July 2022",
    points: [
      "Innovate India Coding Championship is an All India Coding Contest.",
      "This Contest was organised by AICTE in collaboration with Coding Ninjas.",
      "I Qualified for Round 2 of 3 in this Coding Contest.",
      "This coding Contest Consisted of Aptitude Questions and Problem Solving Coding Questions.",
    ],
  },
  {
    title: "Code-a-Thon 2nd Runners up",
    company_name: "Forge Alumnus",
    icon: forge2,
    iconBg: "#E6DEDD",
    date: "March 2023",
    points: [
      "Code-a-Thon is a Technical Contest for Web Development hosted at our College by FORGE Alumnus. ",
      "I was responsible for building the front-end of the website using EJS, CSS, JavaScript & Bootstrap",
      "We were the 2nd Runners up in this Code-a-Thon.",
  
    ],
  },
  {
    title: "Programming, Data Structures and Algorithms using Python",
    company_name: "IIT Madras",
    icon: IITM,
    iconBg: "#fff",
    date: "October 2023",
    points: [
      "Programming, Data Structures and Algorithms using Python is an NPTEL Exam Conducted by IIT Madras.",
      "I am graded as Elite + Silver in Programming, Data Structures and Algorithms using Python.",
      
    ],
  },
  {
    title: "Runners up of Code Burst Hackathon",
    company_name: "Sreyas Institute of Engg. & Tech.",
    icon: sreyas,
    iconBg: "#fff",
    date: "October 2023",
    points: [
     "Code Burst is a Coding Contest Organised in Sreyas Institute of Engineering and Technology.",
     "Me and my Team were Runners up for this Hackathon.",
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
    name: "X Store",
    description:
      "x Store is a full stack E Commerce Website built using the latest Next.js 13, next-auth, MongoDB, tailwind CSS. This web app is a ready-to-go in production with all the necessary features which an E Commerce website is supposed to have.",
    tags: [
      {
        name: "nextjs",
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
    image: xstore,
    source_code_link: "https://github.com/Sami-07/XStore",
    hosted_link : "https://x-store.vercel.app"
  },
  {
    name: "Chai ka Thela",
    description:
      "Chai ka Thela is an Online Beverage Selling web app built using React.js, Firebase. It uses Firebase Authentication for user authentication and Firebase firestore Database for storing the data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chaikathela,
    source_code_link: "https://github.com/Sami-07/ChaiKaThela",
    hosted_link : "https://chaikathela7.web.app"
  },
  {
    name: "Legal Portfolio Website",
    description:
      "This is a Legal Portfolio Website build using Nextjs. This website is SEO optimized as this is built using Next.js server-side rendering. This professional Website displays info. and all the services offered by the lawyer with a Contact Section integrated with Nodemailer for mail service.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "SEOoptimized",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ahs,
    source_code_link: "https://github.com/Sami-07/ahslegalservices",
    hosted_link : "https://ahslegalservices.vercel.app"
  },
];

export { services, technologies, experiences, testimonials, projects };