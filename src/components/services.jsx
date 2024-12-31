import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center services-parent">
      <div className="services-container">
        <div className="section-title">
          <h2>UPCOMING INTERNATIONAL TRIPS</h2>
          <p>
            
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <img src={d.image} alt={d.title} className="img-int-trips" />
                  <div className="service-desc">
                    <h3 className="int-title">{d.name}</h3>
                    <p className="int-text">{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
