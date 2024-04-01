import { Component } from "react";
import Header from "./component/Navbar/Navbar.js";
import Car from "./component/Car/Car.js";
import User from "./component/User/User.js";
import Footer from "./component/Footer/Footer.js";
import Main from "./component/Main/Main.js";
import AddMovieForm from "./component/AddMovieForm/AddMovieForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Create from "./pages/movies/Create.js";
import Popular from "./pages/movies/Popular.js";
import Detail from "./pages/movies/Detail.js";

function App() {
  return (
    <div className="container">
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
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
