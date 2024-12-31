import React, { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import "../App.css"
import { useParams } from 'react-router-dom';
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
