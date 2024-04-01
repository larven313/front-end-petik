import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Movies from "../component/Movies/Movies";
import Footer from "../component/Footer/Footer";
import Main from "../component/Main/Main";

const Home = () => {
  return (
    <div
      style={{
        padding: -10,
        marginTop: -50,
        marginBottom: -50,
        marginLeft: -92,
        marginRight: -90,
      }}
    >
      <Navbar />
      <Main />
      <Footer nama="Sukma Hidayatullah" />
    </div>
  );
};

export default Home;
