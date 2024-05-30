import { Box, ContainerProps } from "@chakra-ui/react";
import { PropsWithChildren, useRef } from "react";
import { motion, useInView } from "framer-motion";

export const PageContainer = ({
  children,
  backgroundImgSrc,
  ...props
}: PropsWithChildren<ContainerProps & { backgroundImgSrc?: string }>) => {
  /* this type definition is due to a ts-related bug. Solution here: https://github.com/styled-components/styled-components/issues/4166 */
  return (
    <Box
      w="100vw"
      scrollSnapAlign="start"
      display="flex"
      position="relative"
      {...props}
    >
      <Box w="100%" zIndex={1}>
        {children}
      </Box>
      {backgroundImgSrc && (
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
      )}
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
      className="absolute inset-0 w-full h-full object-cover z-[-1] top-1/2 -translate-y-1/2"
      variants={variants}
      initial={"initial"}
      animate={isInView ? "visible" : "initial"}
      transition={{ duration: 1 }}
      width="100%"
      ref={ref}
    />
  );
};
