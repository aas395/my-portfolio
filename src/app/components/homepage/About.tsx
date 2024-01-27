import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { PageContainer } from "../PageContainer";

export const About = () => {
  return (
    <PageContainer id="about">
      <Flex flexDir="column" alignItems="center" alignSelf="center">
        <Heading as="h2" mb={4}>
          About
        </Heading>
        <Text textAlign="center">
          With over 15 years of software development experience and a client
          list ranging from solo-founder startups to multinational corporations,
          Aaron brings a passion for technology, a business-first approach to
          software development, and a commitment to success to every project.
        </Text>
      </Flex>
    </PageContainer>
  );
};
