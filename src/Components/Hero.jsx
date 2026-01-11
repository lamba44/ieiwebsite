import React from "react";
import "./Styles/Hero.css";

const Hero = ({ title, bgImage }) => {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h1 className="hero-title">{title}</h1>
        </section>
    );
};

export default Hero;
