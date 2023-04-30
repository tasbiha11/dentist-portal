import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer className="p-10 mt-12" style={
            {
                background: `url(${footer})`,
                backgroundSize: 'contain',
            }
        }>
            <div className='footer'>
                <div>
                    <span className="footer-title text-2xl">Services</span>
                    <Link to="/" className="link link-hover">Emergency Checkup</Link>
                    <Link to="/" className="link link-hover">Monthly Checkup</Link>
                    <Link to="/" className="link link-hover">Weekly Checkup</Link>
                    <Link to="/" className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title text-2xl">ORAL HEALTH</span>
                    <Link to="/" className="link link-hover">Fluoride Treatment</Link>
                    <Link to="/" className="link link-hover">Cavity Filling</Link>
                    <Link to="/" className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title text-2xl">OUR ADDRESS</span>
                    <Link to="/" className="link link-hover">Sylhet City - 3100</Link>
                </div>
            </div>

            <div className='text-center mt-32'>
                <p>© Tasbiha 2023</p>
            </div>

        </footer>
    );
};

export default Footer;