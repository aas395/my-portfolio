import { Link } from "@chakra-ui/next-js";
import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { PageContainer } from "../PageContainer";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "../AnimatedHeading";

export const Hero = () => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true });
  const contentVariants = {
    initial: {
      opacity: 0,
      bottom: "20px",
    },
    visible: {
      opacity: 1,
      bottom: "40px",
      transition: {
        delay: 1,
      },
    },
  };

  return (
    <PageContainer alignItems="center" justifyContent="center" id="hero">
      <AnimatedHeading as={motion.h1} zIndex="100" textAlign="center">
        Full-Stack Web and Mobile Developer
      </AnimatedHeading>
      <Flex
        w="100%"
        position="absolute"
        bottom={{ base: "20px", md: "40px" }}
        left="0"
        right="0"
        justifyContent="center"
        as={motion.div}
        animate={isInView ? "visible" : "initial"}
        variants={contentVariants}
        initial="initial"
        ref={contentRef}
      >
        <Flex as={Link} href="#about" flexDir="column" alignItems="center">
          <Text lineHeight={1}>Learn More</Text>
          <motion.div
            animate={{
              transform: [
                "translateY(0px)",
                "translateY(5px)",
                "translateY(0px)",
              ],
            }}
            transition={{ repeat: Infinity, repeatDelay: 1 }}
          >
            <Icon as={ChevronDownIcon} boxSize={6} />
          </motion.div>
        </Flex>
      </Flex>
    </PageContainer>
  );
};
