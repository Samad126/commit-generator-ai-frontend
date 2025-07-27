"use client";
import { useState } from "react";
import { FaPlus, FaPaperPlane, FaCopy, FaTrash } from "react-icons/fa";

function CommitGenerator() {
  const [oldContent, setOldContent] = useState("");
  const [newContent, setNewContent] = useState("");
  const [context, setContext] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");

  return (
    <main className="max-w-7xl mx-auto space-y-8 pt-32 px-4 sm:px-6 xl:px-0">
      {/* File Changes Section */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              File Changes
            </h2>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-black font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
              <FaPlus className="text-sm" />
              Add Files
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-300">
                Old File Content
              </label>
              <textarea
                value={oldContent}
                onChange={(e) => setOldContent(e.target.value)}
                className="w-full h-64 px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-gray-100 placeholder-gray-500 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
                placeholder="Paste your old file content here..."
                spellCheck="false"
              />
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-300">
                New File Content
              </label>
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="w-full h-64 px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-gray-100 placeholder-gray-500 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
                placeholder="Paste your new file content here..."
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Context Section */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl">
        <div className="p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            Additional Context
          </h2>
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            className="w-full h-32 px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-200"
            placeholder="Provide additional context about your changes (optional)..."
            spellCheck="false"
          />
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white font-semibold text-lg rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
          <FaPaperPlane className="text-lg" />
          Generate Commit Message
        </button>
      </div>

      {/* Generated Message Section */}
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
              {generatedMessage ||
                "feat: implement user authentication system\n\n- Add login and logout functionality\n- Update user interface components\n- Refactor authentication middleware"}
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

      {/* Tips Section */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 p-6">
        <h3 className="text-lg font-semibold text-white mb-3">
          💡 Tips for Better Results
        </h3>
        <ul className="text-gray-300 text-sm space-y-2">
          <li>
            • Include meaningful file changes that show the actual differences
          </li>
          <li>• Add context about why the changes were made</li>
          <li>• Use descriptive variable and function names in your code</li>
          <li>• Follow conventional commit format for consistency</li>
        </ul>
      </div>
    </main>
  );
}

export default CommitGenerator;
