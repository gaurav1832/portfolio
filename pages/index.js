// import NextLink from "next/link";
// import {
//   Link,
//   Container,
//   Heading,
//   Box,
//   Button,
//   List,
//   ListItem,
//   chakra,
//   Center,
//   Code,
//   SimpleGrid,
//   Highlight,
//   shouldForwardProp,
//   Badge,
// } from "@chakra-ui/react";
// import {
//   IoLogoTwitter,
//   IoLogoInstagram,
//   IoLogoGithub,
//   IoLogoLinkedin,
//   IoMail,
// } from "react-icons/io5";
// import { GridItem } from "../components/grid-item";
// import Layout from "../components/layouts/article";
// import Projects from "./projects";
// import google from "../public/images/google-ctf.png";
// import Image from "next/image";
// import sc900 from "../public/images/sc-900.png";
// import sc900badge from "../public/images/microsoft-certified-security-compliance-and-identity-fundamentals.png";
// import googlebadge from "../public/images/google-data-analytics-certificate.2.png";
// import About from "../components/About";
// import ProjectSection from "../components/ProjectSection";

// const ProfileImage = chakra(Image, {
//   shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
// });

// const Home = () => (
//   <Layout>
//     <Container mt={"4.5rem"} fontSize="18px">
//       <center>
//         <Box
//           animate={{
//             scale: [1, 1, 1, 1, 1],
//             rotate: [0, 270, 270, 270, 0],
//           }}
//           boxShadow="2xl"
//           bg={"white"}
//           borderWidth={2}
//           w="180px"
//           h="180px"
//           display="inline-block"
//           borderRadius="500px"
//           overflow="hidden"
//         >
//           <ProfileImage
//             src="/images/main-002.jpg"
//             alt="Profile image"
//             width="200"
//             height="230"
//           />
//         </Box>
//       </center>
//       <About />
//     </Container>

//     <ProjectSection />

//     <Container mt={12} fontSize="18px">
//       <h2 className="text-2xl text-center font-semibold border-b-2 pb-8 mb-8">
//         Certifications
//       </h2>
//       <SimpleGrid columns={[1, 2, 2]} gap={6}>
//         <GridItem
//           href="https://www.coursera.org/account/accomplishments/professional-cert/XEXFS5QTXECG"
//           title="Google Data Analytics Professional (8 courses)"
//           thumbnail={google}
//         ></GridItem>
//         <GridItem
//           href="https://www.credly.com/badges/d8fe4ff3-e205-46b8-9e3d-4624d0c1338f/public_url"
//           title="Microsoft Certified: Security, Compliance, and Identity Fundamentals"
//           thumbnail={sc900}
//         ></GridItem>
//       </SimpleGrid>
//     </Container>

//     <Container>
//       <h2 className="text-2xl text-center font-semibold border-b-2 pb-8 mb-8">
//         Badges
//       </h2>
//       <SimpleGrid columns={[2, 3, 3]} gap={10}>
//         <GridItem
//           boxShadow="dark-lg"
//           href="https://www.credly.com/badges/a217be7c-e780-467b-a62a-dee1eb737ea5/public_url"
//           title=" "
//           thumbnail={googlebadge}
//         ></GridItem>
//         <GridItem
//           href="https://www.credly.com/badges/d8fe4ff3-e205-46b8-9e3d-4624d0c1338f/public_url"
//           title=""
//           thumbnail={sc900badge}
//         ></GridItem>
//       </SimpleGrid>
//     </Container>
//   </Layout>
// );

// export default Home;
// export { getServerSideProps } from "../components/chakra";


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
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdContacts } from "react-icons/md";

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
import nextjs from "../public/images/skills/next-js.png";
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
import ProjectSection from "../components/ProjectSection";

