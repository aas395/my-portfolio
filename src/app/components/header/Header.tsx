import { Link } from "@chakra-ui/next-js";
import {
  Flex,
  Heading,
  Container,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MobileNav } from "./MobileNav";

const links = [
  {
    href: "#about",
    text: "About",
  },
  {
    href: "#services",
    text: "Services",
  },
  {
    href: "#work",
    text: "Work",
  },
  {
    href: "#contact",
    text: "Contact",
  },
];

export type Link = (typeof links)[0];

export const Header = ({
  activePageId,
  setActivePageId,
}: {
  activePageId: string | undefined;
  setActivePageId: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const linkStateVariants = {
    hidden: { height: "0", width: "0" },
    active: { height: "1px", width: "100%" },
  };

  return (
    <Container
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={100}
      justifyContent="space-between"
      w="100%"
      maxWidth="auto"
      display="flex"
      alignItems="center"
      h="100px"
    >
      <Heading as="h2">
        <Link href="#hero">Aaron Smyth</Link>
      </Heading>

      <Flex
        gap={8}
        as="nav"
        justifyContent="center"
        alignItems="center"
        position="relative"
        flexDir={{ base: "column", md: "row" }}
      >
        <MobileNav
          links={links}
          activePageId={activePageId}
          linkStateVariants={linkStateVariants}
          setActivePageId={setActivePageId}
        />
        <Box
          gap={{ base: 0, md: 8 }}
          as={motion.div}
          right="0"
          className="hidden md:flex"
        >
          {links.map((item) => {
            const isActive = `#${activePageId}` === item.href;
            return (
              <Link
                as="a"
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActivePageId(item.href.slice(1));
                }}
                position="relative"
                display="block"
                justifyContent="center"
                alignItems="center"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Box
                  as={motion.div}
                  height="100%"
                  width="100%"
                  whileHover="active"
                >
                  {item.text}
                  <Flex
                    as={motion.div}
                    width="100%"
                    position="absolute"
                    left="0"
                    bottom={{ base: "0px", md: "-6px" }}
                    alignItems="center"
                    justifyContent="center"
                    height="1px"
                  >
                    <Box
                      as={motion.div}
                      display="block"
                      backgroundColor="black"
                      variants={linkStateVariants}
                      animate={isActive ? "active" : undefined}
                    />
                  </Flex>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Flex>
    </Container>
  );
};
