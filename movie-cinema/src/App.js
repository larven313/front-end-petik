import { Component } from "react";
import Header from "./component/Header.js";
import Car from "./component/Car.js";
import User from "./component/User.js";
import Footer from "./component/Footer.js";
import imgProfile from "./component/man.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <Car
        merk="Ferrari"
        harga={5}
        isNew={true}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
      {/* <User
        nama="Bambang Pacul"
        alamat="Bandung"
        angkatan={10}
        hobi={["Ngoding", "Memancing"]}
        isGraduate={false}
        gambar={imgProfile}
        message={() => alert("Profil nama telah dibuka")}
      />
      <User
        nama="Budi"
        alamat="Bandung"
        angkatan={10}
        hobi={["Memasak", "Bermain bola"]}
        isGraduate={false}
        gambar="https://cdn-icons-png.flaticon.com/512/7718/7718888.png"
        message={() => alert("Profil nama telah dibuka")}
      />
      <User
        nama="Ucup"
        alamat="Sukabumi"
        angkatan={10}
        hobi={["Ngoding", "Memancing"]}
        isGraduate={false}
        gambar="https://cdn-icons-png.freepik.com/256/1077/1077063.png"
        message={() => alert("Profil nama telah dibuka")}
      /> */}
      <Footer nama="Sukma Hidayatullah" />
    </div>
  );
}

export default App;
