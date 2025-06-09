import { useState } from "react";

export function AdoptionForm({ dogs }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dogId: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Adoption Form:", formData);
    alert("Thank you for applying to adopt!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      dogId: "",
      message: "",
    });
  };

  return (
    <div className="mt-16 max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8">
        Adopt a Dog 🐾
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Full Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your Name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="you@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="09XXXXXXXXX"
          />
        </div>

        {/* Dog Selection */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Select Dog
          </label>
          <select
            name="dogId"
            value={formData.dogId}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Choose a dog</option>
            {dogs.map((dog) => (
              <option key={dog.id} value={dog.id}>
                {dog.name} - {dog.breed}
              </option>
            ))}
          </select>
        </div>

        {/* Message - span full width */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium text-gray-700">
            Why do you want to adopt?
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Tell us a bit about your interest..."
          ></textarea>
        </div>

        {/* Submit button - span full width */}
        <div className="md:col-span-2 text-right">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
