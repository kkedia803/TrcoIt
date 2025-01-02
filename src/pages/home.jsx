import React, { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Travel } from "../components/travel";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
import { Element, scroller } from "react-scroll"; // Import scroller
import "../App.css";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);

    // Scroll to the section based on the hash in the URL (if any)
    const hash = window.location.hash.slice(1); // Remove the '#' character
    if (hash) {
      scroller.scrollTo(hash, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, []);

  useEffect(() => {
    // Listen for hash changes in the URL and scroll to the corresponding section
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        scroller.scrollTo(hash, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div>
      <Navigation />
      <Element name="header">
        <Header data={landingPageData.Header} />
      </Element>
      <Element name="travel">
        <Travel data={landingPageData.Travel} />
      </Element>
      <Element name="features">
        <Features data={landingPageData.Features} />
      </Element>
      <Element name="services">
        <Services data={landingPageData.Services} />
      </Element>
      <Element name="gallery">
        <Gallery data={landingPageData.Gallery} />
      </Element>
      <Element name="testimonials">
        <Testimonials data={landingPageData.Testimonials} />
      </Element>
      <Element name="about">
        <About data={landingPageData.About} />
      </Element>
      <Element name="contact">
        <Contact data={landingPageData.Contact} />
      </Element>
    </div>
  );
};

export default Home;
