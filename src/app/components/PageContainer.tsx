import { Container, ContainerProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const PageContainer = ({
  children,
  ...props
}: PropsWithChildren<ContainerProps>) => {
  /* this type definition is due to a ts-related bug. Solution here: https://github.com/styled-components/styled-components/issues/4166 */
  return (
    <Container
      height="100vh"
      w="100vw"
      justifyContent="center"
      display="flex"
      position="relative"
      scrollSnapAlign="start"
      maxWidth={{ base: "600px", xl: "960px" }}
      {...props}
    >
      {children}
    </Container>
  );
};
