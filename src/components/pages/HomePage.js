import React from 'react';
import Header from "../Header.js";
import Footer from "../Footer.js";
import Banner from "../Banner.js";
import Specials from '../Specials.js';
import Testimonials from '../Testimonials.js';
import About from '../About.js';

const HomePage = () => {
    return (
        <div className="site-wrapper">
            <Header />
            <Banner />
            <Specials />
            <Testimonials />
            <About />
            <Footer />
        </div>
    )
}

export default HomePage;
