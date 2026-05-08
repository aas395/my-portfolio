import { ChevronDown } from "lucide-react";
import { chakra, Icon, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

const ChakraDiv = chakra("div");
const MotionDiv = motion(ChakraDiv) as any;
const ChakraLink = chakra(NextLink);

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
    <MotionDiv
      w="100%"
      position="absolute"
      left="0"
      right="0"
      display="flex"
      justifyContent="center"
      animate={show ? "visible" : "initial"}
      variants={contentVariants}
      initial="initial"
      zIndex={100}
    >
      <ChakraLink href={url} flexDir="column" alignItems="center" display="flex">
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
          <Icon as={ChevronDown} boxSize={12} color="#fff" />
        </motion.div>
      </ChakraLink>
    </MotionDiv>
  );
};
