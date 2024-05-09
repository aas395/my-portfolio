"use client";

import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { PageContainer } from "../components/PageContainer";
import { AnimatedHeading } from "../components/AnimatedHeading";
import { AnimatedContent } from "../components/AnimatedContent";
import { useRef, useState } from "react";

const services = [
  {
    key: "web_development",
    title: "Web Development",
    description:
      "I build websites and web applications using React-focused technologies. Bring me in to augment your existing dev team or hire me to architect and build your project from the ground up.",
  },
  {
    key: "mobile_app_development",
    title: "Mobile App Development",
    description:
      "I build mobile apps using React Native. Bring me in just for the client side or hire me to architect and build everything from start to finish, including getting into the App Store.",
  },
  {
    key: "business_process_consulting",
    title: "Business Process Consulting",
    description:
      "I help companies make the best use of their employees' time by building software to automate repetitive and time-consuming tasks. Hire me to transform your operations and let your employees focus on higher-value work.",
  },
  {
    key: "startup_consulting",
    title: "Startup Consulting",
    description:
      "I help startups get to revenue faster by helping them get clear on the problems your target market has and how to address them. Hire me to get to product/market fit and build a product your customers will love and pay you for.",
  },
];

type Service = (typeof services)[0];

export const Services = () => {
  const contentRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeService, setActiveService] = useState<Service>();
  const [delayedPageSectionTarget, setDelayedPageSectionTarget] =
    useState<string>();

  return (
    <PageContainer
      id="services"
      backgroundImgSrc="/ferenc-horvath-cg78NV0c_Ow-unsplash.webp"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        alignSelf="center"
        ref={contentRef}
      >
        <AnimatedHeading>Services</AnimatedHeading>
        <AnimatedContent>
          <SimpleGrid
            columns={{ base: 2 }}
            gap={16}
            textAlign={{ base: "center", md: "left" }}
          >
            {services.map((service) => {
              return (
                <ServiceItem
                  key={service.key}
                  service={service}
                  onLearnMoreButtonClick={(service) => {
                    setActiveService(service);
                    onOpen();
                  }}
                />
              );
            })}
          </SimpleGrid>
          <Button
            as="a"
            href="/contact"
            mt={12}
            w={{ base: "100%", sm: "80%", md: "200px" }}
            alignSelf="center"
            display={{ base: "none", md: "flex" }}
          >
            Reach Out
          </Button>
        </AnimatedContent>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        onCloseComplete={() => {
          if (delayedPageSectionTarget) {
            window.history.pushState({}, "", `#${delayedPageSectionTarget}`);
            setDelayedPageSectionTarget(undefined);
          }
        }}
      >
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>{activeService?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{activeService?.description}</Text>
            <Button
              as="a"
              href="/contact"
              mt={4}
              w="100%"
              alignSelf="center"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              mb={4}
            >
              Reach Out
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </PageContainer>
  );
};

const ServiceItem = ({
  service,
  onLearnMoreButtonClick,
}: {
  service: (typeof services)[0];
  onLearnMoreButtonClick: (_service: Service) => void;
}) => {
  return (
    <Flex
      flexDir="column"
      color="#fff"
      zIndex="1"
      justifyContent={{ base: "space-between", md: "initial" }}
    >
      <Text as="h3" mb={4} variant="itemTitle">
        {service.title}
      </Text>
      <Text className="hidden md:block">{service.description}</Text>
      <Button
        className="block md:hidden"
        onClick={() => onLearnMoreButtonClick(service)}
      >
        Learn More
      </Button>
    </Flex>
  );
};
