// sample data for Events page
// Place in src/data/eventsData.js (imported in Events.jsx as "../data/eventsData")
// Using picsum.photos seeded images so each event has a stable placeholder image.

const events = [
    {
        id: 1,
        image: "https://picsum.photos/seed/event1/800/500",
        title: "CodeSprint Hackathon 2025",
        category: "Hackathon",
        date: "Feb 10, 2025",
        participants: 120,
    },
    {
        id: 2,
        image: "https://picsum.photos/seed/event2/800/500",
        title: "AI & ML Workshop: Foundations",
        category: "Workshop",
        date: "Mar 5, 2025",
        participants: 60,
    },
    {
        id: 3,
        image: "https://picsum.photos/seed/event3/800/500",
        title: "Tech Talks: Building Scalable MERN Apps",
        category: "Talk",
        date: "Apr 2, 2025",
        participants: 200,
    },
    {
        id: 4,
        image: "https://picsum.photos/seed/event4/800/500",
        title: "Design Sprint — Rapid Prototyping",
        category: "Workshop",
        date: "Apr 20, 2025",
        participants: 40,
    },
    {
        id: 5,
        image: "https://picsum.photos/seed/event5/800/500",
        title: "Volunteer Drive: Community Coding",
        category: "Volunteer",
        date: "May 1, 2025",
        participants: 75,
    },
];

export default events;
