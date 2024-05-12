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
    Text: {
      baseStyle: {
        fontSize: { base: "lg", md: "xl" },
        lineHeight: 1.33,
      },
      variants: {
        itemTitle: {
          fontSize: { base: "2xl", md: "2xl", lg: "3xl" },
          lineHeight: { base: 1.125, md: "auto" },
          fontWeight: "bold",
        },
      },
    },
    Button: {
      baseStyle: {
        fontSize: { base: "lg", md: "xl" },
        lineHeight: 1.33,
        height: { base: "14", md: "10" },
        boxShadow: "0 0 3px 0 #000",
        _hover: {
          textDecoration: "none",
        },
      },
      variants: {
        solid: {
          _hover: {
            backgroundColor: "#ccc",
          },
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