import About from "../components/About";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => {
  return (
    <>
      <Container fontSize="18px">
        <div className="bg-white bg-opacity-5 shadow-lg p-4 mt-12 rounded-lg flex flex-col justify-center items-center">
          <Box
            animate={{
              scale: [1, 1, 1, 1, 1],
              rotate: [0, 270, 270, 270, 0],
            }}
            boxShadow="2xl"
            borderWidth={2}
            bg="white"
            w="120px"
            h="120px"
            display="inline-block"
            borderRadius="500px"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile-pic.png"
              alt="Profile image"
              width="200"
              height="150"
            />
          </Box>

          <div className="text-center mb-2 p-2">
            <h1 className="text-3xl font-bold">Gaurav Garwa</h1>
            <p className="text-m text-gray-400">Surajgarh, Rajasthan</p>

            <section className="flex justify-center lg:space-x-20 md:space-x-10 sm:space-x-4 p-8">
              <p className="flex flex-col items-start">
                <p className="flex space-x-2">
                  <IoPhonePortraitOutline className="text-yellow-200" />
                  <span className="text-gray-400 text-sm">PHONE</span>
                </p>{" "}
                <p>+91-9828574239</p>
              </p>

              <p className="flex flex-col items-start">
                <p className="flex space-x-2">
                  <IoMail className="text-yellow-200" />
                  <span className="text-gray-400 text-sm">EMAIL</span>
                </p>
                <a
                  href="mailto:garwagaurav@gmail.com"
                  className="text-gray-100"
                >
                  garwagaurav@gmail.com
                </a>
              </p>
            </section>
          </div>

          <Section delay={0.1}>
            <List className="flex justify-center">
              <Link href="https://linkedin.com/in/gaurav1832" target="_blank">
                <Button variant="ghost" color="white" fontSize={"24px"}>
                  <IoLogoLinkedin className="text-amber-200" />
                </Button>
              </Link>
              <Link href="https://github.com/gaurav1832" target="_blank">
                <Button variant="ghost" color="white" fontSize={"24px"}>
                  <IoLogoGithub className="text-amber-200" />
                </Button>
              </Link>
              <Link href="https://leetcode.com/carlsen_magnus" target="_blank">
                <Button variant="ghost" color="white" fontSize={"24px"}>
                  <SiLeetcode className="text-amber-200" />
                </Button>
              </Link>
              <Link href="https://twitter.com/ggauravvvvv" target="_blank">
                <Button variant="ghost" color="white" fontSize={"24px"}>
                  <IoLogoTwitter className="text-amber-200" />
                </Button>
              </Link>
              <Link href="https://instagram.com/_gauravv_v_" target="_blank">
                <Button variant="ghost" color="white" fontSize={"24px"}>
                  <IoLogoInstagram className="text-amber-200" />
                </Button>
              </Link>
            </List>
          </Section>
        </div>
      </Container>

      <div className="p-8 bg-transparent shadow-md rounded-lg">
        <Container fontSize="18px">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
              Profile Summary
            </h2>

            <p>
              A highly motivated and passionate developer with a strong focus on
              full-stack development and artificial intelligence. Continuously
              driven to learn and adapt to new technologies, I prioritize
              enhancing my skill set and staying current with industry trends.
              As a proven team player, I excel in collaborative environments,
              contributing to successful group projects and hackathons. My
              problem-solving abilities are showcased through the completion of
              complex projects and competitive programming challenges. Notable
              achievements include
              <b className="text-amber-100">
                {" "}
                winning the Academic Grand Challenge on Climate Change among
                7,500+ teams,
              </b>
              being selected in the top 3,500 participants of the
              <b className="text-amber-100"> Amazon ML Summer School 2023 </b>,
              and developing AI-driven applications using OpenAI's API. My work
              also includes Leetracker, a{" "}
              <b className="text-amber-100"> live app on the Play Store</b> with
              a 5-star rating.
            </p>
          </section>
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

        <ProjectSection />

        <Container mt={8} fontSize="18px">
          <h2 className="text-2xl text-left font-semibold border-b-2 p-2 mb-2">
            Certifications
          </h2>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.coursera.org/account/accomplishments/professional-cert/XEXFS5QTXECG"
              title="Google Data Analytics Professional"
              thumbnail={google}
            ></GridItem>
            <GridItem
              href="https://www.credly.com/badges/d8fe4ff3-e205-46b8-9e3d-4624d0c1338f/public_url"
              title="Microsoft SC900"
              thumbnail={sc900}
            ></GridItem>
          </SimpleGrid>
        </Container>

        <Container>
          <h2 className="text-2xl text-left font-semibold border-b-2 p-2 mb-2">
            Badges
          </h2>
          <SimpleGrid columns={[1, 1, 4]} gap={2}>
            <GridItem
              boxShadow="dark-lg"
              href="https://www.credly.com/badges/a217be7c-e780-467b-a62a-dee1eb737ea5/public_url"
              title=" "
              thumbnail={googlebadge}
            ></GridItem>
            <GridItem
              href="https://www.credly.com/badges/d8fe4ff3-e205-46b8-9e3d-4624d0c1338f/public_url"
              title=""
              thumbnail={sc900badge}
            ></GridItem>
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
};

export default Home;
