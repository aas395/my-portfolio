"use client";

import NextLink from "next/link";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { chakra, Flex, Box } from "@chakra-ui/react";
import { MobileNav } from "./MobileNav";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Link = chakra(NextLink);
const MotionBox = chakra(motion.div);

const links = [
  { href: "/services", text: "Services" },
  { href: "/work", text: "Work" },
  { href: "/contact", text: "Contact" },
];

export type Link = (typeof links)[0];

const linkStateVariants = {
  hidden: { height: "2px", width: "0" },
  active: { height: "2px", width: "100%" },
};

const NavLink = ({ item, isActive }: { item: Link; isActive: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={item.href}
      position="relative"
      display="block"
      justifyContent="center"
      alignItems="center"
      _hover={{ textDecoration: "none" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        color="#fff"
        fontWeight="bold"
        fontSize="22px"
        textShadow="0 0 3px #000"
      >
        {item.text}
        <Flex
          width="100%"
          position="absolute"
          left="0"
          bottom={{ base: "0px", md: "-4px" }}
          alignItems="center"
          justifyContent="center"
          height="2px"
        >
          <MotionBox
            display="block"
            backgroundColor="#fff"
            variants={linkStateVariants}
            initial="hidden"
            animate={isActive || isHovered ? "active" : "hidden"}
          />
        </Flex>
      </Box>
    </Link>
  );
};

export const Header = () => {
  const pathname = usePathname();

  return (
    <Box
      as="header"
      position={{ base: "relative", md: "fixed" }}
      top="0"
      left="0"
      right="0"
      zIndex={100}
      justifyContent="space-between"
      w="100%"
      px="16px"
      display="flex"
      alignItems="center"
      h={{ base: "auto", md: "132px" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Link href="/" color="#fff" mt={{ base: "24px", md: "16px" }}>
        <Box w={{ base: "100%", md: "400px" }}>
          <NextImage
            src="/logo.svg"
            width={478}
            height={104}
            alt="Aaron Smyth"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
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
        <MotionBox gap={{ base: 0, md: 8 }} right="0" className="hidden md:flex">
          {links.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              isActive={pathname === item.href}
            />
          ))}
        </MotionBox>
      </Flex>
    </Box>
  );
};
