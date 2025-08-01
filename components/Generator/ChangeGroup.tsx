import { UseFieldArrayRemove, useFormContext } from "react-hook-form";
import { FaTrash } from "react-icons/fa";

function ChangeGroup({
  groupIndex,
  latestIndex,
  remove,
}: {
  groupIndex: number;
  latestIndex: number;
  remove: UseFieldArrayRemove;
}) {
  const { register } = useFormContext();

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
        {latestIndex !== 0  && (
          <button
            className="absolute top-0 right-4 text-gray-300  transition-all duration-200"
            type="button"
            onClick={() => remove(groupIndex)}
          >
            <FaTrash className="text-sm" />
          </button>
        )}

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-300">
            Old File Content
          </label>
          <textarea
            className="w-full h-64 px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-gray-100 placeholder-gray-500 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
            placeholder="Paste your old file content here..."
            spellCheck="false"
            {...register(`pairs.${groupIndex}.old`)}
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-300">
            New File Content
          </label>
          <textarea
            className="w-full h-64 px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-gray-100 placeholder-gray-500 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
            placeholder="Paste your new file content here..."
            spellCheck="false"
            {...register(`pairs.${groupIndex}.new`)}
          />
        </div>
      </div>

      {groupIndex !== latestIndex && (
        <div className="w-full h-[1px] bg-gray-700/50"></div>
      )}
    </>
  );
}

export default ChangeGroup;
