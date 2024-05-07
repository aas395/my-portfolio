import { ResolvingMetadata } from "next";
import { Services } from "./Services";

export const generateMetadata = async (
  params: Record<string, string>,
  parent: ResolvingMetadata
) => {
  const parentData = await parent;

  return {
    title: `Services | ${parentData.title?.absolute}`,
  };
};

export default function Page() {
  return <Services />;
}
