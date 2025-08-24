import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dogodki from "../Pages/Dogodki";
import Turnir from "../Pages/Turnir";
import Prijava from "../Pages/Prijava";

const mongoDbUrl = "mongodb+srv://jakobjovanhrustl:Admin12345@cluster0.62fpn57.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Home page */}
                <Route path="/" element={<Home />} />
                <Route path="/turnir" element={<Turnir />} />
                {/* Dogodki page */}
                <Route path="/dogodki" element={<Dogodki />} />
                <Route path="/prijava" element={<Prijava />} />
            </Routes>
        </Router>

    );
};

export default App;
