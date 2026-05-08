"use client";

import { PageContainer } from "../components/PageContainer";
import { AnimatedHeading } from "../components/AnimatedHeading";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { PageSection } from "../components/PageSection";
import { AnimatedContent } from "../components/AnimatedContent";

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
          justifyContent="center"
        >
          <AnimatedHeading
            zIndex="100"
            textAlign="center"
            // paddingTop={{ base: 0, md: 72 }}
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
          About
        </AnimatedHeading>
        <AnimatedContent fontSize="xl">
          <Flex
            textAlign={{ base: "center", md: "left" }}
            flexDir="column"
            gap={4}
          >
            <Text position="relative">
              With over 15 years of full-stack software development experience
              and a client list ranging from solo-founder startups to
              multinational corporations, I bring a passion for technology, a
              business-first approach to software development, and a commitment
              to success to every project.
            </Text>
            <Text>
              I got my start in 2007 in the New York tech startup scene and have
              been working on SaaS products ever since. I have been lucky enough
              to work with and learn from some of the world&apos;s most
              successful entrepreneurs and play important roles in a number of
              early-stage projects. I often wear many hats on my projects, from
              customer support to product development to CTO, and thrive in
              roles where I can bring my experience in different disciplines to
              the table.
            </Text>
            <Text>
              In addition to web and mobile development and startup life, I love
              traveling, rock climbing, foreign languages, food,
              entrepreneurship, and real estate investment.
            </Text>
          </Flex>
        </AnimatedContent>
      </PageSection>
    </PageContainer>
  );
};
