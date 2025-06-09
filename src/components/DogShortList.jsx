export function DogShortlist({ dogs, onRemove }) {
  if (dogs.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Your Shortlist 🐾</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dogs.map((dog) => (
          <li key={dog.id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={dog.image}
                alt={`Photo of ${dog.name}`}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">{dog.name}</p>
                <p className="text-sm text-gray-500">{dog.breed}</p>
              </div>
            </div>
            <button
              onClick={() => onRemove(dog.id)}
              className="text-red-500 text-sm hover:text-red-700"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
