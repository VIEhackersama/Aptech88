import React, { useState } from 'react';


interface Props {
    onImageUpload: (base64: string) => void;
}


const ImageUploader: React.FC<Props> = ({ onImageUpload }) => {
    const [preview, setPreview] = useState<string | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setPreview(result);
                onImageUpload(result);
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <div className="space-y-2">
            <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700
hover:file:bg-blue-100"
            />
            {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-lg shadow"
                />
            )}
        </div>
    );
};


export default ImageUploader;