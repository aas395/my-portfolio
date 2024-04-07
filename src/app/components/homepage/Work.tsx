import { Flex, Link, Text } from "@chakra-ui/react";
import { PageContainer } from "../PageContainer";
import { AnimatedHeading } from "../AnimatedHeading";
import { AnimatedContent } from "../AnimatedContent";
import { NextPageLink } from "../NextPageLink";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const Work = () => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true });

  return (
    <PageContainer
      id="work"
      backgroundImgSrc="./bence-balla-schottner-VPETME4zVWM-unsplash.webp"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        alignSelf="center"
        // justifyContent={{ base: "flex-start", md: "center" }}
        textAlign="center"
        w="100%"
        overflow="hidden"
        ref={contentRef}
      >
        <AnimatedHeading>Work</AnimatedHeading>
        <AnimatedContent w="100%">
          <Text mb={8}>
            The projects below represent my most recent work. Writing code and
            thinking through product features are my strongest skills -- I have
            a good eye but I like to leave visual/UI design to the pros. Bring
            your own designer or I can bring in a designer from my network to
            give your product a modern, high-quality look and feel.
          </Text>
          <Flex
            gap={{ base: 10, md: 12 }}
            maxW="100%"
            overflowX="auto"
            justifyContent="flex-start"
            flexWrap={{ base: "initial", md: "wrap" }}
            flexDir="row"
          >
            <WorkHistoryItem
              title="Hey Hei (AB InBev)"
              description="Built the website for a new drink brand using Shopify's Hydrogen tool. Design provided by the brand."
              linkUrl="https://drinkheyhei.com"
              linkText="drinkheyhei.com"
            />
            <WorkHistoryItem
              title="The Change Reaction -- Portal"
              description="Built the administrative portal used by hundreds of agents using Django/DRF. Recently migrated to NextJS while keeping the DRF back end."
              linkUrl="https://changereaction.org"
              linkText="changereaction.org"
            />
            <WorkHistoryItem
              title="The Change Reaction -- iOS App"
              description="Built a donor-facing iOS app using React Native and the DRF back end created for the portal. Launched on the App Store. Recently redesigned but notpzee  yet updated on the App Store."
            />
            <WorkHistoryItem
              title="Illust.Space"
              description="Worked on a team to build user interfaces using NextJS and React Three Fiber for a Web3 product. Also created internal tools to improve developer experience and efficiency."
              linkUrl="https://illust.ar"
              linkText="illust.ar"
            />
            <WorkHistoryItem
              title="ArtMitzvah"
              description="Built a small NextJS site using ChakraUI/Panda for a hybrid business/charity project."
              linkUrl="https://artmitzvah.art"
              linkText="artmitzvah.art"
            />

            <WorkHistoryItem
              title="Hopzee"
              description="Built an iOS app using React Native and a Django/DRF back end. Design provided by the client."
              linkUrl="https://apps.apple.com/us/app/hopzee-family-activities/id1557560419"
              linkText="App Store"
            />
          </Flex>
        </AnimatedContent>
        <NextPageLink url="#contact" show={isInView} />
      </Flex>
    </PageContainer>
  );
};

const WorkHistoryItem = ({
  title,
  description,
  linkUrl,
  linkText,
}: {
  title: string;
  description: string;
  linkUrl?: string;
  linkText?: string;
}) => {
  return (
    <Flex
      flexDir="column"
      gap={2}
      maxW="75vw"
      flexShrink={0}
      textAlign="left"
      w={{ base: "auto", md: "calc(33.33% - 32px)" }}
    >
      <Text as="h3" fontWeight="bold">
        {title}
      </Text>
      <Text>{description}</Text>
      {linkUrl && (
        <Link href={linkUrl} fontWeight="bold" target="_blank">
          {linkText}
        </Link>
      )}
    </Flex>
  );
};
