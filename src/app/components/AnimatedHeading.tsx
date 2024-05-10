import { headerVariants } from "@/theme";
import { Heading, HeadingProps } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { Lato } from "next/font/google";
import { PropsWithChildren, useRef } from "react";

const lato = Lato({ subsets: ["latin"], weight: ["900", "400"] });

export const AnimatedHeading = ({
  children,
  ...props
}: PropsWithChildren<HeadingProps>) => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <Heading
      as={motion.h1}
      mb={{ base: 6, md: 4 }}
      variants={headerVariants}
      initial="initial"
      animate={isInView ? "visible" : "initial"}
      ref={headerRef}
      position="relative"
      color="#fff"
      fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
      lineHeight={{ base: "1.125", md: "auto" }}
      className={lato.className}
      {...props}
    >
      {children}
    </Heading>
  );
};
