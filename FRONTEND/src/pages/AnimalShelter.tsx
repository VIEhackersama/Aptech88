import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Adopt from '../components/adoption/Adopt';
import AdoptDetail from '../components/adoption/AdoptDetail';
import Events from '../components/adoption/Event';
import Surrender from '../components/adoption/Surrender';

export default function AnimalShelter() {
    return (

        <div className="bg-gradient-to-r from-green-700 to-emerald-500 min-h-screen">
            <Routes>
                {/* Route mặc định khi vào /animalshelter */}
                <Route index element={<Adopt />} />

                <Route path="adopt" element={<Adopt />} />
                <Route path="adopt/:id" element={<AdoptDetail />} />
                <Route path="events" element={<Events />} />
                <Route path="surrender" element={<Surrender />} />
            </Routes>

        </div>
    );
}
