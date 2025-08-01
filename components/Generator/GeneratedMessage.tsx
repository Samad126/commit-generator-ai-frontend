import { FaCopy, FaTrash } from "react-icons/fa";

function GeneratedMessage() {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl">
      <div className="p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">3</span>
          </div>
          Generated Commit Message
        </h2>

        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl p-6 border border-gray-600/50">
          <pre className="whitespace-pre-wrap text-gray-100 font-mono text-sm leading-relaxed">
            feat: implement user authentication system\n\n- Add login and logout
            functionality\n- Update user interface components\n- Refactor
            authentication middleware
          </pre>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
            <FaCopy className="text-sm" />
            Copy to Clipboard
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
            <FaTrash className="text-sm" />
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default GeneratedMessage;
