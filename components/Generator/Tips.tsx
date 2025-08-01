function Tips() {
  return (
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
  );
}

export default Tips;
