import NextLink from "next/link";
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
import { GridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Projects from "./projects";
import google from "../public/images/google-ctf.png";
import Image from "next/image";
import sc900 from "../public/images/sc-900.png";
import sc900badge from "../public/images/microsoft-certified-security-compliance-and-identity-fundamentals.png";
import googlebadge from "../public/images/google-data-analytics-certificate.2.png";
import About from "../components/About";
import ProjectSection from "../components/ProjectSection";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>
    <Container mt={"4.5rem"} fontSize="18px">
      <center>
        <Box
          animate={{
            scale: [1, 1, 1, 1, 1],
            rotate: [0, 270, 270, 270, 0],
          }}
          boxShadow="2xl"
          bg={"white"}
          borderWidth={2}
          w="180px"
          h="180px"
          display="inline-block"
          borderRadius="500px"
          overflow="hidden"
        >
          <ProfileImage
            src="/images/main-002.jpg"
            alt="Profile image"
            width="200"
            height="230"
          />
        </Box>
      </center>
      <About />
    </Container>

    <ProjectSection />

    <Container mt={12} fontSize="18px">
      <h2 className="text-2xl text-center font-semibold border-b-2 pb-8 mb-8">
        Certifications
      </h2>
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
          href="https://www.coursera.org/account/accomplishments/professional-cert/XEXFS5QTXECG"
          title="Google Data Analytics Professional (8 courses)"
          thumbnail={google}
        ></GridItem>
        <GridItem
          href="https://www.credly.com/badges/d8fe4ff3-e205-46b8-9e3d-4624d0c1338f/public_url"
          title="Microsoft Certified: Security, Compliance, and Identity Fundamentals"
          thumbnail={sc900}
        ></GridItem>
      </SimpleGrid>
    </Container>

    <Container>
      <h2 className="text-2xl text-center font-semibold border-b-2 pb-8 mb-8">
        Badges
      </h2>
      <SimpleGrid columns={[2, 3, 3]} gap={10}>
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
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
