import React from 'react';

const About = (props) => {
    return (
        <div className="about-wrapper">
            <div className="about-text">
                <h2>Little Lemon</h2>
                <h4>Punxsutawney</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <img src={require('../images/salmon-hero.png')} alt="salmon dish"/>
        </div>
    );
};

export default About;