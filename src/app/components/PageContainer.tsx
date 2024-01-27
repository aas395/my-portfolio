import { Container, ContainerProps } from "@chakra-ui/react";

export const PageContainer = ({ children, ...props }: ContainerProps) => {
  return (
    <Container
      height="100vh"
      w="100vw"
      justifyContent="center"
      display="flex"
      position="relative"
      scrollSnapAlign="start"
      {...props}
    >
      {children}
    </Container>
  );
};
