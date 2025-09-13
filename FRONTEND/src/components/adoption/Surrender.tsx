import React, { useState } from "react";
import axios from "axios";
import ImageUploader from "./ImageUploader";

export default function Surrender() {
  const [image, setImage] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    petName: "",
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
      alert("Surrender submitted!");
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Surrender a Pet</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border rounded p-2"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border rounded p-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="petName"
          placeholder="Pet Name"
          className="w-full border rounded p-2"
          onChange={handleChange}
        />
        <textarea
          name="reason"
          placeholder="Reason for surrender"
          className="w-full border rounded p-2"
          rows={4}
          onChange={handleChange}
        ></textarea>
        <ImageUploader onImageUpload={setImage} />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
