import React from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "../public/data/projects";
import { useRouter } from "next/router";

const ProjectGrid = () => {
  const router = useRouter();
  return (
    <div className="max-w-4xl mx-auto bg-transparent shadow-md rounded-lg">
      <button
        onClick={() => router.push("/")}
        className="mb-4 text-amber-100 hover:text-amber-200"
      >
        &larr; Home
      </button>
      <h1 className="text-3xl text-left font-semibold border-b-2 pb-8 mb-8">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-5 shadow-lg p-2 rounded-lg hover:shadow-xl transition-shadow"
          >
            <Link
              href={`/projects/${project.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <div className="mb-3">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  className="rounded-lg"
                  width={500}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-amber-200 mb-2">{project.tech}</p>
              <p className="text-gray-300">{project.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
