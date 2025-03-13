import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// import "./Place.css"; 

export const Place = () => {
    // State to track which dropdown is open
    const [openDropdown, setOpenDropdown] = useState(null);
    // State to track active category
    const [activeCategory, setActiveCategory] = useState("For you");

    const touristPlaces = {
        Manali: "Solang Valley, Hadimba Temple, Old Manali, Manikaran",
        Goa: "Agonda Beach, Dudhsagar Falls, Candolim Beach, South Goa",
        Kerala: "Munnar, Thekkady, Marari Beach, Varkala",
        Jaipur: "Hawa Mahal, Jantar Mantar, Jal Mahal, Jaigarh Fort"
    }

    const briefItinerary = {
        Manali: "2D-Manali, 1D-Kullu, 2D-Kasol",
        Goa: "2D-North Goa, 2D-South Goa, 1D-Panjim",
        Kerala: "2D-Varkala, 1D-Munnar, 2D-Beaches",
        Jaipur: "1D-City, 2D-Desert, 2D-Mahals" 
    }

    const { title } = useParams();
    const navigate = useNavigate();

    const handleBlockClick = (title) => {
        navigate(`/booking/${title}/details`);
    };

    // Toggle dropdown visibility
    const toggleDropdown = (dropdownName) => {
        if (openDropdown === dropdownName) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(dropdownName);
        }
    };

    // Handle category click
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
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
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "Experience the thrill of snow-covered peaks with activities like skiing and snowboarding.",
                    price: "₹12,000",
                    rating: 4,
                    slots: 25
                },
                {
                    photo: "https://content.skyscnr.com/available/1647403536/1647403536_WxH.jpg",
                    name: "Luxury Stay",
                    seller: "Luxury Tours",
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "A luxurious 3-night stay at a resort nestled in the mountains, complete with spa services.",
                    price: "₹25,000",
                    rating: 5,
                    slots: 20
                },
                {
                    photo: "https://www.advenchar.com/wp-content/uploads/2019/05/Hampta-Pass-Trek-7-1.jpg",
                    name: "Trekking Expedition",
                    seller: "MountainQuest",
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "A 2-day guided trek to Beas Kund with campfire and storytelling sessions.",
                    price: "₹8,000",
                    rating: 4,
                    slots: 19
                },
                {
                    photo: "https://www.adventurush.com/wp-content/uploads/2022/07/3-16.jpg",
                    name: "River Rafting",
                    seller: "AquaAdventures",
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "Enjoy white water rafting in the Beas River with professional guides.",
                    price: "₹6,500",
                    rating: 4,
                    slots: 25
                },
                {
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZV2iSY6QOCC3u629ibl_aoPcEV5ApowZMw&s",
                    name: "Romantic Getaway",
                    seller: "LoveNest Travels",
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "A romantic package featuring candlelight dinners, couple spa, and scenic drives.",
                    price: "₹20,000",
                    rating: 5,
                    slots: 15
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
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "A serene houseboat stay in Alleppey backwaters with authentic Kerala cuisine.",
                    price: "₹30,000",
                    rating: 5,
                    slots: 10
                },
                {
                    photo: "https://somatheeram-c3c5.kxcdn.com/wp-content/uploads/2017/10/Somatheeram-housing-Kerala-Standard-Unit-G1-min-2-768x512.jpg",
                    name: "Ayurvedic Spa",
                    seller: "Wellness Retreats",
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "Experience rejuvenating Ayurvedic therapies in the heart of Kerala.",
                    price: "₹18,000",
                    rating: 4,
                    slots: 5
                },
                {
                    photo: "https://www.seawatersports.com/images/activies/slide/wildlife-safari-in-kerala-price.jpg",
                    name: "Wildlife Safari",
                    seller: "NatureTrails",
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "Explore Kerala's rich wildlife and forests with an exciting safari tour.",
                    price: "₹12,000",
                    rating: 5,
                    slots: 25
                },
                {
                    photo: "https://english.mathrubhumi.com/image/contentid/policy:1.9802414:1723284414/Untitled%20design%20(8).jpg?$p=d016276&f=4x3&w=1080&q=0.8",
                    name: "Beach Resort Stay",
                    seller: "Coastal Getaways",
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "Relax at a luxurious beach resort in Varkala, perfect for unwinding and exploring the coast.",
                    price: "₹22,000",
                    rating: 4,
                    slots: 19
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
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "Relax and unwind at serene beaches in North Goa.",
                    price: "₹15,000",
                    rating: 5,
                    slots: 11
                },
                {
                    photo: "https://media.timeout.com/images/105254975/750/562/image.jpg",
                    name: "Party Weekend",
                    seller: "FunVibes",
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "Enjoy the best party spots in Goa and dance the night away.",
                    price: "₹10,000",
                    rating: 4,
                    slots: 7
                },
                {
                    photo: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190416173720/Basilica-of-Bom-Jesus-Goa-1024x682.jpg",
                    name: "Heritage Tour",
                    seller: "CultureTrips",
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "Explore the rich cultural heritage of Goa through its churches and forts.",
                    price: "₹18,000",
                    rating: 5,
                    slots: 25
                },
                {
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJupRqbZRxBYfvjkojJCHC1L_1bJhXaqxhw&s",
                    name: "Water Sports Adventure",
                    seller: "Aqua Adventures",
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "Indulge in thrilling water sports like parasailing and jet skiing in South Goa.",
                    price: "₹12,000",
                    rating: 4,
                    slots: 3
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
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "Explore the majestic Amber Fort and City Palace in Jaipur.",
                    price: "₹10,000",
                    rating: 5,
                    slots: 16
                },
                {
                    photo: "https://indiathrills.com/wp-content/uploads/2020/07/Camel-Safari-In-Rajasthan-1280.jpg",
                    name: "Desert Safari",
                    seller: "Rajasthan Expeditions",
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "Experience the thrill of a jeep safari through the Thar Desert.",
                    price: "₹8,000",
                    rating: 4,
                    slots: 20
                },
                {
                    photo: "https://www.andbeyond.com/wp-content/uploads/sites/5/jaipur-city-walk.jpg",
                    name: "Cultural Tour",
                    seller: "Jaipur Journeys",
                    spots: touristPlaces[title],
                    brief: briefItinerary[title],
                    description: "Discover the cultural heritage of Jaipur through its colorful markets and historical sites.",
                    price: "₹12,000",
                    rating: 5,
                    slots: 25
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

    // Categories for navigation
    const categories = ["For you", "Bestsellers", "Deals", "New Trips", "Most Travelled", "Backpack Trips"];

    // Filter options
    const filterOptions = {
        "Price (₹)": ["Under ₹5,000", "₹5,000-₹10,000", "₹10,000-₹20,000", "Over ₹20,000"],
        "Brand": ["TravelGuru", "Luxury Tours", "MountainQuest", "AquaAdventures", "LoveNest Travels"],
        "Sellerr": ["Option 1", "Option 2", "Option 3"],
        "Slots": ["Option 1", "Option 2", "Option 3"],
        "Hotels": ["Option 1", "Option 2", "Option 3"],
        "Duration": ["Option 1", "Option 2", "Option 3"],
    };

    // First row of filters
    const firstRowFilters = [
        "Price (₹)", 
        "Rating", 
        "Brand", 
        "Seller", 
        "Slots", 
        "Hotels", 
        "Duration", 
    ];

    // Second row of filters
    const secondRowFilters = [
        // "Wireless Network Technology", 
        // "Ram Memory Installed", 
        // "Special Features", 
        // "Resolution", 
        // "Plug_Type", 
        // "Sensor Resolution", 
        // "Form Factor", 
        // "Battery Capacity"
    ];

    return (
        <div className="place-container">
            {/* Filter Component */}
            <div className="filter-container" style={{ 
                marginBottom: '20px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: '#fff'
            }}>
                {/* Category Navigation */}
                <div className="category-nav" style={{ 
                    display: 'flex', 
                    borderBottom: '1px solid #e0e0e0',
                    paddingBottom: '10px',
                    marginBottom: '15px',
                    overflowX: 'auto',
                    whiteSpace: 'nowrap'
                }}>
                    {categories.map((category) => (
                        <div 
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            style={{ 
                                color: activeCategory === category ? '#008296' : '#555', 
                                fontWeight: activeCategory === category ? 'bold' : 'normal', 
                                marginRight: '30px',
                                borderBottom: activeCategory === category ? '3px solid #008296' : 'none',
                                paddingBottom: '5px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                position: 'relative'
                            }}
                        >
                            {category}
                        </div>
                    ))}
                </div>

                {/* Filter Dropdowns - First Row */}
                <div className="filter-dropdowns" style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '10px'
                }}>
                    {firstRowFilters.map((filter) => (
                        filter === "Rating" ? (
                            <div 
                                key={filter}
                                className="filter-dropdown" 
                                onClick={() => toggleDropdown(filter)}
                                style={{
                                    ...dropdownStyle,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    backgroundColor: openDropdown === filter ? '#f0f8ff' : '#f8f8f8',
                                    borderColor: openDropdown === filter ? '#008296' : '#ccc',
                                    position: 'relative'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: '#FFA41C' }}>★★★★</span>
                                    <span style={{ color: '#ccc' }}>★</span>
                                    <span style={{ marginLeft: '5px' }}>and up</span>
                                </div>
                                <span>{openDropdown === filter ? '▲' : '▼'}</span>
                                
                                {/* Dropdown content */}
                                {openDropdown === filter && (
                                    <div style={dropdownContentStyle}>
                                        <div style={dropdownItemStyle}>
                                            <span style={{ color: '#FFA41C' }}>★★★★★</span> 5 Stars
                                        </div>
                                        <div style={dropdownItemStyle}>
                                            <span style={{ color: '#FFA41C' }}>★★★★</span><span style={{ color: '#ccc' }}>★</span> 4 Stars & Up
                                        </div>
                                        <div style={dropdownItemStyle}>
                                            <span style={{ color: '#FFA41C' }}>★★★</span><span style={{ color: '#ccc' }}>★★</span> 3 Stars & Up
                                        </div>
                                        <div style={dropdownItemStyle}>
                                            <span style={{ color: '#FFA41C' }}>★★</span><span style={{ color: '#ccc' }}>★★★</span> 2 Stars & Up
                                        </div>
                                        <div style={dropdownItemStyle}>
                                            <span style={{ color: '#FFA41C' }}>★</span><span style={{ color: '#ccc' }}>★★★★</span> 1 Star & Up
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div 
                                key={filter}
                                className="filter-dropdown" 
                                onClick={() => toggleDropdown(filter)}
                                style={{
                                    ...dropdownStyle,
                                    backgroundColor: openDropdown === filter ? '#f0f8ff' : '#f8f8f8',
                                    borderColor: openDropdown === filter ? '#008296' : '#ccc',
                                    position: 'relative'
                                }}
                            >
                                {filter} <span style={{ float: 'right' }}>{openDropdown === filter ? '▲' : '▼'}</span>
                                
                                {/* Dropdown content */}
                                {openDropdown === filter && (
                                    <div style={dropdownContentStyle}>
                                        {filterOptions[filter]?.map((option, index) => (
                                            <div key={index} style={dropdownItemStyle}>
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    ))}
                </div>

                {/* Filter Dropdowns - Second Row */}
                <div className="filter-dropdowns" style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap',
                    gap: '10px'
                }}>
                    {secondRowFilters.map((filter) => (
                        <div 
                            key={filter}
                            className="filter-dropdown" 
                            onClick={() => toggleDropdown(filter)}
                            style={{
                                ...dropdownStyle,
                                backgroundColor: openDropdown === filter ? '#f0f8ff' : '#f8f8f8',
                                borderColor: openDropdown === filter ? '#008296' : '#ccc',
                                position: 'relative'
                            }}
                        >
                            {filter.length > 20 ? `${filter.substring(0, 18)}...` : filter} 
                            <span style={{ float: 'right' }}>{openDropdown === filter ? '▲' : '▼'}</span>
                            
                            {/* Dropdown content */}
                            {openDropdown === filter && (
                                <div style={dropdownContentStyle}>
                                    {filterOptions[filter]?.map((option, index) => (
                                        <div key={index} style={dropdownItemStyle}>
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <h1 className="placeTitle">{title}</h1>
            <div className="packages">
                {selectedPackages ? (
                    selectedPackages.packages.map((pkg, index) => (
                        <div key={index} className="package-row" onClick={() => handleBlockClick(title)}>
                            <img src={pkg.photo} alt={pkg.name} className="package-photo" />
                            <div className="package-details">
                                <h3 className="pkgName">{pkg.name}</h3>
                                <p className="seller"><strong>Seller:</strong> {pkg.seller}</p>
                                <p className="seller"><strong>Spots:</strong> {pkg.spots}</p>
                                <p className="seller"><strong>Brief Itinerary:</strong> {pkg.brief}</p>
                                <p className="review">
                                    <strong>Seller Review:</strong><span className="stars">{renderStars(pkg.rating)} <span style={{fontWeight:"bold", color:"rgb(155, 153, 4)"}}>(859)</span></span>
                                </p>
                                <p className="desc">{pkg.description}</p>
                                <p className="price"><strong>Price:</strong> <span className="price">{pkg.price}</span></p>
                                <p className="review"><strong>Slots Left:</strong> <span className="slots">{pkg.slots}</span></p>
                                
                                {/* Bookings highlight */}
                                <p style={{
                                    backgroundColor: "rgba(76, 175, 80, 0.15)", 
                                    padding: "6px 10px",
                                    borderRadius: "4px",
                                    marginTop: "10px",
                                    display: "inline-block",
                                    fontWeight: "bold",
                                    color: "#2e7d32",
                                    border: "1px solid rgba(76, 175, 80, 0.3)"
                                }}>
                                    🔥 569+ bookings in last 3 months
                                </p>
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

// Dropdown style object to avoid repetition
const dropdownStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '8px 12px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#f8f8f8',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    userSelect: 'none',
    ':hover': {
        borderColor: '#008296',
    }
};

// Dropdown content style
const dropdownContentStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    zIndex: 10,
    backgroundColor: '#fff',
    minWidth: '200px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    marginTop: '5px',
    padding: '8px 0',
    border: '1px solid #eee'
};

// Dropdown item style
const dropdownItemStyle = {
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.2s',
    ':hover': {
        backgroundColor: '#f5f5f5'
    }
};
