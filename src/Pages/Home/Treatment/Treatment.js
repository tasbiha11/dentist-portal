import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Treatment = () => {
    return (
        <div className="hero mt-32">
            <div className="hero-content flex flex-col lg:flex-row justify-between">
                <img src={treatment} className="lg:w-80 rounded-lg shadow-2xl" alt='pictur' />
                <div className='lg:w-1/2'>
                    <h1 className='text-5xl font-bold'>Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-justify">To truly maintain healthy gums and teeth and avoid other oral health problems, regular dental care visits are essential. Poor dental health is also linked to a number of health problems such as diabetes, kidney disease and heart disease. Routine dental checkups are about total health care, not just your teeth.</p>
                    <PrimaryButton>Read More</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Treatment;

