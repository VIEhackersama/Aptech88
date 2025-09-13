import React, { useEffect, useState } from 'react';

function Events() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/events")
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Upcoming Events</h1>
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.id} className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-700">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
