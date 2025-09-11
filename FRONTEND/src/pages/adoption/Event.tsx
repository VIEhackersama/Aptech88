import React from 'react';


const Events: React.FC = () => {
    const events = [
        { id: 1, title: 'Adoption Day', date: '2025-09-20', description: 'Meet adoptable pets at our shelter.' },
        { id: 2, title: 'Fundraising Gala', date: '2025-10-15', description: 'Support animal welfare programs.' },
    ];


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
};


export default Events;