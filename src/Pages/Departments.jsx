import React from "react";
import { motion } from "framer-motion";
import "./Styles/Departments.css";
import Footer from "../Components/Footer";
import Navbar from "./../Components/Navbar";
import TechPark from "./../assets/TechPark.webp";
import Hero from "./../Components/Hero";

// Move data to constants for cleaner JSX
const FACULTY = [
    { name: "Dr. John Smith", role: "Faculty Coordinator", dept: "Dept. of Computer Science", icon: "💻", focus: "Cloud Architecture" },
    { name: "Prof. Emily Johnson", role: "Faculty Advisor", dept: "Dept. of Electronics Engineering", icon: "📡", focus: "Embedded Systems" },
    { name: "Dr. Michael Brown", role: "Technical Mentor", dept: "Dept. of Mechanical Engineering", icon: "⚙️", focus: "Robotic Kinematics" },
];

const COMPETENCIES = [
    { title: "Industrial Training", desc: "Mandatory internships with Tier-1 tech partners to ensure job readiness.", tag: "Career" },
    { title: "R&D Support", desc: "Dedicated funding for student-led patents and international publications.", tag: "Research" },
    { title: "Global Outreach", desc: "Student exchange programs with leading technical universities worldwide.", tag: "Global" }
];

const Departments = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="departments-page">
            <Navbar />
            <Hero title="DEPARTMENTS" bgImage={TechPark} />

            <div className="container department-layout">
                <div className="main-content">
                    
                    {/* --- Vision & Mission --- */}
                    <section className="section-grid">
                        <motion.div 
                            className="content-box glass"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="accent-line"></div>
                            <h2 className="section-title">Our Vision</h2>
                            <p>
                                To be a center of excellence in technical education and research, 
                                producing globally competent professionals with a sense of social 
                                responsibility and ethical values.
                            </p>
                        </motion.div>
                        <motion.div 
                            className="content-box glass"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="accent-line"></div>
                            <h2 className="section-title">Our Mission</h2>
                            <p>
                                To provide a conducive environment for innovation and practical learning, 
                                bridging the gap between academia and industry through collaborative 
                                research.
                            </p>
                        </motion.div>
                    </section>

                    {/* --- Core Competencies --- */}
                    <motion.section 
                        className="section"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Core Competencies</h2>
                        <div className="competency-grid">
                            {COMPETENCIES.map((item, i) => (
                                <motion.div key={i} className="comp-item" variants={itemVariants}>
                                    <span className="comp-tag">{item.tag}</span>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* --- Faculty Mentorship --- */}
                    <section className="section mentorship-bg">
                        <h2 className="section-title text-center">Faculty Mentorship</h2>
                        <motion.div 
                            className="faculty-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {FACULTY.map((f, i) => (
                                <motion.div key={i} className="faculty-card" variants={itemVariants} whileHover={{ y: -10 }}>
                                    <div className="faculty-header">
                                        <div className="faculty-avatar">{f.icon}</div>
                                        <div className="faculty-meta">
                                            <h3>{f.name}</h3>
                                            <span className="designation">{f.role}</span>
                                        </div>
                                    </div>
                                    <div className="faculty-body">
                                        <p><strong>Focus:</strong> {f.focus}</p>
                                        <p className="dept-label">{f.dept}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    {/* --- Student Steering Committee --- */}
                    <motion.section 
                        className="section"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Student Steering Committee</h2>
                        <div className="student-table-container">
                            <table className="student-table">
                                <thead>
                                    <tr>
                                        <th>Year</th>
                                        <th>Coordinator</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Final Year</strong></td>
                                        <td>Rahul Sharma</td>
                                        <td>Executive Lead</td>
                                        <td><span className="status-badge">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Third Year</strong></td>
                                        <td>Arjun Patel</td>
                                        <td>Technical Strategy</td>
                                        <td><span className="status-badge">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Second Year</strong></td>
                                        <td>Priya Nair</td>
                                        <td>Operations & Outreach</td>
                                        <td><span className="status-badge">Active</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.section>

                    {/* --- Call to Action --- */}
                    <motion.section 
                        className="cta-banner"
                        whileHover={{ scale: 1.01 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <div className="cta-content">
                            <h3>Ready to Innovate?</h3>
                            <p>Join the Students' Chapter and gain access to premium labs and technical workshops.</p>
                        </div>
                        <motion.button 
                            className="btn-white"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Join Chapter
                        </motion.button>
                    </motion.section>
                </div>

                {/* Sidebar Navigation */}
                <aside className="dept-sidebar">
                    <div className="sticky-sidebar">
                        <div className="sidebar-header">
                            <div className="dot"></div>
                            <h4>Innovation Hubs</h4>
                        </div>
                        <ul className="sidebar-links">
                            <li><a href="#robotics">Robotics & Automation</a></li>
                            <li><a href="#software">Software Development</a></li>
                            <li><a href="#ai">AI & Data Science</a></li>
                            <li><a href="#electronics">Electronics Innovation</a></li>
                            <li><a href="#sustainable">Sustainable Engineering</a></li>
                        </ul>
                        <div className="sidebar-footer">
                            <p>Contact for Research Collaborations</p>
                            <a href="mailto:research@iei.edu" className="sidebar-mail">research@iei.edu</a>
                        </div>
                    </div>
                </aside>
            </div>
            <Footer />
        </div>
    );
};

export default Departments;