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
    id: "skills",
    title: "Skills",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const Bio = {
  name: "Paul Delesques",
  roles: [
    "Junior Frontend Developer",
    "Junior Backend Developer",
    "UI/UX Designer beginner",
  ],
  description: `Je suis un développeur de logiciels débutant en JavaScript, j'utilise
    les frameworks tels que React, Node.js et Three.js. Je suis un apprenant
    rapide et j'aime créer des solutions efficaces, évolutives et
    conviviales qui résolvent des problèmes concrets. Travaillons ensemble
    pour donner vie à vos idées ! et codons avec passions !
  `,
  github: "https://github.com/https://github.com/Paul-DELESQUES",
  resume: "mettre mon cv sur drive",
  linkedin: "www.linkedin.com/in/paul-delesques-dev34",
  // twitter: "https://twitter.com/RishavChanda",
  // insta: "https://www.instagram.com/rishav_chanda/",
  // facebook: "https://www.facebook.com/rishav.chanda.165/",
};

// const services = [
//   {
//     title: "Web Developer Junior",
//     icon: web,
//   },
//   {
//     title: "React Developer Junior",
//     icon: mobile,
//   },
//   {
//     title: "Frontend Developer Junior",
//     icon: front,
//   },
//   {
//     title: "Backend Developer Junior",
//     icon: backend,
//   },
// ];

export const technologies = [
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Github",
    icon: github,
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
    name: "Blender",
    icon: blender,
  },
];

//   const experiences = [
//     {
//       title: "React.js Developer",
//       company_name: "Starbucks",
//       icon: starbucks,
//       iconBg: "#383E56",
//       date: "March 2020 - April 2021",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//     {
//       title: "React Native Developer",
//       company_name: "Tesla",
//       icon: tesla,
//       iconBg: "#E6DEDD",
//       date: "Jan 2021 - Feb 2022",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//     {
//       title: "Web Developer",
//       company_name: "Shopify",
//       icon: shopify,
//       iconBg: "#383E56",
//       date: "Jan 2022 - Jan 2023",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//     {
//       title: "Full stack Developer",
//       company_name: "Meta",
//       icon: meta,
//       iconBg: "#E6DEDD",
//       date: "Jan 2023 - Present",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//   ];

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
