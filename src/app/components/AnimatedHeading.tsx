import { headerVariants } from "@/theme";
import { Heading, HeadingProps } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

export const AnimatedHeading = ({
  children,
  ...props
}: PropsWithChildren<HeadingProps>) => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <Heading
      as={motion.h2}
      mb={4}
      variants={headerVariants}
      initial="initial"
      animate={isInView ? "visible" : "initial"}
      ref={headerRef}
      position="relative"
      color="#fff"
      fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
      {...props}
    >
      {children}
    </Heading>
  );
};
