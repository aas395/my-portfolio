import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { PageContainer } from "../PageContainer";
import { AnimatedHeading } from "../AnimatedHeading";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { AnimatedContent } from "../AnimatedContent";

export const Services = () => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef);

  return (
    <PageContainer id="services">
      <Flex flexDir="column" alignItems="center" alignSelf="center">
        <AnimatedHeading>Services</AnimatedHeading>
        <AnimatedContent>
          <Text textAlign="center" ref={contentRef}>
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
        </AnimatedContent>
      </Flex>
    </PageContainer>
  );
};
