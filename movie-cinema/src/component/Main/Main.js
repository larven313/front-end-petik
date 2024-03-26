import User from "../User/User.js";
import "./Main.css";

const Main = () => {
  return (
    <div className="content">
      <User nama="Bambang Pacul" member="Platinum" />
      <User nama="Budi" member="Gold" />
      <User nama="Zainal" member="Diamond" />
      <User nama="Vina" member="Gold" />
      <User nama="Ucup" member="Non Member" />
      <User nama="Malik" member="Silver" />
      <User nama="Azizah" member="Platinum" />
      <User nama="Agus" member="Non Member" />
      <User nama="Maryam" member="Diamond" />
      <User nama="Feri" member="Silver" />
    </div>
  );
};
export default Main;
