import React from "react";
import "./Styles/Departments.css";
import Footer from "../Components/Footer";
import Navbar from "./../Components/Navbar";

const Departments = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>List of all Departments here</h1>
            </div>
            <Footer />
        </>
    );
};

export default Departments;
