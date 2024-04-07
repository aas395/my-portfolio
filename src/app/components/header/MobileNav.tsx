import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Link as ChakraLink,
  Menu,
  MenuButton,
  useBreakpointValue,
  useDisclosure,
  useOutsideClick,
  Fade,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { type Link } from "./Header";

export const MobileNav = ({
  links,
  setActivePageId,
}: {
  links: Link[];
  activePageId: string | undefined;
  linkStateVariants: Record<string, {}>;
  setActivePageId: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const variants = {
    visible: { opacity: 1, height: "auto" },
    hidden: { opacity: 0, height: 0 },
  };
  const showMenu = useBreakpointValue({ base: isOpen, md: true });

  useOutsideClick({
    ref: menuRef,
    handler: (e: Event) => {
      if (
        e.target &&
        !(e.target as HTMLDivElement).id.includes("menu-button")
      ) {
        onClose();
      }
    },
  });
  console.log(isOpen);
  return (
    <Box
      className="flex md:hidden"
      flexDir="column"
      alignItems="center"
      position="fixed"
      bottom="2dvh"
      right="3vw"
    >
      <Menu>
        <Fade in={true} transition={{ enter: { duration: 0.25, delay: 2 } }}>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon pointerEvents="none" boxSize="22px" />}
            variant="outline"
            className="md:hidden"
            id="menu-button"
            onClick={() => {
              onToggle();
            }}
            bgColor={isOpen ? "#fff" : "transparent"}
            color={isOpen ? "#000" : "#fff"}
            backdropFilter="blur(8px)"
            flexGrow={0}
            _hover={{
              bgColor: "#fff",
              color: "#000",
            }}
            ref={buttonRef}
            borderWidth="2px"
            borderRadius="50%"
            w="44px"
            h="44px"
            boxShadow="0 0 3px 0 #000"
          />
        </Fade>
        {showMenu && (
          <Flex
            gap={{ base: 2, md: 8 }}
            as={motion.div}
            flexDir={{ base: "column", md: "row" }}
            bottom="52px"
            animate={showMenu ? "visible" : "hidden"}
            variants={variants}
            ref={menuRef}
            boxShadow={{ base: "0 0 3px 0 #000", md: "none" }}
            borderRadius={{ base: "lg", md: "none" }}
            p={{ base: 4, md: 0 }}
            bgColor={{ base: "rgba(200,200,200,.4)", md: "none" }}
            backdropFilter={{ base: "contrast(20%) blur(9px)", md: "none" }}
            flexShrink={0}
            position="absolute"
            right="0"
            px={8}
          >
            {links.map((item) => {
              return (
                <ChakraLink
                  as="a"
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActivePageId(item.href.slice(1));
                    onClose();
                  }}
                  position="relative"
                  display="block"
                  justifyContent="center"
                  alignItems="center"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  <Box
                    as={motion.div}
                    height="100%"
                    width="100%"
                    whileHover="active"
                    color="#fff"
                    fontSize="20px"
                  >
                    {item.text}
                  </Box>
                </ChakraLink>
              );
            })}
          </Flex>
        )}
      </Menu>
    </Box>
  );
};
