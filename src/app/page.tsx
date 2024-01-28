"use client";

import { Box } from "@chakra-ui/react";
import { Hero } from "./components/homepage/Hero";
import { Header } from "./components/Header";
import { About } from "./components/homepage/About";
import { Services } from "./components/homepage/Services";
import { Contact } from "./components/homepage/Contact";
import { Work } from "./components/homepage/Work";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { debounce } from "lodash-es";

export default function Home() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [pageOffsets, setPageOffsets] = useState<
    { id: string; offset: number }[]
  >([]);
  const [activePageId, setActivePageId] = useState<string>();

  const params = useParams();

  useEffect(() => {
    if (window.location.hash && !activePageId) {
      setActivePageId(window.location.hash.slice(1));
    }
  }, [params, activePageId]);

  useEffect(() => {
    if (containerRef.current?.children) {
      const tempOffsets: { id: string; offset: number }[] = [];

      Array.from(containerRef.current?.children).forEach((child) => {
        tempOffsets.push({
          id: child.id,
          offset: (child as HTMLDivElement).offsetTop,
        });
      });

      setPageOffsets(tempOffsets);
    }
  }, [containerRef]);

  return (
    <Box>
      <Header activePageId={activePageId} setActivePageId={setActivePageId} />
      <Box
        as="main"
        scrollSnapType="y mandatory"
        overflowY="scroll"
        height="100vh"
        scrollSnapStop="normal"
        scrollBehavior="smooth"
        ref={containerRef}
        onScroll={debounce(() => {
          const scrollTop = containerRef.current?.scrollTop;
          pageOffsets.find((page) => {
            if (scrollTop === page.offset) {
              setActivePageId(page.id);
            }
          });
        }, 50)}
      >
        <ReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        >
          <Hero />
          <About />
          <Services />
          <Work />
          <Contact />
        </ReCaptchaProvider>
      </Box>
      {/* <Heading as="h3">SPECIALTIES</Heading>
      <ul>
        <li>UI Development</li>
        <li>Load time optimization</li>
        <li>Animations and 3D Graphics</li>
      </ul>
      <h3>WEB</h3>
      {/* Hey Hei */}
      {/* Change Reaction */}
      {/* Illust Space */}
      {/* <h3>MOBILE</h3> */}
      {/* Change Reaction */}
      {/* Hopzee */}
      {/* <h3>STARTUPS</h3> */}
      {/* Yext */}
      {/* Wprkfolio */}
      {/* Illust */}
      {/* <footer>&copy; 2023 Aaron Smyth</footer> */}
    </Box>
  );
}
