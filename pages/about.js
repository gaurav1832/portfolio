import React from "react";
import Section from "../components/section";
import { useRouter } from "next/router";

import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  chakra,
  Center,
  Code,
  SimpleGrid,
  Highlight,
  shouldForwardProp,
  Badge,
} from "@chakra-ui/react";

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";

import { GridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import { BioSection, BioYear } from "../components/bio";
import google from "../public/images/google-ctf.png";
import Image from "next/image";
import cpp from "../public/images/skills/cpp.png";
import java from "../public/images/skills/java.png";
import css from "../public/images/skills/css3.png";
import flask from "../public/images/skills/flask.png";
import git from "../public/images/skills/git.png";
import github from "../public/images/skills/github.png";
import html from "../public/images/skills/html.png";
import js from "../public/images/skills/js.png";
import Mongodb from "../public/images/skills/mongo-db.png";
import nodejs from "../public/images/skills/node-js.png";
import postman from "../public/images/skills/postman-api.png";
import python from "../public/images/skills/python.png";
import react from "../public/images/skills/react.png";
import nextjs from "../public/images/skills/next-js.png";
import sql from "../public/images/skills/sql.png";
import Paragraph from "../components/paragraph";
import sc900 from "../public/images/sc-900.png";
import digitalagri from "../public/images/digital-agri.png";
import urlshort from "../public/images/url-short.png";
import snakegame from "../public/images/snake-game.png";
import ttt from "../public/images/ttt.png";
import wca from "../public/images/wca-preview.png";
import leetracker from "../public/images/leetracker.png";
import taim from "../public/images/taim.png";
import codemaps from "../public/images/codemaps.png";
import sc900badge from "../public/images/microsoft-certified-security-compliance-and-identity-fundamentals.png";
import googlebadge from "../public/images/google-data-analytics-certificate.2.png";

const About = () => {
  const router = useRouter();
  return (
    <div className="max-w-4xl mx-auto mt-2 bg-transparent shadow-md rounded-lg">
      <section className="mb-8">
        <button
          onClick={() => router.push("/")}
          className="mb-4 text-amber-100 hover:text-amber-200"
        >
          &larr; Home
        </button>
        <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
          Education
        </h2>
        <div className="mb-4">
          <p className="font-semibold">
            Vellore Institute of Technology, Bhopal
          </p>
          <p>B.Tech, Computer Science & Engineering - CGPA - 8.06/10</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Tagore Public School</p>
          <p>RBSE - Class 12 - Percentage - 89.00%</p>
        </div>
        <div>
          <p className="font-semibold">Tagore Public School</p>
          <p>RBSE - Class 10 - Percentage - 91.33%</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
          About Me
        </h2>
        <ul className="list-disc ml-5">
          <li className>
            <span className="font-semibold text-pink-300">
              Passionate Developer:
            </span>{" "}
            A highly motivated and passionate developer with a keen interest in
            full-stack development, artificial intelligence, and open-source
            contributions.
          </li>
          <li>
            <span className="font-semibold text-pink-300">
              Lifelong Learner:
            </span>{" "}
            Continuously seeking to learn and adapt to new technologies and
            methodologies, with a focus on improving my skill set and staying
            current with industry trends.
          </li>
          <li>
            <span className="font-semibold text-pink-300">Team Player:</span>{" "}
            Proven ability to work collaboratively in team settings,
            contributing to the success of group projects and hackathons.
          </li>
          <li>
            <span className="font-semibold text-pink-300">Problem Solver:</span>{" "}
            Strong analytical and problem-solving skills, demonstrated through
            successful completion of complex projects and competitive
            programming challenges.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
          Technical Contributions
        </h2>
        <ul className="list-disc ml-5">
          <li>
            <span className="font-semibold text-blue-300">
              Hackathons and Competitions:
            </span>{" "}
            Winner of the Academic Grand Challenge on Climate Change among
            7,500+ teams and 750+ colleges and universities, organized by T-AIM
            NASSCOM in collaboration with Capgemini and the Government of
            Telangana
          </li>

          <li>
            <span className="font-semibold text-blue-300">
              Amazon ML Summer School:
            </span>{" "}
            Selected in top 3500 participants of Amazon ML Summer School 2023
            for 4 weeks ML fundamentals training.
          </li>
          <li>
            <span className="font-semibold text-blue-300">
              OpenAI API Utilization:
            </span>{" "}
            Developed projects utilizing OpenAI's API, contributing to
            advancements in AI-driven applications.
          </li>
          <li>
            {" "}
            <span className="font-semibold text-blue-300">
              Leetracker:{" "}
            </span>{" "}
            Live App on Playstore (5 star rating,{" "}
            <a
              className="text-blue-300 italic"
              href="https://play.google.com/store/apps/details?id=com.pete1302.leethub01"
            >
              download now!
            </a>{" "}
            )
          </li>
        </ul>
      </section>

      {/* about container */}

      <Container fontSize="18px">
        <Section delay={0.3}>
          <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
            Technical skills and tools
          </h2>
          <SimpleGrid columns={[5, 5, 8]} gap={3}>
            <Image src={java} alt="Java" width={100} height={100} />
            <Image src={cpp} alt="C++" width={100} height={100} />
            <Image src={python} alt="Python" width={100} height={100} />
            <Image src={html} alt="HTML" width={100} height={100} />
            <Image src={css} alt="CSS" width={100} height={100} />
            <Image src={js} alt="JS" width={100} height={100} />
            <Image src={nodejs} alt="Nodejs" width={100} height={100} />
            <Image src={react} alt="react" width={100} height={100} />
            <Image src={nextjs} alt="react" width={100} height={100} />
            <Image src={flask} alt="Flask" width={100} height={100} />
            <Image src={Mongodb} alt="Mongodb" width={100} height={100} />
            <Image src={sql} alt="SQL" width={100} height={100} />
            <Image src={postman} alt="Postman" width={100} height={100} />
            <Image src={github} alt="Github" width={100} height={100} />
            <Image src={git} alt="Git" width={100} height={100} />
          </SimpleGrid>
        </Section>
      </Container>

      <section>
        <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
          Extra-Curricular & Hobbies
        </h2>
        <ul className="list-disc ml-5">
          <li>Participant Xiaomi Ode2Code 3.0 Hackathon.</li>
          <li>
            Participant IIM Bangalore Ideathon - Flagship Innovation Challenge.
          </li>
          <li>
            Cognizant CTS ProDigi Hackathon (Nov 22) - Selection in top 20 Teams
            in University.
          </li>
          <li>
            Superposition Bhopal: Superposition (A non-profit organization
            spreading awareness among women about STEM Education) VITB Chapter
            Design Team member.
          </li>
          <li>
            Video Creator at Programming Line YouTube Channel (120k+
            subscribers): Created animated videos explaining topics like career
            advice such as resume building, choosing the career, etc.
          </li>
          <li>Hobbies: Chess (Rated 1200+), Reading, Designing.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
