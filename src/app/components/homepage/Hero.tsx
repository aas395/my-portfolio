import { PageContainer } from "../PageContainer";
import { AnimatedHeading } from "../AnimatedHeading";
import { NextPageLink } from "../NextPageLink";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flex } from "@chakra-ui/react";

export const Hero = () => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true });
  return (
    <PageContainer
      alignItems="center"
      justifyContent="center"
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
        <AnimatedHeading as={motion.h1} zIndex="100" textAlign="center">
          Full-Stack Web and Mobile Developer
        </AnimatedHeading>
        <NextPageLink url="#about" show={isInView} />
      </Flex>
    </PageContainer>
  );
};
