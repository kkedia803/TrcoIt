import React from "react";
import { Navigation } from "../components/navigation";
import "../App.css"
import { Place } from "../components/place";

const Booking = () => {

    return (
        <div className="bookingContainer">
            <Navigation />
            <Place />
        </div>
    );
};

export default Booking;
