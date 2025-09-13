import React, { useState } from "react";

const Surrender: React.FC = () => {
  const [form, setForm] = useState({
    pet_name: "",
    species: "",
    breed: "",
    age: "",
    gender: "",
    img_url: "",
  });
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("http://localhost:8000/api/adoptlistings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Nếu backend có auth cần JWT thì thêm:
          // "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...form,
          age: parseInt(form.age, 10),
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to submit");
      }

      const data = await res.json();
      setMessage(`Pet ${data.pet_name} submitted successfully!`);
      setForm({
        pet_name: "",
        species: "",
        breed: "",
        age: "",
        gender: "",
        img_url: "",
      });
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Surrender a Pet</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="pet_name"
          value={form.pet_name}
          onChange={handleChange}
          placeholder="Pet Name"
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="species"
          value={form.species}
          onChange={handleChange}
          placeholder="Species (Dog, Cat, etc.)"
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="breed"
          value={form.breed}
          onChange={handleChange}
          placeholder="Breed"
          className="w-full border rounded p-2"
        />
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full border rounded p-2"
          required
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          name="img_url"
          value={form.img_url}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border rounded p-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {message && <p className="text-sm text-gray-700 mt-2">{message}</p>}
    </div>
  );
};

export default Surrender;
