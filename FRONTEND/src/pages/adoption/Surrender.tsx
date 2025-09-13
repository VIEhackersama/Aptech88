import React, { useState } from "react";
import axios from "axios";
import ImageUploader from "./ImageUploader";

export default function Surrender() {
  const [image, setImage] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    species: "",
    age: "",
    gender: "",
    reason: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/surrender", {
        ...form,
        image,
      });
      alert("Pet submitted successfully!");
      setForm({ name: "", species: "", age: "", gender: "", reason: "" });
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Failed to submit pet.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Surrender a Pet</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Pet Name"
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="species"
          value={form.species}
          onChange={handleChange}
          placeholder="Species"
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="gender"
          value={form.gender}
          onChange={handleChange}
          placeholder="Gender"
          className="w-full border rounded p-2"
        />
        <textarea
          name="reason"
          value={form.reason}
          onChange={handleChange}
          placeholder="Reason for surrender"
          className="w-full border rounded p-2"
          rows={4}
        ></textarea>
        <ImageUploader onImageUpload={setImage} />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Submit
        </button>
      </form>
      {image && <p className="text-sm text-gray-500 mt-2">Image uploaded.</p>}
    </div>
  );
}