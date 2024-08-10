import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import projectsData from "../public/data/projects";
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

const projects = projectsData.slice(0, 4);

const ProjectSection = () => {
  return (
    <div className="container max-w-7xl mx-auto p-8 bg-transparent shadow-md rounded-lg">
      <h2 className="text-2xl text-left font-semibold border-b-2 pb-4 mb-8">
        Some of my recent projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {projects.map((project, index) => (
          <div key={index} className="shadow-lg p-2 rounded-lg">
            <Link
              href={`/projects/${project.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              rel="noopener noreferrer"
            >
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
            </Link>
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
