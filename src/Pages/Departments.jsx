import React from "react";
import "./Styles/Departments.css";
import Footer from "../Components/Footer";
import Navbar from "./../Components/Navbar";

import TechPark from "./../assets/TechPark.webp";
import Hero from "./../Components/Hero";

const Departments = () => {
    return (
        <>
            <Navbar />
            <Hero title="DEPARTMENTS" bgImage={TechPark} />
            <div className="container">
                <h1>
                    Info about our department here, Teachers, Club members by
                    academic year
                </h1>
            </div>
            <Footer />
        </>
    );
};

export default Departments;
