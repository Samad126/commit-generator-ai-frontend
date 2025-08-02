import type { IconType } from "react-icons";

type FeatureCardProps = {
  Icon: IconType;
  title: string;
  desc: string;
};

const FeatureCard = ({ Icon, title, desc }: FeatureCardProps) => (
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-green-500/30 group">
    <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-black text-2xl" />
    </div>
    <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
      {title}
    </h3>
    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
      {desc}
    </p>
  </div>
);

export default FeatureCard;
