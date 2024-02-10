import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { PageContainer } from "../PageContainer";

export const Services = () => {
  return (
    <PageContainer id="services">
      <Flex flexDir="column" alignItems="center" alignSelf="center">
        <Heading as="h2" mb={4} color="#333">
          Services
        </Heading>
        <Text textAlign="center">
          Full-stack, React-focused web development. Mobile development with
          React Native.
          <br />
          <br />
          Got a project that uses a different stack? I love learning new
          technologies and pick new tools up quickly. Send me a message and
          let&apos;s talk!
        </Text>
        <Button as="a" href="#contact" mt={6}>
          Reach Out
        </Button>
      </Flex>
    </PageContainer>
  );
};
