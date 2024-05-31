import { forwardRef } from "react";
import Logo from "./logo";
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
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import Paragraph from "../components/paragraph";

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? "transparent" : undefined}
      color={active ? "teal" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("transparent", "#0000")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        flexDirection={"row"}
        p={2}
        width={"100%"}
        wrap="wrap"
        gap={10}
      >
        <LinkItem href="./" path={path}>
          <Code
            variant={"outline"}
            fontWeight={900}
            fontFamily={""}
            fontSize={"18px"}
            padding={2}
            colorScheme="cyan"
            children=" <GauravGarwa/>"
          />
        </LinkItem>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 1, md: 0 }}
          padding={2}
          gap={10}
        >
          <LinkItem href="/about" path={path}>
            <Code colorScheme="pink" size={40} children="About" />
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            <Code colorScheme="green" size={40} children="Projects" />
          </LinkItem>

          <Link
            href="https://drive.google.com/file/d/1-4WGHl1LUioDFAP4Nq1eR77Z0jLFadQO/view?usp=sharing"
            target="_blank"
          >
            <Button variant="ghost" color="#178edd" backgroundColor={"#EDF2F7"}>
              Resume
            </Button>
          </Link>

          {/* <ThemeToggleButton /> */}
        </Stack>

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/about">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/projects">
                  Projects
                </MenuItem>
                <MenuItem as={MenuLink} href="/certifications">
                  Certifications
                </MenuItem>
                {/* <MenuItem as={MenuLink} href="/blogs">
                  Blogs
                </MenuItem> */}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default Navbar;
