import React from "react";
import Section from "../components/section";
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
import sql from "../public/images/skills/sql.png";
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
  return (
    <div className="max-w-7xl bg-transparent shadow-md rounded-lg">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
          About Me
        </h2>

        <p>
          A highly motivated and passionate developer with a strong focus on
          full-stack development and artificial intelligence. Continuously
          driven to learn and adapt to new technologies, I prioritize enhancing
          my skill set and staying current with industry trends. As a proven
          team player, I excel in collaborative environments, contributing to
          successful group projects and hackathons. My problem-solving abilities
          are showcased through the completion of complex projects and
          competitive programming challenges. Notable achievements include
          winning the Academic Grand Challenge on Climate Change among 7,500+
          teams, being selected in the top 3,500 participants of the Amazon ML
          Summer School 2023, and developing AI-driven applications using
          OpenAI's API. My work also includes Leetracker, a live app on the Play
          Store with a 5-star rating.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
          Education
        </h2>
        <div className="mb-4">
          <p className="font-semibold">
            Vellore Institute of Technology, Bhopal
          </p>
          <p>B.Tech, Computer Science & Engineering - CGPA - 7.87/10</p>
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

      <Container fontSize="18px">
        <Section delay={0.3}>
          <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
            Technical skills and tools
          </h2>
          <SimpleGrid columns={[5, 5, 7]} gap={3}>
            <Image src={java} alt="Java" width={100} height={100} />
            <Image src={cpp} alt="C++" width={100} height={100} />
            <Image src={python} alt="Python" width={100} height={100} />
            <Image src={html} alt="HTML" width={100} height={100} />
            <Image src={css} alt="CSS" width={100} height={100} />
            <Image src={js} alt="JS" width={100} height={100} />
            <Image src={nodejs} alt="Nodejs" width={100} height={100} />
            <Image src={react} alt="react" width={100} height={100} />
            <Image src={flask} alt="Flask" width={100} height={100} />
            <Image src={Mongodb} alt="Mongodb" width={100} height={100} />
            <Image src={sql} alt="SQL" width={100} height={100} />
            <Image src={postman} alt="Postman" width={100} height={100} />
            <Image src={github} alt="Github" width={100} height={100} />
            <Image src={git} alt="Git" width={100} height={100} />
          </SimpleGrid>
        </Section>
      </Container>
    </div>
  );
};

export default About;

