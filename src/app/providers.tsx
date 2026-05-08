"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/theme";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </ReCaptchaProvider>
  );
}
