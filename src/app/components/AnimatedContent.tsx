import { contentVariants } from "@/theme";
import { Flex, FlexProps } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

export const AnimatedContent = ({
  children,
  ...props
}: PropsWithChildren<FlexProps>) => {
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
      {...props}
    >
      {children}
    </Flex>
  );
};
