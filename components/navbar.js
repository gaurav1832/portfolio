import { forwardRef } from "react";
import NextLink from "next/link";
import Image from "next/image";
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
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";

import nameImage from "../public/images/name.png";

const LinkItem = ({ href, path, target, children, ...props }) => {
  let active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? "transparent" : undefined}
      color={active ? "yellow.300" : inactiveColor}
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
      as="nav"
      zIndex={2}
      {...props}
    >
      <Container className="flex justify-center items-center" p={2} gap={10} display="flex" flexDirection={"row"}
        p={2}
        width={"100%"}
        wrap="wrap"
        gap={10}>
        <LinkItem href="/" path={path}>
          <Image src={nameImage} width={110} height={70}></Image>
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
            <h2 className="font-bold">About</h2>
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            <h2 className="font-bold">Portfolio</h2>
          </LinkItem>

          <LinkItem
            href="https://drive.google.com/file/d/1-4WGHl1LUioDFAP4Nq1eR77Z0jLFadQO/view?usp=sharing"
            target="_blank"
          >
            <h2 className="font-bold">Resume</h2>
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <Box
            ml={2}
            display={{ base: "inline-block", md: "none" }}
            className="!bg-black"
          >
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList className="!bg-black">
                <MenuItem as={MenuLink} href="/about" className="!bg-black">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/projects" className="!bg-black">
                  Projects
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="https://drive.google.com/file/d/1-4WGHl1LUioDFAP4Nq1eR77Z0jLFadQO/view?usp=sharing"
                  className="!bg-black"
                >
                  Resume
                </MenuItem>
                {/* <MenuItem as={MenuLink} href="/blogs">
                  Blogs
                </MenuItem> */}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
