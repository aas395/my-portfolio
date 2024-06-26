import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";
import { MY_NAME, PAGE_TITLE_TAGLINE } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${PAGE_TITLE_TAGLINE} | ${MY_NAME}`,
  description:
    "Build your next website or mobile app with a full-stack developer with over 15 years of experience.",
  metadataBase: new URL(`https://www.aaronsmyth.co`),
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-[100vh]`}>
        <Providers>
          <div className=" min-h-screen flex flex-col justify-between gap-8">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-9YEB5EJJY9" />
    </html>
  );
}
