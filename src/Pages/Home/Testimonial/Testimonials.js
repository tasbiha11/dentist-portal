import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Mr. Peter',
            img: people1,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Sylhet'
        },
        {
            _id: 2,
            name: 'Mrs. Black',
            img: people2,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Sylhet'
        },
        {
            _id: 3,
            name: 'Ms. Granger',
            img: people3,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Sylhet'
        }
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className="text-4xl">What Our Patient Say</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Testimonial
                        key={review._id}
                        review={review}
                    >
                    </Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;