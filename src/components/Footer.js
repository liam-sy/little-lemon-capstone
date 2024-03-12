import React from 'react';
import {ListNav, navItems} from './Nav.js';


const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <img src={require('../images/vertical-logo.png')} alt="little lemon logo"/>
            <h4 className='footer-section-1'>Doormat Navigation</h4>
            <div className="footer-list-1">
                <ListNav items={navItems} />
            </div>
            <h4 className='footer-section-2'>Contact</h4>
            <div className="footer-list-2">
                <p>contact info</p>
            </div>
            <h4 className='footer-section-3'>Social Media</h4>
            <div className="footer-list-3">
                <p>contact info</p>
            </div>
        </footer>
    )
}

export default Footer;