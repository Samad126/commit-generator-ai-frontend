"use client";
import { FaPaperPlane } from "react-icons/fa";
import FileChanges from "./FileChanges";
import PlainText from "./PlainText";
import Tips from "./Tips";
import GeneratedMessage from "./GeneratedMessage";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/lib/schemas/generateCommitFormSchema";

function CommitGenerator() {
  const methods = useForm({
    defaultValues: {
      plainText: "",
      pairs: [{ old: "", new: "" }],
    },
    resolver: yupResolver(schema),
    shouldUnregister: true,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  console.log(errors);

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <main className="max-w-7xl mx-auto space-y-8 pt-32 px-4 sm:px-6 xl:px-0">
      <FormProvider {...methods}>
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl">
            <FileChanges />
          </div>

          <PlainText />

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
    </main>
  );
}

export default CommitGenerator;
