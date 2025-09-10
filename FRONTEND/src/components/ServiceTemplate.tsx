// src/components/ServiceTemplate.tsx
import React from "react";

interface ServiceTemplateProps {
  title: string;
  image: string;
  content: React.ReactNode;
}

export default function ServiceTemplate({
  title,
  image,
  content,
}: ServiceTemplateProps) {
  return (
    <div className="pt-20 pb-12 px-4 md:px-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">
          {title}
        </h1>
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow mb-8"
        />
        <div className="text-gray-800 leading-relaxed space-y-6 text-lg">
          {content}
        </div>
      </div>
    </div>
  );
}
