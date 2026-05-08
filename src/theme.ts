import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      color: "gray.800",
      scrollBehavior: "smooth",
      fontFamily:
        "SF Pro Display,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif",
    },
  },
});

export const system = createSystem(defaultConfig, config);

export const headerVariants = {
  initial: {
    opacity: 0,
    top: "-20px",
  },
  visible: {
    opacity: 1,
    top: "0",
    transition: {
      delay: 0.75,
    },
  },
};

export const contentVariants = {
  initial: {
    opacity: 0,
    top: "20px",
  },
  visible: {
    opacity: 1,
    top: "0",
    transition: {
      delay: 1.25,
    },
  },
};
