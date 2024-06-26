"use client";

import { Link, Image } from "@chakra-ui/next-js";
import { Flex, Container, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MobileNav } from "./MobileNav";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/services",
    text: "Services",
  },
  {
    href: "/work",
    text: "Work",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/contact",
    text: "Contact",
  },
];

export type Link = (typeof links)[0];

export const Header = () => {
  const pathname = usePathname();
  const linkStateVariants = {
    hidden: { height: "2px", width: "0" },
    active: { height: "2px", width: "100%" },
  };

  return (
    <Container
      as="header"
      position={{ base: "relative", md: "fixed" }}
      top="0"
      left="0"
      right="0"
      zIndex={100}
      justifyContent="space-between"
      w="100%"
      maxWidth="auto"
      display="flex"
      alignItems="center"
      h={{ base: "auto", md: "132px" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Link href="/" color="#fff" mt={{ base: "24px", md: "16px" }}>
        <Image
          src="/logo.svg"
          width={478.04575}
          height={104.446}
          alt="Aaron Smyth"
          w={{ base: "100%", md: "400px" }}
          h={"auto"}
        />
      </Link>

      <Flex
        gap={8}
        as="nav"
        justifyContent="center"
        alignItems="center"
        position="relative"
        flexDir={{ base: "column", md: "row" }}
      >
        <MobileNav links={links} />
        <Box
          gap={{ base: 0, md: 8 }}
          as={motion.div}
          right="0"
          className="hidden md:flex"
        >
          {links.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
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
                  color="#fff"
                  fontWeight={"bold"}
                  fontSize="22px"
                  textShadow="0 0 3px #000"
                  role="group"
                >
                  {item.text}
                  <Flex
                    as={motion.div}
                    width="100%"
                    position="absolute"
                    left="0"
                    bottom={{ base: "0px", md: "-4px" }}
                    alignItems="center"
                    justifyContent="center"
                    height="2px"
                  >
                    <Box
                      as={motion.div}
                      display="block"
                      backgroundColor="#fff"
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
