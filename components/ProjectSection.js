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
