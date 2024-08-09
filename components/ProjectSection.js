// import React from "react";
// import Image from "next/image";
// import NextLink from "next/link";

// import {
//   Container,
//   Box,
//   Link,
//   Stack,
//   Heading,
//   Flex,
//   Menu,
//   MenuItem,
//   MenuList,
//   MenuButton,
//   IconButton,
//   useColorModeValue,
//   Center,
//   Code,
//   Divider,
//   Button,
// } from "@chakra-ui/react";

// const LinkItem = ({ href, path, target, children, ...props }) => {
//   const active = path === href;
//   return (
//     <Link
//       as={NextLink}
//       href={href}
//       scroll={false}
//       p={2}
//       bg={active ? "transparent" : undefined}
//       target={target}
//       {...props}
//     >
//       {children}
//     </Link>
//   );
// };

// const projects = [
//   {
//     title: "Team Cl_AI_Mate : Heat Waves & AQI Prediction",
//     thumbnail: "/images/taim.png",
//     tech: "(Tech: ML, Python and libraries, streamlit, postman, etc.)",
//     description:
//       "Our team developed an AQI and heatwaves prediction model during Telangana AI Mission hackathon conducted by NASSCOM in collaboration with Government of Telangana and Capgemini.",
//     href: "https://harshhrs24-team-cl-ai-mate-app-md7w7w.streamlit.app/",
//   },
//   {
//     title: "CodeMaps",
//     thumbnail: "/images/codemaps.png",
//     tech: "(Tech: React, NextJs, JS, HTML, CSS, GitHub)",
//     description:
//       "CodeMaps is a project designed to help individuals prepare for technical interviews at top tech companies. It provides structured learning paths for mastering data structures and algorithms, offers company-specific interview questions, includes previous year interview queries, and shares valuable interview experiences.",
//     href: "https://github.com/gaurav1832/CodeMaps",
//   },

//   {
//     title: "File Forge",
//     thumbnail: "/images/file-forge.png",
//     tech: "(Tech: ReactJS, NodeJS, Express, MongoDB)",
//     description:
//       "Developed a web-based File Manager Application for seamless file and folder management. Implemented features and API endpoints for user authentication, file upload, folder creation, deletion, file movement, renaming, and file preview.",
//     href: " https://fileforge.vercel.app/",
//   },

//   {
//     title: "LeeTracker",
//     thumbnail: "/images/leetracker.png",
//     tech: "(Tech: ReactNative, GraphQL, JS, Expo)",
//     description:
//       "LeeTracker is an easy-to-use application through which you can track your friend's progress on LeetCode and get notified about your friend’s recent and total submissions.",
//     href: "https://play.google.com/store/search?q=leetracker&c=apps",
//   },
// ];

// const ProjectSection = () => {
//   return (
//     <div className="container mx-auto p-8 bg-transparent shadow-md rounded-lg">
//       <h1 className="text-3xl text-center font-semibold border-b-2 pb-8 mb-8">
//         Projects
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-4">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-transparent border border-1 p-5 rounded-lg shadow hover:shadow-xl transition-shadow"
//           >
//             <a href={project.href} target="_blank" rel="noopener noreferrer">
//               <div className="mb-3">
//                 <Image
//                   src={project.thumbnail}
//                   alt={project.title}
//                   className="rounded-lg"
//                   width={500}
//                   height={300}
//                   objectFit="cover"
//                 />
//               </div>
//               <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
//               <p className="text-md text-green-300 mb-2">{project.tech}</p>
//               <p className="text-gray-400">{project.description}</p>
//             </a>
//           </div>
//         ))}
//       </div>

//       <LinkItem href="/projects" className="flex justify-center underline">
//         See more projects...
//       </LinkItem>
//     </div>
//   );
// };

// export default ProjectSection;


import React from "react";
import Image from "next/image";
import NextLink from "next/link";

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Center,
  Code,
  Divider,
  Button,
} from "@chakra-ui/react";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? "transparent" : undefined}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const projects = [
  {
    title: "AutoInbox ",
    thumbnail: "/images/autoinbox.png",
    tech:
      "Tech: Node.js, Express.js, Google APIs, Microsoft Graph, BullMQ, TypeScript, Axios",
    description: "",
    href: "https://github.com/gaurav1832/autoinbox",
  },
  {
    title: "Cl_AI_Mate",
    thumbnail: "/images/taim.png",
    tech: "Tech: ML, Python and libraries, streamlit, postman, etc.",
    description: "",
    href: "https://harshhrs24-team-cl-ai-mate-app-md7w7w.streamlit.app/",
  },
  {
    title: "CodeMaps",
    thumbnail: "/images/codemaps.png",
    tech: "Tech: React, NextJs, JS, HTML, CSS, GitHub",
    description: "",
    href: "https://github.com/gaurav1832/CodeMaps",
  },

  {
    title: "File Forge",
    thumbnail: "/images/file-forge.png",
    tech: "Tech: ReactJS, NodeJS, Express, MongoDB",
    description: "",
    href: " https://fileforge.vercel.app/",
  },

  {
    title: "LeeTracker",
    thumbnail: "/images/leetracker.png",
    tech: "Tech: ReactNative, GraphQL, JS, Expo",
    description: "",
    href:
      "https://play.google.com/store/apps/details?id=com.pete1302.leethub01",
  },
];

const ProjectSection = () => {
  return (
    <div className="container max-w-7xl mx-auto p-8 bg-transparent shadow-md rounded-lg">
      <h2 className="text-2xl text-left font-semibold border-b-2 pb-4 mb-8">
        Some of my recent projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-5 shadow-lg p-2 rounded-lg"
          >
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <div className="mb-3">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  className="rounded-t-lg"
                  width={500}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-amber-200 mb-2">{project.tech}</p>
              <p className="text-gray-400">{project.description}</p>
            </a>
          </div>
        ))}
      </div>

      <LinkItem href="/projects" className="flex justify-center underline mt-4">
        See more projects...
      </LinkItem>
    </div>
  );
};

export default ProjectSection;
