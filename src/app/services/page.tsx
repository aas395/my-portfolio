import { ResolvingMetadata } from "next";
import { Services } from "./Services";

export const generateMetadata = async (
  params: {
    params: Record<string, string> | undefined;
    searchParams: { [key: string]: string | string[] | undefined };
  },
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
