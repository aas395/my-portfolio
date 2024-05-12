import { ResolvingMetadata } from "next";
import { Hero } from "./Hero";

export const generateMetadata = async (
  params: {
    params: Record<string, string> | undefined;
    searchParams: { [key: string]: string | string[] | undefined };
  },
  parent: ResolvingMetadata
) => {
  const parentData = await parent;

  return {
    title: `${parentData.title?.absolute}`,
  };
};

export default function Home() {
  return <Hero />;
}
