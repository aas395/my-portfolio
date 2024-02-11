import { contentVariants } from "@/theme";
import { Flex } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

export const AnimatedContent = ({ children, ...props }: PropsWithChildren) => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true });

  return (
    <Flex
      as={motion.div}
      variants={contentVariants}
      ref={contentRef}
      animate={isInView ? "visible" : "initial"}
      initial="initial"
      position="relative"
      flexDir="column"
    >
      {children}
    </Flex>
  );
};
