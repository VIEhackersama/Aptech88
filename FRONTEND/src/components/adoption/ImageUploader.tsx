import React, { useState } from "react";
import axios from "axios";

interface Props {
  onImageUpload: (url: string) => void;
}

export default function ImageUploader({ onImageUpload }: Props) {
  const [preview, setPreview] = useState<string | null>(null);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPreview(res.data.url);
      onImageUpload(res.data.url);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      {preview && (
        <img
          src={preview}
          alt="preview"
          className="mt-2 w-40 h-40 object-cover rounded"
        />
      )}
    </div>
  );
}
