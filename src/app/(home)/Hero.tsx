"use client";

import { PageContainer } from "../components/PageContainer";
import { AnimatedHeading } from "../components/AnimatedHeading";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Hero = () => {
  const contentRef = useRef(null);
  return (
    <PageContainer
      id="hero"
      backgroundImgSrc="/trevor-hayes-IA8FR0RyJDE-unsplash.webp"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        alignSelf="center"
        w="100%"
        ref={contentRef}
      >
        <AnimatedHeading zIndex="100" textAlign="center">
          Web Development and Mobile App Development Done Right
        </AnimatedHeading>
        <AnimatedHeading
          as={motion.h2}
          zIndex="100"
          textAlign="center"
          fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
          fontWeight="normal"
          className={inter.className}
        >
          Build websites, web applications, and mobile apps that move your
          business forward.
        </AnimatedHeading>
      </Flex>
    </PageContainer>
  );
};
