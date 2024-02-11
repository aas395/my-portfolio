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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { type Link } from "./Header";

export const MobileNav = ({
  links,
  activePageId,
  linkStateVariants,
  setActivePageId,
}: {
  links: Link[];
  activePageId: string | undefined;
  linkStateVariants: Record<string, {}>;
  setActivePageId: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const menuRef = useRef<HTMLDivElement>(null);
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

  return (
    <Box className="block md:hidden">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon pointerEvents="none" />}
          variant="outline"
          className="md:hidden"
          id="menu-button"
          bgColor={isOpen ? "gray.100" : "white !important"}
          onClick={() => {
            onToggle();
          }}
        />
        {showMenu && (
          <Flex
            gap={{ base: 0, md: 8 }}
            as={motion.div}
            flexDir={{ base: "column", md: "row" }}
            top={{ base: "calc(100% + 10px)", md: "0" }}
            right="0"
            className="absolute md:relative"
            animate={showMenu ? "visible" : "hidden"}
            variants={variants}
            ref={menuRef}
            boxShadow={{ base: "md", md: "none" }}
            borderRadius={{ base: "md", md: "none" }}
            p={{ base: 4, md: 0 }}
            bgColor={{ base: "white", md: "none" }}
          >
            {links.map((item) => {
              const isActive = `#${activePageId}` === item.href;
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
                  >
                    {item.text}
                    <Flex
                      as={motion.div}
                      width="100%"
                      position="absolute"
                      left="0"
                      bottom={{ base: "0px", md: "-6px" }}
                      alignItems="center"
                      justifyContent="center"
                      height="1px"
                    >
                      <Box
                        as={motion.div}
                        display="block"
                        backgroundColor="black"
                        variants={linkStateVariants}
                        animate={isActive ? "active" : undefined}
                      />
                    </Flex>
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
