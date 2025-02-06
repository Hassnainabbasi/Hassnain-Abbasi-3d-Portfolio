import {
  // Service Icon
  frontend,
  // devops,
  mobile,
  backend,

  // Companies Icon
  freelancing,
  bioCompany,
  lineageCompany,
  relayCompany,
  diridealCompany,
  moertschCompany,

  // Tech Icons
  reactJS,
  typescript,
  nextJS,
  firebase,
  nodeJS,
  mongoDB,
  redux,
  viteJS,
  express,
  javascript,
  tailwindCSS,

  // Portfolios Icons
  // bioPortfolio,
  // plaiPortfolio,
  lionsPortfolio,
  dirtoutPortfolio,
  lineagePortfolio,
  // iAgilityPortfolio,
  personalPortfolio,
  moertschPortfolio,
  // diridealPortfolio,
  // steepRockPortfolio,
  // relayAutoPortfolio,
  // floeyMobilePortfolio,

  // Certifications
  fuuast,
  smit,
} from "../assets";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaGithub} from "react-icons/fa";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development Advance",
    icon: frontend,
  },
  {
    title: "Mobile Beginners",
    icon: mobile,
  },
  {
    title: "Backend Architecture Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Tailwind CSS",
    icon: tailwindCSS,
  },
  {
    name: "JS",
    icon: javascript,
  },
  {
    name: "TS",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactJS,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Vite JS",
    icon: viteJS,
  },
  {
    name: "Next JS",
    icon: nextJS,
  },
  {
    name: "Node JS",
    icon: nodeJS,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MongoDB",
    icon: mongoDB,
  },
];

export interface ExperienceInterface {
  title: string;
  company_name: string;
  icon: string;
  iconColor: string;
  date: string;
  points: string[];
}

