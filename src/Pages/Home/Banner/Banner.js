import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero">
            <figure><img src={bg} alt="background" className='' /></figure>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='chair' />
                <div>
                    <h1 className="text-5xl font-bold">Visit Orthodontics and Dental Surgeon !</h1>
                    <p className="py-6 text-justify">Orthodontics is a dental specialty focused on aligning your bite and straightening your teeth. Common orthodontic treatments include traditional braces, clear aligners and removable retainers.</p>
                    <PrimaryButton>Explore</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;