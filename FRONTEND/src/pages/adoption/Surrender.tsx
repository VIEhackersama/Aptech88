import React, { useState } from 'react';
import ImageUploader from './ImageUploader';

export default function Surrender() {
    const [image, setImage] = useState<string | null>(null);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Surrender a Pet</h1>
            <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full border rounded p-2" />
                <input type="email" placeholder="Email" className="w-full border rounded p-2" />
                <input type="text" placeholder="Pet Name" className="w-full border rounded p-2" />
                <textarea placeholder="Reason for surrender" className="w-full border rounded p-2" rows={4}></textarea>
                <ImageUploader onImageUpload={setImage} />
                <button type="submit" className="bg-gradient-to-r from-green-700 to-emerald-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
                    Submit
                </button>
            </form>
            {image && <p className="text-sm text-gray-500 mt-2">Image uploaded.</p>}
        </div>
    );
}
