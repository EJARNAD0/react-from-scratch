export function DogSearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search for a dog..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
}
