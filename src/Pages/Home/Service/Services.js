import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import flouride from '../../../assets/images/fluoride.png';
import Service from './Service';

const Services = () => {

    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            icon: flouride,
            description: 'Keep your teeth strong'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            icon: cavity,
            description: 'Keep your teeth healthy'
        },
        {
            id: 3,
            name: 'Whitening Treatment',
            icon: whitening,
            description: 'Keep your teeth white'
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h2 className='text-2xl font-bold text-primary uppercase'>Our Services</h2>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(card => <Service
                        key={card.id}
                        card={card}
                    >
                    </Service>)
                }
            </div >
        </div>
    );
};

export default Services;

