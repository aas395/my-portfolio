import { ResolvingMetadata } from "next";
import { Contact } from "./Contact";

export const generateMetadata = async (
  params: {
    params: Record<string, string> | undefined;
    searchParams: { [key: string]: string | string[] | undefined };
  },
  parent: ResolvingMetadata
) => {
  const parentData = await parent;

  return {
    title: `Contact | ${parentData.title?.absolute}`,
  };
};

export default function Page() {
  return <Contact />;
}
