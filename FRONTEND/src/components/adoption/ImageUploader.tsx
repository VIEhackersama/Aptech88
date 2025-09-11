import React, { useState } from 'react';


interface Props {
    onImageUpload: (image: string) => void;
  }
  
  function ImageUploader({ onImageUpload }: Props) {
    const [preview, setPreview] = useState<string | null>(null);
  
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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


export default ImageUploader;