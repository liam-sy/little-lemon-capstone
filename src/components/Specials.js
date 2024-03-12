import React from 'react';
import Button from "./ui/Button.js";
import Card from './ui/Card.js';

const specials = [
    {
        name: "food 1",
        price: "12.99",
        description: "delishious brod",
        getImageSrc: () => require("../images/salmon-hero.png")
    },
    {
        name: "food 2",
        price: "9.99",
        description: "so so good trust me",
        getImageSrc: () => require("../images/salmon-hero.png")
    },
    {
        name: "food 3",
        price: "15.99",
        description: "wow this is some amazing fod",
        getImageSrc: () => require("../images/salmon-hero.png")
    }
]


const Specials = (props) => {
    return (
        <>
        <div className="specials-wrapper">
            <h3>Specials</h3>
            <Button buttonLink={"/"} buttonText={"Online Menu"}/>
            <div className="specials-cards">
            {specials.map((special) => (
                    <Card
                        key={special.name}
                        title={special.name}
                        price={special.price}
                        description={special.description}
                        imageSrc={special.getImageSrc()}
                        type={"special"}
                    />
            ))}
        </div>
        </div>
        
        </>
    );
};

export default Specials;