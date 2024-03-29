import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Icon } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export const NextPageLink = ({ url }: { url: string }) => {
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
      <Flex as={Link} href={url} flexDir="column" alignItems="center">
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
  );
};
