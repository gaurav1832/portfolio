// import React from "react";
// import Image from "next/image";

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

//   {
//     title: "ArtiSumm",
//     thumbnail: "/images/arti-summ.png",
//     tech: "(Tech: JavaScript, React, RapidAPI)",
//     description:
//       "ArtiSumm is an easy to use article summarizer which takes an url input to generate a brief summary about the content which is written int the url.",
//     href: "https://arti-summ.netlify.app",
//   },
//   {
//     title: "WhatsApp chat analysis",
//     thumbnail: "/images/wca-preview.png",
//     tech: "(Tech: python, pandas, matplotlib, seaborn, streamlit)",
//     description:
//       "Developed a chat analysis web app where you can analyse whatsapp statistics like daily, weekly and monthly activities.",
//     href: "https://gaurav1832-wca-app-4xpz9j.streamlit.app/",
//   },
//   {
//     title: "URL Shortener in flask",
//     thumbnail: "/images/url-short.png",
//     tech: "(Tech: python, flask, html, css)",
//     description:
//       "Made a url shortener app using python libraries and flask as web framework.",
//     href: "https://github.com/gaurav1832/url-shortener-flask",
//   },
//   {
//     title: "TicTacToe Game",
//     thumbnail: "/images/ttt.png",
//     tech: "(Tech: HTML, CSS, Javascript)",
//     description: "Simple tic tac toe game for fun.",
//     href: "https://gaurav1832.github.io/tic-tac-toe",
//   },
// ];

// const ProjectGrid = () => {
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
//     </div>
//   );
// };

// export default ProjectGrid;

import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "AutoInbox ",
    thumbnail: "/images/autoinbox.png",
    tech:
      "Tech: Node.js, Express.js, Google APIs, Microsoft Graph, BullMQ, TypeScript, Axios",
    description:
      "Automatic Email Parsing and Analysis Tool: This project provides a robust solution for managing emails via Google and Microsoft Outlook APIs. It handles authentication, email retrieval, automatic labeling, and sending replies based on AI-analyzed content. The service is designed with modularity in mind, ensuring maintainability and scalability.",
    href: "https://github.com/gaurav1832/autoinbox",
  },
  {
    title: "Team Cl_AI_Mate : Heat Waves & AQI Prediction",
    thumbnail: "/images/taim.png",
    tech: "Tech: ML, Python and libraries, streamlit, postman, etc.",
    description:
      "Our team developed an AQI and heatwaves prediction model during Telangana AI Mission hackathon conducted by NASSCOM in collaboration with Government of Telangana and Capgemini.",
    href: "https://harshhrs24-team-cl-ai-mate-app-md7w7w.streamlit.app/",
  },
  {
    title: "CodeMaps",
    thumbnail: "/images/codemaps.png",
    tech: "Tech: React, NextJs, JS, HTML, CSS, GitHub",
    description:
      "CodeMaps is a project designed to help individuals prepare for technical interviews at top tech companies. It provides structured learning paths for mastering data structures and algorithms, offers company-specific interview questions, includes previous year interview queries, and shares valuable interview experiences.",
    href: "https://github.com/gaurav1832/CodeMaps",
  },

  {
    title: "File Forge",
    thumbnail: "/images/file-forge.png",
    tech: "Tech: ReactJS, NodeJS, Express, MongoDB",
    description:
      "Developed a web-based File Manager Application for seamless file and folder management. Implemented features and API endpoints for user authentication, file upload, folder creation, deletion, file movement, renaming, and file preview.",
    href: " https://fileforge.vercel.app/",
  },

  {
    title: "LeeTracker",
    thumbnail: "/images/leetracker.png",
    tech: "Tech: ReactNative, GraphQL, JS, Expo",
    description:
      "LeeTracker is an easy-to-use application through which you can track your friend's progress on LeetCode and get notified about your friend’s recent and total submissions.",
    href:
      "https://play.google.com/store/apps/details?id=com.pete1302.leethub01",
  },

  {
    title: "ArtiSumm",
    thumbnail: "/images/arti-summ.png",
    tech: "Tech: JavaScript, React, RapidAPI",
    description:
      "ArtiSumm is an easy to use article summarizer which takes an url input to generate a brief summary about the content which is written int the url.",
    href: "https://arti-summ.netlify.app",
  },
  {
    title: "WhatsApp chat analysis",
    thumbnail: "/images/wca-preview.png",
    tech: "Tech: python, pandas, matplotlib, seaborn, streamlit",
    description:
      "Developed a chat analysis web app where you can analyse whatsapp statistics like daily, weekly and monthly activities.",
    href: "https://gaurav1832-wca-app-4xpz9j.streamlit.app/",
  },
  {
    title: "URL Shortener in flask",
    thumbnail: "/images/url-short.png",
    tech: "Tech: python, flask, html, css",
    description:
      "Made a url shortener app using python libraries and flask as web framework.",
    href: "https://github.com/gaurav1832/url-shortener-flask",
  },
  {
    title: "TicTacToe Game",
    thumbnail: "/images/ttt.png",
    tech: "Tech: HTML, CSS, Javascript",
    description: "Simple tic tac toe game for fun.",
    href: "https://gaurav1832.github.io/tic-tac-toe",
  },
];

const ProjectGrid = () => {
  return (
    <div className="max-w-4xl mx-auto bg-transparent shadow-md rounded-lg">
      <h1 className="text-3xl text-center font-semibold border-b-2 pb-8 mb-8">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-5 shadow-lg p-2 rounded-lg hover:shadow-xl transition-shadow"
          >
            <a href={project.href} target="_blank" rel="noopener noreferrer">
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
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;

