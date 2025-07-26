import FeatureCard from "./FeatureCard";
import {
  FaRocket,
  FaCodeBranch,
  FaClock,
  FaCogs,
  FaCheckCircle,
  FaStopwatch,
} from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
          Why Choose{" "}
          <span className="text-green-500 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text">
            CommitGen AI
          </span>
          ?
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto">
          Streamline your development workflow with intelligent features designed
          for modern developers.
        </p>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            Icon={FaRocket}
            title="Smart AI Analysis"
            desc="Understands code changes and follows best practices."
          />
          <FeatureCard
            Icon={FaStopwatch}
            title="Lightning Fast"
            desc="Generate commit messages in seconds."
          />
          <FeatureCard
            Icon={FaCheckCircle}
            title="Best Practices Built-in"
            desc="Automatically follows git commit standards."
          />
          <FeatureCard
            Icon={FaCodeBranch}
            title="Git Integration"
            desc="Seamless integration with all major platforms."
          />
          <FeatureCard
            Icon={FaCogs}
            title="Consistent Quality"
            desc="Maintain consistent quality across your team."
          />
          <FeatureCard
            Icon={FaClock}
            title="Save Time"
            desc="Focus more on writing great code, less on commits."
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
