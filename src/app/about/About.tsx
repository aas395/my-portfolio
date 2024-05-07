"use client";

import { Flex, Text } from "@chakra-ui/react";
import { PageContainer } from "../components/PageContainer";
import { AnimatedHeading } from "../components/AnimatedHeading";
import { AnimatedContent } from "../components/AnimatedContent";
import { useRef } from "react";

export const About = () => {
  const contentRef = useRef(null);
  return (
    <PageContainer
      id="about"
      backgroundImgSrc="josseph-downs-WOkl7pWtcE0-unsplash.webp"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        alignSelf="center"
        ref={contentRef}
      >
        <AnimatedHeading>About</AnimatedHeading>
        <AnimatedContent>
          <Text textAlign="center" position="relative" mb={4}>
            With over 15 years of full-stack software development experience and
            a client list ranging from solo-founder startups to multinational
            corporations, I bring a passion for technology, a business-first
            approach to software development, and a commitment to success to
            every project.
          </Text>
          <Text textAlign="center" position="relative">
            In addition to technology, I love traveling, rock climbing, foreign
            languages, food, entrepreneurship, and real estate investment.
          </Text>
        </AnimatedContent>
      </Flex>
    </PageContainer>
  );
};
