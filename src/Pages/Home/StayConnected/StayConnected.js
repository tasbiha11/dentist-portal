import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const StayConnected = () => {
    return (
        <section className='mt-32' style={
            {
                background: `url(${appointment})`
            }
        }>
            <div className='hero'>
                <figure><img src={appointment} alt="background" className='' /></figure>
                <div className='grid gap-4 py-6'>
                    <h4 className='text-xl text-primary font-bold text-center'>Contact Us</h4>
                    <h1 className='text-3xl text-white'>Stay Connected With Us</h1>
                    <input type="text" placeholder="Email Adress" className="input input-bordered input-sm w-full max-w-xs" />

                    <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs" />

                    <input type="text" placeholder="Your Message" className="input input-bordered input-lg w-full max-w-xs" />
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default StayConnected;