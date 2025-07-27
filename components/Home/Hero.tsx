import Image from "next/image";
import heroImage from "@/assets/hero-image.jpg";
import Link from "next/link";

function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-24 pb-12 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Generate Perfect{" "}
            <span className="text-green-500 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text">
              Commit Messages
            </span>{" "}
            with AI
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            Transform your development workflow with intelligent commit message
            generation. Follow best practices, maintain consistency, and save
            hours of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/generator"
              className="bg-gradient-to-r from-green-500 to-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-black hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Generating →
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src={heroImage}
              alt="CommitGen AI Screenshot"
              className="rounded-2xl shadow-2xl border border-gray-700 w-full max-w-sm sm:max-w-md lg:max-w-xl transform hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
