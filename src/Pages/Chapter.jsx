import React from "react";
import "./Styles/Chapter.css";
import Footer from "../Components/Footer";
import Navbar from "./../Components/Navbar";

export const Chapter = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Local Chapter Info here</h1>
            </div>
            <Footer />
        </>
    );
};
