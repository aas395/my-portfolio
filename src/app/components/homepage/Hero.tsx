import { Link } from "@chakra-ui/next-js";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { PageContainer } from "../PageContainer";

export const Hero = () => {
  return (
    <PageContainer alignItems="center" justifyContent="center" id="hero">
      <Heading as="h1" zIndex="100" textAlign="center">
        Full-Stack Web and Mobile Developer
      </Heading>
      {/* <Box
    position="absolute"
    as="video"
    w="100vw"
    h="100vh"
    top="0"
    left="0"
    autoPlay
    muted
    loop
    objectFit="cover"
  >
    <source src="/Trimmed Plant.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </Box> */}
      <Flex
        w="100%"
        position="absolute"
        bottom="40px"
        left="0"
        right="0"
        justifyContent="center"
      >
        <Link href="#about">
          <Text>Learn More</Text>
        </Link>
      </Flex>
    </PageContainer>
  );
};
