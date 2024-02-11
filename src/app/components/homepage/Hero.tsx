import { PageContainer } from "../PageContainer";
import { motion } from "framer-motion";
import { AnimatedHeading } from "../AnimatedHeading";
import { NextPageLink } from "../NextPageLink";

export const Hero = () => {
  return (
    <PageContainer alignItems="center" justifyContent="center" id="hero">
      <AnimatedHeading as={motion.h1} zIndex="100" textAlign="center">
        Full-Stack Web and Mobile Developer
      </AnimatedHeading>
      <NextPageLink url="#about" />
    </PageContainer>
  );
};
