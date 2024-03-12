import React from 'react';
import Button from './ui/Button.js';

const Banner = (props) => {
    return (
        <div className="banner-wrapper">
            <div className="banner-text">
                <h2>Little Lemon</h2>
                <h4>Punxsutawney</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <Button buttonLink={"/booking"} buttonText={"Reserve a Table"} />
            <img src={require('../images/salmon-hero.png')} alt="salmon dish"/>
        </div>
    );
};

export default Banner;