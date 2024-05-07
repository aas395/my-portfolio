import { ResolvingMetadata } from "next";
import { Contact } from "./Contact";

export const generateMetadata = async (
  params: Record<string, string>,
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
