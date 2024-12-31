import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="feature-container">
        <div className="col-md-10 col-md-offset-1 section-title margin-top ">
          <h2>UPCOMING BACKPACK TRIPS</h2>
        </div>
        <div className="row img-flex" >
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3 pointer">
                  <img src={d.image} alt={d.title} className="img-trips" />
                  <h3 className="backpack-title">{d.title}</h3>
                  <p className="backpack-text">{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
