import { Component } from "react";
import Header from "./component/Navbar/Navbar.js";
import Car from "./component/Car/Car.js";
import User from "./component/User/User.js";
import Footer from "./component/Footer/Footer.js";
import Main from "./component/Main/Main.js";

function App() {
  return (
    <div className="container">
      <Header />
      {/* <h1>Hello World</h1> */}
      {/* <Car
        merk="Ferrari"
        harga={5}
        isNew={true}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      /> */}
      <Main />
      <Footer nama="Sukma Hidayatullah" />
    </div>
  );
}

export default App;
