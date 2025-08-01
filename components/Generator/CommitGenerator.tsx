"use client";
import { FaPaperPlane } from "react-icons/fa";
import FileChanges from "./FileChanges";
import PlainText from "./PlainText";
import Tips from "./Tips";
import GeneratedMessage from "./GeneratedMessage";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/lib/schemas/generateCommitFormSchema";
import { useState } from "react";

function CommitGenerator() {
  const [inputType, setInputType] = useState<"plaintext" | "filechange">(
    "filechange"
  );

  const methods = useForm({
    defaultValues: {
      plainText: "",
      pairs: [{ old: "", new: "" }],
    },
    resolver: yupResolver(schema),
    context: { inputType },
    shouldUnregister: true,
  });

  const { handleSubmit } = methods;

  const handleInputTypeChange = (type: "plaintext" | "filechange") => {
    setInputType(type);
  };

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
      <div className="space-y-8 mt-25">
        <FormProvider {...methods}>
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
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

            {inputType === "filechange" && (
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl">
                <FileChanges />
              </div>
            )}

            {inputType === "plaintext" && <PlainText />}

            <div className="flex justify-center">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white font-semibold text-lg rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <FaPaperPlane className="text-lg" />
                Generate Commit Message
              </button>
            </div>
          </form>
        </FormProvider>

        <GeneratedMessage />

        <Tips />
      </div>
    </main>
  );
}

export default CommitGenerator;
