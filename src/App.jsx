import React from "react";
import Home from "./pages/home"
import Booking from "./pages/booking"
import Details from "./pages/details"
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:title" element={<Booking />} />
        <Route path="/booking/:title/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
