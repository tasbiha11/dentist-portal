import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../Card/InfoCards';
import Services from '../Service/Services';
import Treatment from '../Treatment/Treatment';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonials from '../Testimonial/Testimonials';
import StayConnected from '../StayConnected/StayConnected';



const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <StayConnected></StayConnected>
        </div>
    );
};

export default Home;