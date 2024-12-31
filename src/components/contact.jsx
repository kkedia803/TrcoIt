import React from "react";

export const Contact = (props) => {


  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="footer">
            <div className="footer-content">
              E-mail - sample@gmail.com
            </div>
            <div className="footer-content">
              Phone Number - 9999999999
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          
        </div>
      </div>
    </div>
  );
};
