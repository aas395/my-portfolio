import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Icon, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export const NextPageLink = ({ url, show }: { url: string; show: boolean }) => {
  const bottomAmount = useBreakpointValue({ base: "15dvh", md: "40px" });
  const contentVariants = {
    initial: {
      opacity: 0,
      bottom: "0dvh",
    },
    visible: {
      opacity: 1,
      bottom: bottomAmount,
      transition: {
        delay: 1.5,
      },
    },
  };

  return (
    <Flex
      w="100%"
      position="absolute"
      left="0"
      right="0"
      justifyContent="center"
      as={motion.div}
      animate={show ? "visible" : "initial"}
      variants={contentVariants}
      initial="initial"
      zIndex={100}
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
          <Icon as={ChevronDownIcon} boxSize={12} color="#fff" />
        </motion.div>
      </Flex>
    </Flex>
  );
};
