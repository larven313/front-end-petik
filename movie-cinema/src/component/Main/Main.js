import AddMovieForm from "../AddMovieForm/AddMovieForm.js";
import Counter from "../Counter/Counter.js";
import Hero from "../Hero/Hero.js";
import Movies from "../Movies/Movies.js";
import User from "../User/User.js";
import "./Main.css";

const Main = () => {
  const datas = [
    {
      nama: "Bambang Pacul",
      member: "Platinum",
      message: "Hello world",
    },
    {
      nama: "Budi",
      member: "Gold",
      message: "Tetap semangat!",
    },
    {
      nama: "Zainal",
      member: "Diamond",
      message: "Jangan menyerah",
    },
    {
      nama: "Vina",
      member: "Gold",
      message: "Pengen tidur",
    },
    {
      nama: "Ucup",
      member: "Non Member",
      message: "Keep smile!",
    },
    {
      nama: "Malik",
      member: "Silver",
    },
    {
      nama: "Azizah",
      member: "Platinum",
    },
    {
      nama: "Agus",
      member: "Non Member",
    },
    {
      nama: "Maryam",
      member: "Diamond",
    },
    {
      nama: "Feri",
      member: "Silver",
    },
  ];

  return (
    <div className="content">
      <Hero />
      <Movies />
      {datas.map((data) => (
        <User
          nama={data.nama}
          member={data.member}
          message={() => alert(data.message)}
        />
      ))}
    </div>
  );
};
export default Main;
