import Hero from "@/components/Home/Hero";
import WhyChoose from "@/components/Home/WhyChoose";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "CommitGen AI",
  description: "One of the best commit message generators out there.",
};

export default function HomePage() {
  return (
    <main className="">
      {/* Hero */}
      <Hero />

      {/* Why Choose */}
      <WhyChoose />
    </main>
  );
}
