import { Flex, Text } from "@chakra-ui/react";
import { PageContainer } from "../PageContainer";
import { AnimatedHeading } from "../AnimatedHeading";
import { AnimatedContent } from "../AnimatedContent";
import { NextPageLink } from "../NextPageLink";

export const About = () => {
  return (
    <PageContainer
      id="about"
      backgroundImgSrc="josseph-downs-WOkl7pWtcE0-unsplash.webp"
    >
      <Flex flexDir="column" alignItems="center" alignSelf="center">
        <AnimatedHeading>About</AnimatedHeading>
        <AnimatedContent>
          <Text textAlign="center" position="relative">
            With over 15 years of full-stack software development experience and
            a client list ranging from solo-founder startups to multinational
            corporations, I bring a passion for technology, a business-first
            approach to software development, and a commitment to success to
            every project.
          </Text>
        </AnimatedContent>
        <NextPageLink url="#services" />
      </Flex>
    </PageContainer>
  );
};
