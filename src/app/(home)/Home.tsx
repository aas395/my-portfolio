"use client";

import { PageContainer } from "../components/PageContainer";
import { AnimatedHeading } from "../components/AnimatedHeading";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { PageSection } from "../components/PageSection";

const inter = Inter({ subsets: ["latin"] });

export const Home = () => {
  const contentRef = useRef(null);
  return (
    <PageContainer id="hero">
      <PageSection backgroundImgSrc="/trevor-hayes-IA8FR0RyJDE-unsplash.webp">
        <Flex
          flexDir="column"
          alignItems="center"
          alignSelf="center"
          w="100%"
          ref={contentRef}
          h="100vh"
        >
          <AnimatedHeading
            zIndex="100"
            textAlign="center"
            paddingTop={{ base: 0, md: 72 }}
            textStyle="h1"
          >
            Web Development and Mobile App Development Done Right
          </AnimatedHeading>
          <AnimatedHeading
            as={motion.h2}
            zIndex="100"
            textAlign="center"
            fontWeight="normal"
            className={inter.className}
            textStyle="h2"
          >
            I build websites, web applications, and mobile apps that move your
            business forward.
          </AnimatedHeading>
        </Flex>
      </PageSection>
      <PageSection backgroundColor="#333">
        <AnimatedHeading
          as={motion.h3}
          textAlign="center"
          textStyle="h3"
          mt={16}
        >
          Test
        </AnimatedHeading>
      </PageSection>
    </PageContainer>
  );
};
