import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const Final = () => {
    const imageMapping = {
        Manali: "https://blog.cabbazar.com/content/images/size/w2000/2024/01/Places-To-Visit-In-Manali.jpg",
        Goa: "https://indiasomeday.com/wp-content/uploads/2021/08/sarang-pande-IijeyJbmrec-unsplash.jpg",
        Kerala: "https://www.lasociedadgeografica.com/blog/uploads/2020/01/kerala-que-ver-scaled.jpg",
        Jaipur: "https://fearlessfemaletravels.com/wp-content/uploads/2024/03/jaipur-water-palace-jal-mahal-1024x768.jpg",
    };

    const roomPrices = {
        Single: 15000,
        "Double Sharing": 12000,
        "Quad Sharing": 10000,
    };

    const { title } = useParams();
    const [selectedRoom, setSelectedRoom] = useState("Single");
    const [basePrice, setBasePrice] = useState(roomPrices["Single"]);
    const [finalPrice, setFinalPrice] = useState(roomPrices["Single"]);
    const [numTourists, setNumTourists] = useState(1);
    const [touristNames, setTouristNames] = useState([]);
    const [currentName, setCurrentName] = useState("");

    const handleRoomChange = (e) => {
        const roomType = e.target.value;
        setSelectedRoom(roomType);
        setBasePrice(roomPrices[roomType]);
        setFinalPrice(roomPrices[roomType] * numTourists); // Recalculate price
    };

    const handleNumTouristsChange = (e) => {
        const count = Number(e.target.value);
        setNumTourists(count);
    };

    const handleAddTourist = () => {
        if (currentName.trim() !== "") {
            setTouristNames((prev) => [...prev, currentName]);
            setCurrentName("");
        }
    };

    const handleCheckPrice = () => {
        setFinalPrice(basePrice * numTourists);
    };

    const handlePayment = () => {
        alert(`Redirecting to payment for ₹${finalPrice}...`);
    };

    const imagePath = imageMapping[title] || "default-image.jpg";

    return (
        <div id="testimonials" className="final-package">
            {/* Image Section */}
            <div className="package-image-container">
                <img src={imagePath} alt={title} className="package-image" />
            </div>

            {/* Trip Info Boxes */}
            <div className="trip-info-container">
                <div className="trip-info-box">
                    <h4>6D/7N</h4>
                </div>
                <div className="trip-info-box">
                    <h4>Group Trip</h4>
                </div>
                <div className="trip-info-box">
                    <h4>20+</h4>
                </div>
            </div>

            {/* Heading */}
            <div className="package-heading">
                <h1 className="placeTitle">{title} <span className="dates">(10-17 Jan)</span></h1>
            </div>

            {/* Room Details */}
            <div className="package-room-details">
                <h2 className="head">Room Details</h2>
                <p className="list">
                    Stay in a luxurious room with sea view and modern amenities.
                </p>
                <div className="room-selection">
                    <span className="list">Select Room Type: </span>
                    <select
                        id="roomType"
                        value={selectedRoom}
                        onChange={handleRoomChange}
                        className="room-dropdown"
                    >
                        <option value="Single">Single</option>
                        <option value="Double Sharing">Double Sharing</option>
                        <option value="Quad Sharing">Quad Sharing</option>
                    </select>
                </div>
            </div>

            {/* Traveller Details */}
            <div className="traveller-details">
                <h2 className="head">Traveller Details</h2>
                <div className="traveller-input">
                    <label htmlFor="numTourists" className="list">Number of Tourists: </label>
                    <input
                        type="number"
                        id="numTourists"
                        min="1"
                        value={numTourists}
                        onChange={handleNumTouristsChange}
                        className="tourist-input"
                    />
                    <button onClick={handleCheckPrice} className="check-price-button">Check Price</button>
                </div>
                <div className="name-input">
                    <label htmlFor="touristName" className="list">Enter Name: </label>
                    <input
                        type="text"
                        id="touristName"
                        value={currentName}
                        onChange={(e) => setCurrentName(e.target.value)}
                        className="tourist-input"
                    />
                    <button onClick={handleAddTourist} className="add-name-button">Add Name</button>
                </div>
                <ul className="tourist-names">
                    {touristNames.map((name, index) => (
                        <li key={index} className="list">{name}</li>
                    ))}
                </ul>
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

            {/* Final Price */}
            <div className="package-price">
                <h2 className="head">Final Price: ₹{finalPrice}</h2>
                <button onClick={handlePayment} className="pay-now-button">
                    Pay Now
                </button>
            </div>
        </div>
    );
};
