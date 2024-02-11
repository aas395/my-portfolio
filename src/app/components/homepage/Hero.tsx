import { Link } from "@chakra-ui/next-js";
import { Flex, Heading, Icon, IconButton, Text } from "@chakra-ui/react";
import { PageContainer } from "../PageContainer";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <PageContainer alignItems="center" justifyContent="center" id="hero">
      <Heading as="h1" zIndex="100" textAlign="center">
        Full-Stack Web and Mobile Developer
      </Heading>
      <Flex
        w="100%"
        position="absolute"
        bottom="40px"
        left="0"
        right="0"
        justifyContent="center"
      >
        <Flex as={Link} href="#about" flexDir="column" alignItems="center">
          <Text>Learn More</Text>
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
