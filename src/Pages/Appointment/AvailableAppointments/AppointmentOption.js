import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ appoitmentOption }) => {
    const { name, slots } = appoitmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-primary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Slot Not Available'}</p>
                <p>{slots.length}{slots.length > 1 ? ' spaces' : ' space'} available</p>
                <div className="card-actions justify-center">
                    <PrimaryButton>Book Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;