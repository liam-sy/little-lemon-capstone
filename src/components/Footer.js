import React from 'react';
import {ListNav, navItems} from './Nav.js';


const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className='footer-section-img'>
                <img src={require('../images/vertical-logo.png')} alt="little lemon logo"/>
            </div>
            <div className='footer-section-1'>
                <h4>Doormat Navigation</h4>
                <ListNav items={navItems} className="footer-list-1"/>
            </div >
            <div className='footer-section-2'>
                <h4>Contact</h4>
                <p>contact info</p>
            </div>
            <div className='footer-section-3'>
                <h4>Social Media</h4>
                <p>contact info</p>
            </div>
        </footer>
    )
}

export default Footer;