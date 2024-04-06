import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "gray.800",
        scrollBehavior: "smooth",
        fontFamily:
          "SF Pro Display,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif",
      },
    },
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          color: "#fff",
          _placeholder: {
            color: "#fff",
          },
        },
      },
    },
    Textarea: {
      baseStyle: {
        color: "#fff",
        _placeholder: {
          color: "#fff",
        },
      },
    },
  },
});

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
