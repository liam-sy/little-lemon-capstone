import React from 'react';
import Button from './ui/Button.js';

const Banner = (props) => {
    return (
        <div className="banner-wrapper">

            <div className="banner-text">
                <h2>Little Lemon</h2>
                <h4>Punxsutawney</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button buttonLink={"/booking"} buttonText={"Reserve a Table"} />
            </div>

            <div className="banner-img-wrapper">
                <img className="banner-img" src={require('../images/salmon-hero.png')} alt="salmon dish"/>
            </div>

        </div>
    );
};

export default Banner;