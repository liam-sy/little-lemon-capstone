import React from 'react';
import Button from "./ui/Button.js";
import Card from './ui/Card.js';

const testimonials = [
    {
        name: "John H",
        price: "4.5",
        description: "Best restaurant in a while pretty much no cap",
        getImageSrc: () => require("../images/smilingman1.jpg")
    },
    {
        name: "Hannah P",
        price: "5",
        description: "so so good trust me",
        getImageSrc: () => require("../images/smilingwoman1.jpg")
    },
    {
        name: "Mark F",
        price: "5",
        description: "wow this is some amazing fod",
        getImageSrc: () => require("../images/smilingman1.jpg")
    },
    {
        name: "Veronica L",
        price: "4.5",
        description: "wowowowowoowowowowoww. WOw.",
        getImageSrc: () => require("../images/smilingwoman1.jpg")
    }
]

const Testimonials = () => {
    return (
        <>
        <div className="testimonials-wrapper">
            <h2>Testimonials</h2>
            <div className="testimonials-cards">
            {testimonials.map((testimony) => (
                    <Card
                        key={testimony.name}
                        title={testimony.name}
                        price={testimony.price}
                        description={testimony.description}
                        imageSrc={testimony.getImageSrc()}
                        type={"testimony"}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

export default Testimonials;