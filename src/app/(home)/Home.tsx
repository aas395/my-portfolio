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
          >
            Web Development, Mobile App Development, and AI Consulting Done Right
          </AnimatedHeading>
          <AnimatedHeading
            as={motion.h2}
            zIndex="100"
            textAlign="center"
            fontWeight="normal"
            className={inter.className}
            fontSize={{ base: "2xl", md: "4xl" }}
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
          fontSize={{ base: "2xl", md: "2xl" }}
          mt={16}
        >
          About
        </AnimatedHeading>
        <AnimatedContent fontSize="xl" pb={16}>
          <Flex
            textAlign={{ base: "center", md: "left" }}
            flexDir="column"
            gap={4}
          >
            <Text position="relative" fontSize={{ base: "lg", md: "xl" }} lineHeight={1.33}>
              With over 15 years of full-stack software development experience
              and a client list ranging from solo-founder startups to
              multinational corporations, I bring a passion for technology, a
              business-first approach to software development, and a commitment
              to success to every project.
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }} lineHeight={1.33}>
              I got my start in 2007 in the New York tech startup scene and have
              been working on SaaS products ever since. I have been lucky enough
              to work with and learn from some of the world&apos;s most
              successful entrepreneurs and play important roles in a number of
              early-stage projects. I often wear many hats on my projects, from
              customer support to product development to CTO, and thrive in
              roles where I can bring my experience in different disciplines to
              the table.
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }} lineHeight={1.33}>
              I&apos;m also deeply passionate about the transformative potential
              of AI. I help teams integrate AI tools into their development and
              business workflows to dramatically increase productivity — from
              AI-assisted coding and automated code review to building custom
              solutions powered by large language models. The teams that learn
              to work effectively with AI will have an enormous competitive
              advantage, and I can help yours get there.
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }} lineHeight={1.33}>
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
