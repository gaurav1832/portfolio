import React from "react";
import { useRouter } from "next/router";
import projects from "../../public/data/projects";

import { IoLogoGithub } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the project by ID (or title or any unique identifier you prefer)
  const project = projects.find(
    (proj) => proj.title.toLowerCase().replace(/\s+/g, "-") === id
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-transparent shadow-md rounded-lg p-4">
      <button
        onClick={() => router.push("/projects")}
        className="mb-4 text-amber-100 hover:text-amber-200"
      >
        &larr; Portfolio
      </button>
      <h1 className="text-3xl font-semibold mb-4">{project.title}</h1>
      <div className="mb-4">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="rounded-lg w-full"
        />
      </div>

      <p className="text-lg text-gray-200 mb-1 font-bold">Technologies Used</p>
      <ul className="flex space-x-3 flex-wrap text-amber-200 justify-items-start">
        {project.technologies.length > 0 ? (
          project.technologies.map((tech, index) => (
            <li
              className="bg-zinc-800 rounded-md p-1 text-center text-sm"
              key={index}
            >
              {tech}
            </li>
          ))
        ) : (
          <li>No Technologies Listed</li>
        )}
      </ul>

      {/* Github Link */}
      <div className="flex space-x-2 mt-4 items-center">
        <IoLogoGithub className="text-amber-100 text-xl" />
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-100 text-md"
        >
          View project on GitHub
        </a>

        {project.livelink.length > 0 ? (
          <div className="flex space-x-2 items-center pl-4">
            <FaExternalLinkAlt className="text-amber-100 text-lg" />
            <a
              href={project.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-100 text-md"
            >
              Live Link
            </a>
          </div>
        ) : (
          <p></p>
        )}
      </div>

      {/* Description */}
      <div className="mt-8">
        <h3 className="text-2xl text-gray-200 mb-1 font-bold">Description</h3>
        <p className="text-gray-300 mb-8 text-lg text-justify">
          {project.description}
        </p>
      </div>

      {/* Key Components */}
      <h2 className="text-2xl font-semibold mt-8">Key Components</h2>
      <ul className="list-disc list-inside text-gray-300 text-lg p-4">
        {project.keyComponents.map((component, index) => (
          <li className="p-1 list-outside text-justify" key={index}>
            {component}
          </li>
        ))}
      </ul>

      {/* Project Structure */}
      {project.structure.length > 0 ? (
        <div className="mt-8">
          <h3 className="text-2xl text-gray-200 mb-1 font-bold">
            Project Structure{" "}
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-lg p-4">
            {project.structure.length > 1 ? (
              <div>
                <h3>Endpoints:</h3>
                <pre className="bg-zinc-800 p-4 rounded-md mt-2">
                  {project.structure.map((value, index) => (
                    <li className="p-1">
                      <code className="text-wrap">{value}</code>
                    </li>
                  ))}
                </pre>
              </div>
            ) : (
              <p>
                {project.structure.map((value, index) => (
                  <img
                    src={value}
                    alt={project.title}
                    className="rounded-lg w-full"
                  />
                ))}
              </p>
            )}
          </ul>
        </div>
      ) : (
        <p></p>
      )}

      {/* Installation */}
      <div className="mt-4">
        <h3 className="text-2xl text-gray-200 mb-1 font-bold">Installation</h3>
        <ul>
          {project.installation.length > 0 ? (
            project.installation.map((step, index) => (
              <div key={index} className="p-2">
                <pre className="bg-zinc-800 p-2 rounded-md mt-2">
                  <code className="text-wrap">{step}</code>
                </pre>
              </div>
            ))
          ) : (
            <li>No Installation Steps Provided</li>
          )}
        </ul>
      </div>

      {/* Usages */}
      {project.usage.length > 0 ? (
        <div className="mt-8">
          <h3 className="text-2xl text-gray-200 mb-1 font-bold">Usage</h3>
          <ul className="list-disc list-inside text-gray-300 text-lg p-4">
            {project.usage.length > 0 ? (
              project.usage.map((use, index) => (
                <li className="p-1 list-outside text-justify" key={index}>
                  {use}
                </li>
              ))
            ) : (
              <p></p>
            )}
          </ul>
        </div>
      ) : (
        <p></p>
      )}

      {/* Implementation */}
      {project.implementationChoices.length > 0 ? (
        <div className="mt-8">
          <h3 className="text-2xl text-gray-200 mb-1 font-bold">
            Implementation Choices
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-lg p-4">
            {project.implementationChoices.map((use, index) => (
              <li className="p-1 list-outside text-justify" key={index}>
                {use}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p></p>
      )}

      {/* Contributing */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Contributing</h2>
      <p className="text-gray-300">
        Contributions are welcome by submitting pull requests to the project.
      </p>

      <a
        href={`${project.github}/pull`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mb-8"
      >
        Contribute on GitHub
      </a>
    </div>
  );
};

export default ProjectDetails;
