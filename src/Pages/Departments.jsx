import React from "react";
import "./Styles/Departments.css";
import Footer from "../Components/Footer";
import Navbar from "./../Components/Navbar";
import TechPark from "./../assets/TechPark.webp";
import Hero from "./../Components/Hero";

const Departments = () => {
    return (
        <div className="departments-page">
            <Navbar />
            <Hero title="DEPARTMENTS" bgImage={TechPark} />

            <div className="container">
                {/* --- Vision & Mission Section --- */}
                <section className="section-grid">
                    <div className="content-box">
                        <h2 className="section-title">Our Vision</h2>
                        <p>
                            To be a center of excellence in technical education and research, 
                            producing globally competent professionals with a sense of social 
                            responsibility and ethical values.
                        </p>
                    </div>
                    <div className="content-box">
                        <h2 className="section-title">Our Mission</h2>
                        <p>
                            To provide a conducive environment for innovation and practical learning, 
                            bridging the gap between academia and industry through collaborative 
                            research and hands-on technical exposure.
                        </p>
                    </div>
                </section>

                <hr className="divider" />

                {/* --- About Section --- */}
                <section className="section">
                    <h2 className="section-title">Department Overview</h2>
                    <div className="about-text">
                        <p>
                            The department actively supports the <strong>Institution of Engineers (India) Students' Chapter</strong>, 
                            fostering an ecosystem where theoretical knowledge meets practical application. We empower 
                            students to bridge the gap between classroom learning and industrial demands.
                        </p>
                        <div className="stats-bar">
                            <div className="stat-item"><strong>500+</strong><span>Students</span></div>
                            <div className="stat-item"><strong>15+</strong><span>Expert Faculty</span></div>
                            <div className="stat-item"><strong>10+</strong><span>Research Labs</span></div>
                            <div className="stat-item"><strong>25+</strong><span>Annual Events</span></div>
                        </div>
                    </div>
                </section>

                {/* --- Faculty Coordinators --- */}
                <section className="section bg-light">
                    <h2 className="section-title text-center">Faculty Mentorship</h2>
                    <p className="section-subtitle">Guiding the next generation of engineering leaders.</p>
                    
                    <div className="faculty-grid">
                        <div className="faculty-card">
                            <div className="faculty-info">
                                <h3>Dr. John Smith</h3>
                                <span className="designation">Faculty Coordinator</span>
                                <p>Dept. of Computer Science</p>
                            </div>
                        </div>
                        <div className="faculty-card">
                            <div className="faculty-info">
                                <h3>Prof. Emily Johnson</h3>
                                <span className="designation">Faculty Advisor</span>
                                <p>Dept. of Electronics Engineering</p>
                            </div>
                        </div>
                        <div className="faculty-card">
                            <div className="faculty-info">
                                <h3>Dr. Michael Brown</h3>
                                <span className="designation">Technical Mentor</span>
                                <p>Dept. of Mechanical Engineering</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Student Leadership --- */}
                <section className="section">
                    <h2 className="section-title">Student Coordinators</h2>
                    <div className="student-table-container">
                        <table className="student-table">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Coordinator</th>
                                    <th>Specialization / Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Final Year</strong></td>
                                    <td>Rahul Sharma</td>
                                    <td>Student Coordinator (Lead)</td>
                                </tr>
                                <tr>
                                    <td><strong>Third Year</strong></td>
                                    <td>Arjun Patel</td>
                                    <td>Technical Team Lead</td>
                                </tr>
                                <tr>
                                    <td><strong>Second Year</strong></td>
                                    <td>Priya Nair</td>
                                    <td>Event Management</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* --- Innovation Hubs (Clubs) --- */}
                <section className="section clubs-section">
                    <h2 className="section-title">Special Interest Groups</h2>
                    <div className="clubs-grid">
                        {[
                            "Robotics & Automation",
                            "Software Development",
                            "AI & Data Science",
                            "Electronics Innovation",
                            "Sustainable Engineering"
                        ].map((club, index) => (
                            <div key={index} className="club-tag">{club}</div>
                        ))}
                    </div>
                </section>

                {/* --- Call to Action --- */}
                <section className="cta-section">
                    <h3>Interested in joining our Technical Chapter?</h3>
                    <p>Stay updated with the latest departmental workshops and seminars.</p>
                    <button className="btn-primary">View Upcoming Events</button>
                </section>

            </div>
            <Footer />
        </div>
    );
};

export default Departments;