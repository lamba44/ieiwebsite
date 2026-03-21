import React, { useState, useMemo } from "react";
import "./Styles/Events.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import eventsData from "../data/eventsData";
import TechPark from "../assets/TechPark.webp";
import Hero from "../Components/Hero";

import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Events = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("latest");
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Memoize categories to avoid re-calculating on every search keystroke
    const categories = useMemo(() => 
        ["All", ...new Set(eventsData.map(e => e.category))], 
    []);

    // Memoize the filtering and sorting logic
    const filteredEvents = useMemo(() => {
        let result = eventsData.filter(ev => {
            const matchesSearch = ev.title.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = category === "All" || ev.category === category;
            return matchesSearch && matchesCategory;
        });

        return result.sort((a, b) => {
            if (sort === "popular") return b.participants - a.participants;
            return new Date(b.date) - new Date(a.date);
        });
    }, [search, category, sort]);

    return (
        <div className="layout-container">
            <Navbar />
            <Hero title="EVENTS" bgImage={TechPark} />

            <main className="events-page">
                <div className="events-wrapper">
                    
                    {/* Controls Section */}
                    <div className="top-bar">
                        <input
                            type="text"
                            placeholder="Search events..."
                            aria-label="Search events"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <select 
                            value={sort} 
                            onChange={(e) => setSort(e.target.value)}
                            aria-label="Sort events"
                        >
                            <option value="latest">Latest First</option>
                            <option value="popular">Most Popular</option>
                        </select>
                    </div>

                    {/* Filter Chips */}
                    <div className="chips">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={category === cat ? "active" : ""}
                                onClick={() => setCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Events Grid */}
                    <section className="events-grid">
                        <AnimatePresence mode="popLayout">
                            {filteredEvents.length > 0 ? (
                                filteredEvents.map((ev, index) => (
                                    <motion.div
                                        key={ev.id}
                                        layout // Smoothly re-positions items when filtering
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.2, delay: index * 0.03 }}
                                    >
                                        <Tilt 
                                            glareEnable 
                                            glareMaxOpacity={0.1} 
                                            tiltMaxAngleX={10} 
                                            tiltMaxAngleY={10}
                                            style={{ height: '100%' }}
                                        >
                                            <article
                                                className="event-card"
                                                onClick={() => setSelectedEvent(ev)}
                                            >
                                                <div className="event-image">
                                                    <img src={ev.image} alt={ev.title} loading="lazy" />
                                                    <span className="event-date">{ev.date}</span>
                                                </div>

                                                <div className="event-content">
                                                    <span className="event-category">{ev.category}</span>
                                                    <h2 className="event-title">{ev.title}</h2>

                                                    <div className="event-meta">
                                                        <span>{ev.participants.toLocaleString()} joined</span>
                                                        <span className="arrow-icon">→</span>
                                                    </div>
                                                </div>
                                            </article>
                                        </Tilt>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div 
                                    className="empty-state"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <p>No events found matching "{search}"</p>
                                    <button onClick={() => {setSearch(""); setCategory("All");}}>Clear Filters</button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </section>
                </div>
            </main>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        className="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedEvent(null)}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal" onClick={() => setSelectedEvent(null)}>×</button>
                            <h2>{selectedEvent.title}</h2>
                            <p className="modal-cat">{selectedEvent.category}</p>
                            <hr />
                            <p className="modal-desc">{selectedEvent.description || "Join us for this amazing event!"}</p>
                            <button className="register-btn">Register Now</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default Events;