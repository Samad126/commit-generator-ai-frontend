function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-400 px-4 sm:px-6 lg:px-20 py-8 sm:py-12 mt-12 sm:mt-16 lg:mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-white text-xl sm:text-2xl font-bold mb-4">
              CommitGen AI
            </div>
            <p className="text-sm sm:text-base leading-relaxed">
              Transform your development workflow with AI-powered commit message
              generation.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Product
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="hover:text-white transition-colors cursor-pointer">
                Examples
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Pricing
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                API
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Resources
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="hover:text-white transition-colors cursor-pointer">
                Documentation
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Best Practices
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Support
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Connect
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="hover:text-white transition-colors cursor-pointer">
                Twitter
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                GitHub
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Discord
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 border-t border-gray-700 pt-6 sm:pt-8 text-xs sm:text-sm text-center">
          © 2024 CommitGen AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
