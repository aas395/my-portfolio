import { Flex, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { PageContainer } from "../PageContainer";

export const Work = () => {
  return (
    <PageContainer id="work">
      <Flex
        flexDir="column"
        alignItems="center"
        alignSelf="center"
        textAlign="center"
      >
        <Heading as="h2" mb={4} color="#333">
          Work
        </Heading>
        <Text mb={8}>
          The projects below represent my most recent work. Writing code and
          thinking through product features are my strongest skills -- I have a
          good eye but I like to leave visual/UI design to the pros. Bring your
          own designer or I can bring in a designer from my network to give your
          product a modern, high-quality look and feel.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          <Flex flexDir="column" gap={2}>
            <Text as="h3" fontWeight="bold">
              Hey Hei (AB InBev)
            </Text>
            <Text>
              Built the website for a new drink brand using Shopify&apos;s
              Hydrogen tool. Design provided by the brand.
            </Text>
            <Link href="https://drinkheyhei.com">drinkheyhei.com</Link>
          </Flex>
          <Flex flexDir="column" gap={2}>
            <Text as="h3" fontWeight="bold">
              The Change Reaction -- Portal
            </Text>
            <Text>
              Built the administrative portal used by hundreds of agents using
              Django/DRF. Recently migrated to NextJS while keeping the DRF back
              end.
            </Text>
            <Link href="https://changereaction.org">changereaction.org</Link>
          </Flex>
          <Flex flexDir="column" gap={2}>
            <Text as="h3" fontWeight="bold">
              The Change Reaction -- iOS App
            </Text>
            <Text>
              Built a donor-facing iOS app using React Native and the DRF back
              end created for the portal. Launched on the App Store. Recently
              redesigned and but not yet updated on the App Store.
            </Text>
            <Link href="https://changereaction.org">app store</Link>
          </Flex>
          <Flex flexDir="column" gap={2}>
            <Text as="h3" fontWeight="bold">
              Illust.Space
            </Text>
            <Text>
              Worked on a team to build user interfaces using NextJS and React
              Three Fiber for a Web3 product. Also created internal tools to
              improve developer experience and efficiency.
            </Text>
            <Link href="https://illust.ar">illust.ar</Link>
          </Flex>
          <Flex flexDir="column" gap={2}>
            <Text as="h3" fontWeight="bold">
              ArtMitzvah
            </Text>
            <Text>
              Built a small NextJS site using ChakraUI/Panda for a hybrid
              business/charity project.
            </Text>
            <Link href="https://artmitzvah.art">artmitzvah.art</Link>
          </Flex>
        </SimpleGrid>
      </Flex>
    </PageContainer>
  );
};
