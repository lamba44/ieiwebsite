import { Routes, Route } from "react-router-dom";
import App from "./App";
import Events from "./Pages/Events";
import Departments from "./Pages/Departments";
import Chapter from "./Pages/Chapter";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/events" element={<Events />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/chapter" element={<Chapter />} />
        </Routes>
    );
}

export default AppRoutes;
