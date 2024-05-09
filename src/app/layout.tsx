import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Web Development, Mobile App Development, App Development | Aaron Smyth",
  description:
    "Build your next website or mobile app with a full-stack developer with over 15 years of experience.",
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
