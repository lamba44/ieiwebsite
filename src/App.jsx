import React from "react";
import "./index.css";
import TechPark from "./assets/TechPark.webp"; // Ensure this file is in src/assets/
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

// Asset Placeholders
const HOD_IMG = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
const STUDENT_ICON = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

const App = () => {
    const studentTeam = [
        { name: "Rahul Sharma", role: "Chairperson", year: "Final Year" },
        { name: "Aditi Verma", role: "Secretary", year: "Final Year" },
        { name: "Arjun Patel", role: "Technical Head", year: "Third Year" },
        { name: "Priya Nair", role: "Event Lead", year: "Second Year" },
    ];

    return (
        <div className="iei-portal">
            <Navbar />
            <Hero title="IE(I) STUDENTS' CHAPTER" bgImage={TechPark} />

            <main>
                {/* --- Section 1: Statistical Impact --- */}
                <section className="stats-strip">
                    <div className="container stats-grid">
                        <div className="stat-card"><h3>1500+</h3><p>MEMBERS</p></div>
                        <div className="stat-card"><h3>40+</h3><p>ANNUAL EVENTS</p></div>
                        <div className="stat-card"><h3>12</h3><p>TECH CLUBS</p></div>
                        <div className="stat-card"><h3>05</h3><p>RESEARCH LABS</p></div>
                    </div>
                </section>

                {/* --- Section 2: Leadership / HOD --- */}
                <section className="viewport-section" id="about">
                    <div className="container">
                        <div className="hod-layout">
                            <div className="hod-visual">
                                <img src={HOD_IMG} alt="Head of Department" />
                                <div className="gold-frame"></div>
                            </div>
                            <div className="hod-content">
                                <span className="section-label">Institutional Leadership</span>
                                <h2>Message from the HOD</h2>
                                <p className="quote-text">
                                    "Our mission is to nurture technical excellence and professional ethics, 
                                    creating engineers who don't just follow standards, but set them."
                                </p>
                                <div className="signature-box">
                                    <strong>Dr. [Your Name]</strong>
                                    <span>Professor & Department Head</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Section 3: Executive Committee --- */}
                <section className="viewport-section bg-light" id="team">
                    <div className="container">
                        <div className="center-header">
                            <span className="section-label">The Executive Body</span>
                            <h2>Student Coordinators</h2>
                        </div>
                        <div className="team-grid">
                            {studentTeam.map((member, index) => (
                                <div className="member-card" key={index}>
                                    <div className="member-img">
                                        <img src={STUDENT_ICON} alt={member.name} />
                                    </div>
                                    <div className="member-meta">
                                        <span className="tag">{member.year}</span>
                                        <h4>{member.name}</h4>
                                        <p>{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Section 4: Roadmap / Timeline --- */}
                <section className="viewport-section" id="events">
                    <div className="container">
                        <span className="section-label">The Roadmap 2026</span>
                        <h2>Upcoming Initiatives</h2>
                        <div className="timeline-container">
                            <div className="timeline-item">
                                <div className="dot"></div>
                                <div className="time-info">
                                    <h3>National Technical Symposium</h3>
                                    <span className="quarter">Quarter 1</span>
                                    <p>A flagship gathering for paper presentations and industry networking.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="dot"></div>
                                <div className="time-info">
                                    <h3>Industry 4.0 Workshop</h3>
                                    <span className="quarter">Quarter 2</span>
                                    <p>Hands-on training sessions with leading automation experts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default App;