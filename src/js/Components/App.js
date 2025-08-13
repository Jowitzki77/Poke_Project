import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dogodki from "../Pages/Dogodki";
import Turnir from "../Pages/Turnir";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Home page */}
                <Route path="/" element={<Home />} />
                <Route path="/turnir" element={<Turnir />} />
                {/* Dogodki page */}
                <Route path="/dogodki" element={<Dogodki />} />
            </Routes>
        </Router>
    );
};

export default App;
