import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import WhyChoose from "@/components/Home/WhyChoose";
import Footer from "@/components/Home/Footer";

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Why Choose */}
      <WhyChoose />

      {/* Footer */}
      <Footer />
    </div>
  );
}
