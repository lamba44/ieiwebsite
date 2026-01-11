import React from "react";
import "./Styles/Events.css";
import Footer from "../Components/Footer";
import Navbar from "./../Components/Navbar";
import events from "../data/eventsData"; // <-- adjust path if you put the data file somewhere else

const Events = () => {
    return (
        <>
            <Navbar />
            <main className="events-page">
                <div className="events-wrapper">
                    <h1 className="page-heading">Upcoming Events</h1>

                    {events && events.length > 0 ? (
                        <section className="events-grid" aria-live="polite">
                            {events.map((ev) => (
                                <article className="event-card" key={ev.id}>
                                    <div
                                        className="event-image"
                                        role="img"
                                        aria-label={ev.title}
                                    >
                                        <img src={ev.image} alt={ev.title} />
                                    </div>

                                    <div className="event-content">
                                        <h2 className="event-title">
                                            {ev.title}
                                        </h2>
                                        <p className="event-category">
                                            {ev.category}
                                        </p>

                                        <div className="event-meta">
                                            <time className="event-date">
                                                {ev.date}
                                            </time>
                                            <span className="event-participants">
                                                {ev.participants} participants
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </section>
                    ) : (
                        <p className="empty-state">No events to show.</p>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Events;
