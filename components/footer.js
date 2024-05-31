import Logo from "./logo";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";

import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  SimpleGrid,
  chakra,
  Center,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Badge,
  Divider,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";

const Footer = () => {
  return (
    <Layout>
      <Divider />

      <Box align="center" fontSize="16px" className="mt-3">
        Thank You for visiting!
        <p>&copy; Gaurav Garwa</p>
      </Box>

      {/* <center>
        <Logo />
      </center> */}
    </Layout>
  );
};

export default Footer;
