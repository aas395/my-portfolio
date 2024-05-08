import type { ResolvingMetadata } from "next";

import { About } from "./About";

export const generateMetadata = async (
  params: {
    params: Record<string, string> | undefined;
    searchParams: { [key: string]: string | string[] | undefined };
  },
  parent: ResolvingMetadata
) => {
  const parentData = await parent;

  return {
    title: `About | ${parentData.title?.absolute}`,
  };
};

export default function Page() {
  return <About />;
}
