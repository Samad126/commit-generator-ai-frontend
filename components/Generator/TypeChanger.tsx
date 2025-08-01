function TypeChanger({inputType, handleInputTypeChange}: { inputType: "plaintext" | "filechange"; handleInputTypeChange: (type: "plaintext" | "filechange") => void; }) {
  return (
    <div className="flex justify-center gap-4">
      <button
        type="button"
        onClick={() => handleInputTypeChange("filechange")}
        className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
          inputType === "filechange"
            ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        File Changes
      </button>
      <button
        type="button"
        onClick={() => handleInputTypeChange("plaintext")}
        className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
          inputType === "plaintext"
            ? "bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        Plain Text
      </button>
    </div>
  );
}

export default TypeChanger;
