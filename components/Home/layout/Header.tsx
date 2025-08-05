import Link from "next/link";
import MobileHeaderNav from "../MobileHeaderNav";

async function Header() {
  return (
    <header className="px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-800 fixed top-0 w-full z-50 bg-gray-900">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-green-400 font-bold text-xl sm:text-2xl">
          CommitGen AI
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-300">
          <Link
            href="/auth/login"
            className="hover:text-white transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            href="/generator"
            className="bg-green-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-green-600 transition-colors duration-200"
          >
            Try Now
          </Link>
        </nav>

        <MobileHeaderNav />
      </div>
    </header>
  );
}

export default Header;
