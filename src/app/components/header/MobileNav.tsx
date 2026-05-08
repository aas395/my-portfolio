"use client";

import { Menu as MenuIcon } from "lucide-react";
import {
  chakra,
  Icon,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { type Link } from "./Header";

const ChakraDiv = chakra("div");
const MotionDiv = motion(ChakraDiv) as any;
const ChakraLink = chakra(NextLink);

export const MobileNav = ({ links }: { links: Link[] }) => {
  const { open: isOpen, onClose, onToggle } = useDisclosure();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const variants = {
    visible: { opacity: 1, height: "auto" },
    hidden: { opacity: 0, height: 0 },
  };
  const showMenu = useBreakpointValue({ base: isOpen, md: true });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        e.target &&
        !(e.target as HTMLElement).id.includes("menu-button") &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <ChakraDiv
      className="flex md:hidden"
      flexDir="column"
      alignItems="center"
      position="fixed"
      bottom="2dvh"
      right="3vw"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 2 }}
      >
        <IconButton
          aria-label="Options"
          variant="outline"
          className="md:hidden"
          id="menu-button"
          onClick={(e) => {
            onToggle();
            if (e.currentTarget.id.includes("menu-button")) {
              e.currentTarget.blur();
            }
          }}
          bgColor={isOpen ? "#fff" : "transparent"}
          color={isOpen ? "#000" : "#fff"}
          backdropFilter="blur(8px)"
          flexGrow={0}
          _hover={
            isOpen
              ? { bgColor: "#fff", color: "#000" }
              : { bgColor: "transparent", color: "#fff" }
          }
          ref={buttonRef}
          borderWidth="2px"
          borderRadius="50%"
          w="44px"
          h="44px"
          boxShadow="0 0 3px 0 #000"
        >
          <Icon as={MenuIcon} pointerEvents="none" boxSize="22px" />
        </IconButton>
      </motion.div>
      {showMenu && (
        <MotionDiv
          display="flex"
          gap={{ base: 2, md: 8 }}
          flexDir={{ base: "column", md: "row" }}
          bottom="52px"
          animate={showMenu ? "visible" : "hidden"}
          variants={variants}
          ref={menuRef}
          boxShadow={{ base: "0 0 3px 0 #000", md: "none" }}
          borderRadius={{ base: "lg", md: "none" }}
          p={{ base: 4, md: 0 }}
          bgColor={{ base: "rgba(200,200,200,.4)", md: "none" }}
          backdropFilter={{ base: "contrast(20%) blur(9px)", md: "none" }}
          flexShrink={0}
          position="absolute"
          right="0"
          px={8}
        >
          {links.map((item) => {
            return (
              <ChakraLink
                key={item.href}
                href={item.href}
                onClick={() => {
                  onClose();
                }}
                position="relative"
                display="block"
                justifyContent="center"
                alignItems="center"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <ChakraDiv
                  height="100%"
                  width="100%"
                  color="#fff"
                  fontSize="20px"
                >
                  {item.text}
                </ChakraDiv>
              </ChakraLink>
            );
          })}
        </MotionDiv>
      )}
    </ChakraDiv>
  );
};
