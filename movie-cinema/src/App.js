import { Component } from "react";
import Header from "./component/Navbar/Navbar.js";
import Car from "./component/Car/Car.js";
import User from "./component/User/User.js";
import Footer from "./component/Footer/Footer.js";
import Main from "./component/Main/Main.js";
import AddMovieForm from "./component/AddMovieForm/AddMovieForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Navbar from "./component/Navbar/Navbar.js";
import Popular from "./pages/movie/Popular.js";
import TopRated from "./pages/movie/TopRated.js";
import Detail from "./pages/movie/Detail.js";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Header /> */}
      {/* <h1>Hello World</h1> */}
      {/* <Car
        merk="Ferrari"
        harga={5}
        isNew={true}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      /> */}
      {/* <Main />

      <Footer nama="Sukma Hidayatullah" /> */}
    </div>
  );
}

export default App;
