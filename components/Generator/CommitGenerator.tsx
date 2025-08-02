"use client";
import FileChanges from "./FileChanges";
import PlainText from "./PlainText";
import Tips from "./Tips";
import GeneratedMessage from "./GeneratedMessage";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/lib/schemas/generateCommitFormSchema";
import { useState } from "react";
import { GenerateCommitRaw, GenerateCommitPayload } from "@/types/form";
import { SubmitButton } from "./SubmitButton";
import TypeChanger from "./TypeChanger";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

function CommitGenerator() {
  const [inputType, setInputType] = useState<"plaintext" | "filechange">(
    "filechange"
  );
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>("");

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

  const handleInputTypeChange = (type: "plaintext" | "filechange") =>
    setInputType(type);

  const handleClearMessage = () => {
    setGeneratedMessage("");
  };

  const onSubmit = async (data: GenerateCommitRaw) => {
    let payload;
    if (inputType === "filechange") {
      payload = {
        pairs: data.pairs,
        isPair: true,
      } as GenerateCommitPayload;
    } else {
      payload = {
        plainText: data.plainText,
        isPair: false,
      } as GenerateCommitPayload;
    }

    setLoading(true);
    setError(null);

    fetch(`${apiUrl}/generator/generate-commit-message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          const message = data?.message || res.statusText || "Unknown error";
          throw new Error(message);
        }

        return data;
      })
      .then((data) => {
        setGeneratedMessage(data.aiResponse);
      })
      .catch((err) => {
        console.error("Failed to generate commit message:", err);
        setError(err.message || "An unexpected error occurred.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
      <div className="space-y-8 mt-25">
        <FormProvider {...methods}>
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <TypeChanger
              inputType={inputType}
              handleInputTypeChange={handleInputTypeChange}
            />

            <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl">
              {error && <p className="text-red-500 mb-2 ">An Error Occured</p>}
              {inputType === "filechange" ? <FileChanges /> : <PlainText />}
            </div>

            <div className="flex justify-center">
              <SubmitButton isLoading={loading} />
            </div>
          </form>
        </FormProvider>

        {generatedMessage && (
          <GeneratedMessage
            message={generatedMessage}
            handleClearMessage={handleClearMessage}
          />
        )}

        <Tips />
      </div>
    </main>
  );
}

export default CommitGenerator;
