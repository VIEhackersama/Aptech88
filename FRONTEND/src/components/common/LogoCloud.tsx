import React from "react";

type Props = { logos: string[] };

export default function LogoCloud({ logos }: Props) {
  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
      {logos.map((src, i) => (
        <div key={i} className="h-10 flex items-center justify-center opacity-70 hover:opacity-100 transition">
          <img src={src} alt={`Partner ${i + 1}`} className="max-h-8 object-contain" />
        </div>
      ))}
    </div>
  );
}
