import React from "react";
import { useParams } from "react-router-dom";

export const Final = () => {

    const imageMapping = {
        Manali: "https://blog.cabbazar.com/content/images/size/w2000/2024/01/Places-To-Visit-In-Manali.jpg",
        Goa: "https://indiasomeday.com/wp-content/uploads/2021/08/sarang-pande-IijeyJbmrec-unsplash.jpg",
        Kerala: "https://www.lasociedadgeografica.com/blog/uploads/2020/01/kerala-que-ver-scaled.jpg",
        Jaipur : "https://fearlessfemaletravels.com/wp-content/uploads/2024/03/jaipur-water-palace-jal-mahal-1024x768.jpg",
        // Add more mappings as needed
      };

    const { title } = useParams();

    const handlePayment = () => {

        alert("Redirecting to payment...");
    };

    const imagePath = imageMapping[title] || "default-image.jpg";

    return (
        <div id="testimonials" className="final-package">
            <div className="package-image-container">
                <img
                    src={imagePath} 
                    alt={title}
                    className="package-image"
                />
            </div>

            {/* Heading */}
            <div className="package-heading">
                <h1 className="placeTitle">{title}</h1> {/* Replace with dynamic place name if required */}
            </div>

            {/* Detailed Itinerary */}
            <div className="package-itinerary">
                <h2 className="head">Itinerary</h2>
                <ul>
                    <li className="list">Day 1: Arrival and check-in, sightseeing.</li>
                    <li className="list">Day 2: Guided tour and leisure activities.</li>
                    <li className="list">Day 3: Departure after breakfast.</li>
                </ul>
            </div>

            {/* Room Details */}
            <div className="package-room-details">
                <h2 className="head">Room Details</h2>
                <p className="list">Stay in a luxurious double deluxe room with sea view and modern amenities.</p>
            </div>

            {/* Terms and Conditions */}
            <div className="package-terms">
                <h2 className="head">Terms and Conditions</h2>
                <ul>
                    <li className="list">50% cancellation fee if canceled within 7 days of travel.</li>
                    <li className="list">Package is non-refundable after booking.</li>
                    <li className="list">Room upgrades are subject to availability.</li>
                </ul>
            </div>

            {/* Final Price and Pay Now Button */}
            <div className="package-price">
                <h2 className="head">Final Price: ₹15,000</h2> {/* Replace with dynamic price if required */}
                <button onClick={handlePayment} className="pay-now-button">
                    Pay Now
                </button>
            </div>
        </div>
    );
};
