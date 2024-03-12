import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ buttonText, buttonLink}) => {
    return (
        <Link to={buttonLink}>
            <button type="button" >
                {buttonText}
            </button>
        </Link>
    );
};

export default Button;