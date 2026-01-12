import React from "react";
import "./Styles/Chapter.css";
import Footer from "../Components/Footer";
import Navbar from "./../Components/Navbar";

import TechPark from "./../assets/TechPark.webp";
import Hero from "./../Components/Hero";

const Chapter = () => {
    return (
        <>
            <Navbar />
            <Hero title="KTR LOCAL CHAPTER" bgImage={TechPark} />
            <div className="container">
                <h1>Local Chapter Info here</h1>
            </div>
            <Footer />
        </>
    );
};

export default Chapter;
