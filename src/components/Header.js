import React from "react";
import Nav from "./Nav.js";


const Header = () => {
    return (
        <header className="header-wrapper">
            <img src={require('../images/horizontal-logo.png')} alt="little lemon logo"/>
            <Nav />
        </header>
    );
};

export default Header;