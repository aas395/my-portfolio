import { ResolvingMetadata } from "next";
import { Work } from "./Work";

export const generateMetadata = async (
  params: Record<string, string>,
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
