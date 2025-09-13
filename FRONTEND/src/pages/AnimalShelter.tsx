import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Adopt from '../components/adoption/Adopt';
import AdoptDetail from '../components/adoption/AdoptDetail';
import Event from '../components/adoption/Event';
import ImageUploader from '../components/adoption/ImageUploader';
import Surrender from '../components/adoption/Surrender';

export default function AnimalShelter() {
    return (
        <div className='bg-white'>
            <Adopt />
            <AdoptDetail />
            {/* <Event /> */}
            {/* <ImageUploader onImageUpload={function (image: string): void {
                throw new Error('Function not implemented.');
            } } /> */}
            <Surrender />
        </div>
    )
}