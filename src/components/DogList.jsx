import { useState } from "react";
import { DogShortlist } from "./DogShortlist";

export function DogList() {
  const [shortlist, setShortlist] = useState([]);
  const [search, setSearch] = useState("");

  const dogsData = [
    {
      id: 1,
      name: "Buddy",
      breed: "shih tzu",
      image: "/images/1.jpeg",
    },
    {
      id: 2,
      name: "Luna",
      breed: "shih tzu",
      image: "/images/2.jpeg",
    },
    {
      id: 3,
      name: "Charlie",
      breed: "shih tzu",
      image: "/images/1.jpeg",
    },
  ];
  const addToShortlist = (dog) => {
    if (!shortlist.some((d) => d.id === dog.id)) {
      setShortlist([...shortlist, dog]);
    }
  };

  const filteredDogs = dogsData.filter(
    (dog) =>
      dog.name.toLowerCase().includes(search.toLowerCase()) ||
      dog.breed.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">
        Available Dogs 🐶
      </h2>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or breed..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Dog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDogs.length > 0 ? (
          filteredDogs.map((dog) => (
            <div
              key={dog.id}
              className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center"
            >
              <img
                src={dog.image}
                alt={dog.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {dog.name}
              </h3>
              <p className="text-gray-500">{dog.breed}</p>
              <button
                onClick={() => addToShortlist(dog)}
                className="mt-4 px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Add to Shortlist
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No dogs match your search.
          </p>
        )}
      </div>

      {/* Shortlist Section */}
      <DogShortlist dogs={shortlist} />
    </div>
  );
}
