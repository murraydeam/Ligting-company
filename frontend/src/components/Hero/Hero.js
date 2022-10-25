import React from "react";
import Container from "@mui/material/Container";

import "./hero.css";

const Hero = () => {
  return (
    <Container
      className="section"
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: 'column', 
        alignItems: "center",
        gap: "8px",
      }}
    >
        <div className="brand">
            <img src="/avo+gap+2.png" alt="image" />
            <img src="chauvet+gap+2.png" alt="image" />
            <img src="/ev+gap+2.png" alt="image" />
            <img src="/x32+gap+2.png" alt="image" />
            <img src="/global+truss+gap+2.png" alt="image" />
            <img src="/martin+gap+2.png" alt="image" />
        </div>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-left-title">
            <h4>Why Purchase from us?</h4>
          </div>
          <div className="hero-left-details">
            <p>
              We believe it's important that everyone gets the right tool for
              the job. We won't pretend we're the only company to buy gear from,
              and we won't be offended if you like to make your purchases from a
              popular online retailer or other private equipment dealer.
            </p>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right-title">
            <h4>Free Consultation</h4>
          </div>
          <div className="hero-right-details">
            <p>
              Today, there is an overwhelming number of choices when it comes to
              choosing equipment. Our team has over a decade of collective
              experience with audio and lighting technology. Whether you're just
              starting out, or if you're a seasoned professional, we're happy to
              try to guide you to choose the best audio and lighting system for
              your project needs.
            </p>
          </div>
          <div className="hero-right-title">
            <h4>Permanent Installation</h4>
          </div>
          <div className="hero-right-details">
            <p>
              Deciding what equipment you want is not the only step, and knowing
              what you need does not necessarily mean you know how to use the
              equipment. We're here to assist any client who may lack the
              technical skill to deploy their equipment in their club, venue, or
              other AV installation space. From integrating the gear into your
              room, to training your staff, we can help see your vision through.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