const experiences: ExperienceInterface[] = [
  {
    title: "Upwork, Fiverr, Freelancer",
    company_name: "Freelancing",
    icon: freelancing,
    iconColor: "#0389e2",
    date: "Present Feb",
    points: [
      "Freelance on Upwork, Fiverr, and Freelancer, specializing in mobile app development with React Native and Expo, as well as full-stack development including backend services.",
      "Develop websites using Next.js and Vite, and provide backend solutions, API integration, and custom services for clients.",
    ],
  },
  {
    title: "Backend Engineer → Full Stack Developer",
    company_name: "Bio Insights",
    icon: bioCompany,
    iconColor: "#ffffff",
    date: "September 2024 - November 2024",
    points: [
      "Developed APIs and middleware with Node.js, improving speed by 30% and reducing errors by 15% through automation.",
      "Designed front-end with Next.js and Material UI, managed back-end systems, and ensured smooth deployments using Docker.",
      "Delivered secure, high-quality applications with a focus on testing, optimization, and user-friendly experiences.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Lineage CRM",
    icon: lineageCompany,
    iconColor: "#ffffff",
    date: "December 2023 - June 2024",
    points: [
      "Developed a mobile application using Expo, adding the website's features to the app.",
      "Ensured a seamless user experience by replicating and optimizing the website's functionality for mobile users.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Relay Automotive",
    icon: relayCompany,
    iconColor: "#ffffff",
    date: "September 2024 - December 2024",
    points: [
      "Developed and managed the backend with Node.js, Express.js, creating APIs to support web and mobile applications seamlessly.",
      "Built a responsive website using React.js with Vite and a mobile app using React Native CLI, ensuring both platforms had consistent features and functionality.",
      "Integrated Persona for identity verification and CometChat for chat, group messaging, and calling across web and mobile platforms.",
      "Refactored codebase to be more scalable for future development.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Action Solution",
    icon: diridealCompany,
    iconColor: "#8c3fb8",
    date: "July 2024 - Dec 2024",
    points: [
      "FollowerShip the development of a backend using Next.js with MongoDB, deployed on Vercel, and integrated APIs for a seamless connection between the mobile app, admin panel, and backend."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Moertsch",
    icon: moertschCompany,
    iconColor: "#ffffff",
    date: "December 2020 - April 2021",
    points: [
      "Developed on mobile development using React Native CLI and Firebase for services like authentication, storage, cloud functions, and database management.",
      "Focused map and calendar features for the event management app, ensuring a smooth user experience.",
      "Created an admin panel with React.js to validate and manage events effectively.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I enjoyed working with Hassnain and was thoroughly pleased with his work. I wouldn't hesitate to recommend him to anyone seeking a skilled React and Next.js developer. Hassnain consistently met deadlines, communicated effectively, and adeptly solved any challenges.",
//     name: "Francisco Gomez",
//     image: francisco,
//   },
//   {
//     testimonial:
//       "Quality price guaranteed! Hassnain used for this project: Functional Components, async/await pattern, try/catch pattern, connection to MongoDB database, Stripe Integration. He delivered in record time and he asked when he had road-block. Definitely hiring him again for the next bit!",
//     name: "Alberto Cubeddu",
//     image: alberto,
//   },
//   {
//     testimonial:
//       "Awesome Work. Delivery was fast and indeed, he is a react native beast! Will work with him in the future even more close and highly recommend him to anyone who wants do get his project done fast and efficient along with good communication through the whole process.",
//     name: "Jan Kasper",
//     image: jan,
//   },
// ];

export interface ProjectInterface {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  android_link?: string;
  ios_link?: string;
  live_link?: string;
  source_code_link?: string;
}

const projects: ProjectInterface[] = [
  {
    name: "Beneficiary Management System",
    description:
      "The Beneficiary Management System is a comprehensive solution designed to efficiently manage and track beneficiaries in various programs. It streamlines the process of beneficiary registration, verification, and distribution of benefits, ensuring transparency and accuracy.",
    tags: [
      {
        name: "React Native",
        color: "green-text-gradient",
      },
      // {
      //   name: "PostgreSQL",
      //   color: "blue-text-gradient",
      // },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "blue-text-gradient",
      },
      // {
      //   name: "Spotify API",
      //   color: "pink-text-gradient",
      // },
      // {
      //   name: "Apple Music",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "Comet Chat",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "AWS",
      //   color: "pink-text-gradient",
      // },
    ],
    image: lionsPortfolio,
    // android_link:
      // "https://play.google.com/store/apps/details?id=com.lionsrking",
    // ios_link: "https://apps.apple.com/us/app/lionsrking/id6448316220",
    // live_link: "https://relayautomotive.com/",
  },
  {
    name: "Personal Portfolio",
    description:
      "Welcome to my website! Special thanks to JavaScript Mastery for the Three.js template, which I extensively customized. I also adapted Eli Shmerler's magical particles effect to better suit my website.",
    tags: [
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Shaders",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: personalPortfolio,
    // source_code_link:
    //   "https://github.com/hassnainabbasi/Hassnain-Abbasi-3d-Portfolio",
    // live_link: "https://hassnainabbasi.org/",
  },
  {
    name: "Doctor Appointment System",
    description:
      "The Doctor Appointment System is a smart and efficient solution designed to streamline the process of booking and managing doctor appointments. It provides a hassle-free experience for patients, doctors, and healthcare administrators by automating scheduling, reducing waiting times, and improving overall efficiency.",
    tags: [
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      // {
      //   name: "Twilio",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "Sendgrid",
      //   color: "pink-text-gradient",
      // },
      // {
      //   name: "Google Map API",
      //   color: "green-text-gradient",
      // },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: lineagePortfolio,
  },
  {
    name: "Learning Management System",
    description:
      "The Learning Management System (LMS) is a powerful and user-friendly platform designed to enhance online learning and training. It provides educators, institutions, and businesses with a seamless way to create, manage, and deliver courses efficiently",
    tags: [
      // {
      //   name: "React Native",
      //   color: "blue-text-gradient",
      // },
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "blue-text-gradient",
      },
      // {
      //   name: "Google Map API",
      //   color: "green-text-gradient",
      // },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      // {
      //   name: "Cloud Functions",
      //   color: "pink-text-gradient",
      // },
      // {
      //   name: "OpenAI APIs",
      //   color: "pink-text-gradient",
      // },
    ],
    image: moertschPortfolio,
    // ios_link: "https://apps.apple.com/us/app/moertsch/id1617860624",
  },
  {
    name: "Dirt Out Duct Cleaning",
    description:
      "Dirt Out Duct Cleaning offers professional services focused on improving indoor air quality. They provide air duct, dryer vent, furnace, and mold cleaning across various states in the U.S. The platform ensures better airflow, energy efficiency, and safety for homes and businesses, delivering services with fast, thorough, and eco-friendly methods.",
    tags: [
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Sendgrid",
        color: "pink-text-gradient",
      },
    ],
    image: dirtoutPortfolio,
    // live_link: "https://dirtoutductcleaning.co/",
  },
];

export interface ProgramInterface {
  company: string;
  title: string;
  description: string;
  date: string;
  link?: string;
  icon: string;
}

const programs: ProgramInterface[] = [
  {
    company: "FUUAST",
    title: "Intermediate",
    icon: fuuast,
    date: "Feb 2024 - Present",
    description: "Intermediate in Computer Science BSCS",
  },
  {
    company: "SMIT",
    title: "Progressive Web App Developer",
    icon: smit,
    date: "Dec 2023 - Present",
    description:
      "The Progressive Web App (PWA) Program at Saylani Mass IT Training teaches the skills needed to build fast and reliable web applications. It covers HTML, CSS, JavaScript, ECMAScript, Firebase, and PWA technologies. This training helps learners create web apps that work offline, load quickly, and provide a smooth user experience.",
    // link: "https://drive.google.com/file/d/1Nh1GNVfMOe_Fs7mAzAongjOguEJZTmrJ/view",
  },
];

const EMAIL = "muhammadhassnain187@gmail.com";
const EMAIL_LINK = "mailto:muhammadhassnain187@gmail.com";

const PHONE = "+92 3262013238";
const PHONE_LINK = "tel:+923262013238";
const CALENDLY_LINK = "https://calendly.com/muhammadhassnain187";

const SOCIALS = [
  {
    target: "_blank",
    icon: <FaGithub size={25} className="text-c-black dark:text-gray-300" />,
    link: "https://github.com/Hassnainabbasi",
    name: "Github",
  },
  {
    target: "_self",
    icon: <MdEmail size={25} className="text-c-black dark:text-gray-300" />,
    link: EMAIL_LINK,
    name: "Email",
  },
  {
    target: "_self",
    icon: <IoMdCall size={25} className="text-c-black dark:text-gray-300" />,
    link: PHONE_LINK,
    name: "Call",
  },
];

export {
  EMAIL,
  CALENDLY_LINK,
  EMAIL_LINK,
  PHONE,
  PHONE_LINK,
  SOCIALS,
  services,
  technologies,
  experiences,
  // testimonials,
  projects,
  programs,
};
