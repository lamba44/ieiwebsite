import React from "react";
import "./index.css";
import TechPark from "./assets/TechPark.webp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero title="IEI Students' Chapter" bgImage={TechPark} />
            <div className="container">
                <h1>Institution of Engineers (India) - Students Chapter</h1>

                <h1>About the Local Chapter</h1>

                <h1>Departments Under the Chapter</h1>

                <h1>Recent Events and Activities</h1>

                <h1>Why Join the IEI Students Chapter?</h1>
            </div>
            <Footer />
        </>
    );
};

export default App;
