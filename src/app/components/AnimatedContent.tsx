"use client";

import { contentVariants } from "@/theme";
import { chakra, FlexProps } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

const ChakraDiv = chakra("div");
const MotionDiv = motion(ChakraDiv);

export const AnimatedContent = ({
  children,
  ...props
}: PropsWithChildren<FlexProps>) => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true });

  return (
    <MotionDiv
      variants={contentVariants}
      ref={contentRef}
      animate={isInView ? "visible" : "initial"}
      initial="initial"
      position="relative"
      display="flex"
      flexDir="column"
      color="#fff"
      {...props}
    >
      {children}
    </MotionDiv>
  );
};
