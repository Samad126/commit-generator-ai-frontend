import { GenerateCommitForm } from "@/types/form";
import { useFormContext } from "react-hook-form";

function PlainText() {
  const {
    register,
    formState: { errors },
  } = useFormContext<GenerateCommitForm>();

  return (
    <div >
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">2</span>
          </div>
          Plain Text
        </h2>
        <textarea
          className="w-full h-32 px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-200"
          placeholder="Provide a plain text description of your changes instead of diff..."
          spellCheck="false"
          {...register("plainText")}
        />
        {errors.plainText && (
          <p className="text-red-500 text-sm mt-2">{errors.plainText.message}</p>
        )}
      </div>
  );
}

export default PlainText;