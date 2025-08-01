import CommitGenerator from "@/components/Generator/CommitGenerator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CommitGen AI - Commit Message Generator",
};

function GeneratorPage() {
  return (
    <>
      <CommitGenerator />
    </>
  );
}

export default GeneratorPage;
