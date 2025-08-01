import { FaPaperPlane } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im"; // spinner icon

export function SubmitButton({ isLoading }: { isLoading: boolean }) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white font-semibold text-lg rounded-2xl transition-all duration-300 transform ${
        isLoading
          ? "cursor-not-allowed opacity-70 scale-100"
          : "hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:-translate-y-1"
      }`}
    >
      {isLoading ? (
        <>
          <ImSpinner2 className="animate-spin text-xl" />
          Generating...
        </>
      ) : (
        <>
          <FaPaperPlane className="text-lg" />
          Generate Commit Message
        </>
      )}
    </button>
  );
}
