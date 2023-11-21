import {
  blender,
  css,
  figma,
  git,
  github,
  html,
  javascript,
  nodejs,
  reactjs,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "home",
  },
  {
    id: "skills",
    title: "Skills",
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

export const Bio = {
  name: "Paul Delesques",
  roles: ["Developpeur Frontend ", "Developpeur Backend ", "UI/UX Designer "],
  description: `Je suis un développeur Web et Web Mobile débutant en JavaScript, j'utilise
    les frameworks tels que React, Node.js et Three.js. Je suis un apprenant
    rapide et j'aime créer des solutions efficaces, évolutives et
    conviviales qui résolvent des problèmes concrets. Travaillons ensemble
    ! et codons avec passions !
  `,
  github: "https://github.com/Paul-DELESQUES",
  resume:
    "https://drive.google.com/file/d/1YdieIkRn_M_vFArVEkd97BUarOMiT48M/view?usp=sharing",
  linkedin: "www.linkedin.com/in/paul-delesques-dev34",
  // twitter: "https://twitter.com/RishavChanda",
  // insta: "https://www.instagram.com/rishav_chanda/",
  // facebook: "https://www.facebook.com/rishav.chanda.165/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        id: 1,
        name: "HTML 5",
        icon: html,
      },
      {
        id: 2,
        name: "CSS 3",
        icon: css,
      },
      {
        id: 3,
        name: "JavaScript",
        icon: javascript,
      },
      {
        id: 4,
        name: "React JS",
        icon: reactjs,
      },
      {
        id: 5,
        name: "Three JS",
        icon: threejs,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        id: 6,
        name: "Node JS",
        icon: nodejs,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        id: 7,
        name: "Github",
        icon: github,
      },
      {
        id: 8,
        name: "git",
        icon: git,
      },
      {
        id: 9,
        name: "figma",
        icon: figma,
      },
      {
        id: 10,
        name: "Blender",
        icon: blender,
      },
    ],
  },
];

export const projects = [
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
    image: "logo",
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
    image: "logo",
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
    image: "logo",
    source_code_link: "https://github.com/",
  },
];
