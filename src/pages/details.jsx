import React from "react";
import { Navigation } from "../components/navigation";
import "../App.css"
import { Final } from "../components/final";

const Details = () => {

    return (
        <div className="bookingContainer">
            <Navigation />
            <Final/>
        </div>
    );
};

export default Details;
