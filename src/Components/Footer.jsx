import React from "react";
import "./Styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer" role="contentinfo" id="bottompage">
            <div className="footergrid">
                <div className="footer-left">
                    <h4>CONTACT</h4>

                    <p className="label">Phone</p>
                    <p>
                        <a href="tel:+919944218820">+91 99442 18820</a>
                    </p>

                    <p className="label">Email</p>
                    <p>
                        <a
                            href="mailto:bibinchv@srmist.edu.in"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            bibinchv@srmist.edu.in
                        </a>
                    </p>

                    <p className="label">Address</p>
                    <a
                        href="https://maps.app.goo.gl/jUovvhtjsyUBRWvK8"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        504, Basic Engineering Lab, SRMIST, Potheri, Tamil Nadu
                        - 603203
                    </a>
                </div>

                <div className="footer-right">
                    <div className="footer-col">
                        <h4>PAGES</h4>
                        <ul className="plain-list">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/departments">Departments</a>
                            </li>
                            <li>
                                <a href="/events">Events</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>SOCIAL</h4>
                        <ul className="plain-list">
                            <li>
                                <a
                                    href="https://www.linkedin.com/school/the-institute-of-engineers-srm-student-chapter/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/iei_studentchapter_srm/?igshid=MzMyNGUyNmU2YQ%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
