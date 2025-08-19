import LoginForm from "@/components/Auth/Login/Form";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export const metadata = {
  title: "CommitGen AI - Login",
  description: "Login to your CommitGen AI account",
  // openGraph: {
  //   title: "CommitGen AI - Login",
  //   description: "Login to your CommitGen AI account",
  //   url: "https://commitgen.ai/auth/login",
  //   siteName: "CommitGen AI",
  //   images: [
  //     {
  //       url: "https://commitgen.ai/og.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "CommitGen AI",
  //     },
  //   ],
  // },
};

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full mt-20 max-w-md">
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaUser className="text-black text-2xl" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400">Sign in to your account to continue</p>
          </div>

          <LoginForm />

          <p className="text-center text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-green-400 hover:text-green-300 transition-colors duration-200"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
