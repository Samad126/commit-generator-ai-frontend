import { useFieldArray, useFormContext } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';
import ChangeGroup from './ChangeGroup';

function FileChanges() {
  const { control, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'pairs',
  });

  return (
    <div className="p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">1</span>
          </div>
          File Changes
        </h2>
        <button
          type="button"
          onClick={() => append({ old: '', new: '' })}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-black font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          <FaPlus className="text-sm" />
          Add Files
        </button>
      </div>
      {errors.pairs &&
        typeof errors.pairs.message === "string" && (
          <p className="text-red-500 text-sm mt-2 mb-4">
            {errors.pairs.message}
          </p>
        )}
      <div className="grid grid-cols-1 gap-8">
        {fields.map((field, index) => (
          <ChangeGroup
            key={field.id}
            groupIndex={index}
            latestIndex={fields.length - 1}
            remove={remove}
          />
        ))}
      </div>
    </div>
  );
}

export default FileChanges;