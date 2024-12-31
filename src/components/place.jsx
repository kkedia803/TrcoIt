import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// import "./Place.css"; 

export const Place = () => {
    const { title } = useParams();

    const navigate = useNavigate();

    const handleBlockClick = (title) => {
        navigate(`/booking/${title}/details`);
    };

    // Sample data for packages
    const packages = [
        {
            destination: "Manali",
            packages: [
                {
                    photo: "https://image.kesari.in/upload/H3/paragliding-in-solang.jpg",
                    name: "Snow Adventure",
                    seller: "TravelGuru",
                    description: "Experience the thrill of snow-covered peaks with activities like skiing and snowboarding.",
                    price: "₹12,000",
                    rating: 4
                },
                {
                    photo: "https://content.skyscnr.com/available/1647403536/1647403536_WxH.jpg",
                    name: "Luxury Stay",
                    seller: "Luxury Tours",
                    description: "A luxurious 3-night stay at a resort nestled in the mountains, complete with spa services.",
                    price: "₹25,000",
                    rating: 5
                },
                {
                    photo: "https://www.advenchar.com/wp-content/uploads/2019/05/Hampta-Pass-Trek-7-1.jpg",
                    name: "Trekking Expedition",
                    seller: "MountainQuest",
                    description: "A 2-day guided trek to Beas Kund with campfire and storytelling sessions.",
                    price: "₹8,000",
                    rating: 4
                },
                {
                    photo: "https://www.adventurush.com/wp-content/uploads/2022/07/3-16.jpg",
                    name: "River Rafting",
                    seller: "AquaAdventures",
                    description: "Enjoy white water rafting in the Beas River with professional guides.",
                    price: "₹6,500",
                    rating: 4
                },
                {
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZV2iSY6QOCC3u629ibl_aoPcEV5ApowZMw&s",
                    name: "Romantic Getaway",
                    seller: "LoveNest Travels",
                    description: "A romantic package featuring candlelight dinners, couple spa, and scenic drives.",
                    price: "₹20,000",
                    rating: 5
                },
            ],
        },
        {
            destination: "Kerala",
            packages: [
                {
                    photo: "https://www.tripsavvy.com/thmb/UoylMLyzOBPdDp34ForEiJd9m3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-522478216-5ab12c4e3de4230036949cee.jpg",
                    name: "Backwater Cruise",
                    seller: "Houseboat Holidays",
                    description: "A serene houseboat stay in Alleppey backwaters with authentic Kerala cuisine.",
                    price: "₹30,000",
                    rating: 5
                },
                {
                    photo: "https://somatheeram-c3c5.kxcdn.com/wp-content/uploads/2017/10/Somatheeram-housing-Kerala-Standard-Unit-G1-min-2-768x512.jpg",
                    name: "Ayurvedic Spa",
                    seller: "Wellness Retreats",
                    description: "Experience rejuvenating Ayurvedic therapies in the heart of Kerala.",
                    price: "₹18,000",
                    rating: 4
                },
                {
                    photo: "https://www.seawatersports.com/images/activies/slide/wildlife-safari-in-kerala-price.jpg",
                    name: "Wildlife Safari",
                    seller: "NatureTrails",
                    description: "Explore Kerala's rich wildlife and forests with an exciting safari tour.",
                    price: "₹12,000",
                    rating: 5
                },
                {
                    photo: "https://english.mathrubhumi.com/image/contentid/policy:1.9802414:1723284414/Untitled%20design%20(8).jpg?$p=d016276&f=4x3&w=1080&q=0.8",
                    name: "Beach Resort Stay",
                    seller: "Coastal Getaways",
                    description: "Relax at a luxurious beach resort in Varkala, perfect for unwinding and exploring the coast.",
                    price: "₹22,000",
                    rating: 4
                },
            ],
        },
        {
            destination: "Goa",
            packages: [
                {
                    photo: "https://www.livemint.com/lm-img/img/2024/12/30/600x338/where_to_eat_in_goa_after_partying_1735548808689_1735548815198.jpg",
                    name: "Beach Paradise",
                    seller: "GoaEscape",
                    description: "Relax and unwind at serene beaches in North Goa.",
                    price: "₹15,000",
                    rating: 5
                },
                {
                    photo: "https://media.timeout.com/images/105254975/750/562/image.jpg",
                    name: "Party Weekend",
                    seller: "FunVibes",
                    description: "Enjoy the best party spots in Goa and dance the night away.",
                    price: "₹10,000",
                    rating: 4
                },
                {
                    photo: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190416173720/Basilica-of-Bom-Jesus-Goa-1024x682.jpg",
                    name: "Heritage Tour",
                    seller: "CultureTrips",
                    description: "Explore the rich cultural heritage of Goa through its churches and forts.",
                    price: "₹18,000",
                    rating: 5
                },
                {
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJupRqbZRxBYfvjkojJCHC1L_1bJhXaqxhw&s",
                    name: "Water Sports Adventure",
                    seller: "Aqua Adventures",
                    description: "Indulge in thrilling water sports like parasailing and jet skiing in South Goa.",
                    price: "₹12,000",
                    rating: 4
                },
            ],
        },
        {
            destination: "Jaipur",
            packages: [
                {
                    photo: "https://pinkcity.jaipurmcheritage.org/Images/slider/6.jpg",
                    name: "Royal Palace Tour",
                    seller: "Heritage Tours",
                    description: "Explore the majestic Amber Fort and City Palace in Jaipur.",
                    price: "₹10,000",
                    rating: 5
                },
                {
                    photo: "https://indiathrills.com/wp-content/uploads/2020/07/Camel-Safari-In-Rajasthan-1280.jpg",
                    name: "Desert Safari",
                    seller: "Rajasthan Expeditions",
                    description: "Experience the thrill of a jeep safari through the Thar Desert.",
                    price: "₹8,000",
                    rating: 4,
                },
                {
                    photo: "https://www.andbeyond.com/wp-content/uploads/sites/5/jaipur-city-walk.jpg",
                    name: "Cultural Tour",
                    seller: "Jaipur Journeys",
                    description: "Discover the cultural heritage of Jaipur through its colorful markets and historical sites.",
                    price: "₹12,000",
                    rating: 5
                },
            ],
        },
    ];

    function renderStars(rating) {
        const totalStars = 5;
        return (
            <span className="stars">
                {Array.from({ length: totalStars }, (_, i) => (
                    <span key={i} className={i < rating ? 'filled-star' : 'empty-star'}>
                        ★
                    </span>
                ))}
            </span>
        );
    }

    // Find packages for the selected destination
    const selectedPackages = packages.find((pkg) => pkg.destination.toLowerCase() === title.toLowerCase());

    return (
        <div className="place-container">
            <h1 className="placeTitle">{title}</h1>
            <div className="packages">
                {selectedPackages ? (
                    selectedPackages.packages.map((pkg, index) => (
                        <div key={index} className="package-row" onClick={()=>handleBlockClick(title)}>
                            <img src={pkg.photo} alt={pkg.name} className="package-photo" />
                            <div className="package-details">
                                <h3 className="pkgName">{pkg.name}</h3>
                                <p className="seller"><strong>Seller:</strong> {pkg.seller}</p>
                                <p className="review">
                                    <strong>Seller Review:</strong> {renderStars(pkg.rating)}
                                </p>
                                <p className="desc">{pkg.description}</p>
                                <p className="price"><strong>Price:</strong> {pkg.price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No packages available for {title}</p>
                )}
            </div>
        </div>
    );
};
