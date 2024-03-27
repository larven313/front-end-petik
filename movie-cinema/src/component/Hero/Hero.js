import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div class="container">
        <section class="hero">
          <div class="hero-left">
            <h2 class="hero-title">Title</h2>
            <h3 class="hero-genre">Genre : </h3>
            <p class="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              nobis dolore animi consequatur qui nesciunt veniam delectus
              incidunt ut. Provident harum incidunt commodi quis sequi.
            </p>
            <p className="hero-button">Watch</p>
          </div>
          <div class="hero-right">
            <img
              src="https://picsum.photos/200"
              alt="hero-img"
              className="hero-image"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
