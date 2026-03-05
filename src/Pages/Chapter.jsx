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

                {/* About the Chapter */}
                <section className="section">
                    <h1>About the KTR Local Chapter</h1>
                    <p>
                        The KTR Local Chapter of the Institution of Engineers (India)
                        provides a platform for engineering students to develop
                        technical expertise, professional skills, and leadership
                        qualities. The chapter works actively to connect students
                        with industry professionals, researchers, and academic
                        experts through various technical and professional
                        development initiatives.
                    </p>

                    <p>
                        By organizing workshops, seminars, technical competitions,
                        and collaborative projects, the chapter aims to foster
                        innovation and encourage students to explore real-world
                        engineering challenges.
                    </p>
                </section>

                {/* Vision */}
                <section className="section">
                    <h1>Vision</h1>
                    <p>
                        To create a dynamic engineering community that promotes
                        innovation, technical excellence, and professional growth
                        among students while contributing to advancements in
                        engineering and technology.
                    </p>
                </section>

                {/* Mission */}
                <section className="section">
                    <h1>Mission</h1>
                    <ul>
                        <li>Encourage students to participate in technical activities and research.</li>
                        <li>Provide exposure to industry trends and emerging technologies.</li>
                        <li>Develop leadership and teamwork skills among members.</li>
                        <li>Promote collaboration between academia and industry.</li>
                    </ul>
                </section>

                {/* Activities */}
                <section className="section">
                    <h1>Key Activities</h1>
                    <ul>
                        <li>Technical workshops and seminars</li>
                        <li>Guest lectures by industry experts</li>
                        <li>Engineering competitions and hackathons</li>
                        <li>Research discussions and paper presentations</li>
                        <li>Industrial visits and knowledge-sharing sessions</li>
                    </ul>
                </section>

                {/* Benefits */}
                <section className="section">
                    <h1>Benefits of Being a Member</h1>
                    <ul>
                        <li>Access to technical learning opportunities</li>
                        <li>Networking with engineers and professionals</li>
                        <li>Participation in national-level competitions</li>
                        <li>Opportunities to develop leadership skills</li>
                        <li>Recognition through technical achievements</li>
                    </ul>
                </section>

            </div>

            <Footer />
        </>
    );
};

export default Chapter;