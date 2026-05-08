"use client";

import { headerVariants } from "@/theme";
import { chakra, HTMLChakraProps } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { Lato } from "next/font/google";
import { PropsWithChildren, useRef } from "react";

const lato = Lato({ subsets: ["latin"], weight: ["900", "400"] });

const ChakraH1 = chakra("h1");
const MotionH1 = motion(ChakraH1);

export const AnimatedHeading = ({
  children,
  ...props
}: PropsWithChildren<HTMLChakraProps<"h1">>) => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <MotionH1
      fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
      fontWeight="bold"
      mb={{ base: 6, md: 4 }}
      variants={headerVariants}
      initial="initial"
      animate={isInView ? "visible" : "initial"}
      ref={headerRef}
      position="relative"
      color="#fff"
      lineHeight={{ base: "1.125", md: "auto" }}
      className={lato.className}
      {...props}
    >
      {children}
    </MotionH1>
  );
};
