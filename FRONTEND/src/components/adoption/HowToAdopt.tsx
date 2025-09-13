import React from "react";

export default function HowToAdopt() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">How to adopt an animal</h1>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>View available animals online</li>
          <li>Book an appointment or walk-in</li>
          <li>Meet the animal & speak with adoption counsellor</li>
          <li>Complete adoption forms & pay fee</li>
          <li>Take your new companion home</li>
        </ol>
        <p className="mt-4 text-gray-600">We operate first-come, first-served. If you want a specific animal, try morning appointments.</p>
      </div>
    </main>
  );
}
