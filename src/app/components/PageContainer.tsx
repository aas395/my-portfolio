import { Box, Container, ContainerProps } from "@chakra-ui/react";
import { PropsWithChildren, useRef } from "react";
import { motion, useInView } from "framer-motion";

export const PageContainer = ({
  children,
  backgroundImgSrc,
  // contentBackgroundColor = "#666",
  ...props
}: PropsWithChildren<
  ContainerProps & { backgroundImgSrc: string; contentBackgroundColor?: string }
>) => {
  /* this type definition is due to a ts-related bug. Solution here: https://github.com/styled-components/styled-components/issues/4166 */
  return (
    <Box
      w="100vw"
      scrollSnapAlign="start"
      display="flex"
      position="initial"
      paddingTop={{ base: 0, md: 72 }}
      {...props}
    >
      <Box w="100%" zIndex={1}>
        <Container
          w="100vw"
          justifyContent="center"
          position="relative"
          maxWidth={{ base: "100vw", md: "920px", xl: "960px" }}
          zIndex={1}
        >
          {children}
        </Container>
      </Box>
      <Box position="fixed" height="100vh" w="100vw" top={0}>
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.4}
          bgColor="#000"
        />
        <AnimatedBackgroundImage src={backgroundImgSrc} />
      </Box>
    </Box>
  );
};

export const AnimatedBackgroundImage = ({ src }: { src: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    initial: {
      opacity: 0,
      top: "10px",
    },
    visible: {
      opacity: 1,
      top: "0px",
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <motion.img
      src={src}
      alt="background"
      className="absolute inset-0 w-full h-full object-cover z-[-1]"
      variants={variants}
      initial={"initial"}
      animate={isInView ? "visible" : "initial"}
      transition={{ duration: 1 }}
      width="100%"
      ref={ref}
    />
  );
};
