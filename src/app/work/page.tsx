import { ResolvingMetadata } from "next";
import { Work } from "./Work";

export const generateMetadata = async (
  params: {
    params: Record<string, string> | undefined;
    searchParams: { [key: string]: string | string[] | undefined };
  },
  parent: ResolvingMetadata
) => {
  const parentData = await parent;

  return {
    title: `Work | ${parentData.title?.absolute}`,
  };
};

export default function Page() {
  return <Work />;
}
