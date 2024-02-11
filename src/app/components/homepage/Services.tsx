import { Button, Flex, Text } from "@chakra-ui/react";
import { PageContainer } from "../PageContainer";
import { AnimatedHeading } from "../AnimatedHeading";
import { AnimatedContent } from "../AnimatedContent";

export const Services = () => {
  return (
    <PageContainer id="services">
      <Flex flexDir="column" alignItems="center" alignSelf="center">
        <AnimatedHeading>Services</AnimatedHeading>
        <AnimatedContent>
          <Text textAlign="center">
            Full-stack, React-focused web development. Mobile development with
            React Native.
            <br />
            <br />
            Got a project that uses a different stack? I love learning new
            technologies and pick new tools up quickly. Send me a message and
            let&apos;s talk!
          </Text>
          <Button
            as="a"
            href="#contact"
            mt={6}
            w={{ base: "100%", md: "200px" }}
            alignSelf="center"
          >
            Reach Out
          </Button>
        </AnimatedContent>
      </Flex>
    </PageContainer>
  );
};
