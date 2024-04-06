import { PageContainer } from "../PageContainer";
import { AnimatedHeading } from "../AnimatedHeading";
import { NextPageLink } from "../NextPageLink";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <PageContainer
      alignItems="center"
      justifyContent="center"
      id="hero"
      backgroundImgSrc="/trevor-hayes-IA8FR0RyJDE-unsplash.webp"
    >
      <AnimatedHeading as={motion.h1} zIndex="100" textAlign="center">
        Full-Stack Web and Mobile Developer
      </AnimatedHeading>
      <NextPageLink url="#about" />
    </PageContainer>
  );
};
