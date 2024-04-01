import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/popular"}>Popular</NavLink>
        </li>
        <li>
          <NavLink to={"/create"}>Create</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
