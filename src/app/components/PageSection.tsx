import { Box, Container, Flex, FlexProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { AnimatedBackgroundImage } from "./PageContainer";

export const PageSection = ({
  children,
  backgroundImgSrc,
  ...props
}: PropsWithChildren<FlexProps & { backgroundImgSrc?: string }>) => {
  return (
    <Flex as="section" {...props}>
      {backgroundImgSrc && (
        <>
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
        </>
      )}
      <Container maxWidth={{ base: "100vw", md: "920px", xl: "960px" }}>
        {children}
      </Container>
    </Flex>
  );
};
