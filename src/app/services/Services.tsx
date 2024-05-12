"use client";

import { Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { PageContainer } from "../components/PageContainer";
import { AnimatedHeading } from "../components/AnimatedHeading";
import { AnimatedContent } from "../components/AnimatedContent";
import { useRef } from "react";
import { Link } from "@chakra-ui/next-js";

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
    key: "seo",
    title: "Search Engine Optimization",
    description:
      "I help companies make the most of their online presence by optimizing their websites for search engines. Search engines are about more than just text and many people leave money on the table by only focusing on traditional factors. Hire me to bring in more customers from search engine traffic.",
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
      "I help startups get to revenue faster by helping them identify the problems their target market has and how to address them. Hire me to get to product/market fit and build a product your customers will pay you for and love.",
  },
];

export const Services = () => {
  const contentRef = useRef(null);

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
            columns={{ base: 1, md: 2 }}
            gap={{ base: 8, md: 16 }}
            textAlign={{ base: "center", md: "left" }}
          >
            {services.map((service) => {
              return <ServiceItem key={service.key} service={service} />;
            })}
          </SimpleGrid>
          <Button
            as={Link}
            href="/contact"
            mt={12}
            w={{ base: "100%", md: "200px" }}
            alignSelf="center"
          >
            Reach Out
          </Button>
        </AnimatedContent>
      </Flex>
    </PageContainer>
  );
};

const ServiceItem = ({ service }: { service: (typeof services)[0] }) => {
  return (
    <Flex
      flexDir="column"
      color="#fff"
      zIndex="1"
      justifyContent={{ base: "space-between", md: "initial" }}
    >
      <Text as="h3" mb={{ base: 1.5, md: 4 }} variant="itemTitle">
        {service.title}
      </Text>
      <Text>{service.description}</Text>
    </Flex>
  );
};
