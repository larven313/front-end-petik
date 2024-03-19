import React from "react";
import "./Home.css";
import HeroImage from "../../images/1.png";

const Home = () => {
  return (
    <div className="container-fluid app-nav" style={{ height: "100vh" }}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-white display-4 fw-normal mb-4">
              Awesome{" "}
              <span className="text-warning">
                Final <br /> Project
              </span>{" "}
              Single Page <br />
              Application
            </h1>
            <p className="text-white h-5 fw-normal mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              necessitatibus.
            </p>
            <button className="btn btn-light m-3">Discord</button>
            <button className="btn btn-light">Discover me</button>
          </div>
          <div className="col-md-6">
            <img src={HeroImage} alt="hero-img" className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
