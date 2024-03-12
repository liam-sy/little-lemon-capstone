import React from "react";
import Nav from "./Nav.js";


const Header = () => {
    return (
        <div className="header-wrapper">
            <img src={require('../images/horizontal-logo.png')} alt="little lemon logo"/>
            <Nav />
        </div>
    );
};

export default Header;