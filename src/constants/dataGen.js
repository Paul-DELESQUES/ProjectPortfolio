import {
  blender,
  css,
  expressjs,
  figma,
  geodrinkers,
  git,
  github,
  html,
  javascript,
  loading,
  mysql,
  nodejs,
  portfolio,
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
    et codons avec passions !
  `,
  github: "https://github.com/Paul-DELESQUES",
  resume:
    "https://drive.google.com/file/d/1IaZs7mZcipiIhQ1x5W9bv5PuxzqGl7rY/view?usp=drive_link",
  linkedin: "www.linkedin.com/in/paul-delesques-dev34",
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
        name: "NodeJS",
        icon: nodejs,
      },
      {
        id: 11,
        name: "MySQL",
        icon: mysql,
      },
      {
        id: 11,
        name: "ExpressJS",
        icon: expressjs,
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
    name: "Geodrinkers",
    description:
      "Voici un projet qui m'a été confié, pendant ma formation de développeur web et web mobile.",
    tags: [
      {
        name: "threeJS",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: geodrinkers,
    source_code_link: "https://github.com/Paul-DELESQUES",
    web_deployment: "https://geodrinkers.vercel.app/",
  },
  {
    name: "Portfolio",
    description:
      "Voici mon portfolio, qui m'a permis d'acquérir des notions supplémentaires et d'utiliser des méthodes différentes.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "threeJS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Paul-DELESQUES/ProjectPortfolio",
    web_deployment: "https://portfolio-paul-delesques.netlify.app",
  },
  {
    name: "Projet 3",
    description:
      "Un opticien et une audioprothésiste indépendants m'ont fait confiance pour améliorer le site web de leur magasin  ",
    tags: [
      {
        name: "tech1",
        color: "blue-text-gradient",
      },
      {
        name: "tech2",
        color: "green-text-gradient",
      },
      {
        name: "tech3",
        color: "pink-text-gradient",
      },
    ],
    image: loading,
    source_code_link: "https://github.com/Paul-DELESQUES",
  },
];
