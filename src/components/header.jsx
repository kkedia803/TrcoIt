import React, { useState, useEffect } from "react";

export const Header = (props) => {
  const images = [
    "https://roshankashmir.net/wp-content/uploads/2024/01/snow.jpg",
    "https://images.pexels.com/photos/18526645/pexels-photo-18526645/free-photo-of-scenic-cityscape-of-udaipur-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://static.toiimg.com/photo/msid-81276232,width-96,height-65.cms",
    "https://wallpapers.com/images/hd/goa-beach-pictures-bupttib2urrrgkol.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <header id="header bg2">
      <div
        className="intro bg"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p></p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
